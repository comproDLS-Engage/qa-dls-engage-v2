'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
const dndOnImagePage = require('./dndOnImage.itemplayer.page.js');
const itemplayer = require('./itemPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    source: dndOnImagePage.source,
    target: dndOnImagePage.target,
    droppedOption: selectorFile.css.ComproEngage.classify.droppedOption,
    textPlaceholder: selectorFile.css.ComproEngage.classify.textPlaceholder,

    isInitialized: async function (quesData, quesType) {
        await logger.logInto(await stackTrace.get());
        var data = {
            sourceData: [],
            targetData: []
        };
        await action.switchToFrame(0);
        data.sourceData = await this.getSourceData(quesData.key1);
        data.targetData = await this.getTargetData(quesData, quesType);
        await action.switchToParentFrame();
        return data;
    },

    getSourceData: async function (quesData) {
        await logger.logInto(await stackTrace.get());
        return await dndOnImagePage.getSourceData(quesData);
    },

    getTargetData: async function (quesData, quesType) {
        await logger.logInto(await stackTrace.get());
        var targetMap = {
            key1: [],
            key2: []
        };
        var optionSel;
        let optionLength = (await action.findElements(this.source)).length;
        for (let i = 0; i < optionLength; i++) {
            optionSel = this.droppedOption + quesData.key1[i][0];
            targetMap.key1[i] = [
                quesData.key1[i][2],
                (await action.getElementCount(optionSel + this.textPlaceholder) == 1) ? await action.getText(optionSel + this.textPlaceholder) : null,
                await itemplayer.getFeedbackIconDetails(optionSel + "]", quesType)
            ];

        }
        var targetSel;
        let targetsLength = (await action.findElements(this.target)).length;
        for (let i = 0; i < targetsLength; i++) {
            var targetSel = this.target + quesData.key2[i][0];
            targetMap.key2[i] = [
                quesData.key2[i][0],
                (await action.getElementCount(targetSel + "] > div > div[class]") == 1) ? await action.getText(targetSel + "] > div > div[class]") : null,
                await itemplayer.getFeedbackIconDetails(targetSel + "] ", quesType)
            ];
        }
        return targetMap;
    },

    dragAndDrop: async function (quesData) {
        await logger.logInto(await stackTrace.get());
        return await dndOnImagePage.dragAndDrop(quesData.key1);
    },

    dragAndDropClick: async function (quesData) {
        await logger.logInto(await stackTrace.get());
        return await dndOnImagePage.dragAndDropClick(quesData.key1);
    }

}