"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    pageTitle: selectorFile.common.pageTitle,
    userSearchInput: selectorFile.findUserPage.userSearchInput,
    searchIconBtn: selectorFile.findUserPage.searchIconBtn,
    userList: selectorFile.findUserPage.userList,
    emailOption: selectorFile.findUserPage.emailOption,
    firstNameOption: selectorFile.findUserPage.firstNameOption,
    lastNameOption: selectorFile.findUserPage.lastNameOption,
    userIdOption: selectorFile.findUserPage.userIdOption,
    userDetailsSection: selectorFile.findUserPage.userDetailsSection,
    disableEnableUserBtn: selectorFile.findUserPage.disableEnableUserBtn,
    dialogConfirmBtn: selectorFile.findUserPage.dialogConfirmBtn,
    entitlementMoreOptions: selectorFile.findUserPage.entitlementMoreOptions,
    removeEntitlementBtn: selectorFile.findUserPage.removeEntitlementBtn,
    viewClassAsTeacherBtn: selectorFile.findUserPage.viewClassAsTeacherBtn,
    loginAsThisUserBtn: selectorFile.findUserPage.loginAsThisUserBtn,
    redeemAccessCodeBtn: selectorFile.findUserPage.redeemAccessCodeBtn,
    entitleUserBtn: selectorFile.findUserPage.entitleUserBtn,
    findAnotherUserBtn: selectorFile.findUserPage.findAnotherUserBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    name: selectorFile.findUserPage.name,
    email: selectorFile.findUserPage.email,
    role: selectorFile.findUserPage.role,
    userId: selectorFile.findUserPage.userId,
    redeemBtn: selectorFile.findUserPage.redeemBtn,
    accessCodeInput: selectorFile.findUserPage.accessCodeInput,
    snackbarLbl: selectorFile.common.snackbarLbl,
    snackbarBtn: selectorFile.common.snackbarBtn,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDisplayed(this.loadingContainer);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.waitForDisplayed(this.pageTitle);
        await browser.pause(3000);
        return res;
    },

    getUserList: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.getElementCount(this.userList);
        return res;
    },

    click_User_in_List: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.userList);
        if (res == true) {
            res = await action.waitForDisplayed(this.userDetailsSection);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    get_User_Details: async function () {
        await logger.logInto((await stackTrace.get()));
        if (await action.isDisplayed(this.userDetailsSection)) {
            res = await action.click(this.userDetailsSection);
        }
        var obj = {
            name: ((await action.getElementCount(this.name)) > 0) ? await action.getText(this.name) : null,
            email: ((await action.getElementCount(this.email)) > 0) ? await action.getText(this.email) : null,
            role: ((await action.getElementCount(this.role)) > 0) ? await action.getText(this.role) : null,
            userId: ((await action.getElementCount(this.userId)) > 0) ? await action.getText(this.userId) : null
        };
        return obj;
    },

    click_DisableEnableUser_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.disableEnableUserBtn);
        if (res == true) {
            await action.waitForDisplayed(this.dialogConfirmBtn);
            res = await action.getText(this.dialogConfirmBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_DialogConfirm_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.dialogConfirmBtn + "," + this.removeEntitlementBtn);
        if (res == true) {
            await action.waitForDisplayed(this.snackbarLbl);
            res = await action.getText(this.snackbarLbl);
            await action.click(this.snackbarBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_EntitleUser_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.entitleUserBtn);
        if (res == true) {
            res = await require('./entitleUser.page.js').isInitialized();
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    find_Another_User: async function (val) {
        await logger.logInto((await stackTrace.get()));
        let res = await action.click(this.findAnotherUserBtn);
        if (res == true) {
            res = await action.waitForDisplayed(this.userSearchInput);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    click_RedeemAccessCode_Button: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.entitleUserBtn);
        if (res == true) {
            await action.waitForDisplayed(this.redeemBtn);
            res = await action.isClickable(this.redeemBtn);
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    remove_Entitlement: async function () {
        await logger.logInto((await stackTrace.get()));
        res = await action.click(this.entitlementMoreOptions);
        if (res == true) {
            res = await action.click(this.removeEntitlementBtn);
            if (res == true) {
                res = await action.waitForDisplayed(this.removeEntitlementBtn);
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    search_User_ByEmail: async function (val, sel) {
        await logger.logInto((await stackTrace.get()));
        res = await action.setValue(this.userSearchInput, val);
        if (res == true) {
            if (sel == undefined)
                await action.click(this.emailOption);
            else
                await action.click(sel);
            if (res == true) {
                res = await require('./findUser.page.js').isInitialized();
            }
        }
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    search_User_ByFirstName: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await this.search_User_ByEmail(val, this.firstNameOption);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    search_User_ByLastName: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await this.search_User_ByEmail(val, this.lastNameOption);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },

    search_User_ByUserId: async function (val) {
        await logger.logInto((await stackTrace.get()));
        res = await this.search_User_ByEmail(val, this.userIdOption);
        await logger.logInto((await stackTrace.get()), res);
        return res;
    },
}