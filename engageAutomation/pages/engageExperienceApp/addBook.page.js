"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

  addBookPageTitle: selectorFile.css.ComproEngage.addBook.addBookPageTitle,
  addBookPageSubtitle: selectorFile.css.ComproEngage.addBook.addBookPageSubtitle,
  bookCoverImg: selectorFile.css.ComproEngage.addBook.bookCoverImg,
  bookTitle: selectorFile.css.ComproEngage.addBook.bookTitle,
  bookSubtitle: selectorFile.css.ComproEngage.addBook.bookSubtitle,
  addBookBtn: selectorFile.css.ComproEngage.addBook.addBookBtn,
  addToClassBtn: selectorFile.css.ComproEngage.addBook.addToClassBtn,
  cancelBtn: selectorFile.css.ComproEngage.addBook.cancelBtn,
  noBookLabel: selectorFile.css.ComproEngage.addBook.noBookLabel,
  bookLabel: selectorFile.css.ComproEngage.addBook.bookLabel,
  bookValue: selectorFile.css.ComproEngage.addBook.bookValue,
  removeBookBtn: selectorFile.css.ComproEngage.addBook.removeBookBtn,

  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.addBookPageTitle),
      appShellPage: appShellPage.isInitialized()
    };
    return res;
  },

  getData_addBookPage: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      addBookPageTitle: (action.getElementCount(this.addBookPageTitle) > 0) ? action.getText(this.addBookPageTitle) : null,
      addBookPageSubtitle: (action.getElementCount(this.addBookPageSubtitle) > 0) ? action.getText(this.addBookPageSubtitle) : null,
      addToClassBtn: (action.getElementCount(this.addToClassBtn) > 0) ? action.getText(this.addToClassBtn) : null,
      cancelBtn: (action.getElementCount(this.cancelBtn) > 0) ? action.getText(this.cancelBtn) : null,
      noBookLabel: (action.getElementCount(this.noBookLabel) > 0) ? action.getText(this.noBookLabel) : null,
      bookLabel: (action.getElementCount(this.bookLabel) > 0) ? action.getText(this.bookLabel) : null,
      bookValue: (action.getElementCount(this.bookValue) > 0) ? action.getText(this.bookValue) : null,
      removeBookBtn: (action.getElementCount(this.removeBookBtn) > 0) ? action.getText(this.removeBookBtn) : null
    }
    return obj;
  },

  getData_bookList: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.bookTitle);
    var list = action.findElements(this.bookTitle);
    if (bookTitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.bookTitle + i) == bookTitleName) {
          obj[0] = {
            bookCoverImg: (action.getElementCount(this.bookCoverImg + i + "]") > 0) ? action.waitForDisplayed(this.bookCoverImg + i + "]") : false,
            bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
            bookSubtitle: (action.getElementCount(this.bookSubtitle + i + "]") > 0) ? action.getText(this.bookSubtitle + i + "]") : null,
            addBookBtn: (action.getElementCount(this.addBookBtn + i + "]") > 0) ? action.getText(this.addBookBtn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          bookCoverImg: (action.getElementCount(this.bookCoverImg + i + "]") > 0) ? action.waitForDisplayed(this.bookCoverImg + i + "]") : false,
          bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
          bookSubtitle: (action.getElementCount(this.bookSubtitle + i + "]") > 0) ? action.getText(this.bookSubtitle + i + "]") : null,
          addBookBtn: (action.getElementCount(this.addBookBtn + i + "]") > 0) ? action.getText(this.addBookBtn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  click_addBookBtn: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.addBookBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --addBookBtn clicked");
      res = this.getData_addBookPage();
    }
    else
      logger.logInto(stackTrace.get(), " --addBookBtn NOT clicked", "error")
    return res;
  },

  click_addToClassBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.addToClassBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " addToClassBtn is clicked");
      res = require('./createClass.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "addToClassBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.cancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " cancelBtn is clicked");
      res = require('./createClass.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBookBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeBookBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeBookBtn is clicked");
      res = this.getData_addBookPage();
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeBookBtn is NOT clicked", 'error');
    }
    return res;
  }

}
