"use strict";
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    response: selectorFile.css.ComproEngage.fibselect.response,
    responseOption: selectorFile.css.ComproEngage.fibselect.responseOption,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
		//action.switchToFrame("[id*=iframe]");
		await action.switchToFrame(0);
		let res = await action.waitForClickable(this.response);
		await action.switchToParentFrame();
		return res;
    },

    getTargetData: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var targetArr = [];
        let optionLength = (await action.findElements(this.response)).length;
        for (let i = 0; i < optionLength; i++) {
            var ddSelector = this.response + fibQuesData[i][0] + "]";
            targetArr[i] = [
                fibQuesData[i][0], 
                await action.getText(ddSelector + " [class*=' mdc-select__selected-text']"), 
                await itemplayer.getFeedbackIconDetails(ddSelector)
            ];
        }
        await action.switchToParentFrame();
        return targetArr;
    },

    selectValue: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        let res, i;
        for (i = 0; i < fibQuesData.length; i++) {
            res = await action.click(this.response + fibQuesData[i][0] + "] div");
            if (true == res) {
                res = await action.click(this.responseOption + fibQuesData[i][1]);
                if (true != res) {
                    res = res + " -- Target value " + fibQuesData[i][1] + " is NOT clicked";
                    await logger.logInto(await stackTrace.get(), res, 'error');
                    break;
                }
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                await logger.logInto(await stackTrace.get(), res, 'error');
                break;
            }
        }
        await action.switchToParentFrame();
        return res;
    }
}