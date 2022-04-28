"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');
const { confirmPassword_input } = require('./settings.page.js');

module.exports = {
  pageTitle: selectorFile.css.ComproEngage.gradeBook.pageTitle,
  pageSubTitle: selectorFile.css.ComproEngage.gradeBook.pageSubTitle,
  noGradeBookIcon: selectorFile.css.ComproEngage.gradeBook.noGradeBookIcon,
  noGradeBookTitle: selectorFile.css.ComproEngage.gradeBook.noGradeBookTitle,
  noGradeBookSubTitle: selectorFile.css.ComproEngage.gradeBook.noGradeBookSubTitle,
  download_btn: selectorFile.css.ComproEngage.gradeBook.download_btn,
  graphHeader: selectorFile.css.ComproEngage.gradeBook.graphHeader,
  sendtoemail_btn: selectorFile.css.ComproEngage.gradeBook.sendtoemail_btn,
  graphImage: selectorFile.css.ComproEngage.gradeBook.graphImage,
  averageScoreLegend: selectorFile.css.ComproEngage.gradeBook.averageScoreLegend,
  averageCompletionLegend: selectorFile.css.ComproEngage.gradeBook.averageCompletionLegend,
  productListName: selectorFile.css.ComproEngage.gradeBook.productListName,
  teacherOnlyIcon: selectorFile.css.ComproEngage.gradeBook.teacherOnlyIcon,
  above70_lbl: selectorFile.css.ComproEngage.gradeBook.above70_lbl,
  below70_lbl: selectorFile.css.ComproEngage.gradeBook.below70_lbl,
  averageScore_lbl: selectorFile.css.ComproEngage.gradeBook.averageScore_lbl,
  averageCompletion_lbl: selectorFile.css.ComproEngage.gradeBook.averageCompletion_lbl,
  students_lbl: selectorFile.css.ComproEngage.gradeBook.students_lbl,
  searchBox: selectorFile.css.ComproEngage.gradeBook.searchBox,
  searchStudentPlaceholder: selectorFile.css.ComproEngage.gradeBook.searchStudentPlaceholder,
  name_lbl: selectorFile.css.ComproEngage.gradeBook.name_lbl,
  lastActive_lbl: selectorFile.css.ComproEngage.gradeBook.lastActive_lbl,
  time_lbl: selectorFile.css.ComproEngage.gradeBook.time_lbl,
  score_lbl: selectorFile.css.ComproEngage.gradeBook.score_lbl,
  completion_lbl: selectorFile.css.ComproEngage.gradeBook.completion_lbl,
  studentList: selectorFile.css.ComproEngage.gradeBook.studentList,


  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.pageTitle),
      appShellPage: appShellPage.isInitialized()
    };
    return res;
  },

  getData_gradeBook: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
      pageSubTitle: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
      noGradeBookIcon: (action.getElementCount(this.noGradeBookIcon) > 0) ? action.waitForDisplayed(this.noGradeBookIcon) : false,
      noGradeBookTitle: (action.getElementCount(this.noGradeBookTitle) > 0) ? action.getText(this.noGradeBookTitle) : null,
      noGradeBookSubTitle: (action.getElementCount(this.noGradeBookSubTitle) > 0) ? action.getText(this.noGradeBookSubTitle) : null,
      download_btn: (action.getElementCount(this.download_btn) > 0) ? action.getText(this.download_btn) : null,
      sendtoemail_btn: (action.getElementCount(this.sendtoemail_btn) > 0) ? action.getText(this.sendtoemail_btn) : null,
      graphHeader: (action.getElementCount(this.graphHeader) > 0) ? action.getText(this.graphHeader) : null,
      graphImage: (action.getElementCount(this.graphImage) > 0) ? action.waitForDisplayed(this.graphImage) : false,
      averageScoreLegend: (action.getElementCount(this.averageScoreLegend) > 0) ? action.getText(this.averageScoreLegend) : null,
      averageCompletionLegend: (action.getElementCount(this.averageCompletionLegend) > 0) ? action.getText(this.averageCompletionLegend) : null,
      above70_lbl: (action.getElementCount(this.above70_lbl) > 0) ? action.getText(this.above70_lbl) : null,
      below70_lbl: (action.getElementCount(this.below70_lbl) > 0) ? action.getText(this.below70_lbl) : null,
      averageScore_lbl: (action.getElementCount(this.averageScore_lbl) > 0) ? action.getText(this.averageScore_lbl) : null,
      averageCompletion_lbl: (action.getElementCount(this.averageCompletion_lbl) > 0) ? action.getText(this.averageCompletion_lbl) : null,
      students_lbl: (action.getElementCount(this.students_lbl) > 0) ? action.getText(this.students_lbl) : null,
      searchBox: (action.getElementCount(this.searchBox) > 0) ? action.waitForDisplayed(this.searchBox) : false,
      searchStudentPlaceholder: (action.getElementCount(this.searchStudentPlaceholder) > 0) ? action.getAttribute(this.searchStudentPlaceholder, "placeholder") : null,
      name_lbl: (action.getElementCount(this.name_lbl) > 0) ? action.getText(this.name_lbl) : null,
      lastActive_lbl: (action.getElementCount(this.lastActive_lbl) > 0) ? action.getText(this.lastActive_lbl) : null,
      time_lbl: (action.getElementCount(this.time_lbl) > 0) ? action.getText(this.time_lbl) : null,
      score_lbl: (action.getElementCount(this.score_lbl) > 0) ? action.getText(this.score_lbl) : null,
      completion_lbl: (action.getElementCount(this.completion_lbl) > 0) ? action.getText(this.completion_lbl) : null,
      studentList: this.studentList_Data(),
    }
    return obj;
  },

  studentList_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var studentList_Arr = [];
    list = action.findElements(this.studentList);
    for (i = 0; i < list.length; i++) {
      studentList_Arr[i] = action.getText(this.studentList + i + "-0]")
    }
    logger.logInto(stackTrace.get(), studentList_Arr);
    return studentList_Arr;
  },

  getData_productList: function (productListNameName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.productListName);
    var list = action.findElements(this.productListName);
    if (productListNameName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.productListName + i) == productListNameName) {
          console.log(this.teacherOnlyIcon + i + "] span>span>span")
          obj[0] = {
            productListName: (action.getElementCount(this.productListName + i + "] p") > 0) ? action.getText(this.productListName + i + "] p") : null,
            teacherOnlyIcon: (action.getElementCount(this.teacherOnlyIcon + i + "] span>span>span") > 0) ? action.getText(this.teacherOnlyIcon + i + "] span>span>span") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          productListName: (action.getElementCount(this.productListName + i + "] p") > 0) ? action.getText(this.productListName + i + "] p") : null,
          teacherOnlyIcon: (action.getElementCount(this.teacherOnlyIcon + i + "] span>span>span") > 0) ? action.getText(this.teacherOnlyIcon + i + "] span>span>span") : null,
        }
      }
    }
    //console.log("obj tc4 -",obj)
    return obj;
  },

  

  click_download_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.download_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " download_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "download_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_sendtoemail_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.sendtoemail_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " sendtoemail_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "sendtoemail_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_studentList: function (studentListName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.studentList);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.studentList + i + "]")) == studentListName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      res = require('./gradeBookStudent.page').isInitialized();
      logger.logInto(stackTrace.get(), " --studentList clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --studentList NOT clicked", "error")
    return res;
  }

}

