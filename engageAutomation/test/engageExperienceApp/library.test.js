"use strict";
var library = require('../../pages/engageExperienceApp/library.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

    //Validate the scenario when no material is added in the Library for new user
    
    //Validate clicking on Blank Quiz button on Library page
    ENG_ICC_TC_22: async function () {
        sts = await library.click_blankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        // await assertion.assertEqual(sts.appShell.header, true, "Page header status mismatch");
    },

    //Validate clicking on Blank resource button on Library page
    ENG_ICC_TC_26: async function (testdata) {
        sts = await library.click_blankSurveyBtn();
        await assertion.assertEqual(sts, true, "blankSurveyBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    //Validate clicking on New Resource button on Library Page
    ENG_ICC_TC_27: async function (testdata) {
        sts = await library.click_newResourceBtn();
        await assertion.assertEqual(sts, true, "newResourceBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    ENG_LIBR_TC_4: async function (testdata) {
        sts = await library.click_viewAllBtn();
        await assertion.assertEqual(sts.myMaterialsTxt, tesdata.myMaterialsTxt, "myMaterialsTxt text mismatch");
        await assertion.assertEqual(sts.addNewMaterialBtn, tesdata.addNewMaterialBtn, "addNewMaterialBtn text mismatch");
        await assertion.assertEqual(sts.allTab, tesdata.allTab, "allTab text mismatch");
        await assertion.assertEqual(sts.draftsTab, tesdata.draftsTab, "draftsTab text mismatch");
        await assertion.assertEqual(sts.publishedTab, tesdata.publishedTab, "publishedTab text mismatch");
        await assertion.assertEqual(sts.searchResult, tesdata.searchResult, "searchResult text mismatch");
        await assertion.assertEqual(sts.searchResultSubCount, tesdata.searchResultSubCount, "searchResultSubCount text mismatch");
        await assertion.assertEqual(sts.materialLabel, tesdata.materialLabel, "materialLabel text mismatch");
        await assertion.assertEqual(sts.typeLabel, tesdata.typeLabel, "typeLabel text mismatch");
        await assertion.assertEqual(sts.modifiedLabel, tesdata.modifiedLabel, "modifiedLabel text mismatch");
        await assertion.assertEqual(sts.searchTextBox, tesdata.searchTextBox, "searchTextBox text mismatch");
        await assertion.assertEqual(sts.materialsNoMaterialTitleTxt, tesdata.materialsNoMaterialTitleTxt, "materialsNoMaterialTitleTxt text mismatch");
        await assertion.assertEqual(sts.materialsNoMaterialSubtitleTxt, tesdata.materialsNoMaterialSubtitleTxt, "materialsNoMaterialSubtitleTxt text mismatch");
    },

    ENG_LIBR_TC_5: async function (testdata) {
        sts = await library.click_materialsPreviewBtn();
        await assertion.assertEqual(sts, true, "materialsPreviewBtn are not Clicked");
    },

    ENG_LIBR_TC_6: async function (testdata) {
        sts = await library.click_materialsDeleteBtn();
        await assertion.assertEqual(sts, true, "materialsDeleteBtn are not Clicked");
    },

    ENG_LIBR_TC_7: async function (testdata) {
        sts = await library.click_materialCard();
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
    },

    ENG_LIBR_TC_8: async function (testdata) {
        sts = await library.click_editDraftBtn();
        await assertion.assertEqual(sts, true, "editDraftBtn are not Clicked");
    },

    ENG_LIBR_TC_9: async function (testdata) {
        sts = await library.click_contextMenuBtn();
        await assertion.assertEqual(sts, true, "contextMenuBtn are not Clicked");
    },

    ENG_LIBR_TC_10: async function (testdata) {
        sts = await library.click_addToClassBtn();
        await assertion.assertEqual(sts, true, "addToClassBtn are not Clicked");
    },

    ENG_LIBR_TC_11: async function (testdata) {
        sts = await library.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
    },

    ENG_LIBR_TC_12: async function (testdata) {
        sts = await library.click_duplicateBtn();
        await assertion.assertEqual(sts, true, "duplicateBtn are not Clicked");
    },

    ENG_LIBR_TC_13: async function (testdata) {
        sts = await library.click_deleteBtn();
        await assertion.assertEqual(sts, true, "deleteBtn are not Clicked");
    },

    ENG_LIBR_TC_14: async function (testdata) {
        sts = await library.click_editBtn();
        await assertion.assertEqual(sts, true, "editBtn are not Clicked");
    },

    ENG_LIBR_TC_15: async function (testdata) {
        sts = await library.click_addNewMaterialBtn();
        await assertion.assertEqual(sts, true, "addNewMaterialBtn are not Clicked");
    },

    ENG_LIBR_TC_16: async function (testdata) {
        sts = await library.click_allTab();
        await assertion.assertEqual(sts, true, "allTab are not Clicked");
    },

    ENG_LIBR_TC_17: async function (testdata) {
        sts = await library.click_draftsTab();
        await assertion.assertEqual(sts, true, "draftsTab are not Clicked");
    },

    ENG_LIBR_TC_18: async function (testdata) {
        sts = await library.click_publishedTab();
        await assertion.assertEqual(sts, true, "publishedTab are not Clicked");
    },

    ENG_LIBR_TC_19: async function (testdata) {
        sts = await library.click_quizRow();
        await assertion.assertEqual(sts, true, "quizRow are not Clicked");
    },

    ENG_LIBR_TC_20: async function (testdata) {
        sts = await library.click_materialsContextMenuBtn();
        await assertion.assertEqual(sts, true, "materialsContextMenuBtn are not Clicked");
    },

    ENG_LIBR_TC_21: async function (testdata) {
        sts = await library.set_searchTextBox(); await assertion.assertEqual(sts, true, "searchTextBox values are not set");

    },

    ENG_LIBR_TC_22: async function (testdata) {
        sts = await library.click_materialsBlankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        await assertion.assertEqual(sts.appShell.header, true, "Page header status mismatch");
    },

    ENG_LIBR_TC_23: async function (testdata) {
        sts = await library.click_materialsBlankSurveyBtn();
        await assertion.assertEqual(sts, true, "materialsBlankSurveyBtn are not Clicked");
    },

    ENG_LIBR_TC_24: async function (testdata) {
        sts = await library.click_materialsNewResourceBtn();
        await assertion.assertEqual(sts, true, "materialsNewResourceBtn are not Clicked");
    },

    ENG_LIBR_TC_25: async function (testdata) {
        sts = await library.getData_libraryPage(testdata);
        await assertion.assertEqual(sts.libraryTitleTxt, testdata.libraryTitleTxt, "libraryTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.librarySubtitleTxt, testdata.librarySubtitleTxt, "librarySubtitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.createMaterialsTxt, testdata.createMaterialsTxt, "createMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.blankQuizBtn, testdata.blankQuizBtn, "blankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.blankSurveyBtn, testdata.blankSurveyBtn, "blankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.newResourceBtn, testdata.newResourceBtn, "newResourceBtn Values is not as expected.");
        await assertion.assertEqual(sts.recentMaterialsTxt, testdata.recentMaterialsTxt, "recentMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.pastDaysTxt, testdata.pastDaysTxt, "pastDaysTxt Values is not as expected.");
        await assertion.assertEqual(sts.viewAllBtn, testdata.viewAllBtn, "viewAllBtn Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt, "noMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt, "noMaterialSubtitleTxt Values is not as expected.");
    },

    ENG_LIBR_TC_26: async function (testdata) {
        sts = await library.getData_myMaterialsContextMenu(testdata);
        await assertion.assertEqual(sts.materialsPreviewBtn, testdata.materialsPreviewBtn, "materialsPreviewBtn Values is not as expected.");
        await assertion.assertEqual(sts.materialsDeleteBtn, testdata.materialsDeleteBtn, "materialsDeleteBtn Values is not as expected.");
    },

    ENG_LIBR_TC_27: async function (testdata) {
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

    ENG_LIBR_TC_28: async function (testdata) {
        sts = await library.getData_libraryContextMenu(testdata);
        await assertion.assertEqual(sts.previewBtn, testdata.previewBtn, "previewBtn Values is not as expected.");
        await assertion.assertEqual(sts.duplicateBtn, testdata.duplicateBtn, "duplicateBtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteBtn, testdata.deleteBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.editBtn, testdata.editBtn, "editBtn Values is not as expected.");
    },

    ENG_LIBR_TC_29: async function (testdata) {
        sts = await library.getData_myMaterialsPage(testdata);
        await assertion.assertEqual(sts.myMaterialsTxt, testdata.myMaterialsTxt, "myMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.addNewMaterialBtn, testdata.addNewMaterialBtn, "addNewMaterialBtn Values is not as expected.");
        await assertion.assertEqual(sts.allTab, testdata.allTab, "allTab Values is not as expected.");
        await assertion.assertEqual(sts.draftsTab, testdata.draftsTab, "draftsTab Values is not as expected.");
        await assertion.assertEqual(sts.publishedTab, testdata.publishedTab, "publishedTab Values is not as expected.");
        await assertion.assertEqual(sts.searchResult, testdata.searchResult, "searchResult Values is not as expected.");
        await assertion.assertEqual(sts.searchResultSubCount, testdata.searchResultSubCount, "searchResultSubCount Values is not as expected.");
        await assertion.assertEqual(sts.materialLabel, testdata.materialLabel, "materialLabel Values is not as expected.");
        await assertion.assertEqual(sts.typeLabel, testdata.typeLabel, "typeLabel Values is not as expected.");
        await assertion.assertEqual(sts.modifiedLabel, testdata.modifiedLabel, "modifiedLabel Values is not as expected.");
        await assertion.assertEqual(sts.searchTextBox, testdata.searchTextBox, "searchTextBox Values is not as expected.");
        await assertion.assertEqual(sts.materialsNoMaterialTitleTxt, testdata.materialsNoMaterialTitleTxt, "materialsNoMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.materialsNoMaterialSubtitleTxt, testdata.materialsNoMaterialSubtitleTxt, "materialsNoMaterialSubtitleTxt Values is not as expected.");
    },

    ENG_LIBR_TC_30: async function (testdata) {
        sts = await library.getData_addMaterialContextMenu(testdata);
        await assertion.assertEqual(sts.createNewTxt, testdata.createNewTxt, "createNewTxt Values is not as expected.");
        await assertion.assertEqual(sts.materialsBlankQuizBtn, testdata.materialsBlankQuizBtn, "materialsBlankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.materialsBlankSurveyBtn, testdata.materialsBlankSurveyBtn, "materialsBlankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.materialsNewResourceBtn, testdata.materialsNewResourceBtn, "materialsNewResourceBtn Values is not as expected.");
    },

    ENG_LIBR_TC_31: async function (testdata) {
        sts = await library.getData_quizRow(testdata);
        await assertion.assertEqual(sts.quizRow, testdata.quizRow, "quizRow Values is not as expected.");
        await assertion.assertEqual(sts.materialsQuizTitleTxt, testdata.materialsQuizTitleTxt, "materialsQuizTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.materialsDraftPillTxt, testdata.materialsDraftPillTxt, "materialsDraftPillTxt Values is not as expected.");
        await assertion.assertEqual(sts.materialsQuizTypeTxt, testdata.materialsQuizTypeTxt, "materialsQuizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts.modifiedTime, testdata.modifiedTime, "modifiedTime Values is not as expected.");
        await assertion.assertEqual(sts.materialsContextMenuBtn, testdata.materialsContextMenuBtn, "materialsContextMenuBtn Values is not as expected.");
    },

}