"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  page_header: selectorFile.css.ComproEngage.selectActivity.page_header,
  book_icon: selectorFile.css.ComproEngage.selectActivity.book_icon,
  book_title: selectorFile.css.ComproEngage.selectActivity.book_title,
  component_Name: selectorFile.css.ComproEngage.selectActivity.component_Name,
  selectedActivity: selectorFile.css.ComproEngage.selectActivity.selectedActivity,
  selectActivityCount: selectorFile.css.ComproEngage.selectActivity.selectActivityCount,
  cancel_btn: selectorFile.css.ComproEngage.selectActivity.cancel_btn,
  continuetoDetails_btn: selectorFile.css.ComproEngage.selectActivity.continuetoDetails_btn,
  parentfolderofActivity: selectorFile.css.ComproEngage.selectActivity.parentfolderofActivity,
  subfolderofActivity: selectorFile.css.ComproEngage.selectActivity.subfolderofActivity,
  parentfolderofActivityText: selectorFile.css.ComproEngage.selectActivity.parentfolderofActivityText,
  subfolderofActivityText: selectorFile.css.ComproEngage.selectActivity.subfolderofActivityText,


  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.page_header),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_pageData: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      page_header: ((await action.getElementCount(this.page_header)) > 0) ? await action.getText(this.page_header) : null,
      book_icon: ((await action.getElementCount(this.book_icon)) > 0) ? await action.waitForDisplayed(this.book_icon) : false,
      book_title: ((await action.getElementCount(this.book_title)) > 0) ? await action.getText(this.book_title) : null,
      component_Name: ((await action.getElementCount(this.component_Name)) > 0) ? await action.getText(this.component_Name) : null,
      selectedActivity: ((await action.getElementCount(this.selectedActivity)) > 0) ? await action.getText(this.selectedActivity) : null,
      selectActivityCount: ((await action.getElementCount(this.selectActivityCount)) > 0) ? await action.getText(this.selectActivityCount) : null,
      cancel_btn: ((await action.getElementCount(this.cancel_btn)) > 0) ? await action.getText(this.cancel_btn) : null,
      continuetoDetails_btn: ((await action.getElementCount(this.continuetoDetails_btn)) > 0) ? await action.getText(this.continuetoDetails_btn) : null,
    }
    return obj;
  },

  getData_activityList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      parentfolderofActivity: await this.parentfolderofActivity_Data(),
      subfolderofActivity: await this.subfolderofActivity_Data(),
      parentfolderofActivityText: await this.parentfolderofActivityText_Data(),
      subfolderofActivityText: await this.subfolderofActivityText_Data(),
    }
    return obj;
  },

  parentfolderofActivity_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var parentfolderofActivity_Arr = [];
    list = await action.findElements(this.parentfolderofActivity);
    for (i = 0; i < list.length; i++) {
      parentfolderofActivity_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), parentfolderofActivity_Arr);
    return parentfolderofActivity_Arr;
  },

  subfolderofActivity_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var subfolderofActivity_Arr = [];
    list = await action.findElements(this.subfolderofActivity);
    for (i = 0; i < list.length; i++) {
      subfolderofActivity_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), subfolderofActivity_Arr);
    return subfolderofActivity_Arr;
  },

  parentfolderofActivityText_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var parentfolderofActivityText_Arr = [];
    list = await action.findElements(this.parentfolderofActivityText);
    for (i = 0; i < list.length; i++) {
      parentfolderofActivityText_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), parentfolderofActivityText_Arr);
    return parentfolderofActivityText_Arr;
  },

  subfolderofActivityText_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var subfolderofActivityText_Arr = [];
    list = await action.findElements(this.subfolderofActivityText);
    for (i = 0; i < list.length; i++) {
      subfolderofActivityText_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), subfolderofActivityText_Arr);
    return subfolderofActivityText_Arr;
  },


  click_cancel_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cancel_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " cancel_btn is clicked");
      res = await require('./selectActivity.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "cancel_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_continuetoDetails_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.continuetoDetails_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " continuetoDetails_btn is clicked");
      res = await require('./createAssignment.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "continuetoDetails_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_parentfolderofActivity: async function (parentfolderofActivityName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res, list1;
    list = await action.findElements(this.parentfolderofActivityText);
    list1 = await action.findElements(this.parentfolderofActivity);
    for (i = 0; i < list.length; i++) {
      if ((await action.getText(list[i])) == parentfolderofActivityName) {
        res = await action.click(list1[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --parentfolderofActivity clicked");
      res = await this.getData_activityList();
    }
    else
      await logger.logInto(await stackTrace.get(), " --parentfolderofActivity NOT clicked", "error")
    return res;
  },

  click_subfolderofActivity: async function (subfolderofActivityName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res, list1;
    list = await action.findElements(this.subfolderofActivityText);
    list1 = await action.findElements(this.subfolderofActivity);
    for (i = 0; i < list.length; i++) {
      console.log(await action.getText(list[i]))
      if ((await action.getText(list[i])) == subfolderofActivityName) {
        res = await action.click(list1[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --subfolderofActivity clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --subfolderofActivity NOT clicked", "error")
    return res;
  },
  getResourceIndex: async function () { //manual edit
    await logger.logInto(await stackTrace.get());
    var assignmentName = await action.findElements(this.assignmentName);
    var rIndex = [], res;
    if (assignmentName.length > 0) {
      for (var i = 0; i < assignmentName.length; i++) {
        res = await action.getAttribute(assignmentName[i], "data-tid");
        res = res.split('-');
        rIndex[i] = res[2];
      }
    }
    return rIndex;
  }
}

