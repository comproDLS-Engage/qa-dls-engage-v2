"use strict";
var assignmentListDetailsPage_student = require('../../pages/engageExperienceApp/assignmentStudentList.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

   //Validate the content on blank Due assignment page
   ENG_ASSLIST_STU_TC_1: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_assignmentListPage()
      await assertion.assertEqual(sts.due_noAssignmentTitle, testdata.due_noAssignmentTitle, "due_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.due_noAssignmentSubTitle, testdata.due_noAssignmentSubTitle, "due_noAssignmentSubTitle Label is avialable");
   },

   //Validate the content on blank Upcoming assignment page
   ENG_ASSLIST_STU_TC_2: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_assignmentListPage()
      await assertion.assertEqual(sts.upcoming_noAssignmentTitle, testdata.upcoming_noAssignmentTitle, "upcoming_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.upcoming_noAssignmentSubTitle, testdata.upcoming_noAssignmentSubTitle, "upcoming_noAssignmentSubTitle Label is avialable");
   },

   //Validate the content on blank Completed assignment page
   ENG_ASSLIST_STU_TC_3: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_assignmentListPage()
      await assertion.assertEqual(sts.completed_noAssignmentTitle, testdata.completed_noAssignmentTitle, "completed_noAssignmentTitle Label status mismatch");
      await assertion.assertEqual(sts.completed_noAssignmentSubTitle, testdata.completed_noAssignmentSubTitle, "completed_noAssignmentSubTitle Label is avialable");
   },

   //Validate the click on Due assignment tab on assignment page
   ENG_ASSLIST_STU_TC_4: async function (testdata) {
      sts = await assignmentListDetailsPage_student.click_dueAssignmentBtn();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[0]), true, "Selected tab mismatch");
   },

   //Validate the click on Upcoming assignment tab on assignment page
   ENG_ASSLIST_STU_TC_5: async function (testdata) {
      sts = await assignmentListDetailsPage_student.click_upcomingAssignmentBtn();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[1]), true, "Selected tab mismatch");
   },

   //Validate the click on Completed assignment tab on assignment page
   ENG_ASSLIST_STU_TC_6: async function (testdata) {
      sts = await assignmentListDetailsPage_student.click_completedAssignmentBtn();
      await assertion.assertEqual(sts, true, "Select tab error");
      sts = await appShell.getTabsListData();
      await assertion.assertEqual(sts.selected.includes(testdata.tabList[2]), true, "Selected tab mismatch");
   },

   //Validate the content of student assignment list details page
   ENG_ASSLIST_STU_TC_7: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_assignmentListPage()
      await assertion.assertEqual(sts.assignmentDetailPageTitle, testdata.assignmentDetailPageTitle, "Assignment_title status mismatch");
      await assertion.assertEqual(sts.assignmentDetailPageSubtitle, testdata.assignmentDetailPageSubtitle, "Assignment_subtitle Label status mismatch");
      await assertion.assertEqual(sts.dueAssignmentBtn, testdata.dueAssignmentBtn, "dueAssignmentBtn status mismatch");
      await assertion.assertEqual(sts.upcomingAssignmentBtn, testdata.upcomingAssignmentBtn, "upcomingAssignmentBtn status mismatch");
      await assertion.assertEqual(sts.completedAssignmentBtn, testdata.completedAssignmentBtn, "completedAssignmentBtn Label status mismatch");
   },

   //Validate the details of assignment list
   ENG_ASSLIST_STU_TC_8: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_assignmentList()
      for (let i = 0; i < sts.length; i++) {
         //console.log("i -",i)
         await assertion.assertEqual(sts[i].assignmentName, testdata[i].assignmentName, "Assignment name Text mismatch");
      }
   },

   //Validate the click on 'Show Activities' button
   ENG_ASSLIST_STU_TC_9: async function (testdata) {
      sts = await assignmentListDetailsPage_student.click_showActivitiesBtn(testdata[0]);
     for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].activityName, testdata[1][i].activityName, "Activity name Text mismatch");
         //assertion.assertEqual(sts[i].activityStatus, testdata[1][i].activityStatus, "Activity status mismatch");
         //  assertion.assertEqual(sts[i].activityScore, testdata[1][i].activityScore, "Activity name Text mismatch");
         // assertion.assertEqual(sts[i].activityAttempts, testdata[1][i].activityAttempts, "Activity name Text mismatch");
      }
   },
   ENG_ASSLIST_STU_TC_10: async function (testdata) {
      console.log(testdata)
      sts = await assignmentListDetailsPage_student.click_activityName(testdata);
      console.log(sts)
   },
   ENG_ASSLISTDETAILS_TC_12: async function (testdata) {
      sts = await assignmentListDetailsPage.click_viewProgress_btn(testdata)
      await assertion.assertEqual(sts.pageStatus, true, "Assignment Details page status mismatch");
   },
   ENG_ASSLIST_STU_TC_13: async function (testdata) {
      sts = await assignmentListDetailsPage_student.getData_activityList(testdata[0]);
      for (let i = 0; i < sts.length; i++) {
         await assertion.assertEqual(sts[i].activityName, testdata[1][i].activityName, "Activity name Text mismatch");
         await assertion.assertEqual(sts[i].activityStatus, testdata[1][i].activityStatus, "Activity status mismatch");
         await assertion.assertEqual(sts[i].activityScore, testdata[1][i].activityScore, "Activity name Text mismatch");
         await assertion.assertEqual(sts[i].activityAttempts, testdata[1][i].activityAttempts, "Activity name Text mismatch");
      }
   },
}