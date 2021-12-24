"use strict";
var playlistPage = require('../../pages/engageExperienceApp/playlist.page');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page')
var sts;

module.exports = {

    //Validate the content of the playlist page
    ENG_PLAY_TC_1: function (testdata) {
        sts = playlistPage.getData_playlistPage();
        assertion.assertEqual(sts.playlistPageTitle, testdata.playlistPageTitle, "playlistPageTitle text mismatch");
        assertion.assertEqual(sts.playlistPageSubtitle, testdata.playlistPageSubtitle, "playlistPageSubtitle text mismatch");
        assertion.assertEqual(sts.playlistResourceCount, testdata.playlistResourceCount, "playlistResourceCount text mismatch");
        assertion.assertEqual(sts.playlistCreatedOn, testdata.playlistCreatedOn, "playlistCreatedOn text mismatch");
        assertion.assertEqual(sts.playlistOptionsBtn, testdata.playlistOptionsBtn, "playlistOptionsBtn text mismatch");
        assertion.assertEqual(sts.playlistShareBtn, testdata.playlistShareBtn, "playlistShareBtn status mismatch");
        assertion.assertEqual(sts.browseAllResourcesBtn, testdata.browseAllResourcesBtn, "browseAllResourcesBtn text mismatch");
        assertion.assertEqual(sts.noPlaylistImage, testdata.noPlaylistImage, "noPlaylistImage status mismatch");
        assertion.assertEqual(sts.noPlaylistTitle, testdata.noPlaylistTitle, "noPlaylistTitle text mismatch");
        assertion.assertEqual(sts.noBooksSubtitle, testdata.noBooks_subTitle, "no books subtitle text mismatch");
        assertion.assertEqual(sts.noPlaylistSubtitle, testdata.noPlaylistSubtitle, "add books text mismatch");
        assertion.assertEqual(sts.itemIndex_Header, testdata.itemIndex_Header, "itemIndex_Header text mismatch");
        assertion.assertEqual(sts.itemName_Header, testdata.itemName_Header, "itemName_Header text mismatch");
        assertion.assertEqual(sts.itemType_Header, testdata.itemType_Header, "itemType_Header text mismatch");
        assertion.assertEqual(sts.itemTag_Header, testdata.itemTag_Header, "itemTag_Header text mismatch");
        assertion.assertEqual(sts.playlistFooterTitle, testdata.playlistFooterTitle, "playlistFooterTitle text mismatch");
        assertion.assertEqual(sts.playlistFooterSubtitle, testdata.playlistFooterSubtitle, "playlistFooterSubtitle text mismatch");
    },

    //Validate that clicking on the three dots launches a dropdown list of options
    ENG_PLAY_TC_2: function (testdata) {
        sts = playlistPage.click_playlistOptionsBtn();
        assertion.assertEqual(sts.playlistReorderOption, testdata.playlistReorderOption, "playlistReorderOption text mismatch");
        assertion.assertEqual(sts.playlistEditOption, testdata.playlistEditOption, "playlistEditOption text mismatch");
        assertion.assertEqual(sts.playlistDeleteOption, testdata.playlistDeleteOption, "playlistDeleteOption text mismatch");
    },

    //Validate that clicking on 'Edit' button launches the Playlist pop up
    ENG_PLAY_TC_3: function (testdata) {
        sts = playlistPage.click_playlistEditOption(testdata);
        assertion.assertEqual(sts.playlistNameLabel, testdata.playlistNameLabel, "playlistNameLabel text mismatch");
        assertion.assertEqual(sts.playlistNameInput, testdata.playlistNameInput, "playlistNameInput text mismatch");
        assertion.assertEqual(sts.editPlaylistCancelBtn, testdata.editPlaylistCancelBtn, "editPlaylistCancelBtn text mismatch");
        assertion.assertEqual(sts.editPlaylistSaveBtn, testdata.editPlaylistSaveBtn, "editPlaylistSaveBtn text mismatch");
    },

    //Validate that clicking on 'Delete' button launches the Delete confirmation pop up
    ENG_PLAY_TC_4: function (testdata) {
        sts = playlistPage.click_playlistDeleteOption(testdata);
        assertion.assertEqual(sts.deletePlaylistTitle, testdata.deletePlaylistTitle, "deletePlaylistTitle text mismatch");
        assertion.assertEqual(sts.deletePlaylistSubtitle, testdata.deletePlaylistSubtitle, "deletePlaylistSubtitle text mismatch");
        assertion.assertEqual(sts.deletePlaylistCancelBtn, testdata.deletePlaylistCancelBtn, "deletePlaylistCancelBtn text mismatch");
        assertion.assertEqual(sts.deletePlaylistDeleteBtn, testdata.deletePlaylistDeleteBtn, "deletePlaylistDeleteBtn text mismatch");
    },

    //Validate that playlist name is updated on clicking 'Save' button
    ENG_PLAY_TC_5: function (testdata) {
        sts = playlistPage.set_playlistNameInput(testdata);
        assertion.assertEqual(sts, true);
        sts = playlistPage.click_editPlaylistSaveBtn();
        assertion.assertEqual(sts, testdata, "Playlist name mismatch");
    },

    //Validate that clicking 'Delete' button on pop up deletes the playlist
    ENG_PLAY_TC_7: function () {
        sts = playlistPage.click_deletePlaylistDeleteBtn();
        assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Dashboard page header status mismatch");
    },

    //Validate that clicking on 'Browse All Resources' navigates to the 'Interactive Activities' in Browse Tab
    ENG_PLAY_TC_9: function () {
        sts = playlistPage.click_browseAllResourcesBtn();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
    },

    //Validate clicking on 3 dots on any resource on the playlist page launches a dropdown list of options
    ENG_PLAY_TC_10: function (testdata) {
        sts = playlistPage.click_itemMoreOptions(testdata);
        assertion.assertEqual(sts.viewOptionResourceItem, testdata.viewOptionResourceItem, "viewOptionResourceItem text mismatch");
        assertion.assertEqual(sts.shareOptionResourceItem, testdata.shareOptionResourceItem, "shareOptionResourceItem text mismatch");
        assertion.assertEqual(sts.removeOptionResourceItem, testdata.removeOptionResourceItem, "removeOptionResourceItem text mismatch");
    },

    //Validate clicking on Remove from playlist option launches the remove resource popup
    ENG_PLAY_TC_11: function (testdata) {
        sts = playlistPage.click_removeOptionResourceItem(testdata);
        assertion.assertEqual(sts.removeResourceTitle, testdata.removeResourceTitle, "removeResourceTitle text mismatch");
        assertion.assertEqual(sts.removeResourceSubtitle, testdata.removeResourceSubtitle, "removeResourceSubtitle text mismatch");
        assertion.assertEqual(sts.removeResourceCancelBtn, testdata.removeResourceCancelBtn, "removeResourceCancelBtn text mismatch");
        assertion.assertEqual(sts.removeResourceRemoveBtn, testdata.removeResourceRemoveBtn, "removeResourceRemoveBtn text mismatch");
    },

    //Validate that clicking 'Remove' button on pop up removes the resource from the playlist
    ENG_PLAY_TC_12: function (testdata) {
        sts = playlistPage.click_removeResourceRemoveBtn(testdata);
        for (let i = 0; i < sts.length; i++) {
            assertion.assertNotEqual(sts[i].itemName, testdata, "resoure item found");
        }
    },

}