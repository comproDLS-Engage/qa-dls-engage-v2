"use strict";
var assignmentListDetailsPage = require('../../pages/engageExperienceApp/assignmentListTeacher.page.js');
var assignmentDetailsPage = require('../../pages/engageExperienceApp/assignmentDetails.page.js');
var createAssignmentPage = require('../../pages/engageExperienceApp/createAssignment.page.js');
const selectActivityPage = require('../../pages/engageExperienceApp/selectActivity.page.js');
var editAssignmentPage = require('../../pages/engageExperienceApp/editAssignment.page.js');
var common = require('./common.test');
var viewAsStudentAssignmentPage = require('../../pages/engageExperienceApp/viewAsStudentAssignment.page.js');
var sts;

module.exports = {

   //Validate the Blank Assignmnt Page
   ENG_ASSDETAILS_TC_1: function (testdata) {
      sts = assignmentDetailsPage.getData_assignmentDetails();
      assertion.assertEqual(sts.assignment_name, testdata[0], "assignment_name is mismatch");
      assertion.assertEqual(sts.dueDate_lbl, testdata[1].dueDate_lbl, "dueDate_lbl is  mismatch");
      assertion.assertEqual(sts.studentsTab, testdata[1].studentsTab, "studentsTab is  mismatch");
      assertion.assertEqual(sts.viewasStudent, testdata[1].viewasStudent, "viewasStudent is mismatch");
      assertion.assertEqual(sts.allowLateSubmission_lbl, testdata[1].allowLateSubmission_lbl, "allowLateSubmission_lbl is  mismatch");
      assertion.assertEqual(sts.preventfromSkipping_lbl, testdata[1].preventfromSkipping_lbl, "preventfromSkipping_lbl is  mismatch");
      assertion.assertEqual(sts.disableShowAnswers_lbl, testdata[1].disableShowAnswers_lbl, "disableShowAnswers_lbl is  mismatch");
      assertion.assertEqual(sts.includeProgressBar_lbl, testdata[1].includeProgressBar_lbl, "includeProgressBar_lbl is  mismatch");
      //needs to be updated
   },

   ENG_ASSDETAILS_TC_2: function (testdata) {
      sts = assignmentDetailsPage.click_viewasStudentmoreoption();
      assertion.assertEqual(sts.editAssignmentIcon, true, "editAssignmentIcon is mismatch");
      assertion.assertEqual(sts.editAssignmentlbl, testdata.editAssignmentlbl, "editAssignmentlbl is  mismatch");
      assertion.assertEqual(sts.cloneAssignmentIcon, true, "cloneAssignmentIcon is  mismatch");
      assertion.assertEqual(sts.cloneAssignmentlbl, testdata.cloneAssignmentlbl, "cloneAssignmentlbl is  mismatch");
      assertion.assertEqual(sts.deleteAssignmentIcon, true, "deleteAssignmentIcon is mismatch");
      assertion.assertEqual(sts.deleteAssignmentlbl, testdata.deleteAssignmentlbl, "deleteAssignmentlbl is  mismatch");
   },
   ENG_ASSDETAILS_TC_3: function (testdata) {
      sts = assignmentDetailsPage.click_deleteAssignmentlbl();
      assertion.assertEqual(sts.deletedialogueHeader, testdata.deletedialogueHeader, "deletedialogueHeader is mismatch");
      assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn is  mismatch");
      assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn is  mismatch");
   },
   ENG_ASSDETAILS_TC_4: function (testdata) {
      sts = assignmentListDetailsPage.click_delete_btn();
      assertion.assertEqual(sts, true, "Delete button status mismatch");
      sts = common.get_Snackbar_Message_Text();
      assertion.assertEqual(sts, testdata.deletemsg, "Delete assignment msg status mismatch");
      //assertion.assert(sts.includes("1"), "Snackbar message mismatch: " + sts);
   },
   ENG_ASSDETAILS_TC_5: function () {
      sts = assignmentDetailsPage.click_editAssignmentlbl();
      assertion.assertEqual(sts.pageStatus, true, "Edit Assignment page status mismatch");
   },
   ENG_ASSDETAILS_TC_6: function (testdata) {
      sts = editAssignmentPage.set_assignmentName_txtbox(testdata)
      assertion.assertEqual(sts, true, "Textbox text status mismatch");
   },
   ENG_ASSDETAILS_TC_7: function (testdata) {
      sts = editAssignmentPage.click_SaveandClose()
      assertion.assertEqual(sts.pageStatus, true, "Edit Assignment page status mismatch");
      sts = common.get_Snackbar_Message_Text();
      assertion.assertEqual(sts, testdata.editmsg, "Edit assignment msg status mismatch");
   },
   ENG_ASSDETAILS_TC_8: function () {
      sts = assignmentDetailsPage.click_cloneAssignmentlbl();
      assertion.assertEqual(sts.pageStatus, true, "Create Assignment page status mismatch");
   },
   ENG_ASSDETAILS_TC_9: function (testdata) {
      sts = editAssignmentPage.set_assignmentName_txtbox(testdata)
      assertion.assertEqual(sts, true, "Textbox text status mismatch");
   },
   ENG_ASSDETAILS_TC_10: function (testdata) {
      var name = testdata[0].concat(testdata[1].current);
      sts = createAssignmentPage.click_classList(name)
      assertion.assertEqual(sts, true, "button is not clicked");
   },
   ENG_ASSDETAILS_TC_11: function () {
      sts = assignmentDetailsPage.click_viewasStudent()
      assertion.assertEqual(sts.pageStatus, true, "View As Student page status mismatch");
   },
   ENG_ASSDETAILS_TC_12: function (testdata) {
      sts = viewAsStudentAssignmentPage.getData_studentViewPage();
      assertion.assertEqual(sts.eye_icon, true, "eye_icon is mismatch");
      assertion.assertEqual(sts.activity_icon, true, "activity_icon is  mismatch");
      assertion.assertEqual(sts.cancel, true, "cancel is  mismatch");
      assertion.assertEqual(sts.showDetails_btn, testdata.showDetails_btn, "showDetails_btn is  mismatch");
      //need to add this selector
      //assertion.assertEqual(sts.studentView, testdata.studentView, "studentView is  mismatch");
      assertion.assertEqual(sts.activity_lbl, testdata.activity_lbl, "activity_lbl is  mismatch");
   },
   ENG_ASSDETAILS_TC_13: function () {
      sts = viewAsStudentAssignmentPage.click_cancel();
      assertion.assertEqual(sts.pageStatus, true, "assignment Details page status mismatch");
   },
   ENG_ASSDETAILS_TC_14: function () {
      sts = editAssignmentPage.click_Cancel()
      assertion.assertEqual(sts.pageStatus, true, "assignment Details page status mismatch");
   }
}