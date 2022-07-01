"use strict";
var gradeBookPage = require('../../pages/engageExperienceApp/gradeBook.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var viewAsStudentAssignmentPage = require('../../pages/engageExperienceApp/viewAsStudentAssignment.page.js');
var studentGradeBookPage=require('../../pages/engageExperienceApp/gradeBookStudent.page.js');
const { confirmPassword_input, confirmPassword_label } = require('../../pages/engageExperienceApp/settings.page.js');
var sts;

module.exports = {

   //Validate the GradeBook Page is launched
   ENG_GRADEBOOK_TC_1: async function (testdata) {
      sts = await gradeBookPage.isInitialized()
      await assertion.assertEqual(sts.pageStatus, true, "GradeBook Page not launched: " + (await JSON.stringify(sts)))
   },

   //Validate the content on Blank GradeBook Page
   ENG_GRADEBOOK_TC_2: async function (testdata) {
      sts = await gradeBookPage.getData_gradeBook()
     // console.log(sts)
     // console.log(testdata)
      await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assert((sts.pageSubTitle).includes(testdata.pageSubTitle), "pageSubTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.noGradeBookIcon, true, "noGradeBookIcon is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.noGradeBookTitle, testdata.noGradeBookTitle, "noGradeBookTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.noGradeBookSubTitle, testdata.noGradeBookSubTitle, "noGradeBookSubTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.copyClassCode_btn, testdata.classCode_btn, "classCode_btn is not mismatched " + JSON.stringify(sts))
      await assertion.assertEqual(sts.inviteEmail_btn, testdata.inviteEmail_btn, "inviteEmail_btn is not mismatched " + JSON.stringify(sts))
      await assertion.assertEqual(sts.inviteStudents_lbl, testdata.inviteStudents_lbl, "inviteStudents_lbl is not mismatched " + JSON.stringify(sts))
      await assertion.assertEqual(sts.inviteStudentsByline_lbl, testdata.inviteStudentsByline_lbl, "inviteStudentsByline_lbl is not mismatched " + JSON.stringify(sts))

   },

   //Validate the content on GradeBook Page
   ENG_GRADEBOOK_TC_3: async function (testdata) {
      sts = await gradeBookPage.getData_gradeBook()
      await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assert(sts.pageSubTitle.includes(testdata.pageSubTitle), "pageSubTitle is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.graphHeader, testdata.graphHeader, "graphHeader is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.graphImage, true, "graphImage is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.averageScoreLegend, testdata.averageScoreLegend, "averageScoreLegend is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.averageCompletionLegend, testdata.averageCompletionLegend, "averageCompletionLegend is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.above70_lbl, testdata.above70_lbl, "above70_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.below70_lbl, testdata.below70_lbl, "below70_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.averageScore_lbl, testdata.averageScore_lbl, "above70_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.averageCompletion_lbl, testdata.averageCompletion_lbl, "averageCompletion_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.searchBox, true, "serachBox is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.searchStudentPlaceholder, testdata.searchStudentPlaceholder, "searchStudentPlaceholder is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.name_lbl, testdata.name_lbl, "name_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.lastActive_lbl, testdata.lastActive_lbl, "lastActive_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.time_lbl, testdata.time_lbl, "time_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed: " + (await JSON.stringify(sts)))
      await assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "score_lbl is Not displayed: " + (await JSON.stringify(sts)))
   },

   //Validate the Product List in GradeBook
   ENG_GRADEBOOK_TC_4: async function (testdata) {
      sts = await gradeBookPage.getData_productList()
      // Will add asserion when required.
   },

   //Click on the Student Name
   ENG_GRADEBOOK_TC_5: async function (testdata) {
      sts = await gradeBookPage.click_studentList(testdata);
      await assertion.assertEqual(sts.pageStatus, true, "GradeBook Student Page not launched: " + (await JSON.stringify(sts)))
   },
   ENG_GRADEBOOK_TC_6: async function (testdata) {
      sts = await gradeBookPage.studentList_Data();  
      for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i], testdata[i], "GradeBook Student Page not launched: ");
      }
   },

   //Validate that clicking on 'Download' button displays a snackbar message
   ENG_GRADEBOOK_TC_7: async function (testdata) {
      sts = await gradeBookPage.click_download_btn();
      await assertion.assertEqual(sts, true, "Download button clicked");
      sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
      await assertion.assertEqual(sts, testdata, "Snackbar message mismatch: " + sts);
   },

   //Validate that clicking on 'Send to email' button displays a snackbar message
   ENG_GRADEBOOK_TC_8: async function (testdata) {
      sts = await gradeBookPage.click_sendtoemail_btn();
      await assertion.assertEqual(sts, true, "Send to email button clicked");
      sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
      await assertion.assert(sts, testdata, "Snackbar message mismatch: " + sts);
   },

   //---*** STUDENT VIEW GRADEBOOK ***-----

   //Validate the content on Student GradeBook Page
   ENG_GRADEBOOK_TC_9: async function (testdata) {
      sts = await studentGradeBookPage.getData_gradeBookStudentView()
      await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed");
      await assertion.assert(sts.pageSubTitle.includes(testdata.pageSubTitle), "pageSubTitle is Not displayed");
      await assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed");
      await assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed");
      await assertion.assert(sts.totalTimeSpent_lbl.includes(testdata.totalTimeSpent_lbl), "totalTimeSpent_lbl is Not displayed");
      await assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed");
      await assertion.assertEqual(sts.scoreChart_icon, true, "scoreChart_icon is Not displayed");
      await assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "completion_lbl is Not displayed");
      await assertion.assertEqual(sts.completionChart_icon, true, "completionChart_icon is Not displayed");
      await assertion.assert(sts.classAnalyticsCompletion_lbl.includes(testdata.classAnalyticsCompletion_lbl), "classAnalyticsCompletion_lbl is Not displayed");
      await assertion.assert(sts.classAnalyticsScore_lbl.includes(testdata.classAnalyticsScore_lbl), "classAnalyticsScore_lbl is Not displayed");
      await assertion.assertEqual(sts.lesson_title, testdata.lesson_title, "lesson_title is Not displayed");
      await assertion.assertEqual(sts.lesson_Subtitle, testdata.lesson_Subtitle, "lesson_Subtitle is Not displayed");
   },

   //Validate the Unit Details of a book
   ENG_GRADEBOOK_TC_10: async function (testdata) {
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
   ENG_GRADEBOOK_TC_11: async function (testdata) {
     sts = await studentGradeBookPage.click_showHideActivities_btn(testdata[0]);
     for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].activityName, testdata[2][i].activityName, "activityName mismatch");
         await assertion.assertEqual(sts[i].moreOption, testdata[2][i].moreOption, "moreOption mismatch");
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

   //Validate the click on 'More Options' button
   ENG_GRADEBOOK_TC_12: async function (testdata) {
      sts = await studentGradeBookPage.click_moreOption(testdata[0], testdata[1]);
      await assertion.assertEqual(sts.viewAttempt_btn, testdata[2].viewAttempt_btn, "viewAttempt_btn mismatch");
      await assertion.assertEqual(sts.gradeAttempt_btn, testdata[2].gradeAttempt_btn, "moreOption mismatch");
      // please add assertion :rupsi
   },
   ENG_GRADEBOOK_TC_13: async function (testdata) {
      sts = await studentGradeBookPage.click_productListName(testdata);
      await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch")
   },
   ENG_GRADEBOOK_TC_14: async function () {
      sts = await studentGradeBookPage.click_viewAttempt_btn();
      await assertion.assertEqual(sts.pageStatus, true, "View Attempt status mismatch")
   },
   ENG_GRADEBOOK_TC_15: async function () {
      sts = await viewAsStudentAssignmentPage.click_cancel();
      await assertion.assertEqual(sts, true, "Cancel button is clicked");
      sts = await studentGradeBookPage.isInitialized();
      await assertion.assertEqual(sts.pageStatus, true, "assignment Details page status mismatch");
   },

    //Validate the click on 'Class Copy Code' button
   ENG_GRADEBOOK_TC_16: async function (testdata) {
      sts = await gradeBookPage.click_classCode_btn()
      await assertion.assertEqual(sts, true, "Class Code button is clicked");
      sts = await gradeBookPage.getData_gradeBook();
      await assertion.assertEqual(sts.classCode_btn, testdata.copiedlassCode_btn, "getData_gradeBook is mismatch");
   },

    //Validate the click on 'Invie Email' button
   ENG_GRADEBOOK_TC_17: async function (testdata) {
      sts = await gradeBookPage.click_inviteEmail_btn();
      await assertion.assertEqual(sts, true, "sendtoemail button is clicked");
      sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
      await assertion.assertEqual(sts, testdata, "Snackbar message mismatch: " + sts);
   }
}