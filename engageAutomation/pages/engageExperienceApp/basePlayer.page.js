"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	next_btn: selectorFile.css.ComproEngage.testPlayer.next_btn,
	previous_btn: selectorFile.css.ComproEngage.testPlayer.previous_btn,
	checkMyWork_btn: selectorFile.css.ComproEngage.testPlayer.checkMyWork_btn,
	tryAgain_btn: selectorFile.css.ComproEngage.testPlayer.tryAgain_btn,
	reset_btn: selectorFile.css.ComproEngage.testPlayer.reset_btn,
	showAnswer_btn: selectorFile.css.ComproEngage.testPlayer.showAnswer_btn,
	yourResponse_btn: selectorFile.css.ComproEngage.testPlayer.yourResponse_btn,
	hint_btn: selectorFile.css.ComproEngage.testPlayer.hint_btn,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForDocumentLoad();
		if (res == true) {
			res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- TestPlayer page is not loaded yet";
			logger.logInto(stackTrace.get(), res, "error");
		}
		return res;
	},

	getBasePlayerInfo: function () {
		let insideFrame;
		if (action.getElementCount(this.next_btn) == 1)
			insideFrame = this.enterFrame(this.next_btn);
		else
			insideFrame = this.enterFrame(this.previous_btn);
		var playerInfo = {
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
			showAnswer_isExists: action.getElementCount(this.showAnswer_btn) == 1 ? true : false,
			showAnswer_isDisabled: (action.getElementCount(this.showAnswer_btn) == 1) ? action.getAttribute(this.showAnswer_btn, 'disabled') : false,
			yourResponse_isExists: action.getElementCount(this.yourResponse_btn) == 1 ? true : false,
			yourResponse_isDisabled: (action.getElementCount(this.yourResponse_btn) == 1) ? action.getAttribute(this.yourResponse_btn, 'disabled') : false,
			hint_isExists: action.getElementCount(this.hint_btn) == 1 ? true : false,
			hint_isDisabled: (action.getElementCount(this.hint_btn) == 1) ? action.getAttribute(this.hint_btn, 'disabled') : false
		};
		if (insideFrame)
			action.switchToParentFrame();
		return playerInfo;
	},

	click_CheckMyWork: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.checkMyWork_btn);
		res = action.click(this.checkMyWork_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- CheckmyWork Button is clicked");
			//res = this.getBasePlayerInfo();
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
			//res = this.getBasePlayerInfo();
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
			//res = this.getBasePlayerInfo();
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
			//res = this.getBasePlayerInfo();
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
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Reset Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_ShowAnswer: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.showAnswer_btn);
		res = action.click(this.showAnswer_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Show Answer Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Show Answer Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_YourResponse: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.yourResponse_btn);
		res = action.click(this.yourResponse_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Your Response Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Your Response Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
	},

	click_Hint: function () {
		logger.logInto(stackTrace.get());
		let insideFrame = this.enterFrame(this.hint_btn);
		res = action.click(this.hint_btn);
		if (res == true) {
			logger.logInto(stackTrace.get(), " -- Hint Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Hint Button"
			logger.logInto(stackTrace.get(), res, "error");
		}
		if (insideFrame)
			action.switchToParentFrame();
		return res;
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