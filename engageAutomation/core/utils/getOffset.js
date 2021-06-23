'use strict';
//get position of element
exports.getOffset = function (selector) {

   var offset = browser.execute((selector) => {

	var element = document.querySelector(selector)
	const position = element.getBoundingClientRect();
	var msg;

	if (
		position.top >= 0 &&
		position.left >= 0 &&
		position.right <= (window.innerWidth || document.documentElement.clientWidth) &&
		position.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	) {
		msg = 'In the viewport!';
	} else {
		msg = 'Not in the viewport!';
	}

	return {
		x: Math.round(position.left + position.width/2),
		y: Math.round(position.top + position.height/2 +56),

		viewportmsg : msg
	  };

	}, selector)

	logger.logInto(stackTrace.get(),offset);
	return offset;
}
