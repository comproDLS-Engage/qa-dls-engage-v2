"use strict";
var library = require('../../pages/engageExperienceApp/library.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {
    ENG_ICCL_TC_1: async function () {
        sts = await library.click_blankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        // await assertion.assertEqual(sts.appShell.header, true, "Page header status mismatch");
    },

    ENG_ICCL_TC_2: async function (testdata) {
        sts = await library.click_blankSurveyBtn();
        await assertion.assertEqual(sts, true, "blankSurveyBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    ENG_ICCL_TC_3: async function (testdata) {
        sts = await library.click_newResourceBtn();
        await assertion.assertEqual(sts, true, "newResourceBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        console.log(sts);
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    //Validate the scenario when no material is added in the Library for new user
    ENG_ICCL_TC_4: async function (testdata) {
        sts = await library.getData_libraryPage(testdata);
        await assertion.assertEqual(sts.libraryTitleTxt, testdata.libraryTitleTxt, "libraryTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.librarySubtitleTxt, testdata.librarySubtitleTxt, "librarySubtitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.createMaterialsTxt, testdata.createMaterialsTxt, "createMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.blankQuizBtn, testdata.blankQuizBtn, "blankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.blankSurveyBtn, testdata.blankSurveyBtn, "blankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.newResourceBtn, testdata.newResourceBtn, "newResourceBtn Values is not as expected.");
        await assertion.assertEqual(sts.recentMaterialsTxt, testdata.recentMaterialsTxt, "recentMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.pastDaysTxt, testdata.pastDaysTxt, "pastDaysTxt Values is not as expected.");
        await assertion.assertEqual(sts.viewAllMaterialsBtn, testdata.viewAllMaterialsBtn, "viewAllMaterialsBtn Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt, "noMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt, "noMaterialSubtitleTxt Values is not as expected.");
    },

    //Validate clicking on View All Materials launch the My Materials page
    ENG_ICCL_TC_6: async function () {
        sts = await library.click_viewAllMaterialsBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
    },

    //Validate the card for Draft Material
    ENG_ICCL_TC_11: async function (testdata) {
        sts = await library.getData_quizCard();
        await assertion.assertEqual(sts[0].quizTitleTxt, testdata[0], "quizTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].quizTypeTxt, testdata[1].quizTypeTxt, "quizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].draftPillTxt, testdata[1].draftPillTxt, "draftPillTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].editDraftBtn, testdata[1].editDraftBtn, "editDraftBtn Values is not as expected.");
        await assertion.assertEqual(sts[0].contextMenuBtn, true, "contextMenuBtn Values is not as expected.");
        await assertion.assertEqual(sts[0].bookImg, false, "bookImg Values is not as expected.");
        await assertion.assert(sts[0].quizTime.includes(testdata[1].modifiedTxt, "modifiedTxt values is not as expected"));
    },

    //Validate the card for Finalized Material
    ENG_ICCL_TC_12: async function (testdata) {
        sts = await library.getData_quizCard();
        await assertion.assertEqual(sts[0].quizTitleTxt, testdata[0], "quizTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].quizTypeTxt, testdata[1].quizTypeTxt, "quizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].addToClassBtn, testdata[1].addToClassBtn, "addToClassBtn Values is not as expected.");
        await assertion.assertEqual(sts[0].contextMenuBtn, true, "contextMenuBtn Values is not as expected.");
        await assertion.assertEqual(sts[0].bookImg, false, "bookImg Values is not as expected.");
        await assertion.assert(sts[0].quizTime.includes(testdata[1].modifiedTxt, "modifiedTxt values is not as expected"));
    },

    //Validate clicking on Draft Material Card
    ENG_ICCL_TC_13: async function (testdata) {
        sts = await library.click_materialCard(testdata);
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
    },

    //Validate clicking on "Edit Draft" button
    ENG_ICCL_TC_14: async function (testdata) {
        sts = await library.click_editDraftBtn(testdata);
        await assertion.assertEqual(sts, true, "editDraftBtn are not Clicked");
    },


    //Validate clicking on Finalized Material Card
    ENG_ICCL_TC_15: async function (testdata) {
        sts = await library.click_materialCard(testdata);
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
    },

    //Validate clicking on Ellipses on Draft Material card
    ENG_ICCL_TC_16: async function (testdata) {
        sts = await library.click_contextMenuBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "contextMenuBtn are not Clicked");
        sts = await library.getData_libraryContextMenu();
        await assertion.assertEqual(sts.previewBtn, testdata[1].previewBtn, "previewBtn Values is not as expected.");
        await assertion.assertEqual(sts.duplicateBtn, testdata[1].duplicateBtn, "duplicateBtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteBtn, testdata[1].deleteBtn, "deleteBtn Values is not as expected.");
    },

    //Validate clicking on Ellipses on Finalized Material card
    ENG_ICCL_TC_17: async function (testdata) {
        sts = await library.click_contextMenuBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "contextMenuBtn are not Clicked");
        sts = await library.getData_libraryContextMenu();
        await assertion.assertEqual(sts.duplicateBtn, testdata[1].duplicateBtn, "duplicateBtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteBtn, testdata[1].deleteBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.editBtn, testdata[1].editBtn, "editBtn Values is not as expected.");

    },

    //Validate clicking on Preview button in Ellipses for Draft quiz on Library page
    ENG_ICCL_TC_18: async function (testdata) {
        sts = await library.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
    },

    //Validate clicking on Add to Class button on Material card from Library page
    ENG_ICCL_TC_24: async function (testdata) {
        sts = await library.click_addToClassBtn(testdata);
        await assertion.assertEqual(sts, true, "addToClassBtn are not Clicked");
    },

    //Validate clicking on Edit button in Ellipses for Published quiz on Library page
    ENG_ICCL_TC_26: async function (testdata) {
        sts = await library.click_editBtn();
        await assertion.assertEqual(sts, true, "editBtn are not Clicked");
    },

    //Validate clicking on Duplicate button in Ellipses for Published quiz on Library page
    ENG_ICCL_TC_27: async function (testdata) {
        sts = await library.click_duplicateBtn();
        await assertion.assertEqual(sts, true, "duplicateBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        console.log(sts);
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    //Validate clicking on Duplicate button in Ellipses for Draft quiz on Library page
    ENG_ICCL_TC_28: async function (testdata) {
        sts = await library.click_duplicateBtn();
        await assertion.assertEqual(sts, true, "duplicateBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        console.log(sts);
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },


    ENG_ICCL_TC_11x: async function (testdata) {
        sts = await library.click_deleteBtn();
        await assertion.assertEqual(sts, true, "deleteBtn are not Clicked");
    }

}