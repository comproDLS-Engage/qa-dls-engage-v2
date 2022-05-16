"use strict";
var assignmentListDetailsPage = require('../../pages/engageExperienceApp/assignmentListDetails.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

   //Validate the click on upcoming assignment
   ENG_ASSLISTDETAILS_TC_1: async function (testdata) {
      sts = await assignmentListDetailsPage.click_upcoming_lbl();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[1]), true, "Selected tab mismatch");
   },

   //Validate the click on past assignment
   ENG_ASSLISTDETAILS_TC_2: async function (testdata) {
      sts = await assignmentListDetailsPage.click_past_lbl();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[2]), true, "Selected tab mismatch");
   },

   //Validate the click on in-progress assignment
   ENG_ASSLISTDETAILS_TC_3: async function (testdata) {
      sts = await assignmentListDetailsPage.click_inProgress_lbl();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[0]), true, "Selected tab mismatch");
   },

   //Validate the blank inprogress assignment page
   ENG_ASSLISTDETAILS_TC_4: async function (testdata) {
      sts = await assignmentListDetailsPage.getData_assignmentListPage()
      await assertion.assertEqual(sts.inProgress_count, null, "inProgress_count status mismatch");
      await assertion.assertEqual(sts.inProgress_noAssignmentTitle, testdata.inProgress_noAssignmentTitle, "inProgress_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.inProgress_noAssignmentSubTitle, testdata.inProgress_noAssignmentSubTitle, "inProgress_noAssignmentSubTitle Label is avialable");

   },

   //Validate the blank upcoming assignment page
   ENG_ASSLISTDETAILS_TC_5: async function (testdata) {
      sts = await assignmentListDetailsPage.getData_assignmentListPage()
      await assertion.assertEqual(sts.upcoming_count, null, "upcoming_count status mismatch");
      await assertion.assertEqual(sts.upcoming_noAssignmentTitle, testdata.upcoming_noAssignmentTitle, "past_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.upcoming_noAssignmentSubTitle, testdata.upcoming_noAssignmentSubTitle, "past_noAssignmentSubTitle Label is avialable");
   },

   //Validate the blank past assignment page
   ENG_ASSLISTDETAILS_TC_6: async function (testdata) {
      sts = await assignmentListDetailsPage.getData_assignmentListPage()
      await assertion.assertEqual(sts.past_count, null, "past_count status mismatch");
      await assertion.assertEqual(sts.past_noAssignmentTitle, testdata.past_noAssignmentTitle, "past_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.past_noAssignmentSubTitle, testdata.past_noAssignmentSubTitle, "past_noAssignmentSubTitle Label is avialable");
   },

   //Validate the content of assignment list details page
   ENG_ASSLISTDETAILS_TC_7: async function (testdata) {
      sts = await assignmentListDetailsPage.getData_assignmentListPage()
      await assertion.assertEqual(sts.Assignment_title, testdata.Assignment_title, "Assignment_title status mismatch");
      await assertion.assertEqual(sts.Assignment_subtitle, testdata.Assignment_subtitle, "Assignment_subtitle Label status mismatch");
      await assertion.assertEqual(sts.addNew_btn, testdata.addNew_btn, "addNew_btn Label is avialable");
      await assertion.assertEqual(sts.inProgress_lbl, testdata.inProgress_lbl, "inProgress_lbl status mismatch");
      await assertion.assertEqual(sts.upcoming_lbl, testdata.upcoming_lbl, "upcoming_lbl status mismatch");
      await assertion.assertEqual(sts.past_lbl, testdata.past_lbl, "past_lbl Label status mismatch");
   },

   //validate the details of assignment card
   ENG_ASSLISTDETAILS_TC_8: async function (testdata) {
      sts = await assignmentListDetailsPage.getData_assignmentCard(testdata)
      await assertion.assertEqual(sts[0].assignmentName, testdata, "Assignment name is mismatch");
   },

   ENG_ASSLISTDETAILS_TC_9: async function (testdata) {
      sts = await assignmentListDetailsPage.click_editAssignment_btn(testdata)
      await assertion.assertEqual(sts.pageStatus, true, "Edit Assignment page status mismatch");
   },

   ENG_ASSLISTDETAILS_TC_10: async function (testdata) {
      sts = await assignmentListDetailsPage.click_cloneAssignment_btn(testdata)
      await assertion.assertEqual(sts.pageStatus, true, "Create Assignment page status mismatch");
   },

   ENG_ASSLISTDETAILS_TC_11: async function (testdata) {
      sts = await assignmentListDetailsPage.click_deleteAssignment_btn(testdata)
      //ENG_ASSDETAILS_TC_3
      await assertion.assertEqual(sts.deletedialogueHeader, testdata.deletedialogueHeader, "deletedialogueHeader is mismatch");
      await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn is  mismatch");
      await assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn is  mismatch");
   },

   ENG_ASSLISTDETAILS_TC_12: async function (testdata) {
      sts = await assignmentListDetailsPage.click_viewProgress_btn(testdata)
      await assertion.assertEqual(sts.pageStatus, true, "Assignment Details page status mismatch");
   },

}