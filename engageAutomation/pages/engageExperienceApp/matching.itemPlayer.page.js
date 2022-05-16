'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require('./itemPlayer.page.js');
var res, qIndex, value;

module.exports = {

    left: selectorFile.css.ComproEngage.Matching.left,
    right: selectorFile.css.ComproEngage.Matching.right,

    isInitialized: async function (matchingQuesData) {
        await logger.logInto(stackTrace.get());
        var qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        matchingQuesData.leftData = await this.getLeftData(qIndex, matchingQuesData);
        matchingQuesData.rightData = await this.getRightData(qIndex, matchingQuesData);
        await action.switchToParentFrame();
        return matchingQuesData;
    },

    getLeftData: async function (qIndex, matchingQuesData) {
        await logger.logInto(stackTrace.get());
        var leftMap = [];
        let leftSelector, i, leftSelectorIcon;
        let option = "div[index='" + qIndex + "'] " + this.left;
        let optionLength = (await action.findElements(option)).length;
        for (i = 0; i < optionLength; i++) {
            leftSelector = "div[index='" + qIndex + "'] " + this.left + matchingQuesData[i][0] + "] div[id=" + matchingQuesData[i][0] + "label]";
            leftSelectorIcon = "div[index='" + qIndex + "'] " + this.left + matchingQuesData[i][0] + "]";
            value = await itemplayer.getFeedbackIconDetails(leftSelectorIcon);
            leftMap[i] = [matchingQuesData[i][0], await action.getText(leftSelector), value];
        }
        return leftMap;
    },

    getRightData: async function (qIndex, matchingQuesData) {
        await logger.logInto(stackTrace.get());
        var rightMap = [];
        let rightSelector, i;
        let option = "div[index='" + qIndex + "'] " + this.right;
        let optionLength = (await action.findElements(option)).length;
        for (i = 0; i < optionLength; i++) {
            rightSelector = "div[index='" + qIndex + "'] " + this.right + matchingQuesData[i][2] + "] div[id=" + matchingQuesData[i][2] + "label]";
            rightMap[i] = [matchingQuesData[i][2], await action.getText(rightSelector)];
        }
        return rightMap;
    },

    matchingClick: async function (matchingQuesData) {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        var leftPath, rightPath, i;
        for (i = 0; i < matchingQuesData.length; i++) {
            leftPath = "div[index='" + qIndex + "'] " + this.left + matchingQuesData[i][0] + "]";
            rightPath = "div[index='" + qIndex + "'] " + this.right + matchingQuesData[i][2] + "]";
            res = await action.click(leftPath);
            if (true == res)
                res = await action.click(rightPath);
            else {
                res = res + " -- Left Element is NOT clicked";
                await logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    },


}