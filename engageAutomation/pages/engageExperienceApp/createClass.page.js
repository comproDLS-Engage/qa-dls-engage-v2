'use strict';
const { BrowserType } = require('@applitools/eyes-webdriverio');
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj, ret;

module.exports = {

    createBtn: selectorFile.css.ComproEngage.createClassPage.createBtn,
    cancelBtn: selectorFile.css.ComproEngage.createClassPage.cancelBtn,
    desc_lbl: selectorFile.css.ComproEngage.createClassPage.desc_lbl,
    classHeader: selectorFile.css.ComproEngage.createClassPage.classHeader,
    classSubHeader: selectorFile.css.ComproEngage.createClassPage.classSubHeader,
    desc_txtbox: selectorFile.css.ComproEngage.createClassPage.desc_txtbox,
    title_txtbox: selectorFile.css.ComproEngage.createClassPage.title_txtbox,
    title_lbl: selectorFile.css.ComproEngage.createClassPage.title_lbl,
    startDate_txtbox: selectorFile.css.ComproEngage.createClassPage.startDate_txtbox,
    startDate_lbl: selectorFile.css.ComproEngage.createClassPage.startDate_lbl,
    endDate_txtbox: selectorFile.css.ComproEngage.createClassPage.endDate_txtbox,
    endDate_lbl: selectorFile.css.ComproEngage.createClassPage.endDate_lbl,
    selectBook_lbl: selectorFile.css.ComproEngage.createClassPage.selectBook_lbl,
    titleErrorMsg: selectorFile.css.ComproEngage.createClassPage.titleErrorMsg,
    datePicker_okBtn: selectorFile.css.ComproEngage.createClassPage.datePicker_okBtn,
    loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
    saveBtn: selectorFile.css.ComproEngage.createClassPage.saveBtn,
    removeBookbtn: selectorFile.css.ComproEngage.createClassPage.removeBookbtn,
    pageTitle: selectorFile.css.ComproEngage.createClassPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.createClassPage.pageSubTitle,
    AddANewBook_btn: selectorFile.css.ComproEngage.createClassPage.AddANewBook_btn,
    selectBook_txt: selectorFile.css.ComproEngage.createClassPage.selectBook_txt,
    bookTitle: selectorFile.css.ComproEngage.createClassPage.bookTitle,
    bookIcon: selectorFile.css.ComproEngage.createClassPage.bookIcon,
    classHeader: selectorFile.css.ComproEngage.createClassPage.classHeader,
    classSubHeader: selectorFile.css.ComproEngage.createClassPage.classSubHeader,
    bookCard: selectorFile.css.ComproEngage.createClassPage.classSubHeader,
    bookCardCheckbox: selectorFile.css.ComproEngage.createClassPage.bookCardCheckbox,
    msgBarClose: selectorFile.css.ComproEngage.myClassPage.msgBarClose,
    bookErrorMsg: selectorFile.css.ComproEngage.createClassPage.bookErrorMsg,
    endDateErrorMsg: selectorFile.css.ComproEngage.createClassPage.endDateErrorMsg,
    startDateErrorMsg: selectorFile.css.ComproEngage.createClassPage.startDateErrorMsg,
    msgBar: selectorFile.css.ComproEngage.myClassPage.msgBar,
    bookSkeleton: selectorFile.css.ComproEngage.createClassPage.bookSkeleton,
    isInitialized: function () {
        logger.logInto(stackTrace.get());
        // action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.title_lbl)
        //wait for displayed book is also loaded
        action.waitForDisplayed(this.bookSkeleton, 30000, true)
        res = this.get_PageData();
        res.pageStatus = pageStatus;
        return res;
    },

    get_PageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: "",
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            classHeader: action.getElementCount(this.classHeader) > 0 ? action.getText(this.classHeader) : null,
            classSubHeader: action.getElementCount(this.classSubHeader) > 0 ? action.getText(this.classSubHeader) : null,
            title_lbl: action.getElementCount(this.title_lbl) > 0 ? action.getText(this.title_lbl) : null,
            title_txtbox: action.getElementCount(this.title_txtbox) > 0 ? action.getValue(this.title_txtbox) : null,
            startDate_lbl: action.getElementCount(this.startDate_lbl) > 0 ? action.getText(this.startDate_lbl) : null,
            startDate: action.getElementCount(this.startDate_txtbox) > 0 ? action.getAttribute(this.startDate_txtbox, "value") : null,
            endDate_lbl: action.getElementCount(this.endDate_lbl) > 0 ? action.getText(this.endDate_lbl) : null,
            endDate: action.getElementCount(this.endDate_txtbox) > 0 ? action.getAttribute(this.endDate_txtbox, "value") : null,
            selectBook_lbl: action.getElementCount(this.selectBook_lbl) > 0 ? action.getText(this.selectBook_lbl) : null,
            selectBook_txt: action.getElementCount(this.selectBook_txt) > 0 ? action.getText(this.selectBook_txt) : null,
            bookTitle: action.getElementCount(this.bookTitle) > 0 ? action.getText(this.bookTitle) : null,
            bookIcon: action.getElementCount(this.bookIcon) > 0 ? action.waitForExist(this.bookIcon) : false,
            cancelBtn_txt: action.getElementCount(this.cancelBtn) > 0 ? action.getText(this.cancelBtn) : null,
            createBtn_txt: action.getElementCount(this.createBtn) > 0 ? action.getText(this.createBtn) : null,
            saveBtn_txt: action.getElementCount(this.saveBtn) > 0 ? action.getText(this.saveBtn) : null,
            removeBookbtn_txt: action.getElementCount(this.removeBookbtn) > 0 ? action.getText(this.removeBookbtn) : null,
        }
        return obj;
    },

    set_ClassName: function (name) {
        logger.logInto(stackTrace.get());
        res = action.click(this.title_txtbox);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- title textbox is clicked");
            res = action.setValue(this.title_txtbox, name);
            if (res == true) {
                res = action.getValue(this.title_txtbox);
            }
        }
        else {
            res = res + "-- Title textbox is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_StartDate_Button: function () { // this function should be updated
        logger.logInto(stackTrace.get());
        res = action.click(this.startDate_txtbox);
        if (res == true)
            logger.logInto(stackTrace.get(), "--start date is clicked");
        else {
            res = res + "-- Start Date is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    click_EndDate_Button: function () { // this function should be updated
        logger.logInto(stackTrace.get());
        res = action.click(this.endDate_txtbox);
        if (res == true) {
            logger.logInto(stackTrace.get(), "--start date is clicked");
        } else {
            res = res + "-- Start Date is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    /*clickAddStartDate: function () { // this function should be updated
        logger.logInto(stackTrace.get());
        res = action.click(this.startDate_txtbox);
        if (res == true) {
            logger.logInto(stackTrace.get(), "--start date is clicked");
        } else {
            res = res + "-- Start Date is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },
    /* addEndDate: function (count) { // this function should be updated
         logger.logInto(stackTrace.get());
         res = action.click(this.endDate_txtbox);
         var calender = require('./calender.page.js')
         var date = calender.isInitialized();
         calender.selectDate(date.currentDate + parseInt(count));
         if (res == true) {
             logger.logInto(stackTrace.get(), "--end date is clicked");
             res = action.click(this.datePicker_okBtn)
             if (res == true) {
                 logger.logInto(stackTrace.get(), "--Current date is selected and OK button is clicked");
                 res = action.getAttribute(this.endDate_txtbox, "value");
             }
             else {
                 res = res + "-- OK button is NOT clicked";
                 logger.logInto(stackTrace.get(), res, 'error');
             }
         }
         else {
             res = res + "-- End Date is NOT clicked";
             logger.logInto(stackTrace.get(), res, 'error');
         }
         return res;
     },*/

    click_Cancel_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.cancelBtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- cancelBtn is clicked");
            var teacherViewClassPage = require('./teacherViewClass.page.js');
            res = teacherViewClassPage.isInitialized();
        }
        else {
            res = res + " -- cancelBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_Create_Button: function () {
        logger.logInto(stackTrace.get());
        return this.click_Create_Save_Restore_Button("create");
    },

    click_Save_Button: function () {
        logger.logInto(stackTrace.get());
        return this.click_Create_Save_Restore_Button("save");
    },

    click_Restore_Button: function () {
        logger.logInto(stackTrace.get());
        return this.click_Create_Save_Restore_Button("restore");
    },

    click_Create_Save_Restore_Button: function (btn) {
        logger.logInto(stackTrace.get());
        //let flag = false;
        if (btn.toLowerCase() == "create")
            res = action.click(this.createBtn);
        else if (btn.toLowerCase() == "save")
            res = action.click(this.saveBtn);

        action.waitForDisplayed(this.loaderIcon, undefined, true)
        ret = this.get_ErrorMessages();
        if (ret.endDateErrorMsg != null || ret.titleErrorMsg != null || ret.startDateErrorMsg != null || ret.bookErrorMsg != null) {
            res = ret;
            logger.logInto(stackTrace.get(), "Error message found on the page");
            return res;
        }
        else if (res == true) {

            if (btn == "create") {
                logger.logInto(stackTrace.get(), "success page launched");
                let successClassPage = require('./successClass.page.js')
                res = successClassPage.isInitialized();
            }
            else {
                logger.logInto(stackTrace.get(), "Instructor my classes page is launched");
                res = action.waitForDisplayed(this.msgBar);
                let txt = action.getText(this.msgBar);
                action.click(this.msgBarClose)
                action.waitForDisplayed(this.msgBar, undefined, true);
                var teacherViewClassPage = require('./teacherViewClass.page.js');
                res = teacherViewClassPage.isInitialized();
                res.msg = txt;
            }
        }
        else {
            res = res + " -- unkown error !!";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    get_ErrorMessages: function () {
        logger.logInto(stackTrace.get());
        obj = {
            titleErrorMsg: action.getElementCount(this.titleErrorMsg) > 0 ? action.getText(this.titleErrorMsg) : null,
            startDateErrorMsg: action.getElementCount(this.startDateErrorMsg) > 0 ? action.getText(this.startDateErrorMsg) : null,
            endDateErrorMsg: action.getElementCount(this.endDateErrorMsg) > 0 ? action.getText(this.endDateErrorMsg) : null,
            bookErrorMsg: action.getElementCount(this.bookErrorMsg) > 0 ? action.getText(this.bookErrorMsg) : null,
        }
        return obj;
    },
    // Akhil: function missing for selecting the book checkbox
    // this function should accept the book name then select the book based on name
    click_SelectBook: function (index) {
        //rupsi: will work on this function when got another book, now workonly for selecting first book
        //if ((action.waitForExist("footer div>svg", 10000)) != true) {
        //    action.click("[data-tid=button-add-" + index + "]")
        //}
        action.click("[data-tid=button-add-" + index + "]")
        res = action.waitForClickable("[data-tid=\"button-Add to Class\"")
        action.click("[data-tid=\"button-Add to Class\"]")
        action.waitForDisplayed(this.bookIcon)
        return res;
    },

    checkbookAvaibility: function () {
        logger.logInto(stackTrace.get());
        if (action.getElementCount(this.bookIcon) < 1) {

            res = null;
        } else
            res = "alreadySelected"
        return res;
    },

    click_AddANewBook_Button: function () {
        logger.logInto(stackTrace.get());

        res = action.click(this.AddANewBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "Add A New Book Button Clicked");
            let addBookPage = require('./addBook.page.js')
            res = addBookPage.isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        console.log(res)
        return res;
    },

    clickdeleteBook: function () {
        res = action.click(this.removeBookbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "Book is removed");
            res = this.isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        return res;
    }

}