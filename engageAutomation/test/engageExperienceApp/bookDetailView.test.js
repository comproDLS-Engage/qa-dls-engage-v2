"use strict";
var bookDetailPage = require('../../pages/engageExperienceApp/bookDetail.page.js');
var unitDetailPage = require('../../pages/engageExperienceApp/unitDetail.page.js');
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');
var classDrawerPage = require('../../pages/engageExperienceApp/classDrawer.page.js');
var appShell = require('./appShell.test.js');
var action = require('../../core/actionLibrary/baseActionLibrary.js');

var sts;

module.exports = {


    //Validate that clicking on 3 dot options displays View Book Details and Add Book option if the book has not been added to My Books
    ENG_BOOK_TC_1: function(testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();

        if (sts.addBook_btn != null)
            assertion.assertEqual(sts.addBook_btn, testdata.addToMyBooks, "Add Book Option Mismatch");
        else
            assertion.assertEqual(sts.removeBook, testdata.removefromMyBooks, "Remove from My Books Option Mismatch");

        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts, true, "More Options button not clicked");
    },

    //Validate that clicking on "Add to My Books" button adds the book to My Books section
    ENG_BOOK_TC_2: function(testdata) {
        sts = bookDetailPage.clickAddBook();
        assertion.assertEqual(sts.myBooks_lbl, testdata.myBooks, "My Books label Mismatch");
    },

    //Validate that clicking on View Class button displays the list of classes corresponding to the book
    ENG_BOOK_TC_3: function(testdata) {
        sts = bookDetailPage.clickViewClasses();
        assertion.assertEqual(sts.classDrawerHeader, testdata[0] + ' ' + testdata[1], "Class Drawer Header Mismatch");

        sts = classDrawerPage.Click_classDrawerCloseBtn();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");
    },

    //todo
    //Validate that clicking on Remove Book option launches the remove book pop up
    ENG_BOOK_TC_4: function(testdata) {
        sts = bookDetailPage.clickRemoveBook();
        
        assertion.assertEqual(sts.removeBook_title, testdata[0].removeBookTitle, "Remove Book Pop up Title Mismatch");
        assertion.assertEqual(sts.removeBook_subtitle, testdata[0].message1 + testdata[1].name + testdata[0].message2, "Remove Book Pop up description Mismatch");
        assertion.assertEqual(sts.removeBookDialogCancel, testdata[0].cancel_btn, "Remove Book Pop up Cancel Button Mismatch");
        assertion.assertEqual(sts.removeBookDialogRemove, testdata[0].remove_btn, "Remove Book Pop up Remove Button Mismatch");
        
    },

    //Validate clicking on Cancel closes the Remove book pop up
    ENG_BOOK_TC_5: function(testdata) {
        sts = bookDetailPage.clickCancel_RemoveBookDialog();
        assertion.assertEqual(sts.myBooks_lbl, testdata.myBooks, "My Books label Mismatch");

    },

    //Validate clicking on Remove on Remove book pop up removes the book from My Books
    ENG_BOOK_TC_6: function() {
        sts = bookDetailPage.clickRemove_RemoveBookDialog();

        assertion.assertEqual(sts.bookCover, true, "Book Cover Not displayed");
        assertion.assertEqual(sts.myBooks_lbl, null, "My Books label Mismatch");

    },

    //Validate that clicking on "Open Flipbook" button launches the flipbook if single flipbook is associated with the book
    ENG_BOOK_TC_9: function(testdata) {
        sts = bookDetailPage.clickOpenFlipbook();
        assertion.assertEqual(sts, true, "Open Flipbook button not clicked");

        appShell.ENG_SHELL_TC_11();

        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.componentList.length, testdata.component.length, "Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle, testdata.name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata.description, "Book Description Mismatch")

    },


    //Validate clicking on a component displays the units asscoiated with the component
    ENG_BOOK_TC_10: function(testdata) {
        sts = bookDetailPage.clickComponent(testdata.name);

        if(sts[0].chapterNumber != null)
            assertion.assertEqual(sts[0].chapterNumber + " " + sts[0].chapterTitle, testdata.unit[0].title, "Chapter Name Mismatch")
        else
            assertion.assertEqual(sts[0].chapterTitle, testdata.unit[0].title, "Chapter Name Mismatch")

        assertion.assertEqual(sts[0].chapterCoverImg, true, "Chapter Cover Image Not Displayed")

    },

    //Validate that 'Continue where you left off' message appears on the book Detail View page.
    ENG_BOOK_TC_11: function(testdata) {
        sts = bookDetailPage.getBookViewPageData();

        assertion.assertEqual(sts.lastActivity_lbl, testdata[0].continueWhereYouLeft, "Continue Where You left Off label Mismatch");
        assertion.assertEqual(sts.lastActivity_Dismiss, testdata[0].dismiss_btn, "Continue Where You left Off Dismiss button text Mismatch");
        assertion.assertEqual(sts.lastActivityIcon, true, "Continue Where You left Off Activity Icon not Displayed");
        assertion.assertEqual(sts.lastActivity_name, testdata[1], "Continue Where You left Off Activity Name text Mismatch");

    },

    //Validate that Clicking on Continue on 'Continue where you left off' pop up launches the last activity viewed by the user
    ENG_BOOK_TC_12: function(testdata) {
        sts = bookDetailPage.clickOnContinue();
        assertion.assertEqual(sts, true, "Continue button not clicked");

        sts = activityPlayerPage.isInitialized()
        assertion.assertEqual(sts.checkmyWork_isExists, true, "Check My Work Not Displayed");

    },

    //Validate that Clicking on Dismiss on 'Continue where you left off:' closes the pop up.
    ENG_BOOK_TC_13: function() {
        sts = bookDetailPage.clickOnDismiss();
        assertion.assertEqual(sts, true, "Dismiss button Not Clicked");

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.lastActivity_lbl, null, "Continue Where You Left Off Not Dismissed");
        assertion.assertEqual(sts.lastActivityIcon, null, "Continue Where You Left Off last Activity Icon Displayed");

    },

    //to be added in execution json
    //Validate that clicking on 3 dots for a unit displays a list of options.
    ENG_BOOK_TC_16: function(testdata) {
        sts = bookDetailPage.clickUnitMoreOptions(testdata[0]);

        sts = bookDetailPage.get_UnitMoreOptionsButton_Data(sts);
        assertion.assertEqual(sts.openInFlipbook, testdata[1].openInFlipbook, "Open In Flipbook Mismatch");
        assertion.assertEqual(sts.viewActivity, testdata[1].viewActivities, "View Activities Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts, true, "More Options button not clicked");
    },


    //Validate that clicking "Open flipbook" option from the 3 dot options for a Unit launches the corresponding flipbook page
    ENG_BOOK_TC_17: function(testdata) {
        sts = bookDetailPage.clickUnitOpeninFlipbook(testdata[0]);
        assertion.assertEqual(sts, true, "Open Flipbook button not clicked");

        appShell.ENG_SHELL_TC_11();

        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.componentList.length, testdata[1].component.length, "Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch")

    },

    //Validate clicking on a unit launches the unit detail view page.
    ENG_BOOK_TC_19: function(testdata) {
        sts = bookDetailPage.clickUnit(testdata[0]);

        assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length, testdata[1].activity.length, "Number of Activities Mismatch");

    },

    //Validate that clicking on "Open in Flipbook" button on unit Detail View page launches the corresponding unit page in the flipbook
    ENG_BOOK_TC_20: function(testdata) {
        sts = unitDetailPage.clickOpenInFlipBook_unitLevel();
        assertion.assertEqual(sts, true, "Open Flipbook button not clicked");

        appShell.ENG_SHELL_TC_11();

        sts = unitDetailPage.getUnitTOCData();
        console.log(sts)

    },


    //Validate that clicking on Activity on unit detail view page launches the activity
    ENG_BOOK_TC_21: function(testdata) {

        sts = unitDetailPage.clickActiivty(testdata[0])
        assertion.assertEqual(sts, true, "Activity Not Clicked");

        sts = activityPlayerPage.isInitialized()
        assertion.assertEqual(sts.checkmyWork_isExists, true, "Check My Work Not Displayed");

    },

    //Validate the count of folders and activities for a unit on Book view page matches the count on unit detail view page.
    ENG_BOOK_TC_29: function(testdata) {

        sts = bookDetailPage.getBookViewPageData()
        console.log(sts);

        sts = activityPlayerPage.isInitialized()
        assertion.assertEqual(sts.checkmyWork_isExists, true, "Check My Work Not Displayed");

    },


    //Anchor Component - Validate that Book Detail view page should display the list of units which are present in the anchored component
    ENG_BOOK_TC_30: function(testdata) {
        sts = bookDetailPage.getChapterListData();
        assertion.assertEqual(sts.length, testdata.length, "Number of Units Mismatch");
    },

    //to be added in execution json for aula plus 1
    //Anchor component - Validate that clicking on Next Unit button launches the Next unit of the Anchored component in an indexed book
    ENG_BOOK_TC_32: function() {
        sts = unitDetailPage.clickNextUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length, testdata.length, "Number of Activities Mismatch");

    },

    //to be added in execution json for aula plus 1
    //Anchor component - Validate that clicking on Previous Unit button launch the previous unit of component in an indexed book
    ENG_BOOK_TC_33: function() {
        sts = unitDetailPage.clickPreviousUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length, testdata.length, "Number of Activities Mismatch");

    },


    //Validate that clicking on Activity Screen breadcrumb naviagtes to Unit detail TOC page
    ENG_BOOK_TC_43: function(testdata) {
        appShell.ENG_SHELL_TC_11();

        sts = unitDetailPage.isInitialized();
        assertion.assertEqual(sts.unitThumbnail, true, "Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length, testdata.length, "Number of Activities Mismatch");

    },

    //Validate that clicking on unit Detail TOC breadcrumb naviagtes to Book detail TOC page
    ENG_BOOK_TC_44: function(testdata) {
        appShell.ENG_SHELL_TC_11();

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.componentList.length, testdata.component.length, "Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle, testdata.name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata.description, "Book Description Mismatch")

    },

    //Validate that clicking on Activity Screen breadcrumb naviagtes to Book Detail TOC page 
    ENG_BOOK_TC_45: function(testdata) {
        appShell.ENG_SHELL_TC_11();

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.bookCover, true, "Book Cover Not displayed");
        assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Title Mismatch");
        assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch");
        assertion.assertEqual(sts.viewClass, testdata[0].viewClasses, "View Class Text Mismatch");
        assertion.assertEqual(sts.openFlipbook_btn, testdata[0].openFlipbook, "Open Flipbook Button text Mismatch");
    }

};