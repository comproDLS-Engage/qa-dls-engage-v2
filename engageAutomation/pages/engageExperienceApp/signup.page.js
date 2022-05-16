"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var loginPage = require('./login.page');
var res,obj;

module.exports = {
  
  signUpEmailPage_btn: selectorFile.css.ComproEngage.SignUpPage.signUpEmailPage_btn,

 
  isInitializedSetEmailPage:async function () {
    await logger.logInto(await stackTrace.get());
    res = await action.waitForDisplayed(this.signUpEmailPage_btn, 5000);
    await logger.logInto(await stackTrace.get(), res);
    if (res == true) {
      //not added return statement as of now
    }
    else
      res = res + "-- Signup Button on the Set Email Page is NOT availabe"
  return res;
  }
};