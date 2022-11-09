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
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    ENG_ICCL_TC_4: async function (testdata) {
        sts = await library.click_viewAllMaterialsBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        await assertion.assertEqual(sts.appShell.header, true, "Page header status mismatch");
    },

    ENG_ICCL_TC_5: async function (testdata) {
        sts = await library.click_materialCard();
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
    },

    ENG_ICCL_TC_6: async function (testdata) {
        sts = await library.click_editDraftBtn();
        await assertion.assertEqual(sts, true, "editDraftBtn are not Clicked");
    },

    ENG_ICCL_TC_7: async function (testdata) {
        sts = await library.click_contextMenuBtn();
        await assertion.assertEqual(sts, true, "contextMenuBtn are not Clicked");
    },

    ENG_ICCL_TC_8: async function (testdata) {
        sts = await library.click_addToClassBtn();
        await assertion.assertEqual(sts, true, "addToClassBtn are not Clicked");
    },

    ENG_ICCL_TC_9: async function (testdata) {
        sts = await library.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
    },

    ENG_ICCL_TC_10: async function (testdata) {
        sts = await library.click_duplicateBtn();
        await assertion.assertEqual(sts, true, "duplicateBtn are not Clicked");
    },

    ENG_ICCL_TC_11: async function (testdata) {
        sts = await library.click_deleteBtn();
        await assertion.assertEqual(sts, true, "deleteBtn are not Clicked");
    },

    ENG_ICCL_TC_12: async function (testdata) {
        sts = await library.click_editBtn();
        await assertion.assertEqual(sts, true, "editBtn are not Clicked");
    },

    ENG_ICCL_TC_13: async function (testdata) {
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

    ENG_ICCL_TC_14: async function (testdata) {
        sts = await library.getData_quizCard(testdata);
        await assertion.assertEqual(sts.materialCard, testdata.materialCard, "materialCard Values is not as expected.");
        await assertion.assertEqual(sts.quizTitleTxt, testdata.quizTitleTxt, "quizTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.quizTypeTxt, testdata.quizTypeTxt, "quizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts.draftPillTxt, testdata.draftPillTxt, "draftPillTxt Values is not as expected.");
        await assertion.assertEqual(sts.editDraftBtn, testdata.editDraftBtn, "editDraftBtn Values is not as expected.");
        await assertion.assertEqual(sts.contextMenuBtn, testdata.contextMenuBtn, "contextMenuBtn Values is not as expected.");
        await assertion.assertEqual(sts.addToClassBtn, testdata.addToClassBtn, "addToClassBtn Values is not as expected.");
        await assertion.assertEqual(sts.bookImg, true, "bookImg Values is not as expected.");
    },

    ENG_ICCL_TC_15: async function (testdata) {
        sts = await library.getData_libraryContextMenu(testdata);
        await assertion.assertEqual(sts.previewBtn, testdata.previewBtn, "previewBtn Values is not as expected.");
        await assertion.assertEqual(sts.duplicateBtn, testdata.duplicateBtn, "duplicateBtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteBtn, testdata.deleteBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.editBtn, testdata.editBtn, "editBtn Values is not as expected.");
    },

}