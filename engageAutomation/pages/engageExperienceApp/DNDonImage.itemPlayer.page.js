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

    isInitialized: async function (dndQuesData) {
        await logger.logInto(stackTrace.get());
        var dndData = {
            sourceData: [],
            targetData: [],
            tapToZoom_exists: undefined
        };
        var qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        dndData.sourceData = await this.getSourceData(qIndex, dndQuesData);
        dndData.targetData = await this.getTargetData(qIndex, dndQuesData);
        dndData.tapToZoom_exists = await action.isDisplayed(this.tapToZoom);
        await action.switchToParentFrame();
        return dndData;
    },

    getSourceData: async function (qIndex, dndQuesData) {
        await logger.logInto(stackTrace.get());
        var sourceMap = [];
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='source-option']";
        let optionLength = (await action.findElements(option)).length;
        for (let i = 0; i < optionLength; i++) {
            sourceMap[i] = [dndQuesData[i][0], await action.getText("div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "] div")];
        }
        return sourceMap;
    },

    getTargetData: async function (qIndex, dndQuesData) {
        await logger.logInto(stackTrace.get());
        let option = "div[index='" + qIndex + "'] " + "[data-tid*='target-option']";
        var targetMap = [];
        await action.waitForDisplayed(option)
        let optionLength = (await action.findElements(option)).length;
        for (let i = 0; i < optionLength; i++) {
            var dndSelector = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "] ";
            var dndSelectorText = dndSelector + "[data-tid=text-placeholder]";
            value = await itemplayer.getFeedbackIconDetails(dndSelector);
            var sts = await action.getElementCount(dndSelectorText)
            if (sts !== 0) {
                targetMap[i] = [dndQuesData[i][2], await action.getText(dndSelectorText), value];
            }
            else {
                targetMap[i] = [dndQuesData[i][2], "", value];
            }
        }
        return targetMap;
    },

    dragAndDrop: async function (dndQuesData) {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = "div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "]";
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "]"
            if (dndQuesData[i][3] !== "") {
                // action.switchToParentFrame();
                // testplayer.collapseTestPlayer();
                // action.switchToFrame(0)
                // action.scrollIntoView(itemplayer.itemPlayerContainer);
                res = await action.dragAndDrop2(srcPath, targetPath) //performing drag and drop action
            }
        }
        await action.switchToParentFrame();
        return res;
    },

    dragAndDropClick: async function (dndQuesData) {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = "div[index='" + qIndex + "'] " + this.source + dndQuesData[i][0] + "]";
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "]"
            if (dndQuesData[i][3] !== "") {
                // action.switchToParentFrame();
                // testplayer.collapseTestPlayer();
                // action.switchToFrame(0)
                res = await action.click(srcPath);
                if (true == res) {
                    res = await action.click(targetPath);
                }
                else {
                    res = res + " -- Source Element is NOT clicked";
                    await logger.logInto(stackTrace.get(), res, 'error');
                }
            }
        }
        await action.switchToParentFrame();
        return res;
    },

    clickTaptoZoom: async function () {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        res = await action.click("div[index='" + qIndex + "'] " + this.tapToZoom)
        if (res == true) {
            res = await action.waitForDisplayed("div[index='" + qIndex + "'] " + this.zoomOverlay);
        }
        else {
            res = res + " -- Tap to Zoom is NOT clicked";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    closeZoom: async function () {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        res = await action.click("div[index='" + qIndex + "'] " + this.zoomDialogClose_btn)
        if (res == true) {
            res = await action.waitForDisplayed("div[index='" + qIndex + "'] " + this.zoomOverlay, undefined, true);
        }
        else {
            res = res + " -- Zoom dialog close is NOT clicked";
            await logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    dragAndDropZoomDropDown: async function (dndQuesData) {
        await logger.logInto(stackTrace.get());
        qIndex = await itemplayer.getQuesIndex();
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            targetPath = "div[index='" + qIndex + "'] " + this.target + dndQuesData[i][2] + "] select";
            res = await action.selectByAttribute(targetPath, 'value', dndQuesData[i][0]);
            if (null == res) {
                await logger.logInto(stackTrace.get(), "value selected in the drop down");
            }
            else {
                res = res + " -- value NOT selected in the drop down";
                await logger.logInto(stackTrace.get(), res, 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    }
}