"use strict";
var writingPlayer = require('../../pages/engageExperienceApp/writingPlayer.page.js');
var sts;

module.exports = {

   //Validate that user is able to add text in the editable text area
   ENG_ITEM_WRITING_TC_1: async function (testdata) {
      sts = await writingPlayer.set_writingTextbox(testdata);
      await assertion.assertEqual(sts, true, "set_writingTextbox status mismatch");
   },

   //Validate that attach file dialog opens on selecting Browse from Computer option in attach dropdown
   ENG_ITEM_WRITING_TC_2: async function (testdata) {
      sts = await writingPlayer.click_writingAttachBtn(testdata[0]);
      await assertion.assertEqual(sts, true, "writingAttachBtn status mismatch");
      sts = await writingPlayer.click_browseCompOption();
      await assertion.assertEqual(sts.attachDialogTitle, testdata[1].attachDialogTitle, "attachDialogTitle status mismatch");
      await assertion.assertEqual(sts.attachDialogSubtitle, testdata[1].attachDialogSubtitle, "attachDialogSubtitle status mismatch");
      await assertion.assertEqual(sts.attachDialogBrowseBtn, testdata[1].attachDialogBrowseBtn, "attachDialogBrowseBtn status mismatch");
      await assertion.assertEqual(sts.attachDialogCloseBtn, testdata[1].attachDialogCloseBtn, "attachDialogCloseBtn status mismatch");
      await assertion.assertEqual(sts.attachDialogMaxSize, testdata[1].attachDialogMaxSize, "attachDialogMaxSize status mismatch");
   },

   //Validate that user is able to attach the file less than 100 mb
   ENG_ITEM_WRITING_TC_3: async function (testdata) {
      sts = await writingPlayer.set_uploadFile(testdata);
      await assertion.assertEqual(sts, true, "set_uploadFile status mismatch");
   },

   //Validate that remove dialog appears when user tries to remove the attachment
   ENG_ITEM_WRITING_TC_4: async function (testdata) {
      sts = await writingPlayer.click_removeFileBtn(testdata[0]);
      await assertion.assertEqual(sts.removeDialogTitle, testdata[1].removeDialogTitle, "removeDialogTitle status mismatch");
      await assertion.assertEqual(sts.removeDialogSubtitle, testdata[1].removeDialogSubtitle, "removeDialogSubtitle status mismatch");
      await assertion.assertEqual(sts.removeDialogNoBtn, testdata[1].removeDialogNoBtn, "removeDialogNoBtn status mismatch");
      await assertion.assertEqual(sts.removeDialogYesBtn, testdata[1].removeDialogYesBtn, "removeDialogYesBtn status mismatch");
   },

   //Validate that file is removed on clicking yes in the remove dialog
   ENG_ITEM_WRITING_TC_5: async function (testdata) {
      sts = await writingPlayer.click_removeDialogYesBtn(testdata);
      await assertion.assertEqual(sts, true, "removeDialogYesBtn status mismatch");
   },

   //Validate that file is not removed on clicking no in the remove dialog
   ENG_ITEM_WRITING_TC_6: async function (testdata) {
      sts = await writingPlayer.click_removeDialogNoBtn(testdata);
      await assertion.assertEqual(sts, true, "removeDialogNoBtn status mismatch");
   },

   //Validate that max. file size dialog is displayed if user tries to attach file greater than 100 mb
   ENG_ITEM_WRITING_TC_7: async function (testdata) {
      sts = await writingPlayer.set_uploadFile(testdata[0]);
      await assertion.assertEqual(sts, true, "set_uploadFile status mismatch");
      sts = await writingPlayer.getData_maxLimitDialog();
      await assertion.assertEqual(sts.maxLimitDialogTitle, testdata[1].maxLimitDialogTitle, "maxLimitDialogTitle status mismatch");
      await assertion.assertEqual(sts.maxLimitDialogSubtitle, testdata[1].maxLimitDialogSubtitle, "maxLimitDialogSubtitle status mismatch");
      await assertion.assertEqual(sts.maxLimitDialogOkBtn, testdata[1].maxLimitDialogOkBtn, "maxLimitDialogOkBtn status mismatch");
      sts = await writingPlayer.click_maxLimitDialogOkBtn();
      await assertion.assertEqual(sts, true, "maxLimitDialogOkBtn status mismatch");
      sts = await writingPlayer.click_attachDialogCloseBtn();
      await assertion.assertEqual(sts, true, "attachDialogCloseBtn status mismatch");
   },

   
}