"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile =  jsonParserUtil.jsonParser(selectorDir)
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
  addNew_btn:selectorFile.css.ComproEngage.dashboard.addNew_btn,
  rightPanelOpen_btn:selectorFile.css.ComproEngage.dashboard.rightPanelOpen_btn,
  rightPanelClose_btn:selectorFile.css.ComproEngage.dashboard.rightPanelClose_btn,
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
    var obj;
    await action.waitForDisplayed(this.bookMenu_viewClassOption)
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
          resourceTitle: ((await action.getElementCount(resourceTitle[i])) > 0) ? await action.getText(resourceTitle[i]) : null,
          resourceSubtitle: ((await action.getElementCount(resourceSubtitle[i])) > 0) ? await action.getText(resourceSubtitle[i]) : null,
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
      res =  await require('./viewBook.page').isInitialized();
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
      res =await require('./viewBook.page').isInitialized();
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
      res =await require('./classDrawer.page').isInitialized();
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
      res =await require('./createClass.page').isInitialized();
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
      res =await require('./flipbook.page').isInitialized();
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
      res = require('./browse.page').isInitialized();
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
  clickAddNew_btn:async function () {
    logger.logInto(stackTrace.get());
    var res;
    res = await action.click(this.addNew_btn);
    if (true == res) {
      await action.waitForDisplayed(this.createPlaylistBtn)
      await logger.logInto(stackTrace.get(), " AddNew_btn is clicked");
      res = await this.getData_dashboardPage();
    }
    else {
    await  logger.logInto(stackTrace.get(), res + "AddNew_btn is NOT clicked", 'error');
    }
    return res;
  },
  clickRightPanelOpen_btn:async function () {
    logger.logInto(stackTrace.get());
    var res;
    res =await action.click(this.rightPanelOpen_btn);
    if (true == res) {
   await   logger.logInto(stackTrace.get(), " expand_Btn is clicked");
    }
    else {
   await   logger.logInto(stackTrace.get(), res + "expand_Btn is NOT clicked", 'error');
    }
    return res;
  },
  clickRightPanelClose_btn:async function () {
    logger.logInto(stackTrace.get());
    var res;
    await action.waitForDisplayed(this.rightPanelClose_btn)
    res = await action.click(this.rightPanelClose_btn);
    if (true == res) {
    await  logger.logInto(stackTrace.get(), " Close_btn is clicked");
      res = await this.isInitialized();
    }
    else {
     await logger.logInto(stackTrace.get(), res + "Close_btn is NOT clicked", 'error');
    }
    return res;
  },

}

