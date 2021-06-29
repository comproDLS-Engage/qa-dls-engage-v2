"use strict";
module.exports = {

	launchUrl: function (testdata) {
		// if(!argv.deviceName){browser.setWindowSize(360,720);}
		browser.url(appUrl);

		logger.logInto(stackTrace.get(), "appURL:" + appUrl);
			
		}
	

}