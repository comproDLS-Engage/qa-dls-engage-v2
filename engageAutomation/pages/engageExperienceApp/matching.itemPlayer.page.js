'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require('./itemPlayer.page.js');

module.exports = {

    left: selectorFile.css.ComproEngage.matching.left,
    right: selectorFile.css.ComproEngage.matching.right,

    isInitialized: async function (matchingQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        let res = {};
        res.leftData = await this.getLeftData(matchingQuesData);
        res.rightData = await this.getRightData(matchingQuesData);
        await action.switchToParentFrame();
        return res;
    },

    getLeftData: async function (matchingQuesData) {
        await logger.logInto(await stackTrace.get());
        var leftMap = [];
        let optionLength = (await action.findElements(this.left)).length;
        for (let i = 0; i < optionLength; i++) {
            leftMap[i] = [
                matchingQuesData[i][0],
                await action.getText(this.left + matchingQuesData[i][0] + "] > div[id*=label] > div"),
                await itemplayer.getFeedbackIconDetails(this.left + matchingQuesData[i][0] + "]")
            ];
        }
        return leftMap;
    },

    getRightData: async function (matchingQuesData) {
        await logger.logInto(await stackTrace.get());
        var rightMap = [];
        let optionLength = (await action.findElements(this.right)).length;
        for (let i = 0; i < optionLength; i++) {
            rightMap[i] = [
                matchingQuesData[i][2],
                await action.getText(this.right + matchingQuesData[i][2] + "] > div[id*=label] > div")
            ];
        }
        return rightMap;
    },

    matchingClick: async function (matchingQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        let res;
        for (let i = 0; i < matchingQuesData.length; i++) {
            res = await action.click(this.left + matchingQuesData[i][0]);
            if (true == res) {
                res = await action.click(this.right + matchingQuesData[i][2]);
                if (true != res) {
                    res = res + " -- Right Element is NOT clicked";
                    await logger.logInto(await stackTrace.get(), res, 'error');
                    break;
                }
            }
            else {
                res = res + " -- Left Element is NOT clicked";
                await logger.logInto(await stackTrace.get(), res, 'error');
                break;
            }
        }
        await action.switchToParentFrame();
        return res;
    },


}