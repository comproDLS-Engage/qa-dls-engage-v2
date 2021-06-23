"use strict";
var dashboardPage = require('./studentDashboard.page.js');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    google_User_tbox: selectorFile.css.ComproEngage.googlePage.google_User_tbox,
    google_User_Next_btn: selectorFile.css.ComproEngage.googlePage.google_User_Next_btn,
    google_Password_tbox: selectorFile.css.ComproEngage.googlePage.google_Password_tbox,
    google_Pass_Next_btn: selectorFile.css.ComproEngage.googlePage.google_Pass_Next_btn,

    isInitialized: function () {
		logger.logInto(stackTrace.get());
        return (action.waitForDisplayed(this.google_User_tbox))
    },

    setUserName: function (userName) {
		 logger.logInto(stackTrace.get());
        res = action.addValue(this.google_User_tbox, userName);
        if (res == true){
			logger.logInto(stackTrace.get(), "-- UserName is entered");
		}
        else{
			res = res + "-- UserName is NOT entered";
			logger.logInto(stackTrace.get(), res),'error';
		}
		return res;
    },

    setPassword: function (password) {
		 logger.logInto(stackTrace.get());
        res = action.addValue(this.google_Password_tbox, password);
        if (res == true){
			logger.logInto(stackTrace.get(), "-- Password is entered");
		}
        else{
			res = res + "-- Password is NOT entered";
			logger.logInto(stackTrace.get(), res,'error');
		}
		return res;
    },

    clickNextUserNamePage: function (userName) {
		 logger.logInto(stackTrace.get());
		res = this.setUserName(userName);
		if (res==true) {
			res = action.click(this.google_User_Next_btn)
			if (res == true){
				logger.logInto(stackTrace.get(), "-- Next button is clicked");
			}
			else{
				res = res + "-- Next button is NOT clicked";
				logger.logInto(stackTrace.get(), res,'error');
			}
		}
		else{
			logger.logInto(stackTrace.get(), res);
		}
		return res;
    },

    clickNextPasswordPage: function (password) {
		 logger.logInto(stackTrace.get());
		res = this.setPassword(password);
		if (res==true) {
			res = action.click(this.google_Pass_Next_btn)
			if (res == true) {
				logger.logInto(stackTrace.get(), "-- Next button is clicked");
				res = dashboardPage.isInitialized();
			}
			else{
				res = res + "-- Next button is NOT clicked";
				logger.logInto(stackTrace.get(), res,'error');
			}
		}
		else{
			logger.logInto(stackTrace.get(), res,'error');
		}
        return res;
    }
}