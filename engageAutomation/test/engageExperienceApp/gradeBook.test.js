"use strict";
var gradeBookPage = require('../../pages/engageExperienceApp/gradeBook.page.js');
var studentGradeBookPage = require('../../pages/engageExperienceApp/gradeBookStudent.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
const { confirmPassword_input } = require('../../pages/engageExperienceApp/settings.page.js');
var sts;

module.exports = {

   //Validate the GradeBook Page is launched
   ENG_GRADEBOOK_TC_1: function (testdata) {
      sts = gradeBookPage.isInitialized()
      assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch")
   },

   //Validate the content on Blank GradeBook Page
   ENG_GRADEBOOK_TC_2: function (testdata) {
      sts = gradeBookPage.getData_gradeBook()
      assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assert((sts.pageSubTitle).includes(testdata.pageSubTitle), "pageSubTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.noGradeBookIcon,true, "noGradeBookIcon is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.noGradeBookTitle, testdata.noGradeBookTitle, "noGradeBookTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.noGradeBookSubTitle, testdata.noGradeBookSubTitle, "noGradeBookSubTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed: " + JSON.stringify(sts))

   },

   //Validate the content on GradeBook Page
   ENG_GRADEBOOK_TC_3: function (testdata) {
      sts = gradeBookPage.getData_gradeBook()
      //console.log("gradebookdata - ",sts) 
      assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed");
      assertion.assert(sts.pageSubTitle.includes(testdata.pageSubTitle), "pageSubTitle is Not displayed");
      assertion.assertEqual(sts.graphHeader, testdata.graphHeader, "graphHeader is Not displayed");
      assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed");
      assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed");
      assertion.assertEqual(sts.graphImage, true, "graphImage is Not displayed");
      assertion.assertEqual(sts.averageScoreLegend, testdata.averageScoreLegend, "averageScoreLegend is Not displayed");
      assertion.assertEqual(sts.averageCompletionLegend, testdata.averageCompletionLegend, "averageCompletionLegend is Not displayed");
      assertion.assertEqual(sts.above70_lbl, testdata.above70_lbl, "above70_lbl is Not displayed");
      assertion.assertEqual(sts.below70_lbl, testdata.below70_lbl, "below70_lbl is Not displayed");
      assertion.assertEqual(sts.averageScore_lbl, testdata.averageScore_lbl, "above70_lbl is Not displayed");
      assertion.assertEqual(sts.averageCompletion_lbl, testdata.averageCompletion_lbl, "averageCompletion_lbl is Not displayed");
      assertion.assertEqual(sts.searchBox, true, "serachBox is Not displayed");
      assertion.assertEqual(sts.searchStudentPlaceholder, testdata.searchStudentPlaceholder, "searchStudentPlaceholder is Not displayed");
      assertion.assertEqual(sts.name_lbl, testdata.name_lbl, "name_lbl is Not displayed");
      assertion.assertEqual(sts.lastActive_lbl, testdata.lastActive_lbl, "lastActive_lbl is Not displayed");
      assertion.assertEqual(sts.time_lbl, testdata.time_lbl, "time_lbl is Not displayed");
      assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed");
      assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "score_lbl is Not displayed");
   },

   //Validate the Product List in GradeBook
   ENG_GRADEBOOK_TC_4: function (testdata) {
      sts = gradeBookPage.getData_productList()
      // Will add asserion when required.
    },

   //Validate clicking on the Student Name
   ENG_GRADEBOOK_TC_5: function (testdata) {
      sts = gradeBookPage.click_studentList(testdata);
      assertion.assertEqual(sts.pageStatus, true, "GradeBook Student Page not launched: ");
   },

   //Validate the Student List in GradeBook
   ENG_GRADEBOOK_TC_6: function (testdata) {
      sts = gradeBookPage.studentList_Data();
      for (let i = 0; i < sts.length; i++) {
         assertion.assertEqual(sts[i], testdata[i], "GradeBook Student Page not launched: ");
      }
   },

   //Validate that clicking on 'Download' button displays a snackbar message
	ENG_GRADEBOOK_TC_7: function (testdata) {
		sts = gradeBookPage.click_download_btn();
		assertion.assertEqual(sts, true, "Download button clicked");
      sts = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
		assertion.assert(sts,testdata, "Snackbar message mismatch: " + sts);
	},

   //Validate that clicking on 'Send to email' button displays a snackbar message
	ENG_GRADEBOOK_TC_8: function (testdata) {
		sts = gradeBookPage.click_sendtoemail_btn();
		assertion.assertEqual(sts, true, "Send to email button clicked");
      sts = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
		assertion.assert(sts,testdata, "Snackbar message mismatch: " + sts);
	},

   //---*** STUDENT VIEW GRADEBOOK -----

   //Validate the content on Student GradeBook Page
   ENG_GRADEBOOK_TC_9: function (testdata) {
      sts = studentGradeBookPage.getData_gradeBookStudentView()
      //console.log("student view testdata - ",testdata) 
      assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed");
      assertion.assert(sts.pageSubTitle.includes(testdata.pageSubTitle), "pageSubTitle is Not displayed");
      assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed");
      assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed");
      assertion.assert(sts.totalTimeSpent_lbl.includes(testdata.totalTimeSpent_lbl), "totalTimeSpent_lbl is Not displayed");
      assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed");
      assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "score_lbl is Not displayed");
      //assertion.assert(sts.classAnalyticsCompletion_lbl.includes(testdata.classAnalyticsCompletion_lbl), "classAnalyticsCompletion_lbl is Not displayed");
      //assertion.assert(sts.classAnalyticsScore_lbl.includes(testdata.classAnalyticsScore_lbl), "classAnalyticsScore_lbl is Not displayed");
      assertion.assertEqual(sts.lesson_title, testdata.lesson_title, "lesson_title is Not displayed");
      assertion.assertEqual(sts.lesson_Subtitle, testdata.lesson_Subtitle, "lesson_Subtitle is Not displayed");
   },

   //Validate the click on 'Show Activities' button
   ENG_GRADEBOOK_TC_10: function (testdata) {
      sts = studentGradeBookPage.click_showHideActivities_btn(testdata[0]);
      for (let i = 0; i < sts.length; i++) {
         assertion.assertEqual(sts[i].activityName, testdata[1][i].activityName, "Activity name Text mismatch");
         //assertion.assertEqual(sts[i].activityStatus, testdata[1][i].activityStatus, "Activity status mismatch");
         //  assertion.assertEqual(sts[i].activityScore, testdata[1][i].activityScore, "Activity name Text mismatch");
         // assertion.assertEqual(sts[i].activityAttempts, testdata[1][i].activityAttempts, "Activity name Text mismatch");
      }
   },

   
}