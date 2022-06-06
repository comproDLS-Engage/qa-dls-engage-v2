"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var appShell = require('./appShell.page');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    unitThumbnail: selectorFile.css.ComproEngage.viewUnit.unitThumbnail,
    unitName: selectorFile.css.ComproEngage.viewUnit.unitName,
    unitNumber: selectorFile.css.ComproEngage.viewUnit.unitNumber,
    openInFlipbook_btn: selectorFile.css.ComproEngage.viewUnit.openInFlipbook_btn,
    activity_label: selectorFile.css.ComproEngage.viewUnit.activity_label,
    activity_label_byline: selectorFile.css.ComproEngage.viewUnit.activity_label_byline,
    nextUnit_btn: selectorFile.css.ComproEngage.viewUnit.nextUnit_btn,
    previousUnit_btn: selectorFile.css.ComproEngage.viewUnit.previousUnit_btn,
    folderTitle: selectorFile.css.ComproEngage.viewUnit.folderTitle,
    activityTitle: selectorFile.css.ComproEngage.viewUnit.activityTitle,
    activityPageInfo: selectorFile.css.ComproEngage.viewUnit.activityPageInfo,
    activityCompletionCircle: selectorFile.css.ComproEngage.viewUnit.activityCompletionCircle,
    activityType_icon: selectorFile.css.ComproEngage.viewUnit.activityType_icon,
    activityType_txt: selectorFile.css.ComproEngage.viewUnit.activityType_txt,
    activityMoreOptions: selectorFile.css.ComproEngage.viewUnit.activityMoreOptions,
    openFlipbook_moreOptions: selectorFile.css.ComproEngage.viewUnit.openFlipbook_moreOptions,
    viewActivity_moreOptions: selectorFile.css.ComproEngage.viewUnit.viewActivity_moreOptions,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.unitName),
            appShell: await appShell.isInitialized()
        };
        return res;
    },

    getViewUnitData: async function () {
        await logger.logInto(await stackTrace.get());
        obj = {
            unitThumbnail: ((await action.getElementCount(this.unitThumbnail)) > 0) ? await action.waitForDisplayed(this.unitThumbnail) : null,
            unitName: ((await action.getElementCount(this.unitName)) > 0) ? await action.getText(this.unitName) : null,
            unitNumber: ((await action.getElementCount(this.unitNumber)) > 0) ? await action.getText(this.unitNumber) : null,
            openInFlipbook_btn: ((await action.getElementCount(this.openInFlipbook_btn)) > 0) ? await action.getText(this.openInFlipbook_btn) : null,
            activity_label: ((await action.getElementCount(this.activity_label)) > 0) ? await action.getText(this.activity_label) : null,
            activity_label_byline: ((await action.getElementCount(this.activity_label_byline)) > 0) ? await action.getText(this.activity_label_byline) : null,
            nextUnit_btn: ((await action.getElementCount(this.nextUnit_btn)) > 0) ? await action.getText(this.nextUnit_btn) : null,
            previousUnit_btn: ((await action.getElementCount(this.previousUnit_btn)) > 0) ? await action.getText(this.previousUnit_btn) : null,
            component: await appShell.getTabsListData(),
        }
        await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
        return obj;
    },

    clickNextUnit: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.nextUnit_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Next Unit Button clicked");
            await this.isInitialized();
            res = await this.getViewUnitData();
        } else
            await logger.logInto(await stackTrace.get(), " --Next Unit Button NOT clicked", "error");
        return res;
    },

    clickPreviousUnit: async function () {
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.previousUnit_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Previous Unit Button clicked");
            await this.isInitialized();
            res = await this.getViewUnitData();
        } else
            await logger.logInto(await stackTrace.get(), " --Previous Unit Button NOT clicked", "error");
        return res;
    },

    clickOpenInFlipBook: async function () {
        await logger.logInto(await stackTrace.get())
        res = await action.click(this.openInFlipbook_btn);
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --Open In FlipBook Button clicked");
            //res = require('./flipbook.page.js').isInitialized()
        } else
            await logger.logInto(await stackTrace.get(), " --Open In FlipBook Button NOT clicked", "error");
        return res;
    },

    getFolderListData: async function (str) { //this function will get folder and subfolder names
        await logger.logInto(await stackTrace.get());
        let list, i, arr = [];
        list = await action.findElements(this.folderTitle);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if ((await action.getText(list[i])) == str) {
                    arr[0] = {
                        folderTitle: ((await action.getElementCount(this.folderTitle + i)) > 0) ? await action.getText(this.folderTitle + i) : null,
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    folderTitle: ((await action.getElementCount(this.folderTitle + i)) > 0) ? await action.getText(this.folderTitle + i) : null
                }
            }
        }
        return arr;
    },

    expandCollapseFolder: async function (str) {
        await logger.logInto(await stackTrace.get());
        res = false;
        let i, list;
        list = await action.findElements(this.folderTitle);
        for (i = 0; i < list.length; i++) {
            if (str.includes(await action.getText(list[i]))) {
                res = await action.click(list[i]);
                await browser.pause(1000);
                break;
            }
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    getActivityListData: async function (str) {
        await logger.logInto(await stackTrace.get());
        let i, arr = [];
        var activityList = await action.findElements(this.activityTitle)
        var pageInfoList = await action.findElements(this.activityPageInfo)
        var activityCompletionCirlceList = await action.findElements(this.activityCompletionCircle)
        var activityType_icon = await action.findElements(this.activityType_icon)
        var activityType_txt = await action.findElements(this.activityType_txt)
        if (str) {
            for (i = 0; i < activityList.length; i++) {
                if ((await action.getText(activityList[i])) == str) {
                    arr[0] = {
                        activityTitle: ((await action.getElementCount(activityList[i])) > 0) ? await action.getText(activityList[i]) : null,
                        activityPageInfo: ((await action.getElementCount(pageInfoList[i])) > 0) ? await action.getText(pageInfoList[i]) : null,
                        activityCompletionCircle: ((await action.getElementCount(activityCompletionCirlceList[i])) > 0) ? await action.waitForDisplayed(activityCompletionCirlceList[i]) : null,
                        activityType_icon: ((await action.getElementCount(activityType_icon[i])) > 0) ? await action.waitForDisplayed(activityType_icon[i]) : null,
                        activityType_txt: ((await action.getElementCount(activityType_txt[i])) > 0) ? await action.getText(activityType_txt[i]) : nulll
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    activityTitle: ((await action.getElementCount(activityList[i])) > 0) ? await action.getText(activityList[i]) : null,
                    activityPageInfo: ((await action.getElementCount(pageInfoList[i])) > 0) ? await action.getText(pageInfoList[i]) : null,
                    activityCompletionCircle: ((await action.getElementCount(activityCompletionCirlceList[i])) > 0) ? await action.waitForDisplayed(activityCompletionCirlceList[i]) : null,
                    activityType_icon: ((await action.getElementCount(activityType_icon[i])) > 0) ? await action.waitForDisplayed(activityType_icon[i]) : null,
                    activityType_txt: ((await action.getElementCount(activityType_txt[i])) > 0) ? await action.getText(activityType_txt[i]) : nulll
                }
            }
        }
        await logger.logInto(await stackTrace.get(), arr);
        return arr;
    },

    clickActivity: async function (str) {
        await logger.logInto(await stackTrace.get());
        res = false;
        let i, list;
        await action.waitForDisplayed(this.activityTitle);
        list = await action.findElements(this.activityTitle);
        for (i = 0; i < list.length; i++) {
            if ((await action.getText(list[i])) == str) {
                res = await action.click(list[i]);
                break;
            }
        }
        await logger.logInto(await stackTrace.get(), res);
        return res;
    },

    // clickActivityMoreOptions: async function (activityName) { 
    //     let i, list;
    //     list = action.findElements(this.activityTitle);
    //     for (i = 0; i < list.length; i++) {
    //         if (action.getText(list[i]) == activityName) {
    //             res = action.click(this.activityMoreOptions + i);
    //             break;
    //         }
    //         res = false;
    //     }
    //     logger.logInto(stackTrace.get(), res);
    //     return res;
    // },

    // clickOpenFlipbook_MoreOptions: async function (activityName) {
    //     res = this.clickActivityMoreOptions(activityName)
    //     if (res == true) {
    //         res = action.click(this.openFlipbook_moreOptions)
    //         // return flipbook isInitialized()
    //         //res = require('./flipbook.page.js').isInitialized()
    //         logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
    //     } else
    //         logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");
    //     return res;
    // },

    // clickViewActivity_moreOptions: async function (activityName) { //disable this function as it is not required for now - akhil
    //     res = this.clickActivityMoreOptions(activityName)
    //     if (res == true) {
    //         res = action.click(this.viewActivity_moreOptions)
    //         logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
    //     } else
    //         logger.logInto(stackTrace.get(), "View Activity in More Options  Not Clicked", "error");
    //     return res;
    // }

}