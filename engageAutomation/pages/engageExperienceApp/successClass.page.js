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
    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loaderIcon, undefined, true);
        let pageStatus = await action.waitForDisplayed(this.success_img)
        res = await this.get_SuccessPageData();
        res.pageStatus = pageStatus;
        return res;
    },
    get_SuccessPageData: async function () {
        await logger.logInto(await stackTrace.get());
        var obj = {
            pageTitle: (await action.getElementCount(this.pageTitle)) > 0 ? await action.getText(this.pageTitle) : null,
            pageSubTitle: (await action.getElementCount(this.pageSubTitle)) > 0 ? await action.getText(this.pageSubTitle) : null,
            viewClassbtn: (await action.getElementCount(this.viewClassbtn)) > 0 ? await action.getText(this.viewClassbtn) : null,
            backToHomeBtn_txt: (await action.getElementCount(this.backToHomeBtn)) > 0 ? await action.getText(this.backToHomeBtn) : null,
            className_txt: (await action.getElementCount(this.className_txt)) > 0 ? await action.getText(this.className_txt) : null,
            successCaption_txt: (await action.getElementCount(this.successCaption_txt)) > 0 ? await action.getText(this.successCaption_txt) : null,
            copy_txt: (await action.getElementCount(this.copy_btn)) > 0 ? await action.getText(this.copy_btn) : null,
            classKey_value: (await action.getElementCount(this.classKey_value)) > 0 ? await action.getText(this.classKey_value) : null,
            copy_btn: (await action.getElementCount(this.copy_btn)) > 0 ? await action.waitForExist(this.copy_btn) : null,
        }
        return obj;
    },
    click_ViewClass_Button: async function () {
        if (argv.deviceName) {
            await action.hideKeyboard()
        }
        res = await action.click(this.viewClassbtn);
        if (res == true) {
            res = await teacherViewClass.isInitialized()
        }
        else {
            res = res + " -- viewclassBtn is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    click_Close_Button: async function () {
        await action.waitForClickable(this.backToHomeBtn)
        res = await action.click(this.backToHomeBtn);
        console.log(res)
        if (res == true) {
            var classDashboardPage = require('./classDashboard.page.js');
            res = await classDashboardPage.isInitialized();
        }
        else {
            res = res + " -- headerBack_btn is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    }
}