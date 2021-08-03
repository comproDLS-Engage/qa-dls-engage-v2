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
    //for blank dashboard in slider section
    cardSliderTitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderTitle,
    cardSliderSubtitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderSubtitle,
    cardSliderLeftBtn: selectorFile.css.ComproEngage.dashboardPage.cardSliderLeftBtn,
    cardSliderRightBtn: selectorFile.css.ComproEngage.dashboardPage.cardSliderRightBtn,
    actionCardTitles: selectorFile.css.ComproEngage.dashboardPage.actionCardTitles,
    actionCardSubtitles: selectorFile.css.ComproEngage.dashboardPage.actionCardSubtitles,
    actionCardBtns: selectorFile.css.ComproEngage.dashboardPage.actionCardBtns,
    //My Books section
    myBooksHeading_Txt: selectorFile.css.ComproEngage.dashboardPage.myBooksHeading_Txt,
    noBooks_title: selectorFile.css.ComproEngage.dashboardPage.noBooks_title,
    noBooks_subTitle: selectorFile.css.ComproEngage.dashboardPage.noBooks_subTitle,
    noBooks_btn: selectorFile.css.ComproEngage.dashboardPage.noBooks_btn,
    //My Playlist section
    myPlaylistsHeading_Txt: selectorFile.css.ComproEngage.dashboardPage.myPlaylistsHeading_Txt,
    noPlaylists_title: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_title,
    noPlaylists_subTitle: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_subTitle,
    noPlaylists_btn: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_btn,

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
            cardSliderLeftBtn: (action.getElementCount(this.cardSliderLeftBtn) > 0) ? action.waitForDisplayed(this.cardSliderLeftBtn) : false,
            cardSliderRightBtn: (action.getElementCount(this.cardSliderRightBtn) > 0) ? action.waitForDisplayed(this.cardSliderRightBtn) : false,

            myBooksHeading_Txt: (action.getElementCount(this.myBooksHeading_Txt) > 0) ? action.getText(this.myBooksHeading_Txt) : null, 
            noBooks_title: (action.getElementCount(this.noBooks_title) > 0) ? action.getText(this.noBooks_title) : null, 
            noBooks_subTitle: (action.getElementCount(this.noBooks_subTitle) > 0) ? action.getText(this.noBooks_subTitle) : null, 
            noBooks_btn: (action.getElementCount(this.noBooks_btn) > 0) ? action.getText(this.noBooks_btn) : null, 
            myPlaylistsHeading_Txt: (action.getElementCount(this.myPlaylistsHeading_Txt) > 0) ? action.getText(this.myPlaylistsHeading_Txt) : null, 
            noPlaylists_title: (action.getElementCount(this.noPlaylists_title) > 0) ? action.getText(this.noPlaylists_title) : null, 
            noPlaylists_subTitle: (action.getElementCount(this.noPlaylists_subTitle) > 0) ? action.getText(this.noPlaylists_subTitle) : null, 
            noPlaylists_btn: (action.getElementCount(this.noPlaylists_btn) > 0) ? action.getText(this.noPlaylists_btn) : null, 

            actionCardList: [],
            resourceList: [],
            bookList: []
        }

        let actionCards, resources, books, i;

        actionCards = action.findElements(this.actionCardTitles);
        //gets the title, subtile and button names of the action cards for blank dashboard 
        for (i = 0; i < actionCards.length; i++) {
            obj.actionCardList[i] = {
                actionCardTitles: action.getText(this.actionCardTitles + i + "]" ),
                actionCardSubtitles: action.getText(this.actionCardSubtitles + i + "]" ),
                actionCardBtns: action.getText(this.actionCardBtns + i + "]" ),
            }
        }
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

    clickRemoveBookDialogueBox_Cancel: function () {
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

    clickRemoveBookDialogueBox_Remove: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.removeBook_remove);
		if (true == res) {
             res = this.isInitialized();
             logger.logInto(stackTrace.get(), " --remove button is clicked");
           
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
                res = action.click(this.addBook_Btn);
                if (res == true) {
                    logger.logInto(stackTrace.get(), " Add book button is clicked");
                    return true
                    // var addBook = require('./addBook.page.js');
                    // res = addBook.isInitialized();
                }
                else {
                    res = res + " -- Error in clicking Add book Button"
                    logger.logInto(stackTrace.get(), res, "error");
                }  
        //return res;
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
    

