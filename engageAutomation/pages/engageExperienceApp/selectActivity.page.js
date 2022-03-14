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


  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.page_header),
      appShellPage: appShellPage.isInitialized()
    };
    return res;
  },

  getData_pageData: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      page_header: (action.getElementCount(this.page_header) > 0) ? action.getText(this.page_header) : null,
      book_icon: (action.getElementCount(this.book_icon) > 0) ? action.waitForDisplayed(this.book_icon) : false,
      book_title: (action.getElementCount(this.book_title) > 0) ? action.getText(this.book_title) : null,
      component_Name: (action.getElementCount(this.component_Name) > 0) ? action.getText(this.component_Name) : null,
      selectedActivity: (action.getElementCount(this.selectedActivity) > 0) ? action.getText(this.selectedActivity) : null,
      selectActivityCount: (action.getElementCount(this.selectActivityCount) > 0) ? action.getText(this.selectActivityCount) : null,
      cancel_btn: (action.getElementCount(this.cancel_btn) > 0) ? action.getText(this.cancel_btn) : null,
      continuetoDetails_btn: (action.getElementCount(this.continuetoDetails_btn) > 0) ? action.getText(this.continuetoDetails_btn) : null,
    }
    return obj;
  },

  getData_activityList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      parentfolderofActivity: this.parentfolderofActivity_Data(),
      subfolderofActivity: this.subfolderofActivity_Data(),
      parentfolderofActivityText: this.parentfolderofActivityText_Data(),
      subfolderofActivityText: this.subfolderofActivityText_Data(),
    }
    return obj;
  },

  parentfolderofActivity_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var parentfolderofActivity_Arr = [];
    list = action.findElements(this.parentfolderofActivity);
    for (i = 0; i < list.length; i++) {
      parentfolderofActivity_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), parentfolderofActivity_Arr);
    return parentfolderofActivity_Arr;
  },

  subfolderofActivity_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var subfolderofActivity_Arr = [];
    list = action.findElements(this.subfolderofActivity);
    for (i = 0; i < list.length; i++) {
      subfolderofActivity_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), subfolderofActivity_Arr);
    return subfolderofActivity_Arr;
  },

  parentfolderofActivityText_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var parentfolderofActivityText_Arr = [];
    list = action.findElements(this.parentfolderofActivityText);
    for (i = 0; i < list.length; i++) {
      parentfolderofActivityText_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), parentfolderofActivityText_Arr);
    return parentfolderofActivityText_Arr;
  },

  subfolderofActivityText_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var subfolderofActivityText_Arr = [];
    list = action.findElements(this.subfolderofActivityText);
    for (i = 0; i < list.length; i++) {
      subfolderofActivityText_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), subfolderofActivityText_Arr);
    return subfolderofActivityText_Arr;
  },


  click_cancel_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.cancel_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " cancel_btn is clicked");
      res = require('./selectActivity.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "cancel_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_continuetoDetails_btn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.continuetoDetails_btn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " continuetoDetails_btn is clicked");
      res = res = require('./createAssignment.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "continuetoDetails_btn is NOT clicked", 'error');
    }
    return res;
  },

  click_parentfolderofActivity: function (parentfolderofActivityName) {
    logger.logInto(stackTrace.get());
    var i, list, res, list1;
    list = action.findElements(this.parentfolderofActivityText);
    list1 = action.findElements(this.parentfolderofActivity);
    for (i = 0; i < list.length; i++) {
      if (action.getText(list[i]) == parentfolderofActivityName) {
        res = action.click(list1[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --parentfolderofActivity clicked");
      res = this.getData_activityList();
    }
    else
      logger.logInto(stackTrace.get(), " --parentfolderofActivity NOT clicked", "error")
    return res;
  },

  click_subfolderofActivity: function (subfolderofActivityName) {
    logger.logInto(stackTrace.get());
    var i, list, res, list1;
    list = action.findElements(this.subfolderofActivityText);
    list1 = action.findElements(this.subfolderofActivity);
    for (i = 0; i < list.length; i++) {
      console.log(action.getText(list[i]))
      if (action.getText(list[i]) == subfolderofActivityName) {
        res = action.click(list1[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --subfolderofActivity clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --subfolderofActivity NOT clicked", "error")
    return res;
  },
  getResourceIndex: function () { //manual edit
    logger.logInto(stackTrace.get());
    var assignmentName = action.findElements(this.assignmentName);
    var rIndex = [], res;
    if (assignmentName.length > 0) {
      for (var i = 0; i < assignmentName.length; i++) {
        res = action.getAttribute(assignmentName[i], "data-tid");
        res = res.split('-');
        rIndex[i] = res[2];
      }
    }
    return rIndex;
  }
}

