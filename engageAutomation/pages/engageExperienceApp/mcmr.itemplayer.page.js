'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;
const mcqBlockItemplayerPage = require("./mcqBlock.itemplayer.page");
var itemplayer = require('./itemPlayer.page.js');

module.exports = {

	choice: mcqBlockItemplayerPage.choice,
	choices: mcqBlockItemplayerPage.choices,
	selectedChoice: mcqBlockItemplayerPage.selectedChoice,

	isInitialized: async function (mcmrQuesData) {
		await logger.logInto(stackTrace.get());
		var qIndex = await itemplayer.getQuesIndex();
		await action.switchToFrame(0);
		let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcmrQuesData[2][0] + "]";
		res = await action.getCSSProperty(choiceSelector, 'border-style');
		if (res.value == 'solid') {
			await logger.logInto(stackTrace.get(), " -- Choice " + mcmrQuesData[2][0] + " is of MCMR type");
			let choiceSvgSelector = choiceSelector + " svg"
			res = await action.getAttribute(choiceSvgSelector, 'data-icon');
			if (res == 'square') {
				await logger.logInto(stackTrace.get(), " -- choice " + mcmrQuesData[2][0] + " is having square icon");
				ret = await this.getmcmrData(mcmrQuesData)
			}
			else {
				ret = res + " -- choice no " + mcmrQuesData[2][0] + "is not having circle icon";
				await logger.logInto(stackTrace.get(), ret, "error");
			}
		}
		else {
			ret = res + "-- Choice no " + mcmrQuesData[0][0] + " is NOT of MCMR type";
			await logger.logInto(stackTrace.get(), ret, "error");
		}
		await action.switchToParentFrame();
		return ret;
	},

	getmcmrData: async function (mcmrQuesData) {
		await logger.logInto(stackTrace.get());
		return mcqBlockItemplayerPage.getmcqbData(mcmrQuesData);
	},

	clickOptions: async function (mcmrQuesData) {
		await logger.logInto(stackTrace.get());
		return mcqBlockItemplayerPage.clickOption(mcmrQuesData);
	}
}