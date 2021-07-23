'use strict';
var itemplayer = require('./itemPlayer.page.js');
var testplayer = require('./testPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;
const mcqBlockItemplayerPage = require("./mcqBlock.itemplayer.page");

module.exports = {

	choice: mcqBlockItemplayerPage.choice,
	choices: mcqBlockItemplayerPage.choices,
	selectedChoice: mcqBlockItemplayerPage.selectedChoice,

	isInitialized: function (mcmrQuesData) {
		var qIndex = (testplayer.getQuesInfo()).activeQues - 1;
		console.log("qIndex: " + qIndex);
		// itemplayer.switchMainFrame(0);
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
		// itemplayer.switchParentFrame();
		return ret;
	},

	getmcmrData: function (mcmrQuesData) {
		return mcqBlockItemplayerPage.getmcqbData(mcmrQuesData);
	},

	clickOptions: function (mcmrQuesData) {
		return mcqBlockItemplayerPage.clickOption(mcmrQuesData);
	}
}