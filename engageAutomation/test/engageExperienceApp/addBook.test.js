"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

    //Validate the content of add book page launched from Class workflow
    ENG_ADDB_TC_2: function (testdata) {
        sts = addBookPage.getData_addBookPage();
        assertion.assertEqual(sts.addBookPageTitle, testdata.addBookPageTitle, "addBookPageTitle mismatch");
        assertion.assertEqual(sts.addBookPageSubtitle, testdata.addBookPageSubtitle, "addBookPageSubtitle mismatch");
        assertion.assertEqual(sts.addToClassBtn, testdata.addToClassBtn, "addToClassBtn mismatch");
        assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn mismatch");
        if (sts.bookLabel == null) {
            assertion.assertEqual(sts.noBookLabel, testdata.noBookLabel[0], "noBookLabel mismatch");
        }
        else {
            assertion.assertEqual(sts.bookLabel, testdata.bookLabel, "bookLabel mismatch");
            assertion.assertEqual(sts.removeBookBtn, testdata.removeBookBtn, "removeBookBtn mismatch");
        }
        sts = appShell.getTabsListData();
        assertion.assertEqual(sts.selected, testdata.tabList[0], "Selected tab mismatch");
    },

    //Validate the "My Books" tab selected when click on my book tab
    ENG_ADDB_TC_3: function (testdata) {
        sts = appShell.selectTab(testdata.tabList[0]);
        assertion.assertEqual(sts, true, "Select tab error");
        sts = appShell.getTabsListData();
        assertion.assertEqual(sts.selected, testdata.tabList[0], "Selected tab mismatch");
    },

    //Validate the "All Books" tab selected when click on my book tab
    ENG_ADDB_TC_4: function (testdata) {
        sts = appShell.selectTab(testdata.tabList[1]);
        assertion.assertEqual(sts, true, "Select tab error");
        sts = appShell.getTabsListData();
        assertion.assertEqual(sts.selected, testdata.tabList[1], "Selected tab mismatch");
    },

    //Validate that create class page is launched after click on add to class button
    ENG_ADDB_TC_5: function (testdata) {
        sts = addBookPage.click_addToClassBtn();
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: ");
            assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: ");
        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the create class page is launched and book is not changed after click on Cancel and go Back button
    ENG_ADDB_TC_6: function (testdata) {
        sts = addBookPage.click_cancelBtn();
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: ");
            assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: ");
        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the create class page is launched and no book is added after click on Cancel and go Back button
    ENG_ADDB_TC_7: function (testdata) {
        sts = addBookPage.click_cancelBtn();
        if ((typeof (sts)) === "object") {
            assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            assertion.assertEqual(sts.bookTitle, null, "Book Title is mismatched: ");
            assertion.assertEqual(sts.bookIcon, false, "Book Icon is mismatched: ");
            assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: ");
            assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: ");

        } else {
            assertion.assertFail(sts);
        }
    },

    //Validate the book is added on clicking of add book button of a specific book
    ENG_ADDB_TC_8: function (testdata) {
        sts = addBookPage.click_addBookBtn(testdata[0]);
        assertion.assertEqual(sts.bookValue, testdata[0], "bookValue mismatch");
        assertion.assertEqual(sts.bookLabel, testdata[1].bookLabel, "bookLabel mismatch");
        assertion.assertEqual(sts.removeBookBtn, testdata[1].removeBookBtn, "removeBookBtn mismatch");
    },

    //Validate the book is remove from class when click on cross icon on bottom label
    ENG_ADDB_TC_9: function () {
        sts = addBookPage.click_removeBookBtn();
        assertion.assertEqual(sts.bookValue, null, "bookValue mismatch");
    },

    /*//Validate the book is removed after clicking on "Added" button of a book which is already added
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
    },*/

    //Validate the error message when click on add to class button without adding any book
    ENG_ADDB_TC_10: function (testdata) {
        sts = addBookPage.click_addToClassBtn();
        assertion.assert((sts.pageStatus instanceof Error) === true, "Create Class Page is launched: " + sts.pageStatus);
        sts = addBookPage.getData_addBookPage();
        assertion.assertEqual(sts.noBookLabel, testdata.noBookLabel[1], "noBookLabel mismatch");
    },

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
    /*// Validate the Search of  book Name on  the add Book List page.-- add by rupsi for acceptance test
    ENG_ADDBOOK_TC_99: function (testdata) {
        var testdata1 = "\"" + testdata + "\""
        sts = addBookPage.enterTextInSearchBox(testdata1);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata, "Book Title Mismatch: " + JSON.stringify(sts))
    }*/
};