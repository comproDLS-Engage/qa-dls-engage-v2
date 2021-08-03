'use strict';
const { BrowserType } = require('@applitools/eyes-webdriverio');
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;
var bookList = new Array();
module.exports = {

    pageTitle: selectorFile.css.ComproEngage.addBookPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.addBookPage.pageSubTitle,
    myBooksTab: selectorFile.css.ComproEngage.addBookPage.myBooksTab,
    allBooksTab: selectorFile.css.ComproEngage.addBookPage.allBooksTab,
    addtoClassbtn: selectorFile.css.ComproEngage.addBookPage.addtoClassbtn,
    cancelAndGoBackbtn: selectorFile.css.ComproEngage.addBookPage.cancelAndGoBackbtn,
    noBooklbl: selectorFile.css.ComproEngage.addBookPage.noBooklbl,
    addBookbtn: selectorFile.css.ComproEngage.addBookPage.addBookbtn,
    bookImgIcon: selectorFile.css.ComproEngage.addBookPage.bookImgIcon,
    bookTitle: selectorFile.css.ComproEngage.addBookPage.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.addBookPage.bookSubTitle,
    bookAddedlbl: selectorFile.css.ComproEngage.addBookPage.bookAddedlbl,
    bookAddedtxt: selectorFile.css.ComproEngage.addBookPage.bookAddedtxt,
    bookdeletebottomIcon: selectorFile.css.ComproEngage.addBookPage.bookdeletebtmIcon,
    noBookTitle: selectorFile.css.ComproEngage.addBookPage.noBookTitle,
    noBookSubTitle: selectorFile.css.ComproEngage.addBookPage.noBookSubTitle,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        // action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.addtoClassbtn)
        res = this.get_PageData();
        res.pageStatus = pageStatus;
        res.bookData = this.getBookData();
        return res;
    },

    get_PageData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: "",
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            noBookTitle: action.getElementCount(this.noBookTitle) > 0 ? action.getText(this.noBookTitle) : null,
            noBookSubTitle: action.getElementCount(this.noBookSubTitle) > 0 ? action.getText(this.noBookSubTitle) : null,
            myBooksTab: action.getElementCount(this.myBooksTab) > 0 ? action.getText(this.myBooksTab) : null,
            allBooksTab: action.getElementCount(this.allBooksTab) > 0 ? action.getText(this.allBooksTab) : null,
            myBooksTabSelected: action.getElementCount(this.myBooksTab) > 0 ? action.getAttribute(this.myBooksTab, "aria-selected") : null,
            allBooksTabSelected: action.getElementCount(this.allBooksTab) > 0 ? action.getAttribute(this.allBooksTab, "aria-selected") : null,
            addtoClassbtn: action.getElementCount(this.addtoClassbtn) > 0 ? action.getText(this.addtoClassbtn) : null,
            cancelAndGoBackbtn: action.getElementCount(this.cancelAndGoBackbtn) > 0 ? action.getText(this.cancelAndGoBackbtn) : null,
            noBooklbl: action.getElementCount(this.noBooklbl) > 0 ? action.getText(this.noBooklbl) : null,
            bookAddedlbl: action.getElementCount(this.bookAddedlbl) > 0 ? action.getText(this.bookAddedlbl) : null,
            bookAddedtxt: action.getElementCount(this.bookAddedtxt) > 0 ? action.getText(this.bookAddedtxt) : null,
            bookdeletebtmIcon: action.getElementCount(this.bookdeletebtmIcon) > 0 ? action.waitForExist(this.bookdeletebtmIcon) : null,
        }
        return obj;
    },

    getBookData: function () {
        let bookCount = action.getElementCount(this.bookTitle);
        browser.pause(5000)
        console.log(action.getText(this.bookSubTitle + 0 + "]"))
        obj = {
            bookList: []
        }
        if (bookCount > 0) {
            let i;
            for (i = 0; i < bookCount; i++) {
                obj.bookList[i] = {
                    bookImgIcon: action.getElementCount(this.bookImgIcon + i + "]") > 0 ? action.waitForExist(this.bookImgIcon + i + "]") : null,
                    bookTitle: action.getElementCount(this.bookTitle + i + "']") > 0 ? action.getText(this.bookTitle + i + "']") : null,
                    bookSubTitle: action.getElementCount(this.bookSubTitle + i + "]") > 0 ? action.getText(this.bookSubTitle + i + "]") : null,
                    addBookbtntxt: action.getElementCount(this.addBookbtn + i + "] div") > 0 ? action.getText(this.addBookbtn + i + "] div") : null,
                    addBookbtnIcon: action.getElementCount(this.addBookbtn + i + "] svg") > 0 ? action.waitForExist(this.addBookbtn + i + "] svg") : null
                }
            }
            console.log(obj)
            return obj;
        }
    },


    click_AddtoClass_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.addtoClassbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- addBtn is clicked");
            var creatClassPage = require('./createClass.page.js');
            res = creatClassPage.isInitialized();
        }
        else {
            res = res + " -- cancelBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_CancelAndGoBack_Button: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.cancelAndGoBackbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- cancelBtn is clicked");
            var creatClassPage = require('./createClass.page.js');
            res = creatClassPage.isInitialized();
        }
        else {
            res = res + " -- cancelBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_addBook: function (bookName) {
        logger.logInto(stackTrace.get());
        let book_index = this.getBookIndex(bookName);
        console.log(book_index)
        if (typeof book_index != 'string') {
            res = action.click(this.addBookbtn + book_index + "]");
            if (res == true) {
                res = this.isInitialized();
            }
            else {
                res = res + " --class card is NOT available";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        else {
            res = book_index; //storing error message recieved from getBookindex()
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getBookIndex: function (bookName) {
        logger.logInto(stackTrace.get());
        var index = 0;
        var arr = [];
        action.waitForDisplayed("circle[class*='MuiCircularProgress-circle']", undefined, true)
        res = action.findElements(this.bookTitle);
        console.log(res.length)
        if (res.length == 0) {
            res = res + " -- No Book available";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        else {
            for (var i = 0; i < res.length; i++) {
                var findBookName = action.getText(this.bookTitle + i + "']");
                console.log(findBookName)
                if (bookName == findBookName) {
                    arr[index] = i
                    index = index + 1;
                }
            }
            if (arr.length == 1)
                res = arr[0];
            else if (arr.length > 1)
                res = "ERROR! Multiple Book present with name " + bookName + " at index " + arr + " !!";
            else
                res = "ERROR! No Book found with name " + bookName + " !!";
        }
        console.log(res)
        return res;
    },

    clickBookDeleteIcon: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookdeletebottomIcon);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- delete Icon is clicked");
            res = this.isInitialized();
        }
        else {
            res = res + " -- delete Icon is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
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


    clickdeleteBook: function () {
        res = action.click(this.removeBookbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "Book is removed");
            res = this.isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        return res;
    },

    clickOnBook : function (bookTitle) {
        console.log("[title='"+bookTitle+"']")
        action.scrollIntoView("[title='"+bookTitle+"']");
        res = action.click("[title='"+bookTitle+"']")
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Book Title Clicked clicked");
            let bookViewTOC = require('./bookDetail.page.js');
            res = bookViewTOC.isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --Book Title NOT clicked", "error");
        return res;

    }

}