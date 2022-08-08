'use strict';
const dndPlayer = require('./DNDonImage.itemPlayer.page.js');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    isInitialized: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await dndPlayer.isInitialized(fibQuesData);;
    },

    getSourceData: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await dndPlayer.getSourceData(fibQuesData);
    },

    getTargetData: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await dndPlayer.getTargetData(fibQuesData);
    },

    dragAndDrop: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await dndPlayer.dragAndDrop(fibQuesData);
    },

    dragAndDropClick: async function (fibQuesData) {
        await logger.logInto(await stackTrace.get());
        return await dndPlayer.dragAndDropClick(fibQuesData);
    }

}