"use strict";

module.exports = {

	
	launchUrl: async function () {
		await browser.url(appUrl);
		await logger.logInto(stackTrace.get(), "appURL:" + appUrl);
		/*if (global.maximizeWindow == true && global.view == 'desktop') { //this will cause browser to maximize on the client screen resolution
			browser.maximizeWindow();
			global.resolution = browser.getWindowSize();
		}
		else if (global.resolution.width != undefined && global.resolution.height != undefined) {
			browser.setWindowSize(parseInt(global.resolution.width), parseInt(global.resolution.height));
		}*/
		/*else { // currently this command is not working for mobile devices
			global.resolution = browser.getWindowSize();			
		}*/
	}
}