"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, quesNo;
var itemplayer = require('./itemPlayer.page.js');
var testplayer = require('./testPlayer.page.js');

module.exports = {

    response: selectorFile.css.ComproEngage.FIBText.response,
    responses: selectorFile.css.ComproEngage.FIBText.responses,

    isInitialized: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        var obj = {
            targetData: []
        };
        quesNo = ((testplayer.getQuesInfo()).activeQues) - 1;
        obj.targetData = this.getTargetData(quesNo, fibQuesData);
        return obj;
    },

    getTargetData: function (qIndex, fibQuesData) {
        logger.logInto(stackTrace.get());
        action.switchToFrame(0);
        let option = "div[index='" + qIndex + "'] " + this.responses;
        var targetArr = [];
        let optionLength = action.findElements(option).length;
        for (let i = 0; i < optionLength; i++) {
            var textSelector = "div[index='" + qIndex + "'] " + this.response + fibQuesData[i][0] + "] ";
            var value = itemplayer.getFeedbackIconDetails(textSelector);
            targetArr[i] = [fibQuesData[i][0], action.getValue(textSelector + "[data-tid=text-placeholder]"), value];
        }
        action.switchToParentFrame();
        return targetArr;
    },

    inputValues: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        quesNo = ((testplayer.getQuesInfo()).activeQues) - 1;
        action.switchToFrame(0);
        for (let i = 0; i < fibQuesData.length; i++) {
            var textSelector = "div[index='" + quesNo + "'] " + this.response + fibQuesData[i][0] + "] [data-tid=text-placeholder]";
            //action.switchToParentFrame();
            // testplayer.collapseTestPlayer();
            // action.switchToFrame(0)
            res = action.click(textSelector);
            browser.pause(250);
            if (true == res) {
                res = action.setValue(textSelector, fibQuesData[i][1]);
                browser.pause(250);
                logger.logInto(stackTrace.get(), res);
            }
            else {
                res = res + " -- Target text placeholder " + fibQuesData[i][0] + " is NOT clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        action.switchToParentFrame();
        return res;
    }
}