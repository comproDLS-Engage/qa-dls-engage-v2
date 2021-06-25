"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {


    pageTitle: selectorFile.css.ComproEngage.dashboardPage.pageTitle,
    resourceList: selectorFile.css.ComproEngage.dashboardPage.resourceList,
    resourceTitle: selectorFile.css.ComproEngage.dashboardPage.resourceTitle,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle);
        res = this.get_DashboardPage_Data();
        res.pageStatus = pageStatus;
        return res;
    },

    get_DashboardPage_Data: function () {
        logger.logInto(stackTrace.get());
        let obj = {
            resourceList: []
        }
        let resources;
        resources = action.findElements(this.resourceList);
        for (var i = 0; i < resources.length; i++) {
            obj.resourceList[i] = {
                resourceTitle: action.getText(this.resourceTitle + i + "\"]//p[1]"),
            }
        }
        return obj;
    },

    clickResource: function (resourceName) {
        logger.logInto(stackTrace.get());
        ret = this.get_DashboardPage_Data();
        for (var i = 0; i < ret.resourceList.length; i++) {
            if (ret.resourceList[i].resourceTitle == resourceName) {
                res = action.click(this.resourceList + i + "]");
                if (res == true) {
                    logger.logInto(stackTrace.get(), " --Resource band is clicked");
                    // res = contactStudentPage.isInitialized();
                }
                else {
                    res = res + " -- Error in clicking resource Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    }


}

