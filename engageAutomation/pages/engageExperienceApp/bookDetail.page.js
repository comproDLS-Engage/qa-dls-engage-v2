"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    bookCover: selectorFile.css.ComproEngage.bookView.bookCover,
    bookTitle: selectorFile.css.ComproEngage.bookView.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.bookView.bookSubTitle,
    viewClass: selectorFile.css.ComproEngage.bookView.viewClass,
    closeClassDrawer: selectorFile.css.ComproEngage.bookView.closeClassDrawer,
    moreOptions: selectorFile.css.ComproEngage.bookView.moreOptions,
    closeMoreOptions: selectorFile.css.ComproEngage.bookView.closeMoreOptions,
    removeBook_btn: selectorFile.css.ComproEngage.bookView.removeBook_btn,
    removeBook_Dialog: selectorFile.css.ComproEngage.bookView.removeBook_Dialog,
    removeBookDialogCancel: selectorFile.css.ComproEngage.bookView.removeBookDialogCancel,
    viewBookDetails_btn: selectorFile.css.ComproEngage.bookView.viewBookDetails_btn,
    addBook_btn: selectorFile.css.ComproEngage.bookView.addBook_btn,
    myBooks_lbl: selectorFile.css.ComproEngage.bookView.myBooks_lbl,
    component: selectorFile.css.ComproEngage.bookView.component,
    openFlipbook_btn: selectorFile.css.ComproEngage.bookView.openFlipbook_btn,
    lastActivityIcon : selectorFile.css.ComproEngage.bookView.lastActivityIcon,
    lastActivity_lbl: selectorFile.css.ComproEngage.bookView.lastActivity_lbl,
    lastActivity_name: selectorFile.css.ComproEngage.bookView.lastActivity_name,
    lastActivity_Dismiss: selectorFile.css.ComproEngage.bookView.lastActivity_Dismiss,
    lastActivity_Continue: selectorFile.css.ComproEngage.bookView.lastActivity_Continue,
    unit_lbl: selectorFile.css.ComproEngage.bookView.unit,
    chapter: selectorFile.css.ComproEngage.bookView.chapter,
    chapterTitle: selectorFile.css.ComproEngage.bookView.chapterTitle,
    chapterPage: selectorFile.css.ComproEngage.bookView.chapterPage,
    chapterCoverImg: selectorFile.css.ComproEngage.bookView.chapterCoverImg,
    chapterMoreOptions: selectorFile.css.ComproEngage.bookView.chapterMoreOptions,
    activityIcon: selectorFile.css.ComproEngage.bookView.activityIcon,
    activityCount: selectorFile.css.ComproEngage.bookView.activityCount,
    folderIcon: selectorFile.css.ComproEngage.bookView.folderIcon, 
    folderCount: selectorFile.css.ComproEngage.bookView.folderCount,
    unitOpenFlipbook_btn: selectorFile.css.ComproEngage.bookView.unitOpenInFlipbook_btn,
    unitViewActivity_btn: selectorFile.css.ComproEngage.bookView.unitViewActivity_btn,
    breadcrumbFlipbook: selectorFile.css.ComproEngage.bookView.breadcrumbFlipbook,

    isInitialized: function() {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.bookCover);
        res = this.getBookViewPageData();
        return res;
    },

    getBookViewPageData: function() {
        obj = {
            bookCover: (action.getElementCount(this.bookCover) > 0) ? action.waitForDisplayed(this.bookCover) : null,
            bookTitle: (action.getElementCount(this.bookTitle) > 0) ? action.getText(this.bookTitle) : null,
            bookSubTitle: (action.getElementCount(this.bookSubTitle) > 0) ? action.getText(this.bookSubTitle) : null,
            viewClass: (action.getElementCount(this.viewClass) > 0) ? action.getText(this.viewClass) : null,
            moreOptions: (action.getElementCount(this.moreOptions) > 0) ? action.waitForDisplayed(this.moreOptions) : null,
            addBook_btn: (action.getElementCount(this.addBook_btn) > 0) ? action.getText(this.addBook_btn) : null,
            myBooks_lbl: (action.getElementCount(this.myBooks_lbl) > 0) ? action.getText(this.myBooks_lbl) : null,
            openFlipbook_btn: (action.getElementCount(this.openFlipbook_btn) > 0) ? action.getText(this.openFlipbook_btn) : null,
            lastActivity_lbl: (action.getElementCount(this.lastActivity_lbl) > 0) ? action.getText(this.lastActivity_lbl) : null,
            lastActivity_name: (action.getElementCount(this.lastActivity_name) > 0) ? action.getText(this.lastActivity_name) : null,
            lastActivity_Dismiss: (action.getElementCount(this.lastActivity_Dismiss) > 0) ? action.getText(this.lastActivity_Dismiss) : null,
            lastActivityIcon: (action.getElementCount(this.lastActivityIcon) > 0) ? action.waitForDisplayed(this.lastActivityIcon) : null,
            lastActivity_Continue: (action.getElementCount(this.lastActivity_Continue) > 0) ? action.getText(this.lastActivity_Continue) : null,
            componentList: this.getComponentListData(),
            unit_lbl: (action.getElementCount(this.unit_lbl) > 0) ? action.getText(this.unit_lbl) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    getComponentListData: function() {
        let i, list;
        let componentArr = [];
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            componentArr[i] = action.getText(list[i])
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    getChapterListData: function() {
        logger.logInto(stackTrace.get())
        // this.clickComponent(componentName);
        let i, list;
        let componentArr = [];
        action.waitForDisplayed(this.chapter);
        list = action.findElements(this.chapter);
        for (i = 0; i < list.length; i++) {
            let obj;
            console.log(this.activityCount +i)
            obj = {
                chapterTitle: action.getText(this.chapterTitle + i),
                chapterPage: action.getText(this.chapterPage + i),
                chapterCoverImg: action.waitForDisplayed(this.chapterCoverImg + i),
                activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.waitForDisplayed(this.activityIcon +i) : null,
                activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount + i) : null,
                folderIcon: (action.getElementCount(this.folderIcon) > 0) ? action.waitForDisplayed(this.folderIcon +i) : null,
                folderCount: (action.getElementCount(this.folderCount) > 0) ? action.getText(this.folderCount + i) : null
            }
            componentArr[i] = obj;
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    clickViewClasses: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.viewClass);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Classes Button clicked");
            res = require('./classDrawer.page.js').isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --View Classes Button NOT clicked", "error");
        return res;
    },

    closeClassListMenu: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.closeClassDrawer);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Class List Menu Close clicked");
        } else
            logger.logInto(stackTrace.get(), " --Class List Menu Close NOT clicked", "error");
        return res;

    },

    clickAddBook: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.addBook_btn);
        if (res == true) {
            //return what change happens after clicking this button - akhil
            logger.logInto(stackTrace.get(), " --Add Book Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Add Book Button NOT clicked", "error");
        return res;
    },

    clickOpenFlipbook: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            //return what change happens after clicking this button - akhil
            //dummy flipbook page object added - akanksha
            //res = require('./flipbook.page.js')
            res = action.waitForDisplayed(this.breadcrumbFlipbook)
            
            logger.logInto(stackTrace.get(), " --Open Flipbook Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Open Flipbook Button NOT clicked", "error");
        return res;
    },

    clickOnBreadcrumb: function(){
        res = action.click(this.breadcrumbFlipbook)
        if (res == true) {
            res = this.getBookViewPageData();
            logger.logInto(stackTrace.get(), " --Flipbook Breadcrumb Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Flipbook Breadcrumb Button NOT clicked", "error");
        return res;

    },

    clickComponent: function(componentName) { 
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == componentName) {
                action.click(list[i]);
                res = i;
                break;
            }
            res = false;
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    clickUnit: function(unitName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.chapterTitle);
        for (i = 0; i < list.length; i++) {
            
            console.log("clickUnit-"+action.getText(list[i]))

            if (unitName.includes(action.getText(list[i]))) {
                res = action.click(list[i]);
                break;
            }
            res = false;
        }

        logger.logInto(stackTrace.get(), res);
        return res;
    },

    clickMoreOptionsButton: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.moreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --More Options Button NOT clicked", "error");
        return res;
    },

    closeMoreOptionsButton: function(){
        logger.logInto(stackTrace.get())
        res = action.click(this.closeMoreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Closed");
        } else
            logger.logInto(stackTrace.get(), " --More Options NOT Closed", "error");
        return res;
    },

    getMoreOptionsButtonData: function() {
        obj = {
            removeBook: (action.getElementCount(this.removeBook_btn) > 0) ? action.getText(this.removeBook_btn) : null,
            viewBookDetails: (action.getElementCount(this.viewBookDetails_btn) > 0) ? action.getText(this.viewBookDetails_btn) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;

    },

    clickRemoveBook: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.removeBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Remove Book Button clicked");

        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    cancelRemoveBookDialog: function() {
        logger.logInto(stackTrace.get())
        action.waitForDisplayed(this.removeBook_Dialog)
        res = action.click(this.removeBookDialogCancel);
        if (res == true) {
            action.waitForDisplayed(this.bookCover)
            logger.logInto(stackTrace.get(), " --Remove Book Button clicked");

        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;

    },

    clickViewBookDetails: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.viewBookDetails_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Book Details Button clicked");

        } else
            logger.logInto(stackTrace.get(), " --View Book Details Button NOT clicked", "error");
        return res;
    },

    clickUnitMoreOptions: function(unitName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.chapterTitle);
        for (i = 0; i < list.length; i++) {
            var chapterName = action.getText(list[i]).trim()
            if (unitName.includes(chapterName)) {
                action.click(this.chapterMoreOptions + i);
                res = i;
                break;
            }
            res = -1;
        }

        logger.logInto(stackTrace.get(), res);
        return res;

    },

    clickUnitOpeninFlipbook: function(chapterName) {
        res = this.clickUnitMoreOptions(chapterName)
        if (res >= 0) {
            res = action.click(this.unitOpenFlipbook_btn + res)
            //tbd- add flipbook page object
            res = action.waitForDisplayed(this.breadcrumbFlipbook)
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");

        return res;


    },

    clickUnitViewActivities: function(chapterName) {
        res = this.clickUnitMoreOptions(chapterName)
        if (res >= 0) {
            res = action.click(this.unitViewActivity_btn)
            logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "View Activity in More Options Not Clicked", "error");

        return res;
    }
}