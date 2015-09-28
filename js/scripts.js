$(document).ready(function(){
     $('#womenlink').click(function(){
          $('.topimage1').attr('src', 'images/titlepage_top.png');
     });
     $('#womenlink').click(function(){
          $('.bottomimage1').attr('src', 'images/titlepage_bottom.png');
     });
    //  $('#womenlink').click(function(){
    //       $('#headlineinfo').attr('src', 'images/titlepage_bottom.png');
    //  });

     $('#womenlink').click(function(){
       $('#headlineinfo').hide();
       $('#newtexthere').show();
     })
     $('#womenlink').click(function(){
       $('#womenlink').hide();
       $('#womentext').show();
     })
});

jQuery(function($) {
	var open = false;
	$('#footerSlideButton').click(function() {
		if(open === false) {
			$('#footerSlideContent').animate({ height: '30%' });
			open = true;
		} else {
			$('#footerSlideContent').animate({ height: '0px' });
			open = false;
		}
	});
});
