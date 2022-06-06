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

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.addBookPageTitle),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_addBookPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      addBookPageTitle: ((await action.getElementCount(this.addBookPageTitle)) > 0) ? await action.getText(this.addBookPageTitle) : null,
      addBookPageSubtitle: ((await action.getElementCount(this.addBookPageSubtitle)) > 0) ? await action.getText(this.addBookPageSubtitle) : null,
      addToClassBtn: ((await action.getElementCount(this.addToClassBtn)) > 0) ? await action.getText(this.addToClassBtn) : null,
      cancelBtn: ((await action.getElementCount(this.cancelBtn)) > 0) ? await action.getText(this.cancelBtn) : null,
      noBookLabel: ((await action.getElementCount(this.noBookLabel)) > 0) ? await action.getText(this.noBookLabel) : null,
      bookLabel: ((await action.getElementCount(this.bookLabel)) > 0) ? await action.getText(this.bookLabel) : null,
      bookValue: ((await action.getElementCount(this.bookValue)) > 0) ? await action.getText(this.bookValue) : null,
      removeBookBtn: ((await action.getElementCount(this.removeBookBtn)) > 0) ? await action.getText(this.removeBookBtn) : null
    }
    return obj;
  },

  getData_bookList: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.bookTitle);
    var list = await action.findElements(this.bookTitle);
    if (bookTitleName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.bookTitle + i)) == bookTitleName) {
          obj[0] = {
            bookCoverImg: ((await action.getElementCount(this.bookCoverImg + i + "]")) > 0) ? await action.waitForDisplayed(this.bookCoverImg + i + "]") : false,
            bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
            bookSubtitle: ((await action.getElementCount(this.bookSubtitle + i + "]")) > 0) ? await action.getText(this.bookSubtitle + i + "]") : null,
            addBookBtn: ((await action.getElementCount(this.addBookBtn + i + "]")) > 0) ? await action.getText(this.addBookBtn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          bookCoverImg: ((await action.getElementCount(this.bookCoverImg + i + "]")) > 0) ? await action.waitForDisplayed(this.bookCoverImg + i + "]") : false,
          bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
          bookSubtitle: ((await action.getElementCount(this.bookSubtitle + i + "]")) > 0) ? await action.getText(this.bookSubtitle + i + "]") : null,
          addBookBtn: ((await action.getElementCount(this.addBookBtn + i + "]")) > 0) ? await action.getText(this.addBookBtn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  click_addBookBtn: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.addBookBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --addBookBtn clicked");
      res = await this.getData_addBookPage();
    }
    else
      await logger.logInto(await stackTrace.get(), " --addBookBtn NOT clicked", "error")
    return res;
  },

  click_addToClassBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addToClassBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addToClassBtn is clicked");
      res = await require('./createClass.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "addToClassBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " cancelBtn is clicked");
      res = await require('./createClass.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBookBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeBookBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeBookBtn is clicked");
      res = await this.getData_addBookPage();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeBookBtn is NOT clicked", 'error');
    }
    return res;
  }

}
