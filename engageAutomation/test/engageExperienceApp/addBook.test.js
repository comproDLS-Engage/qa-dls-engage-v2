"use strict";
var addBook = require('../../pages/engageExperienceApp/addBook.page.js');
var sts;

module.exports = {

    //Validate that clicking on Book Thmbnail launches the book View page
    ENG_ADD_BOOK_TC_1 : function (testdata) {

        sts = addBook.clickOnBook(testdata[1].name);
       
        assertion.assertEqual(sts.bookCover,true,"Book Cover Not displayed");
        assertion.assertEqual(sts.bookTitle,testdata[1].name,"Book Title Mismatch"); 
        assertion.assertEqual(sts.bookSubTitle,testdata[1].description,"Book Description Mismatch"); 
        assertion.assertEqual(sts.viewClass,testdata[0].viewClasses,"View Class Text Mismatch"); 
        assertion.assertEqual(sts.openFlipbook_btn,testdata[0].openFlipbook,"Open Flipbook Button text Mismatch"); 
    }

};
