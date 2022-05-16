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

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.bookCover),
            appShell: await appShell.isInitialized()
        };
        return res;
    },

    getViewBookData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            bookCover: ((await action.getElementCount(this.bookCover)) > 0) ? await action.waitForDisplayed(this.bookCover) : null,
            bookTitle: ((await action.getElementCount(this.bookTitle)) > 0) ? await action.getText(this.bookTitle) : null,
            bookSubTitle: ((await action.getElementCount(this.bookSubTitle)) > 0) ? await action.getText(this.bookSubTitle) : null,
            myBooks_lbl: ((await action.getElementCount(this.myBooks_lbl)) > 0) ? await action.getText(this.myBooks_lbl) : null,
            openFlipbook_btn: ((await action.getElementCount(this.openFlipbook_btn)) > 0) ? await action.getText(this.openFlipbook_btn) : null,
            viewClass: ((await action.getElementCount(this.viewClass)) > 0) ? await action.getText(this.viewClass) : null,
            moreOptions_btn: ((await action.getElementCount(this.moreOptions_btn)) > 0) ? await action.getText(this.moreOptions_btn) : null,
            lastActivity_lbl: ((await action.getElementCount(this.lastActivity_lbl)) > 0) ? await action.getText(this.lastActivity_lbl) : null,
            lastActivity_icon: ((await action.getElementCount(this.lastActivity_icon)) > 0) ? await action.waitForDisplayed(this.lastActivity_icon) : null,
            lastActivity_name: ((await action.getElementCount(this.lastActivity_name)) > 0) ? await action.getText(this.lastActivity_name) : null,
            lastActivity_Dismiss: ((await action.getElementCount(this.lastActivity_Dismiss)) > 0) ? await action.getText(this.lastActivity_Dismiss) : null,
            lastActivity_Continue: ((await action.getElementCount(this.lastActivity_Continue)) > 0) ? await action.getText(this.lastActivity_Continue) : null,
            component: await appShell.getTabsListData(),
            unit_lbl: ((await action.getElementCount(this.unit_lbl)) > 0) ? await action.getText(this.unit_lbl) : null
        }
        await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
        return obj;
    },

    getUnitsData: async function (str) {
        await logger.logInto(await stackTrace.get());
        let list, i, arr = [];
        await action.waitForDisplayed(this.unitSkeleton);
        await action.waitForDisplayed(this.unitSkeleton, undefined, true);
        list = await action.findElements(this.unit);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if ((await action.getText(list[i])) == str) {
                    arr[0] = {
                        unitTitle: ((await action.getElementCount(this.unitTitle + i)) > 0) ? await action.getText(this.unitTitle + i) : null,
                        unitPage: ((await action.getElementCount(this.unitPage + i)) > 0) ? await action.getText(this.unitPage + i) : null,
                        unitNumber: ((await action.getElementCount(this.unitNumber + i)) > 0) ? await action.getText(this.unitNumber + i) : null,
                        unitCoverImg: ((await action.getElementCount(this.unitCoverImg + i)) > 0) ? await action.waitForDisplayed(this.unitCoverImg + i) : null,
                        activityIcon: ((await action.getElementCount(this.activityIcon)) > 0) ? await action.waitForDisplayed(this.activityIcon + i) : null,
                        activityCount: ((await action.getElementCount(this.activityCount)) > 0) ? await action.getText(this.activityCount + i) : null,
                        folderIcon: ((await action.getElementCount(this.folderIcon)) > 0) ? await action.waitForDisplayed(this.folderIcon + i) : null,
                        folderCount: ((await action.getElementCount(this.folderCount)) > 0) ? await action.getText(this.folderCount + i) : null
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    unitTitle: ((await action.getElementCount(this.unitTitle + i)) > 0) ? await action.getText(this.unitTitle + i) : null,
                    unitPage: ((await action.getElementCount(this.unitPage + i)) > 0) ? await action.getText(this.unitPage + i) : null,
                    unitNumber: ((await action.getElementCount(this.unitNumber + i)) > 0) ? await action.getText(this.unitNumber + i) : null,
                    unitCoverImg: ((await action.getElementCount(this.unitCoverImg + i)) > 0) ? await action.waitForDisplayed(this.unitCoverImg + i) : null,
                    activityIcon: ((await action.getElementCount(this.activityIcon)) > 0) ? await action.waitForDisplayed(this.activityIcon + i) : null,
                    activityCount: ((await action.getElementCount(this.activityCount)) > 0) ? await action.getText(this.activityCount + i) : null,
                    folderIcon: ((await action.getElementCount(this.folderIcon)) > 0) ? await action.waitForDisplayed(this.folderIcon + i) : null,
                    folderCount: ((await action.getElementCount(this.folderCount)) > 0) ? await action.getText(this.folderCount + i) : null
                }
            }
        }
        return arr;
    },

    clickOpenFlipbook: async function () { //to be reviewed for multiple flipbook scenario - Akhil
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.openFlipbook_btn);
        if (res == true) {
            if ((await action.getElementCount(this.flipbookList)) > 0) { //in case of multiple flipbooks
                res = await this.getListOfFlipbooks();
            }
            else {
                //res = require('./flipbook.page.js') //TBD when flipbook page object is added.
                await logger.logInto(await stackTrace.get(), " --Open Flipbook Button clicked");
            }
        }
        else
            await logger.logInto(await stackTrace.get(), " --Open Flipbook Button NOT clicked", "error");
        return res;
    },

    getListOfFlipbooks: async function () {
        await logger.logInto(await stackTrace.get())
        var arr = [];
        list = await action.findElements(this.flipbookList);
        for (i = 0; i < list.length; i++) {
            arr[i] = await action.getText(this.flipbookList + i);
        }
        await logger.logInto(await stackTrace.get(), arr);
        return arr;
    },

    clickViewClasses: async function () {
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.viewClass);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --View Classes Button clicked");
            res = await require('./classDrawer.page').isInitialized();
        } else
            await logger.logInto(await stackTrace.get(), " --View Classes Button NOT clicked", "error");
        return res;
    },

    clickAddBook: async function () {
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.addBook_option);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Add Book Button clicked");
            res = await action.waitForDisplayed(this.myBooks_lbl);
        } else
            await logger.logInto(await stackTrace.get(), " --Add Book Button NOT clicked", "error");
        return res;
    },

    clickUnit: async function (str) {
        await logger.logInto(await stackTrace.get());
        res = false;
        let i, list, list2, current;
        list = await action.findElements(this.unitTitle);
        list2 = await action.findElements(this.unitNumber);
        for (i = 0; i < list.length; i++) {
            if (list2.length != 0)
                current = (await action.getText(list2[i])) + " " + (await action.getText(list[i]));
            else
                current = await action.getText(list[i]);
            if (str == current) {
                res = await action.click(list[i]);
                if (res == true) {
                    let unitDetailPage = require('./viewUnit.page');
                    res = await unitDetailPage.isInitialized();
                    await logger.logInto(await stackTrace.get(), " -- Unit clicked");
                }
                else {
                    res = res + " -- Error in clicking Unit";
                    await logger.logInto(await stackTrace.get(), res, "error");
                }
                break;
            }
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    getMoreOptionsButtonData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            addBook: ((await action.getElementCount(this.addBook_option)) > 0) ? await action.getText(this.addBook_option) : null,
            removeBook: ((await action.getElementCount(this.removeBook_option)) > 0) ? await action.getText(this.removeBook_option) : null,
            viewBookDetails: ((await action.getElementCount(this.viewBookDetails_option)) > 0) ? await action.getText(this.viewBookDetails_option) : null
        }
        await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
        return obj;
    },

    clickMoreOptionsButton: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.moreOptions_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --More Options Button clicked");
            res = await this.getMoreOptionsButtonData();
        } else
            await logger.logInto(await stackTrace.get(), " --More Options Button NOT clicked", "error");
        return res;
    },

    /*closeMoreOptionsButton: async function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.closeMoreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Closed");
            res = action.waitForDisplayed(this.viewBookDetails_option, 30000, true);
        } else
            logger.logInto(stackTrace.get(), " --More Options NOT Closed", "error");
        return res;
    },*/

    getRemoveBookPopUpData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            removeBook_title: ((await action.getElementCount(this.removeBook_title)) > 0) ? await action.getText(this.removeBook_title) : null,
            removeBook_subtitle: ((await action.getElementCount(this.removeBook_subtitle)) > 0) ? await action.getText(this.removeBook_subtitle) : null,
            removeBookDialogCancel: ((await action.getElementCount(this.removeBookDialogCancel)) > 0) ? await action.getText(this.removeBookDialogCancel) : null,
            removeBookDialogRemove: ((await action.getElementCount(this.removeBookDialogRemove)) > 0) ? await action.getText(this.removeBookDialogRemove) : null
        }
        await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
        return obj;
    },

    clickRemoveBook: async function () {
        await logger.logInto(await stackTrace.get());
        //this.clickMoreOptionsButton();
        res = await action.click(this.removeBook_option);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Remove Book Button clicked");
            res = await this.getRemoveBookPopUpData();
        } else
            await logger.logInto(await stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    clickCancel_RemoveBookDialog: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.removeBookDialogCancel);
        if (res == true) {
            res = await action.waitForDisplayed(this.myBooks_lbl);
            await logger.logInto(await stackTrace.get(), " --Cancel Button clicked");
        } else
            await logger.logInto(await stackTrace.get(), " --Cancel Button NOT clicked", "error");
        return res;
    },

    clickRemove_RemoveBookDialog: async function () {
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.removeBookDialogRemove);
        if (res == true) {
            res = await action.waitForDisplayed(this.removeBookDialogRemove, undefined, true)
            if (res == true) {
                res = await action.waitForDisplayed(this.myBooks_lbl, undefined, true);
                await logger.logInto(await stackTrace.get(), " --Remove Book Button clicked");
            }
        } else
            await logger.logInto(await stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    // clickViewBookDetails: async function () {
    //     logger.logInto(stackTrace.get())
    //     res = action.click(this.viewBookDetails_option);
    //     if (res == true) {
    //         logger.logInto(stackTrace.get(), " --View Book Details Button clicked");
    //         // add return values - akhil
    //     } else
    //         logger.logInto(stackTrace.get(), " --View Book Details Button NOT clicked", "error");
    //     return res;
    // },

    clickUnitMoreOptions: async function (unitIndex) {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.unitMoreOptions + unitIndex);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Unit More Options Clicked");
            res = await this.get_UnitMoreOptionsButton_Data();
        } else
            await logger.logInto(await stackTrace.get(), " --Unit More Options NOT clicked", "error");
        return res;
    },

    get_UnitMoreOptionsButton_Data: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            openInFlipbook: ((await action.getElementCount(this.unitOpenFlipbook_option)) > 0) ? await action.getText(this.unitOpenFlipbook_option) : null,
            viewActivity: ((await action.getElementCount(this.unitViewActivity_option)) > 0) ? await action.getText(this.unitViewActivity_option) : null
        }
        await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
        return obj;
    },

    /*clickUnitOpeninFlipbook: async function () {
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

    /*clickUnitViewActivities: async function (chapterName) {
        logger.logInto(stackTrace.get());
        res = this.clickUnitMoreOptions(chapterName);
        if (res >= 0) {
            res = action.click(this.unitViewActivity_option)
            logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "View Activity in More Options Not Clicked", "error");

        return res;
    },*/

    clickOnContinue: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.lastActivity_Continue);
        if (res == true) {
            //let activityPlayerPage = require('./activityPlayer.page');
            //res = activityPlayerPage.isInitialized();
            // to be activated when activity player is updated - Akhil
            await logger.logInto(await stackTrace.get(), " --Continue Button clicked");
        } else
            await logger.logInto(await stackTrace.get(), " --Continue Button NOT clicked", "error");
        return res;
    },

    clickOnDismiss: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.lastActivity_Dismiss);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Dismiss Button clicked");
            res = await action.waitForDisplayed(this.lastActivity_icon, undefined, true)
        } else
            await logger.logInto(await stackTrace.get(), " --Dismiss Button NOT clicked", "error");
        return res;
    }
}