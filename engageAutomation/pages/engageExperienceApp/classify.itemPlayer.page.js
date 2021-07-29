'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
const DNDonImageItemPlayerPage = require('./DNDonImage.itemPlayer.page.js');
var itemplayer = require('./itemPlayer.page.js');
var testplayer = require('./testPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    target: selectorFile.css.ComproEngage.dragAndDrop.target,

    isInitialized: function (classifyQuesData, quesType) {
        logger.logInto(stackTrace.get());
        var data = {
            sourceData: [],
            targetData: []
        };
        var qIndex = (testplayer.getQuesInfo()).activeQues;
        action.switchToFrame(0);
        data.sourceData = this.getSourceData(qIndex, classifyQuesData);
        data.targetData = this.getTargetData(qIndex, classifyQuesData, quesType);
        action.switchToParentFrame();
        return data;
    },

    getSourceData: function (qIndex, classifyQuesData) {
        logger.logInto(stackTrace.get());
        return DNDonImageItemPlayerPage.getSourceData(qIndex, classifyQuesData.key1);
    },

    getTargetData: function (qIndex, classifyQuesData, quesType) {
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='source-option']";
        var targetMap = {
            key1: [],
            key2: []
        };
        let value;
        let optionLength = action.findElements(option).length;
        for (let i = 0; i < optionLength; i++) {
            var selector = "div[index='" + qIndex + "'] " + this.target + classifyQuesData.key1[i][2] + "] " + "[data-tid=dropped-option-" + classifyQuesData.key1[i][0] + "] ";
            var selectorText = selector + "[data-tid=text-placeholder]";
            value = itemplayer.getFeedbackIconDetails(selector, quesType);
            var sts = action.getElementCount(selectorText)
            if (sts !== 0)
                targetMap.key1[i] = [classifyQuesData.key1[i][2], action.getText(selectorText), value];
            else
                targetMap.key1[i] = [classifyQuesData.key1[i][2], "", value];
        }
        let targets = "div[index='" + qIndex + "'] " + "[data-tid*='target-option']";
        let targetsLength = action.findElements(targets).length;
        for (let i = 0; i < targetsLength; i++) {
            var targetSelector = "div[index='" + qIndex + "'] " + this.target + classifyQuesData.key2[i][0] + "] ";
            var targetSelectorText = targetSelector + "div div"
            value = itemplayer.getFeedbackIconDetails(targetSelector, quesType);
            var sts = action.getElementCount(targetSelector)
            if (sts !== 0)
                targetMap.key2[i] = [classifyQuesData.key2[i][0], action.getText(targetSelectorText), value];
            else
                targetMap.key2[i] = [classifyQuesData.key2[i][0], "", value];
        }
        return targetMap;
    },

    dragAndDrop: function (classifyQuesData) {
        return DNDonImageItemPlayerPage.dragAndDropClick(classifyQuesData.key1);
    }

    /*dragAndDropClick: function (fibQuesData) {
        return DNDonImageItemPlayerPage.dragAndDropClick(fibQuesData);
    }*/

}