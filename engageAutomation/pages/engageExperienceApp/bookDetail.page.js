"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var unitDetailPage = require('../../pages/engageExperienceApp/unitDetail.page.js');
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
    removeBookDialogRemove: selectorFile.css.ComproEngage.bookView.removeBookDialogRemove,
    removeBook_subtitle: selectorFile.css.ComproEngage.bookView.removeBook_subtitle,
    removeBook_title: selectorFile.css.ComproEngage.bookView.removeBook_title,
    viewBookDetails_btn: selectorFile.css.ComproEngage.bookView.viewBookDetails_btn,
    addBook_btn: selectorFile.css.ComproEngage.bookView.addBook_btn,
    myBooks_lbl: selectorFile.css.ComproEngage.bookView.myBooks_lbl,
    component: selectorFile.css.ComproEngage.bookView.component,
    openFlipbook_btn: selectorFile.css.ComproEngage.bookView.openFlipbook_btn,
    lastActivityIcon: selectorFile.css.ComproEngage.bookView.lastActivityIcon,
    lastActivity_lbl: selectorFile.css.ComproEngage.bookView.lastActivity_lbl,
    lastActivity_name: selectorFile.css.ComproEngage.bookView.lastActivity_name,
    lastActivity_Dismiss: selectorFile.css.ComproEngage.bookView.lastActivity_Dismiss,
    lastActivity_Continue: selectorFile.css.ComproEngage.bookView.lastActivity_Continue,
    unit_lbl: selectorFile.css.ComproEngage.bookView.unit,
    chapter: selectorFile.css.ComproEngage.bookView.chapter,
    chapterTitle: selectorFile.css.ComproEngage.bookView.chapterTitle,
    chapterNumber: selectorFile.css.ComproEngage.bookView.chapterNumber,
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
    flipbookProduct: selectorFile.css.ComproEngage.bookView.flipbookProduct,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.bookCover);
        res = this.getBookViewPageData();
        return res;
    },

    getBookViewPageData: function () {
        obj = {
            bookCover: (action.getElementCount(this.bookCover) > 0) ? action.waitForDisplayed(this.bookCover) : null,
            bookTitle: (action.getElementCount(this.bookTitle) > 0) ? action.getText(this.bookTitle) : null,
            bookSubTitle: (action.getElementCount(this.bookSubTitle) > 0) ? action.getText(this.bookSubTitle) : null,
            viewClass: (action.getElementCount(this.viewClass) > 0) ? action.getText(this.viewClass) : null,
            moreOptions: (action.getElementCount(this.moreOptions) > 0) ? action.waitForDisplayed(this.moreOptions) : null,
            //addBook_btn: (action.getElementCount(this.addBook_btn) > 0) ? action.getText(this.addBook_btn) : null,
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

    getComponentListData: function () {
        let i, list;
        let componentArr = [];
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            componentArr[i] = action.getText(list[i])
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    getChapterListData: function () {
        logger.logInto(stackTrace.get())
        let i, list;
        let componentArr = [];
        action.waitForDisplayed(this.chapter);
        list = action.findElements(this.chapter);
        for (i = 0; i < list.length; i++) {
            //console.log(this.activityCount + i)
            componentArr[i] = {
                chapterTitle: (action.getElementCount(this.chapterTitle + i) > 0) ? action.getText(this.chapterTitle + i) : null,
                chapterPage: (action.getElementCount(this.chapterPage + i) > 0) ? action.getText(this.chapterPage + i) : null,
                chapterNumber: (action.getElementCount(this.chapterNumber + i) > 0) ? action.getText(this.chapterNumber + i) : null,
                chapterCoverImg: (action.getElementCount(this.chapterCoverImg + i) > 0) ? action.waitForDisplayed(this.chapterCoverImg + i) : null,
                activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.waitForDisplayed(this.activityIcon + i) : null,
                activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount + i) : null,
                folderIcon: (action.getElementCount(this.folderIcon) > 0) ? action.waitForDisplayed(this.folderIcon + i) : null,
                folderCount: (action.getElementCount(this.folderCount) > 0) ? action.getText(this.folderCount + i) : null
            }
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    clickViewClasses: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.viewClass);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Classes Button clicked");
            res = require('./classDrawer.page.js').isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --View Classes Button NOT clicked", "error");
        return res;
    },

    clickAddBook: function () {
        logger.logInto(stackTrace.get())
        this.clickMoreOptionsButton();
        // if (res == true) {
        res = action.click(this.addBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Add Book Button clicked");
            res = this.getBookViewPageData()
        }
        //} 
        else
            logger.logInto(stackTrace.get(), " --Add Book Button NOT clicked", "error");
        return res;
    },

    clickOpenFlipbook: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            if (action.getElementCount(this.flipbookProduct) > 0) { //in case of multiple flipbooks
                res = this.getListOfFlipbooks()
            } else {
                //res = require('./flipbook.page.js') //TBD when flipbook page object is added.
                res = action.waitForDisplayed(this.breadcrumbFlipbook)
                logger.logInto(stackTrace.get(), " --Open Flipbook Button clicked");

            }
        } else
            logger.logInto(stackTrace.get(), " --Open Flipbook Button NOT clicked", "error");
        return res;
    },

    clickComponent: function (componentName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == componentName) {
                res = action.click(list[i]);
                if (res == true) {
                    logger.logInto(stackTrace.get(), " --Component clicked");
                    res = this.getChapterListData();
                } else
                    logger.logInto(stackTrace.get(), " --Component NOT clicked", "error");
                break;
            }
            res = -1;
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    clickUnit: function (unitName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.chapterTitle);
        for (i = 0; i < list.length; i++) {
            if (unitName.includes(action.getText(list[i]))) {
                res = action.click(list[i]);
                if (res == true) {
                    logger.logInto(stackTrace.get(), " --Unit clicked");
                    res = unitDetailPage.isInitialized();
                } else
                    logger.logInto(stackTrace.get(), " --Unit NOT clicked", "error");
                break;
            }
            res = false;
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    clickMoreOptionsButton: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.moreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Button clicked");
            res = this.getMoreOptionsButtonData();
        } else
            logger.logInto(stackTrace.get(), " --More Options Button NOT clicked", "error");
        return res;
    },

    closeMoreOptionsButton: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.closeMoreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Closed");
            res = action.waitForDisplayed(this.viewBookDetails_btn, 30000, true);
        } else
            logger.logInto(stackTrace.get(), " --More Options NOT Closed", "error");
        return res;
    },

    getListOfFlipbooks: function () {
        var obj = []
        list = action.findElements(this.flipbookProduct);
        for (i = 0; i < list.length; i++) {
            obj[i] = action.getText(this.flipbookProduct + i);
        }
        logger.logInto(stackTrace.get(), res);
        return obj;
    },

    getMoreOptionsButtonData: function () {
        obj = {
            addBook_btn: (action.getElementCount(this.addBook_btn) > 0) ? action.getText(this.addBook_btn) : null,
            removeBook: (action.getElementCount(this.removeBook_btn) > 0) ? action.getText(this.removeBook_btn) : null,
            viewBookDetails: (action.getElementCount(this.viewBookDetails_btn) > 0) ? action.getText(this.viewBookDetails_btn) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    getRemoveBookPopUpData: function () {
        obj = {
            removeBook_title: (action.getElementCount(this.removeBook_title) > 0) ? action.getText(this.removeBook_title) : null,
            removeBook_subtitle: (action.getElementCount(this.removeBook_subtitle) > 0) ? action.getText(this.removeBook_subtitle) : null,
            removeBookDialogCancel: (action.getElementCount(this.removeBookDialogCancel) > 0) ? action.getText(this.removeBookDialogCancel) : null,
            removeBookDialogRemove: (action.getElementCount(this.removeBookDialogRemove) > 0) ? action.getText(this.removeBookDialogRemove) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    clickRemoveBook: function () {
        logger.logInto(stackTrace.get())
        this.clickMoreOptionsButton();
        res = action.click(this.removeBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Remove Book Button clicked");
            res = this.getRemoveBookPopUpData();
        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    clickCancel_RemoveBookDialog: function () {
        logger.logInto(stackTrace.get())
        action.waitForDisplayed(this.removeBook_Dialog)
        res = action.click(this.removeBookDialogCancel);
        if (res == true) {
            action.waitForDisplayed(this.bookCover)
            res = this.getBookViewPageData();
            logger.logInto(stackTrace.get(), " --Cancel Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Cancel Button NOT clicked", "error");
        return res;
    },

    clickRemove_RemoveBookDialog: function () {
        logger.logInto(stackTrace.get())
        action.waitForDisplayed(this.removeBook_Dialog)
        res = action.click(this.removeBookDialogRemove);
        if (res == true) {
            res = action.waitForDisplayed(this.removeBook_Dialog, 30000, true)
            if (res == true) {
                res = this.getBookViewPageData();
                logger.logInto(stackTrace.get(), " --Remove Book Button clicked");
            }
        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    // clickViewBookDetails: function () {
    //     logger.logInto(stackTrace.get())
    //     res = action.click(this.viewBookDetails_btn);
    //     if (res == true) {
    //         logger.logInto(stackTrace.get(), " --View Book Details Button clicked");
    //         // add return values - akhil
    //     } else
    //         logger.logInto(stackTrace.get(), " --View Book Details Button NOT clicked", "error");
    //     return res;
    // },


    clickUnitMoreOptions: function (unitIndex) {
        logger.logInto(stackTrace.get());
        res = action.click(this.chapterMoreOptions + unitIndex)
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Unit More Options Clicked");
            res = this.get_UnitMoreOptionsButton_Data(unitIndex)
        } else
            logger.logInto(stackTrace.get(), " --Unit More Options NOT clicked", "error");
        return res;

    },

    get_UnitMoreOptionsButton_Data: function (unitIndex) {
        obj = {
            openInFlipbook: (action.getElementCount(this.unitOpenFlipbook_btn + unitIndex) > 0) ? action.getText(this.unitOpenFlipbook_btn + unitIndex) : null,
            viewActivity: (action.getElementCount(this.unitViewActivity_btn + unitIndex) > 0) ? action.getText(this.unitViewActivity_btn + unitIndex) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },


    clickUnitOpeninFlipbook: function (unitIndex) {
        this.clickUnitMoreOptions(unitIndex)
        res = action.click(this.unitOpenFlipbook_btn + unitIndex)
        if (res == true) {
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
            res = action.waitForDisplayed(this.breadcrumbFlipbook)
        }
        else
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");

        return res;
    },

    // clickUnitViewActivities: function (chapterName) { //this function is not required, please remove - akhil
    //     res = this.clickUnitMoreOptions(chapterName)
    //     if (res >= 0) {
    //         res = action.click(this.unitViewActivity_btn)
    //         logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
    //     } else
    //         logger.logInto(stackTrace.get(), "View Activity in More Options Not Clicked", "error");

    //     return res;
    // },

    clickOnContinue: function () {
        res = action.click(this.lastActivity_Continue)
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Continue Button clicked");
            let activityPlayerPage = require('./activityPlayer.page.js');
            res = activityPlayerPage.isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --Continue Button NOT clicked", "error");
        return res;
    },

    clickOnDismiss: function () {
        res = action.click(this.lastActivity_Dismiss)
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Dismiss Button clicked");
            res = action.waitForDisplayed(this.lastActivityIcon, 30000, true)
        } else
            logger.logInto(stackTrace.get(), " --Dismiss Button NOT clicked", "error");
        return res;
    }
}