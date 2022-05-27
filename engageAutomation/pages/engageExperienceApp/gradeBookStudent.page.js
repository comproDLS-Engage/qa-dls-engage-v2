"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');

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
  lesson_title: selectorFile.css.ComproEngage.gradeBookStudent.unit_title,
  lesson_Subtitle: selectorFile.css.ComproEngage.gradeBookStudent.lesson_Subtitle,
  folder_Title: selectorFile.css.ComproEngage.gradeBookStudent.folder_Title,
  score_icon: selectorFile.css.ComproEngage.gradeBookStudent.score_icon,
  score_Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_Unit_lbl,
  completion_icon: selectorFile.css.ComproEngage.gradeBookStudent.completion_icon,
  completion__Unit_lbl: selectorFile.css.ComproEngage.gradeBookStudent.completion__Unit_lbl,
  totalTime_icon: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_icon,
  totalTime_lbl: selectorFile.css.ComproEngage.gradeBookStudent.totalTime_lbl,
  activityCount: selectorFile.css.ComproEngage.gradeBookStudent.activityCount,
  activityCount_icon:selectorFile.css.ComproEngage.gradeBookStudent.activityCount_icon,
  activityCount_lbl:selectorFile.css.ComproEngage.gradeBookStudent.activityCount_lbl,
  CompletionCount: selectorFile.css.ComproEngage.gradeBookStudent.CompletionCount,
  showActivities_btn: selectorFile.css.ComproEngage.gradeBookStudent.showHideActivities_btn,
  activity_lbl: selectorFile.css.ComproEngage.gradeBookStudent.activity_lbl,
  score_activity_lbl: selectorFile.css.ComproEngage.gradeBookStudent.score_activity_lbl,
  attempt_lbl: selectorFile.css.ComproEngage.gradeBookStudent.attempt_lbl,
  timeSpent_lbl: selectorFile.css.ComproEngage.gradeBookStudent.timeSpent_lbl,
  activityName: selectorFile.css.ComproEngage.gradeBookStudent.activityName,
  moreOption: selectorFile.css.ComproEngage.gradeBookStudent.moreOption,
  gradePill: selectorFile.css.ComproEngage.gradeBookStudent.gradePill,
  lessons_Title_lbl:selectorFile.css.ComproEngage.gradeBookStudent.lessons_Title_lbl,

  viewAttempt_btn: selectorFile.css.ComproEngage.gradeBookStudent.viewAttempt_btn,
  gradeAttempt_btn: selectorFile.css.ComproEngage.gradeBookStudent.gradeAttempt_btn,
  collapsibleActivityLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleActivityLbl,
  collapsibleScoreLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleScoreLbl,
  collapsibleAttemptsLbl:selectorFile.css.ComproEngage.gradeBookStudent.collapsibleAttemptsLbl,
  collapsibleTimeSpentLbl: selectorFile.css.ComproEngage.gradeBookStudent.collapsibleTimeSpentLbl,

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

  getData_gradeBookStudentView: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      pageTitle: ((await action.getElementCount(this.pageTitle)) > 0) ? await action.getText(this.pageTitle) : null,
      pageSubTitle: ((await action.getElementCount(this.pageSubTitle)) > 0) ? await action.getText(this.pageSubTitle) : null,
      download_btn: ((await action.getElementCount(this.download_btn)) > 0) ? await action.getText(this.download_btn) : null,
      graphHeader: ((await action.getElementCount(this.graphHeader)) > 0) ? await action.getText(this.graphHeader) : null,
      sendtoemail_btn: ((await action.getElementCount(this.sendtoemail_btn)) > 0) ? await action.getText(this.sendtoemail_btn) : null,
      totalTimeSpent_lbl: ((await action.getElementCount(this.totalTimeSpent_lbl)) > 0) ? await action.getText(this.totalTimeSpent_lbl) : null,
      score_lbl: ((await action.getElementCount(this.score_lbl)) > 0) ? await action.getText(this.score_lbl) : null,
      scoreChart_icon: ((await action.getElementCount(this.scoreChart_icon)) > 0) ? await action.waitForDisplayed(this.scoreChart_icon) : false,
      completionChart_icon: ((await action.getElementCount(this.completionChart_icon)) > 0) ? await action.waitForDisplayed(this.completionChart_icon) : false,
      completion_lbl: ((await action.getElementCount(this.completion_lbl)) > 0) ? await action.getText(this.completion_lbl) : null,
      classAnalyticsCompletion_lbl: ((await action.getElementCount(this.classAnalyticsCompletion_lbl)) > 0) ? await action.getText(this.classAnalyticsCompletion_lbl) : null,
      classAnalyticsScore_lbl: ((await action.getElementCount(this.classAnalyticsScore_lbl)) > 0) ? await action.getText(this.classAnalyticsScore_lbl) : null,
      lesson_title: ((await action.getElementCount(this.lesson_title)) > 0) ? await action.getText(this.lesson_title) : null,
      lesson_Subtitle: ((await action.getElementCount(this.lesson_Subtitle)) > 0) ? await action.getText(this.lesson_Subtitle) : null,
    }
    return obj;
  },

  getData_productList: async function (productListNameName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.productListName);
    var list = await action.findElements(this.productListName);
    if (productListNameName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.productListName + i)) == productListNameName) {
          obj[0] = {
            productListName: ((await action.getElementCount(this.productListName + i + "]")) > 0) ? await action.getText(this.productListName + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          productListName: ((await action.getElementCount(this.productListName + i + "]")) > 0) ? await action.getText(this.productListName + i + "]") : null,
        }
      }
    }
    return obj;
  },

  click_productListName: async function (productListNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.productListName);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.productListName + i + "] p"))) == productListNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      res = await require('./gradeBookStudent.page').isInitialized();
      await logger.logInto(await stackTrace.get(), " --productListName clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --productListName NOT clicked", "error")
    return res;
  },

  //Function for returning the Unit details
  getData_UnitDetails: async function (folder_TitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.folder_Title+0);
    var list = await action.findElements(this.folder_Title);
    if (folder_TitleName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.folder_Title + i)) == folder_TitleName) {
          obj[0] = {
            folder_Title: ((await action.getElementCount(this.folder_Title + i + "]")) > 0) ? await action.getText(this.folder_Title + i + "]") : null,
            score_icon: ((await action.getElementCount(this.score_icon + i + "]")) > 0) ? await action.waitForExist(this.score_icon + i + "]") : null,
            score_Unit_lbl: ((await action.getElementCount(this.score_Unit_lbl + i + "]")) > 0) ? await action.getText(this.score_Unit_lbl + i + "]") : null,
            completion_icon: ((await action.getElementCount(this.completion_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.completion_icon + i + "]") : false,
            completion__Unit_lbl: ((await action.getElementCount(this.completion__Unit_lbl + i + "]")) > 0) ? await action.getText(this.completion__Unit_lbl + i + "]") : null,
            totalTime_icon: ((await action.getElementCount(this.totalTime_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
            totalTime_lbl: ((await action.getElementCount(this.totalTime_lbl + i + "]")) > 0) ? await action.getText(this.totalTime_lbl + i + "]") : null,
            activityCount: ((await action.getElementCount(this.activityCount + i + "]")) > 0) ? await action.getText(this.activityCount + i + "]") : null,
            activityCount_icon: ((await action.getElementCount(this.activityCount_icon + i + "]")) > 0) ? await action.waitForExist(this.activityCount_icon + i + "]") : null,
            activityCount_lbl: ((await action.getElementCount(this.activityCount_lbl + i + "]")) > 0) ? await action.getText(this.activityCount_lbl + i + "]") : null,
            CompletionCount: ((await action.getElementCount(this.CompletionCount + i + "]")) > 0) ? await action.getText(this.CompletionCount + i + "]") : null,
            showActivities_btn: ((await action.getElementCount(this.showActivities_btn + i + "]")) > 0) ? await action.getText(this.showActivities_btn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          folder_Title: ((await action.getElementCount(this.folder_Title + i + "]")) > 0) ? await action.getText(this.folder_Title + i + "]") : null,
          score_icon: ((await action.getElementCount(this.score_icon + i + "]")) > 0) ? await action.getText(this.score_icon + i + "]") : null,
          score_Unit_lbl: ((await action.getElementCount(this.score_Unit_lbl + i + "]")) > 0) ? await action.getText(this.score_Unit_lbl + i + "]") : null,
          completion_icon: ((await action.getElementCount(this.completion_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.completion_icon + i + "]") : false,
          completion__Unit_lbl: ((await action.getElementCount(this.completion__Unit_lbl + i + "]")) > 0) ? await action.getText(this.completion__Unit_lbl + i + "]") : null,
          totalTime_icon: ((await action.getElementCount(this.totalTime_icon + i + "]")) > 0) ? await action.waitForDisplayed(this.totalTime_icon + i + "]") : false,
          totalTime_lbl: ((await action.getElementCount(this.totalTime_lbl + i + "]")) > 0) ? await action.getText(this.totalTime_lbl + i + "]") : null,
          activityCount: ((await action.getElementCount(this.activityCount + i + "]")) > 0) ? await action.getText(this.activityCount + i + "]") : null,
          
          activityCount_icon: ((await action.getElementCount(this.activityCount_icon + i + "]")) > 0) ? await action.waitForExist(this.activityCount_icon + i + "]") : null,
          activityCount_lbl: ((await action.getElementCount(this.activityCount_lbl + i + "]")) > 0) ? await action.getText(this.activityCount_lbl + i + "]") : null,
          CompletionCount: ((await action.getElementCount(this.CompletionCount + i + "]")) > 0) ? await action.getText(this.CompletionCount + i + "]") : null,
          showActivities_btn: ((await action.getElementCount(this.showActivities_btn + i + "]")) > 0) ? await action.getText(this.showActivities_btn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_showActivity: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      activity_lbl: ((await action.getElementCount(this.activity_lbl)) > 0) ? await action.getText(this.activity_lbl) : null,
      score_activity_lbl: ((await action.getElementCount(this.score_activity_lbl)) > 0) ? await action.getText(this.score_activity_lbl) : null,
      attempt_lbl: ((await action.getElementCount(this.attempt_lbl)) > 0) ? await action.getText(this.attempt_lbl) : null,
      timeSpent_lbl: ((await action.getElementCount(this.timeSpent_lbl)) > 0) ? await action.getText(this.timeSpent_lbl) : null,
    }
    return obj;
  },

  getData_activityDetails: async function (activityNameName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.activityName);
    var list = await action.findElements(this.activityName);
    if (activityNameName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.activityName + i)) == activityNameName) {
          obj[0] = {
            activityName: ((await action.getElementCount(this.activityName + i + "]")) > 0) ? await action.getText(this.activityName + i + "]") : null,
            moreOption: ((await action.getElementCount(this.moreOption + i + "]")) > 0) ? await action.getText(this.moreOption + i + "]") : null,
            gradePill: ((await action.getElementCount(this.gradePill + i + "]")) > 0) ? await action.getText(this.gradePill + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          activityName: ((await action.getElementCount(this.activityName + i + "]")) > 0) ? await action.getText(this.activityName + i + "]") : null,
          moreOption: ((await action.getElementCount(this.moreOption + i + "]")) > 0) ? await action.getText(this.moreOption + i + "]") : null,
          gradePill: ((await action.getElementCount(this.gradePill + i + "]")) > 0) ? await action.getText(this.gradePill + i + "]") : null,
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

  click_showHideActivities_btn: async function (folder_TitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    console.log(folder_TitleName)
    list = await action.findElements(this.showActivities_btn);
    console.log(list.length)
    for (i = 0; i < list.length; i++) {
      console.log((await action.getText(this.folder_Title + i)))
      if (((await action.getText(this.folder_Title + i))) == folder_TitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --showActivities_btn clicked");
      res = await this.getData_showActivity();
    }
    else
      await logger.logInto(await stackTrace.get(), " --showActivities_btn NOT clicked", "error")
    return res;
  },

  //Function to get Activity List and Other options/pills after clicking Show Activities in each folder
  getData_activityDetails: async function (index) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.activityName);
    await browser.pause(3000);
    var list = await action.findElements(this.activityName + index);
    for (var i = 0; i < list.length; i++) {
      obj[i] = {

        activityName: ((await action.getElementCount(this.activityName + index + "-" + i + "]")) > 0) ? await action.getText(this.activityName + index + "-" + i + "]") : null,
        moreOption: ((await action.getElementCount(this.moreOption + index + "-" + i + "]")) > 0) ? await action.waitForDisplayed(this.moreOption + index + "-" + i + "]") : false,
        gradePendingPill: ((await action.getElementCount(this.gradePendingPill)) > 0) ? await action.getText(this.gradePendingPill) : null,
      }
    }
    //console.log("getData_activityDetails obj - ",obj)
    return obj;
  },

  //Function to get Collapsible Labels after clicking Show Activities in each folder
  getData_showActivity_labels: async function (folder_TitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.lessons_Title_lbl);
    var list = await action.findElements(this.lessons_Title_lbl);
    if (folder_TitleName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.lessons_Title_lbl + i)) == folder_TitleName) {
          obj[0] = {
            collapsibleActivityLbl: ((await action.getElementCount(this.collapsibleActivityLbl + i + "]")) > 0) ? await action.getText(this.collapsibleActivityLbl + i + "]") : null,
            collapsibleScoreLbl: ((await action.getElementCount(this.collapsibleScoreLbl + i + "]")) > 0) ? await action.getText(this.collapsibleScoreLbl + i + "]") : null,
            collapsibleAttemptsLbl: ((await action.getElementCount(this.collapsibleAttemptsLbl + i + "]")) > 0) ? await action.getText(this.collapsibleAttemptsLbl + i + "]") : null,
            collapsibleTimeSpentLbl: ((await action.getElementCount(this.collapsibleTimeSpentLbl + i + "]")) > 0) ? await action.getText(this.collapsibleTimeSpentLbl + i + "]") : null
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          collapsibleActivityLbl: ((await action.getElementCount(this.collapsibleActivityLbl + i + "]")) > 0) ? await action.getText(this.collapsibleActivityLbl + i + "]") : null,
          collapsibleScoreLbl: ((await action.getElementCount(this.collapsibleScoreLbl + i + "]")) > 0) ? await action.getText(this.collapsibleScoreLbl + i + "]") : null,
          collapsibleAttemptsLbl: ((await action.getElementCount(this.collapsibleAttemptsLbl + i + "]")) > 0) ? await action.getText(this.collapsibleAttemptsLbl + i + "]") : null,
          collapsibleTimeSpentLbl: ((await action.getElementCount(this.collapsibleTimeSpentLbl + i + "]")) > 0) ? await action.getText(this.collapsibleTimeSpentLbl + i + "]") : null
        }
      }
    }
    return obj;
  },
  getData_moreOption: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      viewAttempt_btn: ((await action.getElementCount(this.viewAttempt_btn)) > 0) ? await action.getText(this.viewAttempt_btn) : null,
      gradeAttempt_btn: ((await action.getElementCount(this.gradeAttempt_btn)) > 0) ? await action.getText(this.gradeAttempt_btn) : null,
    }
    return obj;
  },
  click_moreOption: async function (unitName, unitActivity) {
    await logger.logInto(await stackTrace.get());
    var i, list, res, index;
    console.log(unitName+"fFFF"+ unitActivity)
    list = await action.findElements(this.activityName);
    console.log(list.length)
    console.log(this.lessons_Title_lbl)
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.lessons_Title_lbl + i + "]"))) == unitName) {
        index = i;
        break;
      }
    }
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.activityName + index + "-" +  i + "]"))) == unitActivity) {
        res = await action.click(this.moreOption + index + "-" +  i + "]");
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --moreOption clicked");
      res = await this.getData_moreOption();
    }
    else
      await logger.logInto(await stackTrace.get(), " --moreOption NOT clicked", "error")
    return res;
  },

  click_viewAttempt_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.viewAttempt_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " viewAttempt_btn is clicked");
      res = await require('./viewAsStudentAssignment.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "viewAttempt_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_gradeAttempt_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.gradeAttempt_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " gradeAttempt_btn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "gradeAttempt_btn is NOT clicked", 'error');
    }
    return res;
  },

}