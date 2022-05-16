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

  
   ENG_CREATEASS_TC_1: async function (testdata) {
      sts = await createAssignmentPage.set_assignment_txtbox(testdata);
      await assertion.assertEqual(sts, true, "Text are added in assignment textbox");
   },
   ENG_CREATEASS_TC_2: async function (testdata) {
      sts = await createAssignmentPage.click_assign_btn();
      await assertion.assertEqual(sts.activitylbl, testdata.activitylbl, "activitylbl is mismatch");
      await assertion.assertEqual(sts.classToAssignlbl, testdata.classToAssignlbl, "classToAssignlbl is  mismatch");
      await assertion.assertEqual(sts.assignmentSubmitDialogueSubHeader, testdata.assignmentSubmitDialogueSubHeader, "assignmentSubmitDialogueSubHeader is  mismatch");
      await assertion.assertEqual(sts.startDatelbl, testdata.startDatelbl, "startDatelbl is  mismatch");
      await assertion.assertEqual(sts.startDateIcon, true, "startDateIcon is mismatch");
      await assertion.assertEqual(sts.endDatelbl, testdata.endDatelbl, "startDatelbl is  mismatch");
      await assertion.assertEqual(sts.endDateIcon, true, "endDateIcon: is mismatch");
      await assertion.assertEqual(sts.cancel, testdata.cancel_btn, "deleteAssignmentlbl is  mismatch");
      await assertion.assertEqual(sts.confirmAssign, testdata.confirmAssign, "confirmAssign is  mismatch");
   },
  
   ENG_CREATEASS_TC_3: async function () {
      sts = await createAssignmentPage.click_confirmAssign();
      await assertion.assertEqual(sts.pageStatus, true, "Assignment page status mismatch");
   },

   ENG_CREATEASS_TC_4: async function (testdata) {
      sts = await createAssignmentPage.getData_createAssignment();

      await assertion.assertEqual(sts.activity_lbl, testdata.activity_lbl, "activity_lbl is mismatch");
      await assertion.assertEqual(sts.addActivity_lbl, testdata.addActivity_lbl, "addActivity_lbl is  mismatch");
      await assertion.assertEqual(sts.activitylist_lbl, testdata.activitylist_lbl, "activitylist_lbl is  mismatch");
      await assertion.assertEqual(sts.activityUnit_lbl, testdata.activityUnit_lbl, "activityUnit_lbl is  mismatch");
      await assertion.assertEqual(sts.assignment_lbl, testdata.assignment_lbl, "assignment_lbl is mismatch");
      await assertion.assertEqual(sts.startDate_lbl, testdata.startDatelbl, "startDate_lbl is  mismatch");
      await assertion.assertEqual(sts.endDate_lbl, testdata.endDatelbl, "activitylist_lbl is  mismatch");
      await assertion.assertEqual(sts.showAdvanceOption, testdata.showAdvanceOption, "showAdvanceOption name is  mismatch");
      await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn is  mismatch");
      await assertion.assertEqual(sts.assign_btn, testdata.assign_btn, "assign_btn is  mismatch");
      await assertion.assertEqual(sts.activityCount_icon, true, "activityCount_icon is  mismatch");
      await assertion.assertEqual(sts.addActivity_icon, true, "addActivity_icon is  mismatch");
      await assertion.assertEqual(sts.startDate_icon, true, "startDate_icon is  mismatch");
      await assertion.assertEqual(sts.endDate_icon, true, "endDate_icon is  mismatch");
   },

   ENG_CREATEASS_TC_5: async function () {
      sts = await createAssignmentPage.click_cancel_btn();
      await assertion.assertEqual(sts, true, "cancel button status mismatch");
   },


   //Validate the click of show advanced option

   ENG_CREATEASS_TC_6: async function (testdata) {
      sts = await createAssignmentPage.click_showAdvanceOption();
      await assertion.assertEqual(sts.advancedOption, testdata.advancedOption, "advancedOption is mismatch");
      await assertion.assertEqual(sts.allowLateSubmission_lbl, testdata.allowLateSubmission_lbl, "allowLateSubmission_lbl is  mismatch");
      await assertion.assertEqual(sts.allowLateSubmission_btn, true, "allowLateSubmission_btn is mismatch");
      await assertion.assertEqual(sts.allowLateSubmission_info,true, "allowLateSubmission_info is  mismatch");
      await assertion.assertEqual(sts.preventfromSkipping_lbl, testdata.preventfromSkipping_lbl, "preventfromSkipping_lbl is  mismatch");
      await assertion.assertEqual(sts.preventfromSkipping_btn, true, "preventfromSkipping_btn is mismatch");
      await assertion.assertEqual(sts.preventfromSkipping_info,true, "preventfromSkipping_info is  mismatch");
      await assertion.assertEqual(sts.disableShowAnswers_lbl, testdata.disableShowAnswers_lbl, "allowLateSubmission_lbl is  mismatch");
      await assertion.assertEqual(sts.disableShowAnswers_btn, true, "disableShowAnswers_btn is mismatch");
      await assertion.assertEqual(sts.disableShowAnswers_info,true, "disableShowAnswers_info is  mismatch");
      await assertion.assertEqual(sts.includeProgressBar_lbl, testdata.includeProgressBar_lbl, "allowLateSubmission_lbl is  mismatch");
      await assertion.assertEqual(sts.includeProgressBar_btn, true, "includeProgressBar_btn is mismatch");
      await assertion.assertEqual(sts.futureEditNotSupported_icon,true, "futureEditNotSupported_icon is  mismatch");
      await assertion.assertEqual(sts.futureEditNotSupportedHeading, testdata.futureEditNotSupportedHeading, "futureEditNotSupportedHeading is  mismatch");
      await assertion.assertEqual(sts.futureEditNotSupportedSubHeading, testdata.futureEditNotSupportedSubHeading, "futureEditNotSupportedSubHeading is  mismatch");
      await assertion.assertEqual(sts.hideAdvancedOption, testdata.hideAdvancedOption, "hideAdvancedOption is  mismatch");
   },

}