"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

	correctIcon: selectorFile.css.ComproEngage.itemPlayer.correctIcon,
	incorrectIcon: selectorFile.css.ComproEngage.itemPlayer.incorrectIcon,
	questionTitle: selectorFile.css.ComproEngage.itemPlayer.questionTitle,
	instructionHeading: selectorFile.css.ComproEngage.itemPlayer.instructionHeading,
	instructionText: selectorFile.css.ComproEngage.itemPlayer.instructionText,
	promptText: selectorFile.css.ComproEngage.itemPlayer.promptText,
	selectOneLabel: selectorFile.css.ComproEngage.itemPlayer.selectOneLabel,
	selectOneOrMoreLabel: selectorFile.css.ComproEngage.itemPlayer.selectOneOrMoreLabel,
	selectFromDropdownLabel: selectorFile.css.ComproEngage.itemPlayer.selectFromDropdownLabel,
	matchingLeftLabel: selectorFile.css.ComproEngage.itemPlayer.matchingLeftLabel,
	matchingRightLabel: selectorFile.css.ComproEngage.itemPlayer.matchingRightLabel,
	loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
	itemPlayerContainer: selectorFile.css.ComproEngage.itemPlayer.itemPlayerContainer,
	videoMedia: selectorFile.css.ComproEngage.itemPlayer.videoMedia,
	imageMedia: selectorFile.css.ComproEngage.itemPlayer.imageMedia,
	audioMedia: selectorFile.css.ComproEngage.itemPlayer.audioMedia,
	activeQues: selectorFile.css.ComproEngage.itemPlayer.activeQues,
	promptImageLoaded: selectorFile.css.ComproEngage.itemPlayer.promptImageLoaded,
	plyrLoading: selectorFile.css.ComproEngage.itemPlayer.plyrLoading,
	plyrPlaying: selectorFile.css.ComproEngage.itemPlayer.plyrPlaying,
	plyrPlayBtn: selectorFile.css.ComproEngage.itemPlayer.plyrPlayBtn,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.waitForDisplayed("iframe[id*=iframe], iframe");
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
		await action.switchToFrame(0);
		let question = {
			quesType: null,
			quesTitle: ((await action.getElementCount(this.activeQues + this.questionTitle)) == 1) ? await action.getText(this.activeQues + this.questionTitle) : null,
			instructionText: ((await action.getElementCount(this.activeQues + this.instructionText)) == 1) ? await action.getText(this.activeQues + this.instructionText) : null,
			promptText: ((await action.getElementCount(this.activeQues + this.promptText)) == 1) ? await action.getText(this.activeQues + this.promptText) : null,
			viewLabels: {
				instructionHeading: ((await action.getElementCount(this.activeQues + this.instructionHeading)) == 1) ? await action.getText(this.activeQues + this.instructionHeading) : null,
				selectOneLabel: ((await action.getElementCount(this.activeQues + this.selectOneLabel)) == 1) ? await action.getText(this.activeQues + this.selectOneLabel) : null,
				selectOneOrMoreLabel: ((await action.getElementCount(this.activeQues + this.selectOneOrMoreLabel)) == 1) ? await action.getText(this.activeQues + this.selectOneOrMoreLabel) : null,
				selectFromDropdownLabel: ((await action.getElementCount(this.activeQues + this.selectFromDropdownLabel)) == 1) ? await action.getText(this.activeQues + this.selectFromDropdownLabel) : null,
				matchingLeftLabel: ((await action.getElementCount(this.activeQues + this.matchingLeftLabel)) == 1) ? await action.getText(this.activeQues + this.matchingLeftLabel) : null,
				matchingRightLabel: ((await action.getElementCount(this.activeQues + this.matchingRightLabel)) == 1) ? await action.getText(this.activeQues + this.matchingRightLabel) : null,
			},
			mediaType: null,
			mediaLoaded: null,
			isSubmitted: null,
			correctCount: await action.getElementCount(this.activeQues + this.correctIcon),
			incorrectCount: await action.getElementCount(this.activeQues + this.incorrectIcon),
			//feedback: {}
		};

		let text = await action.getAttribute(this.activeQues + this.itemPlayerContainer, 'class')
		const arr = await text.split(" ");
		question.quesType = arr[2];

		if (0 < question.correctCount || 0 < question.incorrectCount)
			question.isSubmitted = true;
		else
			question.isSubmitted = false;

		if ((await action.getElementCount(this.activeQues + this.imageMedia)) == 1) {
			question.mediaType = "image";
			question.mediaLoaded = await action.waitForDisplayed(this.activeQues + this.promptImageLoaded);
		}
		else if ((await action.getElementCount(this.activeQues + this.videoMedia)) == 1) {
			question.mediaType = "video";
			question.mediaLoaded = await this.getPlyrStatus();
		}
		else if ((await action.getElementCount(this.activeQues + this.audioMedia)) == 1) {
			question.mediaType = "audio";
			question.mediaLoaded = await this.getPlyrStatus();
		}
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
			res = await action.getElementCount(quesSelector + this.correctIcon);
			ret = await action.getElementCount(quesSelector + this.incorrectIcon);
		}
		if (res > 0)
			value = "correct";
		else if (ret > 0)
			value = "incorrect";
		else
			value = null;
		return value;
	},

	getPlyrStatus: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.activeQues + this.plyrPlayBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "plyrPlayBtn is clicked");
			res = await action.waitForDisplayed(this.activeQues + this.plyrLoading, undefined, true);
			if (true == res) {
				await logger.logInto(await stackTrace.get(), "media is loaded");
				res = await action.waitForDisplayed(this.activeQues + this.plyrPlaying);
				if (true == res) {
					await logger.logInto(await stackTrace.get(), "media is playing");
					res = await action.click(this.activeQues + this.plyrPlayBtn);
				}
				else
					await logger.logInto(await stackTrace.get(), res + "media is not playing", 'error');
			}
			else
				await logger.logInto(await stackTrace.get(), res + "media is not loaded", 'error');
		}
		else
			await logger.logInto(await stackTrace.get(), res + "plyrPlayBtn is NOT clicked", 'error');
		return res;
	}

	/*generateScreenshot: async function () {
		await logger.logInto(await stackTrace.get());
		global.suiteKey = "Suite1";
		global.tcId = "test";
		
		await action.switchToFrame(0);
		
		var result = await browser.checkDocument();
		await action.switchToParentFrame();
		global.tcNumber = global.tcNumber + 1;
		console.log(global.screenshotName);
		console.log(result);

	}*/
};