"use strict";
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    response: selectorFile.css.ComproEngage.FIBSelect.response,
    responses: selectorFile.css.ComproEngage.FIBSelect.responses,
    responseOption: selectorFile.css.ComproEngage.FIBSelect.responseOption,

    isInitialized: async function () {
        await logger.logInto(stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		await action.switchToFrame(0);
		let res = await action.waitForClickable(this.responses);
		await action.switchToParentFrame();
		return res;
    },

    getTargetData: async function (fibQuesData) {
        await logger.logInto(stackTrace.get());
        await action.switchToFrame(0);
        var targetArr = [];
        let optionLength = (await action.findElements(this.responses)).length;
        for (let i = 0; i < optionLength; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "]";
            var value = await itemplayer.getFeedbackIconDetails(ddSelector);
            targetArr[i] = [fibQuesData[i][0], await action.getText(ddSelector + " [class*=' mdc-select__selected-text']"), value];
        }
        await action.switchToParentFrame();
        return targetArr;
    },

    selectValue: async function (fibQuesData) {
        await logger.logInto(stackTrace.get());
        await action.switchToFrame(0);
        let res, i;
        for (i = 0; i < fibQuesData.length; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "] div";
            res = await action.click(ddSelector);
            if (true == res) {
                res = await action.click(this.responseOption + fibQuesData[i][1]);
                await logger.logInto(stackTrace.get(), res);
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                await logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    }
}