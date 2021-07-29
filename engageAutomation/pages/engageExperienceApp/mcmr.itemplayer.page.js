'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;
const mcqBlockItemplayerPage = require("./mcqBlock.itemplayer.page");

module.exports = {

	choice: mcqBlockItemplayerPage.choice,
	choices: mcqBlockItemplayerPage.choices,
	selectedChoice: mcqBlockItemplayerPage.selectedChoice,

	isInitialized: function (mcmrQuesData) {
		logger.logInto(stackTrace.get());
		var qIndex = itemplayer.getQuesIndex();
		action.switchToFrame(0);
		let choiceSelector = "div[index='" + qIndex + "'] " + this.choice + mcmrQuesData[2][0] + "]";
		res = action.getCSSProperty(choiceSelector, 'border-style');
		if (res.value == 'solid') {
			logger.logInto(stackTrace.get(), " -- Choice " + mcmrQuesData[2][0] + " is of MCMR type");
			let choiceSvgSelector = choiceSelector + " svg"
			res = action.getAttribute(choiceSvgSelector, 'data-icon');
			if (res == 'square') {
				logger.logInto(stackTrace.get(), " -- choice " + mcmrQuesData[2][0] + " is having square icon");
				ret = this.getmcmrData(mcmrQuesData)
			}
			else {
				ret = res + " -- choice no " + mcmrQuesData[2][0] + "is not having circle icon";
				logger.logInto(stackTrace.get(), ret, "error");
			}
		}
		else {
			ret = res + "-- Choice no " + mcmrQuesData[0][0] + " is NOT of MCMR type";
			logger.logInto(stackTrace.get(), ret, "error");
		}
		action.switchToParentFrame();
		return ret;
	},

	getmcmrData: function (mcmrQuesData) {
		logger.logInto(stackTrace.get());
		return mcqBlockItemplayerPage.getmcqbData(mcmrQuesData);
	},

	clickOptions: function (mcmrQuesData) {
		logger.logInto(stackTrace.get());
		return mcqBlockItemplayerPage.clickOption(mcmrQuesData);
	}
}