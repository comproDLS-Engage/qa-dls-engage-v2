"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	//launch_btn: selectorFile.css.testbench.launchbtn,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		let pageStatus = action.waitForDisplayed(this.launch_btn);
		res = this.getData();
		res.pageStatus = pageStatus;
		return res;
	},

	getData: function () {
		var obj = {
			launch: action.getText(this.launch_btn),
		};
		return obj;
	},

	clickLaunch: function () {
		logger.logInto(stackTrace.get());
		//res = action.click(this.launch_btn);
		if (true == res) {
		}
		else {
			res = res + " -- Error in clicking signup_btn";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	}
};