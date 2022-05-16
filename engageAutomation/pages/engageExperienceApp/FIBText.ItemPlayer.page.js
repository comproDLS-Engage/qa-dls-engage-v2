"use strict";
const action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, qIndex;
const itemplayer = require('./itemPlayer.page.js');

module.exports = {

    response: selectorFile.css.ComproEngage.FIBText.response,
    responses: selectorFile.css.ComproEngage.FIBText.responses,

    isInitialized: async function (fibQuesData) {
        await logger.logInto(stackTrace.get());
        var obj = {
            targetData: []
        };
        qIndex = await itemplayer.getQuesIndex();
        obj.targetData = await this.getTargetData(qIndex, fibQuesData);
        return obj;
    },

    getTargetData: async function (qIndex, fibQuesData) {
        await logger.logInto(stackTrace.get());
        await action.switchToFrame(0);
        let option = "div[index='" + qIndex + "'] " + this.responses;
        var targetArr = [];
        let optionLength = (await action.findElements(option)).length;
        for (let i = 0; i < optionLength; i++) {
            var textSelector = "div[index='" + qIndex + "'] " + this.response + fibQuesData[i][0] + "] ";
            var value = await itemplayer.getFeedbackIconDetails(textSelector);
            targetArr[i] = [fibQuesData[i][0], await action.getValue(textSelector + "[data-tid=text-placeholder]"), value];
        }
        await action.switchToParentFrame();
        return targetArr;
    },

    inputValues: async function (fibQuesData) {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        for (let i = 0; i < fibQuesData.length; i++) {
            var textSelector = "div[index='" + qIndex + "'] " + this.response + fibQuesData[i][0] + "] [data-tid=text-placeholder]";
            res = await action.click(textSelector);
            await browser.pause(250);
            if (true == res) {
                res = await action.setValue(textSelector, fibQuesData[i][1]);
                await browser.pause(250);
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