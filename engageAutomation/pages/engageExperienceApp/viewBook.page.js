"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var appShell = require('./appShell.page');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    bookCover: selectorFile.css.ComproEngage.viewBook.bookCover,
    bookTitle: selectorFile.css.ComproEngage.viewBook.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.viewBook.bookSubTitle,
    viewClass: selectorFile.css.ComproEngage.viewBook.viewClass,
    openFlipbook_btn: selectorFile.css.ComproEngage.viewBook.openFlipbook_btn,
    moreOptions_btn: selectorFile.css.ComproEngage.viewBook.moreOptions_btn,
    //closeMoreOptions: selectorFile.css.ComproEngage.viewBook.closeMoreOptions, // not sure of this - akhil
    myBooks_lbl: selectorFile.css.ComproEngage.viewBook.myBooks_lbl,
    unit_lbl: selectorFile.css.ComproEngage.viewBook.unit_lbl,

    addBook_option: selectorFile.css.ComproEngage.viewBook.addBook_option,
    removeBook_option: selectorFile.css.ComproEngage.viewBook.removeBook_option,
    viewBookDetails_option: selectorFile.css.ComproEngage.viewBook.viewBookDetails_option,
    removeBookDialogCancel: selectorFile.css.ComproEngage.viewBook.removeBookDialogCancel,
    removeBookDialogRemove: selectorFile.css.ComproEngage.viewBook.removeBookDialogRemove,
    removeBook_subtitle: selectorFile.css.ComproEngage.viewBook.removeBook_subtitle,
    removeBook_title: selectorFile.css.ComproEngage.viewBook.removeBook_title,

    lastActivity_icon: selectorFile.css.ComproEngage.viewBook.lastActivity_icon,
    lastActivity_lbl: selectorFile.css.ComproEngage.viewBook.lastActivity_lbl,
    lastActivity_name: selectorFile.css.ComproEngage.viewBook.lastActivity_name,
    lastActivity_Dismiss: selectorFile.css.ComproEngage.viewBook.lastActivity_Dismiss,
    lastActivity_Continue: selectorFile.css.ComproEngage.viewBook.lastActivity_Continue,
    unitSkeleton: selectorFile.css.ComproEngage.viewBook.unitSkeleton,
    unit: selectorFile.css.ComproEngage.viewBook.unit,
    unitTitle: selectorFile.css.ComproEngage.viewBook.unitTitle,
    unitNumber: selectorFile.css.ComproEngage.viewBook.unitNumber,
    unitPage: selectorFile.css.ComproEngage.viewBook.unitPage,
    unitCoverImg: selectorFile.css.ComproEngage.viewBook.unitCoverImg,
    unitMoreOptions: selectorFile.css.ComproEngage.viewBook.unitMoreOptions,
    activityIcon: selectorFile.css.ComproEngage.viewBook.activityIcon,
    activityCount: selectorFile.css.ComproEngage.viewBook.activityCount,
    folderIcon: selectorFile.css.ComproEngage.viewBook.folderIcon,
    folderCount: selectorFile.css.ComproEngage.viewBook.folderCount,
    unitOpenFlipbook_option: selectorFile.css.ComproEngage.viewBook.unitOpenFlipbook_option,
    unitViewActivity_option: selectorFile.css.ComproEngage.viewBook.unitViewActivity_option,
    flipbookList: selectorFile.css.ComproEngage.viewBook.flipbookList,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.bookCover),
            appShell: appShell.isInitialized()
        };
        return res;
    },

    getViewBookData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            bookCover: (action.getElementCount(this.bookCover) > 0) ? action.waitForDisplayed(this.bookCover) : null,
            bookTitle: (action.getElementCount(this.bookTitle) > 0) ? action.getText(this.bookTitle) : null,
            bookSubTitle: (action.getElementCount(this.bookSubTitle) > 0) ? action.getText(this.bookSubTitle) : null,
            myBooks_lbl: (action.getElementCount(this.myBooks_lbl) > 0) ? action.getText(this.myBooks_lbl) : null,
            openFlipbook_btn: (action.getElementCount(this.openFlipbook_btn) > 0) ? action.getText(this.openFlipbook_btn) : null,
            viewClass: (action.getElementCount(this.viewClass) > 0) ? action.getText(this.viewClass) : null,
            moreOptions_btn: (action.getElementCount(this.moreOptions_btn) > 0) ? action.getText(this.moreOptions_btn) : null,
            lastActivity_lbl: (action.getElementCount(this.lastActivity_lbl) > 0) ? action.getText(this.lastActivity_lbl) : null,
            lastActivity_icon: (action.getElementCount(this.lastActivity_icon) > 0) ? action.waitForDisplayed(this.lastActivity_icon) : null,
            lastActivity_name: (action.getElementCount(this.lastActivity_name) > 0) ? action.getText(this.lastActivity_name) : null,
            lastActivity_Dismiss: (action.getElementCount(this.lastActivity_Dismiss) > 0) ? action.getText(this.lastActivity_Dismiss) : null,
            lastActivity_Continue: (action.getElementCount(this.lastActivity_Continue) > 0) ? action.getText(this.lastActivity_Continue) : null,
            component: appShell.getTabsListData(),
            unit_lbl: (action.getElementCount(this.unit_lbl) > 0) ? action.getText(this.unit_lbl) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    getUnitsData: function (str) {
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        action.waitForDisplayed(this.unitSkeleton);
        action.waitForDisplayed(this.unitSkeleton, undefined, true);
        list = action.findElements(this.unit);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        unitTitle: (action.getElementCount(this.unitTitle + i) > 0) ? action.getText(this.unitTitle + i) : null,
                        unitPage: (action.getElementCount(this.unitPage + i) > 0) ? action.getText(this.unitPage + i) : null,
                        unitNumber: (action.getElementCount(this.unitNumber + i) > 0) ? action.getText(this.unitNumber + i) : null,
                        unitCoverImg: (action.getElementCount(this.unitCoverImg + i) > 0) ? action.waitForDisplayed(this.unitCoverImg + i) : null,
                        activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.waitForDisplayed(this.activityIcon + i) : null,
                        activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount + i) : null,
                        folderIcon: (action.getElementCount(this.folderIcon) > 0) ? action.waitForDisplayed(this.folderIcon + i) : null,
                        folderCount: (action.getElementCount(this.folderCount) > 0) ? action.getText(this.folderCount + i) : null
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    unitTitle: (action.getElementCount(this.unitTitle + i) > 0) ? action.getText(this.unitTitle + i) : null,
                    unitPage: (action.getElementCount(this.unitPage + i) > 0) ? action.getText(this.unitPage + i) : null,
                    unitNumber: (action.getElementCount(this.unitNumber + i) > 0) ? action.getText(this.unitNumber + i) : null,
                    unitCoverImg: (action.getElementCount(this.unitCoverImg + i) > 0) ? action.waitForDisplayed(this.unitCoverImg + i) : null,
                    activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.waitForDisplayed(this.activityIcon + i) : null,
                    activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount + i) : null,
                    folderIcon: (action.getElementCount(this.folderIcon) > 0) ? action.waitForDisplayed(this.folderIcon + i) : null,
                    folderCount: (action.getElementCount(this.folderCount) > 0) ? action.getText(this.folderCount + i) : null
                }
            }
        }
        return arr;
    },

    clickOpenFlipbook: function () { //to be reviewed for multiple flipbook scenario - Akhil
        logger.logInto(stackTrace.get())
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            if (action.getElementCount(this.flipbookList) > 0) { //in case of multiple flipbooks
                res = this.getListOfFlipbooks();
            }
            else {
                //res = require('./flipbook.page.js') //TBD when flipbook page object is added.
                logger.logInto(stackTrace.get(), " --Open Flipbook Button clicked");
            }
        }
        else
            logger.logInto(stackTrace.get(), " --Open Flipbook Button NOT clicked", "error");
        return res;
    },

    getListOfFlipbooks: function () {
        logger.logInto(stackTrace.get())
        var arr = [];
        list = action.findElements(this.flipbookList);
        for (i = 0; i < list.length; i++) {
            arr[i] = action.getText(this.flipbookList + i);
        }
        logger.logInto(stackTrace.get(), arr);
        return arr;
    },

    clickViewClasses: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.viewClass);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Classes Button clicked");
            res = require('./classDrawer.page').isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --View Classes Button NOT clicked", "error");
        return res;
    },

    clickAddBook: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.addBook_option);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Add Book Button clicked");
            res = action.waitForDisplayed(this.myBooks_lbl);
        } else
            logger.logInto(stackTrace.get(), " --Add Book Button NOT clicked", "error");
        return res;
    },

    clickUnit: function (str) {
        logger.logInto(stackTrace.get());
        res = false;
        let i, list;
        list = action.findElements(this.unitTitle);
        for (i = 0; i < list.length; i++) {
            if (str.includes(action.getText(list[i]))) {
                res = action.click(list[i]);
                if (res == true) {
                    let unitDetailPage = require('./viewUnit.page');
                    res = unitDetailPage.isInitialized();
                    logger.logInto(stackTrace.get(), " -- Unit clicked");
                }
                else {
                    res = res + " -- Error in clicking Unit";
                    logger.logInto(stackTrace.get(), res, "error");
                }
                break;
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    getMoreOptionsButtonData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            addBook: (action.getElementCount(this.addBook_option) > 0) ? action.getText(this.addBook_option) : null,
            removeBook: (action.getElementCount(this.removeBook_option) > 0) ? action.getText(this.removeBook_option) : null,
            viewBookDetails: (action.getElementCount(this.viewBookDetails_option) > 0) ? action.getText(this.viewBookDetails_option) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    clickMoreOptionsButton: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.moreOptions_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Button clicked");
            res = this.getMoreOptionsButtonData();
        } else
            logger.logInto(stackTrace.get(), " --More Options Button NOT clicked", "error");
        return res;
    },

    /*closeMoreOptionsButton: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.closeMoreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Closed");
            res = action.waitForDisplayed(this.viewBookDetails_option, 30000, true);
        } else
            logger.logInto(stackTrace.get(), " --More Options NOT Closed", "error");
        return res;
    },*/

    getRemoveBookPopUpData: function () {
        logger.logInto(stackTrace.get());
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
        logger.logInto(stackTrace.get());
        //this.clickMoreOptionsButton();
        res = action.click(this.removeBook_option);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Remove Book Button clicked");
            res = this.getRemoveBookPopUpData();
        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    clickCancel_RemoveBookDialog: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.removeBookDialogCancel);
        if (res == true) {
            res = action.waitForDisplayed(this.myBooks_lbl);
            logger.logInto(stackTrace.get(), " --Cancel Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Cancel Button NOT clicked", "error");
        return res;
    },

    clickRemove_RemoveBookDialog: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.removeBookDialogRemove);
        if (res == true) {
            res = action.waitForDisplayed(this.removeBookDialogRemove, undefined, true)
            if (res == true) {
                res = action.waitForDisplayed(this.myBooks_lbl, undefined, true);
                logger.logInto(stackTrace.get(), " --Remove Book Button clicked");
            }
        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    // clickViewBookDetails: function () {
    //     logger.logInto(stackTrace.get())
    //     res = action.click(this.viewBookDetails_option);
    //     if (res == true) {
    //         logger.logInto(stackTrace.get(), " --View Book Details Button clicked");
    //         // add return values - akhil
    //     } else
    //         logger.logInto(stackTrace.get(), " --View Book Details Button NOT clicked", "error");
    //     return res;
    // },

    clickUnitMoreOptions: function (unitIndex) {
        logger.logInto(stackTrace.get());
        res = action.click(this.unitMoreOptions + unitIndex);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Unit More Options Clicked");
            res = this.get_UnitMoreOptionsButton_Data();
        } else
            logger.logInto(stackTrace.get(), " --Unit More Options NOT clicked", "error");
        return res;
    },

    get_UnitMoreOptionsButton_Data: function () {
        logger.logInto(stackTrace.get());
        obj = {
            openInFlipbook: (action.getElementCount(this.unitOpenFlipbook_option) > 0) ? action.getText(this.unitOpenFlipbook_option) : null,
            viewActivity: (action.getElementCount(this.unitViewActivity_option) > 0) ? action.getText(this.unitViewActivity_option) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    /*clickUnitOpeninFlipbook: function () {
        logger.logInto(stackTrace.get());
        //this.clickUnitMoreOptions(unitIndex);
        res = action.click(this.unitOpenFlipbook_option);
        if (res == true) {
            logger.logInto(stackTrace.get(), "--Open FlipBook in More Options Clicked");
            //res = require('./flipbook.page.js') //TBD when flipbook page object is added.
        }
        else
            logger.logInto(stackTrace.get(), "--Open FlipBook in More Options Not Clicked", "error");
        return res;
    },*/

    /*clickUnitViewActivities: function (chapterName) {
        logger.logInto(stackTrace.get());
        res = this.clickUnitMoreOptions(chapterName);
        if (res >= 0) {
            res = action.click(this.unitViewActivity_option)
            logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "View Activity in More Options Not Clicked", "error");

        return res;
    },*/

    clickOnContinue: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.lastActivity_Continue);
        if (res == true) {
            //let activityPlayerPage = require('./activityPlayer.page');
            //res = activityPlayerPage.isInitialized();
            // to be activated when activity player is updated - Akhil
            logger.logInto(stackTrace.get(), " --Continue Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Continue Button NOT clicked", "error");
        return res;
    },

    clickOnDismiss: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.lastActivity_Dismiss);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Dismiss Button clicked");
            res = action.waitForDisplayed(this.lastActivity_icon, undefined, true)
        } else
            logger.logInto(stackTrace.get(), " --Dismiss Button NOT clicked", "error");
        return res;
    }
}