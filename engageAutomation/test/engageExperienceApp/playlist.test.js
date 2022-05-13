"use strict";
var playlistPage = require('../../pages/engageExperienceApp/playlist.page');
var sts;

module.exports = {

    //Validate the content of the playlist page
    ENG_PLIS_TC_1: async function (testdata) {
        sts = await playlistPage.getData_playlistPage();
        await assertion.assertEqual(sts.playlistPageTitle, testdata[0], "playlistPageTitle text mismatch");
        await assertion.assertEqual(sts.playlistPageSubtitle, testdata[1].playlistPageSubtitle, "playlistPageSubtitle text mismatch");
        await assertion.assert(sts.playlistResourceCount.includes(testdata[1].playlistResourceCount), sts.playlistResourceCount + " : playlistResourceCount text mismatch");
        await assertion.assert(sts.playlistCreatedOn.includes(testdata[1].playlistCreatedOn), sts.playlistCreatedOn + " : playlistCreatedOn text mismatch");
        await assertion.assertEqual(sts.playlistOptionsBtn, testdata[1].playlistOptionsBtn, "playlistOptionsBtn text mismatch");
        await assertion.assertEqual(sts.playlistShareBtn, testdata[1].playlistShareBtn, "playlistShareBtn status mismatch");
        if (sts.noPlaylistImage) {
            await assertion.assertEqual(sts.noPlaylistImage, testdata[1].noPlaylistImage, "noPlaylistImage status mismatch");
            await assertion.assertEqual(sts.noPlaylistTitle, testdata[1].noPlaylistTitle, "noPlaylistTitle text mismatch");
            await assertion.assertEqual(sts.noBooksSubtitle, testdata[1].noBooks_subTitle, "no books subtitle text mismatch");
            await assertion.assertEqual(sts.noPlaylistSubtitle, testdata[1].noPlaylistSubtitle, "add books text mismatch");
            await assertion.assertEqual(sts.browseAllResourcesBtn, testdata[1].browseAllResourcesBtn, "browseAllResourcesBtn text mismatch");
        } else {
            await assertion.assertEqual(sts.itemIndex_Header, testdata[1].itemIndex_Header, "itemIndex_Header text mismatch");
            await assertion.assertEqual(sts.itemName_Header, testdata[1].itemName_Header, "itemName_Header text mismatch");
            await assertion.assertEqual(sts.itemType_Header, testdata[1].itemType_Header, "itemType_Header text mismatch");
            await assertion.assertEqual(sts.itemTag_Header, testdata[1].itemTag_Header, "itemTag_Header text mismatch");
            await assertion.assertEqual(sts.playlistFooterTitle, testdata[1].playlistFooterTitle, "playlistFooterTitle text mismatch");
            await assertion.assertEqual(sts.playlistFooterSubtitle, testdata[1].playlistFooterSubtitle, "playlistFooterSubtitle text mismatch");
            await assertion.assertEqual(sts.playlistBrowseResourcesBtn, testdata[1].playlistBrowseResourcesBtn, "playlistBrowseResourcesBtn text mismatch");
        }
    },

    //Validate that clicking on the three dots launches a dropdown list of options
    ENG_PLIS_TC_2: async function (testdata) {
        sts = await playlistPage.click_playlistOptionsBtn();
        await assertion.assertEqual(sts.playlistReorderOption, testdata.playlistReorderOption, "playlistReorderOption text mismatch");
        await assertion.assertEqual(sts.playlistEditOption, testdata.playlistEditOption, "playlistEditOption text mismatch");
        await assertion.assertEqual(sts.playlistDeleteOption, testdata.playlistDeleteOption, "playlistDeleteOption text mismatch");
    },

    //Validate that clicking on 'Edit' button launches the Playlist pop up
    ENG_PLIS_TC_3: async function (testdata) {
        sts = await playlistPage.click_playlistEditOption();
        await assertion.assertEqual(sts.playlistNameLabel, testdata[1].playlistNameLabel, "playlistNameLabel text mismatch");
        await assertion.assertEqual(sts.playlistNameInput, testdata[0], "playlistNameInput text mismatch");
        await assertion.assertEqual(sts.editPlaylistCancelBtn, testdata[1].editPlaylistCancelBtn, "editPlaylistCancelBtn text mismatch");
        await assertion.assertEqual(sts.editPlaylistSaveBtn, testdata[1].editPlaylistSaveBtn, "editPlaylistSaveBtn text mismatch");
    },

    //Validate that clicking on 'Delete' button launches the Delete confirmation pop up
    ENG_PLIS_TC_4: async function (testdata) {
        sts = await playlistPage.click_playlistDeleteOption();
        await assertion.assertEqual(sts.deletePlaylistTitle, testdata.deletePlaylistTitle, "deletePlaylistTitle text mismatch");
        await assertion.assertEqual(sts.deletePlaylistSubtitle, testdata.deletePlaylistSubtitle, "deletePlaylistSubtitle text mismatch");
        await assertion.assertEqual(sts.deletePlaylistCancelBtn, testdata.deletePlaylistCancelBtn, "deletePlaylistCancelBtn text mismatch");
        await assertion.assertEqual(sts.deletePlaylistDeleteBtn, testdata.deletePlaylistDeleteBtn, "deletePlaylistDeleteBtn text mismatch");
    },

    //Validate that playlist name is updated on clicking 'Save' button
    ENG_PLIS_TC_5: async function (testdata) {
        sts = await playlistPage.set_playlistNameInput(testdata);
        await assertion.assertEqual(sts, true);
        sts = await playlistPage.click_editPlaylistSaveBtn();
        await assertion.assertEqual(sts, testdata, "Playlist name mismatch");
    },

    //Validate that clicking 'Delete' button on pop up deletes the playlist
    ENG_PLIS_TC_7: async function () {
        sts = await playlistPage.click_deletePlaylistDeleteBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Dashboard page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Dashboard page header status mismatch");
    },

    //Validate that clicking on 'Browse All Resources' navigates to the 'Interactive Activities' in Browse Tab
    ENG_PLIS_TC_9: async function () {
        sts = await playlistPage.click_browseAllResourcesBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
    },

    //Validate clicking on 3 dots on any resource on the playlist page launches a dropdown list of options
    ENG_PLIS_TC_10: async function (testdata) {
        sts = await playlistPage.click_itemMoreOptions(testdata[0]);
        await assertion.assertEqual(sts.viewOptionResourceItem, testdata[1].viewOptionResourceItem, "viewOptionResourceItem text mismatch");
        await assertion.assertEqual(sts.shareOptionResourceItem, testdata[1].shareOptionResourceItem, "shareOptionResourceItem text mismatch");
        await assertion.assertEqual(sts.removeOptionResourceItem, testdata[1].removeOptionResourceItem, "removeOptionResourceItem text mismatch");
    },

    //Validate clicking on Remove from playlist option launches the remove resource popup
    ENG_PLIS_TC_11: async function (testdata) {
        sts = await playlistPage.click_removeOptionResourceItem();
        await assertion.assertEqual(sts.removeResourceTitle, testdata[1].removeResourceTitle, "removeResourceTitle text mismatch");
        let removeResourceSubtitle = testdata[1].removeResourceSubtitle1 + testdata[0] + testdata[1].removeResourceSubtitle2;
        await assertion.assertEqual(sts.removeResourceSubtitle, removeResourceSubtitle, "removeResourceSubtitle text mismatch");
        await assertion.assertEqual(sts.removeResourceCancelBtn, testdata[1].removeResourceCancelBtn, "removeResourceCancelBtn text mismatch");
        await assertion.assertEqual(sts.removeResourceRemoveBtn, testdata[1].removeResourceRemoveBtn, "removeResourceRemoveBtn text mismatch");
    },

    //Validate that clicking 'Remove' button on pop up removes the resource from the playlist
    ENG_PLIS_TC_12: async function (testdata) {
        sts = await playlistPage.click_removeResourceRemoveBtn();
        if (sts.length > 0) {
            for (let i = 0; i < sts.length; i++) {
                await assertion.assertNotEqual(sts[i].itemName, testdata, "resoure item found");
            }
        }
        else {
            await assertion.assert(sts.length == 0, sts);
        }
    },

}