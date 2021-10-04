"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    snackbarInfo_txt: selectorFile.css.ComproEngage.widgets.snackbarInfo_txt,
    snackbarClose_btn: selectorFile.css.ComproEngage.widgets.snackbarClose_btn,

    /*logout_from_app: function () {
        logger.logInto(stackTrace.get());
        let appShell = require('../../pages/engageExperienceApp/appShell.page.js');
        appShell.clickProfileButton();
        appShell.clickLogoutButton();
    },*/

    get_Snackbar_Message_Text: function () {
        logger.logInto(stackTrace.get());
        let res = action.waitForDisplayed(this.snackbarInfo_txt, 60000)
        if (res == true) {
            res = action.getText(this.snackbarInfo_txt)
            logger.logInto(stackTrace.get(), res);
            if (action.waitForDisplayed(this.snackbarClose_btn)) {
                action.click(this.snackbarClose_btn)
            }
        } else
            logger.logInto(stackTrace.get(), res + " -- Snackbar Alert Not displayed");
        return res;
    },

    clickMenuClass_btn: function () {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed("[data-tid=button-classes]")
        action.click("[data-tid=button-classes]")
        //action.waitForDisplayed(this.myClassesTab);
    },

}