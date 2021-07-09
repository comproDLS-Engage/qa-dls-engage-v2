"use strict";
var bookDetailPage = require('../../pages/engageExperienceApp/bookDetail.page.js');
var unitDetailPage = require('../../pages/engageExperienceApp/unitDetail.page.js');

var sts;

module.exports = {

    //Validate that "Add to My Books button" is visible on book detail screen if the book has not been added to My Books
    ENG_BKTOC_TC_1: function () {
        sts = bookDetailPage.isInitialized();
        //console.log(sts)
        assertion.assertEqual(sts.addBook_btn.trim(), 'Add to My Books', "Add to My Books button Mismatch");
    },

    //Validate that My Books label is displayed below the Book name if book has been added to My books
    ENG_BKTOC_TC_3: function () {
        sts = bookDetailPage.isInitialized();
        //console.log(sts)
        assertion.assertEqual(sts.myBooks_lbl, 'My Books', "My Books label Mismatch");
    },

    //Validate that clicking on View Class button launches the list of classes corresponding to the book
    ENG_BKTOC_TC_4: function () {
        sts = bookDetailPage.clickViewClasses();
        assertion.assertEqual(sts.classDrawerHeader, "Aula Plus 1 (For DEV2 - DONT TOUCH) Classes", "Class Drawer Header Mismatch");
        //tbd other assertions
        sts = bookDetailPage.closeClassListMenu();
         assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");

    },

    //Validate that clicking on 3 dot options displays View Book Details option if the book has not been added to My Books
    ENG_BKTOC_TC_5 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.viewBookDetails, "View Book Details", "View Book Details Option Mismatch");
    },

    //Validate that clicking on 3 dot options displays View Book Details and Remove Book options if the book has been added to My books
    ENG_BKTOC_TC_6 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        assertion.assertEqual(sts.removeBook, "Remove from My Books", "Remove from My Books Option Mismatch");
        assertion.assertEqual(sts.viewBookDetails, "View Book Details", "View Book Details Option Mismatch");
    },

    //Validate that clicking on Remove from My Books launches Remove Book Dialoge box 
    ENG_BKTOC_TC_7 : function () {
        sts = bookDetailPage.clickRemoveBook();
        assertion.assertEqual(sts, true, "Remove Book Not Clicked");
        
        sts = bookDetailPage.cancelRemoveBookDialog();
        assertion.assertEqual(sts, true, "cancel Remove Book Not Clicked");
    },

    //Validate that clicking on View Book details launches snackbar with Feature Coming Soon message 
    ENG_BKTOC_TC_8 : function () {
        sts = bookDetailPage.clickMoreOptionsButton();
        
        sts = bookDetailPage.clickViewBookDetails();
        assertion.assertEqual(sts, true, "cancel Remove Book Not Clicked");

        sts = require('./common.test.js').get_Snackbar_Message_Text();
        assertion.assertEqual(sts, "Not Available or Active in this version.", "Snackbar Message Mismatch");

    },

    //Validate that clicking on "Open Flipbook" button launches the flipbook if single flipbook is associated with the book
    ENG_BKTOC_TC_11 : function () {
        sts = bookDetailPage.clickOpenFlipbook();
        console.log(sts);

    },

    //Validate clicking on a unit launches the unit detail view page.
    ENG_BKTOC_TC_12 : function () {
        sts = bookDetailPage.clickUnit("En el aula");
        console.log(sts);

        sts = unitDetailPage.isInitialized();
        //console.log(sts)
    },

    //Validate that clicking "Open flipbook" option from the 3 dot options for a Unit launches the corresponding flipbook page
    ENG_BKTOC_TC_13 : function () {
        sts = bookDetailPage.clickUnitOpeninFlipbook("En el aula");
        console.log(sts);

    },

    //Anchor Component - Validate that Book Detail view page should display the list of units which are present of anchor component
    ENG_BKTOC_TC_18 : function () {
        sts = bookDetailPage.getChapterListData();
        //console.log(sts);
    },

    // Anchor component - Validate that clicking on Next Unit button launches the Next unit of the Anchor component
    ENG_BKTOC_TC_20 : function () {
        sts = unitDetailPage.clickNextUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        //console.log(sts)

    },

    // Anchor component - Validate that clicking on Previous Unit button launch the previous unit of Anchor component
    ENG_BKTOC_TC_21 : function () {
        sts = unitDetailPage.clickPreviousUnit();
        console.log(sts);

        sts = unitDetailPage.isInitialized()
        //console.log(sts)

    },

    //Validate clicking on a component displays the units /chapters associated with the component
    // ENG_BKTOC_TC_16 : function () {
    //     sts = bookDetailPage.getChapterListData();
    //     console.log(sts);

    // },


   
};
