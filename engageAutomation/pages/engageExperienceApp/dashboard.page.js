"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

  pageTitle: selectorFile.css.ComproEngage.dashboard.pageTitle,
  createPlaylistBtn: selectorFile.css.ComproEngage.dashboard.createPlaylistBtn,
  addBookBtn: selectorFile.css.ComproEngage.dashboard.addBookBtn,
  cardSliderTitle: selectorFile.css.ComproEngage.dashboard.cardSliderTitle,
  cardSliderSubtitle: selectorFile.css.ComproEngage.dashboard.cardSliderSubtitle,
  cardSliderLeftBtn: selectorFile.css.ComproEngage.dashboard.cardSliderLeftBtn,
  cardSliderRightBtn: selectorFile.css.ComproEngage.dashboard.cardSliderRightBtn,
  actionCardTitles: selectorFile.css.ComproEngage.dashboard.actionCardTitles,
  actionCardSubtitles: selectorFile.css.ComproEngage.dashboard.actionCardSubtitles,
  actionCardBtns: selectorFile.css.ComproEngage.dashboard.actionCardBtns,
  myBooksHeading: selectorFile.css.ComproEngage.dashboard.myBooksHeading,
  noBooksTitle: selectorFile.css.ComproEngage.dashboard.noBooksTitle,
  noBooksSubtitle: selectorFile.css.ComproEngage.dashboard.noBooksSubtitle,
  noBooks_addBookBtn: selectorFile.css.ComproEngage.dashboard.noBooks_addBookBtn,
  myPlaylistsHeading: selectorFile.css.ComproEngage.dashboard.myPlaylistsHeading,
  noPlaylistsTitle: selectorFile.css.ComproEngage.dashboard.noPlaylistsTitle,
  noPlaylistsSubTitle: selectorFile.css.ComproEngage.dashboard.noPlaylistsSubTitle,
  noPlaylists_createBtn: selectorFile.css.ComproEngage.dashboard.noPlaylists_createBtn,
  playlistTitle: selectorFile.css.ComproEngage.dashboard.playlistTitle,
  playlistSubtitle: selectorFile.css.ComproEngage.dashboard.playlistSubtitle,
  bookTitle: selectorFile.css.ComproEngage.dashboard.bookTitle,
  bookSubtitle: selectorFile.css.ComproEngage.dashboard.bookSubtitle,
  bookMenuBtn: selectorFile.css.ComproEngage.dashboard.bookMenuBtn,
  viewBookBtn: selectorFile.css.ComproEngage.dashboard.viewBookBtn,
  bookCover: selectorFile.css.ComproEngage.dashboard.bookCover,
  bookMenu_viewClassOption: selectorFile.css.ComproEngage.dashboard.bookMenu_viewClassOption,
  bookMenu_createClassOption: selectorFile.css.ComproEngage.dashboard.bookMenu_createClassOption,
  bookMenu_removeOption: selectorFile.css.ComproEngage.dashboard.bookMenu_removeOption,
  bookMenu_openFlipbookOption: selectorFile.css.ComproEngage.dashboard.bookMenu_openFlipbookOption,
  removeBook_title: selectorFile.css.ComproEngage.dashboard.removeBook_title,
  removeBook_subTitle: selectorFile.css.ComproEngage.dashboard.removeBook_subTitle,
  removeBook_cancelBtn: selectorFile.css.ComproEngage.dashboard.removeBook_cancelBtn,
  removeBook_removeBtn: selectorFile.css.ComproEngage.dashboard.removeBook_removeBtn,
  createPlaylist_label: selectorFile.css.ComproEngage.dashboard.createPlaylist_label,
  createPlaylist_input: selectorFile.css.ComproEngage.dashboard.createPlaylist_input,
  createPlaylist_cancelBtn: selectorFile.css.ComproEngage.dashboard.createPlaylist_cancelBtn,
  createPlaylist_createBtn: selectorFile.css.ComproEngage.dashboard.createPlaylist_createBtn,
  exploreHeading: selectorFile.css.ComproEngage.dashboard.exploreHeading,
  viewAllBtn: selectorFile.css.ComproEngage.dashboard.viewAllBtn,
  resourceTitle: selectorFile.css.ComproEngage.dashboard.resourceTitle,
  resourceSubtitle: selectorFile.css.ComproEngage.dashboard.resourceSubtitle,
  recentlyViewedHeading: selectorFile.css.ComproEngage.dashboard.recentlyViewedHeading,
  recentlyViewed_activities: selectorFile.css.ComproEngage.dashboard.recentlyViewed_activities,
  recentMaterialsBtn: selectorFile.css.ComproEngage.dashboard.recentMaterialsBtn,
  addNewMaterialBtn: selectorFile.css.ComproEngage.dashboard.addNewMaterialBtn,
  noMaterialTitle: selectorFile.css.ComproEngage.dashboard.noMaterialTitle,
  noMaterialSubtitle: selectorFile.css.ComproEngage.dashboard.noMaterialSubtitle,
  viewAllMaterialBtn: selectorFile.css.ComproEngage.dashboard.viewAllMaterialBtn,
  createNewLabel: selectorFile.css.ComproEngage.dashboard.createNewLabel,
  blankQuizOption: selectorFile.css.ComproEngage.dashboard.blankQuizOption,
  blankSurveyOption: selectorFile.css.ComproEngage.dashboard.blankSurveyOption,
  newResourceOption: selectorFile.css.ComproEngage.dashboard.newResourceOption,
  materialTitleBtn: selectorFile.css.ComproEngage.dashboard.materialTitleBtn,
  materialOptionsBtn: selectorFile.css.ComproEngage.dashboard.materialOptionsBtn,
  addToClassBtn: selectorFile.css.ComproEngage.dashboard.addToClassBtn,
  previewMaterialOption: selectorFile.css.ComproEngage.dashboard.previewMaterialOption,
  editMaterialOption: selectorFile.css.ComproEngage.dashboard.editMaterialOption,
  duplicateMaterialOption: selectorFile.css.ComproEngage.dashboard.duplicateMaterialOption,
  deleteMaterialOption: selectorFile.css.ComproEngage.dashboard.deleteMaterialOption,
  deleteMaterialDialogTitle: selectorFile.css.ComproEngage.dashboard.deleteMaterialDialogTitle,
  deleteMaterialDialogSubtitle: selectorFile.css.ComproEngage.dashboard.deleteMaterialDialogSubtitle,
  deleteMaterialDialogWarning: selectorFile.css.ComproEngage.dashboard.deleteMaterialDialogWarning,
  deleteMaterialDialogCancelBtn: selectorFile.css.ComproEngage.dashboard.deleteMaterialDialogCancelBtn,
  deleteMaterialDialogDeleteBtn: selectorFile.css.ComproEngage.dashboard.deleteMaterialDialogDeleteBtn,
  editMaterialDialogTitle: selectorFile.css.ComproEngage.dashboard.editMaterialDialogTitle,
  editMaterialDialogSubtitle: selectorFile.css.ComproEngage.dashboard.editMaterialDialogSubtitle,
  editMaterialDialogEditBtn: selectorFile.css.ComproEngage.dashboard.editMaterialDialogEditBtn,
  editMaterialDialogCancelBtn: selectorFile.css.ComproEngage.dashboard.editMaterialDialogCancelBtn,
  addToClassDialogTitle: selectorFile.css.ComproEngage.dashboard.addToClassDialogTitle,
  addToClassDialogSubtitle: selectorFile.css.ComproEngage.dashboard.addToClassDialogSubtitle,
  addToClassMenuCloseBtn: selectorFile.css.ComproEngage.dashboard.addToClassMenuCloseBtn,
  addNew_btn: selectorFile.css.ComproEngage.dashboard.addNew_btn,
  rightPanelOpen_btn: selectorFile.css.ComproEngage.dashboard.rightPanelOpen_btn,
  rightPanelClose_btn: selectorFile.css.ComproEngage.dashboard.rightPanelClose_btn,

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

  getData_dashboardPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      pageTitle: ((await action.getElementCount(this.pageTitle)) > 0) ? await action.getText(this.pageTitle) : null,
      createPlaylistBtn: ((await action.getElementCount(this.createPlaylistBtn)) > 0) ? await action.getText(this.createPlaylistBtn) : null,
      addBookBtn: ((await action.getElementCount(this.addBookBtn)) > 0) ? await action.getText(this.addBookBtn) : null,
      cardSliderTitle: ((await action.getElementCount(this.cardSliderTitle)) > 0) ? await action.getText(this.cardSliderTitle) : null,
      cardSliderSubtitle: ((await action.getElementCount(this.cardSliderSubtitle)) > 0) ? await action.getText(this.cardSliderSubtitle) : null,
      cardSliderLeftBtn: ((await action.getElementCount(this.cardSliderLeftBtn)) > 0) ? await action.getText(this.cardSliderLeftBtn) : null,
      cardSliderRightBtn: ((await action.getElementCount(this.cardSliderRightBtn)) > 0) ? await action.getText(this.cardSliderRightBtn) : null,
      myBooksHeading: ((await action.getElementCount(this.myBooksHeading)) > 0) ? await action.getText(this.myBooksHeading) : null,
      noBooksTitle: ((await action.getElementCount(this.noBooksTitle)) > 0) ? await action.getText(this.noBooksTitle) : null,
      noBooksSubtitle: ((await action.getElementCount(this.noBooksSubtitle)) > 0) ? await action.getText(this.noBooksSubtitle) : null,
      noBooks_addBookBtn: ((await action.getElementCount(this.noBooks_addBookBtn)) > 0) ? await action.getText(this.noBooks_addBookBtn) : null,
      myPlaylistsHeading: ((await action.getElementCount(this.myPlaylistsHeading)) > 0) ? await action.getText(this.myPlaylistsHeading) : null,
      noPlaylistsTitle: ((await action.getElementCount(this.noPlaylistsTitle)) > 0) ? await action.getText(this.noPlaylistsTitle) : null,
      noPlaylistsSubTitle: ((await action.getElementCount(this.noPlaylistsSubTitle)) > 0) ? await action.getText(this.noPlaylistsSubTitle) : null,
      noPlaylists_createBtn: ((await action.getElementCount(this.noPlaylists_createBtn)) > 0) ? await action.getText(this.noPlaylists_createBtn) : null,
      exploreHeading: ((await action.getElementCount(this.exploreHeading)) > 0) ? await action.getText(this.exploreHeading) : null,
      viewAllBtn: ((await action.getElementCount(this.viewAllBtn)) > 0) ? await action.getText(this.viewAllBtn) : null,
      recentlyViewedHeading: ((await action.getElementCount(this.recentlyViewedHeading)) > 0) ? await action.getText(this.recentlyViewedHeading) : null,
      recentMaterialsBtn: ((await action.getElementCount(this.recentMaterialsBtn)) > 0) ? await action.getText(this.recentMaterialsBtn) : null,
      addNewMaterialBtn: ((await action.getElementCount(this.addNewMaterialBtn)) > 0) ? await action.getText(this.addNewMaterialBtn) : null,
      noMaterialTitle: ((await action.getElementCount(this.noMaterialTitle)) > 0) ? await action.getText(this.noMaterialTitle) : null,
      noMaterialSubtitle: ((await action.getElementCount(this.noMaterialSubtitle)) > 0) ? await action.getText(this.noMaterialSubtitle) : null,
      viewAllMaterialBtn: ((await action.getElementCount(this.viewAllMaterialBtn)) > 0) ? await action.getText(this.viewAllMaterialBtn) : null,
    }
    return obj;
  },

  getData_actionCards: async function (actionCardTitlesName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.actionCardTitles);
    var list = await action.findElements(this.actionCardTitles);
    if (actionCardTitlesName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.actionCardTitles + i)) == actionCardTitlesName) {
          obj[0] = {
            actionCardTitles: ((await action.getElementCount(this.actionCardTitles + i + "]")) > 0) ? await action.getText(this.actionCardTitles + i + "]") : null,
            actionCardSubtitles: ((await action.getElementCount(this.actionCardSubtitles + i + "]")) > 0) ? await action.getText(this.actionCardSubtitles + i + "]") : null,
            actionCardBtns: ((await action.getElementCount(this.actionCardBtns + i + "]")) > 0) ? await action.getText(this.actionCardBtns + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          actionCardTitles: ((await action.getElementCount(this.actionCardTitles + i + "]")) > 0) ? await action.getText(this.actionCardTitles + i + "]") : null,
          actionCardSubtitles: ((await action.getElementCount(this.actionCardSubtitles + i + "]")) > 0) ? await action.getText(this.actionCardSubtitles + i + "]") : null,
          actionCardBtns: ((await action.getElementCount(this.actionCardBtns + i + "]")) > 0) ? await action.getText(this.actionCardBtns + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_playlist: async function (playlistTitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.playlistTitle);
    var list = await action.findElements(this.playlistTitle);
    if (playlistTitleName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.playlistTitle + i)) == playlistTitleName) {
          obj[0] = {
            playlistTitle: ((await action.getElementCount(this.playlistTitle + i + "]")) > 0) ? await action.getText(this.playlistTitle + i + "]") : null,
            playlistSubtitle: ((await action.getElementCount(this.playlistSubtitle + i + "]")) > 0) ? await action.getText(this.playlistSubtitle + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          playlistTitle: ((await action.getElementCount(this.playlistTitle + i + "]")) > 0) ? await action.getText(this.playlistTitle + i + "]") : null,
          playlistSubtitle: ((await action.getElementCount(this.playlistSubtitle + i + "]")) > 0) ? await action.getText(this.playlistSubtitle + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_books: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.bookTitle);
    var list = await action.findElements(this.bookTitle);
    if (bookTitleName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.bookTitle + i)) == bookTitleName) {
          obj[0] = {
            bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
            bookSubtitle: ((await action.getElementCount(this.bookSubtitle + i + "]")) > 0) ? await action.getText(this.bookSubtitle + i + "]") : null,
            bookMenuBtn: ((await action.getElementCount(this.bookMenuBtn + i + "]")) > 0) ? await action.getText(this.bookMenuBtn + i + "]") : null,
            viewBookBtn: ((await action.getElementCount(this.viewBookBtn + i + "]")) > 0) ? await action.getText(this.viewBookBtn + i + "]") : null,
            bookCover: ((await action.getElementCount(this.bookCover + i + "]")) > 0) ? await action.getText(this.bookCover + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
          bookSubtitle: ((await action.getElementCount(this.bookSubtitle + i + "]")) > 0) ? await action.getText(this.bookSubtitle + i + "]") : null,
          bookMenuBtn: ((await action.getElementCount(this.bookMenuBtn + i + "]")) > 0) ? await action.getText(this.bookMenuBtn + i + "]") : null,
          viewBookBtn: ((await action.getElementCount(this.viewBookBtn + i + "]")) > 0) ? await action.getText(this.viewBookBtn + i + "]") : null,
          bookCover: ((await action.getElementCount(this.bookCover + i + "]")) > 0) ? await action.getText(this.bookCover + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_bookMenu: async function () {
    await logger.logInto(await stackTrace.get());
    await action.waitForDisplayed(this.bookMenu_viewClassOption)
    var obj;
    obj = {
      bookMenu_viewClassOption: ((await action.getElementCount(this.bookMenu_viewClassOption)) > 0) ? await action.getText(this.bookMenu_viewClassOption) : null,
      bookMenu_createClassOption: ((await action.getElementCount(this.bookMenu_createClassOption)) > 0) ? await action.getText(this.bookMenu_createClassOption) : null,
      bookMenu_removeOption: ((await action.getElementCount(this.bookMenu_removeOption)) > 0) ? await action.getText(this.bookMenu_removeOption) : null,
      bookMenu_openFlipbookOption: ((await action.getElementCount(this.bookMenu_openFlipbookOption)) > 0) ? await action.getText(this.bookMenu_openFlipbookOption) : null,
    }
    return obj;
  },

  getData_removeBookDialog: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      removeBook_title: ((await action.getElementCount(this.removeBook_title)) > 0) ? await action.getText(this.removeBook_title) : null,
      removeBook_subTitle: ((await action.getElementCount(this.removeBook_subTitle)) > 0) ? await action.getText(this.removeBook_subTitle) : null,
      removeBook_cancelBtn: ((await action.getElementCount(this.removeBook_cancelBtn)) > 0) ? await action.getText(this.removeBook_cancelBtn) : null,
      removeBook_removeBtn: ((await action.getElementCount(this.removeBook_removeBtn)) > 0) ? await action.getText(this.removeBook_removeBtn) : null,
    }
    return obj;
  },

  getData_createPlaylistDialog: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      createPlaylist_label: ((await action.getElementCount(this.createPlaylist_label)) > 0) ? await action.getText(this.createPlaylist_label) : null,
      createPlaylist_input: ((await action.getElementCount(this.createPlaylist_input)) > 0) ? await action.getText(this.createPlaylist_input) : null,
      createPlaylist_cancelBtn: ((await action.getElementCount(this.createPlaylist_cancelBtn)) > 0) ? await action.getText(this.createPlaylist_cancelBtn) : null,
      createPlaylist_createBtn: ((await action.getElementCount(this.createPlaylist_createBtn)) > 0) ? await action.getText(this.createPlaylist_createBtn) : null,
    }
    return obj;
  },

  getData_resources: async function (resourceTitleName) {
    await logger.logInto(await stackTrace.get());
    var obj = [], i, arr = [];
    var resourceTitle = await action.findElements(this.resourceTitle)
    var resourceSubtitle = await action.findElements(this.resourceSubtitle)
    if (resourceTitleName) {
      for (var i = 0; i <= resourceTitle.length; i++) {
        if ((await action.getText(resourceTitle[i])) == resourceTitleName) {
          obj[0] = {
            resourceTitle: ((await action.getElementCount(resourceTitle[i])) > 0) ? await action.getText(resourceTitle[i]) : null,
            resourceSubtitle: ((await action.getElementCount(resourceSubtitle[i])) > 0) ? await action.getText(resourceSubtitle[i]) : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i <= resourceTitle.length; i++) {
        obj[i] = {
          resourceTitle: ((await action.getElementCount(resourceTitle[i]) > 0)) ? await action.getText(resourceTitle[i]) : null,
          resourceSubtitle: ((await action.getElementCount(resourceSubtitle[i]) > 0)) ? await action.getText(resourceSubtitle[i]) : null,
        }
      }
    }
    return obj;
  },

  getData_recentlyViewedList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      recentlyViewed_activities: await this.recentlyViewed_activities_Data(),
    }
    return obj;
  },

  recentlyViewed_activities_Data: async function () {
    await logger.logInto(await stackTrace.get());
    var i, list;
    var recentlyViewed_activities_Arr = [];
    list = await action.findElements(this.recentlyViewed_activities);
    for (i = 0; i < list.length; i++) {
      recentlyViewed_activities_Arr[i] = await action.getText(list[i])
    }
    await logger.logInto(await stackTrace.get(), recentlyViewed_activities_Arr);
    return recentlyViewed_activities_Arr;
  },

  getData_addNewMaterialMenu: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      createNewLabel: ((await action.getElementCount(this.createNewLabel)) > 0) ? await action.getText(this.createNewLabel) : null,
      blankQuizOption: ((await action.getElementCount(this.blankQuizOption)) > 0) ? await action.getText(this.blankQuizOption) : null,
      blankSurveyOption: ((await action.getElementCount(this.blankSurveyOption)) > 0) ? await action.getText(this.blankSurveyOption) : null,
      newResourceOption: ((await action.getElementCount(this.newResourceOption)) > 0) ? await action.getText(this.newResourceOption) : null,
    }
    return obj;
  },

  getData_materials: async function (materialTitleBtnName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.materialTitleBtn);
    var list = await action.findElements(this.materialTitleBtn);
    if (materialTitleBtnName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.materialTitleBtn + i)) == materialTitleBtnName) {
          obj[0] = {
            materialTitleBtn: ((await action.getElementCount(this.materialTitleBtn + i + "]")) > 0) ? await action.getText(this.materialTitleBtn + i + "]") : null,
            materialOptionsBtn: ((await action.getElementCount(this.materialOptionsBtn + i + "]")) > 0) ? await action.getText(this.materialOptionsBtn + i + "]") : null,
            addToClassBtn: ((await action.getElementCount(this.addToClassBtn + i + "]")) > 0) ? await action.getText(this.addToClassBtn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          materialTitleBtn: ((await action.getElementCount(this.materialTitleBtn + i + "]")) > 0) ? await action.getText(this.materialTitleBtn + i + "]") : null,
          materialOptionsBtn: ((await action.getElementCount(this.materialOptionsBtn + i + "]")) > 0) ? await action.getText(this.materialOptionsBtn + i + "]") : null,
          addToClassBtn: ((await action.getElementCount(this.addToClassBtn + i + "]")) > 0) ? await action.getText(this.addToClassBtn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_materialMenu: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      previewMaterialOption: ((await action.getElementCount(this.previewMaterialOption)) > 0) ? await action.getText(this.previewMaterialOption) : null,
      editMaterialOption: ((await action.getElementCount(this.editMaterialOption)) > 0) ? await action.getText(this.editMaterialOption) : null,
      duplicateMaterialOption: ((await action.getElementCount(this.duplicateMaterialOption)) > 0) ? await action.getText(this.duplicateMaterialOption) : null,
      deleteMaterialOption: ((await action.getElementCount(this.deleteMaterialOption)) > 0) ? await action.getText(this.deleteMaterialOption) : null,
    }
    return obj;
  },

  getData_deleteMaterialDialog: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      deleteMaterialDialogTitle: ((await action.getElementCount(this.deleteMaterialDialogTitle)) > 0) ? await action.getText(this.deleteMaterialDialogTitle) : null,
      deleteMaterialDialogSubtitle: ((await action.getElementCount(this.deleteMaterialDialogSubtitle)) > 0) ? await action.getText(this.deleteMaterialDialogSubtitle) : null,
      deleteMaterialDialogWarning: ((await action.getElementCount(this.deleteMaterialDialogWarning)) > 0) ? await action.getText(this.deleteMaterialDialogWarning) : null,
      deleteMaterialDialogCancelBtn: ((await action.getElementCount(this.deleteMaterialDialogCancelBtn)) > 0) ? await action.getText(this.deleteMaterialDialogCancelBtn) : null,
      deleteMaterialDialogDeleteBtn: ((await action.getElementCount(this.deleteMaterialDialogDeleteBtn)) > 0) ? await action.getText(this.deleteMaterialDialogDeleteBtn) : null,
    }
    return obj;
  },

  getData_editMaterialDialog: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      editMaterialDialogTitle: ((await action.getElementCount(this.editMaterialDialogTitle)) > 0) ? await action.getText(this.editMaterialDialogTitle) : null,
      editMaterialDialogSubtitle: ((await action.getElementCount(this.editMaterialDialogSubtitle)) > 0) ? await action.getText(this.editMaterialDialogSubtitle) : null,
      editMaterialDialogEditBtn: ((await action.getElementCount(this.editMaterialDialogEditBtn)) > 0) ? await action.getText(this.editMaterialDialogEditBtn) : null,
      editMaterialDialogCancelBtn: ((await action.getElementCount(this.editMaterialDialogCancelBtn)) > 0) ? await action.getText(this.editMaterialDialogCancelBtn) : null,
    }
    return obj;
  },

  getData_addToClassDialog: async function () {
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    var obj;
    obj = {
      addToClassDialogTitle: ((await action.getElementCount(this.addToClassDialogTitle)) > 0) ? await action.getText(this.addToClassDialogTitle) : null,
      addToClassDialogSubtitle: ((await action.getElementCount(this.addToClassDialogSubtitle)) > 0) ? await action.getText(this.addToClassDialogSubtitle) : null,
      addToClassMenuCloseBtn: ((await action.getElementCount(this.addToClassMenuCloseBtn)) > 0) ? await action.getText(this.addToClassMenuCloseBtn) : null,
    }
    return obj;
  },

  click_createPlaylistBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.createPlaylistBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " createPlaylistBtn is clicked");
      res = await this.getData_createPlaylistDialog();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "createPlaylistBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_addBookBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addBookBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addBookBtn is clicked");
      res = await require('./browse.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "addBookBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cardSliderLeftBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cardSliderLeftBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " cardSliderLeftBtn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "cardSliderLeftBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cardSliderRightBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.cardSliderRightBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " cardSliderRightBtn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "cardSliderRightBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_actionCardBtns: async function (actionCardTitlesName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.actionCardBtns);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.actionCardTitles + i + "]"))) == actionCardTitlesName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --actionCardBtns clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --actionCardBtns NOT clicked", "error")
    return res;
  },

  click_noBooks_addBookBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.noBooks_addBookBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " noBooks_addBookBtn is clicked");
      res = await require('./addBook.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "noBooks_addBookBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_noPlaylists_createBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.noPlaylists_createBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " noPlaylists_createBtn is clicked");
      res = await this.getData_createPlaylistDialog();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "noPlaylists_createBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistTitle: async function (playlistTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.playlistTitle);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.playlistTitle + i + "]"))) == playlistTitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --playlistTitle clicked");
      res = await require('./playlist.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --playlistTitle NOT clicked", "error")
    return res;
  },

  click_bookMenuBtn: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.bookMenuBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --bookMenuBtn clicked");
      await action.waitForDisplayed(this.bookMenu_viewClassOption);
      res = await this.getData_bookMenu();
    }
    else
      await logger.logInto(await stackTrace.get(), " --bookMenuBtn NOT clicked", "error")
    return res;
  },

  click_viewBookBtn: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.viewBookBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --viewBookBtn clicked");
      res = await require('./viewBook.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --viewBookBtn NOT clicked", "error")
    return res;
  },

  click_bookCover: async function (bookTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.bookCover);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --bookCover clicked");
      res = await require('./viewBook.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --bookCover NOT clicked", "error")
    return res;
  },

  click_bookMenu_viewClassOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookMenu_viewClassOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookMenu_viewClassOption is clicked");
      res = await require('./classDrawer.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "bookMenu_viewClassOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_createClassOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookMenu_createClassOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookMenu_createClassOption is clicked");
      res = await require('./createClass.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "bookMenu_createClassOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_removeOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookMenu_removeOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookMenu_removeOption is clicked");
      res = await this.getData_removeBookDialog();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "bookMenu_removeOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_openFlipbookOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.bookMenu_openFlipbookOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " bookMenu_openFlipbookOption is clicked");
      res = await require('./flipbook.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "bookMenu_openFlipbookOption is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBook_cancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeBook_cancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeBook_cancelBtn is clicked");
      res = await action.waitForDisplayed(this.removeBook_cancelBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeBook_cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBook_removeBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeBook_removeBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeBook_removeBtn is clicked");
      res = await action.waitForDisplayed(this.removeBook_removeBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeBook_removeBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_createPlaylist_cancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.createPlaylist_cancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " createPlaylist_cancelBtn is clicked");
      res = await action.waitForDisplayed(this.createPlaylist_cancelBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "createPlaylist_cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_createPlaylist_createBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.createPlaylist_createBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " createPlaylist_createBtn is clicked");
      res = await this.getData_playlist();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "createPlaylist_createBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_viewAllBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.viewAllBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " viewAllBtn is clicked");
      res = await require('./browse.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "viewAllBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_resourceTitle: async function (resourceTitleName) {
    await logger.logInto(await stackTrace.get());
    var i, res;
    var resourceTitle = await action.findElements(this.resourceTitle);
    for (i = 0; i < resourceTitle.length; i++) {
      if (((await action.getText(resourceTitle[i]))) == resourceTitleName) {
        res = await action.click(resourceTitle[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --resourceTitle clicked");
      res = await require('./browse.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --resourceTitle NOT clicked", "error")
    return res;
  },

  click_recentlyViewed_activities: async function (recentlyViewed_activitiesName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.recentlyViewed_activities);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(list[i]))) == recentlyViewed_activitiesName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --recentlyViewed_activities clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --recentlyViewed_activities NOT clicked", "error")
    return res;
  },

  set_createPlaylist_input: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.createPlaylist_input, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in createPlaylist_input");
    } else {
      await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in createPlaylist_input", 'error');
    }
    return res;
  },

  click_recentMaterialsBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.recentMaterialsBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " recentMaterialsBtn is clicked");
      res = await require('./library.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "recentMaterialsBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_addNewMaterialBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addNewMaterialBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addNewMaterialBtn is clicked");
      res = await this.getData_addNewMaterialMenu();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "addNewMaterialBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_viewAllMaterialBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.viewAllMaterialBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " viewAllMaterialBtn is clicked");
      res = await require('./myMaterials.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "viewAllMaterialBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_blankQuizOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.blankQuizOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " blankQuizOption is clicked");
      res = await require('./libraryEditor.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "blankQuizOption is NOT clicked", 'error');
    }
    return res;
  },

  click_materialTitleBtn: async function (materialTitleBtnName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.materialTitleBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.materialTitleBtn + i + "]"))) == materialTitleBtnName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --materialTitleBtn clicked");
    }
    else
      await logger.logInto(await stackTrace.get(), " --materialTitleBtn NOT clicked", "error")
    return res;
  },
  
  click_materialOptionsBtn: async function (materialTitleBtnName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.materialOptionsBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.materialTitleBtn + i + "]"))) == materialTitleBtnName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --materialOptionsBtn clicked");
      res = await this.getData_materialMenu();
    }
    else
      await logger.logInto(await stackTrace.get(), " --materialOptionsBtn NOT clicked", "error")
    return res;
  },

  click_addToClassBtn: async function (materialTitleBtnName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.addToClassBtn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.materialTitleBtn + i + "]"))) == materialTitleBtnName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --addToClassBtn clicked");
      res = await this.getData_addToClassDialog();
    }
    else
      await logger.logInto(await stackTrace.get(), " --addToClassBtn NOT clicked", "error")
    return res;
  },

  click_previewMaterialOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.previewMaterialOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " previewMaterialOption is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "previewMaterialOption is NOT clicked", 'error');
    }
    return res;
  },

  click_editMaterialOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.editMaterialOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " editMaterialOption is clicked");
      res = await this.getData_editMaterialDialog();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "editMaterialOption is NOT clicked", 'error');
    }
    return res;
  },

  click_duplicateMaterialOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.duplicateMaterialOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " duplicateMaterialOption is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "duplicateMaterialOption is NOT clicked", 'error');
    }
    return res;
  },

  click_deleteMaterialOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteMaterialOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deleteMaterialOption is clicked");
      res = await this.getData_deleteMaterialDialog();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "deleteMaterialOption is NOT clicked", 'error');
    }
    return res;
  },

  click_deleteMaterialDialogCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteMaterialDialogCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deleteMaterialDialogCancelBtn is clicked");
      res = await action.waitForDisplayed(this.deleteMaterialDialogCancelBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "deleteMaterialDialogCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_deleteMaterialDialogDeleteBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deleteMaterialDialogDeleteBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deleteMaterialDialogDeleteBtn is clicked");
      res = await action.waitForDisplayed(this.deleteMaterialDialogDeleteBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "deleteMaterialDialogDeleteBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_editMaterialDialogEditBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.editMaterialDialogEditBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " editMaterialDialogEditBtn is clicked");
      res = await require('./libraryEditor.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "editMaterialDialogEditBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_editMaterialDialogCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.editMaterialDialogCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " editMaterialDialogCancelBtn is clicked");
      res = await action.waitForDisplayed(this.deleteMaterialDialogCancelBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "editMaterialDialogCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_addToClassMenuCloseBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addToClassMenuCloseBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addToClassMenuCloseBtn is clicked");
      res = await action.waitForDisplayed(this.addToClassMenuCloseBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "addToClassMenuCloseBtn is NOT clicked", 'error');
    }
    return res;
  },
  
}

