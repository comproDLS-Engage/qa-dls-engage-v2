'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var itemplayer = require('./itemPlayer.page.js');
var testplayer = require('./testPlayer.page.js');
var res, qIndex, value;

module.exports = {

    left: selectorFile.css.ComproEngage.Matching.left,
    right: selectorFile.css.ComproEngage.Matching.right,

    isInitialized: function (matchingQuesData) {
        logger.logInto(stackTrace.get());
        var quesNo = (testplayer.getQuesInfo()).activeQues;
        itemplayer.switchMainFrame(0);
        matchingQuesData.leftData = this.getLeftData(quesNo - 1, matchingQuesData);
        matchingQuesData.rightData = this.getRightData(quesNo - 1, matchingQuesData);
        // itemplayer.switchParentFrame();
        return matchingQuesData;
    },

    getLeftData: function (qIndex, matchingQuesData) {
        logger.logInto(stackTrace.get());
        var leftMap = [];
        let leftSelector, i;
        let option = "div[index='" + qIndex + "'] " + this.left;
        let optionLength = action.findElements(option).length;
        for (i = 0; i < optionLength; i++) {
            leftSelector = "div[index='" + qIndex + "'] " + this.left + matchingQuesData[i][0] + "]"
            value = itemplayer.getFeedbackIconDetails(leftSelector);
            leftMap[i] = [matchingQuesData[i][0], action.getText(leftSelector), value];
        }
        return leftMap;
    },

    getRightData: function (qIndex, matchingQuesData) {
        logger.logInto(stackTrace.get());
        var rightMap = [];
        let rightSelector, i;
        let option = "div[index='" + qIndex + "'] " + this.right;
        let optionLength = action.findElements(option).length;
        for (i = 0; i < optionLength; i++) {
            rightSelector = "div[index='" + qIndex + "'] " + this.right + matchingQuesData[i][2] + "]"
            rightMap[i] = [matchingQuesData[i][2], action.getText(rightSelector)];
        }
        return rightMap;
    },

    matchingClick: function (matchingQuesData) {
        qIndex = ((testplayer.getQuesInfo()).activeQues) - 1;
        itemplayer.switchMainFrame(0);
        var leftPath, rightPath, i;
        for (i = 0; i < matchingQuesData.length; i++) {
            leftPath = "div[index='" + qIndex + "'] " + this.left + matchingQuesData[i][0] + "]";
            rightPath = "div[index='" + qIndex + "'] " + this.right + matchingQuesData[i][2] + "]";
            res = action.click(leftPath);
            if (true == res)
                res = action.click(rightPath);
            else {
                res = res + " -- Left Element is NOT clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        // itemplayer.switchParentFrame();
        return res;
    },


}