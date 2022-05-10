"use strict";
var writingPlayer = require('../../pages/engageExperienceApp/writingPlayer.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

   //Click on activity
   ENG_WRITEPLYR_TC_0: function (testdata) {
      sts = writingPlayer.click_activity()
   },

   //Validate the writing Player Page is launched
   ENG_WRITEPLYR_TC_1: function (testdata) {
      sts = writingPlayer.isInitialized()
      assertion.assertEqual(sts.pageStatus, true, "Writing Player status mismatch")
   },

   //Validate the content on Writing Player Page for grading 1st attempt
   ENG_WRITEPLYR_TC_2: function (testdata) {
      sts = writingPlayer.getData_writingPlayerLeftPane()
      assertion.assertEqual(sts.container_LeftPane, true, "container_LeftPane is Not displayed");
      //assertion.assertEqual(sts.studentName_lbl, testdata.studentName_lbl, "studentName_lbl text mismatch");
      assertion.assert(sts.submissiondate_lbl.includes(testdata.submissiondate_lbl), "submissiondate_lbl text mismatch");
      assertion.assertEqual(sts.gradeStatus_pill, testdata.gradePending_pill, "gradeStatus_pill text mismatch");
      // assertion.assert(sts.bookNameSubTitle_lbl.includes(testdata.bookNameSubTitle_lbl), "bookNameSubTitle_lbl text mismatch");
      // assertion.assertEqual(sts.activityNameTitle_lbl, testdata.activityNameTitle_lbl, "activityNameTitle_lbl text mismatch");
      assertion.assertEqual(sts.container_ToggleExpansion, true, "container_ToggleExpansion is Not displayed");
      assertion.assertEqual(sts.gradingAndFeedback_lbl, testdata.gradingAndFeedback_lbl, "gradingAndFeedback_lbl text mismatch");
      assertion.assertEqual(sts.attempt1_lbl, testdata.attempt1_lbl, "attempt1_lbl text mismatch");
      assertion.assert(sts.submittedDate_lbl.includes(testdata.submittedDate_lbl), "submittedDate_lbl text mismatch");
      //assertion.assertEqual(sts.reattemptRequested_pill, testdata.reattemptRequested_pill, "reattemptRequested_pill text mismatch");
      assertion.assertEqual(sts.score_icon, "", "score_icon is Not displayed");
      assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl text mismatch");
      assertion.assertEqual(sts.feedback_current_icon, '', "feedback_current_icon is Not displayed");
      assertion.assertEqual(sts.feedback_current_lbl, testdata.feedback_current_lbl, "feedback_current_lbl text mismatch");
      assertion.assert(sts.feedback_textbox_placeholder.includes(testdata.feedback_textbox_placeholder), "feedback_textbox_placeholder text mismatch");
      assertion.assertEqual(sts.requestReattempted_lbl, testdata.requestReattempted_lbl, "requestReattempted_lbl text mismatch");
      assertion.assertEqual(sts.requestReattempted_yes_btn, testdata.requestReattempted_yes_btn, "requestReattempted_yes_btn text mismatch");
      assertion.assertEqual(sts.requestReattempted_no_btn, testdata.requestReattempted_no_btn, "requestReattempted_no_btn text mismatch");
      assertion.assertEqual(sts.submitGrade_btn, testdata.submitGrade_btn, "submitGrade_btn text mismatch");

   },

   //Validate that the score value can be set in the score text area
   ENG_WRITEPLYR_TC_3: function (testdata) {
      sts = writingPlayer.set_scoreTextArea(testdata)
      assertion.assertEqual(sts, true, "status mismatch");
   },

   //Validate that the feedback value can be set in the feedback text area
   ENG_WRITEPLYR_TC_4: function (testdata) {
      sts = writingPlayer.set_feedbackTextArea(testdata)
      assertion.assertEqual(sts, true, "status mismatch");
   },

   //Validate clicking on 'Submit Grade' button launches dialog box
   ENG_WRITEPLYR_TC_5: function (testdata) {
      sts = writingPlayer.click_submitGrade_btn()
      assertion.assertEqual(sts.submitDialog_title, testdata.submitDialog_title, "submitDialog_title text mismatch");
      assertion.assertEqual(sts.submitDialog_subTitle, testdata.submitDialog_subTitle, "submitDialog_subTitle text mismatch");
      assertion.assertEqual(sts.submitDialog_score_icon, '', "submitDialog_score_icon is Not displayed");
      assertion.assertEqual(sts.submitDialog_score_lbl, testdata.submitDialog_score_lbl, "submitDialog_score_lbl text mismatch");
      assertion.assertEqual(sts.submitDialog_feedback_icon, '', "submitDialog_feedback_icon is Not displayed");
      assertion.assertEqual(sts.submitDialog_feebback_lbl, testdata.submitDialog_feebback_lbl, "submitDialog_feebback_lbl text mismatch");
      assertion.assertEqual(sts.submitDialog_requestReattempt_icon, '', "submitDialog_requestReattempt_icon is Not displayed");
      assertion.assertEqual(sts.submitDialog_requestReattempt_lbl, testdata.submitDialog_requestReattempt_lbl, "submitDialog_requestReattempt_lbl text mismatch");
      assertion.assertEqual(sts.submitDialog_cancel_btn, testdata.submitDialog_cancel_btn, "submitDialog_cancel_btn text mismatch");
      assertion.assertEqual(sts.submitDialog_confirm_btn, testdata.submitDialog_confirm_btn, "submitDialog_confirm_btn text mismatch");
   },

   //Validate clicking on 'Cancel' button disappears dialog box 
   ENG_WRITEPLYR_TC_6: function () {
      sts = writingPlayer.click_submitDialog_cancel_btn();
      assertion.assertEqual(sts, true, "cancel button status mismatch");
   },

   //Validate clicking on 'Confirm & Submit' with NO REATTEMPT button 
   ENG_WRITEPLYR_TC_7: function (testdata) {
      sts = writingPlayer.click_submitDialog_confirm_btn();
      assertion.assertEqual(sts.container_LeftPane, true, "container_LeftPane is Not displayed");
      assertion.assert(sts.submissiondate_lbl.includes(testdata.finalGradePosted_lbl), "finalGradePosted_lbl text mismatch");
      assertion.assertEqual(sts.gradeStatus_pill, testdata.graded_pill, "gradeStatus_pill text mismatch");
      //assertion.assert(sts.bookNameSubTitle_lbl.includes(testdata.bookNameSubTitle_lbl), "bookNameSubTitle_lbl text mismatch");
      //assertion.assertEqual(sts.activityNameTitle_lbl, testdata.activityNameTitle_lbl, "activityNameTitle_lbl text mismatch");
      assertion.assertEqual(sts.container_ToggleExpansion, true, "container_ToggleExpansion is Not displayed");
      assertion.assertEqual(sts.gradingAndFeedback_lbl, testdata.gradingAndFeedback_lbl, "gradingAndFeedback_lbl text mismatch");
      assertion.assertEqual(sts.attempt1_lbl, testdata.attempt1_lbl, "attempt1_lbl text mismatch");
      assertion.assert(sts.submittedDate_lbl.includes(testdata.submittedDate_lbl), "submittedDate_lbl text mismatch");
      assertion.assert(sts.gradedDate_lbl.includes(testdata.gradedDate_lbl), "gradedDate_lbl text mismatch");
   },

   //Validate clicking on 'Yes' button
   ENG_WRITEPLYR_TC_8: function () {
      sts = writingPlayer.click_yesRadio_btn();
      assertion.assertEqual(sts, true, "cancel button status mismatch");
   },

   //Validate clicking on 'Confirm & Submit' with REATTEMPT REQUESTED YES button 
   ENG_WRITEPLYR_TC_9: function (testdata) {
      sts = writingPlayer.click_submitDialog_confirm_btn();
      assertion.assertEqual(sts.container_LeftPane, true, "container_LeftPane is Not displayed");
      assertion.assert(sts.submissiondate_lbl.includes(testdata.gradeReattemptRequestDate_lbl), "gradeReattemptRequestDate_lbl text mismatch");
      assertion.assertEqual(sts.gradeStatus_pill, testdata.reattemptRequested_statuspill, "reattemptRequested_statuspill text mismatch");
      assertion.assertEqual(sts.container_ToggleExpansion, true, "container_ToggleExpansion is Not displayed");
      assertion.assertEqual(sts.gradingAndFeedback_lbl, testdata.gradingAndFeedback_lbl, "gradingAndFeedback_lbl text mismatch");
      assertion.assertEqual(sts.attempt1_lbl, testdata.attempt1_lbl, "attempt1_lbl text mismatch");
      assertion.assert(sts.submittedDate_lbl.includes(testdata.submittedDate_lbl), "submittedDate_lbl text mismatch");
      assertion.assert(sts.gradedDate_lbl.includes(testdata.gradedDate_lbl), "gradedDate_lbl text mismatch");
   },
}