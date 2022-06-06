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

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.waitForDocumentLoad();
		if (res == true) {
			res = await this.getBasePlayerInfo();
		}
		else {
			res = res + " -- TestPlayer page is not loaded yet";
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		return res;
	},

	getBasePlayerInfo: async function () {
		let insideFrame;
		if ((await action.getElementCount(this.next_btn)) == 1)
			insideFrame = await this.enterFrame(this.next_btn);
		else
			insideFrame = await this.enterFrame(this.previous_btn);
		var playerInfo = {
			checkmyWork_isExists: (await action.getElementCount(this.checkMyWork_btn)) == 1 ? true : false,
			checkmyWork_isDisabled: ((await action.getElementCount(this.checkMyWork_btn)) == 1) ? await action.getAttribute(this.checkMyWork_btn, 'disabled') : false,
			tryAgain_isExists: (await action.getElementCount(this.tryAgain_btn)) == 1 ? true : false,
			tryAgain_isDisabled: ((await action.getElementCount(this.tryAgain_btn)) == 1) ? await action.getAttribute(this.tryAgain_btn, 'disabled') : false,
			reset_isExists: (await action.getElementCount(this.reset_btn)) == 1 ? true : false,
			reset_isDisabled: ((await action.getElementCount(this.reset_btn)) == 1) ? await action.getAttribute(this.reset_btn, 'disabled') : false,
			previous_isExists: (await action.getElementCount(this.previous_btn)) == 1 ? true : false,
			previous_isDisabled: ((await action.getElementCount(this.previous_btn)) == 1) ? await action.getAttribute(this.previous_btn, 'disabled') : false,
			next_isExists: (await action.getElementCount(this.next_btn)) == 1 ? true : false,
			next_isDisabled: ((await action.getElementCount(this.next_btn)) == 1) ? await action.getAttribute(this.next_btn, 'disabled') : false,
			showAnswer_isExists: (await action.getElementCount(this.showAnswer_btn)) == 1 ? true : false,
			showAnswer_isDisabled: ((await action.getElementCount(this.showAnswer_btn)) == 1) ? await action.getAttribute(this.showAnswer_btn, 'disabled') : false,
			yourResponse_isExists: (await action.getElementCount(this.yourResponse_btn)) == 1 ? true : false,
			yourResponse_isDisabled: ((await action.getElementCount(this.yourResponse_btn)) == 1) ? await action.getAttribute(this.yourResponse_btn, 'disabled') : false,
			hint_isExists: (await action.getElementCount(this.hint_btn)) == 1 ? true : false,
			hint_isDisabled: ((await action.getElementCount(this.hint_btn)) == 1) ? await action.getAttribute(this.hint_btn, 'disabled') : false
		};
		if (insideFrame)
			await action.switchToParentFrame();
		return playerInfo;
	},

	click_CheckMyWork: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.checkMyWork_btn);
		res = await action.click(this.checkMyWork_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- CheckmyWork Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking CheckmyWork Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_Skip: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.next_btn);
		res = await action.click(this.next_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- next is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " --Error in clicking next button";
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_Previous: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.previous_btn);
		res = await action.click(this.previous_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- previous button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " --Error in clicking previous button";
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_TryAgain: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.tryAgain_btn);
		res = await action.click(this.tryAgain_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- TryAgain Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking TryAgain Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_Reset: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.reset_btn);
		res = await action.click(this.reset_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- Reset Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Reset Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_ShowAnswer: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.showAnswer_btn);
		res = await action.click(this.showAnswer_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- Show Answer Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Show Answer Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_YourResponse: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.yourResponse_btn);
		res = await action.click(this.yourResponse_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- Your Response Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Your Response Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	click_Hint: async function () {
		await logger.logInto(await stackTrace.get());
		let insideFrame = await this.enterFrame(this.hint_btn);
		res = await action.click(this.hint_btn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " -- Hint Button is clicked");
			//res = this.getBasePlayerInfo();
		}
		else {
			res = res + " -- Error in clicking Hint Button"
			await logger.logInto(await stackTrace.get(), res, "error");
		}
		if (insideFrame)
			await action.switchToParentFrame();
		return res;
	},

	enterFrame: async function (selector) {
		let insideFrame;
		res = await action.getElementCount(selector);
		if (res >= 1) {
			insideFrame = false;
		}
		else {
			await action.switchToFrame(0);
			res = await action.getElementCount(selector);
			if (res >= 1)
				insideFrame = true;
		}
		return insideFrame;
	},

};