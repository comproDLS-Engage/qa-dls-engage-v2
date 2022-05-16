'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
const DNDonImageItemPlayerPage = require('./DNDonImage.itemPlayer.page.js');
const itemplayer = require('./itemPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    target: selectorFile.css.ComproEngage.dragAndDrop.target,

    isInitialized: async function (classifyQuesData, quesType) {
        await logger.logInto(stackTrace.get());
        var data = {
            sourceData: [],
            targetData: []
        };
        var qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        data.sourceData = await this.getSourceData(qIndex, classifyQuesData);
        data.targetData = await this.getTargetData(qIndex, classifyQuesData, quesType);
        await action.switchToParentFrame();
        return data;
    },

    getSourceData: async function (qIndex, classifyQuesData) {
        await logger.logInto(stackTrace.get());
        return DNDonImageItemPlayerPage.getSourceData(qIndex, classifyQuesData.key1);
    },

    getTargetData: async function (qIndex, classifyQuesData, quesType) {
        await logger.logInto(stackTrace.get());
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='source-option']";
        var targetMap = {
            key1: [],
            key2: []
        };
        let value;
        let optionLength = (await action.findElements(option)).length;
        for (let i = 0; i < optionLength; i++) {
            var selector = "div[index='" + qIndex + "'] " + this.target + classifyQuesData.key1[i][2] + "] " + "[data-tid=dropped-option-" + classifyQuesData.key1[i][0] + "] ";
            var selectorText = selector + "[data-tid=text-placeholder]";
            value = await itemplayer.getFeedbackIconDetails(selector, quesType);
            var sts = await action.getElementCount(selectorText)
            if (sts !== 0)
                targetMap.key1[i] = [classifyQuesData.key1[i][2], await action.getText(selectorText), value];
            else
                targetMap.key1[i] = [classifyQuesData.key1[i][2], "", value];
        }
        let targets = "div[index='" + qIndex + "'] " + "[data-tid*='target-option']";
        let targetsLength = (await action.findElements(targets)).length;
        for (let i = 0; i < targetsLength; i++) {
            var targetSelector = "div[index='" + qIndex + "'] " + this.target + classifyQuesData.key2[i][0] + "] ";
            var targetSelectorText = targetSelector + "div div"
            value = await itemplayer.getFeedbackIconDetails(targetSelector, quesType);
            var sts = await action.getElementCount(targetSelector)
            if (sts !== 0)
                targetMap.key2[i] = [classifyQuesData.key2[i][0], await action.getText(targetSelectorText), value];
            else
                targetMap.key2[i] = [classifyQuesData.key2[i][0], "", value];
        }
        return targetMap;
    },

    dragAndDrop: async function (classifyQuesData) {
        await logger.logInto(stackTrace.get());
        return DNDonImageItemPlayerPage.dragAndDrop(classifyQuesData.key1);
    },

    dragAndDropClick: async function (classifyQuesData) {
        await logger.logInto(stackTrace.get());
        return DNDonImageItemPlayerPage.dragAndDropClick(classifyQuesData.key1);
    }

}