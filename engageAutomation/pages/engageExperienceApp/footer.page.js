"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary');
//var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    menuBar_btn: selectorFile.css.ComproEngage.widgets.menuBar_btn,
    comproLogo: selectorFile.css.ComproEngage.widgets.comproLogo_img,
    name: selectorFile.css.ComproEngage.widgets.name,
    email: selectorFile.css.ComproEngage.widgets.email,
    language: selectorFile.css.ComproEngage.widgets.language,
    courseName_lbl: selectorFile.css.ComproEngage.widgets.courseName_lbl,
    myCourses: selectorFile.css.ComproEngage.widgets.myCourses,
    product1: selectorFile.css.ComproEngage.widgets.product1,
    product2: selectorFile.css.ComproEngage.widgets.product2,
    courseFeed: selectorFile.css.ComproEngage.widgets.courseFeed,
    assignments: selectorFile.css.ComproEngage.widgets.assignments,
    professionResources: selectorFile.css.ComproEngage.widgets.professionResources,
    gradeBookAndanalytics: selectorFile.css.ComproEngage.widgets.gradeBookAndanalytics,
    students: selectorFile.css.ComproEngage.widgets.students,
    contactStudent: selectorFile.css.ComproEngage.widgets.contactStudent,
    myAssignments: selectorFile.css.ComproEngage.widgets.myAssignments,
    projects: selectorFile.css.ComproEngage.widgets.projects,
    myProgress: selectorFile.css.ComproEngage.widgets.myProgress,
    inSights: selectorFile.css.ComproEngage.widgets.inSights,
    contactInstructor: selectorFile.css.ComproEngage.widgets.contactInstructor,
    settings: selectorFile.css.ComproEngage.widgets.settings,
    additionalInfo: selectorFile.css.ComproEngage.widgets.additionalInfo,
    help: selectorFile.css.ComproEngage.widgets.help,
    alert: selectorFile.css.ComproEngage.widgets.alert,
    menuCard: selectorFile.css.ComproEngage.widgets.menuCard,
    logOut_btn: selectorFile.css.ComproEngage.widgets.logOut_btn,
    appVersion: selectorFile.css.ComproEngage.widgets.appVersion,


    isInitialized: function () {
        logger.logInto(stackTrace.get());
        res = action.waitForDisplayed(this.comproLogo);
        //res = this.click_MenuBar();
        obj = {
            status: res,
            appVersion: (action.getElementCount(this.menuBar_btn) == 0) ? action.getText(this.appVersion) : ""
        }
        return obj;
    },

    getMenuBarData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            status: "",
            appVersion: action.getText(this.appVersion),
            name: action.getAttribute(this.name, 'title'),
            email: action.getAttribute(this.email, 'title'),
            language: action.getAttribute(this.language, 'title'),
            help: action.getText(this.help),
            themeSettings_btn: action.getText(this.themeSettings_btn),
            logOut_btn: action.getText(this.logOut_btn),
            themePrimaryColor: action.getCSSProperty(this.menuCard, 'background-color'),

           }
        logger.logInto(stackTrace.get(), "Footer Menusbar Data: " + JSON.stringify(obj));
        return obj;
    },

    click_MenuBar: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.menuBar_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "Menu Button is clicked");
            res = this.getMenuBarData();
            res.status = true;
        }
        else {
            res = res + "-- Menu Button is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    close_Menu: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.name);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " Name is clicked");
        }
        else {
            res = res + "-- Name is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

  
    logoutfromApp: function () {
        logger.logInto(stackTrace.get());
        res = this.click_MenuBar();
        if (typeof res === "object") {
            res = action.click(this.logOut_btn);
            logger.logInto(stackTrace.get(), "Logout button is clicked");
            if (res == true) {
                let landingPage = require('./landing.page');
                res = landingPage.isInitialized();
            }
            else {
                res = res + "-- logout button is NOT clicked";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        else {
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

 
}