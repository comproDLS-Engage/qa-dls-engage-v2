'use strict';
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
    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        // action.waitForDocumentLoad();
        let pageStatus = await action.waitForDisplayed(this.title_lbl)
        //wait for displayed book is also loaded
        await action.waitForDisplayed(this.bookSkeleton, 30000, true)
        res = await this.get_PageData();
        res.pageStatus = pageStatus;
        return res;
    },

    get_PageData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            pageStatus: "",
            pageTitle: (await action.getElementCount(this.pageTitle)) > 0 ? await action.getText(this.pageTitle) : null,
            pageSubTitle: (await action.getElementCount(this.pageSubTitle)) > 0 ? await action.getText(this.pageSubTitle) : null,
            classHeader: (await action.getElementCount(this.classHeader)) > 0 ? await action.getText(this.classHeader) : null,
            classSubHeader: (await action.getElementCount(this.classSubHeader)) > 0 ? await action.getText(this.classSubHeader) : null,
            title_lbl: (await action.getElementCount(this.title_lbl)) > 0 ? await action.getText(this.title_lbl) : null,
            title_txtbox: (await action.getElementCount(this.title_txtbox)) > 0 ? await action.getValue(this.title_txtbox) : null,
            startDate_lbl: (await action.getElementCount(this.startDate_lbl)) > 0 ? await action.getText(this.startDate_lbl) : null,
            startDate: (await action.getElementCount(this.startDate_txtbox)) > 0 ? await action.getAttribute(this.startDate_txtbox, "value") : null,
            endDate_lbl: (await action.getElementCount(this.endDate_lbl)) > 0 ? await action.getText(this.endDate_lbl) : null,
            endDate: (await action.getElementCount(this.endDate_txtbox)) > 0 ? await action.getAttribute(this.endDate_txtbox, "value") : null,
            selectBook_lbl: (await action.getElementCount(this.selectBook_lbl)) > 0 ? await action.getText(this.selectBook_lbl) : null,
            selectBook_txt: (await action.getElementCount(this.selectBook_txt)) > 0 ? await action.getText(this.selectBook_txt) : null,
            bookTitle: (await action.getElementCount(this.bookTitle)) > 0 ? await action.getText(this.bookTitle) : null,
            bookIcon: (await action.getElementCount(this.bookIcon)) > 0 ? await action.waitForExist(this.bookIcon) : false,
            cancelBtn_txt: (await action.getElementCount(this.cancelBtn)) > 0 ? await action.getText(this.cancelBtn) : null,
            createBtn_txt: (await action.getElementCount(this.createBtn)) > 0 ? await action.getText(this.createBtn) : null,
            saveBtn_txt: (await action.getElementCount(this.saveBtn)) > 0 ? await action.getText(this.saveBtn) : null,
            removeBookbtn_txt: (await action.getElementCount(this.removeBookbtn)) > 0 ? await action.getText(this.removeBookbtn) : null,
        }
        return obj;
    },

    set_ClassName: async function (name) {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.title_txtbox);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- title textbox is clicked");
            res = await action.setValue(this.title_txtbox, name);
            if (res == true) {
                res = await action.getValue(this.title_txtbox);
            }
        }
        else {
            res = res + "-- Title textbox is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_StartDate_Button: async function () { // this function should be updated
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.startDate_txtbox);
        if (res == true)
            await logger.logInto(await stackTrace.get(), "--start date is clicked");
        else {
            res = res + "-- Start Date is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    click_EndDate_Button: async function () { // this function should be updated
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.endDate_txtbox);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "--start date is clicked");
        } else {
            res = res + "-- Start Date is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },
    /*clickAddStartDate: async function () { // this function should be updated
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
    /* addEndDate: async function (count) { // this function should be updated
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

    click_Cancel_Button: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.cancelBtn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), "-- cancelBtn is clicked");
            var classDashboardPage = require('./classDashboard.page.js');
            res = await classDashboardPage.isInitialized();
        }
        else {
            res = res + " -- cancelBtn is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_Create_Button: async function () {
        await logger.logInto(await stackTrace.get());
        return this.click_Create_Save_Restore_Button("create");
    },

    click_Save_Button: async function () {
        await logger.logInto(await stackTrace.get());
        return this.click_Create_Save_Restore_Button("save");
    },

    click_Restore_Button: async function () {
        await logger.logInto(await stackTrace.get());
        return this.click_Create_Save_Restore_Button("restore");
    },

    click_Create_Save_Restore_Button: async function (btn) {
        await logger.logInto(await stackTrace.get());
        //let flag = false;
        if (btn.toLowerCase() == "create")
            res = await action.click(this.createBtn);
        else if (btn.toLowerCase() == "save")
            res = await action.click(this.saveBtn);

        await action.waitForDisplayed(this.loaderIcon, undefined, true)
        ret = await this.get_ErrorMessages();
        if (ret.endDateErrorMsg != null || ret.titleErrorMsg != null || ret.startDateErrorMsg != null || ret.bookErrorMsg != null) {
            res = ret;
            await logger.logInto(await stackTrace.get(), "Error message found on the page");
            return res;
        }
        else if (res == true) {

            if (btn == "create") {
                await logger.logInto(await stackTrace.get(), "success page launched");
                let successClassPage = require('./successClass.page.js')
                res = await successClassPage.isInitialized();
            }
            else {
                await logger.logInto(await stackTrace.get(), "Instructor my classes page is launched");
                res = await action.waitForDisplayed(this.msgBar);
                let txt = await action.getText(this.msgBar);
                await action.click(this.msgBarClose)
                await action.waitForDisplayed(this.msgBar, undefined, true);
                var teacherViewClassPage = require('./teacherViewClass.page.js');
                res = await teacherViewClassPage.getViewClassPageData();
                res.msg = txt;
            }
        }
        else {
            res = res + " -- unkown error !!";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    get_ErrorMessages: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            titleErrorMsg: (await action.getElementCount(this.titleErrorMsg)) > 0 ? await action.getText(this.titleErrorMsg) : null,
            startDateErrorMsg: (await action.getElementCount(this.startDateErrorMsg)) > 0 ? await action.getText(this.startDateErrorMsg) : null,
            endDateErrorMsg: (await action.getElementCount(this.endDateErrorMsg)) > 0 ? await action.getText(this.endDateErrorMsg) : null,
            bookErrorMsg: (await action.getElementCount(this.bookErrorMsg)) > 0 ? await action.getText(this.bookErrorMsg) : null,
        }
        return obj;
    },
    // Akhil: function missing for selecting the book checkbox
    // this function should accept the book name then select the book based on name
    click_SelectBook: async function (index) {
        //rupsi: will work on this function when got another book, now workonly for selecting first book
        //if ((action.waitForExist("footer div>svg", 10000)) != true) {
        //    action.click("[data-tid=button-add-" + index + "]")
        //}
        await action.click("[data-tid=button-add-" + index + "]")
        res = await action.waitForClickable("[data-tid=\"button-Add to Class\"")
        await action.click("[data-tid=\"button-Add to Class\"]")
        await action.waitForDisplayed(this.bookIcon)
        return res;
    },

    checkbookAvaibility: async function () {
        await logger.logInto(await stackTrace.get());
        if ((await action.getElementCount(this.bookIcon)) < 1) {

            res = null;
        } else
            res = "alreadySelected"
        return res;
    },

    click_AddANewBook_Button: async function () {
        await logger.logInto(await stackTrace.get());

        res = await action.click(this.AddANewBook_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), res + "Add A New Book Button Clicked");
            let addBookPage = require('./addBook.page.js')
            res = await addBookPage.isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        console.log(res)
        return res;
    },

    clickdeleteBook: async function () {
        res = await action.click(this.removeBookbtn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), res + "Book is removed");
            res = await this.isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        return res;
    }

}