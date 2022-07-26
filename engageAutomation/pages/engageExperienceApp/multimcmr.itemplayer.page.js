'use strict';
//const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
const multimcqPlayer = require("./multimcq.itemplayer.page");
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		return await multimcqPlayer.isInitialized();
	},

	clickOption: async function (quesData) {
		await logger.logInto(await stackTrace.get());
		await action.switchToFrame(0);
		let res, choiceSelector;
		for (let i = 0; i < quesData.length; i++) {
			choiceSelector = multimcqPlayer.choices + quesData[i][0] + "] [class*=checkbox]";
			res = await action.getElementCount(choiceSelector);
			if (res == 1 && quesData[i][2] == 'select') {
				res = await action.click(choiceSelector);
				if (true != res) {
					res = res + "-- Error in clicking option";
					await logger.logInto(await stackTrace.get(), res, "error");
					break;
				}
			}
		}
		await action.switchToParentFrame();
		return res;
	},

	getData_options: async function (optionsArr) {
		await logger.logInto(await stackTrace.get());
		return await multimcqPlayer.getData_options(optionsArr);
	},

	getData_subques: async function (subquesArr) {
		await logger.logInto(await stackTrace.get());
		return await multimcqPlayer.getData_subques(subquesArr);
	}
}