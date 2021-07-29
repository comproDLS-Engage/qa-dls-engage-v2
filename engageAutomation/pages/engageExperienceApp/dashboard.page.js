"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {


    pageTitle: selectorFile.css.ComproEngage.dashboardPage.pageTitle,
    resourceList: selectorFile.css.ComproEngage.dashboardPage.resourceList,
    resourceTitle: selectorFile.css.ComproEngage.dashboardPage.resourceTitle,
    bookTitle: selectorFile.css.ComproEngage.dashboardPage.bookTitle,
    bookEllipses: selectorFile.css.ComproEngage.dashboardPage.bookEllipses,
    viewClass_menu: selectorFile.css.ComproEngage.dashboardPage.viewClass_menu,
    createClass_menu: selectorFile.css.ComproEngage.dashboardPage.createClass_menu,
    removeBook_menu: selectorFile.css.ComproEngage.dashboardPage.removeBook_menu,
    openFlipbook_menu: selectorFile.css.ComproEngage.dashboardPage.openFlipbook_menu,
    addBookbtn: selectorFile.css.ComproEngage.dashboardPage.addBookbtn,
    bookPlusIcon:selectorFile.css.ComproEngage.dashboardPage.bookPlusIcon,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle);
        res = this.getDashboardPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    getDashboardPageData: function () {
        logger.logInto(stackTrace.get());
        let obj = {
            resourceList: [],
            bookList: []
        }
        let resources, books, i;
        resources = action.findElements(this.resourceList);
        for (i = 0; i < resources.length; i++) {
            obj.resourceList[i] = {
                resourceTitle: action.getText(this.resourceTitle + i + "\"]//p[1]"),
            }
        }

        books = action.findElements(this.bookTitle);
        for (i = 0; i < books.length; i++) {
            obj.bookList[i] = {
                bookTitle: action.getText(this.bookTitle + i + "]")
            }
        }
        return obj;
    },

    clickExploreResource: function (resourceName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.resourceList.length; i++) {
            if (ret.resourceList[i].resourceTitle == resourceName) {
                res = action.click(this.resourceList + i + "]");
                if (res == true) {
                    logger.logInto(stackTrace.get(), " --Resource band is clicked");
                    // res = contactStudentPage.isInitialized();
                }
                else {
                    res = res + " -- Error in clicking resource Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickAddBook: function () {
        logger.logInto(stackTrace.get());
                res = action.click(this.addBookbtn);
                if (res == true) {
                    logger.logInto(stackTrace.get(), " Add book button is clicked");
                    // res = contactStudentPage.isInitialized();
                }
                else {
                    res = res + " -- Error in clicking Add book Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            
        return res;
    },

    ClickPlusIconofBook:function(bookName)
    {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.bookPlusIcon + i + "]");
                if (res == true) {
                     logger.logInto(stackTrace.get(), " --Book Plus icon is clicked");
                    }
                    else {
                        res = res + " -- Error in clicking Book Plus icon"
                        logger.logInto(stackTrace.get(), res, "error");
                    }
                }
            }
            return res;
    },

    clickViewBookEllipses: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.bookEllipses + i + "]");
                if (res == true) {
                    //get Data of dropdown
                    logger.logInto(stackTrace.get(), " --Book Ellipse clicked");
                }
                else {
                    res = res + " -- Error in clicking Book Ellipses"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickMenuViewClass: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.viewClass_menu + i + "]");
                if (res == true) {
                   var classDrawerPage=require('./classDrawer.page.js')
                    res = classDrawerPage.isInitialized();
                    logger.logInto(stackTrace.get(), " --View class clicked");
                }
                else {
                    res = res + " -- Error in clicking View class"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickMenuCreateClass: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.createClass_menu + i + "]");
                if (res == true) {
                    var createClassPage = require('./createClass.page.js');
                    res = createClassPage.isInitialized();
                    logger.logInto(stackTrace.get(), " --Book Ellipse clicked");
                }
                else {
                    res = res + " -- Error in clicking create class"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickMenuRemoveBook: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.removeBook_menu + i + "]");
                if (res == true) {
                    //Snackbar
                    logger.logInto(stackTrace.get(), " --Remove from My books clicked");
                    res = action.click("[aria-labelledby=form-dialog-title] button:nth-child(2)");
                }
                else {
                    res = res + " -- Error in clicking Remove from My books"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickMenuOpenFlipbook: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.openFlipbook_menu + i + "]");
                if (res == true) {
                    //Flipbook Page is Initialized
                    logger.logInto(stackTrace.get(), " --Open flipbook clicked");
                }
                else {
                    res = res + " -- Error in clicking Open flipbook"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    }
}
    

