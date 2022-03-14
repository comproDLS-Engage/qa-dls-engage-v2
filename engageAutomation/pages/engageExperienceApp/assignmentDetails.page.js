"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  assignment_name: selectorFile.css.ComproEngage.assignmentDetails.assignment_name,
  activity_icon: selectorFile.css.ComproEngage.assignmentDetails.activity_icon,
  activity_lbl: selectorFile.css.ComproEngage.assignmentDetails.activity_lbl,
  avgScore_icon: selectorFile.css.ComproEngage.assignmentDetails.avgScore_icon,
  avgScore_lbl: selectorFile.css.ComproEngage.assignmentDetails.avgScore_lbl,
  dueDate_icon: selectorFile.css.ComproEngage.assignmentDetails.dueDate_icon,
  dueDate_lbl: selectorFile.css.ComproEngage.assignmentDetails.dueDate_lbl,
  turnedInValue: selectorFile.css.ComproEngage.assignmentDetails.turnedInValue,
  dueDate_pill: selectorFile.css.ComproEngage.assignmentDetails.dueDate_pill,
  turnedIn_bar: selectorFile.css.ComproEngage.assignmentDetails.turnedIn_bar,
  studentsTab: selectorFile.css.ComproEngage.assignmentDetails.studentsTab,
  ActivityListTab: selectorFile.css.ComproEngage.assignmentDetails.ActivityListTab,
  search_textbox_placeholder: selectorFile.css.ComproEngage.assignmentDetails.search_textbox_placeholder,
  search_icon: selectorFile.css.ComproEngage.assignmentDetails.search_icon,
  student_count: selectorFile.css.ComproEngage.assignmentDetails.student_count,
  noStudent_header: selectorFile.css.ComproEngage.assignmentDetails.noStudent_header,
  noStudent_Subheader: selectorFile.css.ComproEngage.assignmentDetails.noStudent_Subheader,
  noStudent_icon: selectorFile.css.ComproEngage.assignmentDetails.noStudent_icon,
  name_lbl: selectorFile.css.ComproEngage.assignmentDetails.name_lbl,
  progress_lbl: selectorFile.css.ComproEngage.assignmentDetails.progress_lbl,
  turnedIn_lbl: selectorFile.css.ComproEngage.assignmentDetails.turnedIn_lbl,
  score_lbl: selectorFile.css.ComproEngage.assignmentDetails.score_lbl,
  studentCard: selectorFile.css.ComproEngage.assignmentDetails.studentCard,
  studentName: selectorFile.css.ComproEngage.assignmentDetails.studentName,
  progress_icon: selectorFile.css.ComproEngage.assignmentDetails.progress_icon,
  progress_value: selectorFile.css.ComproEngage.assignmentDetails.progress_value,
  turnedIn_value: selectorFile.css.ComproEngage.assignmentDetails.turnedIn_value,
  score: selectorFile.css.ComproEngage.assignmentDetails.score,
  viewasStudent: selectorFile.css.ComproEngage.assignmentDetails.viewasStudent,
  viewasStudent_icon: selectorFile.css.ComproEngage.assignmentDetails.viewasStudent_icon,
  viewasStudentmoreoption: selectorFile.css.ComproEngage.assignmentDetails.viewasStudentmoreoption,
  startDate_lbl: selectorFile.css.ComproEngage.assignmentDetails.startDate_lbl,
  startDate_icon: selectorFile.css.ComproEngage.assignmentDetails.startDate_icon,
  startDate_value: selectorFile.css.ComproEngage.assignmentDetails.startDate_value,
  dueDate_lbl: selectorFile.css.ComproEngage.assignmentDetails.dueDate_lbl,
  dueDate_icon: selectorFile.css.ComproEngage.assignmentDetails.dueDate_icon,
  dueDate_value: selectorFile.css.ComproEngage.assignmentDetails.dueDate_value,
  allowLateSubmission_lbl: selectorFile.css.ComproEngage.assignmentDetails.allowLateSubmission_lbl,
  allowLateSubmission_btn: selectorFile.css.ComproEngage.assignmentDetails.allowLateSubmission_btn,
  allowLateSubmission_info: selectorFile.css.ComproEngage.assignmentDetails.allowLateSubmission_info,
  preventfromSkipping_lbl: selectorFile.css.ComproEngage.assignmentDetails.preventfromSkipping_lbl,
  preventfromSkipping_btn: selectorFile.css.ComproEngage.assignmentDetails.preventfromSkipping_btn,
  preventfromSkipping_info: selectorFile.css.ComproEngage.assignmentDetails.preventfromSkipping_info,
  disableShowAnswers_lbl: selectorFile.css.ComproEngage.assignmentDetails.disableShowAnswers_lbl,
  disableShowAnswers_btn: selectorFile.css.ComproEngage.assignmentDetails.disableShowAnswers_btn,
  disableShowAnswers_info: selectorFile.css.ComproEngage.assignmentDetails.disableShowAnswers_info,
  includeProgressBar_lbl: selectorFile.css.ComproEngage.assignmentDetails.includeProgressBar_lbl,
  includeProgressBar_btn: selectorFile.css.ComproEngage.assignmentDetails.includeProgressBar_btn,
  includeProgressBar_info: selectorFile.css.ComproEngage.assignmentDetails.includeProgressBar_info,
  editAssignmentIcon: selectorFile.css.ComproEngage.assignmentDetails.editAssignmentIcon,
  editAssignmentlbl: selectorFile.css.ComproEngage.assignmentDetails.editAssignmentlbl,
  cloneAssignmentIcon: selectorFile.css.ComproEngage.assignmentDetails.cloneAssignmentIcon,
  cloneAssignmentlbl: selectorFile.css.ComproEngage.assignmentDetails.cloneAssignmentlbl,
  deleteAssignmentIcon: selectorFile.css.ComproEngage.assignmentDetails.deleteAssignmentIcon,
  deleteAssignmentlbl: selectorFile.css.ComproEngage.assignmentDetails.deleteAssignmentlbl,


  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.assignment_name),
    };
    return res;
  },

  getData_assignmentDetails: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      assignment_name: (action.getElementCount(this.assignment_name) > 0) ? action.getText(this.assignment_name) : null,
      activity_icon: (action.getElementCount(this.activity_icon) > 0) ? action.waitForDisplayed(this.activity_icon) : false,
      activity_lbl: (action.getElementCount(this.activity_lbl) > 0) ? action.getText(this.activity_lbl) : null,
      avgScore_icon: (action.getElementCount(this.avgScore_icon) > 0) ? action.waitForDisplayed(this.avgScore_icon) : false,
      avgScore_lbl: (action.getElementCount(this.avgScore_lbl) > 0) ? action.getText(this.avgScore_lbl) : null,
      dueDate_icon: (action.getElementCount(this.dueDate_icon) > 0) ? action.waitForDisplayed(this.dueDate_icon) : false,
      dueDate_lbl: (action.getElementCount(this.dueDate_lbl) > 0) ? action.getText(this.dueDate_lbl) : null,
      turnedInValue: (action.getElementCount(this.turnedInValue) > 0) ? action.getText(this.turnedInValue) : null,
      dueDate_pill: (action.getElementCount(this.dueDate_pill) > 0) ? action.getText(this.dueDate_pill) : null,
      turnedIn_bar: (action.getElementCount(this.turnedIn_bar) > 0) ? action.getText(this.turnedIn_bar) : null,
      studentsTab: (action.getElementCount(this.studentsTab) > 0) ? action.getText(this.studentsTab) : null,
      viewasStudent: (action.getElementCount(this.viewasStudent) > 0) ? action.getText(this.viewasStudent) : null,
      viewasStudent_icon: (action.getElementCount(this.viewasStudent_icon) > 0) ? action.getText(this.viewasStudent_icon) : null,
      viewasStudentmoreoption: (action.getElementCount(this.viewasStudentmoreoption) > 0) ? action.waitForDisplayed(this.viewasStudentmoreoption) : false,
      startDate_lbl: (action.getElementCount(this.startDate_lbl) > 0) ? action.getText(this.startDate_lbl) : null,
      startDate_icon: (action.getElementCount(this.startDate_icon) > 0) ? action.waitForDisplayed(this.startDate_icon) : false,
      startDate_value: (action.getElementCount(this.startDate_value) > 0) ? action.getText(this.startDate_value) : null,
      dueDate_lbl: (action.getElementCount(this.dueDate_lbl) > 0) ? action.getText(this.dueDate_lbl) : null,
      dueDate_icon: (action.getElementCount(this.dueDate_icon) > 0) ? action.waitForDisplayed(this.dueDate_icon) : false,
      dueDate_value: (action.getElementCount(this.dueDate_value) > 0) ? action.getText(this.dueDate_value) : null,
      allowLateSubmission_lbl: (action.getElementCount(this.allowLateSubmission_lbl) > 0) ? action.getText(this.allowLateSubmission_lbl) : null,
      allowLateSubmission_btn: (action.getElementCount(this.allowLateSubmission_btn) > 0) ? action.waitForExist(this.allowLateSubmission_btn) : null,
      allowLateSubmission_info: (action.getElementCount(this.allowLateSubmission_info) > 0) ? action.waitForDisplayed(this.allowLateSubmission_info) : false,
      preventfromSkipping_lbl: (action.getElementCount(this.preventfromSkipping_lbl) > 0) ? action.getText(this.preventfromSkipping_lbl) : null,
      preventfromSkipping_btn: (action.getElementCount(this.preventfromSkipping_btn) > 0) ? action.waitForExist(this.preventfromSkipping_btn) : null,
      preventfromSkipping_info: (action.getElementCount(this.preventfromSkipping_info) > 0) ? action.waitForDisplayed(this.preventfromSkipping_info) : false,
      disableShowAnswers_lbl: (action.getElementCount(this.disableShowAnswers_lbl) > 0) ? action.getText(this.disableShowAnswers_lbl) : null,
      disableShowAnswers_btn: (action.getElementCount(this.disableShowAnswers_btn) > 0) ? action.waitForExist(this.disableShowAnswers_btn) : null,
      disableShowAnswers_info: (action.getElementCount(this.disableShowAnswers_info) > 0) ? action.waitForDisplayed(this.disableShowAnswers_info) : false,
      includeProgressBar_lbl: (action.getElementCount(this.includeProgressBar_lbl) > 0) ? action.getText(this.includeProgressBar_lbl) : null,
      includeProgressBar_btn: (action.getElementCount(this.includeProgressBar_btn) > 0) ? action.waitForExist(this.includeProgressBar_btn) : null,
      includeProgressBar_info: (action.getElementCount(this.includeProgressBar_info) > 0) ? action.waitForDisplayed(this.includeProgressBar_info) : false,
    }
    return obj;
  },

  getData_studentList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      ActivityListTab: (action.getElementCount(this.ActivityListTab) > 0) ? action.getText(this.ActivityListTab) : null,
      search_textbox_placeholder: (action.getElementCount(this.search_textbox_placeholder) > 0) ? action.getText(this.search_textbox_placeholder) : null,
      search_icon: (action.getElementCount(this.search_icon) > 0) ? action.waitForDisplayed(this.search_icon) : false,
      student_count: (action.getElementCount(this.student_count) > 0) ? action.getText(this.student_count) : null,
      noStudent_header: (action.getElementCount(this.noStudent_header) > 0) ? action.getText(this.noStudent_header) : null,
      noStudent_Subheader: (action.getElementCount(this.noStudent_Subheader) > 0) ? action.getText(this.noStudent_Subheader) : null,
      noStudent_icon: (action.getElementCount(this.noStudent_icon) > 0) ? action.waitForDisplayed(this.noStudent_icon) : false,
      name_lbl: (action.getElementCount(this.name_lbl) > 0) ? action.getText(this.name_lbl) : null,
      progress_lbl: (action.getElementCount(this.progress_lbl) > 0) ? action.getText(this.progress_lbl) : null,
      turnedIn_lbl: (action.getElementCount(this.turnedIn_lbl) > 0) ? action.getText(this.turnedIn_lbl) : null,
      score_lbl: (action.getElementCount(this.score_lbl) > 0) ? action.getText(this.score_lbl) : null,
    }
    return obj;
  },

  getData_studentCard: function (studentCardName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.studentCard);
    var list = action.findElements(this.studentCard);
    if (studentCardName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.studentCard + i) == studentCardName) {
          obj[0] = {
            studentCard: (action.getElementCount(this.studentCard + i + "]") > 0) ? action.getText(this.studentCard + i + "]") : null,
            studentName: (action.getElementCount(this.studentName + i + "]") > 0) ? action.getText(this.studentName + i + "]") : null,
            progress_icon: (action.getElementCount(this.progress_icon + i + "]") > 0) ? action.waitForDisplayed(this.progress_icon + i + "]") : false,
            progress_value: (action.getElementCount(this.progress_value + i + "]") > 0) ? action.getText(this.progress_value + i + "]") : null,
            turnedIn_value: (action.getElementCount(this.turnedIn_value + i + "]") > 0) ? action.getText(this.turnedIn_value + i + "]") : null,
            score: (action.getElementCount(this.score + i + "]") > 0) ? action.getText(this.score + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          studentCard: (action.getElementCount(this.studentCard + i + "]") > 0) ? action.getText(this.studentCard + i + "]") : null,
          studentName: (action.getElementCount(this.studentName + i + "]") > 0) ? action.getText(this.studentName + i + "]") : null,
          progress_icon: (action.getElementCount(this.progress_icon + i + "]") > 0) ? action.waitForDisplayed(this.progress_icon + i + "]") : false,
          progress_value: (action.getElementCount(this.progress_value + i + "]") > 0) ? action.getText(this.progress_value + i + "]") : null,
          turnedIn_value: (action.getElementCount(this.turnedIn_value + i + "]") > 0) ? action.getText(this.turnedIn_value + i + "]") : null,
          score: (action.getElementCount(this.score + i + "]") > 0) ? action.getText(this.score + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_assignmentDetailsmoreOption: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      editAssignmentIcon: (action.getElementCount(this.editAssignmentIcon) > 0) ? action.waitForDisplayed(this.editAssignmentIcon) : false,
      editAssignmentlbl: (action.getElementCount(this.editAssignmentlbl) > 0) ? action.getText(this.editAssignmentlbl) : null,
      cloneAssignmentIcon: (action.getElementCount(this.cloneAssignmentIcon) > 0) ? action.waitForDisplayed(this.cloneAssignmentIcon) : false,
      cloneAssignmentlbl: (action.getElementCount(this.cloneAssignmentlbl) > 0) ? action.getText(this.cloneAssignmentlbl) : null,
      deleteAssignmentIcon: (action.getElementCount(this.deleteAssignmentIcon) > 0) ? action.waitForDisplayed(this.deleteAssignmentIcon) : false,
      deleteAssignmentlbl: (action.getElementCount(this.deleteAssignmentlbl) > 0) ? action.getText(this.deleteAssignmentlbl) : null,
    }
    return obj;
  },

  click_studentsTab: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.studentsTab);
    if (true == res) {
      logger.logInto(stackTrace.get(), " studentsTab is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "studentsTab is NOT clicked", 'error');
    }
    return res;
  },

  click_ActivityListTab: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.ActivityListTab);
    if (true == res) {
      logger.logInto(stackTrace.get(), " ActivityListTab is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "ActivityListTab is NOT clicked", 'error');
    }
    return res;
  },

  click_studentCard: function (studentNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.studentCard);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.studentName + i + "]")) == studentNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --studentCard clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --studentCard NOT clicked", "error")
    return res;
  },

  click_viewasStudent: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.viewasStudent);
    if (true == res) {
      logger.logInto(stackTrace.get(), " viewasStudent is clicked");
      res = require('./viewAsStudentAssignment.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "viewasStudent is NOT clicked", 'error');
    }
    return res;
  },

  click_viewasStudentmoreoption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.viewasStudentmoreoption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " viewasStudentmoreoption is clicked");
      res=this.getData_assignmentDetailsmoreOption();
    }
    else {
      logger.logInto(stackTrace.get(), res + "viewasStudentmoreoption is NOT clicked", 'error');
    }
    return res;
  },

  click_editAssignmentlbl: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.editAssignmentlbl);
    if (true == res) {
      logger.logInto(stackTrace.get(), " editAssignmentlbl is clicked");
      res = require('./editAssignment.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "editAssignmentlbl is NOT clicked", 'error');
    }
    return res;
  },

  click_cloneAssignmentlbl: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.cloneAssignmentlbl);
    if (true == res) {
      logger.logInto(stackTrace.get(), " cloneAssignmentlbl is clicked");
      res = require('./createAssignment.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "cloneAssignmentlbl is NOT clicked", 'error');
    }
    return res;
  },

  click_deleteAssignmentlbl: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.deleteAssignmentlbl);
    if (true == res) {
      res = require('./assignmentListTeacher.page').getData_deleteDialogue();
      logger.logInto(stackTrace.get(), " deleteAssignmentlbl is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "deleteAssignmentlbl is NOT clicked", 'error');
    }
    return res;
  },
  set_search_textbox_placeholder: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.search_textbox_placeholder, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in search_textbox_placeholder");
    } else {
      logger.logInto(stackTrace.get(), res + "Value is NOT entered in search_textbox_placeholder", 'error');
    }
    return res;
  },

}

