"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile =  jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');
const { browseAllResourcesBtn } = require('./playlist.page.js');

module.exports = {

  readerContainerWrapper: selectorFile.css.ComproEngage.flipbook.readerContainerWrapper,
  pageLayoutSingle: selectorFile.css.ComproEngage.flipbook.pageLayoutSingle,
  pageLayoutDouble: selectorFile.css.ComproEngage.flipbook.pageLayoutDouble,
  undoBtn: selectorFile.css.ComproEngage.flipbook.undoBtn,
  redoBtn: selectorFile.css.ComproEngage.flipbook.redoBtn,
  notesDockContainer: selectorFile.css.ComproEngage.flipbook.notesDockContainer,
  notesBtn: selectorFile.css.ComproEngage.flipbook.notesBtn,
  zoomInBtn: selectorFile.css.ComproEngage.flipbook.zoomInBtn,
  zoomOutBtn: selectorFile.css.ComproEngage.flipbook.zoomOutBtn,
  fitToScreenBtn: selectorFile.css.ComproEngage.flipbook.fitToScreenBtn,
  doublePageBtn: selectorFile.css.ComproEngage.flipbook.doublePageBtn,
  singlePageBtn: selectorFile.css.ComproEngage.flipbook.singlePageBtn,
  fullScreenBtn: selectorFile.css.ComproEngage.flipbook.fullScreenBtn,
  bookmarkBtn: selectorFile.css.ComproEngage.flipbook.bookmarkBtn,
  TOCBtn: selectorFile.css.ComproEngage.flipbook.TOCBtn,
  previousBtn: selectorFile.css.ComproEngage.flipbook.previousBtn,
  nextBtn: selectorFile.css.ComproEngage.flipbook.nextBtn,
  myNotesTitle: selectorFile.css.ComproEngage.flipbook.myNotesTitle,
  notesDockBtn: selectorFile.css.ComproEngage.flipbook.notesDockBtn,
  notesUndockBtn: selectorFile.css.ComproEngage.flipbook.notesUndockBtn,
  notesCloseBtn: selectorFile.css.ComproEngage.flipbook.notesCloseBtn,
  addNoteBtn: selectorFile.css.ComproEngage.flipbook.addNoteBtn,
  noNoteIcon: selectorFile.css.ComproEngage.flipbook.noNoteIcon,
  noNoteText: selectorFile.css.ComproEngage.flipbook.noNoteText,
  noteListItemLabel: selectorFile.css.ComproEngage.flipbook.noteListItemLabel,
  noteListItemText: selectorFile.css.ComproEngage.flipbook.noteListItemText,
  noteListDeleteBtn: selectorFile.css.ComproEngage.flipbook.noteListDeleteBtn,
  noteListEditBtn: selectorFile.css.ComproEngage.flipbook.noteListEditBtn,
  addNotesTitle: selectorFile.css.ComproEngage.flipbook.addNotesTitle,
  notesPageLabel: selectorFile.css.ComproEngage.flipbook.notesPageLabel,
  notesPageValueSingle: selectorFile.css.ComproEngage.flipbook.notesPageValueSingle,
  notesPageValueLeft: selectorFile.css.ComproEngage.flipbook.notesPageValueLeft,
  notesPageValueRight: selectorFile.css.ComproEngage.flipbook.notesPageValueRight,
  notesTextArea: selectorFile.css.ComproEngage.flipbook.notesTextArea,
  notesCancelBtn: selectorFile.css.ComproEngage.flipbook.notesCancelBtn,
  notesSaveBtn: selectorFile.css.ComproEngage.flipbook.notesSaveBtn,
  deleteNoteTitle: selectorFile.css.ComproEngage.flipbook.deleteNoteTitle,
  deleteNoteSubTitle: selectorFile.css.ComproEngage.flipbook.deleteNoteSubTitle,
  deleteNoteCancelBtn: selectorFile.css.ComproEngage.flipbook.deleteNoteCancelBtn,
  deleteNoteDeleteBtn: selectorFile.css.ComproEngage.flipbook.deleteNoteDeleteBtn,
  myBookmarksTitle: selectorFile.css.ComproEngage.flipbook.myBookmarksTitle,
  bookmarkCloseBtn: selectorFile.css.ComproEngage.flipbook.bookmarkCloseBtn,
  noBookmarkIcon: selectorFile.css.ComproEngage.flipbook.noBookmarkIcon,
  noBookmarkText: selectorFile.css.ComproEngage.flipbook.noBookmarkText,
  addBookmarkBtn: selectorFile.css.ComproEngage.flipbook.addBookmarkBtn,
  bookmarkListItemLabel: selectorFile.css.ComproEngage.flipbook.bookmarkListItemLabel,
  bookmarkListItemName: selectorFile.css.ComproEngage.flipbook.bookmarkListItemName,
  bookmarkListDeleteBtn: selectorFile.css.ComproEngage.flipbook.bookmarkListDeleteBtn,
  bookmarkListEditBtn: selectorFile.css.ComproEngage.flipbook.bookmarkListEditBtn,
  bookmarkNameLabel: selectorFile.css.ComproEngage.flipbook.bookmarkNameLabel,
  bookmarkPageLabel: selectorFile.css.ComproEngage.flipbook.bookmarkPageLabel,
  bookmarkPageValueSingle: selectorFile.css.ComproEngage.flipbook.bookmarkPageValueSingle,
  bookmarkPageValueLeft: selectorFile.css.ComproEngage.flipbook.bookmarkPageValueLeft,
  bookmarkPageValueRight: selectorFile.css.ComproEngage.flipbook.bookmarkPageValueRight,
  bookmarkTextArea: selectorFile.css.ComproEngage.flipbook.bookmarkTextArea,
  bookmarkCancelBtn: selectorFile.css.ComproEngage.flipbook.bookmarkCancelBtn,
  bookmarkSaveBtn: selectorFile.css.ComproEngage.flipbook.bookmarkSaveBtn,
  flipbookTitle: selectorFile.css.ComproEngage.flipbook.flipbookTitle,
  tableOfContentTitle: selectorFile.css.ComproEngage.flipbook.tableOfContentTitle,
  jumpToPageInput: selectorFile.css.ComproEngage.flipbook.jumpToPageInput,
  jumpToPageBtnTOC: selectorFile.css.ComproEngage.flipbook.jumpToPageBtnTOC,
  resourceTitle: selectorFile.css.ComproEngage.flipbook.resourceTitle,
  hotlinks: selectorFile.css.ComproEngage.flipbook.hotlinks,
  hotlinkToBeClicked: selectorFile.css.ComproEngage.flipbook.hotlinkToBeClicked,
  hotlinkPlayer: selectorFile.css.ComproEngage.flipbook.hotlinkPlayer,
  activeHotlink: selectorFile.css.ComproEngage.flipbook.activeHotlink,

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.readerContainerWrapper),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_flipbookPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      pageLayoutSingle: ((await action.getElementCount(this.pageLayoutSingle)) > 0) ? await action.waitForDisplayed(this.pageLayoutSingle) : false,
      pageLayoutDouble: ((await action.getElementCount(this.pageLayoutDouble)) > 0) ? await action.waitForDisplayed(this.pageLayoutDouble) : false,
      undoBtn: ((await action.getElementCount(this.undoBtn)) > 0) ? await action.getText(this.undoBtn) : null,
      redoBtn: ((await action.getElementCount(this.redoBtn)) > 0) ? await action.getText(this.redoBtn) : null,
      notesBtn: ((await action.getElementCount(this.notesBtn)) > 0) ? await action.getText(this.notesBtn) : null,
      zoomInBtn: ((await action.getElementCount(this.zoomInBtn)) > 0) ? await action.getText(this.zoomInBtn) : null,
      zoomOutBtn: ((await action.getElementCount(this.zoomOutBtn)) > 0) ? await action.getText(this.zoomOutBtn) : null,
      fitToScreenBtn: ((await action.getElementCount(this.fitToScreenBtn)) > 0) ? await action.getText(this.fitToScreenBtn) : null,
      doublePageBtn: ((await action.getElementCount(this.doublePageBtn)) > 0) ? await action.getText(this.doublePageBtn) : null,
      singlePageBtn: ((await action.getElementCount(this.singlePageBtn)) > 0) ? await action.getText(this.singlePageBtn) : null,
      fullScreenBtn: ((await action.getElementCount(this.fullScreenBtn)) > 0) ? await action.getText(this.fullScreenBtn) : null,
      bookmarkBtn: ((await action.getElementCount(this.bookmarkBtn)) > 0) ? await action.getText(this.bookmarkBtn) : null,
      TOCBtn: ((await action.getElementCount(this.TOCBtn)) > 0) ? await action.getText(this.TOCBtn) : null,
      previousBtn: ((await action.getElementCount(this.previousBtn)) > 0) ? await action.getText(this.previousBtn) : null,
      nextBtn: ((await action.getElementCount(this.nextBtn)) > 0) ? await action.getText(this.nextBtn) : null,
    }
    return obj;
  },

  //-------- NOTES -----------
  click_notesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesBtn);
		await browser.pause(2000)
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesBtn button is clicked");
      res = await this.getData_notesModal();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesBtn button is not clicked", 'error');
    }
    return res;
  },

  //Function that returns the notes modal elements.
  getData_notesModal: async function () {
    await logger.logInto(await stackTrace.get());
    await action.waitForDisplayed(this.addNoteBtn); //manually edited
    var obj;
    obj = {
      myNotesTitle: ((await action.getElementCount(this.myNotesTitle)) > 0) ? await action.getText(this.myNotesTitle) : null,
      notesDockBtn: ((await action.getElementCount(this.notesDockBtn)) > 0) ? await action.getText(this.notesDockBtn) : null,
      notesUndockBtn: ((await action.getElementCount(this.notesUndockBtn)) > 0) ? await action.getText(this.notesUndockBtn) : null,
      notesCloseBtn: ((await action.getElementCount(this.notesCloseBtn)) > 0) ? await action.getText(this.notesCloseBtn) : null,
      addNoteBtn: ((await action.getElementCount(this.addNoteBtn)) > 0) ? await action.getText(this.addNoteBtn) : null,
      noNoteIcon: ((await action.getElementCount(this.noNoteIcon)) > 0) ? await action.waitForExist(this.noNoteIcon) : false,
      noNoteText: ((await action.getElementCount(this.noNoteText)) > 0) ? await action.getText(this.noNoteText) : null,
    }
    return obj;
  },

  //Clicking on 'Add Note' button and get the data of the text area
  click_addNoteBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addNoteBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addNoteBtn button is clicked");
      res = await this.getData_addNotes();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " addNoteBtn button is not clicked", 'error');
    }
    return res;
  },

  getData_addNotes: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      addNotesTitle: ((await action.getElementCount(this.addNotesTitle)) > 0) ? await action.getText(this.addNotesTitle) : null,
      notesPageLabel: ((await action.getElementCount(this.notesPageLabel)) > 0) ? await action.getText(this.notesPageLabel) : null,
      notesPageValueSingle: ((await action.getElementCount(this.notesPageValueSingle)) > 0) ? await action.getText(this.notesPageValueSingle) : null,
      notesPageValueLeft: ((await action.getElementCount(this.notesPageValueLeft)) > 0) ? await action.getText(this.notesPageValueLeft) : null,
      notesPageValueRight: ((await action.getElementCount(this.notesPageValueRight)) > 0) ? await action.getText(this.notesPageValueRight) : null,
      notesTextArea: ((await action.getElementCount(this.notesTextArea)) > 0) ? await action.getText(this.notesTextArea) : null,
      notesCancelBtn: ((await action.getElementCount(this.notesCancelBtn)) > 0) ? await action.getText(this.notesCancelBtn) : null,
      notesSaveBtn: ((await action.getElementCount(this.notesSaveBtn)) > 0) ? await action.getText(this.notesSaveBtn) : null,
    }
    return obj;
  },

  //Function to set a value in the add note text area
  set_notesTextArea: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.notesTextArea, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in notesTextArea");
    } else {
      await logger.logInto(await stackTrace.get(), res, 'error');
    }
    return res;
  },

  click_notesSaveBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesSaveBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesSaveBtn button is clicked");
      //res = this.getData_notesList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesSaveBtn button is not clicked", 'error');
    }
    return res;
  },

  getData_notesList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj = {};
    await action.waitForDisplayed(this.noteListItemText);
    var list = await action.findElements(this.noteListItemText);
    for (var i = 0; i < list.length; i++) {
      obj[i] = {
        noteListItemLabel: ((await action.getElementCount(this.noteListItemLabel + i + "']")) > 0) ? await action.getText(this.noteListItemLabel + i + "']") : null,
        noteListItemText: ((await action.getElementCount(this.noteListItemText + i + "']")) > 0) ? await action.getText(this.noteListItemText + i + "']") : null,
        noteListDeleteBtn: ((await action.getElementCount(this.noteListDeleteBtn + i + "']")) > 0) ? await action.getText(this.noteListDeleteBtn + i + "']") : null,
        noteListEditBtn: ((await action.getElementCount(this.noteListEditBtn + i + "']")) > 0) ? await action.getText(this.noteListEditBtn + i + "']") : null,
      }
    }
    return obj;
  },

  //Edit Note---
  click_noteListEditBtn: async function (noteListItemTextName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.noteListEditBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.noteListItemText + i + "']"))) == noteListItemTextName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --noteListEditBtn clicked");
      res = await this.getData_addNotes();
    }
    else
      await logger.logInto(await stackTrace.get(), res + " --noteListEditBtn NOT clicked", "error")
    return res;
  },

  click_notesCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesCancelBtn button is clicked");
      res = await this.getData_notesList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  //Function to close Notes Modal
  click_notesCloseBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesCloseBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesCloseBtn button is clicked");
      res = await action.waitForDisplayed(this.notesCloseBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesCloseBtn button is not clicked", 'error');
    }
    return res;
  },

  //Clicking on Delete Note button and get the data of the delete modal
  click_noteListDeleteBtn: async function (noteListItemTextName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.noteListDeleteBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.noteListItemText + i + "']"))) == noteListItemTextName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --noteListDeleteBtn clicked");
      res = await this.getData_deleteNotes();
    }
    else
      await logger.logInto(await stackTrace.get(), res + " --noteListDeleteBtn NOT clicked", "error")
    return res;
  },

  getData_deleteNotes: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      deleteNoteTitle: ((await action.getElementCount(this.deleteNoteTitle)) > 0) ? await action.getText(this.deleteNoteTitle) : null,
      deleteNoteSubTitle: ((await action.getElementCount(this.deleteNoteSubTitle)) > 0) ? await action.getText(this.deleteNoteSubTitle) : null,
      deleteNoteCancelBtn: ((await action.getElementCount(this.deleteNoteCancelBtn)) > 0) ? await action.getText(this.deleteNoteCancelBtn) : null,
      deleteNoteDeleteBtn: ((await action.getElementCount(this.deleteNoteDeleteBtn)) > 0) ? await action.getText(this.deleteNoteDeleteBtn) : null,
    }
    return obj;
  },

  click_deleteNoteCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteNoteCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deleteNoteCancelBtn button is clicked");
      res = await this.getData_notesList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " deleteNoteCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  click_deleteNoteDeleteBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteNoteDeleteBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deleteNoteDeleteBtn button is clicked");
      //res = this.getData_notesList();
      res = await this.getData_notesModal();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " deleteNoteDeleteBtn button is not clicked", 'error');
    }
    return res;
  },

  //Notes other functions
  click_notesDockBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesDockBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesDockBtn button is clicked");
      res = await action.waitForDisplayed(this.notesDockContainer); //manually added
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesDockBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesUndockBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesUndockBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesUndockBtn button is clicked");
      res = await action.waitForDisplayed(this.notesDockContainer, undefined, true);  //manually added
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesUndockBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesPageValueLeft: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesPageValueLeft);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesPageValueLeft button is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesPageValueLeft button is not clicked", 'error');
    }
    return res;
  },

  click_notesPageValueRight: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.notesPageValueRight);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " notesPageValueRight button is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " notesPageValueRight button is not clicked", 'error');
    }
    return res;
  },

  //--------BOOKMARKS-------
  click_bookmarkBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkBtn button is clicked");
      res = await this.getData_bookmarkModal();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkBtn button is not clicked", 'error');
    }
    return res;
  },

  //Function that returns the bookmark modal elements 
  getData_bookmarkModal: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      myBookmarksTitle: ((await action.getElementCount(this.myBookmarksTitle)) > 0) ? await action.getText(this.myBookmarksTitle) : null,
      bookmarkCloseBtn: ((await action.getElementCount(this.bookmarkCloseBtn)) > 0) ? await action.getText(this.bookmarkCloseBtn) : null,
      noBookmarkIcon: ((await action.getElementCount(this.noBookmarkIcon)) > 0) ? await action.waitForExist(this.noBookmarkIcon) : false,
      noBookmarkText: ((await action.getElementCount(this.noBookmarkText)) > 0) ? await action.getText(this.noBookmarkText) : null,
      addBookmarkBtn: ((await action.getElementCount(this.addBookmarkBtn)) > 0) ? await action.getText(this.addBookmarkBtn) : null,
    }
    return obj;
  },

  //Clicking on Add Bookmark button and get the data of the text area
  click_addBookmarkBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addBookmarkBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addBookmarkBtn button is clicked");
      res = await this.getData_addBookmark();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " addBookmarkBtn button is not clicked", 'error');
    }
    return res;
  },

  getData_addBookmark: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      bookmarkNameLabel: ((await action.getElementCount(this.bookmarkNameLabel)) > 0) ? await action.getText(this.bookmarkNameLabel) : null,
      bookmarkPageLabel: ((await action.getElementCount(this.bookmarkPageLabel)) > 0) ? await action.getText(this.bookmarkPageLabel) : null,
      bookmarkPageValueSingle: ((await action.getElementCount(this.bookmarkPageValueSingle)) > 0) ? await action.getText(this.bookmarkPageValueSingle) : null,
      bookmarkPageValueLeft: ((await action.getElementCount(this.bookmarkPageValueLeft)) > 0) ? await action.getText(this.bookmarkPageValueLeft) : null,
      bookmarkPageValueRight: ((await action.getElementCount(this.bookmarkPageValueRight)) > 0) ? await action.getText(this.bookmarkPageValueRight) : null,
      bookmarkTextArea: ((await action.getElementCount(this.bookmarkTextArea)) > 0) ? await action.getText(this.bookmarkTextArea) : null,
      bookmarkCancelBtn: ((await action.getElementCount(this.bookmarkCancelBtn)) > 0) ? await action.getText(this.bookmarkCancelBtn) : null,
      bookmarkSaveBtn: ((await action.getElementCount(this.bookmarkSaveBtn)) > 0) ? await action.getText(this.bookmarkSaveBtn) : null,
    }
    return obj;
  },

  //Function to set a value in the add bookmark text area
  set_bookmarkTextArea: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.bookmarkTextArea, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in bookmarkTextArea");
    } else {
      await logger.logInto(await stackTrace.get(), res, 'error');
    }
    return res;
  },

  click_bookmarkSaveBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkSaveBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkSaveBtn button is clicked");
      //res = this.getData_bookmarkList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkSaveBtn button is not clicked", 'error');
    }
    return res;
  },

  getData_bookmarkList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj = {};
    await action.waitForDisplayed(this.bookmarkListItemName);
    var list = await action.findElements(this.bookmarkListItemName);
    for (var i = 0; i < list.length; i++) {
      obj[i] = {
        bookmarkListItemLabel: ((await action.getElementCount(this.bookmarkListItemLabel + i + "']")) > 0) ? await action.getText(this.bookmarkListItemLabel + i + "']") : null,
        bookmarkListItemName: ((await action.getElementCount(this.bookmarkListItemName + i + "']")) > 0) ? await action.getText(this.bookmarkListItemName + i + "']") : null,
        bookmarkListDeleteBtn: ((await action.getElementCount(this.bookmarkListDeleteBtn + i + "']")) > 0) ? await action.getText(this.bookmarkListDeleteBtn + i + "']") : null,
        bookmarkListEditBtn: ((await action.getElementCount(this.bookmarkListEditBtn + i + "']")) > 0) ? await action.getText(this.bookmarkListEditBtn + i + "']") : null,
      }
    }
    return obj;
  },

  //Edit Bookmark----
  click_bookmarkListEditBtn: async function (bookmarkListItemNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.bookmarkListEditBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookmarkListItemName + i + "']"))) == bookmarkListItemNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --bookmarkListEditBtn clicked");
      res = await this.getData_addBookmark();
    }
    else
      await logger.logInto(await stackTrace.get(), res + " --bookmarkListEditBtn NOT clicked", "error")
    return res;
  },

  click_bookmarkCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkCancelBtn button is clicked");
      res = await this.getData_bookmarkList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  //Function to close Bookmarks Modal
  click_bookmarkCloseBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkCloseBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkCloseBtn button is clicked");
      res = await action.waitForDisplayed(this.bookmarkCloseBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkCloseBtn button is not clicked", 'error');
    }
    return res;
  },

  //Function to delete bookmark
  click_bookmarkListDeleteBtn: async function (bookmarkListItemNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.bookmarkListDeleteBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookmarkListItemName + i + "']"))) == bookmarkListItemNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --bookmarkListDeleteBtn clicked");
      //res = this.getData_bookmarkList();
      res = await this.getData_bookmarkModal();
    }
    else
      await logger.logInto(await stackTrace.get(), res + " --bookmarkListDeleteBtn NOT clicked", "error")
    return res;
  },

  //Bookmarks other functions
  click_bookmarkPageValueLeft: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkPageValueLeft);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkPageValueLeft button is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkPageValueLeft button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkPageValueRight: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookmarkPageValueRight);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookmarkPageValueRight button is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " bookmarkPageValueRight button is not clicked", 'error');
    }
    return res;
  },

  //----TOC----
  click_TOCBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.TOCBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " TOCBtn button is clicked");
      res = await this.getData_flipbookTOC();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " TOCBtn button is clicked", 'error');
    }
    return res;
  },

  getData_flipbookTOC: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      flipbookTitle: ((await action.getElementCount(this.flipbookTitle)) > 0) ? await action.getText(this.flipbookTitle) : null,
      tableOfContentTitle: ((await action.getElementCount(this.tableOfContentTitle)) > 0) ? await action.getText(this.tableOfContentTitle) : null,
      jumpToPageInput: ((await action.getElementCount(this.jumpToPageInput)) > 0) ? await action.getText(this.jumpToPageInput) : null,
      jumpToPageBtnTOC: ((await action.getElementCount(this.jumpToPageBtnTOC)) > 0) ? await action.getText(this.jumpToPageBtnTOC) : null,
      resourceTitle: await this.resourceTitle_Data(),
    }
    return obj;
  },

  resourceTitle_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var resourceTitle_Arr = [];
    list = await action.findElements(this.resourceTitle);
    for (i = 0; i < list.length; i++) {
      resourceTitle_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), resourceTitle_Arr);
    return resourceTitle_Arr;
  },

  click_jumpToPageInput: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.jumpToPageInput);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " TOCBtn button is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " TOCBtn button is clicked", 'error');
    }
    return res;
  },

  set_jumpToPageInput: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.jumpToPageInput, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in jumpToPageInput");
    } else {
      await logger.logInto(await stackTrace.get(), res, 'error');
    }
    return res;
  },

  click_jumpToPageBtnTOC: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.jumpToPageBtnTOC);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " jumpToPageBtnTOC button is clicked");
      res = await this.getData_flipbookPage();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " jumpToPageBtnTOC button is not clicked", 'error');
    }
    return res;
  },

  click_jumpToPreviousPageBtn: async function () {
    await logger.logInto(stackTrace.get());
    var res;
    res = await action.click(this.jumpToPreviousPageBtn);
    if (true == res) {
      await logger.logInto(stackTrace.get(), " jumpToPreviousPageBtn button is clicked");
      res = await this.getData_flipbookPage();
    }
    else {
      await logger.logInto(stackTrace.get(), res + " jumpToPreviousPageBtn button is not clicked", 'error');
    }
    return res;
  },

  //-----TOOLBAR BUTTONS-----
  click_annotationsBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.annotationsBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " annotationsBtn button is clicked");
      //expected behaviour to be added
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " annotationsBtn button is not clicked", 'error');
    }
    return res;
  },

  get_flipbookPanelSize: async function () {
    await logger.logInto(await stackTrace.get());
    var res, size;
    size = {
      width: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'width')).value : null,
      height: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'height')).value : null
    };
    size.width = parseInt(size.width.match(/\d+/g)[0]);
    size.height = parseInt(size.height.match(/\d+/g)[0]);
    return size;
  },

  click_zoomInBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res, size;
    res = await action.click(this.zoomInBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " zoomInBtn button is clicked");
      size = {
        width: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'width')).value : null,
        height: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'height')).value : null
      };
      size.width = parseInt(size.width.match(/\d+/g)[0]);
      size.height = parseInt(size.height.match(/\d+/g)[0]);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " zoomInBtn button is not clicked", 'error');
    }
    return size;
  },

  click_zoomOutBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res, size;
    res = await action.click(this.zoomOutBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " zoomOutBtn button is clicked");
      size = {
        width: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'width')).value : null,
        height: (await action.getElementCount(this.readerContainerWrapper)) > 0 ? (await action.getCSSProperty(this.readerContainerWrapper,'height')).value : null
      };
      size.width = parseInt(size.width.match(/\d+/g)[0]);
      size.height = parseInt(size.height.match(/\d+/g)[0]);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " zoomOutBtn button is not clicked", 'error');
    }
    return size;
  },

  click_fitToScreenBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.fitToScreenBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " fitToScreenBtn button is clicked");
      res = await action.getCSSProperty(this.readerContainerWrapper, 'width');
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " fitToScreenBtn button is not clicked", 'error');
    }
    return res;
  },

  click_doublePageBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.doublePageBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " doublePageBtn button is clicked");
      res = await this.getData_flipbookPage();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " doublePageBtn button is not clicked", 'error');
    }
    return res;
  },

  click_singlePageBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.singlePageBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " singlePageBtn button is clicked");
      var singlelayoutWidth = ((await action.getElementCount(this.pageLayoutSingle)) > 0) ? await action.getAttribute(this.pageLayoutSingle,"style") : null;
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " singlePageBtn button is not clicked", 'error');
    }
    return singlelayoutWidth;
  },

  click_fullScreenBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.fullScreenBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " fullScreenBtn button is clicked");
      res = await action.getCSSProperty(this.fullScreenBtn, 'aria-label');
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " fullScreenBtn button is not clicked", 'error');
    }
    return res;
  },

  click_previousBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.previousBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " previousBtn button is clicked");
      res = await this.getData_flipbookPage();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " previousBtn button is not clicked", 'error');
    }
    return res;
  },

  click_nextBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.nextBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " nextBtn button is clicked");
      res = await this.getData_flipbookPage();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + " nextBtn button is not clicked", 'error');
    }
    return res;
  },

  //-----HOTLINKS------
  isHotlinkExists: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      hotlinks_isExists: (await action.getElementCount(this.hotlinks)) >= 1 ? true : false,
    };
    //console.log("hotlinks exist - ",res)
    return res;
  },

  click_hotlink: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hotlinkToBeClicked);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " hotlinkToBeClicked button is clicked");
      //res = await action.isDisplayed(this.hotlinkPlayer);
      res = {
        audioPlayer_isExists: (await action.getElementCount(this.hotlinkPlayer)) == 1 ? true : false,
			  hotlink_isActive: ((await action.getElementCount(this.activeHotlink)) == 1) ? true : false,
      }
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "hotlinkToBeClicked button is not clicked", 'error');
    }
    console.log(" res -----",res);
    return res;
  }
}

