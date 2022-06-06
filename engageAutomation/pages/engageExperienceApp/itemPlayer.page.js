"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

	correctIcon: selectorFile.css.ComproEngage.itemPlayer.correctIcon,
	incorrectIcon: selectorFile.css.ComproEngage.itemPlayer.incorrectIcon,
	questionText: selectorFile.css.ComproEngage.itemPlayer.questionText,
	loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
	itemPlayerContainer: selectorFile.css.ComproEngage.itemPlayer.itemPlayerContainer,
	instructionText: selectorFile.css.ComproEngage.itemPlayer.instructionText,
	videoMedia: selectorFile.css.ComproEngage.itemPlayer.videoMedia,
	imageMedia: selectorFile.css.ComproEngage.itemPlayer.imageMedia,
	audioMedia: selectorFile.css.ComproEngage.itemPlayer.audioMedia,
	activeQues: selectorFile.css.ComproEngage.itemPlayer.activeQues,
	imageScelaton:selectorFile.css.ComproEngage.itemPlayer.imageScelaton,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.waitForDisplayed("iframe[id*=iframe], iframe");
		if (res == true) {
			await action.switchToFrame(0);
			res = await action.waitForDocumentLoad();
			await action.switchToParentFrame();
		}
		if (res == true) {
			res = await this.getItemplayerInfo();
		}
		else {
			res = res + " -- Itemplayer page is not loaded yet";
			await logger.logInto(await stackTrace.get(), res);
		}
		return res;
	},

	getQuesIndex: async function () {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		let qIndex = await action.getAttribute(this.activeQues, "index")
		await action.switchToParentFrame();
		return qIndex;
	},

	getItemplayerInfo: async function () {
		await logger.logInto(await stackTrace.get());
		let question = {
			quesType: "",
			quesText: "",
			instructionText: "",
			mediaType: "",
			isSubmitted: "",
			correctCount: undefined,
			incorrectCount: undefined,
			feedback: {},
		};

		let qIndex = await this.getQuesIndex();
		let activeItemplayer = "div[index='" + qIndex + "'] " + this.itemPlayerContainer;
		let correctOpt = "div[index='" + qIndex + "'] " + this.correctIcon;
		let incorrectOpt = "div[index='" + qIndex + "'] " + this.incorrectIcon;
		let quesTextSelector = "div[index='" + qIndex + "'] " + this.questionText;
		let instructionTextSelector = "div[index='" + qIndex + "'] " + this.instructionText;

		await action.switchToFrame(0);
		question.quesType = await action.getAttribute(activeItemplayer, 'class');
		question.quesText = ((await action.getElementCount(quesTextSelector)) == 1) ? await action.getText(quesTextSelector) : "";
		question.instructionText = ((await action.getElementCount(instructionTextSelector)) == 1) ? await action.getText(instructionTextSelector) : "";
		question.correctCount = await action.getElementCount(correctOpt);
		question.incorrectCount = await action.getElementCount(incorrectOpt);
		if (0 < question.correctCount || 0 < question.incorrectCount)
			question.isSubmitted = true;
		else
			question.isSubmitted = false;

		await action.waitForDisplayed(this.imageScelaton, true, 20000)
		if ((await action.getElementCount("div[index='" + qIndex + "'] " + this.videoMedia)) == 1)
			question.mediaType = "video";
		else if ((await action.getElementCount("div[index='" + qIndex + "'] " + this.imageMedia)) == 1)
			question.mediaType = "image";
		else if ((await action.getElementCount("div[index='" + qIndex + "'] " + this.audioMedia)) == 1)
			question.mediaType = "audio";

		await action.switchToParentFrame();
		return question;
	},

	getFeedbackIconDetails: async function (quesSelector, quesType) {
		await logger.logInto(await stackTrace.get());
		let value;
		if (quesType == 'classify') {
			res = await action.getElementCount(quesSelector + " >" + this.correctIcon);
			ret = await action.getElementCount(quesSelector + " >" + this.incorrectIcon);
		}
		else {
			res = await action.getElementCount(quesSelector + " " + this.correctIcon);
			ret = await action.getElementCount(quesSelector + " " + this.incorrectIcon);
		}
		if (res > 0)
			value = "correct"
		else if (ret > 0)
			value = "incorrect"
		else
			value = ""
		return value;
	}
};