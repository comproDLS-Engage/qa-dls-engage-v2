"use strict";
var gradeBookPage = require('../../pages/engageExperienceApp/gradeBook.page.js');
var studentGradeBookPage = require('../../pages/engageExperienceApp/gradeBookStudent.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var viewAsStudentAssignmentPage = require('../../pages/engageExperienceApp/viewAsStudentAssignment.page.js');
var sts;

module.exports = {

   //Validate the GradeBook Page is launched
   ENG_STU_GRADEBOOK_TC_1: async function (testdata) {
      sts = await studentGradeBookPage.isInitialized()
      await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch")
   },
   //Validate the Product List in GradeBook
   ENG_STU_GRADEBOOK_TC_2: async function (testdata) {
      sts = await studentGradeBookPage.getData_productList()
      // Will add asserion when required.
   },

   //Validate that clicking on 'Download' button displays a snackbar message
   ENG_STU_GRADEBOOK_TC_3: async function (testdata) {
      sts = await gradeBookPage.click_download_btn();
      await assertion.assertEqual(sts, true, "Download button clicked");
      sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
      await assertion.assert(sts, testdata, "Snackbar message mismatch: " + sts);
   },

   //Validate that clicking on 'Send to email' button displays a snackbar message
   ENG_STU_GRADEBOOK_TC_4: async function (testdata) {
      sts = await gradeBookPage.click_sendtoemail_btn();
      await assertion.assertEqual(sts, true, "Send to email button clicked");
      sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
      await assertion.assert(sts, testdata, "Snackbar message mismatch: " + sts);
   },

   ENG_STU_GRADEBOOK_TC_5: async function (testdata) {
      sts = await studentGradeBookPage.getData_gradeBookStudentView()
      await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed");
      await assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed");
      await assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed");
      await assertion.assert(sts.totalTimeSpent_lbl.includes(testdata.totalTimeSpent_lbl), "totalTimeSpent_lbl is Not displayed");
      await assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed");
      await assertion.assertEqual(sts.scoreChart_icon, true, "scoreChart_icon is Not displayed");
      await assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "completion_lbl is Not displayed");
      await assertion.assertEqual(sts.completionChart_icon, true, "completionChart_icon is Not displayed");
      await assertion.assertEqual(sts.lesson_title, testdata.lesson_title, "lesson_title is Not displayed");
      await assertion.assertEqual(sts.lesson_Subtitle, testdata.lesson_Subtitle, "lesson_Subtitle is Not displayed");
   },

   //Validate the Unit Details of a book
   ENG_STU_GRADEBOOK_TC_6: async function (testdata) {
      sts = await studentGradeBookPage.getData_UnitDetails(testdata[0])
      await assertion.assertEqual(sts.lessons_Title_lbl, testdata[0].folder_Title, "folder_Title is Not displayed");
      for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].score_icon, true, "score_icon is Not displayed");
         await assertion.assertEqual(sts[i].completion_icon, true, "completion_icon is Not displayed");
         await assertion.assertEqual(sts[i].totalTime_icon, true, "totalTime_icon is Not displayed");
         await assertion.assert((sts[i].score_Unit_lbl).includes(testdata[2].score_Unit_lbl), "score_Unit_lbl is Not displayed: ");
         await assertion.assert((sts[i].completion__Unit_lbl).includes(testdata[2].completion__Unit_lbl), "completion__Unit_lbl is Not displayed: ");
         await assertion.assert((sts[i].totalTime_lbl).includes(testdata[2].totalTime_lbl), "totalTime_lbl is Not displayed: ");
         await assertion.assertEqual(sts[i].activityCount_icon, true, "activityCount_icon is Not displayed");
         await assertion.assertEqual(sts[i].activityCount_lbl, testdata[1][i].activityCount_lbl, "activityCount_lbl is Not displayed");
         await assertion.assertEqual(sts[i].CompletionCount, testdata[1][i].CompletionCount, "CompletionCount is Not displayed");
         await assertion.assertEqual(sts[i].showActivities_btn, testdata[1][i].showHideActivities_btn, "showHideActivities_btn is Not displayed");
      }
   },

   //Validate the click on 'Show Activities' button
   ENG_STU_GRADEBOOK_TC_7: async function (testdata) {
      sts = await studentGradeBookPage.click_showHideActivities_btn(testdata[0]);
      for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].activityName, testdata[2][i].activityName, "activityName mismatch");
         await assertion.assertEqual(sts[i].gradePendingPill, testdata[2][i].gradePendingPill, "gradePill Text mismatch");
      }
      sts = await studentGradeBookPage.getData_showActivity_labels(testdata[0])
      for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].collapsibleActivityLbl, testdata[1].collapsibleActvityLbl, "collapsibleActivityLbl mismatch");
         await assertion.assertEqual(sts[i].collapsibleScoreLbl, testdata[1].collapsibleScoreLbl, "collapsibleScoreLbl mismatch");
         await assertion.assertEqual(sts[i].collapsibleAttemptsLbl, testdata[1].collapsibleAttemptsLbl, "collapsibleAttemptsLbl Text mismatch");
         await assertion.assertEqual(sts[i].collapsibleTimeSpentLbl, testdata[1].collapsibleTimeSpentLbl, "collapsibleTimeSpentLbl Text mismatch");
      }
   },

   ENG_STU_GRADEBOOK_TC_8: async function (testdata) {
      sts = await studentGradeBookPage.click_productListName(testdata);
      await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch")
   },
}