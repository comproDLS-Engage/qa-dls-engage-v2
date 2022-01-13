"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

  playlistPageTitle: selectorFile.css.ComproEngage.playlist.playlistPageTitle,
  playlistPageSubtitle: selectorFile.css.ComproEngage.playlist.playlistPageSubtitle,
  playlistResourceCount: selectorFile.css.ComproEngage.playlist.playlistResourceCount,
  playlistCreatedOn: selectorFile.css.ComproEngage.playlist.playlistCreatedOn,
  playlistOptionsBtn: selectorFile.css.ComproEngage.playlist.playlistOptionsBtn,
  playlistShareBtn: selectorFile.css.ComproEngage.playlist.playlistShareBtn,
  browseAllResourcesBtn: selectorFile.css.ComproEngage.playlist.browseAllResourcesBtn,
  noPlaylistImage: selectorFile.css.ComproEngage.playlist.noPlaylistImage,
  noPlaylistTitle: selectorFile.css.ComproEngage.playlist.noPlaylistTitle,
  noPlaylistSubtitle: selectorFile.css.ComproEngage.playlist.noPlaylistSubtitle,
  itemIndex_Header: selectorFile.css.ComproEngage.playlist.itemIndex_Header,
  itemName_Header: selectorFile.css.ComproEngage.playlist.itemName_Header,
  itemType_Header: selectorFile.css.ComproEngage.playlist.itemType_Header,
  itemTag_Header: selectorFile.css.ComproEngage.playlist.itemTag_Header,
  itemIndex: selectorFile.css.ComproEngage.playlist.itemIndex,
  itemName: selectorFile.css.ComproEngage.playlist.itemName,
  itemType: selectorFile.css.ComproEngage.playlist.itemType,
  itemTag: selectorFile.css.ComproEngage.playlist.itemTag,
  itemMoreOptions: selectorFile.css.ComproEngage.playlist.itemMoreOptions,
  playlistFooterTitle: selectorFile.css.ComproEngage.playlist.playlistFooterTitle,
  playlistFooterSubtitle: selectorFile.css.ComproEngage.playlist.playlistFooterSubtitle,
  playlistBrowseResourcesBtn: selectorFile.css.ComproEngage.playlist.playlistBrowseResourcesBtn,
  playlistReorderOption: selectorFile.css.ComproEngage.playlist.playlistReorderOption,
  playlistEditOption: selectorFile.css.ComproEngage.playlist.playlistEditOption,
  playlistDeleteOption: selectorFile.css.ComproEngage.playlist.playlistDeleteOption,
  playlistNameLabel: selectorFile.css.ComproEngage.playlist.playlistNameLabel,
  playlistNameInput: selectorFile.css.ComproEngage.playlist.playlistNameInput,
  editPlaylistCancelBtn: selectorFile.css.ComproEngage.playlist.editPlaylistCancelBtn,
  editPlaylistSaveBtn: selectorFile.css.ComproEngage.playlist.editPlaylistSaveBtn,
  deletePlaylistTitle: selectorFile.css.ComproEngage.playlist.deletePlaylistTitle,
  deletePlaylistSubtitle: selectorFile.css.ComproEngage.playlist.deletePlaylistSubtitle,
  deletePlaylistCancelBtn: selectorFile.css.ComproEngage.playlist.deletePlaylistCancelBtn,
  deletePlaylistDeleteBtn: selectorFile.css.ComproEngage.playlist.deletePlaylistDeleteBtn,
  removeResourceTitle: selectorFile.css.ComproEngage.playlist.removeResourceTitle,
  removeResourceSubtitle: selectorFile.css.ComproEngage.playlist.removeResourceSubtitle,
  removeResourceCancelBtn: selectorFile.css.ComproEngage.playlist.removeResourceCancelBtn,
  removeResourceRemoveBtn: selectorFile.css.ComproEngage.playlist.removeResourceRemoveBtn,
  viewOptionResourceItem: selectorFile.css.ComproEngage.playlist.viewOptionResourceItem,
  shareOptionResourceItem: selectorFile.css.ComproEngage.playlist.shareOptionResourceItem,
  removeOptionResourceItem: selectorFile.css.ComproEngage.playlist.removeOptionResourceItem,

  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.playlistPageTitle),
      appShellPage: appShellPage.isInitialized()
    };
    return res;
  },

  getData_playlistPage: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      playlistPageTitle: (action.getElementCount(this.playlistPageTitle) > 0) ? action.getText(this.playlistPageTitle) : null,
      playlistPageSubtitle: (action.getElementCount(this.playlistPageSubtitle) > 0) ? action.getText(this.playlistPageSubtitle) : null,
      playlistResourceCount: (action.getElementCount(this.playlistResourceCount) > 0) ? action.getText(this.playlistResourceCount) : null,
      playlistCreatedOn: (action.getElementCount(this.playlistCreatedOn) > 0) ? action.getText(this.playlistCreatedOn) : null,
      playlistOptionsBtn: (action.getElementCount(this.playlistOptionsBtn) > 0) ? action.getText(this.playlistOptionsBtn) : null,
      playlistShareBtn: (action.getElementCount(this.playlistShareBtn) > 0) ? action.getText(this.playlistShareBtn) : null,
      browseAllResourcesBtn: (action.getElementCount(this.browseAllResourcesBtn) > 0) ? action.getText(this.browseAllResourcesBtn) : null,
      noPlaylistImage: (action.getElementCount(this.noPlaylistImage) > 0) ? action.waitForDisplayed(this.noPlaylistImage) : false,
      noPlaylistTitle: (action.getElementCount(this.noPlaylistTitle) > 0) ? action.getText(this.noPlaylistTitle) : null,
      noPlaylistSubtitle: (action.getElementCount(this.noPlaylistSubtitle) > 0) ? action.getText(this.noPlaylistSubtitle) : null,
      itemIndex_Header: (action.getElementCount(this.itemIndex_Header) > 0) ? action.getText(this.itemIndex_Header) : null,
      itemName_Header: (action.getElementCount(this.itemName_Header) > 0) ? action.getText(this.itemName_Header) : null,
      itemType_Header: (action.getElementCount(this.itemType_Header) > 0) ? action.getText(this.itemType_Header) : null,
      itemTag_Header: (action.getElementCount(this.itemTag_Header) > 0) ? action.getText(this.itemTag_Header) : null,
      playlistFooterTitle: (action.getElementCount(this.playlistFooterTitle) > 0) ? action.getText(this.playlistFooterTitle) : null,
      playlistFooterSubtitle: (action.getElementCount(this.playlistFooterSubtitle) > 0) ? action.getText(this.playlistFooterSubtitle) : null,
      playlistBrowseResourcesBtn: (action.getElementCount(this.playlistBrowseResourcesBtn) > 0) ? action.getText(this.playlistBrowseResourcesBtn) : null,
    }
    return obj;
  },

  getData_resourceList: function (itemIndexName) {
    logger.logInto(stackTrace.get());
    var obj = [];
    action.waitForDisplayed(this.itemIndex);
    var list = action.findElements(this.itemIndex);
    if (itemIndexName) {
      for (var i = 0; i < list.length; i++) {
        if (action.getText(this.itemIndex + i) == itemIndexName) {
          obj[0] = {
            itemIndex: (action.getElementCount(this.itemIndex + i + "]") > 0) ? action.getText(this.itemIndex + i + "]") : null,
            itemName: (action.getElementCount(this.itemName + i + "]") > 0) ? action.getText(this.itemName + i + "]") : null,
            itemType: (action.getElementCount(this.itemType + i + "]") > 0) ? action.getText(this.itemType + i + "]") : null,
            itemTag: (action.getElementCount(this.itemTag + i + "]") > 0) ? action.getText(this.itemTag + i + "]") : null,
            itemMoreOptions: (action.getElementCount(this.itemMoreOptions + i + "]") > 0) ? action.getText(this.itemMoreOptions + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          itemIndex: (action.getElementCount(this.itemIndex + i + "]") > 0) ? action.getText(this.itemIndex + i + "]") : null,
          itemName: (action.getElementCount(this.itemName + i + "]") > 0) ? action.getText(this.itemName + i + "]") : null,
          itemType: (action.getElementCount(this.itemType + i + "]") > 0) ? action.getText(this.itemType + i + "]") : null,
          itemTag: (action.getElementCount(this.itemTag + i + "]") > 0) ? action.getText(this.itemTag + i + "]") : null,
          itemMoreOptions: (action.getElementCount(this.itemMoreOptions + i + "]") > 0) ? action.getText(this.itemMoreOptions + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_playlistOptionList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      playlistReorderOption: (action.getElementCount(this.playlistReorderOption) > 0) ? action.getText(this.playlistReorderOption) : null,
      playlistEditOption: (action.getElementCount(this.playlistEditOption) > 0) ? action.getText(this.playlistEditOption) : null,
      playlistDeleteOption: (action.getElementCount(this.playlistDeleteOption) > 0) ? action.getText(this.playlistDeleteOption) : null,
    }
    return obj;
  },

  getData_editPlaylistPopup: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      playlistNameLabel: (action.getElementCount(this.playlistNameLabel) > 0) ? action.getText(this.playlistNameLabel) : null,
      playlistNameInput: (action.getElementCount(this.playlistNameInput) > 0) ? action.getAttribute(this.playlistNameInput, "value") : null,
      editPlaylistCancelBtn: (action.getElementCount(this.editPlaylistCancelBtn) > 0) ? action.getText(this.editPlaylistCancelBtn) : null,
      editPlaylistSaveBtn: (action.getElementCount(this.editPlaylistSaveBtn) > 0) ? action.getText(this.editPlaylistSaveBtn) : null,
    }
    return obj;
  },

  getData_deletePlaylistPopup: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      deletePlaylistTitle: (action.getElementCount(this.deletePlaylistTitle) > 0) ? action.getText(this.deletePlaylistTitle) : null,
      deletePlaylistSubtitle: (action.getElementCount(this.deletePlaylistSubtitle) > 0) ? action.getText(this.deletePlaylistSubtitle) : null,
      deletePlaylistCancelBtn: (action.getElementCount(this.deletePlaylistCancelBtn) > 0) ? action.getText(this.deletePlaylistCancelBtn) : null,
      deletePlaylistDeleteBtn: (action.getElementCount(this.deletePlaylistDeleteBtn) > 0) ? action.getText(this.deletePlaylistDeleteBtn) : null,
    }
    return obj;
  },

  getData_removeResourcePopup: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      removeResourceTitle: (action.getElementCount(this.removeResourceTitle) > 0) ? action.getText(this.removeResourceTitle) : null,
      removeResourceSubtitle: (action.getElementCount(this.removeResourceSubtitle) > 0) ? action.getText(this.removeResourceSubtitle) : null,
      removeResourceCancelBtn: (action.getElementCount(this.removeResourceCancelBtn) > 0) ? action.getText(this.removeResourceCancelBtn) : null,
      removeResourceRemoveBtn: (action.getElementCount(this.removeResourceRemoveBtn) > 0) ? action.getText(this.removeResourceRemoveBtn) : null,
    }
    return obj;
  },

  getData_moreOptionsResourcesList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      viewOptionResourceItem: (action.getElementCount(this.viewOptionResourceItem) > 0) ? action.getText(this.viewOptionResourceItem) : null,
      shareOptionResourceItem: (action.getElementCount(this.shareOptionResourceItem) > 0) ? action.getText(this.shareOptionResourceItem) : null,
      removeOptionResourceItem: (action.getElementCount(this.removeOptionResourceItem) > 0) ? action.getText(this.removeOptionResourceItem) : null,
    }
    return obj;
  },


  click_playlistOptionsBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistOptionsBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistOptionsBtn is clicked");
      res = this.getData_playlistOptionList();
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistOptionsBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistShareBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistShareBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistShareBtn is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistShareBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_browseAllResourcesBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.browseAllResourcesBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " browseAllResourcesBtn is clicked");
      res = require('./browse.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "browseAllResourcesBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_itemMoreOptions: function (itemNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.itemMoreOptions);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.itemName + i + "]")) == itemNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --itemMoreOptions clicked");
      res = this.getData_moreOptionsResourcesList();
    }
    else
      logger.logInto(stackTrace.get(), " --itemMoreOptions NOT clicked", "error")
    return res;
  },

  click_playlistBrowseResourcesBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistBrowseResourcesBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistBrowseResourcesBtn is clicked");
      res = require('./browse.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistBrowseResourcesBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistReorderOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistReorderOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistReorderOption is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistReorderOption is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistEditOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistEditOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistEditOption is clicked");
      res = this.getData_editPlaylistPopup();
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistEditOption is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistDeleteOption: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.playlistDeleteOption);
    if (true == res) {
      logger.logInto(stackTrace.get(), " playlistDeleteOption is clicked");
      res = this.getData_deletePlaylistPopup();
    }
    else {
      logger.logInto(stackTrace.get(), res + "playlistDeleteOption is NOT clicked", 'error');
    }
    return res;
  },

  click_editPlaylistCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.editPlaylistCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " editPlaylistCancelBtn is clicked");
      res = action.getText(this.playlistPageTitle);
    }
    else {
      logger.logInto(stackTrace.get(), res + "editPlaylistCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_editPlaylistSaveBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.editPlaylistSaveBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " editPlaylistSaveBtn is clicked");
      res = action.getText(this.playlistPageTitle);
    }
    else {
      logger.logInto(stackTrace.get(), res + "editPlaylistSaveBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_deletePlaylistCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.deletePlaylistCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " deletePlaylistCancelBtn is clicked");
      res = action.waitForDisplayed(this.deletePlaylistCancelBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + "deletePlaylistCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_deletePlaylistDeleteBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.deletePlaylistDeleteBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " deletePlaylistDeleteBtn is clicked");
      res = require('./dashboard.page').isInitialized();
    }
    else {
      logger.logInto(stackTrace.get(), res + "deletePlaylistDeleteBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeResourceCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeResourceCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeResourceCancelBtn is clicked");
      res = this.getData_resourceList();
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeResourceCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeResourceRemoveBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeResourceRemoveBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeResourceRemoveBtn is clicked");
      res = this.getData_resourceList();
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeResourceRemoveBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_viewOptionResourceItem: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.viewOptionResourceItem);
    if (true == res) {
      logger.logInto(stackTrace.get(), " viewOptionResourceItem is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "viewOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  click_shareOptionResourceItem: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.shareOptionResourceItem);
    if (true == res) {
      logger.logInto(stackTrace.get(), " shareOptionResourceItem is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + "shareOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  click_removeOptionResourceItem: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.removeOptionResourceItem);
    if (true == res) {
      logger.logInto(stackTrace.get(), " removeOptionResourceItem is clicked");
      res = this.getData_removeResourcePopup();
    }
    else {
      logger.logInto(stackTrace.get(), res + "removeOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  set_playlistNameInput: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.playlistNameInput, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in playlistNameInput");
    } else {
      logger.logInto(stackTrace.get(), res + "Value is NOT entered in playlistNameInput", 'error');
    }
    return res;
  },

}

