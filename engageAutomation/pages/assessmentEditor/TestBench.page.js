"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	//launch_btn: selectorFile.css.testbench.launchbtn,

	isInitialized: async function () {
		await logger.logInto(stackTrace.get());
		await action.waitForDocumentLoad();
		let pageStatus = await action.waitForDisplayed(this.launch_btn);
		res = await this.getData();
		res.pageStatus = pageStatus;
		return res;
	},

	getData: async function () {
		var obj = {
			launch: await action.getText(this.launch_btn),
		};
		return obj;
	},

	clickLaunch: async function () {
		await logger.logInto(stackTrace.get());
		//res = action.click(this.launch_btn);
		if (true == res) {
		}
		else {
			res = res + " -- Error in clicking signup_btn";
			await logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	}
};