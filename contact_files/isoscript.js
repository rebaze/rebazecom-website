           $(function() {

                $('ul.nav a').bind('click',function(event){
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top-125
                    }, 1000);

                    event.preventDefault();
                });
            });
			
            $(function() {

                $('.goToTop').bind('click',function(event){
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top-125
                    }, 1000);

                    event.preventDefault();
                });
            });
	  $(function() {

                $('p.nav a').bind('click',function(event){
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top-1
                    }, 1000);

                    event.preventDefault();
                });
            });
			
            $(function() {

                $('.goToTop').bind('click',function(event){
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top-125
                    }, 1000);

                    event.preventDefault();
                });
            });
            
           
	
    $(function(){
        $('.slide-out-div2').tabSlideOut({
            tabHandle: '.handle2',
            pathToTabImage: '/storage/pullOuts/Social_pull_out2.png',
            imageHeight: '65px',
            imageWidth: '55px',
            tabLocation: 'left',
            speed: 300,
            action: 'hover',
            topPos: '350px',
            leftPos: '200px',
            fixedPosition: true
        });

    });


