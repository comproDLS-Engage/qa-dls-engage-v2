'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	choices: selectorFile.css.ComproEngage.multiMcq.choices,
	selectedChoice: selectorFile.css.ComproEngage.multiMcq.selectedChoice,
	subquesText: selectorFile.css.ComproEngage.multiMcq.subquesText,
	subquesMediaCont1: selectorFile.css.ComproEngage.multiMcq.subquesMediaCont1,
	qMediaContainer: selectorFile.css.ComproEngage.multiMcq.qMediaContainer,
	qImageLoaded: selectorFile.css.ComproEngage.multiMcq.qImageLoaded,
	qPlyrLoading: selectorFile.css.ComproEngage.multiMcq.qPlyrLoading,
	qPlyrPlaying: selectorFile.css.ComproEngage.multiMcq.qPlyrPlaying,
	qPlyrPlayBtn: selectorFile.css.ComproEngage.multiMcq.qPlyrPlayBtn,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		await action.switchToFrame(0);
		let res = await action.waitForExist(this.choices);
		await action.switchToParentFrame();
		return res;
	},

	clickOption: async function (mcqQuesData) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		let res, choiceSelector;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "] [class*=radio]," + this.choices + mcqQuesData[i][0] + "] [class*=checkbox]";
			res = await action.getElementCount(choiceSelector);
			if (res == 1 && mcqQuesData[i][2] == 'select') {
				res = await action.click(choiceSelector);
				if (true != res) {
					res = res + "-- Error in clicking option";
					await logger.logInto(await stackTrace.get(), res, "error");
					break;
				}
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getData_options: async function (optionsArr) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		var obj = [];
		var choiceSelector, res;
		for (let i = 0; i < optionsArr.length; i++) {
			choiceSelector = this.choices + optionsArr[i][0];
			obj[i] = [
				optionsArr[i][0],
				await action.getText(choiceSelector),
				(await action.getElementCount(choiceSelector + this.selectedChoice) > 0) ? "select" : null,
				await itemplayer.getFeedbackIconDetails(choiceSelector + "]"),
				(await action.getElementCount(choiceSelector + "] " + this.qMediaContainer) > 0) ? await action.getAttribute(choiceSelector + "] " + this.qMediaContainer, 'data-tid') : null
			];
			if (obj[i][4] != null) {
				const arr = await obj[i][4].split("-");
				obj[i][4] = arr[1];
				let pEvent = await action.getAttribute(await action.parentElement(choiceSelector), "pointer-events");
				if (pEvent == "auto") {
					if (await obj[i][4].includes("image"))
						res = await action.waitForDisplayed(choiceSelector + this.qImageLoaded);
					else if (obj[i][4] == "audio" || obj[i][4] == "video")
						res = await this.getPlyrStatus(choiceSelector);
					else if (obj[i][4] == "eText") {
						obj[i][4] = null;
						res = true;
					}
					if (!res)
						obj[i][4] = obj[i][4] + " did not load";
				}
			}
		}
		await action.switchToParentFrame();
		return obj;
	},

	getData_subques: async function (subquesArr) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		var obj = [];
		var sel, res;
		for (let i = 0; i < subquesArr.length; i++) {
			sel = this.subquesMediaCont1 + subquesArr[i][0];
			obj[i] = [
				subquesArr[i][0],
				(await action.getElementCount(this.subquesText + subquesArr[i][0]) > 0) ? await action.getText(this.subquesText + subquesArr[i][0]) : null,
				(await action.getElementCount(sel + "] > div > " + this.qMediaContainer) > 0) ? await action.getAttribute(sel + "] > div > " + this.qMediaContainer, 'data-tid') : null
			];
			if (obj[i][2] != null) {
				const arr = await obj[i][2].split("-");
				obj[i][2] = arr[1];
				if (await obj[i][2].includes("image"))
					res = await action.waitForDisplayed(sel + this.qImageLoaded);
				else if (obj[i][2] == "audio" || obj[i][2] == "video")
					res = await this.getPlyrStatus(sel);

				if (!res)
					obj[i][2] = obj[i][2] + " did not load";
			}
		}
		await action.switchToParentFrame();
		return obj;
	},

	getPlyrStatus: async function (qSel) {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(qSel + this.qPlyrPlayBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "qPlyrPlayBtn is clicked");
			res = await action.waitForDisplayed(qSel + this.qPlyrLoading, undefined, true);
			if (true == res) {
				await logger.logInto(await stackTrace.get(), "media is loaded");
				res = await action.waitForDisplayed(qSel + this.qPlyrPlaying);
				if (true == res) {
					await logger.logInto(await stackTrace.get(), "media is playing");
					res = await action.click(qSel + this.qPlyrPlayBtn);
				}
				else
					await logger.logInto(await stackTrace.get(), res + "media is not playing", 'error');
			}
			else
				await logger.logInto(await stackTrace.get(), res + "media is not loaded", 'error');
		}
		else
			await logger.logInto(await stackTrace.get(), res + "qPlyrPlayBtn is NOT clicked", 'error');

		return res;
	}

}