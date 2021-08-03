"use strict";
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var browsePage = require('../../pages/engageExperienceApp/browse.page.js');
var sts;

module.exports = {

    //Validate the content of the blank dashboard
    ENG_DASH_TC_1: function (testdata) {
        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.createPlaylist_Txt, testdata.createPlaylist_Txt, "Create Playlist text mismatch");
        assertion.assertEqual(sts.addBook_Txt, testdata.addBook_Txt, "Add Book text mismatch");
        assertion.assertEqual(sts.cardSliderTitle, testdata.cardSliderTitle, "slider title text mismatch");
        assertion.assertEqual(sts.cardSliderSubtitle, testdata.cardSliderSubtitle, "slider subtile text mismatch");
        assertion.assertEqual(sts.cardSliderLeftBtn,true, "left btn status mismatch");
        assertion.assertEqual(sts.cardSliderRightBtn,true, "right btn status text mismatch");
        assertion.assertEqual(sts.myBooksHeading_Txt, testdata.myBooksHeading_Txt, "My books text mismatch");
        assertion.assertEqual(sts.noBooks_title, testdata.noBooks_title, "No books added text mismatch");
        assertion.assertEqual(sts.noBooks_subTitle, testdata.noBooks_subTitle, "no books subtitle text mismatch");
        assertion.assertEqual(sts.noBooks_btn, testdata.noBooks_btn, "add books text mismatch");
        assertion.assertEqual(sts.myPlaylistsHeading_Txt, testdata.myPlaylistsHeading_Txt, "my playlist text mismatch");
        assertion.assertEqual(sts.noPlaylists_title, testdata.noPlaylists_title, "no playlist text mismatch");
        assertion.assertEqual(sts.noPlaylists_subTitle, testdata.noPlaylists_subTitle, "playlist subtitle text mismatch");
        assertion.assertEqual(sts.noPlaylists_btn, testdata.noPlaylists_btn, "create playlist text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardTitles,testdata.actionCard[0].actionCardTitles, "Action Card title text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardSubtitles,testdata.actionCard[0].actionCardSubtitles, "Action Card subtitle text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardBtns,testdata.actionCard[0].actionCardBtns, "Action Card button text mismatch");

    },

    //Validate that clicking on 'Add Book' button, book list page is launched to select books to add
    ENG_DASH_TC_6: function () {
        sts = dashboardPage.clickAddBook();
        assertion.assertEqual(sts,true, "Dashboard page status mismatch");
    },

    //Validate on clicking Book Ellipses, dropdown menu is launched
    ENG_DASH_TC_12: function(){
        sts = dashboardPage.clickBookMenuOptions("All Type Book");
        assertion.assertEqual(sts, true);
    },

    //Validate that clicking on 'Remove from My Books' launches a pop up with label 'Remove from My Books?'
    ENG_DASH_TC_13: function () {
        sts = dashboardPage.clickMenuRemoveBook("All Type Book");
      /*  assertion.assertEqual(sts.removeBook_title,testdata.removeBook_title, "Menu Remove Title status mismatch");
        assertion.assertEqual(sts.removeBook_subTitle,testdata.removeBook_subTitle, "Menu Remove Subtitle status mismatch");
        assertion.assertEqual(sts.removeBook_cancel,testdata.removeBook_cancel, "Menu Remove Cancel status mismatch");
        assertion.assertEqual(sts.removeBook_remove,testdata.removeBook_remove, "Menu Remove Remove status mismatch");*/
    },
    
    //Validate that clicking on 'Remove' in dialogue box removes the book from 'My List'
    ENG_DASH_TC_15: function () {
        sts = dashboardPage.clickRemoveBookDialogueBox_Remove();
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.createPlaylist_Txt, testdata.createPlaylist_Txt, "Create Playlist text mismatch");
        assertion.assertEqual(sts.addBook_Txt, testdata.addBook_Txt, "Add Book text mismatch");
        assertion.assertEqual(sts.cardSliderTitle, testdata.cardSliderTitle, "slider title text mismatch");
        assertion.assertEqual(sts.cardSliderSubtitle, testdata.cardSliderSubtitle, "slider subtile text mismatch");
        assertion.assertEqual(sts.cardSliderLeftBtn,true, "left btn status mismatch");
        assertion.assertEqual(sts.cardSliderRightBtn,true, "right btn status text mismatch");
        assertion.assertEqual(sts.myBooksHeading_Txt, testdata.myBooksHeading_Txt, "My books text mismatch");
        assertion.assertEqual(sts.noBooks_title, testdata.noBooks_title, "No books added text mismatch");
        assertion.assertEqual(sts.noBooks_subTitle, testdata.noBooks_subTitle, "no books subtitle text mismatch");
        assertion.assertEqual(sts.noBooks_btn, testdata.noBooks_btn, "add books text mismatch");
        assertion.assertEqual(sts.myPlaylistsHeading_Txt, testdata.myPlaylistsHeading_Txt, "my playlist text mismatch");
        assertion.assertEqual(sts.noPlaylists_title, testdata.noPlaylists_title, "no playlist text mismatch");
        assertion.assertEqual(sts.noPlaylists_subTitle, testdata.noPlaylists_subTitle, "playlist subtitle text mismatch");
        assertion.assertEqual(sts.noPlaylists_btn, testdata.noPlaylists_btn, "create playlist text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardTitles,testdata.actionCard[0].actionCardTitles, "Action Card title text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardSubtitles,testdata.actionCard[0].actionCardSubtitles, "Action Card subtitle text mismatch");
        assertion.assertEqual(sts.actionCardList[0].actionCardBtns,testdata.actionCard[0].actionCardBtns, "Action Card button text mismatch");    },

    //Validate on clicking "View Classes" from Book dropdown menu, class Pane is launched
    ENG_DASH_TC_8: function(){
        sts = dashboardPage.clickMenuViewClass("All Type Book");
        assertion.assertEqual(sts.instructorMyClassData.pageStatus, true);
    },

    //Validate on clicking "Create Classes" from Book dropdown menu, create class page is launched
    ENG_DASH_TC_9: function(){
        sts = dashboardPage.clickMenuCreateClass("All Type Book");
        assertion.assertEqual(sts.pageStatus, true);
    },

    //Validate on clicking "Open Flipbook" from Book dropdown menu, flipbook page is launched
    ENG_DASH_TC_11: function(testdata){
        sts = dashboardPage.clickMenuOpenFlipbook(testdata.bookName);
        console.log(JSON.stringify(sts));
        assertion.assertEqual(sts, true);
    },

    //Validate on clicking "Interactive Activities" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_19: function () {
        sts = dashboardPage.clickExploreResource("Interactive Activities");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Interactive Activities", "Active tab name status Mismatch");
    },

    //Validate on clicking "Videos" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_20: function () {
        sts = dashboardPage.clickExploreResource("Videos");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Videos", "Active tab name status Mismatch");
    },

    //Validate on clicking "Online Classes" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_21: function () {
        sts = dashboardPage.clickExploreResource("Online Classes");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Online Classes", "Active tab name status Mismatch");
    },

    //Validate on clicking "Teacher Training" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_22: function () {
        sts = dashboardPage.clickExploreResource("Teacher Training");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Teacher Training", "Active tab name status Mismatch");
    },

    //Validate on clicking "Today in Class" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_23: function () {
        sts = dashboardPage.clickExploreResource("Today in Class");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Today in Class", "Active tab name status Mismatch");
    },

    //Validate on clicking "Projectable" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_24: function () {
        sts = dashboardPage.clickExploreResource("Projectable");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Projectable", "Active tab name status Mismatch");
    },

        //Validate the "+" icon  button of any book
        ENG_DASH_TC_99: function () {
            sts = dashboardPage.ClickPlusIconofBook("All Type Book");
            assertion.assertEqual(sts, true, "Book Details Page is launched");
        },
};
