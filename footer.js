var footerStatus = 'shown';
var hideDelay = 1000;


/* Full opacity */
function showFooter() {
    // show footer if it is NOT already shown
	if (footerStatus!=='shown'){
		adjustFooterOpacity('fast', 1);
		footerStatus = 'shown';
	}
	$(window).bind('scroll', checkScroll);
};

/* Low opacity */
function hideFooter() {
	
	// hide footer if it is NOT already hidden
	if (footerStatus!=='hide'){
		adjustFooterOpacity('fast', 0.2);
		footerStatus = 'hide';
	}
	$(window).bind('scroll', checkScroll);
};

function adjustFooterOpacity(duration, opacity){
	// execute when footer exists
	if (!$.isEmptyObject($('.sticky-footer').eq(0))){
			$('.sticky-footer').fadeTo(duration, opacity);
	}
}

function checkScroll(){
	
	// Scroll to the page bottom 
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 80){	
		$(window).unbind('scroll');
		showFooter();
	}
	else {
		$(window).unbind('scroll');
		hideFooter();
	}
};

function updateFooterByDocHeight(){

    // Fade footer ONLY when content is longer than window  
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight){
        console.log('scrollable');
        hideFooter();        
    }
    else {
        console.log('NOT scrollable');
        showFooter();
    }
    $(window).scroll(checkScroll);
}


$(document).ready(function() {
    // You can set a delay of hiding the footer here 
	setTimeout(updateFooterByDocHeight(), hideDelay);

	// set up demo buttons
	$('.btn-long-page').click(function(){
		$('.container').css("height", "1000px");
		updateFooterByDocHeight();

	});

	$('.btn-short-page').click(function(){
		$('.container').css("height", "auto");
		updateFooterByDocHeight();
	});
});
		
