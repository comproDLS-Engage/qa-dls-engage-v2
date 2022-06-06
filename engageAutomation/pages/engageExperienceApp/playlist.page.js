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

  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.playlistPageTitle),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_playlistPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      playlistPageTitle: ((await action.getElementCount(this.playlistPageTitle)) > 0) ? await action.getText(this.playlistPageTitle) : null,
      playlistPageSubtitle: ((await action.getElementCount(this.playlistPageSubtitle)) > 0) ? await action.getText(this.playlistPageSubtitle) : null,
      playlistResourceCount: ((await action.getElementCount(this.playlistResourceCount)) > 0) ? await action.getText(this.playlistResourceCount) : null,
      playlistCreatedOn: ((await action.getElementCount(this.playlistCreatedOn)) > 0) ? await action.getText(this.playlistCreatedOn) : null,
      playlistOptionsBtn: ((await action.getElementCount(this.playlistOptionsBtn)) > 0) ? await action.getText(this.playlistOptionsBtn) : null,
      playlistShareBtn: ((await action.getElementCount(this.playlistShareBtn)) > 0) ? await action.getText(this.playlistShareBtn) : null,
      browseAllResourcesBtn: ((await action.getElementCount(this.browseAllResourcesBtn)) > 0) ? await action.getText(this.browseAllResourcesBtn) : null,
      noPlaylistImage: ((await action.getElementCount(this.noPlaylistImage)) > 0) ? await action.waitForDisplayed(this.noPlaylistImage) : false,
      noPlaylistTitle: ((await action.getElementCount(this.noPlaylistTitle)) > 0) ? await action.getText(this.noPlaylistTitle) : null,
      noPlaylistSubtitle: ((await action.getElementCount(this.noPlaylistSubtitle)) > 0) ? await action.getText(this.noPlaylistSubtitle) : null,
      itemIndex_Header: ((await action.getElementCount(this.itemIndex_Header)) > 0) ? await action.getText(this.itemIndex_Header) : null,
      itemName_Header: ((await action.getElementCount(this.itemName_Header)) > 0) ? await action.getText(this.itemName_Header) : null,
      itemType_Header: ((await action.getElementCount(this.itemType_Header)) > 0) ? await action.getText(this.itemType_Header) : null,
      itemTag_Header: ((await action.getElementCount(this.itemTag_Header)) > 0) ? await action.getText(this.itemTag_Header) : null,
      playlistFooterTitle: ((await action.getElementCount(this.playlistFooterTitle)) > 0) ? await action.getText(this.playlistFooterTitle) : null,
      playlistFooterSubtitle: ((await action.getElementCount(this.playlistFooterSubtitle)) > 0) ? await action.getText(this.playlistFooterSubtitle) : null,
      playlistBrowseResourcesBtn: ((await action.getElementCount(this.playlistBrowseResourcesBtn)) > 0) ? await action.getText(this.playlistBrowseResourcesBtn) : null,
    }
    return obj;
  },

  getData_resourceList: async function (itemIndexName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.itemIndex);
    var list = await action.findElements(this.itemIndex);
    if (itemIndexName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.itemIndex + i)) == itemIndexName) {
          obj[0] = {
            itemIndex: ((await action.getElementCount(this.itemIndex + i + "]")) > 0) ? await action.getText(this.itemIndex + i + "]") : null,
            itemName: ((await action.getElementCount(this.itemName + i + "]")) > 0) ? await action.getText(this.itemName + i + "]") : null,
            itemType: ((await action.getElementCount(this.itemType + i + "]")) > 0) ? await action.getText(this.itemType + i + "]") : null,
            itemTag: ((await action.getElementCount(this.itemTag + i + "]")) > 0) ? await action.getText(this.itemTag + i + "]") : null,
            itemMoreOptions: ((await action.getElementCount(this.itemMoreOptions + i + "]")) > 0) ? await action.getText(this.itemMoreOptions + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          itemIndex: ((await action.getElementCount(this.itemIndex + i + "]")) > 0) ? await action.getText(this.itemIndex + i + "]") : null,
          itemName: ((await action.getElementCount(this.itemName + i + "]")) > 0) ? await action.getText(this.itemName + i + "]") : null,
          itemType: ((await action.getElementCount(this.itemType + i + "]")) > 0) ? await action.getText(this.itemType + i + "]") : null,
          itemTag: ((await action.getElementCount(this.itemTag + i + "]")) > 0) ? await action.getText(this.itemTag + i + "]") : null,
          itemMoreOptions: ((await action.getElementCount(this.itemMoreOptions + i + "]")) > 0) ? await action.getText(this.itemMoreOptions + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_playlistOptionList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      playlistReorderOption: ((await action.getElementCount(this.playlistReorderOption)) > 0) ? await action.getText(this.playlistReorderOption) : null,
      playlistEditOption: ((await action.getElementCount(this.playlistEditOption)) > 0) ? await action.getText(this.playlistEditOption) : null,
      playlistDeleteOption: ((await action.getElementCount(this.playlistDeleteOption)) > 0) ? await action.getText(this.playlistDeleteOption) : null,
    }
    return obj;
  },

  getData_editPlaylistPopup: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      playlistNameLabel: ((await action.getElementCount(this.playlistNameLabel)) > 0) ? await action.getText(this.playlistNameLabel) : null,
      playlistNameInput: ((await action.getElementCount(this.playlistNameInput)) > 0) ? await action.getAttribute(this.playlistNameInput, "value") : null,
      editPlaylistCancelBtn: ((await action.getElementCount(this.editPlaylistCancelBtn)) > 0) ? await action.getText(this.editPlaylistCancelBtn) : null,
      editPlaylistSaveBtn: ((await action.getElementCount(this.editPlaylistSaveBtn)) > 0) ? await action.getText(this.editPlaylistSaveBtn) : null,
    }
    return obj;
  },

  getData_deletePlaylistPopup: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      deletePlaylistTitle: ((await action.getElementCount(this.deletePlaylistTitle)) > 0) ? await action.getText(this.deletePlaylistTitle) : null,
      deletePlaylistSubtitle: ((await action.getElementCount(this.deletePlaylistSubtitle)) > 0) ? await action.getText(this.deletePlaylistSubtitle) : null,
      deletePlaylistCancelBtn: ((await action.getElementCount(this.deletePlaylistCancelBtn)) > 0) ? await action.getText(this.deletePlaylistCancelBtn) : null,
      deletePlaylistDeleteBtn: ((await action.getElementCount(this.deletePlaylistDeleteBtn)) > 0) ? await action.getText(this.deletePlaylistDeleteBtn) : null,
    }
    return obj;
  },

  getData_removeResourcePopup: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      removeResourceTitle: ((await action.getElementCount(this.removeResourceTitle)) > 0) ? await action.getText(this.removeResourceTitle) : null,
      removeResourceSubtitle: ((await action.getElementCount(this.removeResourceSubtitle)) > 0) ? await action.getText(this.removeResourceSubtitle) : null,
      removeResourceCancelBtn: ((await action.getElementCount(this.removeResourceCancelBtn)) > 0) ? await action.getText(this.removeResourceCancelBtn) : null,
      removeResourceRemoveBtn: ((await action.getElementCount(this.removeResourceRemoveBtn)) > 0) ? await action.getText(this.removeResourceRemoveBtn) : null,
    }
    return obj;
  },

  getData_moreOptionsResourcesList: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      viewOptionResourceItem: ((await action.getElementCount(this.viewOptionResourceItem)) > 0) ? await action.getText(this.viewOptionResourceItem) : null,
      shareOptionResourceItem: ((await action.getElementCount(this.shareOptionResourceItem)) > 0) ? await action.getText(this.shareOptionResourceItem) : null,
      removeOptionResourceItem: ((await action.getElementCount(this.removeOptionResourceItem)) > 0) ? await action.getText(this.removeOptionResourceItem) : null,
    }
    return obj;
  },


  click_playlistOptionsBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistOptionsBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistOptionsBtn is clicked");
      res = await this.getData_playlistOptionList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistOptionsBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistShareBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistShareBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistShareBtn is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistShareBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_browseAllResourcesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.browseAllResourcesBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " browseAllResourcesBtn is clicked");
      res = await require('./browse.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "browseAllResourcesBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_itemMoreOptions: async function (itemNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.itemMoreOptions);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.itemName + i + "]"))) == itemNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --itemMoreOptions clicked");
      res = await this.getData_moreOptionsResourcesList();
    }
    else
      await logger.logInto(await stackTrace.get(), " --itemMoreOptions NOT clicked", "error")
    return res;
  },

  click_playlistBrowseResourcesBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistBrowseResourcesBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistBrowseResourcesBtn is clicked");
      res = await require('./browse.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistBrowseResourcesBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistReorderOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistReorderOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistReorderOption is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistReorderOption is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistEditOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistEditOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistEditOption is clicked");
      res = await this.getData_editPlaylistPopup();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistEditOption is NOT clicked", 'error');
    }
    return res;
  },

  click_playlistDeleteOption: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.playlistDeleteOption);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " playlistDeleteOption is clicked");
      res = await this.getData_deletePlaylistPopup();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "playlistDeleteOption is NOT clicked", 'error');
    }
    return res;
  },

  click_editPlaylistCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.editPlaylistCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " editPlaylistCancelBtn is clicked");
      res = await action.getText(this.playlistPageTitle);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "editPlaylistCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_editPlaylistSaveBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.editPlaylistSaveBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " editPlaylistSaveBtn is clicked");
      res = await action.getText(this.playlistPageTitle);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "editPlaylistSaveBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_deletePlaylistCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deletePlaylistCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deletePlaylistCancelBtn is clicked");
      res = await action.waitForDisplayed(this.deletePlaylistCancelBtn, undefined, true);
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "deletePlaylistCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_deletePlaylistDeleteBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.deletePlaylistDeleteBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " deletePlaylistDeleteBtn is clicked");
      res = await require('./dashboard.page').isInitialized();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "deletePlaylistDeleteBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeResourceCancelBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeResourceCancelBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeResourceCancelBtn is clicked");
      res = await this.getData_resourceList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeResourceCancelBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_removeResourceRemoveBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeResourceRemoveBtn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeResourceRemoveBtn is clicked");
      res = await this.getData_resourceList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeResourceRemoveBtn is NOT clicked", 'error');
    }
    return res;
  },

  click_viewOptionResourceItem: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.viewOptionResourceItem);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " viewOptionResourceItem is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "viewOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  click_shareOptionResourceItem: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.shareOptionResourceItem);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " shareOptionResourceItem is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "shareOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  click_removeOptionResourceItem: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.removeOptionResourceItem);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " removeOptionResourceItem is clicked");
      res = await this.getData_removeResourcePopup();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "removeOptionResourceItem is NOT clicked", 'error');
    }
    return res;
  },

  set_playlistNameInput: async function (value) {
    var res;
    await logger.logInto(await stackTrace.get());
    res = await action.setValue(this.playlistNameInput, value);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), "Value is entered in playlistNameInput");
    } else {
      await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in playlistNameInput", 'error');
    }
    return res;
  },

}

