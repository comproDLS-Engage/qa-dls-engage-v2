"use strict";
var myMaterials = require('../../pages/engageExperienceApp/myMaterials.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
const libraryEditorPage = require('../../pages/engageExperienceApp/libraryEditor.page');
var sts;

module.exports = {
    //Validate the All tabs when no material is present on My Materials page
    ENG_ICCM_TC_2: async function (testdata) {
        sts = await myMaterials.getData_myMaterialsPage(testdata);
        await assertion.assertEqual(sts.myMaterialsTxt, testdata.myMaterialsTxt, "myMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.addNewMaterialBtn, testdata.addNewMaterialBtn, "addNewMaterialBtn Values is not as expected.");
        await assertion.assertEqual(sts.allTab, testdata.allTab, "allTab Values is not as expected.");
        await assertion.assertEqual(sts.draftsTab, testdata.draftsTab, "draftsTab Values is not as expected.");
        await assertion.assertEqual(sts.publishedTab, testdata.publishedTab, "publishedTab Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt[0], "noMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt[0], "noMaterialSubtitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.blankQuizBtn, testdata.blankQuizBtn, "blankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.blankSurveyBtn, testdata.blankSurveyBtn, "blankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.newResourceBtn, testdata.newResourceBtn, "newResourceBtn Values is not as expected.");
    },

    //Validate the Draft tabs when no material is present on My Materials page
    ENG_ICCM_TC_3: async function (testdata) {
        sts = await myMaterials.click_draftsTab();
        await assertion.assertEqual(sts, true, "draftsTab are not Clicked");
        sts = await myMaterials.getData_myMaterialsPage(testdata);
        await assertion.assertEqual(sts.allTab, testdata.allTab, "allTab Values is not as expected.");
        await assertion.assertEqual(sts.draftsTab, testdata.draftsTab, "draftsTab Values is not as expected.");
        await assertion.assertEqual(sts.publishedTab, testdata.publishedTab, "publishedTab Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt[1], "noMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt[1], "noMaterialSubtitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.blankQuizBtn, testdata.blankQuizBtn, "blankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.blankSurveyBtn, testdata.blankSurveyBtn, "blankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.newResourceBtn, testdata.newResourceBtn, "newResourceBtn Values is not as expected.");
    },

    //Validate the Published tabs when no material is present on My Materials page
    ENG_ICCM_TC_4: async function (testdata) {
        sts = await myMaterials.click_publishedTab();
        await assertion.assertEqual(sts, true, "publishedTab are not Clicked");
        sts = await myMaterials.getData_myMaterialsPage(testdata);
        await assertion.assertEqual(sts.allTab, testdata.allTab, "allTab Values is not as expected.");
        await assertion.assertEqual(sts.draftsTab, testdata.draftsTab, "draftsTab Values is not as expected.");
        await assertion.assertEqual(sts.publishedTab, testdata.publishedTab, "publishedTab Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt[2], "noMaterialTitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt[2], "noMaterialSubtitleTxt Values is not as expected.");
        await assertion.assertEqual(sts.blankQuizBtn, null, "blankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.blankSurveyBtn, null, "blankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.newResourceBtn, null, "newResourceBtn Values is not as expected.");
    },

    //Validate clicking on "Blank Quiz" button when no item is present on My Material page
    ENG_ICCM_TC_5: async function (testdata) {
        sts = await myMaterials.click_blankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_blankQuizPage();
        await assertion.assertEqual(sts.quizHeaderIcon, true);
        await assertion.assertEqual(sts.quizHeaderName, testdata.quizHeaderName);
        await assertion.assertEqual(sts.savedtoLibrarylbl, testdata.savedtoLibrarylbl);
        await assertion.assertEqual(sts.draftlbl, testdata.draftlbl);
        await assertion.assertEqual(sts.pageHeader, testdata.pageHeader);
        await assertion.assertEqual(sts.pageSubHeader, testdata.pageSubHeader);
        await assertion.assertEqual(sts.multipleChoicetab, testdata.multipleChoicelbl);
        await assertion.assertEqual(sts.texttab, testdata.textChoicelbl);
        await assertion.assertEqual(sts.finishQuiz, testdata.finishQuiz);
    },


    //Validate clicking on "Add New Material" button on My Material page
    ENG_ICCM_TC_6: async function (testdata) {
        sts = await myMaterials.click_addNewMaterialBtn();
        await assertion.assertEqual(sts, true, "addNewMaterialBtn are not Clicked");
        sts = await myMaterials.getData_addMaterialContextMenu();
        await assertion.assertEqual(sts.createNewTxt, testdata.createNewTxt, "createNewTxt Values is not as expected.");
        await assertion.assertEqual(sts.menuBlankQuizBtn, testdata.menuBlankQuizBtn, "menuBlankQuizBtn Values is not as expected.");
        await assertion.assertEqual(sts.menuBlankSurveyBtn, testdata.menuBlankSurveyBtn, "menuBlankSurveyBtn Values is not as expected.");
        await assertion.assertEqual(sts.menuNewResourceBtn, testdata.menuNewResourceBtn, "menuNewResourceBtn Values is not as expected.");
    },

    //Validate clicking on "Blank Quiz" button from dropdown menu on My Material page
    ENG_ICCM_TC_7: async function (testdata) {
        sts = await myMaterials.click_menuBlankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_blankQuizPage();
        await assertion.assertEqual(sts.quizHeaderIcon, true);
        await assertion.assertEqual(sts.quizHeaderName, testdata.quizHeaderName);
        await assertion.assertEqual(sts.savedtoLibrarylbl, testdata.savedtoLibrarylbl);
        await assertion.assertEqual(sts.draftlbl, testdata.draftlbl);
        await assertion.assertEqual(sts.pageHeader, testdata.pageHeader);
        await assertion.assertEqual(sts.pageSubHeader, testdata.pageSubHeader);
        await assertion.assertEqual(sts.multipleChoicetab, testdata.multipleChoicelbl);
        await assertion.assertEqual(sts.texttab, testdata.textChoicelbl);
        await assertion.assertEqual(sts.finishQuiz, testdata.finishQuiz);
    },

    //Validate clicking on "Blank Survey" button from dropdown menu on My Material page
    ENG_ICCM_TC_8: async function (testdata) {
        sts = await myMaterials.click_menuBlankSurveyBtn();
        await assertion.assertEqual(sts, true, "menuBlankSurveyBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    //Validate clicking on "New Resource" button from dropdown menu on My Material page
    ENG_ICCM_TC_9: async function (testdata) {
        sts = await myMaterials.click_menuNewResourceBtn();
        await assertion.assertEqual(sts, true, "menuNewResourceBtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.featureNotAvailable_alert, "Snackbar message mismatch: " + sts);
    },

    //Validate the MyMaterials page when materials are present on the page
    ENG_ICCM_TC_10: async function (testdata) {
        sts = await myMaterials.click_allTab();
        await assertion.assertEqual(sts, true, "allTab are not Clicked");
        sts = await myMaterials.getData_myMaterialsPage();
        await assertion.assertEqual(sts.myMaterialsTxt, testdata.myMaterialsTxt, "myMaterialsTxt Values is not as expected.");
        await assertion.assertEqual(sts.addNewMaterialBtn, testdata.addNewMaterialBtn, "addNewMaterialBtn Values is not as expected.");
        await assertion.assertEqual(sts.allTab, testdata.allTab, "allTab Values is not as expected.");
        await assertion.assertEqual(sts.draftsTab, testdata.draftsTab, "draftsTab Values is not as expected.");
        await assertion.assertEqual(sts.publishedTab, testdata.publishedTab, "publishedTab Values is not as expected.");
        await assertion.assert(sts.totalMaterialCount.includes(testdata.totalMaterialCount), "Material Count text Values is not as expected.");
        await assertion.assert(sts.materialCountSubtitle.includes(testdata.materialCountSubtitle), "Material count subtitle Values is not as expected.");
        await assertion.assertEqual(sts.materialLabel, testdata.materialLabel, "materialLabel Values is not as expected.");
        await assertion.assertEqual(sts.typeLabel, testdata.typeLabel, "typeLabel Values is not as expected.");
        await assertion.assertEqual(sts.modifiedLabel, testdata.modifiedLabel, "modifiedLabel Values is not as expected.");
        await assertion.assertEqual(sts.searchTextBox, "", "searchTextBox Values is not as expected.");
        sts = await myMaterials.getData_quizRow();
        await assertion.assertEqual(sts[0].materialsQuizTypeTxt, testdata.materialsQuizTypeTxt, "materialsQuizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].materialsContextMenuBtn, true, "materialsContextMenuBtn Values is not as expected.");

    },

    //Validate clicking on Drafts tab
    ENG_ICCM_TC_11: async function (testdata) {
        sts = await myMaterials.click_draftsTab();
        await assertion.assertEqual(sts, true, "draftsTab are not Clicked");
        sts = await myMaterials.getData_myMaterialsPage();
        await assertion.assert(sts.totalMaterialCount.includes(testdata.totalMaterialCount), "Material Count text Values is not as expected.");
        await assertion.assert(sts.materialCountSubtitle.includes(testdata.materialCountSubtitle), "Material count subtitle Values is not as expected.");
        await assertion.assertEqual(sts.materialLabel, testdata.materialLabel, "materialLabel Values is not as expected.");
        await assertion.assertEqual(sts.typeLabel, testdata.typeLabel, "typeLabel Values is not as expected.");
        await assertion.assertEqual(sts.modifiedLabel, testdata.modifiedLabel, "modifiedLabel Values is not as expected.");
        sts = await myMaterials.getData_quizRow();
        await assertion.assertEqual(sts[0].materialsDraftPillTxt, testdata.materialsDraftPillTxt, "materialsDraftPillTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].materialsQuizTypeTxt, testdata.materialsQuizTypeTxt, "materialsQuizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].materialsContextMenuBtn, true, "materialsContextMenuBtn Values is not as expected.");

    },

    //Validate clicking on Published tab
    ENG_ICCM_TC_12: async function (testdata) {
        sts = await myMaterials.click_publishedTab();
        await assertion.assertEqual(sts, true, "publishedTab are not Clicked");
        sts = await myMaterials.getData_myMaterialsPage();
        await assertion.assert(sts.totalMaterialCount.includes(testdata.totalMaterialCount), "Material Count text Values is not as expected.");
        await assertion.assert(sts.materialCountSubtitle.includes(testdata.materialCountSubtitle), "Material count subtitle Values is not as expected.");
        await assertion.assertEqual(sts.materialLabel, testdata.materialLabel, "materialLabel Values is not as expected.");
        await assertion.assertEqual(sts.typeLabel, testdata.typeLabel, "typeLabel Values is not as expected.");
        await assertion.assertEqual(sts.modifiedLabel, testdata.modifiedLabel, "modifiedLabel Values is not as expected.");
        sts = await myMaterials.getData_quizRow();
        await assertion.assertEqual(sts[0].materialsDraftPillTxt, null, "materialsDraftPillTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].materialsQuizTypeTxt, testdata.materialsQuizTypeTxt, "materialsQuizTypeTxt Values is not as expected.");
        await assertion.assertEqual(sts[0].materialsContextMenuBtn, true, "materialsContextMenuBtn Values is not as expected.");

    },

    //Validate clicking on ellipses with Draft Material on My Materials page
    ENG_ICCM_TC_18: async function (testdata) {
        sts = await myMaterials.click_materialsContextMenuBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "materialsContextMenuBtn are not Clicked");
        sts = await myMaterials.getData_myMaterialsContextMenu();
        await assertion.assertEqual(sts.previewBtn, testdata[1].previewBtn, "previewBtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteBtn, testdata[1].deleteBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.duplicateBtn, testdata[1].duplicateBtn, "deleteBtn Values is not as expected.");
    },

    //Validate clicking on ellipses with Published Material on My Materials page
    ENG_ICCM_TC_19: async function (testdata) {
        sts = await myMaterials.click_materialsContextMenuBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "materialsContextMenuBtn are not Clicked");
        sts = await myMaterials.getData_myMaterialsContextMenu();
        await assertion.assertEqual(sts.deleteBtn, testdata[1].deleteBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.duplicateBtn, testdata[1].duplicateBtn, "deleteBtn Values is not as expected.");
        await assertion.assertEqual(sts.editBtn, testdata[1].editBtn, "deleteBtn Values is not as expected.");
    },

    //Validate clicking on Preview button in Ellipses for Draft quiz on My Materials page
    ENG_ICCM_TC_20: async function (testdata) {
        sts = await myMaterials.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
        sts = await libraryEditorPage.getData_previewPage();
        await assertion.assertEqual(sts.previewcontainer, testdata.previewcontainer, "previewcontainer Values is not as expected.");
        await assertion.assertEqual(sts.eyeIcon, true, "eyeIcon Values is not as expected.");
        await assertion.assertEqual(sts.previeCloseIcon, true, "previeCloseIcon is not as expected.");
        sts = await myMaterials.close_preview();
    },

    //Validate clicking on Preview button in Ellipses for Blank Quiz on My Materials page
    ENG_ICCM_TC_21: async function (testdata) {
        sts = await myMaterials.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
        sts = await libraryEditorPage.getData_blankQuizPage();
        await assertion.assertEqual(sts.quizHeaderIcon, true);
        await assertion.assertEqual(sts.quizHeaderName, testdata[0]);
        await assertion.assertEqual(sts.savedtoLibrarylbl, testdata[1].savedtoLibrarylbl);
        await assertion.assertEqual(sts.draftlbl, testdata[1].draftlbl);
        await assertion.assertEqual(sts.pageHeader, testdata[1].pageHeader);
        await assertion.assertEqual(sts.pageSubHeader, testdata[1].pageSubHeader);
        await assertion.assertEqual(sts.multipleChoicetab, testdata[1].multipleChoicelbl);
        await assertion.assertEqual(sts.texttab, testdata[1].textChoicelbl);
        await assertion.assertEqual(sts.finishQuiz, testdata[1].finishQuiz);
    },

    //Validate clicking on Edit button in Ellipses for published quiz on My Materials page
    ENG_ICCM_TC_22: async function (testdata) {
        sts = await myMaterials.click_editBtn();
        await assertion.assertEqual(sts, true, "EditBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_editMaterial_Modal();
        await assertion.assertEqual(sts.editMaterial_Title,(testdata[1].editMaterial_Title + testdata[0]), "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata[1].editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Cancel, testdata[1].editMaterial_Cancel, "editMaterial_Cancel Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ContinueToEdit, testdata[1].editMaterial_ContinueToEdit, "editMaterial_ContinueToEdit Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ClassInfoBoxTitle, null, "editMaterial_ClassInfoBoxTitle Values is not as expected.");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_editMaterial_Cancel();
        await assertion.assertEqual(sts, true, "editMaterial_Cancel not Clicked");
    },

    //Validate clicking on Delete button in Ellipses on My Materials page
    ENG_ICCM_TC_23: async function (testdata) {
        sts = await myMaterials.click_deleteBtn();
        await assertion.assertEqual(sts, true, "deleteBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_deleteDialogue(testdata);
        await assertion.assertEqual(sts.deleteTitle, testdata.deleteTitle, "deleteTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitle, testdata.deleteSubTitle, "deleteSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitleMaterial, testdata.deleteSubTitleMaterial, "deleteSubTitleMaterial Values is not as expected.");
        await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn Values is not as expected.");
        await assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn Values is not as expected.");
    },

    //Validate clicking on Cancel button in Delete Materials Dialog
    ENG_ICCM_TC_24: async function () {
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_cancel_btn();
        await assertion.assertEqual(sts, true, "cancelBtn are not Clicked");
    },

    //Validate clicking on Delete button in Delete Materials Dialog
    ENG_ICCM_TC_25: async function (testdata) {
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_delete_btn();
        await assertion.assertEqual(sts, testdata.Snackbar_DeleteMessage_Text, "deleteBtn are not Clicked");
    },

    //Validate the search scenario when no result is found
    ENG_ICCM_TC_26: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].noSearchCount), "Search Pill Mismatched");

        sts = await require("../../pages/engageExperienceApp/browse.page").getData_searchNoResults();
        await assertion.assertEqual(sts.search_NoResult_img, testdata[1].search_NoResult_img, "search_NoResult_img status Mismatch");
        await assertion.assertEqual(sts.search_NoResult_title, testdata[1].search_NoResult_title, "search_NoResult_title text Mismatch");
        await assertion.assertEqual(sts.search_NoResult_subTitle, testdata[1].search_NoResult_subTitle, "search_NoResult_subTitle text Mismatch");
    },

    //Validate the partial search on My Materials page
    ENG_ICCM_TC_27: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search count Mismatched");

        sts = await myMaterials.getData_quizRow();
        assertion.assertEqual(sts.length, testdata[0].searchResultCount, "Search Count mismatch");
    },

    //Validate the exact search on My Materials page
    ENG_ICCM_TC_28: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search count Mismatched");

        sts = await myMaterials.getData_quizRow();
        assertion.assertEqual(sts.length, testdata[0].searchResultCount, "Search Count mismatch");
    },

    //Validate search for special character - all keyboard characters
    ENG_ICCM_TC_29: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search count Mismatched");

        sts = await myMaterials.getData_quizRow();
        assertion.assertEqual(sts.length, testdata[0].searchResultCount, "Search Count mismatch");
    },

    //Validate search for spanish characters
    ENG_ICCM_TC_30: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search count Mismatched");

        sts = await myMaterials.getData_quizRow();
        assertion.assertEqual(sts.length, testdata[0].searchResultCount, "Search Count mismatch");
    },

    //Validate if search data is retained if user switch tabs
    ENG_ICCM_TC_31: async function (testdata) {
        sts = await myMaterials.set_searchTextBox(testdata[0].search_txt);
        await assertion.assertEqual(sts, true, "searchTextBox values are not set");

        sts = await myMaterials.pressEnter();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatched");

        sts = await myMaterials.click_draftsTab();
        await assertion.assertEqual(sts, true, "draftsTab not clicked");

        sts = await myMaterials.click_allTab();
        await assertion.assertEqual(sts, true, "draftsTab not clicked");


        sts = await myMaterials.getData_myMaterialsPage();
        await assertion.assertEqual(sts.searchText, testdata[0].search_txt, "Search Pill Mismatch");
        await assertion.assert(sts.searchResultsLabel.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatched");
    },

    //Validate clicking on cross icon clears the search results
    ENG_ICCM_TC_35: async function () {
        sts = await myMaterials.click_clearSearch();
        await assertion.assertEqual(sts.searchText, null, "Search Pill Mismatch");
        await assertion.assertEqual(sts.searchResultsLabel, null, "Search Pill Mismatched");

    }
}