"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var loginPage = require('./login.page');
var res,obj;

module.exports = {
  signUp_btn: selectorFile.css.ComproEngage.SignUpPage.signUp_btn,
  userName_tbox: selectorFile.css.ComproEngage.SignUpPage.userName_tbox,
  password_tbox: selectorFile.css.ComproEngage.SignUpPage.password_tbox,
  confirmPassword_tbox: selectorFile.css.ComproEngage.SignUpPage.confirmPassword_tbox,
  name_tbox: selectorFile.css.ComproEngage.SignUpPage.name_tbox,
  email_tbox: selectorFile.css.ComproEngage.SignUpPage.email_tbox,
  countryCode_dropDown: selectorFile.css.ComproEngage.SignUpPage.countryCode_dropDown,
  countryCode: selectorFile.css.ComproEngage.SignUpPage.countryCode,
  phoneNumber_tbox: selectorFile.css.ComproEngage.SignUpPage.phoneNumber_tbox,
  signInInstead_btn: selectorFile.css.ComproEngage.SignUpPage.signInInstead_btn,
  signUpPassword_eye: selectorFile.css.ComproEngage.SignUpPage.signUpPassword_eye,
  signUpConfirmPassword_eye: selectorFile.css.ComproEngage.SignUpPage.signUpConfirmPassword_eye,
  signUpHeader: selectorFile.css.ComproEngage.SignUpPage.signUpHeader,
  userName_lbl: selectorFile.css.ComproEngage.SignUpPage.userName_lbl,
  password_lbl: selectorFile.css.ComproEngage.SignUpPage.password_lbl,
  confirmPassword_lbl: selectorFile.css.ComproEngage.SignUpPage.confirmPassword_lbl,
  name_lbl: selectorFile.css.ComproEngage.SignUpPage.name_lbl,
  email_lbl: selectorFile.css.ComproEngage.SignUpPage.email_lbl,
  country_lbl: selectorFile.css.ComproEngage.SignUpPage.country_lbl,
  phoneNumebr_lbl: selectorFile.css.ComproEngage.SignUpPage.phoneNumebr_lbl,
  verify_btn:selectorFile.css.ComproEngage.SignUpPage.verify_btn,
  signUpEmailPage_btn: selectorFile.css.ComproEngage.SignUpPage.signUpEmailPage_btn,

  isInitialized: function () {
    logger.logInto(stackTrace.get());
    res = action.waitForDisplayed(this.signUp_btn, 5000);
    logger.logInto(stackTrace.get(), res);
    if (res == true) {
      return this.signupdata(res)
    }
    else
      res = res + "-- Signup Button is NOT availabe"
  
    return res;
  },

  signupdata: function (res) {
    logger.logInto(stackTrace.get(), "");
    obj = {
      signUpHeader: action.getText(this.signUpHeader),  
      //userName_lbl: action.getText(this.userName_lbl),  
      password_lbl: action.getText(this.password_lbl),  
      confirmPassword_lbl: action.getText(this.confirmPassword_lbl),  
      name_lbl: action.getText(this.name_lbl),  
      email_lbl: action.getText(this.email_lbl),  
      signUp_lbl: action.getText(this.signUp_btn),  
      signInInstead_lbl: action.getText(this.signInInstead_btn),  
      phoneNumebr_lbl: action.getText(this.phoneNumebr_lbl)
    }
    return obj;
  },
  setUserName: function (userName) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.userName_tbox, userName);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- UserName is entered");
    }
    else {
      res = res + " -- UserName is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  setPassword: function (password) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.password_tbox, password);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Password is entered");
    }
    else {
      res = res + " -- Password is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },

  setConfirmPassword: function (confirmPassword) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.confirmPassword_tbox, confirmPassword);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Confirm Password is entered");
    }
    else {
      res = res + " -- Confirm Password is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  setName: function (name) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.name_tbox, name);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Name is entered");
    }
    else {
      res = res + " -- Name is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  setEmail: function (email) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.email_tbox, email);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Email ID is entered");
    }
    else {
      res = res + " -- Email ID is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  setCountryCode: function (countryCodeIndex) {
    let countryElement = this.countryCode + countryCodeIndex + ")";
    logger.logInto(stackTrace.get());
    res = action.click(this.countryCode_dropDown);
    if (res == true) {
      logger.logInto(stackTrace.get(), "-- Country Code Drop Down is clicked");
      res = action.click(countryElement);
      if (res == true) {
        logger.logInto(stackTrace.get(), "-- Country Code Clicked");
      }
      else {
        res = res + " -- Country Code is NOT clicked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- Phone Number is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  setPhoneNumber: function (phoneNumber) {
    logger.logInto(stackTrace.get());
    res = action.addValue(this.phoneNumber_tbox, phoneNumber);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Phone Number is entered");
    }
    else {
      res = res + " -- Phone Number is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  clickSignUp: function () {
    logger.logInto(stackTrace.get());
    res = action.click(this.signUp_btn);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Sign Up button is clicked ");
      res = this.accountVerificationisInitialized();
      if (res == true) {
        logger.logInto(stackTrace.get(), " -- Account Verification Page is displayed ");
      }
      else {
        res = res + " -- Account Verification Page is NOT displayed";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- Sign Up button is NOT clicked ";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;

  },
  accountVerificationisInitialized: function () {
    logger.logInto(stackTrace.get()); 
    res = action.waitForDisplayed(this.verify_btn);
    logger.logInto(stackTrace.get(), res);
    return res;
},
  signUpBtnStatus: function () {
    logger.logInto(stackTrace.get());
    res = action.getAttribute(this.signUp_btn, "disabled")
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Sign Up button is disabled");
      return "disabled";
    }
    else {
      res = res + " -- Sign Up button is enabled ";
      logger.logInto(stackTrace.get(), res);
      return "enabled";
    }
  },
  passwordEyeValidation: function (maskingState = "masked") {//not used for now
    logger.logInto(stackTrace.get());
    if (maskingState == "masked") {
      res = true;
      logger.logInto(stackTrace.get(), " -- password field is masked");

      if (action.getAttribute(this.password_tbox, "type") == "password") {
        res = true;
        logger.logInto(stackTrace.get(), " -- Input Type is password before toggle");
        action.click(this.signUpPassword_eye);
        if (action.getAttribute(this.password_tbox, "type") == "text") {
          res = true;
          logger.logInto(stackTrace.get(), " -- Input Type is text after toggle");
        }
        else {
          res = res + "-- Input type not set to text after toggle";
          logger.logInto(stackTrace.get(), res, 'error');
        }
      } else {
        res = res + "-- Input type not set to password when password field was masked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- password field is unmasked";
      logger.logInto(stackTrace.get(), " -- password field is unmasked");
      if (action.getAttribute(this.password_tbox, "type") == "text") {
        res = true;
        res = res + " -- Input Type is text before toggle";
        logger.logInto(stackTrace.get(), res);
        action.click(this.signUpPassword_eye);
        if (action.getAttribute(this.password_tbox, "password")) {
          res = true;
          resizeTo = res + " -- Input Type is password after toggle";
          logger.logInto(stackTrace.get(), res);
        }
        else {
          res = res + "-- Input type not set to password after toggle";
          logger.logInto(stackTrace.get(), res, 'error');
        }
      } else {
        res = res + "-- Input type not set to text when password field was unmasked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    return res;
  },
  confirmPasswordFieldValidation: function (maskingState = "masked") {//not used for now
    logger.logInto(stackTrace.get());
    if (maskingState == "masked") {
      res = true;
      logger.logInto(stackTrace.get(), " -- password field is masked");

      if (action.getAttribute(this.confirmPassword_tbox, "type") == "password") {
        res = true;
        logger.logInto(stackTrace.get(), " -- Input Type is password before toggle");
        action.click(this.signUpConfirmPassword_eye);
        if (action.getAttribute(this.confirmPassword_tbox, "type") == "text") {
          res = true;
          logger.logInto(stackTrace.get(), " -- Input Type is text after toggle");
        }
        else {
          res = res + "-- Input type not set to text after toggle";
          logger.logInto(stackTrace.get(), res, 'error');
        }
      } else {
        res = res + "-- Input type not set to password when password field was masked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- password field is unmasked";
      logger.logInto(stackTrace.get(), " -- password field is unmasked");
      if (action.getAttribute(this.confirmPassword_tbox, "type") == "text") {
        res = true;
        res = res + " -- Input Type is text before toggle";
        logger.logInto(stackTrace.get(), res);
        action.click(this.signUpConfirmPassword_eye);
        if (action.getAttribute(this.confirmPassword_tbox, "password")) {
          res = true;
          res = res + " -- Input Type is password after toggle";
          logger.logInto(stackTrace.get(), res);
        }
        else {
          res = res + "-- Input type not set to password after toggle";
          logger.logInto(stackTrace.get(), res, 'error');
        }
      } else {
        res = res + "-- Input type not set to text when password field was unmasked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    return res;
  },
  signInInstead: function () {
    logger.logInto(stackTrace.get());
    res = action.waitForDisplayed(this.signUp_btn);
    if (res == true) {
      res = action.click(this.signInInstead_btn);
      if (res == true) {
        logger.logInto(stackTrace.get(), " -- Sign In Instead button is clicked ");

        res = loginPage.isInitialized();
        res=res.status
        if (res == true) {
          logger.logInto(stackTrace.get(), " -- Login Page is displayed ");
        }
        else {
          res = res + " -- Login Page is NOT displayed";
          logger.logInto(stackTrace.get(), res, 'error');
        }
      }
      else {
        res = res + " -- Sign In Instead Button NOT Clicked";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- Sign Up button is NOT Visible ";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },
  passwordCheckMaskingStatusMasked: function () {
    if (action.getAttribute(this.password_tbox, "type") == "password") {
      return true;
    }
    return false;
  },
  passwordCheckMaskingStatusUnmasked: function () {
    if (action.getAttribute(this.password_tbox, "type") == "text") {
      return true;
    }
    return false;
  },
  confirmPasswordCheckMaskingStatusMasked: function () {
    if (action.getAttribute(this.confirmPassword_tbox, "type") == "password") {
      return true;
    }
    return false;
  },
  confirmPasswordCheckMaskingStatusUnmasked: function () {
    if (action.getAttribute(this.confirmPassword_tbox, "type") == "text") {
      return true;
    }
    return false;
  },
  togglePasswordEye: function () {
    action.click(this.signUpPassword_eye);
  },
  toggleConfirmPasswordEye: function () {
    action.click(this.signUpConfirmPassword_eye);
  },
  clickSignUpEmailPage: function () {
    logger.logInto(stackTrace.get());
    res = action.click(this.signUpEmailPage_btn);
    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Sign Up button on the Set Email Page is clicked ");
      res = this.isInitialized();
      if (res.signUp_lbl== 'SIGN UP') {
        logger.logInto(stackTrace.get(), " -- Sign Up Form Page is displayed ");
      }
      else {
        res = res + " -- Sign Up Form Page is NOT displayed";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }
    else {
      res = res + " -- Sign Up button is NOT clicked ";
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;

  },
  isInitializedSetEmailPage: function () {
    logger.logInto(stackTrace.get());
    res = action.waitForDisplayed(this.signUpEmailPage_btn, 5000);
    logger.logInto(stackTrace.get(), res);
    if (res == true) {
      //not added return statement as of now
    }
    else
      res = res + "-- Signup Button on the Set Email Page is NOT availabe"
  return res;
  }
};