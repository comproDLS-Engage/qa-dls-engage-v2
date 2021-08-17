"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    component: selectorFile.css.ComproEngage.bookView.component,
    unitThumbnail: selectorFile.css.ComproEngage.bookView.unitThumbnail,
    unitChapterName: selectorFile.css.ComproEngage.bookView.unitChapterName,
    unitNumber: selectorFile.css.ComproEngage.bookView.unitNumber,
    unitOpenFlipbook_btn: selectorFile.css.ComproEngage.bookView.unitOpenFlipbook_btn,
    nextUnit_btn: selectorFile.css.ComproEngage.bookView.nextUnit_btn,
    previousUnit_btn: selectorFile.css.ComproEngage.bookView.previousUnit_btn,
    activityTitle: selectorFile.css.ComproEngage.bookView.activityTitle,
    activityPageInfo: selectorFile.css.ComproEngage.bookView.activityPageInfo,
    activityMoreOptions: selectorFile.css.ComproEngage.bookView.activityMoreOptions,
    activityCompletionCircle: selectorFile.css.ComproEngage.bookView.activityCompletionCircle,
    openFlipbook_moreOptions: selectorFile.css.ComproEngage.bookView.openFlipbook_moreOptions,
    viewActivity_moreOptions: selectorFile.css.ComproEngage.bookView.viewActivity_moreOptions,
    activity_lbl_unitView: selectorFile.css.ComproEngage.bookView.activity_lbl_unitView,
    activity_byline_unitView: selectorFile.css.ComproEngage.bookView.activity_byline_unitView,
    itemTypeIcon:selectorFile.css.ComproEngage.bookView.itemTypeIcon,
    itemTypeText:selectorFile.css.ComproEngage.bookView.itemTypeText,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.unitThumbnail);
        res = this.getUnitTOCData();
        return res;
    },

    getUnitTOCData: function () {
        obj = {
            unitThumbnail: (action.getElementCount(this.unitThumbnail) > 0) ? action.waitForDisplayed(this.unitThumbnail) : null,
            unitChapterName: (action.getElementCount(this.unitChapterName) > 0) ? action.getText(this.unitChapterName) : null,
            unitNumber: (action.getElementCount(this.unitNumber) > 0) ? action.getText(this.unitNumber) : null,
            unitOpenFlipbook_btn: (action.getElementCount(this.unitOpenFlipbook_btn) > 0) ? action.getText(this.unitOpenFlipbook_btn) : null,
            activity_lbl_unitView: (action.getElementCount(this.activity_lbl_unitView) > 0) ? action.getText(this.activity_lbl_unitView) : null,
            activity_byline_unitView: (action.getElementCount(this.activity_byline_unitView) > 0) ? action.getText(this.activity_byline_unitView) : null,
            nextUnit_btn: (action.getElementCount(this.nextUnit_btn) > 0) ? action.getText(this.nextUnit_btn) : null,
            previousUnit_btn: (action.getElementCount(this.previousUnit_btn) > 0) ? action.getText(this.previousUnit_btn) : null,
            componentList: this.getComponentListData(),
            activityList: this.getActivityListData()
            // do we need attribute for which component is selected ? are/will we check this in testcase?- akhil
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    getComponentListData: function () {
        let componentArr = require("./bookDetail.page.js").getComponentListData()
        return componentArr;
    },


    clickNextUnit: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.nextUnit_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Next Unit Button clicked");
            res = this.getUnitTOCData();
        } else
            logger.logInto(stackTrace.get(), " --Next Unit Button NOT clicked", "error");
        return res;
    },

    clickPreviousUnit: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.previousUnit_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Previous Unit Button clicked");
            res = this.getUnitTOCData();
        } else
            logger.logInto(stackTrace.get(), " --Previous Unit Button NOT clicked", "error");
        return res;
    },

    clickOpenInFlipBook_unitLevel: function () {
        logger.logInto(stackTrace.get())
        res = action.click(this.unitOpenFlipbook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Open In FlipBook Button clicked");
            // return flipbook isInitialized()
            //res = require('./flipbook.page.js').isInitialized()
        } else
            logger.logInto(stackTrace.get(), " --Open In FlipBook Button NOT clicked", "error");
        return res;
    },

    getActivityListData: function () {
        var componentIndex;
        logger.logInto(stackTrace.get())
       
        let i, list, activityArr = [];
        var activityList = action.findElements(this.activityTitle)
        var pageInfoList = action.findElements(this.activityPageInfo)
        var activityCompletionCirlceList = action.findElements(this.activityCompletionCircle)
        var itemTypeIcon = action.findElements(this.itemTypeIcon)
        var itemTypeText = action.findElements(this.itemTypeText)

        // console.log(itemTypeIcon)
        // console.log(itemTypeText)

            for (i = 0; i < activityList.length; i++) {
                activityArr[i] = {
                    activityTitle: action.getText(activityList[i]),
                    activityPageInfo: (action.getElementCount(pageInfoList[i]) > 0) ? action.getText(pageInfoList[i]) : null,
                    activityCompletionCircle: (action.getElementCount(activityCompletionCirlceList[i]) > 0) ? action.waitForDisplayed(activityCompletionCirlceList[i]) : null,
                    resourceItemTypeIcon: (action.getElementCount(itemTypeIcon[i]) > 0) ? action.waitForDisplayed(itemTypeIcon[i]) : null,
                    resourceItemTypeText: (action.getElementCount(itemTypeText[i]) > 0) ? action.getText(itemTypeText[i]) : null
                }
            }
            logger.logInto(stackTrace.get(), activityArr);
        
        //console.log(activityArr);
        return activityArr;
    },

    clickActivity: function (activityName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.activityTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == activityName) {
                res = action.click(list[i]);
                break;
            }
            res = false;
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

    clickOpenFlipbook_MoreOptions: function (activityName) { 
        res = this.clickActivityMoreOptions(activityName)
        if (res == true) {
            res = action.click(this.openFlipbook_moreOptions)
            // return flipbook isInitialized()
            //res = require('./flipbook.page.js').isInitialized()
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");
        return res;
    },

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