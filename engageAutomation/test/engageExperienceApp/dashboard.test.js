"use strict";
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page')
var sts;

module.exports = {

    //Validate the content of the blank dashboard
    ENG_DASH_TC_1: async function (testdata) {
        await dashboardPage.isInitialized();
        sts = await dashboardPage.getData_dashboardPage();
     /*   await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        //await assertion.assertEqual(sts.createPlaylistBtn, testdata.createPlaylistBtn, "Create Playlist text mismatch");
        await assertion.assertEqual(sts.addBookBtn, testdata.addBookBtn, "Add Book text mismatch");
        await assertion.assertEqual(sts.cardSliderTitle, testdata.cardSliderTitle, "slider title text mismatch");
        await assertion.assertEqual(sts.cardSliderSubtitle, testdata.cardSliderSubtitle, "slider subtile text mismatch");
        await assertion.assertEqual(sts.cardSliderLeftBtn, testdata.cardSliderLeftBtn, "left btn status mismatch");
        await assertion.assertEqual(sts.cardSliderRightBtn, testdata.cardSliderRightBtn, "right btn status text mismatch");
        await assertion.assertEqual(sts.myBooksHeading, testdata.myBooksHeading, "My books text mismatch");
        await assertion.assertEqual(sts.noBooksTitle, testdata.noBooksTitle, "No books added text mismatch");
        await assertion.assertEqual(sts.noBooksSubtitle, testdata.noBooksSubtitle, "no books subtitle text mismatch");
        await assertion.assertEqual(sts.noBooks_addBookBtn, testdata.noBooks_addBookBtn, "add books text mismatch");
        //await assertion.assertEqual(sts.myPlaylistsHeading, testdata.myPlaylistsHeading, "my playlist text mismatch");
        //await assertion.assertEqual(sts.noPlaylistsTitle, testdata.noPlaylistsTitle, "no playlist text mismatch");
        //await assertion.assertEqual(sts.noPlaylistsSubTitle, testdata.noPlaylistsSubTitle, "playlist subtitle text mismatch");
        //await assertion.assertEqual(sts.noPlaylists_createBtn, testdata.noPlaylists_createBtn, "create playlist text mismatch");
        await assertion.assertEqual(sts.exploreHeading, testdata.exploreHeading, "Explore heading text mismatch");
        await assertion.assertEqual(sts.viewAllBtn, testdata.viewAllBtn, "View All button text mismatch");
        await assertion.assertEqual(sts.recentlyViewedHeading, testdata.recentlyViewedHeading, "Recently Viewed heading text mismatch");
        sts = await dashboardPage.getData_actionCards();
        for (let i = 0; i < sts.length; i++) { //sts.length has been used instead of testdata.actionCard.length to support smaller resolutions
            await assertion.assertEqual(sts[i].actionCardTitles, testdata.actionCardTitles[i], "Action Card title text mismatch");
            await assertion.assertEqual(sts[i].actionCardSubtitles, testdata.actionCardSubtitles[i], "Action Card subtitle text mismatch");
            await assertion.assertEqual(sts[i].actionCardBtns, testdata.actionCardBtns[i], "Action Card button text mismatch");
        }*/
    },

    //Validate that clicking on 'Add Book' button, book list page is launched to select books to add
    ENG_DASH_TC_7: async function () {
        sts = await dashboardPage.click_addBookBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Add book page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Add book page header status mismatch");
    },

    //Validate that clicking on 'View' button of an added book launched the Book details page
    ENG_DASH_TC_11: async function (testdata) {
        sts = await dashboardPage.click_viewBookBtn(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "View Book page status mismatch");
        await assertion.assertEqual(sts.appShell.header, true, "View Book page header status mismatch");
    },

    //Validate on clicking Book Ellipses, dropdown menu is launched
    ENG_DASH_TC_12: async function (testdata) {
        sts = await dashboardPage.click_bookMenuBtn(testdata[0]);
        await assertion.assertEqual(sts.bookMenu_viewClassOption, testdata[1].bookMenu_viewClassOption, "View Class text mismatch");
        await assertion.assertEqual(sts.bookMenu_removeOption, testdata[1].bookMenu_removeOption, "Remove text mismatch");
        await assertion.assertEqual(sts.bookMenu_createClassOption, testdata[1].bookMenu_createClassOption, "Create Class text mismatch");
        await assertion.assertEqual(sts.bookMenu_openFlipbookOption, testdata[1].bookMenu_openFlipbookOption, "Open Flipbook text mismatch");
        //this assetion is dependent whethere flipbook is present or not
    },

    //Validate that clicking on 'Remove from My Books' launches a pop up with label 'Remove from My Books?'
    ENG_DASH_TC_13: async function (testdata) {
        sts = await dashboardPage.click_bookMenu_removeOption();
        await assertion.assertEqual(sts.removeBook_title, testdata[1].removeBook_title, "Menu Remove Title status mismatch");
        let removeBook_subTitle = testdata[1].removeBook_subTitle1 + testdata[0] + testdata[1].removeBook_subTitle2;
        await assertion.assertEqual(sts.removeBook_subTitle, removeBook_subTitle, "Menu Remove Subtitle status mismatch");
        await assertion.assertEqual(sts.removeBook_cancelBtn, testdata[1].removeBook_cancelBtn, "Menu Remove Cancel status mismatch");
        await assertion.assertEqual(sts.removeBook_removeBtn, testdata[1].removeBook_removeBtn, "Menu Remove Remove status mismatch");
    },

    //Validate that clicking on 'Cancel' in dialog box retains the book in 'My Books'
    ENG_DASH_TC_14: async function () {
        sts = await dashboardPage.click_removeBook_cancelBtn();
        await assertion.assertEqual(sts, true, "Cancel button status mismatch");
    },

    //Validate that clicking on 'Remove' in dialog box removes the book from 'My Books'
    ENG_DASH_TC_15: async function (testdata) {
        sts = await dashboardPage.click_removeBook_removeBtn();
        await assertion.assertEqual(sts, true, "Remove button status mismatch");
        sts = await dashboardPage.getData_books();
        if (sts.length != undefined) {
            for (var i = 0; i < sts.length; i++) {
                await assertion.assertNotEqual(sts[i].bookTitle, testdata, "Book title match found");
            }
        }
        else
            await assertion.assertFail("Error - " + sts)
    },

    //Validate on clicking "View Classes" from Book dropdown menu, class Pane is launched
    ENG_DASH_TC_16: async function () {
        sts = await dashboardPage.click_bookMenu_viewClassOption();
        await assertion.assertEqual(sts.classDashboardData.pageStatus, true);
    },

    //Validate on clicking "Create Classes" from Book dropdown menu, create class page is launched
    ENG_DASH_TC_17: async function () {
        sts = await dashboardPage.click_bookMenu_createClassOption();
        await assertion.assertEqual(sts.pageStatus, true);
    },

    //Validate on clicking "Open Flipbook" from Book dropdown menu, flipbook page is launched
    ENG_DASH_TC_18: async function () {
        sts = await dashboardPage.click_bookMenu_openFlipbookOption();
        await assertion.assertEqual(sts.pageStatus, true, "Flipbook page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Flipbook page header status mismatch");
    },

    //Validate on clicking "Interactive Activities" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_19: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Videos" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_20: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Online Classes" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_21: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Teacher Training" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_22: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Today in Class" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_23: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Projectable" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_24: async function (testdata) {
        sts = await dashboardPage.click_resourceTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Browse page header status mismatch");
        sts = await appShellPage.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate that playlist page is launched on clicking the playlist card
    ENG_DASH_TC_25: async function (testdata) {
        sts = await dashboardPage.click_playlistTitle(testdata);
        await assertion.assertEqual(sts.pageStatus, true, "Playlist page status mismatch");
        await assertion.assertEqual(sts.appShellPage.header, true, "Playlist page header status mismatch");
    },

    //Validate that clicking on 'Create Playlist' button on Dashboard launches the Playlist Pop Up
    ENG_DASH_TC_26: async function (testdata) {
        sts = await dashboardPage.click_createPlaylistBtn();
        await assertion.assertEqual(sts.createPlaylist_label, testdata.createPlaylist_label, "createPlaylist_label status mismatch");
        await assertion.assertEqual(sts.createPlaylist_input, testdata.createPlaylist_input, "createPlaylist_input status mismatch");
        await assertion.assertEqual(sts.createPlaylist_cancelBtn, testdata.createPlaylist_cancelBtn, "createPlaylist_cancelBtn status mismatch");
        await assertion.assertEqual(sts.createPlaylist_createBtn, testdata.createPlaylist_createBtn, "createPlaylist_createBtn status mismatch");
    },

    //Validate that playlist is added on the dashboard on entering playlist name and clicking 'Create' button
    ENG_DASH_TC_27: async function (testdata) {
        sts = await dashboardPage.set_createPlaylist_input(testdata);
        await assertion.assertEqual(sts, true, "createPlaylist_input status mismatch");
        sts = await dashboardPage.click_createPlaylist_createBtn();
        await assertion.assertEqual(sts[0].playlistTitle, testdata, "Playlist card not found");
    },

    //Validate that playlist is not added on the dashboard on clicking 'Cancel' button
    ENG_DASH_TC_28: async function () {
        sts = await dashboardPage.click_createPlaylist_cancelBtn();
        await assertion.assertEqual(sts, true, "createPlaylist_cancelBtn status mismatch");
    },
    //Mobile: Click add new button on dashboard page
    ENG_DASH_TC_29: async function (testdata) {
        sts = await dashboardPage.clickAddNew_btn();
       await assertion.assertEqual(sts.createPlaylistBtn, testdata.createPlaylistBtn, "Create Playlist text mismatch");
       await assertion.assertEqual(sts.addBookBtn, testdata.addBookBtn, "Add Book text mismatch");
    },
    //Mobile: Click Right Panel Launch button on dashboard page
    ENG_DASH_TC_30: async function () {
        sts = await dashboardPage.clickRightPanelOpen_btn();
      await  assertion.assertEqual(sts, true, "rightPanelOpen_btn status mismatch");
    },

    //Mobile: Click Right Panel Close button on dashboard page
    ENG_DASH_TC_31: async function () {
        sts = await dashboardPage.clickRightPanelClose_btn();
       await assertion.assertEqual(sts.pageStatus, true, "rightPanelClose_btn status mismatch");
    },
      //Validate on clicking Book Ellipses, dropdown menu is launched for Student
      ENG_DASH_TC_32:async function (testdata) { 
        sts = await dashboardPage.click_bookMenuBtn(testdata[0]);
        console.log(sts)
        await assertion.assertEqual(sts.bookMenu_viewClassOption, testdata[1].bookMenu_viewClassOption, "View Class text mismatch");
        await assertion.assertEqual(sts.bookMenu_removeOption, testdata[1].bookMenu_removeOption, "Remove text mismatch");
       // assertion.assertEqual(sts.bookMenu_createClassOption, testdata[1].bookMenu_createClassOption, "Create Class text mismatch");
       await assertion.assertEqual(sts.bookMenu_openFlipbookOption, testdata[1].bookMenu_openFlipbookOption, "Open Flipbook text mismatch");
        //this assetion is dependent whethere flipbook is present or not
    },
    ENG_DASH_TC_33: async function (testdata) {
        await dashboardPage.isInitialized();
        sts = await dashboardPage.getData_dashboardPage();
        await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
       // await assertion.assertEqual(sts.createPlaylistBtn, testdata.createPlaylistBtn, "Create Playlist text mismatch");
        //await assertion.assertEqual(sts.addBookBtn, testdata.addBookBtn, "Add Book text mismatch");
        await assertion.assertEqual(sts.cardSliderTitle, testdata.cardSliderTitle, "slider title text mismatch");
        await assertion.assertEqual(sts.cardSliderSubtitle, testdata.cardSliderSubtitle, "slider subtile text mismatch");
        await assertion.assertEqual(sts.cardSliderLeftBtn, testdata.cardSliderLeftBtn, "left btn status mismatch");
        await assertion.assertEqual(sts.cardSliderRightBtn, testdata.cardSliderRightBtn, "right btn status text mismatch");
        await assertion.assertEqual(sts.myBooksHeading, testdata.myBooksHeading, "My books text mismatch");
        await assertion.assertEqual(sts.noBooksTitle, testdata.noBooksTitle, "No books added text mismatch");
        await assertion.assertEqual(sts.noBooksSubtitle, testdata.noBooksSubtitle, "no books subtitle text mismatch");
        await assertion.assertEqual(sts.noBooks_addBookBtn, testdata.noBooks_addBookBtn, "add books text mismatch");
        //await assertion.assertEqual(sts.myPlaylistsHeading, testdata.myPlaylistsHeading, "my playlist text mismatch");
        //await assertion.assertEqual(sts.noPlaylistsTitle, testdata.noPlaylistsTitle, "no playlist text mismatch");
        //await assertion.assertEqual(sts.noPlaylistsSubTitle, testdata.noPlaylistsSubTitle, "playlist subtitle text mismatch");
        //await assertion.assertEqual(sts.noPlaylists_createBtn, testdata.noPlaylists_createBtn, "create playlist text mismatch");
       // await assertion.assertEqual(sts.exploreHeading, testdata.exploreHeading, "Explore heading text mismatch");
       // await assertion.assertEqual(sts.viewAllBtn, testdata.viewAllBtn, "View All button text mismatch");
        await assertion.assertEqual(sts.recentlyViewedHeading, testdata.recentlyViewedHeading, "Recently Viewed heading text mismatch");
        sts = await dashboardPage.getData_actionCards();
        for (let i = 0; i < sts.length; i++) { //sts.length has been used instead of testdata.actionCard.length to support smaller resolutions
            await assertion.assertEqual(sts[i].actionCardTitles, testdata.actionCardTitles[i], "Action Card title text mismatch");
            await assertion.assertEqual(sts[i].actionCardSubtitles, testdata.actionCardSubtitles[i], "Action Card subtitle text mismatch");
            await assertion.assertEqual(sts[i].actionCardBtns, testdata.actionCardBtns[i], "Action Card button text mismatch");
        }
    },
};
