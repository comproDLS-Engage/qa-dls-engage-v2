"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var testplayer = require('./testPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret, value;

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
		res = action.waitForDocumentLoad();
		if (res == true) {
			res = this.getItemplayerInfo();
		}
		else {
			ret = res + " -- Itemplayer page is not loaded yet";
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
				this.switchMainFrame(0);

		let testplayerInfo = testplayer.isInitialized();
		
		// let activeItemplayer = "div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.itemPlayerContainer;
		// let correctOpt = "div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.correctIcon;
		// let incorrectOpt = "div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.incorrectIcon;
		// let quesTextSelector = "div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.questionText;
		// let instructionTextSelector = "div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.instructionText;

		// this.switchMainFrame(0);
		// question.quesType = action.getAttribute(activeItemplayer, 'class');
		// question.quesText = (action.getElementCount(quesTextSelector) == 1) ? action.getText(quesTextSelector) : "";
		// question.instructionText = (action.getElementCount(instructionTextSelector) == 1) ? action.getText(instructionTextSelector) : "";

		// if (action.getElementCount("div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.videoMedia) == 1)
		// 	question.mediaType = "video";
		// else if (action.getElementCount("div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.imageMedia) == 1)
		// 	question.mediaType = "image";
		// else if (action.getElementCount("div[index='" + (testplayerInfo.activeQues - 1) + "'] " + this.audioMedia) == 1)
		// 	question.mediaType = "audio";

		// res = action.getElementCount(correctOpt);
		// if (res > 0) {
		// 	logger.logInto(stackTrace.get(), " -- Correct option is available");
		// 	question.correctCount = res;
		// }
		// else {
		// 	question.correctCount = 0;
		// 	res = res + "-- Correct option is NOT available";
		// 	logger.logInto(stackTrace.get(), res);
		// }

		// res = action.getElementCount(incorrectOpt);
		// if (res > 0) {
		// 	logger.logInto(stackTrace.get(), " -- Incorrect option is available");
		// 	question.incorrectCount = res;
		// }
		// else {
		// 	question.incorrectCount = 0;
		// 	res = res + " -- Incorrect option is NOT available";
		// 	logger.logInto(stackTrace.get(), res);
		// }

		// if (0 < question.correctCount || 0 < question.incorrectCount) {
		// 	question.isSubmitted = true;
		// 	// this.switchParentFrame();
		// 	question.feedback = testplayer.getFeedbackInfo();
		// 	// this.switchMainFrame(0);
		// }
		// else
		// 	question.isSubmitted = false;

		// // this.switchParentFrame();
		// testplayerInfo.question = {};
		// this.switchParentFrame();
		testplayerInfo.question = question;
		return testplayerInfo;
	},

	switchMainFrame: function (id) {
		logger.logInto(stackTrace.get());
		ret = action.switchToFrame(id)
		if (ret == true) {
			logger.logInto(stackTrace.get(), " -- Switched to frame");
		} 
		else {
			ret = ret + " -- NOT Switched to frame";
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	switchParentFrame: function () {
		logger.logInto(stackTrace.get());
		ret = action.switchToParentFrame()
		if (ret == true) {
			logger.logInto(stackTrace.get(), " -- Switched to parent frame");
		} 
		else {
			ret = ret + " -- NOT Switched to parent frame";
			logger.logInto(stackTrace.get(), ret, "error");
		}
		return ret;
	},

	getFeedbackIconDetails: function (quesSelector,quesType) {
		if(quesType == 'classify'){
		res = action.getElementCount(quesSelector + " >" + this.correctIcon);
		ret = action.getElementCount(quesSelector + " >" + this.incorrectIcon);
		}
		else{
		res = action.getElementCount(quesSelector + " " + this.correctIcon);
		//console.log("for i the itemplayer res is",res);
		ret = action.getElementCount(quesSelector + " " + this.incorrectIcon);
		//console.log("for i the itemplayer ret is",ret);
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