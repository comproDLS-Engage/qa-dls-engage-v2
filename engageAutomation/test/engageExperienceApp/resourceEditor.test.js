"use strict";
var resourceEditor = require('../../pages/engageExperienceApp/resourceEditor.page.js');
var sts;

module.exports = {

    //Validate the content of New Resource dialog
    ENG_ICCR_TC_1: async function (testdata) {
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[0], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, testdata.pasteALinkTitle, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, testdata.resourceLinkLbl, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, "", "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, testdata.linksIncludeLbl[0], "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata.dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata.dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata.dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata.browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata.dropLimitLbl[0], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Cross icon in New Resource dialog
    ENG_ICCR_TC_2: async function () {
        sts = await resourceEditor.click_cancelBtn();
        await assertion.assertEqual(sts, true, "cancelBtn are not Clicked");
    },

    //Validate user is able to paste a link (youtube, vimeo or other external links like pdf) in Resource Link textbox
    ENG_ICCR_TC_3: async function (testdata) {
        sts = await resourceEditor.set_pasteLinkInput(testdata[0]);
        await assertion.assertEqual(sts, true, "pasteLinkInput values are not set");
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.enterBtn, testdata[1].enterBtn, "enterBtn value mismatch");
    },

    //Validate when user enter a valid link in Resource Link textbox and Click Enter button
    ENG_ICCR_TC_5: async function () {
        sts = await resourceEditor.click_enterBtn();
        await assertion.assertEqual(sts, true, "click_enterBtn are not Clicked");
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
    },

    //Validate when user enter invalid link in Resource Link textbox and Click Enter button
    ENG_ICCR_TC_6: async function (testdata) {
        sts = await resourceEditor.click_enterBtn();
        await assertion.assertEqual(sts, true, "click_enterBtn are not Clicked");
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[0], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, testdata.invalidUrlTxt, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate when user upload the pdf resource file from the local machine
    ENG_ICCR_TC_7: async function (testdata) {
        sts = await resourceEditor.uploadFile(testdata);
        await assertion.assertEqual(sts, true, "click_enterBtn are not Clicked");
    },

    //Validate when user upload the word resource file from the local machine
    ENG_ICCR_TC_8: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate when user upload the ppt resource file from the local machine
    ENG_ICCR_TC_9: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate when user upload the excel resource file from the local machine
    ENG_ICCR_TC_10: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate when user upload the zip resource file from the local machine
    ENG_ICCR_TC_11: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate when user upload the mp4 resource file from the local machine
    ENG_ICCR_TC_12: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate when user upload the mp3 resource file from the local machine
    ENG_ICCR_TC_13: async function (testdata) {
        await this.ENG_ICCR_TC_7(testdata);
    },

    //Validate the content of New Resource dialog after pasting the link
    ENG_ICCR_TC_15: async function (testdata) {
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.newResourceTitle, testdata[0].newResourceTitle[0], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata[0].cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, null, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, null, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, null, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, null, "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, null, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, null, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, null, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, null, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, null, "dropLimitLbl value mismatch");
        await assertion.assert(sts.resourceType.includes(testdata[1].resourceType), "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, testdata[1].resourceName, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, testdata[0].replaceBtn[1], "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, testdata[0].resourceGuidelinesTxt, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, testdata[0].createResourceBtn[0], "createResourceBtn value mismatch");
    },

    //Validate the content of New Resource dialog after uploading the file
    ENG_ICCR_TC_16: async function (testdata) {
        sts = await resourceEditor.getData_resourceDialog();
        await assertion.assertEqual(sts.newResourceTitle, testdata[0].newResourceTitle[0], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata[0].cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, null, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, null, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, null, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, null, "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, null, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, null, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, null, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, null, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, null, "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, testdata[1].resourceType, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, testdata[1].resourceName, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, testdata[0].sizeLbl, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, testdata.replaceBtn[0], "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, testdata[0].resourceGuidelinesTxt, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, testdata[0].createResourceBtn[0], "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace button in New Resource dialog
    ENG_ICCR_TC_17: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts, true, "replaceBtn are not Clicked");
    },

    //Validate clicking on Create Resource button
    ENG_ICCR_TC_19: async function () {
        sts = await resourceEditor.click_createResourceBtn();
        await assertion.assertEqual(sts, true, "createResourceBtn are not Clicked");
    },

    //Validate content of the Resource Editor page
    ENG_ICCR_TC_20: async function (testdata) {
        sts = await resourceEditor.getData_resourceEditorPage();
        await assertion.assertEqual(sts.resourceType, testdata[1].resourceType, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, testdata[1].resourceName, "resourceName value mismatch");
        await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize value mismatch");
        //await assertion.assert(sts.replaceBtn.includes(testdata[0].replaceBtn[2]), "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceTypeTitle, testdata[1].resourceTypeTitle, "resourceTypeTitle value mismatch");
        await assertion.assertEqual(sts.titleLbl, testdata[0].titleLbl, "titleLbl value mismatch");
        await assertion.assertEqual(sts.titleInput, testdata[1].resourceName, "titleInput value mismatch");
        await assertion.assertEqual(sts.descriptionLbl, testdata[0].descriptionLbl, "descriptionLbl value mismatch");
        await assertion.assertEqual(sts.descriptionInput, testdata[1].description, "descriptionInput value mismatch");
        await assertion.assertEqual(sts.durationInput, testdata[1].duration, "durationInput value mismatch");
        await assertion.assertEqual(sts.durationUnit, testdata[0].durationUnit, "durationUnit value mismatch");

        if (sts.resourceType == "Video" || sts.resourceType == "Audio") {
            await assertion.assertEqual(sts.durationLbl, testdata[0].durationLbl[0], "durationLbl value mismatch");
            await assertion.assertEqual(sts.fluencyTxt, null, "fluencyTxt value mismatch");
            await assertion.assertEqual(sts.learnMoreLink, null, "learnMoreLink value mismatch");
            await assertion.assertEqual(sts.estTimeLink, null, "estTimeLink value mismatch");
            await assertion.assertEqual(sts.sizeLbl, testdata[0].sizeLbl, "sizeLbl value mismatch");
        }
        else {
            await assertion.assertEqual(sts.durationLbl, testdata[0].durationLbl[1], "durationLbl value mismatch");
            await assertion.assertEqual(sts.fluencyTxt, testdata[0].fluencyTxt, "fluencyTxt value mismatch");
            await assertion.assertEqual(sts.learnMoreLink, testdata[0].learnMoreLink, "learnMoreLink value mismatch");
            await assertion.assertEqual(sts.estTimeLink, testdata[0].estTimeLink, "estTimeLink value mismatch");
            await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        }
    },

    //Validate user is able to add title in Resource editor
    ENG_ICCR_TC_21: async function (testdata) {
        sts = await resourceEditor.set_titleInput(testdata);
        await assertion.assertEqual(sts, true, "titleInput values are not set");
    },

    //Validate user is able to add description in Resource editor
    ENG_ICCR_TC_22: async function (testdata) {
        sts = await resourceEditor.set_descriptionInput(testdata);
        await assertion.assertEqual(sts, true, "descriptionInput values are not set");
    },

    //Validate user is able to add duration or time in Resource editor
    ENG_ICCR_TC_23: async function (testdata) {
        sts = await resourceEditor.set_durationInput(testdata);
        await assertion.assertEqual(sts, true, "durationInput values are not set");
    },

    //Validate clicking on Replace Link button in Resource editor
    ENG_ICCR_TC_24: async function (testdata) {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[1], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, testdata.pasteALinkTitle, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, testdata.resourceLinkLbl, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, testdata.pasteLinkInput, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, testdata.linksIncludeLbl[1], "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, null, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, null, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, null, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, null, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, null, "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace PDF button in Resource editor
    ENG_ICCR_TC_25: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[2], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, testdata.pasteALinkTitle, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, testdata.resourceLinkLbl, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, testdata.pasteLinkInput, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, testdata.linksIncludeLbl[2], "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata.dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata.dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata.dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata.browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata.dropLimitLbl[1], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace Document button in Resource editor for word or ppt or xlsx
    ENG_ICCR_TC_26: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata[1], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata[0].cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, null, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, null, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, null, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, null, "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata[0].dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata[0].dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata[0].dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata[0].browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata[2], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace Zip button in Resource editor
    ENG_ICCR_TC_27: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[4], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, null, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, null, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, null, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, null, "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata.dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata.dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata.dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata.browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata.dropLimitLbl[5], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace Video button in Resource editor
    ENG_ICCR_TC_28: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[5], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, testdata.pasteALinkTitle, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, testdata.resourceLinkLbl, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, testdata.pasteLinkInput, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, testdata.linksIncludeLbl[3], "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata.dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata.dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata.dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata.browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata.dropLimitLbl[6], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },

    //Validate clicking on Replace Video button in Resource editor
    ENG_ICCR_TC_29: async function () {
        sts = await resourceEditor.click_replaceBtn();
        await assertion.assertEqual(sts.newResourceTitle, testdata.newResourceTitle[6], "newResourceTitle value mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn value mismatch");
        await assertion.assertEqual(sts.pasteALinkTitle, testdata.pasteALinkTitle, "pasteALinkTitle value mismatch");
        await assertion.assertEqual(sts.resourceLinkLbl, testdata.resourceLinkLbl, "resourceLinkLbl value mismatch");
        await assertion.assertEqual(sts.pasteLinkInput, testdata.pasteLinkInput, "pasteLinkInput value mismatch");
        await assertion.assertEqual(sts.linksIncludeLbl, testdata.linksIncludeLbl[4], "linksIncludeLbl value mismatch");
        await assertion.assertEqual(sts.dropAreaTitle, testdata.dropAreaTitle, "dropAreaTitle value mismatch");
        await assertion.assertEqual(sts.dropAreaSubtitle, testdata.dropAreaSubtitle, "dropAreaSubtitle value mismatch");
        await assertion.assertEqual(sts.dropAreaOrLbl, testdata.dropAreaOrLbl, "dropAreaOrLbl value mismatch");
        await assertion.assertEqual(sts.enterBtn, null, "enterBtn value mismatch");
        await assertion.assertEqual(sts.invalidUrlTxt, null, "invalidUrlTxt value mismatch");
        await assertion.assertEqual(sts.browseBtn, testdata.browseBtn, "browseBtn value mismatch");
        await assertion.assertEqual(sts.dropLimitLbl, testdata.dropLimitLbl[7], "dropLimitLbl value mismatch");
        await assertion.assertEqual(sts.resourceType, null, "resourceType value mismatch");
        await assertion.assertEqual(sts.resourceName, null, "resourceName value mismatch");
        await assertion.assertEqual(sts.sizeLbl, null, "sizeLbl value mismatch");
        await assertion.assertEqual(sts.fileSize, null, "fileSize value mismatch");
        await assertion.assertEqual(sts.replaceBtn, null, "replaceBtn value mismatch");
        await assertion.assertEqual(sts.resourceGuidelinesTxt, null, "resourceGuidelinesTxt value mismatch");
        await assertion.assertEqual(sts.createResourceBtn, null, "createResourceBtn value mismatch");
    },
}