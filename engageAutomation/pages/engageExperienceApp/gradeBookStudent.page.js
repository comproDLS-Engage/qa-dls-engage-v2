"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');
const { confirmPassword_input } = require('./settings.page.js');

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
  completionChart_icon: selectorFile.css.ComproEngage.gradeBookStudent.completionChart_icon,
  completion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion_lbl,
  classAnalyticsCompletion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsCompletion_lbl,
  classAnalyticsScore_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsScore_lbl,
  lesson_title: selectorFile.css.ComproEngage.gradeBookStudent.lesson_title,
  lesson_Subtitle: selectorFile.css.ComproEngage.gradeBookStudent.lesson_Subtitle,
  folder_Title: selectorFile.css.ComproEngage.gradeBookStudent.folder_Title,
  score_icon: selectorFile.css.ComproEngage.gradeBookStudent.score_icon,
  score_Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_Unit_lbl,
  completion_icon: selectorFile.css.ComproEngage.gradeBookStudent.completion_icon,
  completion__Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion__Unit_lbl,
  totalTime_icon: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_icon,
  totalTime_lbl: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_lbl,
  activityCount: selectorFile.css.ComproEngage.gradeBookStudent.activityCount,
  CompletionCount: selectorFile.css.ComproEngage.gradeBookStudent.CompletionCount,
  showActivities_btn: selectorFile.css.ComproEngage.gradeBookStudent.showActivities_btn,
  activity_lbl: selectorFile.css.ComproEngage.gradeBookStudent.activity_lbl,
  score_activity_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_activity_lbl,
  attempt_lbl: selectorFile.css.ComproEngage.gradeBookStudent.attempt_lbl,
  timeSpent_lbl: selectorFile.css.ComproEngage.gradeBookStudent.timeSpent_lbl,
  activityName: selectorFile.css.ComproEngage.gradeBookStudent.activityName,
  moreOption: selectorFile.css.ComproEngage.gradeBookStudent.moreOption,
  gradePill: selectorFile.css.ComproEngage.gradeBookStudent.gradePill,


  viewAttempt_btn: selectorFile.css.ComproEngage.gradeBookStudent.viewAttempt_btn,
  gradeAttempt_btn: selectorFile.css.ComproEngage.gradeBookStudent.gradeAttempt_btn,

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

  getData_gradeBookStudentView: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
      pageSubTitle: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
      download_btn: (action.getElementCount(this.download_btn) > 0) ? action.getText(this.download_btn) : null,
      graphHeader: (action.getElementCount(this.graphHeader) > 0) ? action.getText(this.graphHeader) : null,
      sendtoemail_btn: (action.getElementCount(this.sendtoemail_btn) > 0) ? action.getText(this.sendtoemail_btn) : null,
      totalTimeSpent_lbl: (action.getElementCount(this.totalTimeSpent_lbl) > 0) ? action.getText(this.totalTimeSpent_lbl) : null,
      score_lbl: (action.getElementCount(this.score_lbl) > 0) ? action.getText(this.score_lbl) : null,
      scoreChart_icon: (action.getElementCount(this.scoreChart_icon) > 0) ? action.waitForDisplayed(this.scoreChart_icon) : false,
      completionChart_icon: (action.getElementCount(this.completionChart_icon) > 0) ? action.waitForDisplayed(this.completionChart_icon) : false,
      completion_lbl: (action.getElementCount(this.completion_lbl) > 0) ? action.getText(this.completion_lbl) : null,
      classAnalyticsCompletion_lbl: (action.getElementCount(this.classAnalyticsCompletion_lbl) > 0) ? action.getText(this.classAnalyticsCompletion_lbl) : null,
      classAnalyticsScore_lbl: (action.getElementCount(this.classAnalyticsScore_lbl) > 0) ? action.getText(this.classAnalyticsScore_lbl) : null,
      lesson_title: (action.getElementCount(this.lesson_title) > 0) ? action.getText(this.lesson_title) : null,
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

  click_productListName: function (productListNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.productListName);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.productListName + i + "] p")) == productListNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      res = require('./gradeBookStudent.page').isInitialized();
      logger.logInto(stackTrace.get(), " --productListName clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --productListName NOT clicked", "error")
    return res;
  },

  //Function for returning the Unit details
  getData_UnitDetails: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.folder_Title);
    var list = action.findElements(this.folder_Title);
    if (folder_TitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.folder_Title + i) == folder_TitleName) {
          obj[0] = {
            folder_Title: (action.getElementCount(this.folder_Title + i + "]") > 0) ? action.getText(this.folder_Title + i + "]") : null,
            score_icon: (action.getElementCount(this.score_icon + i + "]") > 0) ? action.getText(this.score_icon + i + "]") : null,
            score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "]") > 0) ? action.getText(this.score_Unit_lbl + i + "]") : null,
            completion_icon: (action.getElementCount(this.completion_icon + i + "]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "]") : false,
            completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "]") > 0) ? action.getText(this.completion__Unit_lbl + i + "]") : null,
            totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
            totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "]") > 0) ? action.getText(this.totalTime_lbl + i + "]") : null,
            activityCount: (action.getElementCount(this.activityCount + i + "]") > 0) ? action.getText(this.activityCount + i + "]") : null,
            CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
            showActivities_btn: (action.getElementCount(this.showActivities_btn + i + "]") > 0) ? action.getText(this.showActivities_btn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          folder_Title: (action.getElementCount(this.folder_Title + i + "]") > 0) ? action.getText(this.folder_Title + i + "]") : null,
          score_icon: (action.getElementCount(this.score_icon + i + "]") > 0) ? action.getText(this.score_icon + i + "]") : null,
          score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "]") > 0) ? action.getText(this.score_Unit_lbl + i + "]") : null,
          completion_icon: (action.getElementCount(this.completion_icon + i + "]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "]") : false,
          completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "]") > 0) ? action.getText(this.completion__Unit_lbl + i + "]") : null,
          totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
          totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "]") > 0) ? action.getText(this.totalTime_lbl + i + "]") : null,
          activityCount: (action.getElementCount(this.activityCount + i + "]") > 0) ? action.getText(this.activityCount + i + "]") : null,
          CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
          showActivities_btn: (action.getElementCount(this.showActivities_btn + i + "]") > 0) ? action.getText(this.showActivities_btn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_showActivity: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      activity_lbl: (action.getElementCount(this.activity_lbl) > 0) ? action.getText(this.activity_lbl) : null,
      score_activity_lbl: (action.getElementCount(this.score_activity_lbl) > 0) ? action.getText(this.score_activity_lbl) : null,
      attempt_lbl: (action.getElementCount(this.attempt_lbl) > 0) ? action.getText(this.attempt_lbl) : null,
      timeSpent_lbl: (action.getElementCount(this.timeSpent_lbl) > 0) ? action.getText(this.timeSpent_lbl) : null,
    }
    return obj;
  },

  getData_activityDetails: function (activityNameName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.activityName);
    var list = action.findElements(this.activityName);
    if (activityNameName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.activityName + i) == activityNameName) {
          obj[0] = {
            activityName: (action.getElementCount(this.activityName + i + "]") > 0) ? action.getText(this.activityName + i + "]") : null,
            moreOption: (action.getElementCount(this.moreOption + i + "]") > 0) ? action.getText(this.moreOption + i + "]") : null,
            gradePill: (action.getElementCount(this.gradePill + i + "]") > 0) ? action.getText(this.gradePill + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          activityName: (action.getElementCount(this.activityName + i + "]") > 0) ? action.getText(this.activityName + i + "]") : null,
          moreOption: (action.getElementCount(this.moreOption + i + "]") > 0) ? action.getText(this.moreOption + i + "]") : null,
          gradePill: (action.getElementCount(this.gradePill + i + "]") > 0) ? action.getText(this.gradePill + i + "]") : null,
        }
      }
    }
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

  click_showActivities_btn: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.showActivities_btn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.folder_Title + i + "]")) == folder_TitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --showActivities_btn clicked");
      res = this.getData_showActivity();
    }
    else
      logger.logInto(stackTrace.get(), " --showActivities_btn NOT clicked", "error")
    return res;
  },

  //Function to get Activity List and Other options/pills after clicking Show Activities in each folder
  getData_activityDetails: function (index) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.activityName);
    browser.pause(3000);
    var list = action.findElements(this.activityName + index);
    for (var i = 0; i < list.length; i++) {
      obj[i] = {

        activityName: (action.getElementCount(this.activityName + index + "-" + i + "]") > 0) ? action.getText(this.activityName + index + "-" + i + "]") : null,
        moreOption: (action.getElementCount(this.moreOption + index + "-" + i + "]") > 0) ? action.waitForDisplayed(this.moreOption + index + "-" + i + "]") : false,
        gradePendingPill: (action.getElementCount(this.gradePendingPill) > 0) ? action.getText(this.gradePendingPill) : null,
      }
    }
    //console.log("getData_activityDetails obj - ",obj)
    return obj;
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
  getData_moreOption: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      viewAttempt_btn: (action.getElementCount(this.viewAttempt_btn) > 0) ? action.getText(this.viewAttempt_btn) : null,
      gradeAttempt_btn: (action.getElementCount(this.gradeAttempt_btn) > 0) ? action.getText(this.gradeAttempt_btn) : null,
    }
    return obj;
  },
  click_moreOption: function (unitName, unitActivity) {
    logger.logInto(stackTrace.get());
    var i, list, res, index;
    list = action.findElements(this.activityName);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.lessons_Title_lbl + i + "]")) == unitName) {
        index = i;
        break;
      }
    }
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.activityName + index + "-" +  i + "]")) == unitActivity) {
        res = action.click(this.moreOption + index + "-" +  i + "]");
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --moreOption clicked");
      res = this.getData_moreOption();
    }
    else
      logger.logInto(stackTrace.get(), " --moreOption NOT clicked", "error")
    return res;
  },

  click_viewAttempt_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.viewAttempt_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " viewAttempt_btn is clicked");
      res = require('./viewAsStudentAssignment.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "viewAttempt_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_gradeAttempt_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.gradeAttempt_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " gradeAttempt_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "gradeAttempt_btn is NOT clicked", 'error');
    }
    return res;
  },

}