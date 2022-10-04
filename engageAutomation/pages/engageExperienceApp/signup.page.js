"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    createAccountTitleTxt: selectorFile.css.ComproEngage.signUp.createAccountTitleTxt,
    createAccountSubTitleTxt: selectorFile.css.ComproEngage.signUp.createAccountSubTitleTxt,
    emailLbl: selectorFile.css.ComproEngage.signUp.emailLbl,
    emailTextbox: selectorFile.css.ComproEngage.signUp.emailTextbox,
    signUpBtn: selectorFile.css.ComproEngage.signUp.signUpBtn,
    continueWithTxt: selectorFile.css.ComproEngage.signUp.continueWithTxt,
    googleBtn: selectorFile.css.ComproEngage.signUp.googleBtn,
    facebookBtn: selectorFile.css.ComproEngage.signUp.facebookBtn,
    haveAnAccountTxt: selectorFile.css.ComproEngage.signUp.haveAnAccountTxt,
    logInBtn: selectorFile.css.ComproEngage.signUp.logInBtn,
    emailErrorTxt: selectorFile.css.ComproEngage.signUp.emailErrorTxt,
    roleSelectionTitleTxt: selectorFile.css.ComproEngage.signUp.roleSelectionTitleTxt,
    selectRoleTxt: selectorFile.css.ComproEngage.signUp.selectRoleTxt,
    studentRoleBtn: selectorFile.css.ComproEngage.signUp.studentRoleBtn,
    teacherRoleBtn: selectorFile.css.ComproEngage.signUp.teacherRoleBtn,
    continueBtn: selectorFile.css.ComproEngage.signUp.continueBtn,
    backToSignInBtn: selectorFile.css.ComproEngage.signUp.backToSignInBtn,
    roleSelectionErrorTxt: selectorFile.css.ComproEngage.signUp.roleSelectionErrorTxt,
    accountDetailsTitleTxt: selectorFile.css.ComproEngage.signUp.accountDetailsTitleTxt,
    emailTxt: selectorFile.css.ComproEngage.signUp.emailTxt,
    passwordLbl: selectorFile.css.ComproEngage.signUp.passwordLbl,
    passwordTextbox: selectorFile.css.ComproEngage.signUp.passwordTextbox,
    passwordHelperTxt: selectorFile.css.ComproEngage.signUp.passwordHelperTxt,
    confirmPasswordLbl: selectorFile.css.ComproEngage.signUp.confirmPasswordLbl,
    confirmPasswordTextbox: selectorFile.css.ComproEngage.signUp.confirmPasswordTextbox,
    passwordToggleBtn: selectorFile.css.ComproEngage.signUp.passwordToggleBtn,
    confirmPasswordToggleBtn: selectorFile.css.ComproEngage.signUp.confirmPasswordToggleBtn,
    firstNameLbl: selectorFile.css.ComproEngage.signUp.firstNameLbl,
    lastNameLbl: selectorFile.css.ComproEngage.signUp.lastNameLbl,
    firstNameTextbox: selectorFile.css.ComproEngage.signUp.firstNameTextbox,
    lastNameTextbox: selectorFile.css.ComproEngage.signUp.lastNameTextbox,
    countryLbl: selectorFile.css.ComproEngage.signUp.countryLbl,
    countryTextbox: selectorFile.css.ComproEngage.signUp.countryTextbox,
    countryArrowBtn: selectorFile.css.ComproEngage.signUp.countryArrowBtn,
    policyLineTxt: selectorFile.css.ComproEngage.signUp.policyLineTxt,
    policyLineCheckbox: selectorFile.css.ComproEngage.signUp.policyLineCheckbox,
    createAccountBtn: selectorFile.css.ComproEngage.signUp.createAccountBtn,
    backToRoleSelectionBtn: selectorFile.css.ComproEngage.signUp.backToRoleSelectionBtn,
    passwordErrorTxt: selectorFile.css.ComproEngage.signUp.passwordErrorTxt,
    confirmPasswordErrorTxt: selectorFile.css.ComproEngage.signUp.confirmPasswordErrorTxt,
    firstNameErrorTxt: selectorFile.css.ComproEngage.signUp.firstNameErrorTxt,
    lastNameErrorTxt: selectorFile.css.ComproEngage.signUp.lastNameErrorTxt,
    countryErrorTxt: selectorFile.css.ComproEngage.signUp.countryErrorTxt,
    policyLineErrorTxt: selectorFile.css.ComproEngage.signUp.policyLineErrorTxt,
    privacyPoliceLink: selectorFile.css.ComproEngage.signUp.privacyPoliceLink,
    termsOfUseLink: selectorFile.css.ComproEngage.signUp.termsOfUseLink,
    privacyPolicyTab: selectorFile.css.ComproEngage.signUp.privacyPolicyTab,
    termsOfUseTab: selectorFile.css.ComproEngage.signUp.termsOfUseTab,
    policyCancelBtn: selectorFile.css.ComproEngage.signUp.policyCancelBtn,
    policyAgreeBtn: selectorFile.css.ComproEngage.signUp.policyAgreeBtn,
    policyCrossBtn: selectorFile.css.ComproEngage.signUp.policyCrossBtn,
    googlePageHeadingTxt: selectorFile.css.ComproEngage.signUp.googlePageHeadingTxt,
    googlePageSubHeadingTxt: selectorFile.css.ComproEngage.signUp.googlePageSubHeadingTxt,
    facebookPageHeadingTxt: selectorFile.css.ComproEngage.signUp.facebookPageHeadingTxt,
    countryList: selectorFile.css.ComproEngage.signUp.countryList,
    countryItem: selectorFile.css.ComproEngage.signUp.countryItem,
    progressBar: selectorFile.css.ComproEngage.onboarding.progressBar,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.createAccountTitleTxt),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_createAccountPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            createAccountTitleTxt: ((await action.getElementCount(this.createAccountTitleTxt)) > 0) ? await action.getText(this.createAccountTitleTxt) : null,
            createAccountSubTitleTxt: ((await action.getElementCount(this.createAccountSubTitleTxt)) > 0) ? await action.getText(this.createAccountSubTitleTxt) : null,
            emailLbl: ((await action.getElementCount(this.emailLbl)) > 0) ? await action.getText(this.emailLbl) : null,
            emailTextbox: ((await action.getElementCount(this.emailTextbox)) > 0) ? await action.getAttribute(this.emailTextbox, 'value') : null,
            signUpBtn: ((await action.getElementCount(this.signUpBtn)) > 0) ? await action.getText(this.signUpBtn) : null,
            continueWithTxt: ((await action.getElementCount(this.continueWithTxt)) > 0) ? await action.getText(this.continueWithTxt) : null,
            googleBtn: ((await action.getElementCount(this.googleBtn)) > 0) ? await action.getText(this.googleBtn) : null,
            facebookBtn: ((await action.getElementCount(this.facebookBtn)) > 0) ? await action.getText(this.facebookBtn) : null,
            haveAnAccountTxt: ((await action.getElementCount(this.haveAnAccountTxt)) > 0) ? await action.getText(this.haveAnAccountTxt) : null,
            logInBtn: ((await action.getElementCount(this.logInBtn)) > 0) ? await action.getText(this.logInBtn) : null,
            emailErrorTxt: ((await action.getElementCount(this.emailErrorTxt)) > 0) ? await action.getText(this.emailErrorTxt) : null,
        }
        return obj;
    },

    getData_roleSelectionPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            roleSelectionTitleTxt: ((await action.getElementCount(this.roleSelectionTitleTxt)) > 0) ? await action.getText(this.roleSelectionTitleTxt) : null,
            selectRoleTxt: ((await action.getElementCount(this.selectRoleTxt)) > 0) ? await action.getText(this.selectRoleTxt) : null,
            studentRoleBtn: ((await action.getElementCount(this.studentRoleBtn)) > 0) ? await action.getText(this.studentRoleBtn) : null,
            teacherRoleBtn: ((await action.getElementCount(this.teacherRoleBtn)) > 0) ? await action.getText(this.teacherRoleBtn) : null,
            continueBtn: ((await action.getElementCount(this.continueBtn)) > 0) ? await action.getText(this.continueBtn) : null,
            backToSignInBtn: ((await action.getElementCount(this.backToSignInBtn)) > 0) ? await action.getText(this.backToSignInBtn) : null,
            roleSelectionErrorTxt: ((await action.getElementCount(this.roleSelectionErrorTxt)) > 0) ? await action.getText(this.roleSelectionErrorTxt) : null,
        }
        return obj;
    },

    getData_accountDetailsPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            accountDetailsTitleTxt: ((await action.getElementCount(this.accountDetailsTitleTxt)) > 0) ? await action.getText(this.accountDetailsTitleTxt) : null,
            emailTxt: ((await action.getElementCount(this.emailTxt)) > 0) ? await action.getAttribute(this.emailTxt, 'value') : null,
            passwordLbl: ((await action.getElementCount(this.passwordLbl)) > 0) ? await action.getText(this.passwordLbl) : null,
            passwordTextbox: ((await action.getElementCount(this.passwordTextbox)) > 0) ? await action.getAttribute(this.passwordTextbox, 'value') : null,
            passwordHelperTxt: ((await action.getElementCount(this.passwordHelperTxt)) > 0) ? await action.getText(this.passwordHelperTxt) : null,
            confirmPasswordLbl: ((await action.getElementCount(this.confirmPasswordLbl)) > 0) ? await action.getText(this.confirmPasswordLbl) : null,
            confirmPasswordTextbox: ((await action.getElementCount(this.confirmPasswordTextbox)) > 0) ? await action.getAttribute(this.confirmPasswordTextbox, 'value') : null,
            passwordToggleBtn: ((await action.getElementCount(this.passwordToggleBtn)) > 0) ? await action.getText(this.passwordToggleBtn) : null,
            confirmPasswordToggleBtn: ((await action.getElementCount(this.confirmPasswordToggleBtn)) > 0) ? await action.getText(this.confirmPasswordToggleBtn) : null,
            firstNameLbl: ((await action.getElementCount(this.firstNameLbl)) > 0) ? await action.getText(this.firstNameLbl) : null,
            lastNameLbl: ((await action.getElementCount(this.lastNameLbl)) > 0) ? await action.getText(this.lastNameLbl) : null,
            firstNameTextbox: ((await action.getElementCount(this.firstNameTextbox)) > 0) ? await action.getText(this.firstNameTextbox) : null,
            lastNameTextbox: ((await action.getElementCount(this.lastNameTextbox)) > 0) ? await action.getText(this.lastNameTextbox) : null,
            countryLbl: ((await action.getElementCount(this.countryLbl)) > 0) ? await action.getText(this.countryLbl) : null,
            countryTextbox: ((await action.getElementCount(this.countryTextbox)) > 0) ? await action.getAttribute(this.countryTextbox, 'value') : null,
            countryArrowBtn: ((await action.getElementCount(this.countryArrowBtn)) > 0) ? await action.getText(this.countryArrowBtn) : null,
            policyLineTxt: ((await action.getElementCount(this.policyLineTxt)) > 0) ? await action.getText(this.policyLineTxt) : null,
            policyLineCheckbox: ((await action.getElementCount(this.policyLineCheckbox)) > 0) ? await action.getText(this.policyLineCheckbox) : null,
            createAccountBtn: ((await action.getElementCount(this.createAccountBtn)) > 0) ? await action.getText(this.createAccountBtn) : null,
            backToRoleSelectionBtn: ((await action.getElementCount(this.backToRoleSelectionBtn)) > 0) ? await action.getText(this.backToRoleSelectionBtn) : null,
            passwordErrorTxt: ((await action.getElementCount(this.passwordErrorTxt)) > 0) ? await action.getText(this.passwordErrorTxt) : null,
            confirmPasswordErrorTxt: ((await action.getElementCount(this.confirmPasswordErrorTxt)) > 0) ? await action.getText(this.confirmPasswordErrorTxt) : null,
            firstNameErrorTxt: ((await action.getElementCount(this.firstNameErrorTxt)) > 0) ? await action.getText(this.firstNameErrorTxt) : null,
            lastNameErrorTxt: ((await action.getElementCount(this.lastNameErrorTxt)) > 0) ? await action.getText(this.lastNameErrorTxt) : null,
            countryErrorTxt: ((await action.getElementCount(this.countryErrorTxt)) > 0) ? await action.getText(this.countryErrorTxt) : null,
            policyLineErrorTxt: ((await action.getElementCount(this.policyLineErrorTxt)) > 0) ? await action.getText(this.policyLineErrorTxt) : null,
            privacyPoliceLink: ((await action.getElementCount(this.privacyPoliceLink)) > 0) ? await action.getText(this.privacyPoliceLink) : null,
            termsOfUseLink: ((await action.getElementCount(this.termsOfUseLink)) > 0) ? await action.getText(this.termsOfUseLink) : null,
        }
        return obj;
    },

    getData_policyPopUpPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            privacyPolicyTab: ((await action.getElementCount(this.privacyPolicyTab)) > 0) ? await action.getText(this.privacyPolicyTab) : null,
            termsOfUseTab: ((await action.getElementCount(this.termsOfUseTab)) > 0) ? await action.getText(this.termsOfUseTab) : null,
            policyCancelBtn: ((await action.getElementCount(this.policyCancelBtn)) > 0) ? await action.getText(this.policyCancelBtn) : null,
            policyAgreeBtn: ((await action.getElementCount(this.policyAgreeBtn)) > 0) ? await action.getText(this.policyAgreeBtn) : null,
            policyCrossBtn: ((await action.getElementCount(this.policyCrossBtn)) > 0) ? await action.getText(this.policyCrossBtn) : null,
        }
        return obj;
    },

    getData_googlePage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            googlePageHeadingTxt: ((await action.getElementCount(this.googlePageHeadingTxt)) > 0) ? await action.getText(this.googlePageHeadingTxt) : null,
            googlePageSubHeadingTxt: ((await action.getElementCount(this.googlePageSubHeadingTxt)) > 0) ? await action.getText(this.googlePageSubHeadingTxt) : null,
        }
        return obj;
    },

    getData_facebookPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            facebookPageHeadingTxt: ((await action.getElementCount(this.facebookPageHeadingTxt)) > 0) ? await action.getText(this.facebookPageHeadingTxt) : null,
        }
        return obj;
    },


    click_signUpBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.signUpBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " signUpBtn is clicked");
            await browser.pause(1000);
            res = await action.waitForDisplayed(this.progressBar, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "signUpBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_googleBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.googleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " googleBtn is clicked");
            res = await action.waitForDisplayed(this.googlePageHeadingTxt);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "googleBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_facebookBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.facebookBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " facebookBtn is clicked");
            res = await action.waitForDisplayed(this.facebookPageHeadingTxt);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "facebookBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_logInBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.logInBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " logInBtn is clicked");
            res = await require('./login.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "logInBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_studentRoleBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.studentRoleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " studentRoleBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "studentRoleBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_teacherRoleBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.teacherRoleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " teacherRoleBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "teacherRoleBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_continueBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.continueBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " continueBtn is clicked");
            res = ((await action.getElementCount(this.roleSelectionErrorTxt)) > 0) ? await action.waitForDisplayed(this.roleSelectionErrorTxt) : await action.waitForDisplayed(this.createAccountBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "continueBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_backToSignInBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.backToSignInBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " backToSignInBtn is clicked");
            res = await action.waitForDisplayed(this.signUpBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "backToSignInBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_passwordToggleBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.passwordToggleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " passwordToggleBtn is clicked");
            res = await action.getAttribute(this.passwordTextbox, 'type');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "passwordToggleBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_confirmPasswordToggleBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.confirmPasswordToggleBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " confirmPasswordToggleBtn is clicked");
            res = await action.getAttribute(this.confirmPasswordTextbox, 'type');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "confirmPasswordToggleBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_countryArrowBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.countryArrowBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " countryArrowBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "countryArrowBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_policyLineCheckbox: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.policyLineCheckbox);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " policyLineCheckbox is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "policyLineCheckbox is NOT clicked", 'error');
        }
        return res;
    },

    click_createAccountBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.createAccountBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " createAccountBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "createAccountBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_backToRoleSelectionBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.backToRoleSelectionBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " backToRoleSelectionBtn is clicked");
            res = await action.waitForDisplayed(this.continueBtn);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "backToRoleSelectionBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_privacyPoliceLink: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.privacyPoliceLink);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " privacyPoliceLink is clicked");
            res = await action.getAttribute(this.privacyPolicyTab, 'aria-selected');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "privacyPoliceLink is NOT clicked", 'error');
        }
        return res;
    },

    click_termsOfUseLink: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.termsOfUseLink);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " termsOfUseLink is clicked");
            res = await action.getAttribute(this.termsOfUseTab, 'aria-selected');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "termsOfUseLink is NOT clicked", 'error');
        }
        return res;
    },

    click_privacyPolicyTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.privacyPolicyTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " privacyPolicyTab is clicked");
            res = await action.getAttribute(this.privacyPolicyTab, 'aria-selected');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "privacyPolicyTab is NOT clicked", 'error');
        }
        return res;
    },

    click_termsOfUseTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.termsOfUseTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " termsOfUseTab is clicked");
            res = await action.getAttribute(this.termsOfUseTab, 'aria-selected');
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "termsOfUseTab is NOT clicked", 'error');
        }
        return res;
    },

    click_policyCancelBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.policyCancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " policyCancelBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "policyCancelBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_policyAgreeBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.policyAgreeBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " policyAgreeBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "policyAgreeBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_policyCrossBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.policyCrossBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " policyCrossBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "policyCrossBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_emailTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.emailTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in emailTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in emailTextbox", 'error');
        }
        return res;
    },

    set_passwordTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.passwordTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in passwordTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in passwordTextbox", 'error');
        }
        return res;
    },

    set_confirmPasswordTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.confirmPasswordTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in confirmPasswordTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in confirmPasswordTextbox", 'error');
        }
        return res;
    },

    set_firstNameTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.firstNameTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in firstNameTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in firstNameTextbox", 'error');
        }
        return res;
    },

    set_lastNameTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.lastNameTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in lastNameTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in lastNameTextbox", 'error');
        }
        return res;
    },

    set_countryTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.countryTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in countryTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in countryTextbox", 'error');
        }
        return res;
    },

    click_countryName: async function (countryName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        var list_arr = [];
        list = await action.findElements(this.countryList);
        console.log("list : " + list.length)
        for (i = 0; i < list.length; i++) {
            list_arr[i] = await action.getText(list[i]);
            if (await action.getText(list[i]) == countryName) {
                res = await action.click(list[i]);
                break;
            }
        }
        await logger.logInto(await stackTrace.get(), list_arr);
        return res;
    }

}

