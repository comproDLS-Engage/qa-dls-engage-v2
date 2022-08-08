"use strict";
var unitDetailPage = require('../../pages/engageExperienceApp/viewUnit.page');
var sts;

module.exports = {

    //Validate that clicking on "Open in Flipbook" button on unit Detail View page launches the corresponding unit page in the flipbook
    ENG_BOOK_TC_20: async function () {
        sts = await unitDetailPage.clickOpenInFlipBook();
        await assertion.assertEqual(sts, true, "Open Flipbook button not clicked");
        //assertions to be updated for validating page number of flipbook - Akhil
    },

    //Validate that clicking on Activity on unit detail view page launches the activity
    ENG_BOOK_TC_21: async function (testdata) {
        sts = await unitDetailPage.clickActivity(testdata);
        await assertion.assertEqual(sts, true, "Activity Not Clicked");
        //sts = activityPlayerPage.isInitialized();
        //assertion.assertEqual(sts.checkmyWork_isExists, true, "Check My Work not displayed");
    },


    //Validate that clicking on Next Unit button launches the Next unit of the Current Component
    ENG_BOOK_TC_25: async function (testdata) {
        sts = await unitDetailPage.clickNextUnit();
        //await assertion.assertEqual(sts.unitThumbnail, true, "Unit thumbnail not displayed");
        await assertion.assert(testdata.includes(sts.unitName), "Unit name mismatch");
    },

    //Validate that clicking on Previous Unit button launches the Previous unit of Current Component
    ENG_BOOK_TC_26: async function (testdata) {
        sts = await unitDetailPage.clickPreviousUnit();
        //await assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail not displayed");
        await assertion.assert(testdata.includes(sts.unitName), "Unit name mismatch");
    },

    //Non-Anchor component - Validate that components are not displayed on View Unit page
    ENG_BOOK_TC_28: async function () {
        sts = await unitDetailPage.getViewUnitData();
        await assertion.assertEqual(sts.unitThumbnail, true, "Book cover status mismatch");
        await assertion.assert((sts.component.list.length == 0), "Component list is not empty on View Unit page");
    },

    //Anchor component - Validate that component list is displayed on View Unit page
    ENG_BOOK_TC_34: async function () {
        sts = await unitDetailPage.getViewUnitData();
        await assertion.assertEqual(sts.unitThumbnail, true, "Unit thumbnail status mismatch");
        await assertion.assert((sts.component.list.length > 0), "Component list is empty on View Book page");
    },

    // //to be added in execution json for aula plus 1
    // //Anchor component - Validate that clicking on Next Unit button launches the Next unit of the Anchored component in an indexed book
    // ENG_BOOK_TC_32: async function (testdata) {
    //     sts = unitDetailPage.clickNextUnit();
    //     assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
    //     assertion.assertEqual(sts.unitNumber, testdata.unitNumber, "Number of Activities Mismatch");
    // },

    // //to be added in execution json for aula plus 1
    // //Anchor component - Validate that clicking on Previous Unit button launch the previous unit of component in an indexed book
    // ENG_BOOK_TC_33: async function (testdata) {
    //     sts = unitDetailPage.clickPreviousUnit();
    //     assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
    //     assertion.assertEqual(sts.unitNumber, testdata.unitNumber, "Number of Activities Mismatch");
    // },

    // //Validate that clicking on Activity Screen breadcrumb naviagtes to Unit detail TOC page
    // ENG_BOOK_TC_43: async function (testdata) {
    //     appShell.ENG_SHELL_TC_11();

    //     sts = unitDetailPage.isInitialized();
    //     assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
    //     assertion.assertEqual(sts.activityList.length, testdata.length, "Number of Activities Mismatch");

    // },

    //Validate that clicking on unit Detail TOC breadcrumb naviagtes to Book detail TOC page
    ENG_BOOK_TC_44: async function () {
        let appShell = require('./appShell.test');
        await appShell.ENG_SHELL_TC_11();
        let viewBookPage = require('../../pages/engageExperienceApp/viewBook.page')
        sts = await viewBookPage.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "View Book page status mismatch");
    },

    /*//Validate that clicking on Activity Screen breadcrumb naviagtes to Book Detail TOC page 
    ENG_BOOK_TC_45: async function (testdata) { //this TC is not required - Akhil
        appShell.ENG_SHELL_TC_11();

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.bookCover, true, "Book Cover Not displayed");
        assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Title Mismatch");
        assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch");
        assertion.assertEqual(sts.viewClass, testdata[0].viewClasses, "View Class Text Mismatch");
        assertion.assertEqual(sts.openFlipbook_btn, testdata[0].openFlipbook, "Open Flipbook Button text Mismatch");
    },*/

    //Validate that clicking on the subfolder expand/collapse the subfolder
    ENG_BOOK_TC_53: async function (testdata) {
        sts = await unitDetailPage.expandCollapseFolder(testdata);
        await assertion.assertEqual(sts, true, "folder not found: ");
    },

    //Anchor component (non indexed) - Validate that components are not displayed on View Unit page
    ENG_BOOK_TC_55: async function () {
        sts = await unitDetailPage.getViewUnitData();
        await assertion.assertEqual(sts.unitThumbnail, true, "Book cover status mismatch");
        await assertion.assert((sts.component.list.length == 0), "Component list is not empty on View Unit page");
    },

};