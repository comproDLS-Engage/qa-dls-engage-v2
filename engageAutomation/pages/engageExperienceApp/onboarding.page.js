"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');

module.exports = {
    welcomeTxt: selectorFile.css.ComproEngage.onboarding.welcomeTxt,
    welcomeSubtitleTxt: selectorFile.css.ComproEngage.onboarding.welcomeSubtitleTxt,
    completeStepsTitleTxt: selectorFile.css.ComproEngage.onboarding.completeStepsTitleTxt,
    completeStepsSubtitleTxt: selectorFile.css.ComproEngage.onboarding.completeStepsSubtitleTxt,
    joinSchoolTxt: selectorFile.css.ComproEngage.onboarding.joinSchoolTxt,
    activateMaterialsTxt: selectorFile.css.ComproEngage.onboarding.activateMaterialsTxt,
    accessEngageTxt: selectorFile.css.ComproEngage.onboarding.accessEngageTxt,
    teacherGetStartedBtn: selectorFile.css.ComproEngage.onboarding.teacherGetStartedBtn,
    studentGetStartedBtn: selectorFile.css.ComproEngage.onboarding.studentGetStartedBtn,
    logoutBtn: selectorFile.css.ComproEngage.onboarding.logoutBtn,
    joinYourSchoolTitleTxt: selectorFile.css.ComproEngage.onboarding.joinYourSchoolTitleTxt,
    joinYourSchoolSubTitleTxt: selectorFile.css.ComproEngage.onboarding.joinYourSchoolSubTitleTxt,
    schoolKeyLbl: selectorFile.css.ComproEngage.onboarding.schoolKeyLbl,
    schoolKeyTextbox: selectorFile.css.ComproEngage.onboarding.schoolKeyTextbox,
    schoolKeySubLbl: selectorFile.css.ComproEngage.onboarding.schoolKeySubLbl,
    joinSchoolHelperTxt: selectorFile.css.ComproEngage.onboarding.joinSchoolHelperTxt,
    verifyBtn: selectorFile.css.ComproEngage.onboarding.verifyBtn,
    continueBtn: selectorFile.css.ComproEngage.onboarding.continueBtn,
    joinSchoolBackBtn: selectorFile.css.ComproEngage.onboarding.joinSchoolBackBtn,
    schoolNameTxt: selectorFile.css.ComproEngage.onboarding.schoolNameTxt,
    addressTxt: selectorFile.css.ComproEngage.onboarding.addressTxt,
    schoolKeyErrorTxt: selectorFile.css.ComproEngage.onboarding.schoolKeyErrorTxt,
    activateMaterialsTitleTxt: selectorFile.css.ComproEngage.onboarding.activateMaterialsTitleTxt,
    activateMaterialsSubTitleTxt: selectorFile.css.ComproEngage.onboarding.activateMaterialsSubTitleTxt,
    accessKeyLbl: selectorFile.css.ComproEngage.onboarding.accessKeyLbl,
    accessKeyTextbox: selectorFile.css.ComproEngage.onboarding.accessKeyTextbox,
    accessKeySubLbl: selectorFile.css.ComproEngage.onboarding.accessKeySubLbl,
    activateMaterialHelperTxt: selectorFile.css.ComproEngage.onboarding.activateMaterialHelperTxt,
    activateMaterialsBtn: selectorFile.css.ComproEngage.onboarding.activateMaterialsBtn,
    activateErrorTxt: selectorFile.css.ComproEngage.onboarding.activateErrorTxt,
    teacherActivateMaterialsBackBtn: selectorFile.css.ComproEngage.onboarding.teacherActivateMaterialsBackBtn,
    studentActivateMaterialsBackBtn: selectorFile.css.ComproEngage.onboarding.studentActivateMaterialsBackBtn,
    progressBar: selectorFile.css.ComproEngage.onboarding.progressBar,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.welcomeTxt),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_welcomePage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            welcomeTxt: ((await action.getElementCount(this.welcomeTxt)) > 0) ? await action.getText(this.welcomeTxt) : null,
            welcomeSubtitleTxt: ((await action.getElementCount(this.welcomeSubtitleTxt)) > 0) ? await action.getText(this.welcomeSubtitleTxt) : null,
            completeStepsTitleTxt: ((await action.getElementCount(this.completeStepsTitleTxt)) > 0) ? await action.getText(this.completeStepsTitleTxt) : null,
            completeStepsSubtitleTxt: ((await action.getElementCount(this.completeStepsSubtitleTxt)) > 0) ? await action.getText(this.completeStepsSubtitleTxt) : null,
            joinSchoolTxt: ((await action.getElementCount(this.joinSchoolTxt)) > 0) ? await action.getText(this.joinSchoolTxt) : null,
            activateMaterialsTxt: ((await action.getElementCount(this.activateMaterialsTxt)) > 0) ? await action.getText(this.activateMaterialsTxt) : null,
            accessEngageTxt: ((await action.getElementCount(this.accessEngageTxt)) > 0) ? await action.getText(this.accessEngageTxt) : null,
            teacherGetStartedBtn: ((await action.getElementCount(this.teacherGetStartedBtn)) > 0) ? await action.getText(this.teacherGetStartedBtn) : null,
            studentGetStartedBtn: ((await action.getElementCount(this.studentGetStartedBtn)) > 0) ? await action.getText(this.studentGetStartedBtn) : null,
            logoutBtn: ((await action.getElementCount(this.logoutBtn)) > 0) ? await action.getText(this.logoutBtn) : null,
        }
        return obj;
    },

    getData_joinYourSchoolPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            joinYourSchoolTitleTxt: ((await action.getElementCount(this.joinYourSchoolTitleTxt)) > 0) ? await action.getText(this.joinYourSchoolTitleTxt) : null,
            joinYourSchoolSubTitleTxt: ((await action.getElementCount(this.joinYourSchoolSubTitleTxt)) > 0) ? await action.getText(this.joinYourSchoolSubTitleTxt) : null,
            schoolKeyLbl: ((await action.getElementCount(this.schoolKeyLbl)) > 0) ? await action.getText(this.schoolKeyLbl) : null,
            schoolKeyTextbox: ((await action.getElementCount(this.schoolKeyTextbox)) > 0) ? await action.getAttribute(this.schoolKeyTextbox, 'value') : null,
            schoolKeySubLbl: ((await action.getElementCount(this.schoolKeySubLbl)) > 0) ? await action.getText(this.schoolKeySubLbl) : null,
            joinSchoolHelperTxt: ((await action.getElementCount(this.joinSchoolHelperTxt)) > 0) ? await action.getText(this.joinSchoolHelperTxt) : null,
            verifyBtn: ((await action.getElementCount(this.verifyBtn)) > 0) ? await action.getText(this.verifyBtn) : null,
            continueBtn: ((await action.getElementCount(this.continueBtn)) > 0) ? await action.getText(this.continueBtn) : null,
            joinSchoolBackBtn: ((await action.getElementCount(this.joinSchoolBackBtn)) > 0) ? await action.getText(this.joinSchoolBackBtn) : null,
            schoolNameTxt: ((await action.getElementCount(this.schoolNameTxt)) > 0) ? await action.getText(this.schoolNameTxt) : null,
            addressTxt: ((await action.getElementCount(this.addressTxt)) > 0) ? await action.getText(this.addressTxt) : null,
            schoolKeyErrorTxt: ((await action.getElementCount(this.schoolKeyErrorTxt)) > 0) ? await action.getText(this.schoolKeyErrorTxt) : null,
            continueBtnState: ((await action.getElementCount(this.continueBtn)) > 0) ? await action.getAttribute(this.continueBtn, "disabled") : null
        }
        return obj;
    },

    getData_activateMaterialsPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            activateMaterialsTitleTxt: ((await action.getElementCount(this.activateMaterialsTitleTxt)) > 0) ? await action.getText(this.activateMaterialsTitleTxt) : null,
            activateMaterialsSubTitleTxt: ((await action.getElementCount(this.activateMaterialsSubTitleTxt)) > 0) ? await action.getText(this.activateMaterialsSubTitleTxt) : null,
            accessKeyLbl: ((await action.getElementCount(this.accessKeyLbl)) > 0) ? await action.getText(this.accessKeyLbl) : null,
            accessKeyTextbox: ((await action.getElementCount(this.accessKeyTextbox)) > 0) ? await action.getText(this.accessKeyTextbox) : null,
            accessKeySubLbl: ((await action.getElementCount(this.accessKeySubLbl)) > 0) ? await action.getText(this.accessKeySubLbl) : null,
            activateMaterialHelperTxt: ((await action.getElementCount(this.activateMaterialHelperTxt)) > 0) ? await action.getText(this.activateMaterialHelperTxt) : null,
            activateMaterialsBtn: ((await action.getElementCount(this.activateMaterialsBtn)) > 0) ? await action.getText(this.activateMaterialsBtn) : null,
            activateErrorTxt: ((await action.getElementCount(this.activateErrorTxt)) > 0) ? await action.getText(this.activateErrorTxt) : null,
            teacherActivateMaterialsBackBtn: ((await action.getElementCount(this.teacherActivateMaterialsBackBtn)) > 0) ? await action.getText(this.teacherActivateMaterialsBackBtn) : null,
            studentActivateMaterialsBackBtn: ((await action.getElementCount(this.studentActivateMaterialsBackBtn)) > 0) ? await action.getText(this.studentActivateMaterialsBackBtn) : null,
        }
        return obj;
    },


    click_teacherGetStartedBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.teacherGetStartedBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " teacherGetStartedBtn is clicked");
            res = await action.waitForDisplayed(this.verifyBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "teacherGetStartedBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_studentGetStartedBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.studentGetStartedBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " studentGetStartedBtn is clicked");
            res = await action.waitForDisplayed(this.activateMaterialsBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "studentGetStartedBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_logoutBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.logoutBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " logoutBtn is clicked");
            res = await require('./login.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "logoutBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_verifyBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.verifyBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " verifyBtn is clicked");
            await browser.pause(1000);
            res = await action.waitForDisplayed(this.progressBar, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "verifyBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_continueBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.continueBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " continueBtn is clicked");
            res = await action.waitForDisplayed(this.activateMaterialsBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "continueBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_joinSchoolBackBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.joinSchoolBackBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " joinSchoolBackBtn is clicked");
            res = await this.getData_welcomePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "joinSchoolBackBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_activateMaterialsBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.activateMaterialsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " activateMaterialsBtn is clicked");
            await browser.pause(1000);
            res = await action.waitForDisplayed(this.progressBar, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "activateMaterialsBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_teacherActivateMaterialsBackBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.teacherActivateMaterialsBackBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " teacherActivateMaterialsBackBtn is clicked");
            res = await this.getData_joinYourSchoolPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "teacherActivateMaterialsBackBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_studentActivateMaterialsBackBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.studentActivateMaterialsBackBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " studentActivateMaterialsBackBtn is clicked");
            res = await this.getData_welcomePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "studentActivateMaterialsBackBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_schoolKeyTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.schoolKeyTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in schoolKeyTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in schoolKeyTextbox", 'error');
        }
        return res;
    },

    set_accessKeyTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.accessKeyTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in accessKeyTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in accessKeyTextbox", 'error');
        }
        return res;
    }

}

