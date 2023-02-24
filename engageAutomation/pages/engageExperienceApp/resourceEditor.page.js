"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    newResourceTitle: selectorFile.css.ComproEngage.resourceEditor.newResourceTitle,
    cancelBtn: selectorFile.css.ComproEngage.resourceEditor.cancelBtn,
    pasteALinkTitle: selectorFile.css.ComproEngage.resourceEditor.pasteALinkTitle,
    resourceLinkLbl: selectorFile.css.ComproEngage.resourceEditor.resourceLinkLbl,
    pasteLinkInput: selectorFile.css.ComproEngage.resourceEditor.pasteLinkInput,
    linksIncludeLbl: selectorFile.css.ComproEngage.resourceEditor.linksIncludeLbl,
    dropAreaTitle: selectorFile.css.ComproEngage.resourceEditor.dropAreaTitle,
    dropAreaSubtitle: selectorFile.css.ComproEngage.resourceEditor.dropAreaSubtitle,
    dropAreaOrLbl: selectorFile.css.ComproEngage.resourceEditor.dropAreaOrLbl,
    uploadResourceBtn: selectorFile.css.ComproEngage.resourceEditor.uploadResourceBtn,
    browseBtn: selectorFile.css.ComproEngage.resourceEditor.browseBtn,
    dropLimitLbl: selectorFile.css.ComproEngage.resourceEditor.dropLimitLbl,
    enterBtn: selectorFile.css.ComproEngage.resourceEditor.enterBtn,
    invalidUrlTxt: selectorFile.css.ComproEngage.resourceEditor.invalidUrlTxt,
    resourceType: selectorFile.css.ComproEngage.resourceEditor.resourceType,
    resourceName: selectorFile.css.ComproEngage.resourceEditor.resourceName,
    sizeLbl: selectorFile.css.ComproEngage.resourceEditor.sizeLbl,
    fileSize: selectorFile.css.ComproEngage.resourceEditor.fileSize,
    replaceBtn: selectorFile.css.ComproEngage.resourceEditor.replaceBtn,
    resourceGuidelinesTxt: selectorFile.css.ComproEngage.resourceEditor.resourceGuidelinesTxt,
    createResourceBtn: selectorFile.css.ComproEngage.resourceEditor.createResourceBtn,
    resourceTypeTitle: selectorFile.css.ComproEngage.resourceEditor.resourceTypeTitle,
    titleLbl: selectorFile.css.ComproEngage.resourceEditor.titleLbl,
    titleInput: selectorFile.css.ComproEngage.resourceEditor.titleInput,
    descriptionLbl: selectorFile.css.ComproEngage.resourceEditor.descriptionLbl,
    descriptionInput: selectorFile.css.ComproEngage.resourceEditor.descriptionInput,
    durationLbl: selectorFile.css.ComproEngage.resourceEditor.durationLbl,
    durationInput: selectorFile.css.ComproEngage.resourceEditor.durationInput,
    durationUnit: selectorFile.css.ComproEngage.resourceEditor.durationUnit,
    fluencyTxt: selectorFile.css.ComproEngage.resourceEditor.fluencyTxt,
    learnMoreLink: selectorFile.css.ComproEngage.resourceEditor.learnMoreLink,
    estTimeLink: selectorFile.css.ComproEngage.resourceEditor.estTimeLink,
    resourceTypeBand: selectorFile.css.ComproEngage.resourceEditor.resourceTypeBand,
    resourceNameBand: selectorFile.css.ComproEngage.resourceEditor.resourceNameBand,
    sizeLblBand: selectorFile.css.ComproEngage.resourceEditor.sizeLblBand,
    fileSizeBand: selectorFile.css.ComproEngage.resourceEditor.fileSizeBand,
    replaceBtnBand: selectorFile.css.ComproEngage.resourceEditor.replaceBtnBand,

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.newResourceTitle),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_resourceDialog: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            newResourceTitle: ((await action.getElementCount(this.newResourceTitle)) > 0) ? await action.getText(this.newResourceTitle) : null,
            cancelBtn: ((await action.getElementCount(this.cancelBtn)) > 0) ? await action.getText(this.cancelBtn) : null,
            pasteALinkTitle: ((await action.getElementCount(this.pasteALinkTitle)) > 0) ? await action.getText(this.pasteALinkTitle) : null,
            resourceLinkLbl: ((await action.getElementCount(this.resourceLinkLbl)) > 0) ? await action.getText(this.resourceLinkLbl) : null,
            pasteLinkInput: ((await action.getElementCount(this.pasteLinkInput)) > 0) ? await action.getText(this.pasteLinkInput) : null,
            linksIncludeLbl: ((await action.getElementCount(this.linksIncludeLbl)) > 0) ? await action.getText(this.linksIncludeLbl) : null,
            dropAreaTitle: ((await action.getElementCount(this.dropAreaTitle)) > 0) ? await action.getText(this.dropAreaTitle) : null,
            dropAreaSubtitle: ((await action.getElementCount(this.dropAreaSubtitle)) > 0) ? await action.getText(this.dropAreaSubtitle) : null,
            dropAreaOrLbl: ((await action.getElementCount(this.dropAreaOrLbl)) > 0) ? await action.getText(this.dropAreaOrLbl) : null,
            enterBtn: ((await action.getElementCount(this.enterBtn)) > 0) ? await action.getText(this.enterBtn) : null,
            invalidUrlTxt: ((await action.getElementCount(this.invalidUrlTxt)) > 0) ? await action.getText(this.invalidUrlTxt) : null,
            browseBtn: ((await action.getElementCount(this.browseBtn)) > 0) ? await action.getText(this.browseBtn) : null,
            dropLimitLbl: ((await action.getElementCount(this.dropLimitLbl)) > 0) ? await action.getText(this.dropLimitLbl) : null,
            resourceType: ((await action.getElementCount(this.resourceType)) > 0) ? await action.getText(this.resourceType) : null,
            resourceName: ((await action.getElementCount(this.resourceName)) > 0) ? await action.getText(this.resourceName) : null,
            sizeLbl: ((await action.getElementCount(this.sizeLbl)) > 0) ? await action.getText(this.sizeLbl) : null,
            fileSize: ((await action.getElementCount(this.fileSize)) > 0) ? await action.getText(this.fileSize) : null,
            replaceBtn: ((await action.getElementCount(this.replaceBtn)) > 0) ? await action.getText(this.replaceBtn) : null,
            resourceGuidelinesTxt: ((await action.getElementCount(this.resourceGuidelinesTxt)) > 0) ? await action.getText(this.resourceGuidelinesTxt) : null,
            createResourceBtn: ((await action.getElementCount(this.createResourceBtn)) > 0) ? await action.getText(this.createResourceBtn) : null,
        }
        return obj;
    },

    getData_resourceEditorPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            resourceTypeBand: ((await action.getElementCount(this.resourceTypeBand)) > 0) ? await action.getText(this.resourceTypeBand) : null,
            resourceNameBand: ((await action.getElementCount(this.resourceNameBand)) > 0) ? await action.getText(this.resourceNameBand) : null,
            sizeLblBand: ((await action.getElementCount(this.sizeLblBand)) > 0) ? await action.getText(this.sizeLblBand) : null,
            fileSizeBand: ((await action.getElementCount(this.fileSizeBand)) > 0) ? await action.getText(this.fileSizeBand) : null,
            replaceBtnBand: ((await action.getElementCount(this.replaceBtnBand)) > 0) ? await action.getText(this.replaceBtnBand) : null,
            resourceTypeTitle: ((await action.getElementCount(this.resourceTypeTitle)) > 0) ? await action.getText(this.resourceTypeTitle) : null,
            titleLbl: ((await action.getElementCount(this.titleLbl)) > 0) ? await action.getText(this.titleLbl) : null,
            titleInput: ((await action.getElementCount(this.titleInput)) > 0) ? await action.getText(this.titleInput) : null,
            descriptionLbl: ((await action.getElementCount(this.descriptionLbl)) > 0) ? await action.getText(this.descriptionLbl) : null,
            descriptionInput: ((await action.getElementCount(this.descriptionInput)) > 0) ? await action.getText(this.descriptionInput) : null,
            durationLbl: ((await action.getElementCount(this.durationLbl)) > 0) ? await action.getText(this.durationLbl) : null,
            durationInput: ((await action.getElementCount(this.durationInput)) > 0) ? await action.getText(this.durationInput) : null,
            durationUnit: ((await action.getElementCount(this.durationUnit)) > 0) ? await action.getText(this.durationUnit) : null,
            fluencyTxt: ((await action.getElementCount(this.fluencyTxt)) > 0) ? await action.getText(this.fluencyTxt) : null,
            learnMoreLink: ((await action.getElementCount(this.learnMoreLink)) > 0) ? await action.getText(this.learnMoreLink) : null,
            estTimeLink: ((await action.getElementCount(this.estTimeLink)) > 0) ? await action.getText(this.estTimeLink) : null,
        }
        return obj;
    },

    click_cancelBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelBtn is clicked");
            res = await action.waitForDisplayed(this.cancelBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_enterBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.enterBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " enterBtn is clicked");
            await action.waitForDocumentLoad();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "enterBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_browseBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.browseBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " browseBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "browseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_replaceBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.replaceBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " replaceBtn is clicked");
            await action.waitForDisplayed(this.cancelBtn);
            res = await this.getData_resourceDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "replaceBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_createResourceBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.createResourceBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " createResourceBtn is clicked");
            await action.waitForDocumentLoad();
            res = await action.waitForDisplayed(this.titleInput);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "createResourceBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_replaceBtnBand: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.replaceBtnBand);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " replaceBtnBand is clicked");
            await action.waitForDisplayed(this.cancelBtn);
            res = await this.getData_resourceDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "replaceBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_pasteLinkInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.pasteLinkInput, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in pasteLinkInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in pasteLinkInput", 'error');
        }
        return res;
    },

    set_titleInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.titleInput, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in titleInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in titleInput", 'error');
        }
        return res;
    },

    set_descriptionInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.descriptionInput, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in descriptionInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in descriptionInput", 'error');
        }
        return res;
    },

    set_durationInput: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.durationInput, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in durationInput");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in durationInput", 'error');
        }
        return res;
    },

    uploadFile: async function (path) {
        await logger.logInto((await stackTrace.get()));
        let res;
        res = await action.uploadFile(path);
        if ((typeof res) === 'string') {
            res = await action.addValue(this.uploadResourceBtn, res);
            if (true == res) {
                await logger.logInto(await stackTrace.get(), "File uploaded");
                res = await action.waitForDisplayed(this.createResourceBtn);
            } else {
                await logger.logInto(await stackTrace.get(), res + "error in uploading file", 'error');
            }
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "error in uploading file", 'error');
        }
        return res;
    },
}

