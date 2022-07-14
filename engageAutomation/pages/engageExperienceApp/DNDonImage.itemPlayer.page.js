'use strict';
const action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const itemplayer = require('./itemPlayer.page.js');
var srcPath, targetPath, res, qIndex;

module.exports = {

    source: selectorFile.css.ComproEngage.dragAndDrop.source,
    target: selectorFile.css.ComproEngage.dragAndDrop.target,
    tapToZoom: selectorFile.css.ComproEngage.dragAndDrop.tapToZoom,
    zoomOverlay: selectorFile.css.ComproEngage.dragAndDrop.zoomOverlay,
    zoomDialogClose_btn: selectorFile.css.ComproEngage.dragAndDrop.zoomDialogClose_btn,

    isInitialized: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        var dndData = {
            sourceData: [],
            targetData: [],
            tapToZoom_exists: undefined
        };
        await action.switchToFrame(0);
        dndData.sourceData = await this.getSourceData(dndQuesData);
        dndData.targetData = await this.getTargetData(dndQuesData);
        dndData.tapToZoom_exists = await action.isDisplayed(this.tapToZoom);
        await action.switchToParentFrame();
        return dndData;
    },

    getSourceData: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        var sourceList = [];
        let optionLength = (await action.findElements(this.source)).length;
        for (let i = 0; i < optionLength; i++) {
            sourceList[i] = [dndQuesData[i][0], await action.getText(this.source + dndQuesData[i][0] + "] div")];
        }
        return sourceList;
    },

    getTargetData: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        var targetList = [];
        await action.waitForDisplayed(this.target);
        let optionLength = (await action.findElements(this.target)).length;
        for (let i = 0; i < optionLength; i++) {
            var dndSelector = this.target + dndQuesData[i][2];
            var dndSelectorText = dndSelector + "] [data-tid=text-placeholder]";
            //value = await itemplayer.getFeedbackIconDetails(dndSelector);
            //var sts = await action.getElementCount(dndSelectorText)
            // if (sts !== 0) {
                 targetList[i] = [dndQuesData[i][2], await action.getText(dndSelectorText), await itemplayer.getFeedbackIconDetails(dndSelector)];
            // }
            // else {
            //     targetList[i] = [dndQuesData[i][2], "", value];
            // }
        }
        return targetList;
    },

    dragAndDrop: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = this.source + dndQuesData[i][0];
            targetPath = this.target + dndQuesData[i][2];
            if (dndQuesData[i][3] !== "") {
                res = await action.dragAndDrop2(srcPath, targetPath); //performing drag and drop action
            }
        }
        await action.switchToParentFrame();
        return res;
    },

    dragAndDropClick: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            srcPath = this.source + dndQuesData[i][0];
            targetPath = this.target + dndQuesData[i][2];
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
                    await logger.logInto(await stackTrace.get(), res, 'error');
                }
            }
        }
        await action.switchToParentFrame();
        return res;
    },

    clickTaptoZoom: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        res = await action.click(this.tapToZoom);
        if (res == true) {
            res = await action.waitForDisplayed(this.zoomOverlay);
        }
        else {
            res = res + " -- Tap to Zoom is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    closeZoom: async function () {
        await logger.logInto(await stackTrace.get());
        res = await action.click(this.zoomDialogClose_btn);
        if (res == true) {
            res = await action.waitForDisplayed(this.zoomOverlay, undefined, true);
        }
        else {
            res = res + " -- Zoom dialog close is NOT clicked";
            await logger.logInto(await stackTrace.get(), res, 'error');
        }
        return res;
    },

    dragAndDropZoomDropDown: async function (dndQuesData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        for (var i = 0; i < dndQuesData.length; i++) {
            targetPath = this.target + dndQuesData[i][2] + "] select";
            res = await action.selectByAttribute(targetPath, 'value', dndQuesData[i][0]);
            if (null == res) {
                await logger.logInto(await stackTrace.get(), "value selected in the drop down");
            }
            else {
                res = res + " -- value NOT selected in the drop down";
                await logger.logInto(await stackTrace.get(), res, 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    }
}