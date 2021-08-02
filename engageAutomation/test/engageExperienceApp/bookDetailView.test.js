"use strict";
var bookDetailPage = require('../../pages/engageExperienceApp/bookDetail.page.js');
var unitDetailPage = require('../../pages/engageExperienceApp/unitDetail.page.js');
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');
var classDrawerPage = require('../../pages/engageExperienceApp/classDrawer.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page.js');
var action = require('../../core/actionLibrary/baseActionLibrary.js');

var sts;

module.exports = {

    //Validate that "Add to My Books button" is visible on book detail screen if the book has not been added to My Books
    ENG_BKTOC_TC_1: function (testdata) {
        sts = bookDetailPage.isInitialized();
        //console.log(sts)
        assertion.assertEqual(sts.addBook_btn.trim(), testdata.addToMyBooks, "Add to My Books button Mismatch");
    },

    //Validate that clicking on "Add to My Books" button adds the book to My Books section
    ENG_BKTOC_TC_2: function (testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.addBook, testdata.addToMyBooks, "Add Book Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.clickAddBook();
        assertion.assertEqual(sts, true, "Add Book Not Clicked");
        
        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.myBooks_lbl, testdata.myBooks, "My Books label Mismatch");
    },

    //Validate that My Books label is displayed below the Book name if book has been added to My books
    ENG_BKTOC_TC_3: function (testdata) {
        sts = bookDetailPage.isInitialized();
        //console.log(sts)
        assertion.assertEqual(sts.myBooks_lbl, testdata.myBooks, "My Books label Mismatch");
    },

    //Validate that clicking on View Class button launches the list of classes corresponding to the book
    ENG_BKTOC_TC_4: function (testdata) {
        sts = bookDetailPage.clickViewClasses();
        assertion.assertEqual(sts.classDrawerHeader, testdata[0]+' '+testdata[1], "Class Drawer Header Mismatch");
        
        sts = classDrawerPage.closeClassListMenu();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");

    },

    //Validate that clicking on 3 dot options displays View Book Details and Add Book option if the book has not been added to My Books
    ENG_BKTOC_TC_5 : function (testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.addBook, testdata.addToMyBooks, "Add Book Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");
    },

    //Validate that clicking on 3 dot options displays View Book Details and Remove Book options if the book has been added to My books
    ENG_BKTOC_TC_6 : function (testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.removeBook, testdata.removefromMyBooks, "Remove from My Books Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options Not Closed");

    },

    //Validate that clicking on Remove from My Books launches Remove Book Dialoge box 
    ENG_BKTOC_TC_7 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.removeBook, testdata.removefromMyBooks, "Remove from My Books Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.clickRemoveBook();
        console.log(sts)
        //todo assertions for remove book data
        assertion.assertEqual(sts, true, "Remove Book Not Clicked");
        
    },

    //Validate clicking on Cancel on Remove book closes the Remove book pop up
    ENG_BKTOC_TC_44 : function (testdata) {
        sts = bookDetailPage.clickCancel_RemoveBookDialog();
        assertion.assertEqual(sts, true, "cancel Remove Book Not Clicked");

        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.myBooks_lbl, testdata.myBooks, "My Books label Mismatch");
    },


    //Validate clicking on Remove on Remove book pop up removes the book from My Books
    ENG_BKTOC_TC_45 : function (testdata) {
        sts = bookDetailPage.clickRemove_RemoveBookDialog();
        assertion.assertEqual(sts, true, "cancel Remove Book Not Clicked");

        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.addBook_btn.trim(), testdata.addToMyBooks, "Add to My Books button Mismatch");
    },

    //Validate that clicking on View Book details launches snackbar with Feature Coming Soon message 
    ENG_BKTOC_TC_8 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");
        
        sts = bookDetailPage.clickViewBookDetails();
        assertion.assertEqual(sts, true, "View Book Detail Not Clicked");

        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, "Feature not available or active for this version.", "Snackbar Message Mismatch");

    },

    //Validate that clicking on "Open Flipbook" button launches the flipbook if single flipbook is associated with the book
    ENG_BKTOC_TC_11 : function (testdata) {
        sts = bookDetailPage.clickOpenFlipbook();
        assertion.assertEqual(sts,true,"Open Flipbook button not clicked");
        
        sts = appShell.clickOnBreadcrumb();
        assertion.assertEqual(sts,true,"Breadcrumb not clicked");

        sts = bookDetailPage.getBookViewPageData();
        assertion.assertEqual(sts.componentList.length,testdata.component.length,"Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle,testdata.name,"Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle,testdata.description,"Book Description Mismatch") 

    },

    //Validate clicking on a unit launches the unit detail view page.
    ENG_BKTOC_TC_12 : function (testdata) {
        sts = bookDetailPage.clickUnit(testdata[0]);

        assertion.assertEqual(sts.unitThumbnail,true,"Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length,testdata[1].activity.length,"Number of Activities Mismatch");
        
    },

    //Validate that clicking "Open flipbook" option from the 3 dot options for a Unit launches the corresponding flipbook page
    ENG_BKTOC_TC_13 : function (testdata) {
        sts = bookDetailPage.clickUnitOpeninFlipbook(testdata[0]);
        assertion.assertEqual(sts,true,"Open Flipbook button not clicked");

        sts = bookDetailPage.clickOnBreadcrumb();
        assertion.assertEqual(sts.componentList.length,testdata[1].component.length,"Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle,testdata[1].name,"Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle,testdata[1].description,"Book Description Mismatch")        

    },

    //Validate clicking on a component displays the units /chapters asscoiated with the component
    ENG_BKTOC_TC_15 : function (testdata) {
        sts = bookDetailPage.clickComponent(testdata.name);
        assertion.assertEqual(sts[0].chapterNumber+ " " + sts[0].chapterTitle,testdata.unit[0].title,"Chapter Name Mismatch")
        assertion.assertEqual(sts[0].chapterCoverImg,true,"Chapter Cover Image Not Displayed")
        
    },

    //Validate that clicking on Activity on unit detail view page launches the activity
    ENG_BKTOC_TC_16 : function (testdata) {

        sts = unitDetailPage.clickActiivty(testdata[0])
        assertion.assertEqual(sts,true,"Activity Not Clicked");

        sts = activityPlayerPage.isInitialized()
        assertion.assertEqual(sts.breadCrumbData.breadCrumbTitle, testdata[1].unit[0].title.replace(".", ":")+" | "+testdata[1].name,"Header breadcrumb Mismatch");

    },

    //Anchor Component - Validate that Book Detail view page should display the list of units which are present of anchor component
    ENG_BKTOC_TC_18 : function (testdata) {
        sts = bookDetailPage.getChapterListData();
        assertion.assertEqual(sts.length,testdata.length,"Number of Units Mismatch");
    },

    // Anchor component - Validate that clicking on Next Unit button launches the Next unit of the Anchor component
    ENG_BKTOC_TC_20 : function () {
        sts = unitDetailPage.clickNextUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        //todo
        //console.log(sts)

    },

    // Anchor component - Validate that clicking on Previous Unit button launch the previous unit of Anchor component
    ENG_BKTOC_TC_21 : function () {
        sts = unitDetailPage.clickPreviousUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        //todo
        //console.log(sts)

    }, 

    //Validate that 'Continue where you left off' message appears on the book Detail View page.
    ENG_BKTOC_TC_38 : function (testdata) {
        sts = bookDetailPage.getBookViewPageData();
        
        assertion.assertEqual(sts.lastActivity_lbl, testdata[0].continueWhereYouLeft,"Continue Where You left Off label Mismatch");
        assertion.assertEqual(sts.lastActivity_Dismiss, testdata[0].dismiss_btn,"Continue Where You left Off Dismiss button text Mismatch");
        assertion.assertEqual(sts.lastActivityIcon, true,"Continue Where You left Off Activity Icon not Displayed");
        assertion.assertEqual(sts.lastActivity_name, testdata[1],"Continue Where You left Off Activity Name text Mismatch");   

    },

    //Validate that Clicking on Continue on 'Continue where you left off' pop up launches the last activity viewed by the student
    ENG_BKTOC_TC_39 : function (testdata) {
        sts = bookDetailPage.clickOnContinue();
        assertion.assertEqual(sts,true,"Continue button not clicked");

        sts = activityPlayerPage.isInitialized()
        assertion.assertEqual(sts.breadCrumbData.breadCrumbTitle, testdata.unit[0].title.replace(".", ":")+" | "+testdata.name,"Header breadcrumb Mismatch");

    },

    //Validate that Clicking on Dismiss on 'Continue where you left off:' closes the pop up.
    ENG_BKTOC_TC_40 : function () {
        sts = bookDetailPage.clickOnDismiss();
        assertion.assertEqual(sts,true,"Dismiss button Not Clicked");

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.lastActivity_lbl,null,"Continue Where You Left Off Not Dismissed");
        assertion.assertEqual(sts.lastActivityIcon,null,"Continue Where You Left Off last Activity Icon Displayed");

        

    },  

    //Validate that clicking on unit Detail TOC breadcrumb naviagtes to Book detail TOC page
    ENG_BKTOC_TC_41 : function (testdata) {
        sts = bookDetailPage.clickOnBreadcrumb();
        assertion.assertEqual(sts.componentList.length,testdata.component.length,"Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle,testdata.name,"Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle,testdata.description,"Book Description Mismatch") 

    },

    //Validate that clicking on Activity Screen breadcrumb naviagtes to Unit detail TOC page
    ENG_BKTOC_TC_42 : function (testdata) {
        sts = activityPlayerPage.clickOnBreadcrumb();
        assertion.assertEqual(sts,true,"Activity Breadcrumb Not Clicked");

        sts = unitDetailPage.isInitialized();
        assertion.assertEqual(sts.unitThumbnail,true,"Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length,testdata.activity.length,"Number of Activities Mismatch"); 

    },

    //Validate that clicking on Activity Screen breadcrumb naviagtes to Book Detail TOC page 
    ENG_BKTOC_TC_43 : function (testdata) {
        sts = activityPlayerPage.clickOnBreadcrumb();
        assertion.assertEqual(sts,true,"Activity Breadcrumb Not Clicked");

        sts = bookDetailPage.isInitialized();
        assertion.assertEqual(sts.bookCover,true,"Book Cover Not displayed");
        assertion.assertEqual(sts.bookTitle,testdata[1].name,"Book Title Mismatch"); 
        assertion.assertEqual(sts.bookSubTitle,testdata[1].description,"Book Description Mismatch"); 
        assertion.assertEqual(sts.viewClass,testdata[0].viewClasses,"View Class Text Mismatch"); 
        assertion.assertEqual(sts.myBooks_lbl,testdata[0].myBooks,"My Books Label Mismatch"); 
        assertion.assertEqual(sts.openFlipbook_btn,testdata[0].openFlipbook,"Open Flipbook Button text Mismatch"); 
    },

    //copied
    // View book page (not added)
    ENG_DIF_TC_5: function () {
        var res = action.click("[title='QA Test Automation Book [DO NOT MODIFY]']");
        //console.log(res)
        res = action.waitForDisplayed("[data-tid=image-chapter-0]");
        //console.log(res)
        //action.click("[data-tid=button-product-2]");
        //res = action.waitForDisplayed("[data-tid=button-next-unit]");
        //console.log(res)
    },

   
};
