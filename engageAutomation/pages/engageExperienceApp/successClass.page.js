'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var teacherViewClass = require('./teacherViewClass.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;
module.exports = {
    viewClassbtn: selectorFile.css.ComproEngage.successClassPage.viewClass,
    backToHomeBtn: selectorFile.css.ComproEngage.successClassPage.backToHomeBtn,
    success_img: selectorFile.css.ComproEngage.successClassPage.success_img,
    className_txt: selectorFile.css.ComproEngage.successClassPage.className_txt,
    successCaption_txt: selectorFile.css.ComproEngage.successClassPage.successCaption_txt,
    classKey_value: selectorFile.css.ComproEngage.successClassPage.classKey_value,
    copy_btn: selectorFile.css.ComproEngage.successClassPage.copy_btn,
    loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
    pageTitle: selectorFile.css.ComproEngage.createClassPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.createClassPage.pageSubTitle,
    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.loaderIcon, undefined, true);
        let pageStatus = action.waitForDisplayed(this.success_img)
        res = this.get_SuccessPageData();
        res.pageStatus = pageStatus;
        return res;
    },
    get_SuccessPageData: function () {
        logger.logInto(stackTrace.get());
        var obj = {
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            viewClassbtn: action.getElementCount(this.viewClassbtn) > 0 ? action.getText(this.viewClassbtn) : null,
            backToHomeBtn_txt: action.getElementCount(this.backToHomeBtn) > 0 ? action.getText(this.backToHomeBtn) : null,
            className_txt: action.getElementCount(this.className_txt) > 0 ? action.getText(this.className_txt) : null,
            successCaption_txt: action.getElementCount(this.successCaption_txt) > 0 ? action.getText(this.successCaption_txt) : null,
            copy_txt: action.getElementCount(this.copy_btn) > 0 ? action.getText(this.copy_btn) : null,
            classKey_value: action.getElementCount(this.classKey_value) > 0 ? action.getText(this.classKey_value) : null,
            copy_btn: action.getElementCount(this.copy_btn) > 0 ? action.waitForExist(this.copy_btn) : null,
        }
        return obj;
    },
    click_ViewClass_Button: function () {
        if (argv.deviceName) {
            action.hideKeyboard()
        }
        res = action.click(this.viewClassbtn);
        if (res == true) {
            res = teacherViewClass.isInitialized()
        }
        else {
            res = res + " -- viewclassBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    click_Close_Button: function () {
        action.waitForClickable(this.backToHomeBtn)
        res = action.click(this.backToHomeBtn);
        console.log(res)
        if (res == true) {
            var classDashboardPage = require('./classDashboard.page.js');
            res = classDashboardPage.isInitialized();
        }
        else {
            res = res + " -- headerBack_btn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    }
}