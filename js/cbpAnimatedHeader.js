var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-fixed-top' ),
		headerLogo = document.querySelector( '.navbar-brand' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$('.navbar-fixed-top').addClass('navbar-shrink');
			headerLogo.style.visibility = 'visible';
		}
		else {
			$('.navbar-fixed-top').removeClass('navbar-shrink');
			if (!(window.location.href.indexOf("blog") > -1)) {
				headerLogo.style.visibility = 'hidden';
			}
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();