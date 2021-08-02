"use strict";
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var browsePage = require('../../pages/engageExperienceApp/browse.page.js');
var sts;

module.exports = {

    //Validate when blank dashboard is launched
    ENG_DASH_TC_1: function () {
        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
    },

    //Validate that clicking on 'Add Book' button, book list page is launched to select books to add
    ENG_DASH_TC_7: function () {
        sts = dashboardPage.clickAddBook();
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
    },

    //Validate that clicking on 'Remove from My Books' launches a pop up with label 'Remove from My Books?'
    ENG_DASH_TC_13: function () {
        sts = dashboardPage.clickMenuRemoveBook();
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
    },
    
    //Validate that clicking on 'Remove' in dialogue box removes the book from 'My List'
    ENG_DASH_TC_15: function () {
        sts = dashboardPage.clickMenuRemoveBook();
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
    },


    //Validate on clicking "Interactive Activities" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_1: function () {
        sts = dashboardPage.clickExploreResource("Interactive Activities");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Interactive Activities", "Active tab name status Mismatch");
    },

    //Validate on clicking "Videos" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_2: function () {
        sts = dashboardPage.clickExploreResource("Videos");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Videos", "Active tab name status Mismatch");
    },

    //Validate on clicking "Online Classes" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_3: function () {
        sts = dashboardPage.clickExploreResource("Online Classes");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Online Classes", "Active tab name status Mismatch");
    },

    //Validate on clicking "Teacher Training" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_4: function () {
        sts = dashboardPage.clickExploreResource("Teacher Training");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Teacher Training", "Active tab name status Mismatch");
    },

    //Validate on clicking "Today in Class" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_5: function () {
        sts = dashboardPage.clickExploreResource("Today in Class");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Today in Class", "Active tab name status Mismatch");
    },

    //Validate on clicking "Projectable" resource in Explore menu, same tab is launched on Browse
    ENG_DASH_TC_6: function () {
        sts = dashboardPage.clickExploreResource("Projectable");
        assertion.assertEqual(sts, true, "Dashboard page status mismatch");
        sts = browsePage.isInitialized();
        assertion.assertEqual(sts.pageStatus, true, "Browse page status mismatch");
        sts = browsePage.getActiveTabName();
        assertion.assertEqual(sts, "Projectable", "Active tab name status Mismatch");
    },

    //Validate on clicking Book Ellipses, dropdown menu is launched
    ENG_DASH_TC_7: function(){
        sts = dashboardPage.clickViewBookEllipses("PROYECTOS");
        assertion.assertEqual(sts, true);
    },
    //Validate on clicking "View Classes" from Book dropdown menu, class Pane is launched
    ENG_DASH_TC_8: function(){
        sts = dashboardPage.clickMenuViewClass("PROYECTOS");
        assertion.assertEqual(sts.instructorMyClassData.pageStatus, true);
    },

    //Validate on clicking "Create Classes" from Book dropdown menu, create class page is launched
    ENG_DASH_TC_9: function(){
        sts = dashboardPage.clickMenuCreateClass("PROYECTOS");
        assertion.assertEqual(sts.pageStatus, true);
    },

    //Validate on clicking "Remove from My Books" from Book dropdown menu, not active snackbar message is displayed
    ENG_DASH_TC_10: function(){
        sts = dashboardPage.clickMenuRemoveBook("PROYECTOS");
        console.log(JSON.stringify(sts));
        assertion.assertEqual(sts, true);
    },

    //Validate on clicking "Open Flipbook" from Book dropdown menu, flipbook page is launched
    ENG_DASH_TC_11: function(testdata){
        sts = dashboardPage.clickMenuOpenFlipbook(testdata.bookName);
        console.log(JSON.stringify(sts));
        assertion.assertEqual(sts, true);
    }
};
