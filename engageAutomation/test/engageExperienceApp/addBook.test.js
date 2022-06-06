"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {

    //Validate the content of add book page launched from Class workflow
    ENG_ADDB_TC_2: async function (testdata) {
        sts = await addBookPage.getData_addBookPage();
        await assertion.assertEqual(sts.addBookPageTitle, testdata.addBookPageTitle, "addBookPageTitle mismatch");
        await assertion.assertEqual(sts.addBookPageSubtitle, testdata.addBookPageSubtitle, "addBookPageSubtitle mismatch");
        await assertion.assertEqual(sts.addToClassBtn, testdata.addToClassBtn, "addToClassBtn mismatch");
        await assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "cancelBtn mismatch");
        if (sts.bookLabel == null) {
            await assertion.assertEqual(sts.noBookLabel, testdata.noBookLabel[0], "noBookLabel mismatch");
        }
        else {
            await assertion.assertEqual(sts.bookLabel, testdata.bookLabel, "bookLabel mismatch");
            await assertion.assertEqual(sts.removeBookBtn, testdata.removeBookBtn, "removeBookBtn mismatch");
        }
        sts = await appShell.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata.tabList[0], "Selected tab mismatch");
    },

    //Validate the "My Books" tab selected when click on my book tab
    ENG_ADDB_TC_3: async function (testdata) {
        sts = await appShell.selectTab(testdata.tabList[0]);
        await assertion.assertEqual(sts, true, "Select tab error");
        sts = await appShell.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata.tabList[0], "Selected tab mismatch");
    },

    //Validate the "All Books" tab selected when click on my book tab
    ENG_ADDB_TC_4: async function (testdata) {
        sts = await appShell.selectTab(testdata.tabList[1]);
        await assertion.assertEqual(sts, true, "Select tab error");
        sts = await appShell.getTabsListData();
        await assertion.assertEqual(sts.selected, testdata.tabList[1], "Selected tab mismatch");
    },

    //Validate that create class page is launched after click on add to class button
    ENG_ADDB_TC_5: async function (testdata) {
        sts = await addBookPage.click_addToClassBtn();
        if ((typeof (sts)) === "object") {
            await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            await assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: ");
            await assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: ");
        } else {
            await assertion.assertFail(sts);
        }
    },

    //Validate the create class page is launched and book is not changed after click on Cancel and go Back button
    ENG_ADDB_TC_6: async function (testdata) {
        sts = await addBookPage.click_cancelBtn();
        if ((typeof (sts)) === "object") {
            await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            await assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: ");
            await assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: ");
        } else {
            await assertion.assertFail(sts);
        }
    },

    //Validate the create class page is launched and no book is added after click on Cancel and go Back button
    ENG_ADDB_TC_7: async function (testdata) {
        sts = await addBookPage.click_cancelBtn();
        if ((typeof (sts)) === "object") {
            await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: ");
            await assertion.assertEqual(sts.bookTitle, null, "Book Title is mismatched: ");
            await assertion.assertEqual(sts.bookIcon, false, "Book Icon is mismatched: ");
            await assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: ");
            await assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: ");

        } else {
            await assertion.assertFail(sts);
        }
    },

    //Validate the book is added on clicking of add book button of a specific book
    ENG_ADDB_TC_8: async function (testdata) {
        sts = await addBookPage.click_addBookBtn(testdata[0]);
        await assertion.assertEqual(sts.bookValue, testdata[0], "bookValue mismatch");
        await assertion.assertEqual(sts.bookLabel, testdata[1].bookLabel, "bookLabel mismatch");
        await assertion.assertEqual(sts.removeBookBtn, testdata[1].removeBookBtn, "removeBookBtn mismatch");
    },

    //Validate the book is remove from class when click on cross icon on bottom label
    ENG_ADDB_TC_9: async function () {
        sts = await addBookPage.click_removeBookBtn();
        await assertion.assertEqual(sts.bookValue, null, "bookValue mismatch");
    },

    //Validate the error message when click on add to class button without adding any book
    ENG_ADDB_TC_10: async function (testdata) {
        sts = await addBookPage.click_addToClassBtn();
        await assertion.assert((sts.pageStatus instanceof Error) === true, "Create Class Page is launched: " + sts.pageStatus);
        sts = await addBookPage.getData_addBookPage();
        await assertion.assertEqual(sts.noBookLabel, testdata.noBookLabel[1], "noBookLabel mismatch");
    },

    /****************************Search Testcases*************************************************/

    /*//Validate that the serach for partial text book.
    ENG_ADDBOOK_TC_35: async function (testdata) {
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
    ENG_ADDBOOK_TC_36: async function (testdata) {
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
    ENG_ADDBOOK_TC_37: async function (testdata) {
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
    ENG_ADDBOOK_TC_39: async function (testdata) {
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
    ENG_ADDBOOK_TC_40: async function (testdata) {

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
    ENG_ADDBOOK_TC_41: async function (testdata) {
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
    ENG_ADDBOOK_TC_99: async function (testdata) {
        var testdata1 = "\"" + testdata + "\""
        sts = addBookPage.enterTextInSearchBox(testdata1);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.clickOnMoreSerachResult()
        assertion.typeOf(sts, 'object', new Error(sts));
        assertion.assertEqual(sts.booksList[0].bookTitle, testdata, "Book Title Mismatch: " + JSON.stringify(sts))
    }*/
};