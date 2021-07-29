"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var testplayer = require('./basePlayer.page.js');
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

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		//res = action.waitForDisplayed(this.loaderIcon, undefined, true);
		res = action.waitForDisplayed("iframe[id*=iframe]");
		if (res == true) {
			action.switchToFrame(0);
			res = action.waitForDocumentLoad();
			action.switchToParentFrame();
		}
		if (res == true) {
			res = this.getItemplayerInfo();
		}
		else {
			res = res + " -- Itemplayer page is not loaded yet";
			logger.logInto(stackTrace.get(), res);
		}
		return res;
	},


	getItemplayerInfo: function () {
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

		let testplayerInfo = testplayer.getQuesInfo();
		let activeItemplayer = "div[index='" + testplayerInfo.activeQues + "'] " + this.itemPlayerContainer;
		let correctOpt = "div[index='" + testplayerInfo.activeQues + "'] " + this.correctIcon;
		let incorrectOpt = "div[index='" + testplayerInfo.activeQues + "'] " + this.incorrectIcon;
		let quesTextSelector = "div[index='" + testplayerInfo.activeQues + "'] " + this.questionText;
		let instructionTextSelector = "div[index='" + testplayerInfo.activeQues + "'] " + this.instructionText;

		action.switchToFrame(0);
		question.quesType = action.getAttribute(activeItemplayer, 'class');
		question.quesText = (action.getElementCount(quesTextSelector) == 1) ? action.getText(quesTextSelector) : "";
		question.instructionText = (action.getElementCount(instructionTextSelector) == 1) ? action.getText(instructionTextSelector) : "";

		if (action.getElementCount("div[index='" + testplayerInfo.activeQues + "'] " + this.videoMedia) == 1)
			question.mediaType = "video";
		else if (action.getElementCount("div[index='" + testplayerInfo.activeQues + "'] " + this.imageMedia) == 1)
			question.mediaType = "image";
		else if (action.getElementCount("div[index='" + testplayerInfo.activeQues + "'] " + this.audioMedia) == 1)
			question.mediaType = "audio";

		question.correctCount = action.getElementCount(correctOpt);
		// res = action.getElementCount(correctOpt);
		// if (res > 0)
		// 	question.correctCount = res;
		// else
		// 	question.correctCount = 0;

		question.incorrectCount = action.getElementCount(incorrectOpt);
		// res = action.getElementCount(incorrectOpt);
		// if (res > 0)
		// 	question.incorrectCount = res;
		// else
		// 	question.incorrectCount = 0;

		if (0 < question.correctCount || 0 < question.incorrectCount) {
			question.isSubmitted = true;
			// this.switchParentFrame();
			//question.feedback = testplayer.getFeedbackInfo();
			// this.switchMainFrame(0);
		}
		else
			question.isSubmitted = false;

		action.switchToParentFrame();
		console.log(question)
		return question;
	},

	getFeedbackIconDetails: function (quesSelector, quesType) {
		let value;
		if (quesType == 'classify') {
			res = action.getElementCount(quesSelector + " >" + this.correctIcon);
			ret = action.getElementCount(quesSelector + " >" + this.incorrectIcon);
		}
		else {
			res = action.getElementCount(quesSelector + " " + this.correctIcon);
			ret = action.getElementCount(quesSelector + " " + this.incorrectIcon);
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