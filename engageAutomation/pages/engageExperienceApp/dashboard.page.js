"use strict";
const { click } = require('../../core/actionLibrary/baseActionLibrary.js');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, ret;

module.exports = {


    pageTitle: selectorFile.css.ComproEngage.dashboardPage.pageTitle,
    createPlaylist_Btn: selectorFile.css.ComproEngage.dashboardPage.createPlaylist_Btn,
    addBook_Btn: selectorFile.css.ComproEngage.dashboardPage.addBook_Btn,
    bookPlusIcon: selectorFile.css.ComproEngage.dashboardPage.bookPlusIcon,
    resourceList: selectorFile.css.ComproEngage.dashboardPage.resourceList,
    resourceTitle: selectorFile.css.ComproEngage.dashboardPage.resourceTitle,
    cardSliderTitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderTitle,
    cardSliderSubtitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderTitle,
    bookTitle: selectorFile.css.ComproEngage.dashboardPage.bookTitle,
    bookEllipses: selectorFile.css.ComproEngage.dashboardPage.bookEllipses,
    viewClass_menu: selectorFile.css.ComproEngage.dashboardPage.viewClass_menu,
    createClass_menu: selectorFile.css.ComproEngage.dashboardPage.createClass_menu,
    removeBook_menu: selectorFile.css.ComproEngage.dashboardPage.removeBook_menu,
    openFlipbook_menu: selectorFile.css.ComproEngage.dashboardPage.openFlipbook_menu,
    removeBook_title: selectorFile.css.ComproEngage.dashboardPage.removeBook_title,
    removeBook_subTitle: selectorFile.css.ComproEngage.dashboardPage.removeBook_subTitle,
    removeBook_cancel: selectorFile.css.ComproEngage.dashboardPage.removeBook_cancel,
    removeBook_remove: selectorFile.css.ComproEngage.dashboardPage.removeBook_remove,


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
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            createPlaylist_Txt: (action.getElementCount(this.createPlaylist_Btn) > 0) ? action.getText(this.createPlaylist_Btn) : null,
            addBook_Txt: (action.getElementCount(this.addBook_Btn) > 0) ? action.getText(this.addBook_Btn) : null,
            cardSliderTitle: (action.getElementCount(this.cardSliderTitle) > 0) ? action.getText(this.cardSliderTitle) : null, 
            cardSliderSubtitle: (action.getElementCount(this.cardSliderSubtitle) > 0) ? action.getText(this.cardSliderSubtitle) : null,      
            resourceList: [],
            bookList: []
        }

        let resources, books, i;
        resources = action.findElements(this.resourceList);
        for (i = 0; i < resources.length; i++) {
            obj.resourceList[i] = {
                resourceTitle: action.getText(this.resourceTitle + i + "]" ),
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
                    var browsePage = require('./browse.page.js')
                    res = browsePage.getActiveTabName();
                    logger.logInto(stackTrace.get(), " --Resource band is clicked");
                }
                else {
                    res = res + " -- Error in clicking resource Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },

    clickBookMenuOptions: function (bookName) {
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

    clickMenuViewClasses: function (bookName) {
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

    clickMenuCreateNewClass: function (bookName) {
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
                    logger.logInto(stackTrace.get(), " --Remove from My books clicked");
                    let obj = {
                        removeBook_title: (action.getElementCount(this.removeBook_title) > 0) ? action.getText(this.removeBook_title) : null,
                        removeBook_subTitle: (action.getElementCount(this.removeBook_subTitle) > 0) ? action.getText(this.removeBook_subTitle) : null,
                        removeBook_cancel: (action.getElementCount(this.removeBook_cancel) > 0) ? action.getText(this.removeBook_cancel) : null,
                        removeBook_remove: (action.getElementCount(this.removeBook_remove) > 0) ? action.getText(this.removeBook_remove) : null,
                    }
                    return obj;
                }
                else {
                    res = res + " -- Error in clicking Remove from My books"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
    },

    clickMenuRemoveBook_Cancel: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.removeBook_cancel);
		if (true == res) {
            res = this.isInitialized();
            logger.logInto(stackTrace.get(), " --cancel button is clicked");
		}
		else {
			res = res + " -- Error in clicking Notification Close Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
    },

    clickMenuRemoveBook_Remove: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.removeBook_remove);
		if (true == res) {
            res = this.isInitialized();
            logger.logInto(stackTrace.get(), " --cancel button is clicked");
		}
		else {
			res = res + " -- Error in clicking Notification Close Button";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
    },

    clickMenuOpenFlipbook: function (bookName) {
        logger.logInto(stackTrace.get());
        ret = this.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                let openflipbookSelector = this.openFlipbook_menu + i + "]";
                res = action.click(openflipbookSelector);
                let arrowSelector = openflipbookSelector + " svg"
                res = action.getElementCount(arrowSelector)
                if (res == 0) {
                    res = action.click(openflipbookSelector)
                    logger.logInto(stackTrace.get(), " --Open flipbook clicked");
                }
                else {
                    //get list and click on the required flipbook
                    //selectors not available, logged https://compro.atlassian.net/browse/ENG-7184
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
                    var addBook = require('./addBook.page.js');
                    res = addBook.isInitialized();
                }
                else {
                    res = res + " -- Error in clicking Add book Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            
        return res;
    },

    ClickPlusIconofBook:function(bookName) {
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
}
    

