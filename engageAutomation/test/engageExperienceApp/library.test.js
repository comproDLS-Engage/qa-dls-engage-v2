"use strict";
var library = require('../../pages/engageExperienceApp/library.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {
    ENG_ICCL_TC_1: async function () {
        sts = await library.click_blankQuizBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page is not launched. ");
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
        sts = await library.click_materialCard(testdata[0]);
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_editorPage();
        assertion.assertEqual(sts.previewbtn, testdata[1].previewbtn, "previewbtn values is not as expected");
    },

    //Validate clicking on "Edit Draft" button
    ENG_ICCL_TC_14: async function (testdata) {
        sts = await library.click_editDraftBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "editDraftBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_editorPage();
        assertion.assertEqual(sts.previewbtn, testdata[1].previewbtn, "previewbtn values is not as expected");
    },


    //Validate clicking on Finalized Material Card
    ENG_ICCL_TC_15: async function (testdata) {
        sts = await library.click_materialCard(testdata[0]);
        await assertion.assertEqual(sts, true, "materialCard are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_publishedQuizPage();
        console.log(sts);
        assertion.assertEqual(sts.addtoClass_btn, testdata[1].addtoClass_btn, "addtoClass_btn values is not as expected");
        assertion.assertEqual(sts.viewAsStudent, testdata[1].viewAsStudent, "viewAsStudent values is not as expected");

    },

    //Validate clicking on Ellipses on Draft Material card
    ENG_ICCL_TC_16: async function (testdata) {
        sts = await library.click_contextMenuBtn(testdata[0]);
        console.log("sts: "+sts);
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
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_previewPage();
        await assertion.assertEqual(sts.previewcontainer, testdata.previewcontainer, "previewcontainer Values is not as expected.");
        await assertion.assertEqual(sts.eyeIcon, true, "eyeIcon Values is not as expected.");
        await assertion.assertEqual(sts.previeCloseIcon, true, "previeCloseIcon is not as expected.");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_previeCloseIcon();
        console.log(sts);
    },

    //Validate clicking on Preview button in Ellipses for Blank Quiz on Library page
    ENG_ICCL_TC_19: async function (testdata) {
        sts = await library.click_previewBtn();
        await assertion.assertEqual(sts, true, "previewBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_blankQuizPage();
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

    //Validate clicking on Add to Class button on Material card from Library page
    ENG_ICCL_TC_24: async function (testdata) {
        sts = await library.click_addToClassBtn(testdata[0]);
        await assertion.assertEqual(sts, true, "addToClassBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_NewAccessPage();
        await assertion.assertEqual(sts.newAccess_Title, testdata[1].newAccess_Title, "newAccess_Title Values is not as expected.");
        await assertion.assertEqual(sts.newAccess_SubTitle, testdata[1].newAccess_SubTitle, "newAccess_SubTitle Values is not as expected.");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_accessClosebtn();
        await assertion.assertEqual(sts, true, "closeBtn not Clicked");
    },

    //Validate clicking on Edit button in Ellipses for Published quiz on Library page
    ENG_ICCL_TC_26: async function (testdata) {
        sts = await library.click_editBtn();
        await assertion.assertEqual(sts, true, "editBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_editMaterial_Modal();
        await assertion.assert(sts.editMaterial_Title.includes(testdata.editMaterial_Title), "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata.editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Cancel, testdata.editMaterial_Cancel, "editMaterial_Cancel Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ContinueToEdit, testdata.editMaterial_ContinueToEdit, "editMaterial_ContinueToEdit Values is not as expected.");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_editMaterial_Cancel();
        await assertion.assertEqual(sts, true, "editMaterial_Cancel not Clicked");
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

    //Validate clicking on Delete button in Ellipses on Library page
    ENG_ICCL_TC_20: async function (testdata) {
        sts = await library.click_deleteBtn();
        await assertion.assertEqual(sts, true, "deleteBtn are not Clicked");
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").getData_deleteDialogue(testdata);
        console.log(sts);
        await assertion.assertEqual(sts.deleteTitle, testdata.deleteTitle, "deleteTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitle, testdata.deleteSubTitle, "deleteSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitleMaterial, testdata.deleteSubTitleMaterial, "deleteSubTitleMaterial Values is not as expected.");
        await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn Values is not as expected.");
        await assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn Values is not as expected.");
    },

    //Validate clicking on Cancel button in Delete Materials Dialog on Library page
    ENG_ICCL_TC_21: async function () {
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_cancel_btn();
        await assertion.assertEqual(sts, true, "cancelBtn are not Clicked");
    },

    //Validate clicking on Delete button in Delete Materials Dialog on Library page
    ENG_ICCL_TC_22: async function (testdata) {
        sts = await require("../../pages/engageExperienceApp/libraryEditor.page").click_delete_btn();
        await assertion.assertEqual(sts, testdata.Snackbar_DeleteMessage_Text, "deleteBtn are not Clicked");

    },
}