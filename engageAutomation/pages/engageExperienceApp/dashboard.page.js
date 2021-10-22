"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var appShell = require('./appShell.page');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    pageTitle: selectorFile.css.ComproEngage.dashboardPage.pageTitle,
    createPlaylist_Btn: selectorFile.css.ComproEngage.dashboardPage.createPlaylist_Btn,
    addBook_Btn: selectorFile.css.ComproEngage.dashboardPage.addBook_Btn,

    //for blank dashboard
    cardSliderTitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderTitle,
    cardSliderSubtitle: selectorFile.css.ComproEngage.dashboardPage.cardSliderSubtitle,
    cardSliderLeftBtn: selectorFile.css.ComproEngage.dashboardPage.cardSliderLeftBtn,
    cardSliderRightBtn: selectorFile.css.ComproEngage.dashboardPage.cardSliderRightBtn,
    actionCardTitles: selectorFile.css.ComproEngage.dashboardPage.actionCardTitles,
    actionCardSubtitles: selectorFile.css.ComproEngage.dashboardPage.actionCardSubtitles,
    actionCardBtns: selectorFile.css.ComproEngage.dashboardPage.actionCardBtns,
    myBooksHeading_Txt: selectorFile.css.ComproEngage.dashboardPage.myBooksHeading_Txt,
    noBooks_title: selectorFile.css.ComproEngage.dashboardPage.noBooks_title,
    noBooks_subTitle: selectorFile.css.ComproEngage.dashboardPage.noBooks_subTitle,
    noBooks_btn: selectorFile.css.ComproEngage.dashboardPage.noBooks_btn,
    myPlaylistsHeading_Txt: selectorFile.css.ComproEngage.dashboardPage.myPlaylistsHeading_Txt,
    noPlaylists_title: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_title,
    noPlaylists_subTitle: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_subTitle,
    noPlaylists_btn: selectorFile.css.ComproEngage.dashboardPage.noPlaylists_btn,

    //My Books section
    bookTitle: selectorFile.css.ComproEngage.dashboardPage.bookTitle,
    bookEllipses: selectorFile.css.ComproEngage.dashboardPage.bookEllipses,
    view_btn: selectorFile.css.ComproEngage.dashboardPage.view_btn,
    removeBook_title: selectorFile.css.ComproEngage.dashboardPage.removeBook_title,
    removeBook_subTitle: selectorFile.css.ComproEngage.dashboardPage.removeBook_subTitle,
    removeBook_cancel: selectorFile.css.ComproEngage.dashboardPage.removeBook_cancel,
    removeBook_remove: selectorFile.css.ComproEngage.dashboardPage.removeBook_remove,
    bookMenu_viewClass: selectorFile.css.ComproEngage.dashboardPage.bookMenu_viewClass,
    bookMenu_createClass: selectorFile.css.ComproEngage.dashboardPage.bookMenu_createClass,
    bookMenu_remove: selectorFile.css.ComproEngage.dashboardPage.bookMenu_remove,
    bookMenu_openFlipbook: selectorFile.css.ComproEngage.dashboardPage.bookMenu_openFlipbook,

    //my playlist section
    playlistTitle: selectorFile.css.ComproEngage.dashboardPage.playlistTitle,
    playlistSubtitle: selectorFile.css.ComproEngage.dashboardPage.playlistSubtitle,

    //recently viewed section
    recentlyViewed_heading: selectorFile.css.ComproEngage.dashboardPage.recentlyViewed_heading,

    //explore section
    exploreHeading: selectorFile.css.ComproEngage.dashboardPage.exploreHeading,
    viewAll_btn: selectorFile.css.ComproEngage.dashboardPage.viewAll_btn,
    resourceList: selectorFile.css.ComproEngage.dashboardPage.resourceList,
    resourceTitle: selectorFile.css.ComproEngage.dashboardPage.resourceTitle,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.pageTitle),
            appShell: null
        };
        res.appShell = appShell.isInitialized();
        return res;
    },

    getDashboardPageData: function () {
        logger.logInto(stackTrace.get());
        let obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            createPlaylist_Txt: (action.getElementCount(this.createPlaylist_Btn) > 0) ? action.getText(this.createPlaylist_Btn) : null,
            addBook_Txt: (action.getElementCount(this.addBook_Btn) > 0) ? action.getText(this.addBook_Btn) : null,
            myBooksHeading_Txt: (action.getElementCount(this.myBooksHeading_Txt) > 0) ? action.getText(this.myBooksHeading_Txt) : null,
            myPlaylistsHeading_Txt: (action.getElementCount(this.myPlaylistsHeading_Txt) > 0) ? action.getText(this.myPlaylistsHeading_Txt) : null,
            recentlyViewed_heading: (action.getElementCount(this.recentlyViewed_heading) > 0) ? action.getText(this.recentlyViewed_heading) : null,
            exploreHeading: (action.getElementCount(this.exploreHeading) > 0) ? action.getText(this.exploreHeading) : null,
            viewAll_btn: (action.getElementCount(this.viewAll_btn) > 0) ? action.getText(this.viewAll_btn) : null,

            noBooks_title: (action.getElementCount(this.noBooks_title) > 0) ? action.getText(this.noBooks_title) : null,
            noBooks_subTitle: (action.getElementCount(this.noBooks_subTitle) > 0) ? action.getText(this.noBooks_subTitle) : null,
            noBooks_btn: (action.getElementCount(this.noBooks_btn) > 0) ? action.getText(this.noBooks_btn) : null,

            noPlaylists_title: (action.getElementCount(this.noPlaylists_title) > 0) ? action.getText(this.noPlaylists_title) : null,
            noPlaylists_subTitle: (action.getElementCount(this.noPlaylists_subTitle) > 0) ? action.getText(this.noPlaylists_subTitle) : null,
            noPlaylists_btn: (action.getElementCount(this.noPlaylists_btn) > 0) ? action.getText(this.noPlaylists_btn) : null,

            cardSliderTitle: (action.getElementCount(this.cardSliderTitle) > 0) ? action.getText(this.cardSliderTitle) : null,
            cardSliderSubtitle: (action.getElementCount(this.cardSliderSubtitle) > 0) ? action.getText(this.cardSliderSubtitle) : null,
            cardSliderLeftBtn: (action.getElementCount(this.cardSliderLeftBtn) > 0) ? action.waitForDisplayed(this.cardSliderLeftBtn) : false,
            cardSliderRightBtn: (action.getElementCount(this.cardSliderRightBtn) > 0) ? action.waitForDisplayed(this.cardSliderRightBtn) : false
        }
        return obj;
    },

    getActionCardsData: function (str) {
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        list = action.findElements(this.actionCardTitles);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        actionCardTitles: action.getText(this.actionCardTitles + i),
                        actionCardSubtitles: action.getText(this.actionCardSubtitles + i),
                        actionCardBtns: action.getText(this.actionCardBtns + i)
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    actionCardTitles: action.getText(this.actionCardTitles + i),
                    actionCardSubtitles: action.getText(this.actionCardSubtitles + i),
                    actionCardBtns: action.getText(this.actionCardBtns + i)
                }
            }
        }
        return arr;
    },

    getBooksData: function (str) {
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        list = action.findElements(this.bookTitle);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        bookTitle: action.getText(this.bookTitle + i)
                        //view button:
                        //book image:
                        //bookSubtitle
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    bookTitle: action.getText(this.bookTitle + i)
                }
            }
        }
        return arr;
    },

    getResourcesData: function (str) {
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        list = action.findElements(this.resourceList);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        resourceTitle: action.getText(this.resourceTitle + i)
                        //resourceSubtitle
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    resourceTitle: action.getText(this.resourceTitle + i)
                    //resourceSubtitle
                }
            }
        }
        return arr;
    },

    getPlaylistData: function (str) {
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        list = action.findElements(this.playlistTitle);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        playlistTitle: action.getText(this.playlistTitle + i),
                        playlistSubtitle: action.getText(this.playlistSubtitle + i)
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    playlistTitle: action.getText(this.playlistTitle + i),
                    playlistSubtitle: action.getText(this.playlistSubtitle + i)
                }
            }
        }
        return arr;
    },

    getRecentlyViewedData: function () {

    },

    clickAddBook: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.addBook_Btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " Add book button is clicked");
            let addBook = require('./addBook.page');
            res = addBook.isInitialized();
        }
        else {
            res = res + " -- Error in clicking Add book Button";
            logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    clickViewButton: function (str) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == str) {
                res = action.click(this.view_btn + i);
                if (res == true) {
                    let bookPage = require('./viewBook.page');
                    res = bookPage.isInitialized();
                    logger.logInto(stackTrace.get(), " -- View button clicked");
                }
                else {
                    res = res + " -- Error in clicking View button"
                    logger.logInto(stackTrace.get(), res, "error");
                }
                break;
            }
        }
        return res;
    },

    clickBookMenuOptions: function (str) {
        logger.logInto(stackTrace.get());
        let i, list;
        res = undefined;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == str) {
                res = action.click(this.bookEllipses + i);
                if (res == true) {
                    res = this.getBookMenuData();
                    logger.logInto(stackTrace.get(), " --Book Ellipses clicked");
                }
                else {
                    res = res + " -- Error in clicking Book Ellipses"
                    logger.logInto(stackTrace.get(), res, "error");
                }
                break;
            }
        }
        return res;
    },

    getBookMenuData: function () {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.bookMenu_viewClass);
        let obj = {
            bookMenu_viewClass: (action.getElementCount(this.bookMenu_viewClass) > 0) ? action.getText(this.bookMenu_viewClass) : null,
            bookMenu_createClass: (action.getElementCount(this.bookMenu_createClass) > 0) ? action.getText(this.bookMenu_createClass) : null,
            bookMenu_remove: (action.getElementCount(this.bookMenu_remove) > 0) ? action.getText(this.bookMenu_remove) : null,
            bookMenu_openFlipbook: (action.getElementCount(this.bookMenu_openFlipbook) > 0) ? action.getText(this.bookMenu_openFlipbook) : null,
        }
        return obj;
    },

    clickMenuViewClasses: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookMenu_viewClass);
        if (res == true) {
            let classDrawerPage = require('./classDrawer.page');
            res = classDrawerPage.isInitialized();
            logger.logInto(stackTrace.get(), " --View class clicked");
        }
        else {
            res = res + " -- Error in clicking View class";
            logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    clickMenuCreateNewClass: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookMenu_createClass);
        if (res == true) {
            var createClassPage = require('./createClass.page.js');
            res = createClassPage.isInitialized();
            logger.logInto(stackTrace.get(), " --Create class clicked");
        }
        else {
            res = res + " -- Error in clicking create class";
            logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    clickMenuRemoveBook: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookMenu_remove);
        if (res == true) {
            res = this.getRemoveBookData();
            logger.logInto(stackTrace.get(), " --Remove from My books clicked");
        }
        else {
            res = res + " -- Error in clicking Remove from My books"
            logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    getRemoveBookData: function () {
        logger.logInto(stackTrace.get());
        let obj = {
            removeBook_title: (action.getElementCount(this.removeBook_title) > 0) ? action.getText(this.removeBook_title) : null,
            removeBook_subTitle: (action.getElementCount(this.removeBook_subTitle) > 0) ? action.getText(this.removeBook_subTitle) : null,
            removeBook_cancel: (action.getElementCount(this.removeBook_cancel) > 0) ? action.getText(this.removeBook_cancel) : null,
            removeBook_remove: (action.getElementCount(this.removeBook_remove) > 0) ? action.getText(this.removeBook_remove) : null,
        }
        return obj;
    },

    clickRemoveBookDialogueBox_Cancel: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.removeBook_cancel);
        if (true == res) {
            res = this.getBooksData();
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
            res = this.getBooksData();
            logger.logInto(stackTrace.get(), " --Rmove button is clicked");
        }
        else {
            res = res + " -- Error in clicking Notification Close Button";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    clickMenuOpenFlipbook: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookMenu_openFlipbook);
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Open Flipbook button clicked");
        }
        else {
            res = res + " -- Error in clicking Open Flipbook button";
            logger.logInto(stackTrace.get(), res, "error");
        }
        return res;
    },

    selectFlipbookFromList: function (str) {
        logger.logInto(stackTrace.get());

        return res;
    },

    clickExploreResource: function (str) {
        logger.logInto(stackTrace.get());
        res = null;
        let i, list;
        list = action.findElements(this.resourceTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == str) {
                res = action.click(this.resourceList + i + "]");
                if (res == true) {
                    logger.logInto(stackTrace.get(), " -- Global Resource button clicked");
                    var browse = require('./browse.page');
                    res = browse.isInitialized();
                    // add info of selected tab in res ?? - akhil
                }
                else {
                    res = res + " -- Error in clicking Global Resource button";
                    logger.logInto(stackTrace.get(), res, "error");
                }
                break;
            }
        }
        return res;
    },

}


