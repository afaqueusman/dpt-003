var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	var header = $('body');

	var backgrounds = new Array(
	    'url(img/parallax.jpg)'
	  , 'url(img/parallax_2.jpg)'
	  , 'url(img/parallax_3.jpg)'
	  , 'url(img/parallax_4.jpg)'
	);

	var current = 0;

	function nextBackground() {
	    current++;
	    current = current % backgrounds.length;
	    header.css('parallax', backgrounds[current]);
	}
	setInterval(nextBackground, 1000);

	header.css('parallax', backgrounds[0]);

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();