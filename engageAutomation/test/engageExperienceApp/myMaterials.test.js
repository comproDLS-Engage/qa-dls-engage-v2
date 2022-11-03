"use strict";
var myMaterials= require('../../pages/engageExperienceApp/myMaterials.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {
ENG_ICCM_TC_1 :   async function (testdata) { 
sts = await myMaterials.click_addNewMaterialBtn();
await assertion.assertEqual(sts, true,"addNewMaterialBtn are not Clicked");
},

ENG_ICCM_TC_2 :   async function (testdata) { 
sts = await myMaterials.click_allTab();
await assertion.assertEqual(sts, true,"allTab are not Clicked");
},

ENG_ICCM_TC_3 :   async function (testdata) { 
sts = await myMaterials.click_draftsTab();
await assertion.assertEqual(sts, true,"draftsTab are not Clicked");
},

ENG_ICCM_TC_4 :   async function (testdata) { 
sts = await myMaterials.click_publishedTab();
await assertion.assertEqual(sts, true,"publishedTab are not Clicked");
},

ENG_ICCM_TC_5 :   async function (testdata) { 
sts = await myMaterials.set_searchTextBox();await assertion.assertEqual(sts, true ,"searchTextBox values are not set");

},

ENG_ICCM_TC_6 :   async function (testdata) { 
sts = await myMaterials.click_blankQuizBtn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");
await assertion.assertEqual(sts.appShell.header, true,"Page header status mismatch");
},

ENG_ICCM_TC_7 :   async function (testdata) { 
sts = await myMaterials.click_blankSurveyBtn();
await assertion.assertEqual(sts, true,"blankSurveyBtn are not Clicked");
},

ENG_ICCM_TC_8 :   async function (testdata) { 
sts = await myMaterials.click_newResourceBtn();
await assertion.assertEqual(sts, true,"newResourceBtn are not Clicked");
},

ENG_ICCM_TC_9 :   async function (testdata) { 
sts = await myMaterials.click_quizRow();
await assertion.assertEqual(sts, true,"quizRow are not Clicked");
},

ENG_ICCM_TC_10 :   async function (testdata) { 
sts = await myMaterials.click_materialsContextMenuBtn();
await assertion.assertEqual(sts, true,"materialsContextMenuBtn are not Clicked");
},

ENG_ICCM_TC_11 :   async function (testdata) { 
sts = await myMaterials.click_menuBlankQuizBtn();
await assertion.assertEqual(sts.pageStatus, true,"Page is not launched. ");
await assertion.assertEqual(sts.appShell.header, true,"Page header status mismatch");
},

ENG_ICCM_TC_12 :   async function (testdata) { 
sts = await myMaterials.click_menuBlankSurveyBtn();
await assertion.assertEqual(sts, true,"menuBlankSurveyBtn are not Clicked");
},

ENG_ICCM_TC_13 :   async function (testdata) { 
sts = await myMaterials.click_menuNewResourceBtn();
await assertion.assertEqual(sts, true,"menuNewResourceBtn are not Clicked");
},

ENG_ICCM_TC_14 :   async function (testdata) { 
sts = await myMaterials.click_previewBtn();
await assertion.assertEqual(sts, true,"previewBtn are not Clicked");
},

ENG_ICCM_TC_15 :   async function (testdata) { 
sts = await myMaterials.click_deleteBtn();
await assertion.assertEqual(sts, true,"deleteBtn are not Clicked");
},

ENG_ICCM_TC_16 :   async function (testdata) { 
sts = await myMaterials.getData_myMaterialsPage(testdata);
await assertion.assertEqual(sts.myMaterialsTxt, testdata.myMaterialsTxt,"myMaterialsTxt Values is not as expected.");
await assertion.assertEqual(sts.addNewMaterialBtn, testdata.addNewMaterialBtn,"addNewMaterialBtn Values is not as expected.");
await assertion.assertEqual(sts.allTab, testdata.allTab,"allTab Values is not as expected.");
await assertion.assertEqual(sts.draftsTab, testdata.draftsTab,"draftsTab Values is not as expected.");
await assertion.assertEqual(sts.publishedTab, testdata.publishedTab,"publishedTab Values is not as expected.");
await assertion.assertEqual(sts.searchResultsLabel, testdata.searchResultsLabel,"searchResultsLabel Values is not as expected.");
await assertion.assertEqual(sts.searchText, testdata.searchText,"searchText Values is not as expected.");
await assertion.assertEqual(sts.materialLabel, testdata.materialLabel,"materialLabel Values is not as expected.");
await assertion.assertEqual(sts.typeLabel, testdata.typeLabel,"typeLabel Values is not as expected.");
await assertion.assertEqual(sts.modifiedLabel, testdata.modifiedLabel,"modifiedLabel Values is not as expected.");
await assertion.assertEqual(sts.searchTextBox, testdata.searchTextBox,"searchTextBox Values is not as expected.");
await assertion.assertEqual(sts.noMaterialTitleTxt, testdata.noMaterialTitleTxt,"noMaterialTitleTxt Values is not as expected.");
await assertion.assertEqual(sts.noMaterialSubtitleTxt, testdata.noMaterialSubtitleTxt,"noMaterialSubtitleTxt Values is not as expected.");
await assertion.assertEqual(sts.blankQuizBtn, testdata.blankQuizBtn,"blankQuizBtn Values is not as expected.");
await assertion.assertEqual(sts.blankSurveyBtn, testdata.blankSurveyBtn,"blankSurveyBtn Values is not as expected.");
await assertion.assertEqual(sts.newResourceBtn, testdata.newResourceBtn,"newResourceBtn Values is not as expected.");
},

ENG_ICCM_TC_17 :   async function (testdata) { 
sts = await myMaterials.getData_quizRow(testdata);
await assertion.assertEqual(sts.quizRow, testdata.quizRow,"quizRow Values is not as expected.");
await assertion.assertEqual(sts.materialsQuizTitleTxt, testdata.materialsQuizTitleTxt,"materialsQuizTitleTxt Values is not as expected.");
await assertion.assertEqual(sts.materialsDraftPillTxt, testdata.materialsDraftPillTxt,"materialsDraftPillTxt Values is not as expected.");
await assertion.assertEqual(sts.materialsQuizTypeTxt, testdata.materialsQuizTypeTxt,"materialsQuizTypeTxt Values is not as expected.");
await assertion.assertEqual(sts.modifiedTime, testdata.modifiedTime,"modifiedTime Values is not as expected.");
await assertion.assertEqual(sts.materialsContextMenuBtn, testdata.materialsContextMenuBtn,"materialsContextMenuBtn Values is not as expected.");
},

ENG_ICCM_TC_18 :   async function (testdata) { 
sts = await myMaterials.getData_addMaterialContextMenu(testdata);
await assertion.assertEqual(sts.createNewTxt, testdata.createNewTxt,"createNewTxt Values is not as expected.");
await assertion.assertEqual(sts.menuBlankQuizBtn, testdata.menuBlankQuizBtn,"menuBlankQuizBtn Values is not as expected.");
await assertion.assertEqual(sts.menuBlankSurveyBtn, testdata.menuBlankSurveyBtn,"menuBlankSurveyBtn Values is not as expected.");
await assertion.assertEqual(sts.menuNewResourceBtn, testdata.menuNewResourceBtn,"menuNewResourceBtn Values is not as expected.");
},

ENG_ICCM_TC_19 :   async function (testdata) { 
sts = await myMaterials.getData_myMaterialsContextMenu(testdata);
await assertion.assertEqual(sts.previewBtn, testdata.previewBtn,"previewBtn Values is not as expected.");
await assertion.assertEqual(sts.deleteBtn, testdata.deleteBtn,"deleteBtn Values is not as expected.");
},

}