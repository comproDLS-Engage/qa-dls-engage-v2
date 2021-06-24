'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj, ret, tocPage;
var footer = require('./footer.page.js');

module.exports = {
    headerBack_btn: selectorFile.css.ComproEngage.widgets.headerBack_btn,
    headerOpenBookCard_btn: selectorFile.css.ComproEngage.widgets.headerOpenBookCard_btn,
    headerCloseQuiz_btn: selectorFile.css.ComproEngage.widgets.headerCloseQuiz_btn,
    headerTitle_txt: selectorFile.css.ComproEngage.widgets.headerTitle_txt,
    headerSubTitle_txt: selectorFile.css.ComproEngage.widgets.headerSubTitle_txt,
    pageTitle_txt: selectorFile.css.ComproEngage.widgets.pageTitle_txt,
    pageSubTitle_txt: selectorFile.css.ComproEngage.widgets.pageSubTitle_txt,
   
    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.scrollIntoView('div#app');
        ret = action.waitForDisplayed(this.headerdiv);
        res = this.headerData();
        res.status = ret;
        return res;
    },
    clickProfileMenuSignout: function () {// for student and instructor
        logger.logInto(stackTrace.get());

        //tbd headerpage not implemented
        if(global.view == 'desktop')
        {
            action.click("[data-tid=button-user-profile]")
        }
        else
        {   action.waitForDisplayed("//span[text()='More']")
            action.click("//span[text()='More']")

        }
        res = action.click('//span[contains(text(),"Logout")]')

        return res;
    },
    headerData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            status: "",
            titleText: (action.getElementCount(this.headerTitle_txt) == 1) ? action.getText(this.headerTitle_txt) : "", //getAttribute function with 'title' can not be used here because all headers do not have 'title' attribute
            subtitleText: (action.getElementCount(this.headerSubTitle_txt) == 1) ? action.getText(this.headerSubTitle_txt) : "",
            backBtn_Exists: (action.getElementCount(this.headerBack_btn) == 1) ? true : false,
            closeBtn_Exists: (action.getElementCount(this.closeSummary_btn) == 1) ? true : false,
            // logo_Exists: (action.getElementCount(this.headerLogo) == 1) ? action.waitForDisplayed(this.headerLogo) : false,
            // filterBtn_Exists: (action.getElementCount(this.myCoursesHeaderFilterbtn) == 1) ? true : false,
            searchBtn_Exists: (action.getElementCount(this.search_btn) == 1) ? true : false,
            moreOptionsBtn_Exists: (action.getElementCount(this.moreOptions_btn) == 1) ? true : false,
            addStudentCrossIcon_Exists: (action.getElementCount(this.addStudentCrossIcon) == 1) ? true : false,
            moreOptionsBtn_isDisabled: "",
            resources_dropdown: (action.getElementCount(this.resources_dropdown) == 1) ? action.getText(this.resources_dropdown) : "",
            profile_dropdown: (action.getElementCount(this.profile_dropdown) == 1) ? action.getText(this.profile_dropdown) : ""
        }
        if (obj.moreOptionsBtn_Exists)
            obj.moreOptionsBtn_isDisabled = action.getAttribute(this.moreOptions_btn, 'disabled');

        //shortcut for supporting page headings in desktop; these should ideally be part of each page
        if (action.getElementCount(this.pageTitle_txt) == 1)
            obj.titleText = action.getText(this.pageTitle_txt);
        if (action.getElementCount(this.pageSubTitle_txt) == 1)
            obj.subtitleText = action.getText(this.pageSubTitle_txt);

        logger.logInto(stackTrace.get(), "Header Data:" + JSON.stringify(obj));
        return obj;
    },

    moveToPreviousPage: function () {
        logger.logInto(stackTrace.get());
        action.scrollIntoView('div#app');
        res = action.click(this.headerBack_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Header back button is clicked");
        }
        else {
            res = res + " -- Header back button is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },


   
}