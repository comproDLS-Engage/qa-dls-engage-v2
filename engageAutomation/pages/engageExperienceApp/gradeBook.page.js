"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');

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
  classCode_btn: selectorFile.css.ComproEngage.gradeBook.classCode_btn,
  inviteEmail_btn: selectorFile.css.ComproEngage.gradeBook.inviteEmail,
  inviteStudents_lbl: selectorFile.css.ComproEngage.gradeBook.inviteStudents_lbl,
  inviteStudentsByline_lbl: selectorFile.css.ComproEngage.gradeBook.inviteStudentsByline_lbl,
  copyClassCode_btn:selectorFile.css.ComproEngage.gradeBook.copyClassCode_btn,
  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.pageTitle),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_gradeBook: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      pageTitle: ((await action.getElementCount(this.pageTitle)) > 0) ? await action.getText(this.pageTitle) : null,
      pageSubTitle: ((await action.getElementCount(this.pageSubTitle)) > 0) ? await action.getText(this.pageSubTitle) : null,
      noGradeBookIcon: ((await action.getElementCount(this.noGradeBookIcon)) > 0) ? await action.waitForDisplayed(this.noGradeBookIcon) : false,
      noGradeBookTitle: ((await action.getElementCount(this.noGradeBookTitle)) > 0) ? await action.getText(this.noGradeBookTitle) : null,
      noGradeBookSubTitle: ((await action.getElementCount(this.noGradeBookSubTitle)) > 0) ? await action.getText(this.noGradeBookSubTitle) : null,
      download_btn: ((await action.getElementCount(this.download_btn)) > 0) ? await action.getText(this.download_btn) : null,
      graphHeader: ((await action.getElementCount(this.graphHeader)) > 0) ? await action.getText(this.graphHeader) : null,
      sendtoemail_btn: ((await action.getElementCount(this.sendtoemail_btn)) > 0) ? await action.getText(this.sendtoemail_btn) : null,
      graphImage: ((await action.getElementCount(this.graphImage)) > 0) ? await action.waitForDisplayed(this.graphImage) : false,
      averageScoreLegend: ((await action.getElementCount(this.averageScoreLegend)) > 0) ? await action.getText(this.averageScoreLegend) : null,
      averageCompletionLegend: ((await action.getElementCount(this.averageCompletionLegend)) > 0) ? await action.getText(this.averageCompletionLegend) : null,
      above70_lbl: ((await action.getElementCount(this.above70_lbl)) > 0) ? await action.getText(this.above70_lbl) : null,
      below70_lbl: ((await action.getElementCount(this.below70_lbl)) > 0) ? await action.getText(this.below70_lbl) : null,
      averageScore_lbl: ((await action.getElementCount(this.averageScore_lbl)) > 0) ? await action.getText(this.averageScore_lbl) : null,
      averageCompletion_lbl: ((await action.getElementCount(this.averageCompletion_lbl)) > 0) ? await action.getText(this.averageCompletion_lbl) : null,
      students_lbl: ((await action.getElementCount(this.students_lbl)) > 0) ? await action.getText(this.students_lbl) : null,
      searchBox: ((await action.getElementCount(this.searchBox)) > 0) ? await action.waitForDisplayed(this.searchBox) : false,
      searchStudentPlaceholder: ((await action.getElementCount(this.searchStudentPlaceholder)) > 0) ? await action.getAttribute(this.searchStudentPlaceholder, "placeholder") : null,
      name_lbl: ((await action.getElementCount(this.name_lbl)) > 0) ? await action.getText(this.name_lbl) : null,
      lastActive_lbl: ((await action.getElementCount(this.lastActive_lbl)) > 0) ? await action.getText(this.lastActive_lbl) : null,
      time_lbl: ((await action.getElementCount(this.time_lbl)) > 0) ? await action.getText(this.time_lbl) : null,
      score_lbl: ((await action.getElementCount(this.score_lbl)) > 0) ? await action.getText(this.score_lbl) : null,
      completion_lbl: ((await action.getElementCount(this.completion_lbl)) > 0) ? await action.getText(this.completion_lbl) : null,
      classCode_btn: ((await action.getElementCount(this.classCode_btn)) > 0) ? await action.getText(this.classCode_btn) : null,
      copyClassCode_btn: ((await action.getElementCount(this.copyClassCode_btn +" p")) > 0) ? await action.getText(this.copyClassCode_btn +" p") : null,
      inviteEmail_btn: ((await action.getElementCount(this.inviteEmail_btn)) > 0) ? await action.getText(this.inviteEmail_btn) : null,
      inviteStudents_lbl: ((await action.getElementCount(this.inviteStudents_lbl)) > 0) ? await action.getText(this.inviteStudents_lbl) : null,
      inviteStudentsByline_lbl: ((await action.getElementCount(this.inviteStudentsByline_lbl)) > 0) ? await action.getText(this.inviteStudentsByline_lbl) : null,
 
      studentList: await this.studentList_Data(),
    }
    return obj;
  },

  studentList_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var studentList_Arr = [];
    list = await action.findElements(this.studentList);
    for (i = 0; i < list.length; i++) {
      studentList_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), studentList_Arr);
    return studentList_Arr;
  },

  getData_productList: async function (productListNameName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.productListName);
    var list = await action.findElements(this.productListName);
    if (productListNameName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.productListName + i)) == productListNameName) {
          console.log(this.teacherOnlyIcon + i + "] span>span>span")
          obj[0] = {
            productListName: ((await action.getElementCount(this.productListName + i + "] p")) > 0) ? await action.getText(this.productListName + i + "] p") : null,
            teacherOnlyIcon: ((await action.getElementCount(this.teacherOnlyIcon + i + "] span>span>span")) > 0) ? await action.getText(this.teacherOnlyIcon + i + "] span>span>span") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          productListName: ((await action.getElementCount(this.productListName + i + "] p")) > 0) ? await action.getText(this.productListName + i + "] p") : null,
          teacherOnlyIcon: ((await action.getElementCount(this.teacherOnlyIcon + i + "] span>span>span")) > 0) ? await action.getText(this.teacherOnlyIcon + i + "] span>span>span") : null,
        }
      }
    }
    return obj;
  },

  click_download_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.download_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " download_btn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "download_btn is NOT clicked", 'error');
    }
    return res;
  },
  click_inviteEmail_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.inviteEmail_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " inviteEmail_btn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "inviteEmail_btn is NOT clicked", 'error');
    }
    return res;
  },
  click_classCode_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.copyClassCode_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " classCode_btn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "classCode_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_sendtoemail_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.sendtoemail_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " sendtoemail_btn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "sendtoemail_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_studentList: async function (studentListName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.studentList);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.studentList + i + "]"))) == studentListName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      res = await require('./gradeBookStudent.page').isInitialized();
      await logger.logInto(await stackTrace.get(), " --studentList clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --studentList NOT clicked", "error")
    return res;
  },

}

