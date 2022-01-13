'use strict';
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	choices: selectorFile.css.ComproEngage.multiMcq.choices,
	selectedChoice: selectorFile.css.ComproEngage.multiMcq.selectedChoice,

	isInitialized: function () {
		logger.logInto(stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		action.switchToFrame(0);
		let res = action.waitForExist(this.choices);
		action.switchToParentFrame();
		return res;
	},

	clickOption: function (mcqQuesData) {
		logger.logInto(stackTrace.get());
		action.switchToFrame(0);
		let res, choiceSelector;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "]";
			res = action.getElementCount(choiceSelector);
			if (res == 1 && mcqQuesData[i][2] == 'select') {
				res = action.click(choiceSelector);
				if (true == res) {
					logger.logInto(stackTrace.get(), " -- choice is clicked");
				}
				else {
					res = res + "-- Error in clicking option";
					logger.logInto(stackTrace.get(), res, "error");
					break;
				}
			}
		}
		action.switchToParentFrame();
		return res;
	},

	getData_multiMcq: function (mcqQuesData) {
		logger.logInto(stackTrace.get());
		action.switchToFrame(0);
		var obj = [];
		var res, choiceSelector, selChoiceSelector, value;
		for (let i = 0; i < mcqQuesData.length; i++) {
			choiceSelector = this.choices + mcqQuesData[i][0] + "] ";
			selChoiceSelector = choiceSelector + this.selectedChoice;
			value = itemplayer.getFeedbackIconDetails(choiceSelector)
			res = action.getElementCount(selChoiceSelector);
			if (res == 1)
				obj[i] = [mcqQuesData[i][0], action.getText(choiceSelector), "select", value]
			else
				obj[i] = [mcqQuesData[i][0], action.getText(choiceSelector), "", value]
		}
		action.switchToParentFrame();
		return obj;
	}
}