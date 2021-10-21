"use strict";
var viewBookPage = require('../../pages/engageExperienceApp/viewBook.page.js');
var sts;

module.exports = {

    //Validate that clicking on more options button for the book displays list of options
    ENG_BOOK_TC_1: function (testdata) {
        sts = viewBookPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");
        if (sts.addBook != null)
            assertion.assertEqual(sts.addBook, testdata.addToMyBooks, "Add Book Option Mismatch");
        else
            assertion.assertEqual(sts.removeBook, testdata.removefromMyBooks, "Remove from My Books Option Mismatch");
        //sts = viewBookPage.closeMoreOptionsButton();
        //assertion.assertEqual(sts, true, "More Options button not clicked");
    },

    //Validate that clicking on "Add to My Books" option in the more options adds the book to My Books section
    ENG_BOOK_TC_2: function () {
        sts = viewBookPage.clickAddBook();
        assertion.assertEqual(sts, true, "My Books label status mismatch");
    },

    //Validate that clicking on View Class button displays the list of classes corresponding to the book
    ENG_BOOK_TC_3: function (testdata) {
        sts = viewBookPage.clickViewClasses();
        assertion.assertEqual(sts.classDrawerHeader, testdata[0] + ' ' + testdata[1], "Class Drawer Header Mismatch");
        /*var classDrawerPage = require('../../pages/engageExperienceApp/classDrawer.page.js');
        sts = classDrawerPage.Click_classDrawerCloseBtn();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");*/
    },

    //Validate that clicking on "Remove from My Books" option launches the remove book pop up
    ENG_BOOK_TC_4: function (testdata) {
        sts = viewBookPage.clickRemoveBook();
        assertion.assertEqual(sts.removeBook_title, testdata[0].removeBookTitle, "Remove Book Pop up Title Mismatch");
        assertion.assertEqual(sts.removeBook_subtitle, testdata[0].message1 + testdata[1].name + testdata[0].message2, "Remove Book Pop up description Mismatch");
        assertion.assertEqual(sts.removeBookDialogCancel, testdata[0].cancel_btn, "Remove Book Pop up Cancel Button Mismatch");
        assertion.assertEqual(sts.removeBookDialogRemove, testdata[0].remove_btn, "Remove Book Pop up Remove Button Mismatch");
    },

    //Validate clicking on Cancel closes the Remove book pop up
    ENG_BOOK_TC_5: function () {
        sts = viewBookPage.clickCancel_RemoveBookDialog();
        assertion.assertEqual(sts, true, "My Books label status mismatch");
    },

    //Validate clicking on Remove on Remove book pop up removes the book from My Books
    ENG_BOOK_TC_6: function () {
        sts = viewBookPage.clickRemove_RemoveBookDialog();
        assertion.assertEqual(sts, true, "My Books label status mismatch");
    },

    //Validate that clicking on "Open Flipbook" button launches the flipbook if single flipbook is associated with the book
    ENG_BOOK_TC_9: function () {
        sts = viewBookPage.clickOpenFlipbook();
        assertion.assertEqual(sts, true, "Open Flipbook button not clicked");
        //assertions to be updated after flipbook page obj - Akhil
    },

    //Validate clicking on a component displays the units asscoiated with the component
    ENG_BOOK_TC_10: function (testdata) {
        var appShell = require('../../pages/engageExperienceApp/appShell.page');
        sts = appShell.selectTab(testdata[0].name);
        assertion.assertEqual(sts, true);
        sts = viewBookPage.getUnitsData();
        assertion.assertEqual(sts.length, testdata[1].length, "Number of units in the component did not match");
    },

    //Validate that 'Continue where you left off' message appears on the view book page
    ENG_BOOK_TC_11: function (testdata) {
        sts = viewBookPage.getViewBookData();
        assertion.assertEqual(sts.lastActivity_lbl, testdata[0].continueWhereYouLeft, "Continue Where You left Off label Mismatch");
        assertion.assertEqual(sts.lastActivity_Dismiss, testdata[0].dismiss_btn, "Continue Where You left Off Dismiss button text Mismatch");
        assertion.assertEqual(sts.lastActivityIcon, true, "Continue Where You left Off Activity Icon not Displayed");
        assertion.assertEqual(sts.lastActivity_name, testdata[1], "Continue Where You left Off Activity Name text Mismatch");
    },

    //Validate that clicking on Continue button launches the last activity viewed by the user
    ENG_BOOK_TC_12: function () {
        sts = viewBookPage.clickOnContinue();
        //assertions to be updated - Akhil
        assertion.assertEqual(sts.checkmyWork_isExists, true, "Check My Work Not Displayed");
    },

    //Validate that clicking on Dismiss button closes the message
    ENG_BOOK_TC_13: function () {
        sts = viewBookPage.clickOnDismiss();
        assertion.assertEqual(sts, true, "Dismiss button Not Clicked");
        sts = viewBookPage.getViewBookData();
        assertion.assertEqual(sts.lastActivity_lbl, null, "Continue Where You Left Off Not Dismissed");
        assertion.assertEqual(sts.lastActivity_icon, null, "Continue Where You Left Off last Activity Icon Displayed");
    },

    // //to be added in execution json
    // //Validate that clicking on 3 dots for a unit displays a list of options.
    // ENG_BOOK_TC_16: function (testdata) {
    //     sts = viewBookPage.clickUnitMoreOptions(testdata[0]);
    //     assertion.assertEqual(sts.openInFlipbook, testdata[1].openInFlipbook, "Open In Flipbook Mismatch");
    //     assertion.assertEqual(sts.viewActivity, testdata[1].viewActivities, "View Activities Mismatch");

    //     /*sts = viewBookPage.closeMoreOptionsButton();
    //     assertion.assertEqual(sts, true, "More Options button not clicked");*/
    // },


    // //Validate that clicking "Open flipbook" option from the 3 dot options for a Unit launches the corresponding flipbook page
    // ENG_BOOK_TC_17: function (testdata) {
    //     sts = viewBookPage.clickUnitOpeninFlipbook(testdata[0]);
    //     assertion.assertEqual(sts, true, "Open Flipbook button not clicked");
    //     //assertions to be updated - Akhil

    //     /*appShell.ENG_SHELL_TC_11();
    //     sts = viewBookPage.getBookViewPageData();
    //     assertion.assertEqual(sts.componentList.length, testdata[1].component.length, "Number of Components Mismatch")
    //     assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Name Mismatch")
    //     assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch")*/
    // },

    //Validate clicking on a unit launches the view unit page
    ENG_BOOK_TC_19: function (testdata) {
        sts = viewBookPage.clickUnit(testdata[0]);
        assertion.assertEqual(sts.pageStatus, true, "View Unit page status mismatch");
        assertion.assertEqual(sts.appShell.header, true, "View Unit page header status mismatch");
    },

    //Non-Anchor Component - Validate that View Book page should display all the components present in the Book
    ENG_BOOK_TC_27: function (testdata) {
        sts = viewBookPage.getViewBookData();
        assertion.assertEqual(sts.bookCover, true, "Book cover status mismatch");
        assertion.assert((sts.componentList.length > 0), "Component list is empty");
    },

    // //Validate the count of folders and activities for a unit on Book view page matches the count on unit detail view page.
    // ENG_BOOK_TC_29: function (testdata) {
    //     sts = viewBookPage.getUnitsData();
    //     //assertions to be updated - Akhil
    // },

    //Anchor Component - Validate that Book Detail view page should display the list of units which are present in the anchored component
    ENG_BOOK_TC_30: function (testdata) {
        sts = viewBookPage.getUnitsData();
        assertion.assertEqual(sts.length, testdata.length, "Number of Units Mismatch");
    },

    /*//Validate that clicking on unit Detail TOC breadcrumb naviagtes to Book detail TOC page
    ENG_BOOK_TC_44: function (testdata) { //this TC is not required - Akhil
        appShell.ENG_SHELL_TC_11();

        sts = viewBookPage.isInitialized();
        assertion.assertEqual(sts.componentList.length, testdata.component.length, "Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle, testdata.name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata.description, "Book Description Mismatch")

    },*/

};