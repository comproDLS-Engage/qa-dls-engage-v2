"use strict";
var dashboardPage = require('./studentDashboard.page.js');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {

  
  facebook_User_tbox: selectorFile.css.ComproEngage.faceBookPage.facebook_User_tbox_dsktop,
  facebook_Password_tbox: selectorFile.css.ComproEngage.faceBookPage.facebook_Password_tbox_dsktop,
  facebook_Login_btn: selectorFile.css.ComproEngage.faceBookPage.facebook_Login_btn_dsktop,
  facebook_User_tbox_device: selectorFile.css.ComproEngage.faceBookPage.facebook_User_tbox,
  facebook_Password_tbox_device: selectorFile.css.ComproEngage.faceBookPage.facebook_Password_tbox,
  facebook_Login_btn_device: selectorFile.css.ComproEngage.faceBookPage.facebook_Login_btn,

  isInitialized: function () {
    logger.logInto(stackTrace.get());
    if (!argv.deviceName) {
    return (action.waitForDisplayed(this.facebook_User_tbox));}
    else{return action.waitForDisplayed(this.facebook_User_tbox_device)}
  },

  setUserName: function (userName) {
    logger.logInto(stackTrace.get());
    if (!argv.deviceName) {
      res = action.addValue(this.facebook_User_tbox, userName);
    }
    else {
      res = action.addValue(this.facebook_User_tbox_device, userName);
    }

    if (res == true) {
      logger.logInto(stackTrace.get(), " -- UserName is entered");
      return res;
    }
    else {
      res = res + " -- UserName is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
      return res;
    }

  },

  setPassword: function (password) {
    logger.logInto(stackTrace.get());
    if (!argv.deviceName) {
      res = action.addValue(this.facebook_Password_tbox, password);
    }
    else { res = action.addValue(this.facebook_Password_tbox_device, password); }

    if (res == true) {
      logger.logInto(stackTrace.get(), " -- Password is entered");
      return res;
    }
    else {
      res = res + " -- Password is NOT entered";
      logger.logInto(stackTrace.get(), res, 'error');
      return res;
    }

  },

  clickLogin: function (userName, password) {
    logger.logInto(stackTrace.get());
    res = this.setUserName(userName);
    if (res == true) {
      res = this.setPassword(password)
      if (res == true) {
        if (!argv.deviceName) {
          res = action.click(this.facebook_Login_btn)
        }
        else {
          action.hideKeyboard()
           res = action.click(this.facebook_Login_btn_device) }
      }
      if (res == true) {
        logger.logInto(stackTrace.get(), " -- Login button is clicked ");
        res = dashboardPage.isInitialized();
      }
      else {
        res = res + " -- Login button is NOT clicked ";
        logger.logInto(stackTrace.get(), res, 'error');
      }
    }

    return res;
}
}