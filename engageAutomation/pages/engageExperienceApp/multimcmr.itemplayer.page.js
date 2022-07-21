'use strict';
//const itemplayer = require('./itemPlayer.page.js');
//const action = require('../../core/actionLibrary/baseActionLibrary.js');
const multimcqPlayer = require("./multimcq.itemplayer.page");
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		return await multimcqPlayer.isInitialized();
	},

	clickOption: async function (quesData) {
		await logger.logInto(await stackTrace.get());
		return await multimcqPlayer.clickOption(quesData);
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