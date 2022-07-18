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
	selectOneText: selectorFile.css.ComproEngage.itemPlayer.selectOneText,
	loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
	itemPlayerContainer: selectorFile.css.ComproEngage.itemPlayer.itemPlayerContainer,
	videoMedia: selectorFile.css.ComproEngage.itemPlayer.videoMedia,
	imageMedia: selectorFile.css.ComproEngage.itemPlayer.imageMedia,
	audioMedia: selectorFile.css.ComproEngage.itemPlayer.audioMedia,
	activeQues: selectorFile.css.ComproEngage.itemPlayer.activeQues,
	//imageSkeleton: selectorFile.css.ComproEngage.itemPlayer.imageSkeleton,
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
			quesTitle: ((await action.getElementCount(this.questionTitle)) == 1) ? await action.getText(this.questionTitle) : null,
			instructionHeading: ((await action.getElementCount(this.instructionHeading)) == 1) ? await action.getText(this.instructionHeading) : null,
			instructionText: ((await action.getElementCount(this.instructionText)) == 1) ? await action.getText(this.instructionText) : null,
			promptText: ((await action.getElementCount(this.promptText)) == 1) ? await action.getText(this.promptText) : null,
			selectOneText: ((await action.getElementCount(this.selectOneText)) == 1) ? await action.getText(this.selectOneText) : null,
			mediaType: null,
			mediaLoaded: null,
			isSubmitted: null,
			correctCount: await action.getElementCount(this.correctIcon),
			incorrectCount: await action.getElementCount(this.incorrectIcon),
			feedback: {}
		};

		let text = await action.getAttribute(this.itemPlayerContainer, 'class')
		const arr = await text.split(" ");
		question.quesType = arr[2];

		if (0 < question.correctCount || 0 < question.incorrectCount)
			question.isSubmitted = true;
		else
			question.isSubmitted = false;

		if ((await action.getElementCount(this.imageMedia)) == 1) {
			question.mediaType = "image";
			question.mediaLoaded = await action.waitForDisplayed(this.promptImageLoaded);
		}
		else if ((await action.getElementCount(this.videoMedia)) == 1) {
			question.mediaType = "video";
			question.mediaLoaded = await this.getPlyrStatus();
		}
		else if ((await action.getElementCount(this.audioMedia)) == 1) {
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
		res = await action.click(this.plyrPlayBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), "plyrPlayBtn is clicked");
			res = await action.waitForDisplayed(this.plyrLoading, undefined, true);
			if (true == res) {
				await logger.logInto(await stackTrace.get(), "media is loaded");
				res = await action.waitForDisplayed(this.plyrPlaying);
				if (true == res) {
					await logger.logInto(await stackTrace.get(), "media is playing");
					res = await action.click(this.plyrPlayBtn);
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