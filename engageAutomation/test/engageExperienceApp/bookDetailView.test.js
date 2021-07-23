"use strict";
var bookDetailPage = require('../../pages/engageExperienceApp/bookDetail.page.js');
var unitDetailPage = require('../../pages/engageExperienceApp/unitDetail.page.js');
var activityPlayerPage = require('../../pages/engageExperienceApp/activityPlayer.page.js');

var sts;

module.exports = {

    //Validate that "Add to My Books button" is visible on book detail screen if the book has not been added to My Books
    ENG_BKTOC_TC_1: function () {
        sts = bookDetailPage.isInitialized();
        //console.log(sts)
        assertion.assertEqual(sts.addBook_btn.trim(), 'Add to My Books', "Add to My Books button Mismatch");
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
        
        sts = bookDetailPage.closeClassListMenu();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");

    },

    //Validate that clicking on 3 dot options displays View Book Details option if the book has not been added to My Books
    ENG_BKTOC_TC_5 : function (testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");

        sts = bookDetailPage.getMoreOptionsButtonData();
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");
    },

    //Validate that clicking on 3 dot options displays View Book Details and Remove Book options if the book has been added to My books
    ENG_BKTOC_TC_6 : function (testdata) {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");
        

        sts = bookDetailPage.getMoreOptionsButtonData();
        assertion.assertEqual(sts.removeBook, testdata.removefromMyBooks, "Remove from My Books Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, testdata.viewBookDetails, "View Book Details Option Mismatch");

        sts = bookDetailPage.closeMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options Not Closed");

    },

    //Validate that clicking on Remove from My Books launches Remove Book Dialoge box 
    ENG_BKTOC_TC_7 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts,true,"More Options button not clicked");

        sts = bookDetailPage.clickRemoveBook();
        console.log(sts)
        //todo assertions
        assertion.assertEqual(sts, true, "Remove Book Not Clicked");
        
        sts = bookDetailPage.cancelRemoveBookDialog();
        assertion.assertEqual(sts, true, "cancel Remove Book Not Clicked");
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
        
        sts = bookDetailPage.clickOnBreadcrumb();
        assertion.assertEqual(sts.componentList.length,testdata.component.length,"Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle,testdata.name,"Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle,testdata.description,"Book Description Mismatch") 

    },

    //Validate clicking on a unit launches the unit detail view page.
    ENG_BKTOC_TC_12 : function (testdata) {
        console.log(testdata[0])
        sts = bookDetailPage.clickUnit(testdata[0]);
        assertion.assertEqual(sts,true,"Unit Not Clicked");

        sts = unitDetailPage.isInitialized();
        assertion.assertEqual(sts.unitThumbnail,true,"Unit Thumbnail Not displayed");
        assertion.assertEqual(sts.activityList.length,testdata[1].component[0].unit[0].section.length,"Number of Activities Mismatch");
        
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
        assertion.assertEqual(sts,true,"Component Not Clicked");

        sts = bookDetailPage.getChapterListData()
        console.log(sts);
        
    },

    //Validate that clicking on Activity on unit detail view page launches the activity
    ENG_BKTOC_TC_16 : function (testdata) {

        console.log(testdata)

        sts = unitDetailPage.clickActiivty(testdata)
        assertion.assertEqual(sts,true,"Activity Not Clicked");

        sts = activityPlayerPage.isInitialized()
        console.log(sts);

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

    //Validate that clicking on unit Detail TOC breadcrumb naviagtes to Book detail TOC page
    ENG_BKTOC_TC_41 : function () {
        sts = bookDetailPage.clickOnBreadcrumb();
        assertion.assertEqual(sts.componentList.length,testdata.component.length,"Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle,testdata.name,"Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle,testdata.description,"Book Description Mismatch") 

    }

   
};
