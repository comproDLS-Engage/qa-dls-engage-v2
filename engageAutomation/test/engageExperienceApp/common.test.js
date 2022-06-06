"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    snackbarInfo_txt: selectorFile.css.ComproEngage.widgets.snackbarInfo_txt,
    snackbarClose_btn: selectorFile.css.ComproEngage.widgets.snackbarClose_btn,

    /*logout_from_app: async function () {
        logger.logInto(stackTrace.get());
        let appShell = require('../../pages/engageExperienceApp/appShell.page.js');
        appShell.clickProfileButton();
        appShell.clickLogoutButton();
    },*/

    get_Snackbar_Message_Text: async function () {
        await logger.logInto(await stackTrace.get());
        let res = await action.waitForDisplayed(this.snackbarInfo_txt, 60000)
        if (res == true) {
            res = await action.getText(this.snackbarInfo_txt)
            await logger.logInto(await stackTrace.get(), res);
            if (await action.waitForDisplayed(this.snackbarClose_btn)) {
                await action.click(this.snackbarClose_btn)
            }
        } else
            await logger.logInto(await stackTrace.get(), res + " -- Snackbar Alert Not displayed");
        return res;
    },

    clickMenuClass_btn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed("[data-tid=button-classes]")
        await action.click("[data-tid=button-classes]")
        //action.waitForDisplayed(this.myClassesTab);
    },

}