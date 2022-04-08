"use strict";
var gradeBookPage = require('../../pages/engageExperienceApp/gradeBook.page.js');
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
      console.log(sts) 
      assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "pageTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assert(sts.pageSubTitle.includes(testdata.pageSubTitle), "pageSubTitle is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.graphHeader, testdata.graphHeader, "graphHeader is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.download_btn, testdata.download_btn, "download_btn is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.sendtoemail_btn, testdata.sendtoemail_btn, "sendtoemail_btn is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.graphImage, true, "graphImage is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.averageScoreLegend, testdata.averageScoreLegend, "averageScoreLegend is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.averageCompletionLegend, testdata.averageCompletionLegend, "averageCompletionLegend is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.above70_lbl, testdata.above70_lbl, "above70_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.below70_lbl, testdata.below70_lbl, "below70_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.averageScore_lbl, testdata.averageScore_lbl, "above70_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.averageCompletion_lbl, testdata.averageCompletion_lbl, "averageCompletion_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.serachBox, true, "serachBox is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.searchStudentPlaceholder, testdata.searchStudentPlaceholder, "searchStudentPlaceholder is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.name_lbl, testdata.name_lbl, "name_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.lastActive_lbl, testdata.lastActive_lbl, "lastActive_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.time_lbl, testdata.time_lbl, "time_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.score_lbl, testdata.score_lbl, "score_lbl is Not displayed: " + JSON.stringify(sts))
      assertion.assertEqual(sts.completion_lbl, testdata.completion_lbl, "score_lbl is Not displayed: " + JSON.stringify(sts))
   },

   //Validate the Product List in GradeBook
   ENG_GRADEBOOK_TC_4: function (testdata) {
      sts = gradeBookPage.getData_productList()
      // Will add asserion when required.
    },

   //Click on the Student Name
   ENG_GRADEBOOK_TC_5: function (testdata) {
      sts = gradeBookPage.click_studentList(testdata);
      assertion.assertEqual(sts.pageStatus, true, "GradeBook Student Page not launched: " + JSON.stringify(sts))
   },
   ENG_GRADEBOOK_TC_6: function () {
      sts = gradeBookPage.studentList_Data();
      // Will add asserion when required.
      console.log(sts)
   },
   
}