"use strict";
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page');
var appShellPage = require('../../pages/engageExperienceApp/appShell.page')
var sts;

module.exports = {

    //Validate the content of the blank dashboard
    ENG_DASH_TC_1: function (testdata) {
        dashboardPage.isInitialized();
        sts = dashboardPage.getData_dashboardPage();
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.createPlaylistBtn, testdata.createPlaylist_Txt, "Create Playlist text mismatch");
        assertion.assertEqual(sts.addBookBtn, testdata.addBook_Txt, "Add Book text mismatch");
        assertion.assertEqual(sts.cardSliderTitle, testdata.cardSliderTitle, "slider title text mismatch");
        assertion.assertEqual(sts.cardSliderSubtitle, testdata.cardSliderSubtitle, "slider subtile text mismatch");
        assertion.assertEqual(sts.cardSliderLeftBtn, "", "left btn status mismatch");
        assertion.assertEqual(sts.cardSliderRightBtn, "", "right btn status text mismatch");
        assertion.assertEqual(sts.myBooksHeading, testdata.myBooksHeading_Txt, "My books text mismatch");
        assertion.assertEqual(sts.noBooksTitle, testdata.noBooks_title, "No books added text mismatch");
        assertion.assertEqual(sts.noBooksSubtitle, testdata.noBooks_subTitle, "no books subtitle text mismatch");
        assertion.assertEqual(sts.noBooks_addBookBtn, testdata.noBooks_btn, "add books text mismatch");
        assertion.assertEqual(sts.myPlaylistsHeading, testdata.myPlaylistsHeading_Txt, "my playlist text mismatch");
        assertion.assertEqual(sts.noPlaylistsTitle, testdata.noPlaylists_title, "no playlist text mismatch");
        assertion.assertEqual(sts.noPlaylistsSubTitle, testdata.noPlaylists_subTitle, "playlist subtitle text mismatch");
        assertion.assertEqual(sts.noPlaylists_createBtn, testdata.noPlaylists_btn, "create playlist text mismatch");
        assertion.assertEqual(sts.exploreHeading, testdata.exploreHeading, "Explore heading text mismatch");
        assertion.assertEqual(sts.viewAllBtn, testdata.viewAll_btn, "View All button text mismatch");
        assertion.assertEqual(sts.recentlyViewedHeading, testdata.recentlyViewed_heading, "Recently Viewed heading text mismatch");
        sts = dashboardPage.getData_actionCards();
        for (let i = 0; i < sts.length; i++) { //sts.length has been used instead of testdata.actionCard.length to support smaller resolutions
            assertion.assertEqual(sts[i].actionCardTitles, testdata.actionCard[i].actionCardTitles, "Action Card title text mismatch");
            assertion.assertEqual(sts[i].actionCardSubtitles, testdata.actionCard[i].actionCardSubtitles, "Action Card subtitle text mismatch");
            assertion.assertEqual(sts[i].actionCardBtns, testdata.actionCard[i].actionCardBtns, "Action Card button text mismatch");
        }
    },

    //Validate that clicking on 'Add Book' button, book list page is launched to select books to add
    ENG_DASH_TC_7: function () {
        sts = dashboardPage.click_addBookBtn();
        assertion.assertEqual(sts.pageStatus, true, "Add book page status mismatch");
        assertion.assertEqual(sts.appShell.header, true, "Add book page header status mismatch");
    },

    //Validate that clicking on 'View' button of an added book launched the Book details page
    ENG_DASH_TC_11: function (testdata) {
        sts = dashboardPage.click_viewBookBtn(testdata);
        assertion.assertEqual(sts.pageStatus, true, "View Book page status mismatch");
        assertion.assertEqual(sts.appShell.header, true, "View Book page header status mismatch");
    },

    //Validate on clicking Book Ellipses, dropdown menu is launched
    ENG_DASH_TC_12: function (testdata) {
        sts = dashboardPage.click_bookMenuBtn(testdata[0]);
        assertion.assertEqual(sts.bookMenu_viewClassOption, testdata[1].bookMenu_viewClass, "View Class text mismatch");
        assertion.assertEqual(sts.bookMenu_removeOption, testdata[1].bookMenu_remove, "Remove text mismatch");
        assertion.assertEqual(sts.bookMenu_createClassOption, testdata[1].bookMenu_createClass, "Create Class text mismatch");
        assertion.assertEqual(sts.bookMenu_openFlipbookOption, testdata[1].bookMenu_openFlipbook, "Open Flipbook text mismatch");
        //this assetion is dependent whethere flipbook is present or not
    },

    //Validate that clicking on 'Remove from My Books' launches a pop up with label 'Remove from My Books?'
    ENG_DASH_TC_13: function (testdata) {
        sts = dashboardPage.click_bookMenu_removeOption();
        assertion.assertEqual(sts.removeBook_title, testdata[1].removeBook_title, "Menu Remove Title status mismatch");
        let removeBook_subTitle = testdata[1].removeBook_subTitle1 + testdata[0] + testdata[1].removeBook_subTitle2;
        assertion.assertEqual(sts.removeBook_subTitle, removeBook_subTitle, "Menu Remove Subtitle status mismatch");
        assertion.assertEqual(sts.removeBook_cancelBtn, testdata[1].removeBook_cancel, "Menu Remove Cancel status mismatch");
        assertion.assertEqual(sts.removeBook_removeBtn, testdata[1].removeBook_remove, "Menu Remove Remove status mismatch");
    },

    //Validate that clicking on 'Cancel' in dialog box retains the book in 'My Books'
    ENG_DASH_TC_14: function () {
        sts = dashboardPage.click_removeBook_cancelBtn();
        assertion.assertEqual(sts, true, "Cancel button status mismatch");
    },

    //Validate that clicking on 'Remove' in dialog box removes the book from 'My Books'
    ENG_DASH_TC_15: function (testdata) {
        sts = dashboardPage.click_removeBook_removeBtn();
        if (sts.length != undefined) {
            for (var i = 0; i < sts.length; i++) {
                assertion.assertNotEqual(sts[i].bookTitle, testdata, "Book title match found");
            }
        }
        else
            assertion.assertFail("Error - " + sts)
    },

    //Validate on clicking "View Classes" from Book dropdown menu, class Pane is launched
    ENG_DASH_TC_16: function () {
        sts = dashboardPage.click_bookMenu_viewClassOption();
        assertion.assertEqual(sts.classDashboardData.pageStatus, true);
    },

    //Validate on clicking "Create Classes" from Book dropdown menu, create class page is launched
    ENG_DASH_TC_17: function () {
        sts = dashboardPage.click_bookMenu_createClassOption();
        assertion.assertEqual(sts.pageStatus, true);
    },

    //Validate on clicking "Open Flipbook" from Book dropdown menu, flipbook page is launched
    ENG_DASH_TC_18: function () {
        sts = dashboardPage.click_bookMenu_openFlipbookOption();
        assertion.assertEqual(sts.pageStatus, true, "Flipbook page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Flipbook page header status mismatch");
    },

    //Validate on clicking "Interactive Activities" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_19: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Videos" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_20: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Online Classes" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_21: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Teacher Training" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_22: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Today in Class" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_23: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate on clicking "Projectable" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_24: function (testdata) {
        sts = dashboardPage.click_resourceTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = appShellPage.getTabsListData();
        assertion.assertEqual(sts.selected, testdata, "Active tab name mismatch");
    },

    //Validate that playlist page is launched on clicking the playlist card
    ENG_DASH_TC_25: function (testdata) {
        sts = dashboardPage.click_playlistTitle(testdata);
        assertion.assertEqual(sts.pageStatus, true, "Playlist page status mismatch");
        assertion.assertEqual(sts.appShell.header, true, "Playlist page header status mismatch");
    },

    //Validate that clicking on 'Create Playlist' button on Dashboard launches the Playlist Pop Up
    ENG_DASH_TC_26: function (testdata) {
        sts = dashboardPage.click_createPlaylistBtn(testdata);
        assertion.assertEqual(sts.createPlaylist_label, true, "createPlaylist_label status mismatch");
        assertion.assertEqual(sts.createPlaylist_input, true, "createPlaylist_input status mismatch");
        assertion.assertEqual(sts.createPlaylist_cancelBtn, true, "createPlaylist_cancelBtn status mismatch");
        assertion.assertEqual(sts.createPlaylist_createBtn, true, "createPlaylist_createBtn status mismatch");
    },

    //Validate that playlist is added on the dashboard on entering playlist name and clicking 'Create' button
    ENG_DASH_TC_27: function (testdata) {
        sts = dashboardPage.click_createPlaylist_createBtn(testdata);
        assertion.assertEqual(sts[0].playlistTitle, true, "Playlist card not found");
    },

    //Validate that playlist is not added on the dashboard on clicking 'Cancel' button
    ENG_DASH_TC_28: function (testdata) {
        sts = dashboardPage.click_createPlaylist_cancelBtn(testdata);
        assertion.assertEqual(sts, true, "createPlaylist_cancelBtn status mismatch");
    },
};
