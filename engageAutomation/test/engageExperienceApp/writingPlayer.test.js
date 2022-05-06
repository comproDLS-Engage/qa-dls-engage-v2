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
      console.log("testdata - ",testdata)
      assertion.assertEqual(sts.container_LeftPane, true, "container_LeftPane is Not displayed");
      assertion.assertEqual(sts.studentName_lbl, testdata.studentName_lbl, "studentName_lbl text mismatch");
      assertion.assert(sts.submissiondate_lbl.includes(testdata.submissiondate_lbl), "submissiondate_lbl text mismatch");
      assertion.assertEqual(sts.gradePending_pill, testdata.gradePending_pill, "gradePending_pill text mismatch");
      assertion.assert(sts.bookNameSubTitle_lbl.includes(testdata.bookNameSubTitle_lbl), "bookNameSubTitle_lbl text mismatch");
      assertion.assertEqual(sts.activityNameTitle_lbl, testdata.activityNameTitle_lbl, "activityNameTitle_lbl text mismatch");
      assertion.assertEqual(sts.container_ToggleExpansion, true, "container_ToggleExpansion is Not displayed");
      assertion.assertEqual(sts.gradingAndFeedback_lbl, testdata.gradingAndFeedback_lbl, "gradingAndFeedback_lbl text mismatch");
      assertion.assertEqual(sts.attempt1_lbl, testdata.attempt1_lbl, "attempt1_lbl text mismatch");
      assertion.assert(sts.submittedDate_lbl.includes(testdata.submittedDate_lbl), "submittedDate_lbl text mismatch");
      //assertion.assertEqual(sts.reattemptRequested_pill, testdata.reattemptRequested_pill, "reattemptRequested_pill text mismatch");
      assertion.assertEqual(sts.score_icon, "", "score_icon is Not displayed");
      assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl text mismatch");
      assertion.assertEqual(sts.feedback_current_icon, '', "feedback_current_icon is Not displayed");
      assertion.assertEqual(sts.feedback_current_lbl, testdata.feedback_current_lbl, "feedback_current_lbl text mismatch");
      assertion.assert(sts.feedback_txtbox.includes(testdata.feedback_txtbox), "feedback_txtbox text mismatch");
      assertion.assertEqual(sts.requestReattempted_lbl, testdata.requestReattempted_lbl, "requestReattempted_lbl text mismatch");
      assertion.assertEqual(sts.requestReattempted_yes_btn, testdata.requestReattempted_yes_btn, "requestReattempted_yes_btn text mismatch");
      assertion.assertEqual(sts.requestReattempted_no_btn, testdata.requestReattempted_no_btn, "requestReattempted_no_btn text mismatch");
      assertion.assertEqual(sts.submitGrade_btn, testdata.submitGrade_btn, "submitGrade_btn text mismatch");

   },
}