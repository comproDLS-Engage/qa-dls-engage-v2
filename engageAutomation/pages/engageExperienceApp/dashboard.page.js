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

  getData_dashboardPage: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
      createPlaylistBtn: (action.getElementCount(this.createPlaylistBtn) > 0) ? action.getText(this.createPlaylistBtn) : null,
      addBookBtn: (action.getElementCount(this.addBookBtn) > 0) ? action.getText(this.addBookBtn) : null,
      cardSliderTitle: (action.getElementCount(this.cardSliderTitle) > 0) ? action.getText(this.cardSliderTitle) : null,
      cardSliderSubtitle: (action.getElementCount(this.cardSliderSubtitle) > 0) ? action.getText(this.cardSliderSubtitle) : null,
      cardSliderLeftBtn: (action.getElementCount(this.cardSliderLeftBtn) > 0) ? action.getText(this.cardSliderLeftBtn) : null,
      cardSliderRightBtn: (action.getElementCount(this.cardSliderRightBtn) > 0) ? action.getText(this.cardSliderRightBtn) : null,
      myBooksHeading: (action.getElementCount(this.myBooksHeading) > 0) ? action.getText(this.myBooksHeading) : null,
      noBooksTitle: (action.getElementCount(this.noBooksTitle) > 0) ? action.getText(this.noBooksTitle) : null,
      noBooksSubtitle: (action.getElementCount(this.noBooksSubtitle) > 0) ? action.getText(this.noBooksSubtitle) : null,
      noBooks_addBookBtn: (action.getElementCount(this.noBooks_addBookBtn) > 0) ? action.getText(this.noBooks_addBookBtn) : null,
      myPlaylistsHeading: (action.getElementCount(this.myPlaylistsHeading) > 0) ? action.getText(this.myPlaylistsHeading) : null,
      noPlaylistsTitle: (action.getElementCount(this.noPlaylistsTitle) > 0) ? action.getText(this.noPlaylistsTitle) : null,
      noPlaylistsSubTitle: (action.getElementCount(this.noPlaylistsSubTitle) > 0) ? action.getText(this.noPlaylistsSubTitle) : null,
      noPlaylists_createBtn: (action.getElementCount(this.noPlaylists_createBtn) > 0) ? action.getText(this.noPlaylists_createBtn) : null,
      exploreHeading: (action.getElementCount(this.exploreHeading) > 0) ? action.getText(this.exploreHeading) : null,
      viewAllBtn: (action.getElementCount(this.viewAllBtn) > 0) ? action.getText(this.viewAllBtn) : null,
      recentlyViewedHeading: (action.getElementCount(this.recentlyViewedHeading) > 0) ? action.getText(this.recentlyViewedHeading) : null,
    }
    return obj;
  },

  getData_actionCards: function (actionCardTitlesName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.actionCardTitles);
    var list = action.findElements(this.actionCardTitles);
    if (actionCardTitlesName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.actionCardTitles + i) == actionCardTitlesName) {
          obj[0] = {
            actionCardTitles: (action.getElementCount(this.actionCardTitles + i + "]") > 0) ? action.getText(this.actionCardTitles + i + "]") : null,
            actionCardSubtitles: (action.getElementCount(this.actionCardSubtitles + i + "]") > 0) ? action.getText(this.actionCardSubtitles + i + "]") : null,
            actionCardBtns: (action.getElementCount(this.actionCardBtns + i + "]") > 0) ? action.getText(this.actionCardBtns + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          actionCardTitles: (action.getElementCount(this.actionCardTitles + i + "]") > 0) ? action.getText(this.actionCardTitles + i + "]") : null,
          actionCardSubtitles: (action.getElementCount(this.actionCardSubtitles + i + "]") > 0) ? action.getText(this.actionCardSubtitles + i + "]") : null,
          actionCardBtns: (action.getElementCount(this.actionCardBtns + i + "]") > 0) ? action.getText(this.actionCardBtns + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_playlist: function (playlistTitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.playlistTitle);
    var list = action.findElements(this.playlistTitle);
    if (playlistTitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.playlistTitle + i) == playlistTitleName) {
          obj[0] = {
            playlistTitle: (action.getElementCount(this.playlistTitle + i + "]") > 0) ? action.getText(this.playlistTitle + i + "]") : null,
            playlistSubtitle: (action.getElementCount(this.playlistSubtitle + i + "]") > 0) ? action.getText(this.playlistSubtitle + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          playlistTitle: (action.getElementCount(this.playlistTitle + i + "]") > 0) ? action.getText(this.playlistTitle + i + "]") : null,
          playlistSubtitle: (action.getElementCount(this.playlistSubtitle + i + "]") > 0) ? action.getText(this.playlistSubtitle + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_books: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.bookTitle);
    var list = action.findElements(this.bookTitle);
    if (bookTitleName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.bookTitle + i) == bookTitleName) {
          obj[0] = {
            bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
            bookSubtitle: (action.getElementCount(this.bookSubtitle + i + "]") > 0) ? action.getText(this.bookSubtitle + i + "]") : null,
            bookMenuBtn: (action.getElementCount(this.bookMenuBtn + i + "]") > 0) ? action.getText(this.bookMenuBtn + i + "]") : null,
            viewBookBtn: (action.getElementCount(this.viewBookBtn + i + "]") > 0) ? action.getText(this.viewBookBtn + i + "]") : null,
            bookCover: (action.getElementCount(this.bookCover + i + "]") > 0) ? action.getText(this.bookCover + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
          bookSubtitle: (action.getElementCount(this.bookSubtitle + i + "]") > 0) ? action.getText(this.bookSubtitle + i + "]") : null,
          bookMenuBtn: (action.getElementCount(this.bookMenuBtn + i + "]") > 0) ? action.getText(this.bookMenuBtn + i + "]") : null,
          viewBookBtn: (action.getElementCount(this.viewBookBtn + i + "]") > 0) ? action.getText(this.viewBookBtn + i + "]") : null,
          bookCover: (action.getElementCount(this.bookCover + i + "]") > 0) ? action.getText(this.bookCover + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_bookMenu: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      bookMenu_viewClassOption: (action.getElementCount(this.bookMenu_viewClassOption) > 0) ? action.getText(this.bookMenu_viewClassOption) : null,
      bookMenu_createClassOption: (action.getElementCount(this.bookMenu_createClassOption) > 0) ? action.getText(this.bookMenu_createClassOption) : null,
      bookMenu_removeOption: (action.getElementCount(this.bookMenu_removeOption) > 0) ? action.getText(this.bookMenu_removeOption) : null,
      bookMenu_openFlipbookOption: (action.getElementCount(this.bookMenu_openFlipbookOption) > 0) ? action.getText(this.bookMenu_openFlipbookOption) : null,
    }
    return obj;
  },

  getData_removeBookDialog: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      removeBook_title: (action.getElementCount(this.removeBook_title) > 0) ? action.getText(this.removeBook_title) : null,
      removeBook_subTitle: (action.getElementCount(this.removeBook_subTitle) > 0) ? action.getText(this.removeBook_subTitle) : null,
      removeBook_cancelBtn: (action.getElementCount(this.removeBook_cancelBtn) > 0) ? action.getText(this.removeBook_cancelBtn) : null,
      removeBook_removeBtn: (action.getElementCount(this.removeBook_removeBtn) > 0) ? action.getText(this.removeBook_removeBtn) : null,
    }
    return obj;
  },

  getData_createPlaylistDialog: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      createPlaylist_label: (action.getElementCount(this.createPlaylist_label) > 0) ? action.getText(this.createPlaylist_label) : null,
      createPlaylist_input: (action.getElementCount(this.createPlaylist_input) > 0) ? action.getText(this.createPlaylist_input) : null,
      createPlaylist_cancelBtn: (action.getElementCount(this.createPlaylist_cancelBtn) > 0) ? action.getText(this.createPlaylist_cancelBtn) : null,
      createPlaylist_createBtn: (action.getElementCount(this.createPlaylist_createBtn) > 0) ? action.getText(this.createPlaylist_createBtn) : null,
    }
    return obj;
  },

  getData_resources: function (resourceTitleName) {
    logger.logInto(stackTrace.get());
    var obj = [], i, arr = [];
    var resourceTitle = action.findElements(this.resourceTitle)
    var resourceSubtitle = action.findElements(this.resourceSubtitle)
    if (resourceTitleName) {
      for (var i = 0; i <= resourceTitle.length; i++) {
        if (action.getText(resourceTitle[i]) == resourceTitleName) {
          obj[0] = {
            resourceTitle: (action.getElementCount(resourceTitle[i]) > 0) ? action.getText(resourceTitle[i]) : null,
            resourceSubtitle: (action.getElementCount(resourceSubtitle[i]) > 0) ? action.getText(resourceSubtitle[i]) : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i <= resourceTitle.length; i++) {
        obj[i] = {
          resourceTitle: (action.getElementCount(resourceTitle[i]) > 0) ? action.getText(resourceTitle[i]) : null,
          resourceSubtitle: (action.getElementCount(resourceSubtitle[i]) > 0) ? action.getText(resourceSubtitle[i]) : null,
        }
      }
    }
    return obj;
  },

  getData_recentlyViewedList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      recentlyViewed_activities: this.recentlyViewed_activities_Data(),
    }
    return obj;
  },

  recentlyViewed_activities_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var recentlyViewed_activities_Arr = [];
    list = action.findElements(this.recentlyViewed_activities);
    for (i = 0; i < list.length; i++) {
      recentlyViewed_activities_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), recentlyViewed_activities_Arr);
    return recentlyViewed_activities_Arr;
  },

  click_createPlaylistBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.createPlaylistBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " createPlaylistBtn is clicked");
      res = this.getData_createPlaylistDialog();
    }
    else {
      logger.logInto(stackTrace.get(), res + "createPlaylistBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_addBookBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.addBookBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " addBookBtn is clicked");
      res = require('./browse.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "addBookBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cardSliderLeftBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.cardSliderLeftBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " cardSliderLeftBtn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "cardSliderLeftBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_cardSliderRightBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.cardSliderRightBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " cardSliderRightBtn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "cardSliderRightBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_actionCardBtns: function (actionCardTitlesName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.actionCardBtns);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.actionCardTitles + i + "]")) == actionCardTitlesName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --actionCardBtns clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --actionCardBtns NOT clicked", "error")
    return res;
  },

  click_noBooks_addBookBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.noBooks_addBookBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " noBooks_addBookBtn is clicked");
      res = require('./addBook.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "noBooks_addBookBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_noPlaylists_createBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.noPlaylists_createBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " noPlaylists_createBtn is clicked");
      res = this.getData_createPlaylistDialog();
    }
    else {
      logger.logInto(stackTrace.get(), res + "noPlaylists_createBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistTitle: function (playlistTitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.playlistTitle);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.playlistTitle + i + "]")) == playlistTitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --playlistTitle clicked");
      res = require('./playlist.page').isInitialized();
    }
    else
      logger.logInto(stackTrace.get(), " --playlistTitle NOT clicked", "error")
    return res;
  },

  click_bookMenuBtn: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.bookMenuBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --bookMenuBtn clicked");
      action.waitForDisplayed(this.bookMenu_viewClassOption);
      res = this.getData_bookMenu();
    }
    else
      logger.logInto(stackTrace.get(), " --bookMenuBtn NOT clicked", "error")
    return res;
  },

  click_viewBookBtn: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.viewBookBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --viewBookBtn clicked");
      res = require('./viewBook.page').isInitialized();
    }
    else
      logger.logInto(stackTrace.get(), " --viewBookBtn NOT clicked", "error")
    return res;
  },

  click_bookCover: function (bookTitleName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.bookCover);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --bookCover clicked");
      res = require('./viewBook.page').isInitialized();
    }
    else
      logger.logInto(stackTrace.get(), " --bookCover NOT clicked", "error")
    return res;
  },

  click_bookMenu_viewClassOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookMenu_viewClassOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookMenu_viewClassOption is clicked");
      res = require('./classDrawer.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "bookMenu_viewClassOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_createClassOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookMenu_createClassOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookMenu_createClassOption is clicked");
      res = require('./createClass.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "bookMenu_createClassOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_removeOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookMenu_removeOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookMenu_removeOption is clicked");
      res = this.getData_removeBookDialog();
    }
    else {
      logger.logInto(stackTrace.get(), res + "bookMenu_removeOption is NOT clicked", 'error');
    }
    return res;
  },

  click_bookMenu_openFlipbookOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookMenu_openFlipbookOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookMenu_openFlipbookOption is clicked");
      res = require('./flipbook.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "bookMenu_openFlipbookOption is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBook_cancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeBook_cancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeBook_cancelBtn is clicked");
      res = action.waitForDisplayed(this.removeBook_cancelBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeBook_cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeBook_removeBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeBook_removeBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeBook_removeBtn is clicked");
      res = action.waitForDisplayed(this.removeBook_removeBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeBook_removeBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_createPlaylist_cancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.createPlaylist_cancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " createPlaylist_cancelBtn is clicked");
      res = action.waitForDisplayed(this.createPlaylist_cancelBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + "createPlaylist_cancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_createPlaylist_createBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.createPlaylist_createBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " createPlaylist_createBtn is clicked");
      res = this.getData_playlist();
    }
    else {
      logger.logInto(stackTrace.get(), res + "createPlaylist_createBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_viewAllBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.viewAllBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " viewAllBtn is clicked");
      res = require('./browse.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "viewAllBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_resourceTitle: function (resourceTitleName) {
    logger.logInto(stackTrace.get());
    var i, res;
    var resourceTitle = action.findElements(this.resourceTitle);
    console.log(resourceTitleName)
    for (i = 0; i < resourceTitle.length; i++) {
      console.log(action.getText(resourceTitle[i]))
      if ((action.getText(resourceTitle[i])) == resourceTitleName) {
        res = action.click(resourceTitle[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --resourceTitle clicked");
      res = require('./browse.page').isInitialized();
    }
    else
      logger.logInto(stackTrace.get(), " --resourceTitle NOT clicked", "error")
    return res;
  },

  click_recentlyViewed_activities: function (recentlyViewed_activitiesName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.recentlyViewed_activities);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(list[i])) == recentlyViewed_activitiesName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --recentlyViewed_activities clicked");
    }
    else
      logger.logInto(stackTrace.get(), " --recentlyViewed_activities NOT clicked", "error")
    return res;
  },

  set_createPlaylist_input: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.createPlaylist_input, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in createPlaylist_input");
    } else {
      logger.logInto(stackTrace.get(), res + "Value is NOT entered in createPlaylist_input", 'error');
    }
    return res;
  },

}

