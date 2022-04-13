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
  completionChart_icon: selectorFile.css.ComproEngage.gradeBookStudent.completionChart_icon,
  completion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion_lbl,
  classAnalyticsCompletion_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsCompletion_lbl,
  classAnalyticsScore_lbl: selectorFile.css.ComproEngage.gradeBookStudent.classAnalyticsScore_lbl,
  lesson_title: selectorFile.css.ComproEngage.gradeBookStudent.lesson_title,
  lesson_Subtitle: selectorFile.css.ComproEngage.gradeBookStudent.lesson_Subtitle,
  folder_Title: selectorFile.css.ComproEngage.gradeBookStudent.folder_Title,
  //unit details
  score_icon: selectorFile.css.ComproEngage.gradeBookStudent.score_icon,
  score_Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_Unit_lbl,
  nonScorableChip: selectorFile.css.ComproEngage.gradeBookStudent.nonScorableChip,
  completion_icon: selectorFile.css.ComproEngage.gradeBookStudent.completion_icon,
  completion__Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion__Unit_lbl,
  totalTime_icon: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_icon,
  totalTime_lbl: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_lbl,
  activityCount: selectorFile.css.ComproEngage.gradeBookStudent.activityCount,
  CompletionCount: selectorFile.css.ComproEngage.gradeBookStudent.CompletionCount,

  showHideActivities_btn: selectorFile.css.ComproEngage.gradeBookStudent.showHideActivities_btn,
  collapsibleActvityLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleActvityLbl,
  collapsibleScoreLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleScoreLbl,
  collapsibleAttemptsLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleAttemptsLbl,
  collapsibleTimeSpentLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleTimeSpentLbl,
  activityName: selectorFile.css.ComproEngage.gradeBookStudent.activityName,
  moreOption: selectorFile.css.ComproEngage.gradeBookStudent.moreOption,
  gradePill: selectorFile.css.ComproEngage.gradeBookStudent.gradePill,


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
      sendtoemail_btn: (action.getElementCount(this.sendtoemail_btn) > 0) ? action.getText(this.sendtoemail_btn) : null,
      totalTimeSpent_lbl: (action.getElementCount(this.totalTimeSpent_lbl) > 0) ? action.getText(this.totalTimeSpent_lbl) : null,
      
      score_lbl: (action.getElementCount(this.score_lbl) > 0) ? action.getText(this.score_lbl) : null,
      scoreChart_icon: (action.getElementCount(this.scoreChart_icon) > 0) ? action.waitForDisplayed(this.scoreChart_icon) : false,
      completion_lbl: (action.getElementCount(this.completion_lbl) > 0) ? action.getText(this.completion_lbl) : null,
      completionChart_icon: (action.getElementCount(this.completionChart_icon) > 0) ? action.waitForDisplayed(this.completionChart_icon) : false,
      
      //to be fixed by dev
      classAnalyticsCompletion_lbl: (action.getElementCount(this.classAnalyticsCompletion_lbl) > 0) ? action.getText(this.classAnalyticsCompletion_lbl) : null,
      classAnalyticsScore_lbl: (action.getElementCount(this.classAnalyticsScore_lbl) > 0) ? action.getText(this.classAnalyticsScore_lbl) : null,
      
      lesson_title: (action.getElementCount(this.lesson_title) > 0) ? action.getText(this.lesson_title) : null,
      lesson_Subtitle: (action.getElementCount(this.lesson_Subtitle) > 0) ? action.getText(this.lesson_Subtitle) : null,
    }
    //console.log("return sts - ",obj)
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
            score_icon: (action.getElementCount(this.score_icon + i + "-score]") > 0) ? action.waitForDisplayed(this.score_icon + i + "-score]") : null,
            score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "-score]") > 0) ? action.getText(this.score_Unit_lbl + i + "-score]") : null,
            //nonScorableChip: (action.getElementCount(this.nonScorableChip) > 0) ? action.getText(this.nonScorableChip + i + "]") : null,
            completion_icon: (action.getElementCount(this.completion_icon + i + "-completion]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "]") : false,
            completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "-completion]") > 0) ? action.getText(this.completion__Unit_lbl + i + "-completion]") : null,
            totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "-totalTime]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "-totalTime]") : false,
            totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "-totalTime]") > 0) ? action.getText(this.totalTime_lbl + i + "-totalTime]") : null,
            // activityCount: (action.getElementCount(this.activityCount + i + "]") > 0) ? action.getText(this.activityCount + i + "]") : null,
            // CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
            // showActivities_btn: (action.getElementCount(this.showActivities_btn + i + "]") > 0) ? action.getText(this.showActivities_btn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          folder_Title: (action.getElementCount(this.folder_Title + i + "]") > 0) ? action.getText(this.folder_Title + i + "]") : null,
          score_icon: (action.getElementCount(this.score_icon + i + "-score]") > 0) ? action.getText(this.score_icon + i + "-score]") : null,
          score_Unit_lbl: (action.getElementCount(this.score_Unit_lbl + i + "-score]") > 0) ? action.getText(this.score_Unit_lbl + i + "-score]") : null,
          //nonScorableChip: (action.getElementCount(this.nonScorableChip) > 0) ? action.getText(this.nonScorableChip + i + "]") : null,
          completion_icon: (action.getElementCount(this.completion_icon + i + "-completion]") > 0) ? action.waitForDisplayed(this.completion_icon + i + "-completion]") : false,
          completion__Unit_lbl: (action.getElementCount(this.completion__Unit_lbl + i + "-completion]") > 0) ? action.getText(this.completion__Unit_lbl + i + "-completion]") : null,
          totalTime_icon: (action.getElementCount(this.totalTime_icon + i + "-totalTime]") > 0) ? action.waitForDisplayed(this.totalTime_icon + i + "-totalTime]") : false,
          totalTime_lbl: (action.getElementCount(this.totalTime_lbl + i + "-totalTime]") > 0) ? action.getText(this.totalTime_lbl + i + "-totalTime]") : null,
          // activityCount: (action.getElementCount(this.activityCount + i + "]") > 0) ? action.getText(this.activityCount + i + "]") : null,
          // CompletionCount: (action.getElementCount(this.CompletionCount + i + "]") > 0) ? action.getText(this.CompletionCount + i + "]") : null,
          // showActivities_btn: (action.getElementCount(this.showActivities_btn + i + "]") > 0) ? action.getText(this.showActivities_btn + i + "]") : null,
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
      logger.logInto(stackTrace.get(), " sendtoemail_btn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "sendtoemail_btn is NOT clicked", 'error');
    }
    return res;
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

  //Click function for 'Show Acivities' button
  click_showHideActivities_btn: function (folder_TitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.showHideActivities_btn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.folder_Title + i + "]")) == folder_TitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --showHideActivities_btn clicked");
      res = this.getData_showActivity();
    }
    else
      logger.logInto(stackTrace.get(), " --showHideActivities_btn NOT clicked", "error")
    return res;
  },

  //Function to get Activity List in each folder
  getData_showActivity: function () {
    logger.logInto(stackTrace.get());
    var obj=[];
    //Data-tids to be updated by dev, for now all data-tids are duplicate
    var list = action.findElements(this.collapsibleActvityLbl);
    console.log("list",list.length)
    for (var i=0; i<list.length; i++) {
        obj[i] = {
          collapsibleActvityLbl: (action.getElementCount(this.collapsibleActvityLbl) > 0) ? action.getText(this.collapsibleActvityLbl) : null,
          collapsibleScoreLbl: (action.getElementCount(this.collapsibleScoreLbl) > 0) ? action.getText(this.collapsibleScoreLbl) : null,
          collapsibleAttemptsLbl: (action.getElementCount(this.collapsibleAttemptsLbl) > 0) ? action.getText(this.collapsibleAttemptsLbl) : null,
          collapsibleTimeSpentLbl: (action.getElementCount(this.collapsibleTimeSpentLbl) > 0) ? action.getText(this.collapsibleTimeSpentLbl) : null
        }
    }
    console.log("acitivity names",obj)
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
  },

}

