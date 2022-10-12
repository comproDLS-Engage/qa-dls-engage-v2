"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)

module.exports = {

    writingTextbox: selectorFile.css.ComproEngage.writingPlayer.writingTextbox,
    writingAttachBtn: selectorFile.css.ComproEngage.writingPlayer.writingAttachBtn,
    browseCompOption: selectorFile.css.ComproEngage.writingPlayer.browseCompOption,
    attachedFile: selectorFile.css.ComproEngage.writingPlayer.attachedFile,
    progressBar: selectorFile.css.ComproEngage.writingPlayer.progressBar,
    removeFileBtn: selectorFile.css.ComproEngage.writingPlayer.removeFileBtn,
    attachDialogTitle: selectorFile.css.ComproEngage.writingPlayer.attachDialogTitle,
    attachDialogSubtitle: selectorFile.css.ComproEngage.writingPlayer.attachDialogSubtitle,
    uploadFile: selectorFile.css.ComproEngage.writingPlayer.uploadFile,
    attachDialogBrowseBtn: selectorFile.css.ComproEngage.writingPlayer.attachDialogBrowseBtn,
    attachDialogCloseBtn: selectorFile.css.ComproEngage.writingPlayer.attachDialogCloseBtn,
    attachDialogMaxSize: selectorFile.css.ComproEngage.writingPlayer.attachDialogMaxSize,
    maxLimitDialogTitle: selectorFile.css.ComproEngage.writingPlayer.maxLimitDialogTitle,
    maxLimitDialogSubtitle: selectorFile.css.ComproEngage.writingPlayer.maxLimitDialogSubtitle,
    maxLimitDialogOkBtn: selectorFile.css.ComproEngage.writingPlayer.maxLimitDialogOkBtn,
    removeDialogTitle: selectorFile.css.ComproEngage.writingPlayer.removeDialogTitle,
    removeDialogSubtitle: selectorFile.css.ComproEngage.writingPlayer.removeDialogSubtitle,
    removeDialogNoBtn: selectorFile.css.ComproEngage.writingPlayer.removeDialogNoBtn,
    removeDialogYesBtn: selectorFile.css.ComproEngage.writingPlayer.removeDialogYesBtn,

    isInitialized: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed("iframe[id*=iframe], iframe");
        await action.switchToFrame(0);
        let res = await action.waitForDisplayed(this.writingTextbox);
        await action.switchToParentFrame();
        return res;
    },

    getData_writingPlayer: async function (writingData) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var arr = [];
        var res, textboxSel, attachedFileSel;
        for (let i = 0; i < writingData.length; i++) {
            textboxSel = this.writingTextbox + writingData[i][0] + "]";
            attachedFileSel = this.attachedFile + writingData[i][0] + "]";
            res = await action.getElementCount(textboxSel);
            if (res == 1)
                arr[i] = [
                    writingData[i][0],
                    await action.getText(textboxSel),
                    await action.getAttribute(textboxSel, "contenteditable"),
                    ((await action.getElementCount(attachedFileSel)) > 0) ? await action.getText(attachedFileSel) : null
                ]
        }
        await action.switchToParentFrame();
        return arr;
    },

    getData_attachDialog: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var obj;
        obj = {
            attachDialogTitle: ((await action.getElementCount(this.attachDialogTitle)) > 0) ? await action.getText(this.attachDialogTitle) : null,
            attachDialogSubtitle: ((await action.getElementCount(this.attachDialogSubtitle)) > 0) ? await action.getText(this.attachDialogSubtitle) : null,
            attachDialogBrowseBtn: ((await action.getElementCount(this.attachDialogBrowseBtn)) > 0) ? await action.getText(this.attachDialogBrowseBtn) : null,
            attachDialogCloseBtn: ((await action.getElementCount(this.attachDialogCloseBtn)) > 0) ? await action.getText(this.attachDialogCloseBtn) : null,
            attachDialogMaxSize: ((await action.getElementCount(this.attachDialogMaxSize)) > 0) ? await action.getText(this.attachDialogMaxSize) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },

    getData_maxLimitDialog: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var obj;
        obj = {
            maxLimitDialogTitle: ((await action.getElementCount(this.maxLimitDialogTitle)) > 0) ? await action.getText(this.maxLimitDialogTitle) : null,
            maxLimitDialogSubtitle: ((await action.getElementCount(this.maxLimitDialogSubtitle)) > 0) ? await action.getText(this.maxLimitDialogSubtitle) : null,
            maxLimitDialogOkBtn: ((await action.getElementCount(this.maxLimitDialogOkBtn)) > 0) ? await action.getText(this.maxLimitDialogOkBtn) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },

    getData_removeDialog: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var obj;
        obj = {
            removeDialogTitle: ((await action.getElementCount(this.removeDialogTitle)) > 0) ? await action.getText(this.removeDialogTitle) : null,
            removeDialogSubtitle: ((await action.getElementCount(this.removeDialogSubtitle)) > 0) ? await action.getText(this.removeDialogSubtitle) : null,
            removeDialogNoBtn: ((await action.getElementCount(this.removeDialogNoBtn)) > 0) ? await action.getText(this.removeDialogNoBtn) : null,
            removeDialogYesBtn: ((await action.getElementCount(this.removeDialogYesBtn)) > 0) ? await action.getText(this.removeDialogYesBtn) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },

    click_writingAttachBtn: async function (id) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.writingAttachBtn + id + "]");
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " writingAttachBtn is clicked");
            res = await action.waitForDisplayed(this.browseCompOption);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "writingAttachBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_browseCompOption: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.browseCompOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " browseCompOption is clicked");
            res = await this.getData_attachDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "browseCompOption is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_removeFileBtn: async function (id) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.removeFileBtn + id + "]");
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeFileBtn is clicked");
            res = await this.getData_removeDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeFileBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_attachDialogCloseBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.attachDialogCloseBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " attachDialogCloseBtn is clicked");
            res = await action.waitForDisplayed(this.attachDialogBrowseBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "attachDialogCloseBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_maxLimitDialogOkBtn: async function () {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.maxLimitDialogOkBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " maxLimitDialogOkBtn is clicked");
            res = await action.waitForDisplayed(this.maxLimitDialogOkBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "maxLimitDialogOkBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_removeDialogNoBtn: async function (id) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.removeDialogNoBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeDialogNoBtn is clicked");
            res = await action.waitForExist(this.attachedFile + id + "]");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeDialogNoBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    click_removeDialogYesBtn: async function (id) {
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        var res;
        res = await action.click(this.removeDialogYesBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeDialogYesBtn is clicked");
            res = await action.waitForExist(this.attachedFile + id + "]", undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeDialogYesBtn is NOT clicked", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    set_writingTextbox: async function (writingData) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        res = await action.setValue(this.writingTextbox + writingData[0] + "]", writingData[1]);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in writingTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in writingTextbox", 'error');
        }
        await action.switchToParentFrame();
        return res;
    },

    set_uploadFile: async function (imgPath) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.switchToFrame(0);
        res = await action.uploadFile(imgPath);
        if ((typeof res) === 'string') {
            await browser.execute((selector) => {
                var elem = document.querySelector(selector);
                elem.style.display = 'block';
            }, this.uploadFile);
            
            res = await action.setValue(this.uploadFile, res);
            await browser.pause(2000);
            if (true == res) {
                res = await action.waitForDisplayed(this.progressBar, undefined, true);
                if (true == res) {
                    await logger.logInto(await stackTrace.get(), "file uploaded successfully");
                } else {
                    await logger.logInto(await stackTrace.get(), res + "file upload in progress or stuck", 'error');
                }
            }
            else {
                await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in uploadFile", 'error');
            }
        }
        await action.switchToParentFrame();
        return res;
    },

}

