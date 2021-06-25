"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

   

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = true;
        res = this.get_DashboardPage_Data();
        res.pageStatus = pageStatus;
        return res;
    },

    get_DashboardPage_Data: function () {
        logger.logInto(stackTrace.get());
        let obj = {
                 }
        return obj;
    }


}

