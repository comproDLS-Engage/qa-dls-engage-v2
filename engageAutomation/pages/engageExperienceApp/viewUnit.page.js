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

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.unitName),
            appShell: appShell.isInitialized()
        };
        return res;
    },

    getViewUnitData: function () {
        logger.logInto(stackTrace.get());
        obj = {
            unitThumbnail: (action.getElementCount(this.unitThumbnail) > 0) ? action.waitForDisplayed(this.unitThumbnail) : null,
            unitName: (action.getElementCount(this.unitName) > 0) ? action.getText(this.unitName) : null,
            unitNumber: (action.getElementCount(this.unitNumber) > 0) ? action.getText(this.unitNumber) : null,
            openInFlipbook_btn: (action.getElementCount(this.openInFlipbook_btn) > 0) ? action.getText(this.openInFlipbook_btn) : null,
            activity_label: (action.getElementCount(this.activity_label) > 0) ? action.getText(this.activity_label) : null,
            activity_label_byline: (action.getElementCount(this.activity_label_byline) > 0) ? action.getText(this.activity_label_byline) : null,
            nextUnit_btn: (action.getElementCount(this.nextUnit_btn) > 0) ? action.getText(this.nextUnit_btn) : null,
            previousUnit_btn: (action.getElementCount(this.previousUnit_btn) > 0) ? action.getText(this.previousUnit_btn) : null,
            component: appShell.getTabsListData(),
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    clickNextUnit: function () {
        logger.logInto(stackTrace.get());
        res = action.click(this.nextUnit_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Next Unit Button clicked");
            this.isInitialized();
            res = this.getViewUnitData();
        } else
            logger.logInto(stackTrace.get(), " --Next Unit Button NOT clicked", "error");
        return res;
    },

    clickPreviousUnit: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.previousUnit_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Previous Unit Button clicked");
            this.isInitialized();
            res = this.getViewUnitData();
        } else
            logger.logInto(stackTrace.get(), " --Previous Unit Button NOT clicked", "error");
        return res;
    },

    clickOpenInFlipBook: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.openInFlipbook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Open In FlipBook Button clicked");
            //res = require('./flipbook.page.js').isInitialized()
        } else
            logger.logInto(stackTrace.get(), " --Open In FlipBook Button NOT clicked", "error");
        return res;
    },

    getFolderListData: function (str) { //this function will get folder and subfolder names
        logger.logInto(stackTrace.get());
        let list, i, arr = [];
        list = action.findElements(this.folderTitle);
        if (str) {
            for (i = 0; i < list.length; i++) {
                if (action.getText(list[i]) == str) {
                    arr[0] = {
                        folderTitle: (action.getElementCount(this.folderTitle + i) > 0) ? action.getText(this.folderTitle + i) : null,
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    folderTitle: (action.getElementCount(this.folderTitle + i) > 0) ? action.getText(this.folderTitle + i) : null
                }
            }
        }
        return arr;
    },

    expandCollapseFolder: function (str) {
        logger.logInto(stackTrace.get());
        res = false;
        let i, list;
        list = action.findElements(this.folderTitle);
        for (i = 0; i < list.length; i++) {
            if (str.includes(action.getText(list[i]))) {
                res = action.click(list[i]);
                browser.pause(1000);
                break;
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    getActivityListData: function (str) {
        logger.logInto(stackTrace.get());
        let i, arr = [];
        var activityList = action.findElements(this.activityTitle)
        var pageInfoList = action.findElements(this.activityPageInfo)
        var activityCompletionCirlceList = action.findElements(this.activityCompletionCircle)
        var activityType_icon = action.findElements(this.activityType_icon)
        var activityType_txt = action.findElements(this.activityType_txt)
        if (str) {
            for (i = 0; i < activityList.length; i++) {
                if (action.getText(activityList[i]) == str) {
                    arr[0] = {
                        activityTitle: (action.getElementCount(activityList[i]) > 0) ? action.getText(activityList[i]) : null,
                        activityPageInfo: (action.getElementCount(pageInfoList[i]) > 0) ? action.getText(pageInfoList[i]) : null,
                        activityCompletionCircle: (action.getElementCount(activityCompletionCirlceList[i]) > 0) ? action.waitForDisplayed(activityCompletionCirlceList[i]) : null,
                        activityType_icon: (action.getElementCount(activityType_icon[i]) > 0) ? action.waitForDisplayed(activityType_icon[i]) : null,
                        activityType_txt: (action.getElementCount(activityType_txt[i]) > 0) ? action.getText(activityType_txt[i]) : nulll
                    }
                    break;
                }
            }
        }
        else {
            for (i = 0; i < list.length; i++) {
                arr[i] = {
                    activityTitle: (action.getElementCount(activityList[i]) > 0) ? action.getText(activityList[i]) : null,
                    activityPageInfo: (action.getElementCount(pageInfoList[i]) > 0) ? action.getText(pageInfoList[i]) : null,
                    activityCompletionCircle: (action.getElementCount(activityCompletionCirlceList[i]) > 0) ? action.waitForDisplayed(activityCompletionCirlceList[i]) : null,
                    activityType_icon: (action.getElementCount(activityType_icon[i]) > 0) ? action.waitForDisplayed(activityType_icon[i]) : null,
                    activityType_txt: (action.getElementCount(activityType_txt[i]) > 0) ? action.getText(activityType_txt[i]) : nulll
                }
            }
        }
        logger.logInto(stackTrace.get(), arr);
        return arr;
    },

    clickActivity: function (str) {
        logger.logInto(stackTrace.get());
        res = false;
        let i, list;
        action.waitForDisplayed(this.activityTitle);
        list = action.findElements(this.activityTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == str) {
                res = action.click(list[i]);
                break;
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    // clickActivityMoreOptions: function (activityName) { 
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

    // clickOpenFlipbook_MoreOptions: function (activityName) {
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

    // clickViewActivity_moreOptions: function (activityName) { //disable this function as it is not required for now - akhil
    //     res = this.clickActivityMoreOptions(activityName)
    //     if (res == true) {
    //         res = action.click(this.viewActivity_moreOptions)
    //         logger.logInto(stackTrace.get(), "View Activity in More Options Clicked");
    //     } else
    //         logger.logInto(stackTrace.get(), "View Activity in More Options  Not Clicked", "error");
    //     return res;
    // }

}