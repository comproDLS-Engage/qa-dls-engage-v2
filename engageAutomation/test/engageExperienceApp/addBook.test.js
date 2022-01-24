"use strict";
var addBookPage = require('../../pages/engageExperienceApp/browse.page.js');
//var appShell = require('./appShell.test.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var browsePage = require('../../pages/engageExperienceApp/browse.page');
//const createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
//var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
//var classDrawerPage = require('../../pages/engageExperienceApp/classDrawer.page.js');
var sts;

module.exports = {

    //Validate the content of add book page launched from Dashboard
    ENG_ADDBOOK_TC_2: function (testdata) {
        sts = browsePage.getData_browsePage();
        //console.log(sts)
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle[1], "pageTitle mismatch");
        assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[1], "pageSubTitle mismatch");
        assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
        assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
        assertion.assertEqual(sts.filtersBtn, null, "filtersBtn mismatch");
        sts = browsePage.getData_bookList();
        assertion.assertEqual(sts[0].viewBtn, testdata.viewBtn, "viewBtn mismatch");
        assertion.assertEqual(sts[0].addBookBtn, testdata.addBookBtn[0], "addBookBtn mismatch");
    },

    //Validate that clicking on '+' button adds the book to My Books
    ENG_ADDBOOK_TC_21: function (testdata) {
        sts = browsePage.click_addBookBtn(testdata[0]);
        assertion.assertEqual(sts, true, "Add book status mismatch")
        /*appShell.ENG_SHELL_TC_11();
        dashboardPage.isInitialized();
        sts = dashboardPage.getData_dashboardPage();
        assertion.assertEqual(sts.pageTitle, testdata[1].pageTitle, "Dashboard text mismatch");
        sts = dashboardPage.getData_books()
        assertion.assertEqual(sts[0].bookTitle, testdata[0], "Book Title Mismatch")*/
    },

    /****************************Browse Book Testcases*************************************************/

    //Validate that clicking on more options displays a list of options available
    ENG_ADDBOOK_TC_23: function (testdata) {
        sts = browsePage.click_bookMoreOptionsBtn(testdata[0]);
        assertion.assertEqual(sts.viewClassOption, testdata[1].viewClassOption, "View Class button mismatch");
        assertion.assertEqual(sts.createNewClassOption, testdata[1].createNewClassOption, "Create Class button mismatch");
        if (sts.addToMyBooksOption != null) {
            assertion.assertEqual(sts.addToMyBooksOption, testdata[1].addToMyBooksOption, "Add To My Books button mismatch");
            assertion.assertEqual(sts.removeFromMyBooksOption, null, "Remove from My Books button mismatch");
        }
        else {
            assertion.assertEqual(sts.addToMyBooksOption, null, "Add To My Books button mismatch");
            assertion.assertEqual(sts.removeFromMyBooksOption, testdata[1].removeFromMyBooksOption, "Remove from My Books button mismatch");
        }
        if (sts.openFlipbookOption != null)
            assertion.assertEqual(sts.openFlipbookOption, testdata[1].openFlipbookOption, "Open Flipbook  button mismatch");
    },

    //Validate that clicking on View Classes launches Class Drawer
    ENG_ADDBOOK_TC_24: function (testdata) {
        sts = browsePage.click_viewClassOption();
        assertion.assertEqual(sts.classDrawerHeader, testdata[0] + ' ' + testdata[1], "Class Drawer Header Mismatch");
        sts = classDrawerPage.Click_classDrawerCloseBtn();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");
    },

    //Validate that clicking on Add to My Books adds the book to My Books in Dashboard
    ENG_ADDBOOK_TC_25: function (testdata) {
        sts = browsePage.click_addToMyBooksOption();
        assertion.assertEqual(sts, true, "Add to my books mismatch");
        /*sts = addBookPage.clickAddToMyBooks();
        assertion.assertEqual(sts, testdata[0], "Snackbar text Mismatch");
        appShell.ENG_SHELL_TC_2();
        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts.pageTitle, testdata[1].pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.bookList[0].bookTitle, testdata[2], "Book Title Mismatch")*/
    },

    //Validate that clicking on Open flipbook launches the flipbook associated with the book
    ENG_ADDBOOK_TC_26: function () {
        sts = browsePage.click_openFlipbookOption();
        assertion.assertEqual(sts.pageStatus, true, "Flipbook page status mismatch");
        assertion.assertEqual(sts.appShellPage.header, true, "Flipbook page header status mismatch")
        //appShell.ENG_SHELL_TC_11();
    },

    /*//Validate that clicking on Open flipbook displays a list of flipbooks associated with the book
    ENG_ADDBOOK_TC_27: function (testdata) {
        sts = addBookPage.clickOpenFlipbook();
        assertion.assertEqual(sts.length, testdata.length, "Number of Flipbooks Mismatch");
    },*/

    //Validate that clicking on Create New Class launches create class workflow where book is added to Class Books
    ENG_ADDBOOK_TC_28: function (testdata) {
        sts = browsePage.click_createNewClassOption();
        //sts = addBookPage.clickCreateNewClass();
        assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Create Class Page Title Mismatch");
        assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Create Class Page SubTitle Mismatch");
        assertion.assertEqual(sts.classHeader, testdata[0].classHeader, "Create Class Page Header Mismatch");
        assertion.assertEqual(sts.classSubHeader, testdata[0].classSubHeader, "Create Class Page Class SubHeader Mismatch");
        assertion.assertEqual(sts.title_lbl, testdata[0].title_lbl, "Create Class Page Title Label Mismatch");
        assertion.assertEqual(sts.startDate_lbl, testdata[0].startDate_lbl, "Create Class Page Start Date Label Mismatch");
        assertion.assertEqual(sts.endDate_lbl, testdata[0].endDate_lbl, "Create Class Page End Date Label Mismatch");
        assertion.assertEqual(sts.selectBook_lbl, testdata[0].selectBook_lbl, "Create Class Page Select Book Label Mismatch");
        assertion.assertEqual(sts.cancelBtn_txt, testdata[0].cancelBtn_txt, "Create Class Page Cancel Button Mismatch");
        assertion.assertEqual(sts.createBtn_txt, testdata[0].createBtn_txt, "Create Class Page Create Button Mismatch");

        assertion.assertEqual(sts.bookTitle, testdata[1], "Create Class Page Book Title Mismatch");
        assertion.assertEqual(sts.bookIcon, true, "Create Class Page Book Cover Thumbnail Mismatch");

        sts = addBookPage.click_CancelAndGoBack_Button();
        assertion.assertEqual(sts, true, "Cancel and Go Back Not Clicked");
    },

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

    //Validate the content of books page launched from Browse
    ENG_ADDBOOK_TC_32: function (testdata) {
        sts = browsePage.getData_browsePage();
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle[1], "pageTitle mismatch");
        assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[1], "pageSubTitle mismatch");
        assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
        assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
        assertion.assertEqual(sts.filtersBtn, null, "filtersBtn mismatch");
        sts = browsePage.getData_bookList();
        assertion.assertEqual(sts[0].viewBtn, testdata.viewBtn, "viewBtn mismatch");
        assertion.assertEqual(sts[0].addBookBtn, null, "addBookBtn mismatch");
        assertion.assertEqual(sts[0].bookMoreOptionsBtn, "", "bookMoreOptionsBtn mismatch");
    },

    //Validate that clicking on Remove from My Books launches a pop up with label 'Remove from My Books?'
    ENG_ADDBOOK_TC_33: function (testdata) {
        sts = browsePage.click_removeFromMyBooksOption();
        assertion.assertEqual(sts.removeBook_title, testdata[1].removeBook_title, "Menu Remove Title status mismatch");
        let removeBook_subTitle = testdata[1].removeBook_subTitle1 + testdata[0] + testdata[1].removeBook_subTitle2;
        assertion.assertEqual(sts.removeBook_subTitle, removeBook_subTitle, "Menu Remove Subtitle status mismatch");
        assertion.assertEqual(sts.removeBook_cancelBtn, testdata[1].removeBook_cancelBtn, "Menu Remove Cancel status mismatch");
        assertion.assertEqual(sts.removeBook_removeBtn, testdata[1].removeBook_removeBtn, "Menu Remove Remove status mismatch");
    },

    //Validate that clicking on 'Cancel' in dialog box retains the book in 'My Books'
    ENG_ADDBOOK_TC_34: function () {
        sts = browsePage.click_removeBook_cancelBtn();
        assertion.assertEqual(sts, true, "Cancel button status mismatch");
    },

    //Validate that clicking on 'Remove' in dialog box removes the book from 'My Books'
    ENG_ADDBOOK_TC_31: function (testdata) {
        sts = browsePage.click_removeBook_removeBtn();
        assertion.assertEqual(sts, true, "Remove button status mismatch");
    },

    /****************************Browse Book Testcases*************************************************/

    /***********************Class Workflow ****************************************************/

    //Validate the content of add book page launched from Class workflow -- needs to be updated.
    ENG_ADDBOOK_TC_44: function (testdata) {
        sts = browsePage.getData_browsePage();
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

    /****************************Dashboard Add Book Testcases - START ********************************/

    /*//Validate that clicking on Book Thumbnail launches the book View page
    ENG_ADDBOOK_TC_20: function (testdata) {
        sts = addBookPage.clickOnBook(testdata.name);
        assertion.assertEqual(sts.pageStatus, true, "View Book page status mismatch");
    },*/



    //Validate clicking on the breadcrumb on add book page launches the dashboard page
    ENG_ADDBOOK_TC_22: function (testdata) {
        appShell.ENG_SHELL_TC_11();

        sts = dashboardPage.isInitialized();
        assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.createPlaylist_Txt, testdata.createPlaylist_Txt, "Create Playlist text mismatch");
        assertion.assertEqual(sts.addBook_Txt, testdata.addBook_Txt, "Add Book text mismatch");
        assertion.assertEqual(sts.myBooksHeading_Txt, testdata.myBooksHeading_Txt, "My books text mismatch");
        assertion.assertEqual(sts.myPlaylistsHeading_Txt, testdata.myPlaylistsHeading_Txt, "my playlist text mismatch");
    },
    /****************************Dashboard Add Book Testcases******************************************/


    /****************************Search Testcases*************************************************/

    //Validate that the serach for partial text book.
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

    //Validate that a search text lists maximum 5 suggestions matching the search text.
    ENG_ADDBOOK_TC_38: function (testdata) {
        sts = addBookPage.enterTextInSearchBox(testdata.search_txt);
        assertion.assertEqual(sts, true, "Search Text Not Entered")

        sts = addBookPage.getSearchList();
        assertion.isAtMost(sts.length, 6, "Search List Count Mismatch")

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

    },
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