"use strict";
const itemplayer = require('./itemPlayer.page.js');
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    responses: selectorFile.css.ComproEngage.fibtext.responses,
    textPlaceholder: selectorFile.css.ComproEngage.fibtext.textPlaceholder,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        let res = await action.waitForExist(this.responses);
        await action.switchToParentFrame();
        return res;
    },

    getData_responses: async function (responseArr) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var arr = [];
        for (let i = 0; i < responseArr.length; i++) {
            var textSelector = this.responses + responseArr[i][0];
            arr[i] = [
                responseArr[i][0],
                await action.getValue(textSelector + this.textPlaceholder),
                await itemplayer.getFeedbackIconDetails(textSelector + "]")];
        }
        await action.switchToParentFrame();
        return arr;
    },

    inputValues: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var textSelector, res;
        for (let i = 0; i < fibQuesData.length; i++) {
            textSelector = this.responses + fibQuesData[i][0] + this.textPlaceholder;
            res = await action.click(textSelector);
            await browser.pause(250);
            if (true == res) {
                res = await action.setValue(textSelector, fibQuesData[i][1]);
                await browser.pause(250);
                await logger.logInto(await stackTrace.get(), res);
                if (true != res) {
                    res = res + " -- Target value " + fibQuesData[i][1] + " is NOT entered";
                    await logger.logInto(await stackTrace.get(), res, 'error');
                    break;
                }
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                await logger.logInto(await stackTrace.get(), res, 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    }
}