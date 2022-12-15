"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    name: selectorFile.createInstitutionPage.name,
    countryDropdown: selectorFile.createInstitutionPage.countryDropdown,
    countryList: selectorFile.createInstitutionPage.countryList,
    apartment: selectorFile.createInstitutionPage.apartment,
    street: selectorFile.createInstitutionPage.street,
    city: selectorFile.createInstitutionPage.city,
    state: selectorFile.createInstitutionPage.state,
    zip: selectorFile.createInstitutionPage.zip,
    telephone: selectorFile.createInstitutionPage.telephone,
    website: selectorFile.createInstitutionPage.website,
    email: selectorFile.createInstitutionPage.email,
    nextBtn: selectorFile.createInstitutionPage.nextBtn,
    previousBtn: selectorFile.createInstitutionPage.previousBtn,
    summaryListItems: selectorFile.createInstitutionPage.summaryListItems,
    successSvg: selectorFile.createInstitutionPage.successSvg,
    failureSvg: selectorFile.createInstitutionPage.failureSvg,
    matchingRecord: selectorFile.createInstitutionPage.matchingRecord,
    closeBtn: selectorFile.createInstitutionPage.closeBtn,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.nextBtn);
        await browser.pause(3000);
        return res;
    },

    set_Name: async function (text, sel) {
        await logger.logInto(await stackTrace.get());
        let res;
        if (sel)
            res = await action.setValue(sel, text);
        else
            res = await action.setValue(this.name, text);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    select_Country: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await action.click(this.countryDropdown);
        await browser.pause(1000);
        if (res == true) {
            var list = [];
            list = await action.findElements(this.countryList);
            res = false;
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(list[i])) == text) {
                    //await action.scrollIntoView(list[i]);
                    res = await action.click(list[i]);
                    break;
                }
            }
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Apartment: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.apartment);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Street: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.street);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_City: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.city);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_State: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.state);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Zip: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.zip);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Telephone: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.telephone);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Website: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.website);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    set_Email: async function (text) {
        await logger.logInto(await stackTrace.get());
        let res;
        res = await this.set_Name(text, this.email);
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    click_Next_Button: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.nextBtn);
        if (res == true) {
            res = await this.get_Institution_Request_Status();
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    click_Previous_Button: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.previousBtn);
        if (res == true) {
            res = await this.get_Institution_Request_Status();
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    get_Next_Button_Status: async function () {
        await logger.logInto(await stackTrace.get());
        return await action.isClickable(this.nextBtn);
    },

    get_Institution_Request_Status: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForClickable(this.nextBtn);
        var obj = {};
        obj = {
            isSummary: await action.isDisplayed(this.summaryListItems),
            isSuccess: await action.isDisplayed(this.successSvg),
            isFailure: await action.isDisplayed(this.failureSvg),
            isMatching: await action.isDisplayed(this.matchingRecord)
        }
        await logger.logInto(await stackTrace.get(), obj);
        return obj;
    },

    click_Close_Button: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.closeBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.nextBtn, undefined, true);
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    }

}