"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var successClassPage = require('../../pages/engageExperienceApp/successClass.page.js');
var calender = require('../../pages/engageExperienceApp/calender.page.js');
var classDrawerpage = require('../../pages/engageExperienceApp/classDrawer.page.js');
const { add } = require('winston');
const teacherViewClassPage = require('../../pages/engageExperienceApp/teacherViewClass.page.js');
const commonTest = require('./common.test.js');
const { test } = require('../../pages/engageExperienceApp/calender.page.js');
var sts;
module.exports = {



	//Validate the content of add book page in english language .
	ENG_ADDBOOK_TC_1: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subtitle is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "My Books" page content
	ENG_ADDBOOK_TC_4: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.addtoClassbtn))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelAndGoBackbtn))
			assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			//bookData
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "All Books" page content
	ENG_ADDBOOK_TC_5: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'false', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'true', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.addtoClassbtn))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelAndGoBackbtn))
			assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			//bookData
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "My Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_6: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'false', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'true', "All Books Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "All Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_7: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that create class page is launched after click on add to class button
	ENG_ADDBOOK_TC_8: function (testdata) {

		sts = addBookPage.click_AddtoClass_Button()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, testdata.bookTitle, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, testdata.bookIcon, "Book Icon is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the create class page is launched and book is not chnaged after click on Cancel and go Back button
	ENG_ADDBOOK_TC_9: function (testdata) {
		sts = addBookPage.isInitialized()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, testdata.bookTitle, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, testdata.bookIcon, "Book Icon is mismatched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the create class page is launched and no book is added after click on Cancel and go Back button
	ENG_ADDBOOK_TC_10: function (testdata) {
		sts = addBookPage.isInitialized()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, null, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, null, "Book Icon is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_lbl))
			assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_txt))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the bottom label when no book added in a class
	ENG_ADDBOOK_TC_11: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.noBooklbl, sts.noBooklbl, "Botton book label is not matched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is added on clicking of add book button of a specific book
	ENG_ADDBOOK_TC_12: function (testdata) {
		sts = addBookPage.click_addBook(testdata)
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.addBookbtntxt, sts.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the book details in bottom lable when book is added
	ENG_ADDBOOK_TC_13: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookAddedlbl, sts.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, testdata.bookAddedtxt, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebtmIcon, 'true', "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is remove from class when click on cross icon on botton lable
	ENG_ADDBOOK_TC_14: function (testdata) {
		sts = addBookPage.clickBookDeleteIcon()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookList[0].bookTitle, testdata.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookList[0].addBookbtntxt, testdata.addBookbtntxtAdded, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedlbl, sts.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebtmIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is remoeved after clicking on "Added" button of a book which is already added
	ENG_ADDBOOK_TC_15: function (testdata) {
		sts = addBookPage.click_addBook(testdata)
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookList[0].bookTitle, testdata.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookList[0].addBookbtntxt, testdata.addBookbtntxtAdded, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedlbl, sts.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebtmIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the error message when click on add to class button  without adding any class
	ENG_ADDBOOK_TC_16: function (testdata) {
		sts = addBookPage.click_AddtoClass_Button()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.noBooklbl, null, "Error Message is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the content when no book is added on my book tab
	ENG_ADDBOOK_TC_19: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subtitle is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.createBtn_txt))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelBtn_txt))
			assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			assertion.assertEqual(sts.noBookTitle, testdata.noBookTitle, "No Book Title is mismatched " + JSON.stringify(sts.noBookTitle))
			assertion.assertEqual(sts.noBookSubTitle, testdata.noBookSubTitle, "No Book SubTitle is mismatched: " + JSON.stringify(sts.noBookSubTitle))

		} else {
			assertion.assertFail(sts);
		}
	}

};