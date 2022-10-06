/*
Author       : Themes_oceans
Template Name: Hino - Multipurpose Business HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() {  
			$('.spinner').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
		

		/*START MENU JS*/		
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "+",
			closedSymbol: "-" 	
		});			

			if ($(window).scrollTop() > 200) {
			  $('.fixed-top').addClass('menu-bg');
		  } else {
			  $('.fixed-top').removeClass('menu-bg');
		  }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/	

		/*START HOME SLIDER JS*/	
		jQuery("#home-slider").flexslider({
			directionNav: false,
			controlnav: true,
		});
		/*END HOME SLIDER JS*/	
		
		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/
		
		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/	
		

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */			
		
		/* START PORTFOLIO JS */
		 $("#sp-slider").owlCarousel({
				items:3,
				itemsDesktop:[1199,3],
				itemsDesktopSmall:[979,2],
				itemsTablet:[768,2],
				itemsMobile:[600,1],
				pagination: false,
				navigation:true,
				navigationText:["",""],
				slideSpeed:1000,
				autoPlay:false
			});
		/* END PORTFOLIO JS */				
		
		/*START TESTIMONIAL JS*/	
		$('.testimonial1-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			nextArrow: '<i class="fa fa-chevron-right next"></i>',
			prevArrow: '<i class="fa fa-chevron-left prev"></i>',
			dots: true,
			fade: false,
			autoplay: true,
			autoplaySpeed: 2000,
		});
		/*END TESTIMONIAL JS*/	
		
		$('.player').mb_YTPlayer();				
		
	}); 			
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */		
	
})(jQuery);


  

