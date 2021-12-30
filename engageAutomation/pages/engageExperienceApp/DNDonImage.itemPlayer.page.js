'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require('./itemPlayer.page.js');
var srcPath, targetPath, res, value, qIndex;

module.exports = {

    source: selectorFile.css.ComproEngage.dragAndDrop.source,
    target: selectorFile.css.ComproEngage.dragAndDrop.target,
    //correctIcon: selectorFile.css.ComproEngage.itemPlayer.correctIcon,
    //incorrectIcon: selectorFile.css.ComproEngage.itemPlayer.incorrectIcon,
    tapToZoom: selectorFile.css.ComproEngage.dragAndDrop.tapToZoom,
    zoomOverlay: selectorFile.css.ComproEngage.dragAndDrop.zoomOverlay,
    zoomDialogClose_btn: selectorFile.css.ComproEngage.dragAndDrop.zoomDialogClose_btn,

    isInitialized: function (dndQuesData) {
        logger.logInto(stackTrace.get());
        var dndData = {
            sourceData: [],
            targetData: [],
            tapToZoom_exists: undefined
        };
        var qIndex = itemplayer.getQuesIndex();
        action.switchToFrame(0);
        dndData.sourceData = this.getSourceData(qIndex, dndQuesData);
        dndData.targetData = this.getTargetData(qIndex, dndQuesData);
        dndData.tapToZoom_exists = action.isDisplayed(this.tapToZoom);
        action.switchToParentFrame();
        return dndData;
    },

    getSourceData: function (qIndex, dndQuesData) {
        logger.logInto(stackTrace.get());
        var sourceMap = [];
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='source-option']";
        let optionLength = action.findElements(option).length;
        for (let i = 0; i < optionLength; i++) {
            sourceMap[i] = [dndQuesData[i][0], action.getText("div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "] div")];
        }
        return sourceMap;
    },

    getTargetData: function (qIndex, dndQuesData) {
        logger.logInto(stackTrace.get());
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='target-option']";
        var targetMap = [];
        action.waitForDisplayed(option)
        let optionLength = action.findElements(option).length;
        for (let i = 0; i < optionLength; i++) {
            var dndSelector = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "] ";
            var dndSelectorText = dndSelector + "[data-tid=text-placeholder]";
            value = itemplayer.getFeedbackIconDetails(dndSelector);
            var sts = action.getElementCount(dndSelectorText)
            if (sts !== 0) {
                targetMap[i] = [dndQuesData[i][2], action.getText(dndSelectorText), value];
            }
            else {
                targetMap[i] = [dndQuesData[i][2], "", value];
            }
        }
        return targetMap;
    },

    dragAndDrop: function (dndQuesData) {
        logger.logInto(stackTrace.get());
        qIndex = itemplayer.getQuesIndex();
        action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = "div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "]";
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "]"
            if (dndQuesData[i][3] !== "") {
                // action.switchToParentFrame();
                // testplayer.collapseTestPlayer();
                // action.switchToFrame(0)
                // action.scrollIntoView(itemplayer.itemPlayerContainer);
                res = action.dragAndDrop2(srcPath, targetPath) //performing drag and drop action
            }
        }
        action.switchToParentFrame();
        return res;
    },

    dragAndDropClick: function (dndQuesData) {
        logger.logInto(stackTrace.get());
        qIndex = itemplayer.getQuesIndex();
        action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = "div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "]";
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "]"
            if (dndQuesData[i][3] !== "") {
                // action.switchToParentFrame();
                // testplayer.collapseTestPlayer();
                // action.switchToFrame(0)
                res = action.click(srcPath);
                if (true == res) {
                    res = action.click(targetPath);
                }
                else {
                    res = res + " -- Source Element is NOT clicked";
                    logger.logInto(stackTrace.get(), res, 'error');
                }
            }
        }
        action.switchToParentFrame();
        return res;
    },

    clickTaptoZoom: function () {
        logger.logInto(stackTrace.get());
        qIndex = itemplayer.getQuesIndex();
        action.switchToFrame(0);
        res = action.click("div[index='" + qIndex + "'] " + this.tapToZoom)
        if (res == true) {
            res = action.waitForDisplayed("div[index='" + qIndex + "'] " + this.zoomOverlay);
        }
        else {
            res = res + " -- Tap to Zoom is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        action.switchToParentFrame();
        return res;
    },

    closeZoom: function () {
        logger.logInto(stackTrace.get());
        qIndex = itemplayer.getQuesIndex();
        res = action.click("div[index='" + qIndex + "'] " + this.zoomDialogClose_btn)
        if (res == true) {
            res = action.waitForDisplayed("div[index='" + qIndex + "'] " + this.zoomOverlay, undefined, true);
        }
        else {
            res = res + " -- Zoom dialog close is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    dragAndDropZoomDropDown: function (dndQuesData) {
        logger.logInto(stackTrace.get());
        qIndex = itemplayer.getQuesIndex();
        action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "] select";
            res = action.selectByAttribute(targetPath, 'value', dndQuesData[i][0]);
            if (null == res) {
                logger.logInto(stackTrace.get(), "value selected in the drop down");
            }
            else {
                res = res + " -- value NOT selected in the drop down";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        action.switchToParentFrame();
        return res;
    }
}