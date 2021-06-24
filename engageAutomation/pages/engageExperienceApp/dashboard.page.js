"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

    pageTitle: selectorFile.css.ComproEngage.dashboardPage.pageTitle,
    myBooksLbl: selectorFile.css.ComproEngage.myBooksLbl,
    addMoreBooksBtn: selectorFile.css.ComproEngage.dashboardPage.addMoreBooksBtn,
    bookList: selectorFile.css.ComproEngage.dashboardPage.bookList,
    bookImg: selectorFile.css.ComproEngage.dashboardPage.bookImg,
    viewBookBtn: selectorFile.css.ComproEngage.dashboardPage.viewBookBtn,
    moreOptionsBtn: selectorFile.css.ComproEngage.dashboardPage.moreOptionsBtn,
    myPlaylistLbl: selectorFile.css.ComproEngage.dashboardPage.myPlaylistLbl,
    createPlaylistBtn: selectorFile.css.ComproEngage.dashboardPage.createPlaylistBtn,
    exploreLbl: selectorFile.css.ComproEngage.dashboardPage.exploreLbl,
    browseAllBtn: selectorFile.css.ComproEngage.dashboardPage.browseAllBtn,
    materialsTab: selectorFile.css.ComproEngage.dashboardPage.materialTab,
    resourceList: selectorFile.css.ComproEngage.dashboardPage.resourceList,
    resourceIcon: selectorFile.css.ComproEngage.dashboardPage.resourceIcon,
    resourceTitle: selectorFile.css.ComproEngage.dashboardPage.resourceTitle,
    resourceSubtitle: selectorFile.css.ComproEngage.dashboardPage.resourceSubtitle,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle);
        res = this.get_DashboardPage_Data();
        res.pageStatus = pageStatus;
        return res;
    },

    get_DashboardPage_Data: function () {
        logger.logInto(stackTrace.get());
        let obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            //myBooksLbl: (action.getElementCount(this.myBooksLbl) > 0) ? action.getText(this.myBooksLbl) : null,
            //addMoreBooksBtn: (action.getElementCount(this.addMoreBooksBtn) > 0) ? action.getText(this.addMoreBooksBtn) : null,
            bookList: [],
            //viewBookBtn: (action.getElementCount(this.viewBookBtn) > 0) ? action.getText(this.viewBookBtn) : null,
            //myPlaylistLbl: (action.getElementCount(this.myPlaylistLbl) > 0) ? action.getText(this.myPlaylistLbl) : null,
            //createPlaylistBtn: (action.getElementCount(this.createPlaylistBtn) > 0) ? action.getText(this.createPlaylistBtn) : null,
            exploreLbl: (action.getElementCount(this.exploreLbl) > 0) ? action.getText(this.exploreLbl) : null,
            browseAllBtn: (action.getElementCount(this.browseAllBtn) > 0) ? action.getText(this.browseAllBtn) : null,
            //materialsTab: (action.getElementCount(this.materialsTab) > 0) ? action.getText(this.materialsTab) : null,
            resourceList: []
        }

        /*let books, i;
        books = action.findElements(this.bookList);
        for (i = 0; i < books.length; i++) {
            obj.bookList[i] = action.getText(books[i]);
        }

        let resources, icons, title, subtitle;
        resources = action.findElements(this.resourceList);
        icons = action.findElements(this.resourceIcon);
        title = action.findElements(this.resourceTitle);
        subtitle = action.findElements(this.resourceSubtitle);
        for (i = 0; i < resources.length; i++) {
            obj.resourceList[i] = {
                resourceTitle: action.getText(title[i]),
                resourceIcon: action.isDisplayed(icons[i]),
                resourceSubtitle: action.getText(subtitle[i])
            }
        }*/
        return obj;
    }


}

