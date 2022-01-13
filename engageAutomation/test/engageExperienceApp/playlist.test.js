"use strict";
var playlistPage = require('../../pages/engageExperienceApp/playlist.page');
var sts;

module.exports = {

    //Validate the content of the playlist page
    ENG_PLIS_TC_1: function (testdata) {
        sts = playlistPage.getData_playlistPage();
        assertion.assertEqual(sts.playlistPageTitle, testdata[0], "playlistPageTitle text mismatch");
        assertion.assertEqual(sts.playlistPageSubtitle, testdata[1].playlistPageSubtitle, "playlistPageSubtitle text mismatch");
        assertion.assert(sts.playlistResourceCount.includes(testdata[1].playlistResourceCount), sts.playlistResourceCount + " : playlistResourceCount text mismatch");
        assertion.assert(sts.playlistCreatedOn.includes(testdata[1].playlistCreatedOn), sts.playlistCreatedOn + " : playlistCreatedOn text mismatch");
        assertion.assertEqual(sts.playlistOptionsBtn, testdata[1].playlistOptionsBtn, "playlistOptionsBtn text mismatch");
        assertion.assertEqual(sts.playlistShareBtn, testdata[1].playlistShareBtn, "playlistShareBtn status mismatch");
        if (sts.noPlaylistImage) {
            assertion.assertEqual(sts.noPlaylistImage, testdata[1].noPlaylistImage, "noPlaylistImage status mismatch");
            assertion.assertEqual(sts.noPlaylistTitle, testdata[1].noPlaylistTitle, "noPlaylistTitle text mismatch");
            assertion.assertEqual(sts.noBooksSubtitle, testdata[1].noBooks_subTitle, "no books subtitle text mismatch");
            assertion.assertEqual(sts.noPlaylistSubtitle, testdata[1].noPlaylistSubtitle, "add books text mismatch");
            assertion.assertEqual(sts.browseAllResourcesBtn, testdata[1].browseAllResourcesBtn, "browseAllResourcesBtn text mismatch");
        } else {
            assertion.assertEqual(sts.itemIndex_Header, testdata[1].itemIndex_Header, "itemIndex_Header text mismatch");
            assertion.assertEqual(sts.itemName_Header, testdata[1].itemName_Header, "itemName_Header text mismatch");
            assertion.assertEqual(sts.itemType_Header, testdata[1].itemType_Header, "itemType_Header text mismatch");
            assertion.assertEqual(sts.itemTag_Header, testdata[1].itemTag_Header, "itemTag_Header text mismatch");
            assertion.assertEqual(sts.playlistFooterTitle, testdata[1].playlistFooterTitle, "playlistFooterTitle text mismatch");
            assertion.assertEqual(sts.playlistFooterSubtitle, testdata[1].playlistFooterSubtitle, "playlistFooterSubtitle text mismatch");
            assertion.assertEqual(sts.playlistBrowseResourcesBtn, testdata[1].playlistBrowseResourcesBtn, "playlistBrowseResourcesBtn text mismatch");
        }
    },

    //Validate that clicking on the three dots launches a dropdown list of options
    ENG_PLIS_TC_2: function (testdata) {
        sts = playlistPage.click_playlistOptionsBtn();
        assertion.assertEqual(sts.playlistReorderOption, testdata.playlistReorderOption, "playlistReorderOption text mismatch");
        assertion.assertEqual(sts.playlistEditOption, testdata.playlistEditOption, "playlistEditOption text mismatch");
        assertion.assertEqual(sts.playlistDeleteOption, testdata.playlistDeleteOption, "playlistDeleteOption text mismatch");
    },

    //Validate that clicking on 'Edit' button launches the Playlist pop up
    ENG_PLIS_TC_3: function (testdata) {
        sts = playlistPage.click_playlistEditOption();
        assertion.assertEqual(sts.playlistNameLabel, testdata[1].playlistNameLabel, "playlistNameLabel text mismatch");
        assertion.assertEqual(sts.playlistNameInput, testdata[0], "playlistNameInput text mismatch");
        assertion.assertEqual(sts.editPlaylistCancelBtn, testdata[1].editPlaylistCancelBtn, "editPlaylistCancelBtn text mismatch");
        assertion.assertEqual(sts.editPlaylistSaveBtn, testdata[1].editPlaylistSaveBtn, "editPlaylistSaveBtn text mismatch");
    },

    //Validate that clicking on 'Delete' button launches the Delete confirmation pop up
    ENG_PLIS_TC_4: function (testdata) {
        sts = playlistPage.click_playlistDeleteOption();
        assertion.assertEqual(sts.deletePlaylistTitle, testdata.deletePlaylistTitle, "deletePlaylistTitle text mismatch");
        assertion.assertEqual(sts.deletePlaylistSubtitle, testdata.deletePlaylistSubtitle, "deletePlaylistSubtitle text mismatch");
        assertion.assertEqual(sts.deletePlaylistCancelBtn, testdata.deletePlaylistCancelBtn, "deletePlaylistCancelBtn text mismatch");
        assertion.assertEqual(sts.deletePlaylistDeleteBtn, testdata.deletePlaylistDeleteBtn, "deletePlaylistDeleteBtn text mismatch");
    },

    //Validate that playlist name is updated on clicking 'Save' button
    ENG_PLIS_TC_5: function (testdata) {
        sts = playlistPage.set_playlistNameInput(testdata);
        assertion.assertEqual(sts, true);
        sts = playlistPage.click_editPlaylistSaveBtn();
        assertion.assertEqual(sts, testdata, "Playlist name mismatch");
    },

    //Validate that clicking 'Delete' button on pop up deletes the playlist
    ENG_PLIS_TC_7: function () {
        sts = playlistPage.click_deletePlaylistDeleteBtn();
        assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Dashboard page header status mismatch");
    },

    //Validate that clicking on 'Browse All Resources' navigates to the 'Interactive Activities' in Browse Tab
    ENG_PLIS_TC_9: function () {
        sts = playlistPage.click_browseAllResourcesBtn();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
    },

    //Validate clicking on 3 dots on any resource on the playlist page launches a dropdown list of options
    ENG_PLIS_TC_10: function (testdata) {
        sts = playlistPage.click_itemMoreOptions(testdata[0]);
        assertion.assertEqual(sts.viewOptionResourceItem, testdata[1].viewOptionResourceItem, "viewOptionResourceItem text mismatch");
        assertion.assertEqual(sts.shareOptionResourceItem, testdata[1].shareOptionResourceItem, "shareOptionResourceItem text mismatch");
        assertion.assertEqual(sts.removeOptionResourceItem, testdata[1].removeOptionResourceItem, "removeOptionResourceItem text mismatch");
    },

    //Validate clicking on Remove from playlist option launches the remove resource popup
    ENG_PLIS_TC_11: function (testdata) {
        sts = playlistPage.click_removeOptionResourceItem();
        assertion.assertEqual(sts.removeResourceTitle, testdata[1].removeResourceTitle, "removeResourceTitle text mismatch");
        let removeResourceSubtitle = testdata[1].removeResourceSubtitle1 + testdata[0] + testdata[1].removeResourceSubtitle2;
        assertion.assertEqual(sts.removeResourceSubtitle, removeResourceSubtitle, "removeResourceSubtitle text mismatch");
        assertion.assertEqual(sts.removeResourceCancelBtn, testdata[1].removeResourceCancelBtn, "removeResourceCancelBtn text mismatch");
        assertion.assertEqual(sts.removeResourceRemoveBtn, testdata[1].removeResourceRemoveBtn, "removeResourceRemoveBtn text mismatch");
    },

    //Validate that clicking 'Remove' button on pop up removes the resource from the playlist
    ENG_PLIS_TC_12: function (testdata) {
        sts = playlistPage.click_removeResourceRemoveBtn();
        if (sts.length > 0) {
            for (let i = 0; i < sts.length; i++) {
                assertion.assertNotEqual(sts[i].itemName, testdata, "resoure item found");
            }
        }
        else {
            assertion.assert(sts.length == 0, sts);
        }
    },

}