'use strict';
const DNDonImageItemPlayerPage = require('./DNDonImage.itemPlayer.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    source: selectorFile.css.ComproEngage.FIB.source,
    target: selectorFile.css.ComproEngage.FIB.target,

    isInitialized: function (fibQuesData) {
        logger.logInto(stackTrace.get());
        let data = DNDonImageItemPlayerPage.isInitialized(fibQuesData)
        return data;
    },

    getSourceData: function (qIndex, fibQuesData) {
        logger.logInto(stackTrace.get());
        return DNDonImageItemPlayerPage.getSourceData(qIndex, fibQuesData);
    },

    getTargetData: function (qIndex, fibQuesData) {
        logger.logInto(stackTrace.get());
        
        return DNDonImageItemPlayerPage.getTargetData(qIndex, fibQuesData);
    },

    dragAndDrop: function (fibQuesData) {
        return DNDonImageItemPlayerPage.dragAndDrop(fibQuesData);
    },

    dragAndDropClick: function (fibQuesData) {
        return DNDonImageItemPlayerPage.dragAndDropClick(fibQuesData);
    }

}