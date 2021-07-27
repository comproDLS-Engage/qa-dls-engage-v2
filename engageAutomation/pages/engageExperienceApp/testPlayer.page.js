"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret, itemplayerPage, isPlayerInsideiFrame;

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
			ret = this.getTestplayerInfo();
		}
		else {
			ret = res + " -- TestPlayer page is not loaded yet";
			logger.logInto(stackTrace.get(), res);
		}
		return ret;
	},

	getTestplayerInfo: function () {
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
		var quesInfo = this.getQuesInfo();
		//testplayerInfo.isPlayerInsideiFrame = this.isPlayerInsideiFrame();
		testplayerInfo.activeQues = quesInfo.activeQues;

		return testplayerInfo;
	},

	isPlayerInsideiFrame: function () {
		let insideFrame;
		res = action.getElementCount(this.checkMyWork_btn) + action.getElementCount(this.next_btn) + action.getElementCount(this.reset_btn);
		if (res >= 1) {
			insideFrame = false;
		}
		else {
			action.switchToFrame(0);
			res = action.getElementCount(this.checkMyWork_btn) + action.getElementCount(this.next_btn) + action.getElementCount(this.reset_btn);
			action.switchToParentFrame();
			if (res >= 1)
				insideFrame = true;
		}
		return insideFrame;
	},

	click_CheckMyWork: function () {
		logger.logInto(stackTrace.get());
		isPlayerInsideiFrame = this.isPlayerInsideiFrame();
		console.log(" isPlayerInsideiFrame : " + isPlayerInsideiFrame);
		if (isPlayerInsideiFrame == true) {
			action.switchToFrame(0);
		}
		res = action.click(this.checkMyWork_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- CheckmyWork Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking CheckmyWork Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		if (isPlayerInsideiFrame == true) {
			action.switchToParentFrame();
		}
		return ret;
	},

	click_Skip: function () {
		isPlayerInsideiFrame = this.isPlayerInsideiFrame();
		if (isPlayerInsideiFrame == true) {
			action.switchToFrame(0);
		}
		logger.logInto(stackTrace.get());
		let btnName = action.getText(this.next_btn)
		res = action.click(this.next_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- " + btnName + " is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " --Error in clicking " + btnName;
			logger.logInto(stackTrace.get(), ret, "error");
		}
		if (isPlayerInsideiFrame == true) {
			action.switchToParentFrame();
		}
		return ret;
	},

	click_Previous: function () {
		logger.logInto(stackTrace.get());
		let btnName = action.getText(this.previous_btn)
		res = action.click(this.previous_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- " + btnName + " is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " --Error in clicking " + btnName;
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_TryAgain: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.tryAgain_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- TryAgain Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking TryAgain Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	click_Reset: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.reset_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Reset Button is clicked");
			itemplayerPage = require('./itemPlayer.page.js');
			ret = itemplayerPage.isInitialized();
		}
		else {
			ret = res + " -- Error in clicking TryAgain Button"
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	getQuesInfo: function () {
		var quesInfo = {
			activeQues: undefined,
			// maxQues: undefined
		};
		isPlayerInsideiFrame = this.isPlayerInsideiFrame();
		if (isPlayerInsideiFrame == true) {
			action.switchToFrame(0);
		}
		quesInfo.activeQues = action.getElementCount("div[class*=\"item-player-container\"] > div");
		ret = quesInfo;
		if (isPlayerInsideiFrame == true) {
			action.switchToParentFrame();
		}
		return ret;
	},


};