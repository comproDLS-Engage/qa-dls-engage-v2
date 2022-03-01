"use strict";
var assignmentListPage = require('../../pages/engageExperienceApp/assignmentListTeacher.page.js');
var assignmentListDetailsPage = require('../../pages/engageExperienceApp/assignmentListDetails.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

   //Validate the Blank Assignmnt Page
   ENG_ASSLIST_TC_1: function (testdata) {
      sts = assignmentListPage.getData_assignmentListPage()
      assertion.assertEqual(sts.blankAssignment_img, true, "Blank Assignment Icon status mismatch");
		assertion.assertEqual(sts.blankAssignment_title, testdata.Assignment_title, "Title Image status mismatch");
      assertion.assertEqual(sts.blankAssignment_subtitle,  testdata.blankAssignment_subtitle, "Assignment Subtitle status mismatch");
      assertion.assertEqual(sts.createAssignments_btn,  testdata.createAssignments_btn, "Create Assignment button status mismatch");
      assertion.assertEqual(sts.inProgress_lbl, null, "In Progress Label is avialable");
      assertion.assertEqual(sts. upcoming_lbl, null, "Upcoming Label is avialable");
      assertion.assertEqual(sts.past_lbl, null, "Past Label is avialable");
   },
   //Click on Add New button on Assignment Page
   ENG_ASSLIST_TC_2: function (testdata) {
      sts = assignmentListPage.click_addNew_btn()
      assertion.assertEqual(sts.componentHeader, testdata[0].componentHeader, "Assignment page status mismatch");
		assertion.assertEqual(sts[0].componentList, testdata[1].componentList[0].componentname, "Component name is mismatch");
      assertion.assertEqual(sts[1].componentList, testdata[1].componentList[1].componentname, "Component name is  mismatch");
      assertion.assertEqual(sts[2].componentList, testdata[1].componentList[2].componentname, "Component name is  mismatch");
      assertion.assertEqual(sts[3].componentList, testdata[1].componentList[3].componentname, "Component name is  mismatch");
   },
   //Click on the conmponent which is required
   ENG_ASSLIST_TC_3: function (testdata) {
      sts = assignmentListPage.click_componentList(testdata.componentList[3].componentname)
      assertion.assertEqual(sts.pageStatus, true, "Assignment page status mismatch");
   },

   //Click on Create Assignment button from the Inbox tab
   ENG_ASSLIST_TC_4: function () {
      sts = assignmentListPage.click_createAssignmentsbtn_inbox()
      assertion.assertEqual(sts.pageStatus, true, "Assignment page status mismatch");
		assertion.assertEqual(sts.appShellPage.header, true, "Activity page header status mismatch");
   },

   ENG_ASSLIST_TC_5: function (testdata) {
      sts = assignmentListPage.getData_assignmentCard(testdata);
      assertion.assertEqual(sts[0].assignmentName,testdata, "Assignment name is mismatch");
   },
   
   ENG_ASSLIST_TC_6: function (testdata) {
      sts = assignmentListPage.click_assignmentCard(testdata);
      assertion.assertEqual(sts.pageStatus, true, "Assignment Deatils page status mismatch");
   },

   ENG_ASSLIST_TC_7: function (testdata) {
      sts = assignmentListPage.getData_assignmentListPage(testdata);
      assertion.assertEqual(sts.blankAssignment_img, false, "Blank Assignment Icon status mismatch");
	   assertion.assertEqual(sts.addNew_btn,  testdata.addNew_btn, "Create Assignment button status mismatch");
      assertion.assertEqual(sts.inProgress_lbl, testdata.inProgress_lbl, "In Progress Label is avialable");
   },
   //Click Assignment More Option
   ENG_ASSLIST_TC_8: function (testdata) {
      sts = assignmentListPage.click_assignmentMoreOption(testdata[0]);
      assertion.assertEqual(sts.editAssignmentlabel, testdata[1].editAssignmentlabel, "editAssignmentlabel status mismatch");
	   assertion.assertEqual(sts.cloneAssignmentlabel,  testdata[1].cloneAssignmentlabel, "Clone Assignment Label status mismatch");
      assertion.assertEqual(sts.deleteAssignmentlabel, testdata[1].deleteAssignmentlabel, "deleteAssignmentlabel Label is avialable");
      assertion.assertEqual(sts.viewProgresslabel, testdata[1].viewProgresslabel, "viewProgresslabel status mismatch");
   },
   ENG_ASSLIST_TC_9: function (testdata) {
      sts = assignmentListPage.click_deleteAssignmentlabel();
      assertion.assertEqual(sts.deletedialogueHeader, testdata.deletedialogueHeader, "deletedialogueHeader is mismatch");
      assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn is  mismatch");
      assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn is  mismatch");
   },
   ENG_ASSLIST_TC_10: function () {
      sts = assignmentListPage.click_inProgress_arrow();
      assertion.assertEqual(sts.pageStatus, true, "Assignment list Details page status mismatch");
   },

   ENG_ASSLIST_TC_11: function () {
      sts = assignmentListPage.click_deletecancel_btn();
      assertion.assertEqual(sts, true, "Cancel button status mismatch");
   },
}