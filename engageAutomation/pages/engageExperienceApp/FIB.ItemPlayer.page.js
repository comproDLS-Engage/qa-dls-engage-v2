'use strict';
const DNDonImageItemPlayerPage = require('./DNDonImage.itemPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    source: selectorFile.css.ComproEngage.FIB.source,
    target: selectorFile.css.ComproEngage.FIB.target,

    isInitialized: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        let data = await DNDonImageItemPlayerPage.isInitialized(fibQuesData)
        return data;
    },

    getSourceData: async function (qIndex, fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await DNDonImageItemPlayerPage.getSourceData(qIndex, fibQuesData);
    },

    getTargetData: async function (qIndex, fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await DNDonImageItemPlayerPage.getTargetData(qIndex, fibQuesData);
    },

    dragAndDrop: async function (fibQuesData) {
        return await DNDonImageItemPlayerPage.dragAndDrop(fibQuesData);
    },

    dragAndDropClick: async function (fibQuesData) {
        return await DNDonImageItemPlayerPage.dragAndDropClick(fibQuesData);
    }

}