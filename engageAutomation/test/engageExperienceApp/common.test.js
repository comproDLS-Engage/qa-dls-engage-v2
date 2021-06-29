"use strict";
let sts;
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {
    snackbarInfo_txt: selectorFile.css.ComproEngage.widgets.snackbarInfo_txt,
    snackbarClose_btn: selectorFile.css.ComproEngage.widgets.snackbarClose_btn,
    logout_from_app: function () {
        let header = require('../../pages/engageExperienceApp/header.page.js');
        sts = header.clickProfileMenuSignout();
    },
    get_Snackbar_Message_Text: function () {
        let res = action.waitForDisplayed(this.snackbarInfo_txt)
        if (res == true) {
            res = action.getText(this.snackbarInfo_txt)
            logger.logInto(stackTrace.get(), res);
            if (action.waitForDisplayed(this.snackbarClose_btn)){
            action.click(this.snackbarClose_btn)
            }
        } else
            logger.logInto(stackTrace.get(), res + " -- Snackbar Alert Not displayed");
        return res;
    },
    
}