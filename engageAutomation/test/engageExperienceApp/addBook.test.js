"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var browsePage = require('../../pages/engageExperienceApp/browse.page');
const createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var sts;

module.exports = {
    
    /*//Validate that clicking on Open flipbook displays a list of flipbooks associated with the book
    ENG_ADDBOOK_TC_27: function (testdata) {
        sts = addBookPage.clickOpenFlipbook();
        assertion.assertEqual(sts.length, testdata.length, "Number of Flipbooks Mismatch");
    },*/

    /*//Validate that clicking on a page number launches the list of books 
    ENG_ADDBOOK_TC_29: function (testdata) {
        sts = addBookPage.goToPageNumber(testdata[0]);

        assertion.assertEqual(sts.pageTitle, testdata[1].pageTitle, "Page title Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.pageSubTitle, testdata[1].pageDescription, "Page subtitle Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")
        assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")
        assertion.assertEqual(sts.bookInfo.moreOptions, true, "More Options Not Displayed ")
        assertion.assertEqual(sts.tabsList.list[0], testdata[1].tab_0, "Books Tab Text Mismatch")
        assertion.assertEqual(sts.tabsList.selected, testdata[1].tab_0, "Books Tab Not Selected")

    },*/

    /*//Validate that clicking on next arrow launches the next page in books tab
    ENG_ADDBOOK_TC_30: function (testdata) {
        sts = addBookPage.clickNextArrowButton();

        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title Mismatch:")
        assertion.assertEqual(sts.pageSubTitle, testdata.pageDescription, "Page subtitle Mismatch:")
        assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")
        assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")

    },*/

    /***********************Class Workflow ****************************************************/

    //Validate the content of add book page launched from Class workflow -- needs to be updated.
    ENG_ADDBOOK_TC_44: function (testdata) {
        sts = addBookPage.getAddBookPageData();
        //assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle[2], "pageTitle mismatch");
        assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[2], "pageSubTitle mismatch");
        assertion.assertEqual(sts.searchBox, null, "searchBox Text Mismatch");
        assertion.assertEqual(sts.searchIcon, null, "searchIcon status mismatch");
        assertion.assertEqual(sts.filtersBtn, null, "filtersBtn mismatch");

        assertion.assertEqual(sts.tabsList.selected, testdata.myBooksTab, "My BooksTab is not selected: " + JSON.stringify(sts))
        assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts))

        sts = browsePage.getData_bookList();
        assertion.assertEqual(sts[0].viewBtn, null, "viewBtn mismatch");
        assertion.assertEqual(sts[0].addBookBtn, testdata.addBookBtn[1], "addBookBtn mismatch");
    },

    //Validate the "My Books" page content
    ENG_ADDBOOK_TC_4: function (testdata) {
        sts = addBookPage.isInitialized()
        //console.log(sts)
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.tabsList.list[0], testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[1], testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.selected, testdata.myBooksTab, "My BooksTab is not selected: " + JSON.stringify(sts))
            // assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
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
            assertion.assertEqual(sts.tabsList.list[0], testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[1], testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.selected, testdata.allBooksTab, "All BooksTab is not selected: " + JSON.stringify(sts))
            //   assertion.assertEqual(sts.myBooksTabSelected, 'false', "My BooksTab is not selected: " + JSON.stringify(sts))
            //  assertion.assertEqual(sts.allBooksTabSelected, 'true', "All Books Tab is selected: " + JSON.stringify(sts))
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
        sts = appShellPage.selectTab(testdata.myBooksTab)
        //console.log(sts)
        sts = addBookPage.isInitialized()
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.tabsList.list[0], testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[1], testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.selected, testdata.myBooksTab, "All BooksTab is not selected: " + JSON.stringify(sts))
            // assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the "All Books" tab selected when click on my book tab
    ENG_ADDBOOK_TC_7: function (testdata) {
        sts = appShellPage.selectTab(testdata.allBooksTab)
        //console.log(sts)
        sts = addBookPage.isInitialized()
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.tabsList.list[0], testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[1], testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.selected, testdata.allBooksTab, "My BooksTab is not selected: " + JSON.stringify(sts))
        } else {
            assertion.assertFail(sts);
        }
    },


    //Validate that create class page is launched after click on add to class button
    ENG_ADDBOOK_TC_8: function (testdata) {

        sts = addBookPage.click_AddtoClass_Button()
        sts = createClassPage.isInitialized();
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
        sts = createClassPage.isInitialized();
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
        assertion.assertEqual(sts, true, "Cancel Button is not clicked: ", sts)
        sts = createClassPage.isInitialized();
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
        // console.log(sts)
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.noBooklblError, testdata.noBookerror, "Botton book label is not matched: " + JSON.stringify(sts))
        } else {
            assertion.assertFail(sts);
        }
    },

    //check instructor classtest.json
    //Validate the book is added on clicking of add book button of a specific book
    ENG_ADDBOOK_TC_12: function (testdata) {
        sts = addBookPage.click_addBook(testdata[0])
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.addBookbtntxt, testdata[1].addedBookbtntxt, "My Books Tab is mismatched: " + JSON.stringify(sts))
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
        // console.log(sts)
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.bookInfo.addBookbtntxt, testdata.addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
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
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.booksList[0].bookTitle, testdata[1], "Book label is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.bookInfo.addBookbtntxt, testdata[0].addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.noBooklbl, testdata[0].noBooklbl, "Book label is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.bookdeletebottomIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the error message when click on add to class button  without adding any class
    ENG_ADDBOOK_TC_16: function (testdata) {
        sts = addBookPage.click_AddtoClass_Button()
        assertion.assertEqual(sts, true, "Add to Class button is not clicked: " + JSON.stringify(sts))
        sts = addBookPage.isInitialized();
        //console.log(sts)
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.noBooklblError, testdata.noBookerror, "Error Message is mismatched: " + JSON.stringify(sts))
        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the content when no book is added on my book tab
    ENG_ADDBOOK_TC_19: function (testdata) {
        sts = addBookPage.isInitialized()
        // console.log(sts)
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title is Not Displayed: " + JSON.stringify(sts))
            assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subtitle is Not Displayed: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[0], testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.list[1], testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
            assertion.assertEqual(sts.tabsList.selected, testdata.myBooksTab, "All BooksTab is not selected: " + JSON.stringify(sts))
            assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.createBtn_txt))
            assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelBtn_txt))
            assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
            assertion.assertEqual(sts.booksList.undefined.noBookTitle, testdata.noBookTitle, "No Book Title is mismatched " + JSON.stringify(sts.noBookTitle))
            assertion.assertEqual(sts.booksList.undefined.noBookSubTitle, testdata.noBookSubTitle, "No Book SubTitle is mismatched: " + JSON.stringify(sts.noBookSubTitle))

        } else {
            assertion.assertFail(sts);
        }
    },
    /***********************Class Workflow  - END ****************************************************/


    /****************************Search Testcases*************************************************/

    /*//Validate that the serach for partial text book.
    ENG_ADDBOOK_TC_35: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList.length, testdata[0].searchResultCount, "Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata[1].name, "Book Title Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookSubTitle, testdata[1].description, "Book SubTitle Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " + testdata[2].result, "Serach Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Serach Pill Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.clearSearch()
        assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

    },

    //Validate that the serach for complete text of resource's name
    ENG_ADDBOOK_TC_36: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList.length, testdata[0].searchResultCount, "Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata[1].name, "Book Title Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookSubTitle, testdata[1].description, "Book SubTitle Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " + testdata[2].result, "Serach Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Serach Pill Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.clearSearch()
        assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

    },

    //Validate the search for alpha numeric text
    ENG_ADDBOOK_TC_37: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList.length, testdata[0].searchResultCount, "Count Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " + testdata[2].results, "Serach Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Serach Pill Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.clearSearch()
        assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

    },

    //Validate that No Result Found screen is displayed when no resource matching the search crietria is fulfilled
    ENG_ADDBOOK_TC_39: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.getSearchList();
        assertion.assertEqual(sts[0].noItemFoundTitle, testdata[1].noItemFoundTitle, "No Books Found Text Dropdown Mismatch")

        sts = addBookPage.pressEnter()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchData.search_NoResult_title, testdata[1].noResultFound.title, "No Result Found Title Mismatch")
        assertion.assertEqual(sts.searchData.search_NoResult_subTitle, testdata[1].noResultFound.subTitle, "No Result Found Sub-Title Mismatch")

        sts = addBookPage.clearSearch()
        assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

    },

    //Validate that clicking on close search pill icon, the search results are cleared
    ENG_ADDBOOK_TC_40: function (testdata) {

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed:")
        assertion.assertEqual(sts.searchPill, null, "Serach Pill Displayed:")

        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList.length, testdata[0].searchResultCount, "Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata[1].name, "Book Title Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.booksList[0].bookSubTitle, testdata[1].description, "Book SubTitle Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " + testdata[2].result, "Serach Count Mismatch: " + JSON.stringify(sts))
        assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Serach Pill Mismatch: " + JSON.stringify(sts))

        sts = addBookPage.clearSearchPill()
        assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

        sts = addBookPage.getSearchData()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed:")
        assertion.assertEqual(sts.searchPill, null, "Serach Pill After Close Pill Action Displayed:")

    },

    //Validate that clicking on a resource from the search suggestion drop down list launches the resource.
    ENG_ADDBOOK_TC_41: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata[0].search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.getSearchList();
        assertion.assertEqual(sts[0], testdata[1].name, "No Books Found Mismatch")

        sts = addBookPage.clickOnSearchSuggestion(testdata[1].name)
        assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch")
        assertion.assertEqual(sts.componentList.length, testdata[1].component.length, "Number of Components Mismatch")

    },*/
    // Validate the Search of  book Name on  the add Book List page.-- add by rupsi for acceptance test
    ENG_ADDBOOK_TC_99: function (testdata) {
        var testdata1 = "\"" + testdata + "\""
        sts = addBookPage.enterTextInSearchBox(testdata1);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata, "Book Title Mismatch: " + JSON.stringify(sts))
    }
};