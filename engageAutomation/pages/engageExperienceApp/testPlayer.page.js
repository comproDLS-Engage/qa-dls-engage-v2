"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, itemplayerPage;

module.exports = {

	//player_header: selectorFile.css.ComproEngage.testPlayer.player_header,
	next_btn: selectorFile.css.ComproEngage.testPlayer.next_btn,
	previous_btn: selectorFile.css.ComproEngage.testPlayer.previous_btn,
	finish_btn: selectorFile.css.ComproEngage.testPlayer.finish_btn,
	checkMyWork_btn: selectorFile.css.ComproEngage.testPlayer.checkMyWork_btn,
	tryAgain_btn: selectorFile.css.ComproEngage.testPlayer.tryAgain_btn,
	reset_btn: selectorFile.css.ComproEngage.testPlayer.reset_btn,
	showAnswer_btn: selectorFile.css.ComproEngage.testPlayer.showAnswer_btn,
	yourResponse_btn: selectorFile.css.ComproEngage.testPlayer.yourResponse_btn,
	feedbackText: selectorFile.css.ComproEngage.testPlayer.feedback_txt,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForDocumentLoad();
		if (res == true) {
			res = this.getTestplayerInfo();
		}
		else {
			res = res + " -- TestPlayer page is not loaded yet";
			logger.logInto(stackTrace.get(), res, "error");
		}
		return res;
	},

	getTestplayerInfo: function () {
		let insideFrame = this.enterFrame(this.next_btn);
		var testplayerInfo = {
			checkmyWork_isExists: action.getElementCount(this.checkMyWork_btn) == 1 ? true : false,
			checkmyWork_isDisabled: (action.getElementCount(this.checkMyWork_btn) == 1) ? action.getAttribute(this.checkMyWork_btn, 'disabled') : false,
			tryAgain_isExists: action.getElementCount(this.tryAgain_btn) == 1 ? true : false,
			tryAgain_isDisabled: (action.getElementCount(this.tryAgain_btn) == 1) ? action.getAttribute(this.tryAgain_btn, 'disabled') : false,
			reset_isExists: action.getElementCount(this.reset_btn) == 1 ? true : false,
			reset_isDisabled: (action.getElementCount(this.reset_btn) == 1) ? action.getAttribute(this.reset_btn, 'disabled') : false,
			previous_isExists: action.getElementCount(this.previous_btn) == 1 ? true : false,
			previous_isDisabled: (action.getElementCount(this.previous_btn) == 1) ? action.getAttribute(this.previous_btn, 'disabled') : false,
			next_isExists: action.getElementCount(this.next_btn) == 1 ? true : false,
			next_isDisabled: (action.getElementCount(this.next_btn) == 1) ? action.getAttribute(this.next_btn, 'disabled') : false,
			activeQues: "",
			totalQues: "",
		};
		if (insideFrame)
			action.switchToParentFrame();
		var quesInfo = this.getQuesInfo();
		testplayerInfo.activeQues = quesInfo.activeQues;
		return testplayerInfo;
	},

	click_CheckMyWork: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.checkMyWork_btn);
		res = action.click(this.checkMyWork_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- CheckmyWork Button is clicked");
			//itemplayerPage = require('./itemPlayer.page.js');
			//console.log("before item initialize...")
			//res = itemplayerPage.isInitialized();
			//console.log("after item initialize...")
		}
		else {
			res = res + " -- Error in clicking CheckmyWork Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_Skip: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.next_btn);
		res = action.click(this.next_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- next is clicked");
			//itemplayerPage = require('./itemPlayer.page.js');
			//res = itemplayerPage.isInitialized();
		}
		else {
			res = res + " --Error in clicking next button";
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_Previous: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.previous_btn);
		res = action.click(this.previous_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- previous button is clicked");
			//itemplayerPage = require('./itemPlayer.page.js');
			//res = itemplayerPage.isInitialized();
		}
		else {
			res = res + " --Error in clicking previous button";
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_TryAgain: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.tryAgain_btn);
		res = action.click(this.tryAgain_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- TryAgain Button is clicked");
			//itemplayerPage = require('./itemPlayer.page.js');
			//res = itemplayerPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking TryAgain Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_Reset: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.reset_btn);
		res = action.click(this.reset_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Reset Button is clicked");
			//itemplayerPage = require('./itemPlayer.page.js');
			//res = itemplayerPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Reset Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	getQuesInfo: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame("div[class*=\"item-player-container\"] > div");
		var quesInfo = {
			activeQues: action.getElementCount("div[class*=\"item-player-container\"] > div"),
			// maxQues: undefined
		};
		if (insideFrame)
			action.switchToParentFrame();
		return quesInfo;
	},
	
	enterFrame: function (selector) {
		let insideFrame;
		res = action.getElementCount(selector);
		if (res >= 1) {
			insideFrame = false;
		}
		else {
			action.switchToFrame(0);
			res = action.getElementCount(selector);
			if (res >= 1)
				insideFrame = true;
		}
		return insideFrame;
	},

};