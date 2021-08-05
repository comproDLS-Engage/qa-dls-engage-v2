"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
const createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
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
			assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts))

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
			//assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
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
			//assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			//bookData
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "My Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_6: function (testdata) {
		sts = addBookPage.click_MyBooks_Tab()
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

	//Validate the "All Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_7: function (testdata) {
		sts = addBookPage.click_AllBooks_Tab()
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
	//Validate that create class page is launched after click on add to class button
	ENG_ADDBOOK_TC_8: function (testdata) {

		sts = addBookPage.click_AddtoClass_Button()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the create class page is launched and book is not chnaged after click on Cancel and go Back button
	ENG_ADDBOOK_TC_9: function () {
		sts = createClassPage.isInitialized();
		var existingbookTitle = sts.bookTitle;
		sts = createClassPage.click_AddANewBook_Button();
		assertion.assertEqual(sts.pageStatus, true, "Add Book Page not launched: " + JSON.stringify(sts))
		sts = addBookPage.click_CancelAndGoBack_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, existingbookTitle, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the create class page is launched and no book is added after click on Cancel and go Back button
	ENG_ADDBOOK_TC_10: function (testdata) {
		sts = addBookPage.click_CancelAndGoBack_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, null, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, false, "Book Icon is mismatched: " + JSON.stringify(sts))
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
			assertion.assertEqual(sts.noBooklbl, testdata.noBookerror, "Botton book label is not matched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is added on clicking of add book button of a specific book
	ENG_ADDBOOK_TC_12: function (testdata) {
		sts = addBookPage.click_addBook(testdata[0])
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata[1].addedBookbtntxt, "My Books Tab is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the book details in bottom lable when book is added
	ENG_ADDBOOK_TC_13: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookAddedlbl, testdata[0].bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, testdata[1], "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, true, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is remove from class when click on cross icon on bottom lable
	ENG_ADDBOOK_TC_14: function (testdata) {
		sts = addBookPage.clickBookDeleteIcon()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata.addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedlbl, sts.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is removed after clicking on "Added" button of a book which is already added
	ENG_ADDBOOK_TC_15: function (testdata) {
		sts = addBookPage.click_addBook(testdata[1])
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].bookTitle, testdata[1], "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata[0].addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.noBooklbl, testdata[0].noBooklbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the error message when click on add to class button  without adding any class
	ENG_ADDBOOK_TC_16: function () {
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
			assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			assertion.assertEqual(sts.noBookTitle, null, "No Book Title is mismatched " + JSON.stringify(sts.noBookTitle))
			assertion.assertEqual(sts.noBookSubTitle, null, "No Book SubTitle is mismatched: " + JSON.stringify(sts.noBookSubTitle))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that clicking on Book Thmbnail launches the book View page
	ENG_ADDBOOK_TC_20: function (testdata) {

		sts = addBookPage.clickOnBook(testdata[1].name);

		assertion.assertEqual(sts.bookCover, true, "Book Cover Not displayed");
		assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Title Mismatch");
		assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch");
		assertion.assertEqual(sts.viewClass, testdata[0].viewClasses, "View Class Text Mismatch");
		assertion.assertEqual(sts.openFlipbook_btn, testdata[0].openFlipbook, "Open Flipbook Button text Mismatch");
	},
	//Validate that clicking on '+' button adds the book to My Books
	ENG_ADDBOOK_TC_21: function (testdata) {
		sts = addBookPage.ClickPlusIconofBook(testdata);
		assertion.assertEqual(sts, true, "Book Details Page is launched");
	},
};
