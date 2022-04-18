"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  pageTitle: selectorFile.css.ComproEngage.gradeBookStudent.pageTitle,
  pageSubTitle: selectorFile.css.ComproEngage.gradeBookStudent.pageSubTitle,
  download_btn: selectorFile.css.ComproEngage.gradeBookStudent.download_btn,
  graphHeader: selectorFile.css.ComproEngage.gradeBookStudent.graphHeader,
  sendtoemail_btn: selectorFile.css.ComproEngage.gradeBookStudent.sendtoemail_btn,
  productListName: selectorFile.css.ComproEngage.gradeBookStudent.productListName,
  totalTimeSpent_lbl: selectorFile.css.ComproEngage.gradeBookStudent.totalTimeSpent_lbl,
  score_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_lbl,
  scoreChart_icon: selectorFile.css.ComproEngage.gradeBookStudent.scoreChart_icon,
  classAnalyticsScore_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsScore_lbl,
  completion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion_lbl,
  completionChart_icon: selectorFile.css.ComproEngage.gradeBookStudent.completionChart_icon,
  classAnalyticsCompletion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsCompletion_lbl,
  unit_title: selectorFile.css.ComproEngage.gradeBookStudent.unit_title,
  lesson_Subtitle: selectorFile.css.ComproEngage.gradeBookStudent.lesson_Subtitle,
  //unit details
  lessons_Title_lbl: selectorFile.css.ComproEngage.gradeBookStudent.lessons_Title_lbl,
  score_icon: selectorFile.css.ComproEngage.gradeBookStudent.score_icon,
  score_Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_Unit_lbl,
  completion_icon: selectorFile.css.ComproEngage.gradeBookStudent.completion_icon,
  completion__Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion__Unit_lbl,
  totalTime_icon: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_icon,
  totalTime_lbl: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_lbl,
  nonScorableChip: selectorFile.css.ComproEngage.gradeBookStudent.nonScorableChip,
  activityCount_icon: selectorFile.css.ComproEngage.gradeBookStudent.activityCount_icon,
  activityCount_lbl: selectorFile.css.ComproEngage.gradeBookStudent.activityCount_lbl,
  CompletionCount: selectorFile.css.ComproEngage.gradeBookStudent.CompletionCount,
  showHideActivities_btn: selectorFile.css.ComproEngage.gradeBookStudent.showHideActivities_btn,

  collapsibleActivityLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleActivityLbl,
  collapsibleScoreLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleScoreLbl,
  collapsibleAttemptsLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleAttemptsLbl,
  collapsibleTimeSpentLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleTimeSpentLbl,

  activityName: selectorFile.css.ComproEngage.gradeBookStudent.activityName,
  moreOption: selectorFile.css.ComproEngage.gradeBookStudent.moreOption,
  gradePendingPill: selectorFile.css.ComproEngage.gradeBookStudent.gradePendingPill,

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

  //Function for returning the main static content on Student GradeBook Page
  getData_gradeBookStudentView: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
      pageSubTitle: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
      download_btn: (action.getElementCount(this.download_btn) > 0) ? action.getText(this.download_btn) : null,
      sendtoemail_btn: (action.getElementCount(this.sendtoemail_btn) > 0) ? action.getText(this.sendtoemail_btn) : null,
      totalTimeSpent_lbl: (action.getElementCount(this.totalTimeSpent_lbl) > 0) ? action.getText(this.totalTimeSpent_lbl) : null,
      score_lbl: (action.getElementCount(this.score_lbl) > 0) ? action.getText(this.score_lbl) : null,
      scoreChart_icon: (action.getElementCount(this.scoreChart_icon) > 0) ? action.waitForDisplayed(this.scoreChart_icon) : false,
      classAnalyticsScore_lbl: (action.getElementCount(this.classAnalyticsScore_lbl) > 0) ? action.getText(this.classAnalyticsScore_lbl) : null,
      completion_lbl: (action.getElementCount(this.completion_lbl) > 0) ? action.getText(this.completion_lbl) : null,
      completionChart_icon: (action.getElementCount(this.completionChart_icon) > 0) ? action.waitForDisplayed(this.completionChart_icon) : false,
      classAnalyticsCompletion_lbl: (action.getElementCount(this.classAnalyticsCompletion_lbl) > 0) ? action.getText(this.classAnalyticsCompletion_lbl) : null,
      unit_title: (action.getElementCount(this.unit_title) > 0) ? action.getText(this.unit_title) : null,
      lesson_Subtitle: (action.getElementCount(this.lesson_Subtitle) > 0) ? action.getText(this.lesson_Subtitle) : null,
    }
    return obj;
  },

  getData_productList: function (productListNameName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.productListName);
    var list = action.findElements(this.productListName);
    if (productListNameName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.productListName + i) == productListNameName) {
          obj[0] = {
            productListName: (action.getElementCount(this.productListName + i + "]") > 0) ? action.getText(this.productListName + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          productListName: (action.getElementCount(this.productListName + i + "]") > 0) ? action.getText(this.productListName + i + "]") : null,
        }
      }
    }
    return obj;
  },

  //Function for returning the Unit details
  getData_UnitDetails: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.lessons_Title_lbl);
    var list = action.findElements(this.lessons_Title_lbl);
    if (folder_TitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.lessons_Title_lbl + i) == folder_TitleName) {
          obj[0] = {
            lessons_Title_lbl: (action.getElementCount(this.lessons_Title_lbl + i + "]") > 0) ? action.getText(this.lessons_Title_lbl + i + "]") : null,
            score_icon: (action.getElementCount(this.score_icon + i + "]") > 0) ? action.waitForDisplayed(this.score_icon + i + "]") : null,
            score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "]") > 0) ? action.getText(this.score_Unit_lbl + i + "]") : null,
            //nonScorableChip: (action.getElementCount(this.nonScorableChip+ i + "]") > 0) ? action.getText(this.nonScorableChip + i + "]") : null,
            completion_icon: (action.getElementCount(this.completion_icon + i + "]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "]") : false,
            completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "]") > 0) ? action.getText(this.completion__Unit_lbl + i + "]") : null,
            totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
            totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "]") > 0) ? action.getText(this.totalTime_lbl + i + "]") : null,
            activityCount_icon: (action.getElementCount(this.activityCount_icon + i + "]") > 0) ? action.waitForDisplayed(this.activityCount_icon + i + "]") : false,
            activityCount_lbl: (action.getElementCount(this.activityCount_lbl + i + "]") > 0) ? action.getText(this.activityCount_lbl + i + "]") : null,
            CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
            showHideActivities_btn: (action.getElementCount(this.showHideActivities_btn + i + "]") > 0) ? action.getText(this.showHideActivities_btn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          lessons_Title_lbl: (action.getElementCount(this.lessons_Title_lbl + i + "]") > 0) ? action.getText(this.lessons_Title_lbl + i + "]") : null,
          score_icon: (action.getElementCount(this.score_icon + i + "]") > 0) ? action.getText(this.score_icon + i + "]") : null,
          score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "]") > 0) ? action.getText(this.score_Unit_lbl + i + "]") : null,
          //nonScorableChip: (action.getElementCount(this.nonScorableChip+ i + "]")  > 0) ? action.getText(this.nonScorableChip + i + "]") : null,
          completion_icon: (action.getElementCount(this.completion_icon + i + "]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "]") : false,
          completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "]") > 0) ? action.getText(this.completion__Unit_lbl + i + "]") : null,
          totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
          totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "]") > 0) ? action.getText(this.totalTime_lbl + i + "]") : null,
          activityCount_icon: (action.getElementCount(this.activityCount_icon + i + "]") > 0) ? action.getText(this.activityCount_icon + i + "]") : null,
          activityCount_lbl: (action.getElementCount(this.activityCount_lbl + i + "]") > 0) ? action.getText(this.activityCount_lbl + i + "]") : null,
          CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
          showHideActivities_btn: (action.getElementCount(this.showHideActivities_btn + i + "]") > 0) ? action.getText(this.showHideActivities_btn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  //Click function for 'Download' button
  click_download_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.download_btn);
    if (true == res) {
      browser.pause(3000);
      logger.logInto(stackTrace.get(), " download_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "download_btn is NOT clicked", 'error');
    }
    return res;
  },

  //Click function for 'Send to email' button
  click_sendtoemail_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.sendtoemail_btn);
    if (true == res) {
      browser.pause(2000);
      logger.logInto(stackTrace.get(), " sendtoemail_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "sendtoemail_btn is NOT clicked", 'error');
    }
    return res;
  },

  //Click function for 'Show Acivities' button
  click_showHideActivities_btn: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.showHideActivities_btn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.lessons_Title_lbl + i + "]")) == folder_TitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --showHideActivities_btn clicked");
      //res = this.getData_showActivity_labels(folder_TitleName);
      res = this.getData_activityDetails(i);
    }
    else
      logger.logInto(stackTrace.get(), " --showHideActivities_btn NOT clicked", "error")
    return res;
  },

  //Function to get Collapsible Labels after clicking Show Activities in each folder
  getData_showActivity_labels: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.lessons_Title_lbl);
    var list = action.findElements(this.lessons_Title_lbl);
    if (folder_TitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.lessons_Title_lbl + i) == folder_TitleName) {
          obj[0] = {
            collapsibleActivityLbl: (action.getElementCount(this.collapsibleActivityLbl + i + "]") > 0) ? action.getText(this.collapsibleActivityLbl + i + "]") : null,
            collapsibleScoreLbl: (action.getElementCount(this.collapsibleScoreLbl + i + "]") > 0) ? action.getText(this.collapsibleScoreLbl + i + "]") : null,
            collapsibleAttemptsLbl: (action.getElementCount(this.collapsibleAttemptsLbl + i + "]") > 0) ? action.getText(this.collapsibleAttemptsLbl + i + "]") : null,
            collapsibleTimeSpentLbl: (action.getElementCount(this.collapsibleTimeSpentLbl + i + "]") > 0) ? action.getText(this.collapsibleTimeSpentLbl + i + "]") : null
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          collapsibleActivityLbl: (action.getElementCount(this.collapsibleActivityLbl + i + "]") > 0) ? action.getText(this.collapsibleActivityLbl + i + "]") : null,
          collapsibleScoreLbl: (action.getElementCount(this.collapsibleScoreLbl + i + "]") > 0) ? action.getText(this.collapsibleScoreLbl + i + "]") : null,
          collapsibleAttemptsLbl: (action.getElementCount(this.collapsibleAttemptsLbl + i + "]") > 0) ? action.getText(this.collapsibleAttemptsLbl + i + "]") : null,
          collapsibleTimeSpentLbl: (action.getElementCount(this.collapsibleTimeSpentLbl + i + "]") > 0) ? action.getText(this.collapsibleTimeSpentLbl + i + "]") : null
        }
      }
    }
    return obj;
  },

  //Function to get Activity List and Other options/pills after clicking Show Activities in each folder
  getData_activityDetails: function (index) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.activityName);
    var list = action.findElements(this.activityName+index);
    for (var i = 0; i < list.length; i++) {
      obj[i] = {
        activityName: (action.getElementCount(this.activityName + index + "-" + i + "]") > 0) ? action.getText(this.activityName + index + "-" + i + "]") : null,
        moreOption: (action.getElementCount(this.moreOption + index + "-" + i + "]") > 0) ? action.getText(this.moreOption +index + "-" + i + "]") : null,
        gradePill: (action.getElementCount(this.gradePill) > 0) ? action.getText(this.gradePill) : null,
      }
    }
    console.log("obj - ",obj)
    return obj;
  },

  click_moreOption: function (activityNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.moreOption);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.activityName + i + "]")) == activityNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --moreOption clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --moreOption NOT clicked", "error")
    return res;
  }
}

