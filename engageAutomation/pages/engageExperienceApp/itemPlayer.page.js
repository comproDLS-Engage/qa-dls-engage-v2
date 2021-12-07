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

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		res = action.waitForDisplayed("iframe[id*=iframe], iframe");
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

	getQuesIndex: function () {
		logger.logInto(stackTrace.get());
		action.switchToFrame(0);
		let qIndex = action.getAttribute(this.activeQues, "index")
		action.switchToParentFrame();
		return qIndex;
	},

	getItemplayerInfo: function () {
		logger.logInto(stackTrace.get());
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

		let qIndex = this.getQuesIndex();
		let activeItemplayer = "div[index='" + qIndex + "'] " + this.itemPlayerContainer;
		let correctOpt = "div[index='" + qIndex + "'] " + this.correctIcon;
		let incorrectOpt = "div[index='" + qIndex + "'] " + this.incorrectIcon;
		let quesTextSelector = "div[index='" + qIndex + "'] " + this.questionText;
		let instructionTextSelector = "div[index='" + qIndex + "'] " + this.instructionText;

		action.switchToFrame(0);
		question.quesType = action.getAttribute(activeItemplayer, 'class');
		question.quesText = (action.getElementCount(quesTextSelector) == 1) ? action.getText(quesTextSelector) : "";
		question.instructionText = (action.getElementCount(instructionTextSelector) == 1) ? action.getText(instructionTextSelector) : "";
		question.correctCount = action.getElementCount(correctOpt);
		question.incorrectCount = action.getElementCount(incorrectOpt);
		if (0 < question.correctCount || 0 < question.incorrectCount)
			question.isSubmitted = true;
		else
			question.isSubmitted = false;

		action.waitForDisplayed(this.imageScelaton, true, 20000)
		if (action.getElementCount("div[index='" + qIndex + "'] " + this.videoMedia) == 1)
			question.mediaType = "video";
		else if (action.getElementCount("div[index='" + qIndex + "'] " + this.imageMedia) == 1)
			question.mediaType = "image";
		else if (action.getElementCount("div[index='" + qIndex + "'] " + this.audioMedia) == 1)
			question.mediaType = "audio";

		action.switchToParentFrame();
		return question;
	},

	getFeedbackIconDetails: function (quesSelector, quesType) {
		logger.logInto(stackTrace.get());
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