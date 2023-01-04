"use strict";
var voicePlayer = require('../../pages/engageExperienceApp/voicePlayer.page.js');
var sts;

module.exports = {

    //Validate clicking on Record button
    ENG_ITEM_VOICE_TC_1: async function (testdata) {
        sts = await voicePlayer.click_recordBtn();
        await assertion.assertEqual(sts, true, "recordBtn status mismatch");
        await browser.pause(1000);
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assert(await sts.recordingTxt.includes(testdata.recordingTxt), "recordingTxt status mismatch");
        await assertion.assertEqual(sts.recordingBtn, testdata.recordingBtn, "recordingBtn value mismatch.");
        await assertion.assertEqual(sts.pausedTxt, null, "pausedTxt value mismatch.");
        await assertion.assertEqual(sts.rerecordBtn, testdata.rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, testdata.doneBtn, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, null, "continueBtn value mismatch.");
        await assertion.assertEqual(sts.remainingTimeTxt, null, "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

    //Validate clicking on Pause button
    ENG_ITEM_VOICE_TC_2: async function (testdata) {
        sts = await voicePlayer.click_recordingBtn();
        await assertion.assertEqual(sts, true, "recordingBtn are not Clicked");
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assertEqual(sts.recordingTxt, null, "recordingTxt value mismatch.");
        await assertion.assertEqual(sts.recordingBtn, null, "recordingBtn value mismatch.");
        await assertion.assert(await sts.pausedTxt.includes(testdata.recordingTxt), "pausedTxt status mismatch");
        await assertion.assertEqual(sts.rerecordBtn, testdata.rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, testdata.doneBtn, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, testdata.continueBtn, "continueBtn value mismatch.");
        await assertion.assertEqual(sts.remainingTimeTxt, null, "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

    //Validate clicking on Continue button
    ENG_ITEM_VOICE_TC_3: async function (testdata) {
        sts = await voicePlayer.click_continueBtn();
        await assertion.assertEqual(sts, true, "continueBtn are not Clicked");
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assert(await sts.recordingTxt.includes(testdata[0].recordingTxt), "recordingTxt status mismatch");
        await assertion.assertEqual(sts.recordingBtn, testdata[0].recordingBtn, "recordingBtn value mismatch.");
        await assertion.assertEqual(sts.pausedTxt, null, "pausedTxt value mismatch.");
        await assertion.assertEqual(sts.rerecordBtn, testdata[0].rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, testdata[0].doneBtn, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, null, "continueBtn value mismatch.");
        if (sts.remainingTimeTxt)
            await assertion.assert(await sts.remainingTimeTxt.includes(testdata[1]), "remainingTimeTxt status mismatch");
        else
            await assertion.assertEqual(sts.remainingTimeTxt, testdata[1], "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

    //Validate the countdown starts for the last 15 seconds
    ENG_ITEM_VOICE_TC_4: async function (testdata) {
        await browser.pause(15000);
        sts = await voicePlayer.click_recordingBtn();
        await assertion.assertEqual(sts, true, "recordingBtn are not Clicked");
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assertEqual(sts.recordingTxt, null, "recordingTxt value mismatch.");
        await assertion.assertEqual(sts.recordingBtn, null, "recordingBtn value mismatch.");
        await assertion.assert(await sts.pausedTxt.includes(testdata.recordingTxt), "pausedTxt status mismatch");
        await assertion.assertEqual(sts.rerecordBtn, testdata.rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, testdata.doneBtn, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, testdata.continueBtn, "continueBtn value mismatch.");
        await assertion.assert(await sts.remainingTimeTxt.includes(testdata.remainingTimeTxt[1]), "remainingTimeTxt status mismatch");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

    //Validate the scenario when recording time limit is reached
    ENG_ITEM_VOICE_TC_5: async function (testdata) {
        await browser.pause(15000);
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assertEqual(sts.recordingTxt, null, "recordingTxt value mismatch.");
        await assertion.assertEqual(sts.recordingBtn, null, "recordingBtn value mismatch.");
        await assertion.assertEqual(sts.pausedTxt, null, "pausedTxt value mismatch.");
        await assertion.assertEqual(sts.rerecordBtn, testdata.rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, testdata.doneBtn, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, null, "continueBtn value mismatch.");
        await assertion.assertEqual(sts.remainingTimeTxt, null, "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, testdata.limitInfoTxt, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, testdata.restartInfoTxt, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

    //Validate clicking on Done button after time limit is reached
    ENG_ITEM_VOICE_TC_7: async function (testdata) {
        sts = await voicePlayer.click_doneBtn();
        await assertion.assertEqual(sts, testdata.snackbarTxt, "doneBtn are not Clicked");
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, null, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, null, "recordBtn value mismatch.");
        await assertion.assertEqual(sts.recordingTxt, null, "recordingTxt value mismatch.");
        await assertion.assertEqual(sts.recordingBtn, null, "recordingBtn value mismatch.");
        await assertion.assertEqual(sts.pausedTxt, null, "pausedTxt value mismatch.");
        await assertion.assertEqual(sts.rerecordBtn, testdata.rerecordBtn, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, null, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, null, "continueBtn value mismatch.");
        await assertion.assertEqual(sts.remainingTimeTxt, null, "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, testdata.previewTxt, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, true, "audioPlayerExists value mismatch.");
    },

    //Validate clicking on Re-record button
    ENG_ITEM_VOICE_TC_10: async function (testdata) {
        sts = await voicePlayer.click_rerecordBtn();
        await assertion.assertEqual(sts.dialogHeading, testdata.dialogHeading, "dialogHeading text mismatch");
        await assertion.assertEqual(sts.dialogContent, testdata.dialogContent, "dialogContent text mismatch");
        await assertion.assertEqual(sts.dialogCancelBtn, testdata.dialogCancelBtn, "dialogCancelBtn text mismatch");
        await assertion.assertEqual(sts.dialogAcceptBtn, testdata.dialogAcceptBtn, "dialogAcceptBtn text mismatch");
    },

    //Validate clicking on Re-record dialog 'No' button
    ENG_ITEM_VOICE_TC_11: async function () {
        sts = await voicePlayer.click_dialogCancelBtn();
        await assertion.assertEqual(sts, true, "click_dialogCancelBtn status mismatch");
    },

    //Validate clicking on Re-record dialog 'Yes' button
    ENG_ITEM_VOICE_TC_12: async function (testdata) {
        sts = await voicePlayer.click_dialogAcceptBtn();
        await assertion.assertEqual(sts, true, "click_dialogAcceptBtn status mismatch");
        sts = await voicePlayer.getData_voicePlayer();
        await assertion.assertEqual(sts.recordTxt, testdata.recordTxt, "recordTxt value mismatch.");
        await assertion.assertEqual(sts.recordBtn, testdata.recordBtn, "recordBtn value mismatch.");
        await assertion.assertEqual(sts.recordingTxt, null, "recordingTxt value mismatch.");
        await assertion.assertEqual(sts.recordingBtn, null, "recordingBtn value mismatch.");
        await assertion.assertEqual(sts.pausedTxt, null, "pausedTxt value mismatch.");
        await assertion.assertEqual(sts.rerecordBtn, null, "rerecordBtn value mismatch.");
        await assertion.assertEqual(sts.doneBtn, null, "doneBtn value mismatch.");
        await assertion.assertEqual(sts.continueBtn, null, "continueBtn value mismatch.");
        await assertion.assertEqual(sts.remainingTimeTxt, null, "remainingTimeTxt value mismatch.");
        await assertion.assertEqual(sts.previewTxt, null, "previewTxt value mismatch.");
        await assertion.assertEqual(sts.limitInfoTxt, null, "limitInfoTxt value mismatch.");
        await assertion.assertEqual(sts.restartInfoTxt, null, "restartInfoTxt value mismatch.");
        await assertion.assertEqual(sts.audioPlayerExists, null, "audioPlayerExists value mismatch.");
    },

}