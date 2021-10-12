"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {
   headingText: selectorFile.css.ComproEngage.createAccountPage.headingText,
   email_label: selectorFile.css.ComproEngage.createAccountPage.email_label,
   email_input: selectorFile.css.ComproEngage.createAccountPage.email_input,
   password_label: selectorFile.css.ComproEngage.createAccountPage.password_label,
   password_input: selectorFile.css.ComproEngage.createAccountPage.password_input,
   passwordRules_text: selectorFile.css.ComproEngage.createAccountPage.passwordRules_text,
   confirmPassword_label: selectorFile.css.ComproEngage.createAccountPage.confirmPassword_label,
   confirmPassword_input: selectorFile.css.ComproEngage.createAccountPage.confirmPassword_input,
   firstName_label: selectorFile.css.ComproEngage.createAccountPage.firstName_label,
   lastName_label: selectorFile.css.ComproEngage.createAccountPage.lastName_label,
   firstName_input: selectorFile.css.ComproEngage.createAccountPage.firstName_input,
   lastName_input: selectorFile.css.ComproEngage.createAccountPage.lastName_input,
   country_label: selectorFile.css.ComproEngage.createAccountPage.country_label,
   country_input: selectorFile.css.ComproEngage.createAccountPage.country_input,
   selectCountry: selectorFile.css.ComproEngage.createAccountPage.selectCountry,
   createAccount_btn: selectorFile.css.ComproEngage.createAccountPage.createAccount_btn,
   brandLogo_img: selectorFile.css.ComproEngage.createAccountPage.brandLogo_img,
   togglePassword_btn: selectorFile.css.ComproEngage.createAccountPage.togglePassword_btn,


   isInitialized: function () {
      logger.logInto(stackTrace.get());
      action.waitForDocumentLoad();
      res = {
         pageStatus: action.waitForDisplayed(this.headingText),
      };

      return res;
   },

   createAccountPage_Data: function () {
      obj = {
         headingText: (action.getElementCount(this.headingText) > 0) ? action.getText(this.headingText) : null,
         email_label: (action.getElementCount(this.email_label) > 0) ? action.getText(this.email_label) : null,
         email_input_placeholder: (action.getElementCount(this.email_input) > 0) ? action.getAttribute(this.email_input, "placeholder") : null,
         password_label: (action.getElementCount(this.password_label) > 0) ? action.getText(this.password_label) : null,
         password_input: (action.getElementCount(this.password_input) > 0) ? action.getAttribute(this.password_input, "placeholder") : null,
         passwordRules_text: (action.getElementCount(this.passwordRules_text) > 0) ? action.getText(this.passwordRules_text) : null,
         confirmPassword_label: (action.getElementCount(this.confirmPassword_label) > 0) ? action.getText(this.confirmPassword_label) : null,
         confirmPassword_input_placeholder: (action.getElementCount(this.confirmPassword_input) > 0) ? action.getAttribute(this.confirmPassword_input, "placeholder") : null,
         firstName_label: (action.getElementCount(this.firstName_label) > 0) ? action.getText(this.firstName_label) : null,
         lastName_label: (action.getElementCount(this.lastName_label) > 0) ? action.getText(this.lastName_label) : null,
         firstName_input_placeholder: (action.getElementCount(this.firstName_input) > 0) ? action.getAttribute(this.firstName_input, "placeholder") : null,
         lastName_input_placeholder: (action.getElementCount(this.lastName_input) > 0) ? action.getAttribute(this.lastName_input, "placeholder") : null,
         country_label: (action.getElementCount(this.country_label) > 0) ? action.getText(this.country_label) : null,
         country_input_placeholder: (action.getElementCount(this.country_input) > 0) ? action.getAttribute(this.country_input, "placeholder") : null,
         selectCountry: (action.getElementCount(this.selectCountry) > 0) ? action.getText(this.selectCountry) : null,
         createAccount_btn: (action.getElementCount(this.createAccount_btn) > 0) ? action.getText(this.createAccount_btn) : null,
         brandLogo_img: (action.getElementCount(this.brandLogo_img) > 0) ? action.waitForExist(this.brandLogo_img) : false,
         togglePassword_btn: (action.getElementCount(this.togglePassword_btn) > 0) ? action.waitForExist(this.togglePassword_btn) : null,
      }
      return obj
   },


   click_selectCountry: function () {
      logger.logInto(stackTrace.get());
      res = action.click(this.selectCountry);
      if (true == res) {
         logger.logInto(stackTrace.get(), " selectCountry button is clicked");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   click_createAccount_btn: function () {
      logger.logInto(stackTrace.get());
      res = action.click(this.createAccount_btn);
      if (true == res) {
         logger.logInto(stackTrace.get(), " createAccount_btn button is clicked");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   click_togglePassword_btn: function () {
      logger.logInto(stackTrace.get());
      res = action.click(this.togglePassword_btn);
      if (true == res) {
         logger.logInto(stackTrace.get(), " togglePassword_btn button is clicked");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_email_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.email_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in email_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_password_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.password_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in password_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_confirmPassword_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.confirmPassword_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in confirmPassword_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_firstName_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.firstName_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in firstName_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_lastName_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.lastName_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in lastName_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

   set_country_input: function (testdata) {
      logger.logInto(stackTrace.get());
      res = action.setValue(this.country_input, testdata);
      if (true == res) {
         logger.logInto(stackTrace.get(), "Value is entered in country_input");
      } else {
         logger.logInto(stackTrace.get(), res, 'error');
      }
      return res;
   },

}

