"use strict";
var assignmentListDetailsPage = require('../../pages/engageExperienceApp/assignmentListTeacher.page.js');
var assignmentDetailsPage = require('../../pages/engageExperienceApp/assignmentDetails.page.js');
var createAssignmentPage = require('../../pages/engageExperienceApp/createAssignment.page.js');
const selectActivityPage = require('../../pages/engageExperienceApp/selectActivity.page.js');
var editAssignmentPage = require('../../pages/engageExperienceApp/editAssignment.page.js');
var common = require('./common.test');
var sts;

module.exports = {

   //Validate the content of Create assignment Page
   ENG_SLCTACTIVITY_TC_1: function (testdata) {
      sts = selectActivityPage.getData_pageData()
      assertion.assertEqual(sts.page_header, testdata[0].page_header, "previousPageArrow mismatch");
		assertion.assertEqual(sts.book_icon, true, "nextPageArrow mismatch");
		assertion.assertEqual(sts.book_title, testdata[1].name, "Tab Name mismatch");
		assertion.assertEqual(sts.component_Name, testdata[1].componentList[3].componentname, "filtersBtn mismatch");
      //assertion.assertEqual(sts.selectedActivity, null, "previousPageArrow mismatch");
		//assertion.assertEqual(sts.selectActivityCount, null, "nextPageArrow mismatch");
      assertion.assertEqual(sts.cancel_btn, testdata[0].cancel_btn, "nextPageArrow mismatch");
		assertion.assertEqual(sts.continuetoDetails_btn,testdata[0].continuetoDetails_btn, "Tab Name mismatch");
   },

   ENG_SLCTACTIVITY_TC_2: function (testdata) {
      sts = selectActivityPage.click_parentfolderofActivity(testdata);
      console.log(sts)
   },
   ENG_SLCTACTIVITY_TC_3: function () {
      sts = selectActivityPage.click_continuetoDetails_btn();
      assertion.assertEqual(sts.pageStatus, true, "Create Assignment page status mismatch");
   }
}