'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
const createClassPage = require('./createClass.page.js');
const dashboardPage = require('./dashboard.page.js');
const appShell = require('./appShell.page.js')
var res, obj, ret;
module.exports = {

    pageTitle: selectorFile.css.ComproEngage.addBookPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.addBookPage.pageSubTitle,
    bookImgIcon: selectorFile.css.ComproEngage.addBookPage.bookImgIcon,
    bookTitle: selectorFile.css.ComproEngage.addBookPage.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.addBookPage.bookSubTitle,
    view_Btn: selectorFile.css.ComproEngage.addBookPage.view_Btn,
    searchBox: selectorFile.css.ComproEngage.addBookPage.searchBox,
    searchBoxText: selectorFile.css.ComproEngage.addBookPage.searchBoxText,
    searchIcon: selectorFile.css.ComproEngage.addBookPage.searchIcon,
    searchList: selectorFile.css.ComproEngage.addBookPage.searchList,
    searchListIcon: selectorFile.css.ComproEngage.addBookPage.searchListIcon,
    showMoreResults: selectorFile.css.ComproEngage.addBookPage.showMoreResults,
    clearSearchText: selectorFile.css.ComproEngage.addBookPage.clearSearchText,
    searchCount: selectorFile.css.ComproEngage.addBookPage.searchCount,
    noItemFound_Dropdown: selectorFile.css.ComproEngage.addBookPage.noItemFound_Dropdown,
    search_NoResult_title: selectorFile.css.ComproEngage.addBookPage.search_NoResult_title,
    search_NoResult_subTitle: selectorFile.css.ComproEngage.addBookPage.search_NoResult_subTitle,
    searchPill: selectorFile.css.ComproEngage.addBookPage.searchPill,
    closeSearchPill: selectorFile.css.ComproEngage.addBookPage.closeSearchPill,
    breadcrumbFlipbook: selectorFile.css.ComproEngage.bookView.breadcrumbFlipbook,
    removeBook_Dialog: selectorFile.css.ComproEngage.bookView.removeBook_Dialog,
    removeBookDialogCancel: selectorFile.css.ComproEngage.bookView.removeBookDialogCancel,
    removeBookDialogRemove: selectorFile.css.ComproEngage.bookView.removeBookDialogRemove,
    removeBook_subtitle: selectorFile.css.ComproEngage.bookView.removeBook_subtitle,
    removeBook_title: selectorFile.css.ComproEngage.bookView.removeBook_title,
    breadcrumbbackbtn: selectorFile.css.ComproEngage.appShell.breadcrumbbackbtn,
    //dashboard
    addBook_Btn: selectorFile.css.ComproEngage.addBookPage.dashboard.addBook_Btn,
    bookAddedIcon: selectorFile.css.ComproEngage.addBookPage.dashboard.bookAddedIcon,
    //browse
    moreOptions: selectorFile.css.ComproEngage.addBookPage.browse.moreOptions,
    viewClass_btn: selectorFile.css.ComproEngage.addBookPage.browse.viewClass_btn,
    createClass_btn: selectorFile.css.ComproEngage.addBookPage.browse.createClass_btn,
    addToMyBooks_btn: selectorFile.css.ComproEngage.addBookPage.browse.addToMyBooks_btn,
    removeFromMyBooks_btn: selectorFile.css.ComproEngage.addBookPage.browse.removeFromMyBooks_btn,
    openFlipbook_btn: selectorFile.css.ComproEngage.addBookPage.browse.openFlipbook_btn,
    flipBookCount: selectorFile.css.ComproEngage.addBookPage.browse.flipBookCount,
    previousPageArrow: selectorFile.css.ComproEngage.addBookPage.browse.previousPageArrow,
    nextPageArrow: selectorFile.css.ComproEngage.addBookPage.browse.nextPageArrow,
    goToPage: selectorFile.css.ComproEngage.addBookPage.browse.goToPage, //ENG-7435
    currentPage: selectorFile.css.ComproEngage.addBookPage.browse.currentPage, //ENG-7435
    //class workflow
    noBookTitle: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBookTitle, // not clear on this - akhil -- Rupsi to advise for Class workflow
    noBookSubTitle: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBookSubTitle, // not clear on this - akhil
    addtoClassbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.addtoClassbtn,
    cancelAndGoBackbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.cancelAndGoBackbtn,
    noBooklbl: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBooklbl,
    noBooklblError: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBooklblError,
    addBookbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.addBookbtn, // this is not required - akhil
    bookAddedlbl: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookAddedlbl,
    bookAddedtxt: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookAddedtxt,
    bookdeletebottomIcon: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookdeletebtmIcon, //rename this to bookDeleteIcon - akhil
    myBooksTab: selectorFile.css.ComproEngage.addBookPage.classWorkflow.myBooksTab,
    allBooksTab: selectorFile.css.ComproEngage.addBookPage.classWorkflow.allBooksTab,

    isInitialized: function() {
        logger.logInto(stackTrace.get());
        // action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle)
        res = this.getAddBookPageData();
        res.pageStatus = pageStatus;
        return res;
    },

    getAddBookPageData: function() {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: "",
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null,
            booksList: this.getBooksList(),
            tabsList: appShell.getTabsListData(),
            bookInfo: null,
            //classes
            addtoClassbtn: action.getElementCount(this.addtoClassbtn) > 0 ? action.getText(this.addtoClassbtn) : null,
            cancelAndGoBackbtn: action.getElementCount(this.cancelAndGoBackbtn) > 0 ? action.getText(this.cancelAndGoBackbtn) : null,
            noBooklbl: action.getElementCount(this.noBooklbl) > 0 ? action.getText(this.noBooklbl) : null,
            noBooklblError: action.getElementCount(this.noBooklblError) > 0 ? action.getText(this.noBooklblError) : null,
            bookAddedlbl: action.getElementCount(this.bookAddedlbl) > 0 ? action.getText(this.bookAddedlbl) : null,
            bookAddedtxt: action.getElementCount(this.bookAddedtxt) > 0 ? action.getText(this.bookAddedtxt) : null,
            bookdeletebottomIcon: action.getElementCount(this.bookdeletebottomIcon) > 0 ? action.waitForExist(this.bookdeletebottomIcon) : null,
            //browse
            previousPageArrow: action.getElementCount(this.previousPageArrow) > 0 ? action.waitForExist(this.previousPageArrow) : null,
            nextPageArrow: action.getElementCount(this.nextPageArrow) > 0 ? action.waitForExist(this.nextPageArrow) : null,
            currentPage: action.getElementCount(this.currentPage) > 0 ? action.getText(this.currentPage) : null,
            //search
            searchData: this.getSearchData()
        }
        if (obj.booksList.length > 0) {
            var bookInfo = this.getBookInfo(obj.booksList[0].bookTitle);
            obj.bookInfo = bookInfo;
        }


        //console.log(obj)
        return obj;
    },


    getBooksList: function() {
        let bookCount = action.findElements(this.bookTitle);
        var i;
        var booksArray = [];

        if (bookCount.length > 0) {
            let i;
            for (i = 0; i < bookCount.length; i++) {
                var obj = {

                    bookImgIcon: action.getElementCount(this.bookImgIcon + i + "]") > 0 ? action.waitForExist(this.bookImgIcon + i + "]") : null,
                    bookTitle: action.getElementCount(this.bookTitle + i + "']") > 0 ? action.getText(this.bookTitle + i + "']") : null,
                    bookSubTitle: action.getElementCount(this.bookSubTitle + i + "]") > 0 ? action.getText(this.bookSubTitle + i + "]") : null,
                     
                }
                booksArray[i] = obj;
            }
        } else {
            obj = {
                //classWorkflow
                noBookTitle: action.getElementCount(this.noBookTitle) > 0 ? action.getText(this.noBookTitle) : null,
                noBookSubTitle: action.getElementCount(this.noBookSubTitle) > 0 ? action.getText(this.noBookSubTitle) : null,
            }
            booksArray[i] = obj;
        }
        return booksArray;
    },

    getBookInfo: function(bookName) {
        var obj = null;
        var i;
        let bookCount = action.findElements(this.bookTitle);
        for (i = 0; i < bookCount.length; i++) {
            if (action.getText(bookCount[i]) == bookName) {
                obj = {
                    view_Btn: action.getElementCount(this.view_Btn + i) > 0 ? action.getText(this.view_Btn + i) : null,
                    //classWorkflow
                    addBookbtntxt: action.getElementCount(this.addBookbtn + i + "] div") > 0 ? action.getText(this.addBookbtn + i + "] div") : null,
                    addBookbtnIcon: action.getElementCount(this.addBookbtn + i + "] svg") > 0 ? action.waitForExist(this.addBookbtn + i + "] svg") : null,
                    //dashboard
                    bookAddedIcon: action.getElementCount(this.bookAddedIcon + i) > 0 ? action.waitForExist(this.bookAddedIcon + i) : null,
                    addBook_Btn: action.getElementCount(this.addBook_Btn + i) > 0 ? action.waitForExist(this.addBook_Btn + i) : null,
                    //browse
                    moreOptions: action.getElementCount(this.moreOptions + i) > 0 ? action.waitForExist(this.moreOptions + i) : null
                }

                logger.logInto(stackTrace.get(), JSON.stringify(obj));
                break;
            }
            if (obj == null) {
                logger.logInto(stackTrace.get(), "No Book found for title:-" + bookName);
            }
        }
        return obj;
    },

    /**************class workflow************************/
    // click_AllBooks_Tab: function() {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.allBooksTab);
    //     if (res == true) {
    //         res = this.isInitialized();
    //         logger.logInto(stackTrace.get(), res + " -- All Books Tab is clicked");
    //     } else {
    //         res = res + " -- All Books tab is NOT clicked";
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    // click_MyBooks_Tab: function() {
    //     logger.logInto(stackTrace.get());
    //     res = action.click(this.myBooksTab);
    //     if (res == true) {
    //         res = this.isInitialized();
    //         logger.logInto(stackTrace.get(), res + " -- My Books tab is clicked");
    //     } else {
    //         res = res + " -- My Books Tab is NOT clicked";
    //         logger.logInto(stackTrace.get(), res, 'error');
    //     }
    //     return res;
    // },

    click_AddtoClass_Button: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.addtoClassbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- addBtn is clicked");
            browser.pause(2000);
         /*   var creatClassPage = require('./createClass.page.js');
            action.waitForDisplayed(createClassPage.bookSkeleton, true, 30000)
            res = creatClassPage.isInitialized();*/
        } else {
            res = res + " -- cancelBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_CancelAndGoBack_Button: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.cancelAndGoBackbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- cancelBtn is clicked");
            // var creatClassPage = require('./createClass.page.js'); // cancel and go back can redirect to browse as well.
            // res = creatClassPage.isInitialized();
        } else {
            res = res + " -- cancelBtn is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    click_addBook: function(bookName) {
        logger.logInto(stackTrace.get());
        let book_index = this.getBookIndex(bookName);
        if (typeof book_index != 'string') {
            res = action.click(this.addBookbtn + book_index + "]");
            if (res == true) {
                res = this.getBookInfo(bookName);
            } else {
                res = res + " --class card is NOT available";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        } else {
            res = book_index; //storing error message recieved from getBookindex()
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getBookIndex: function(bookName) { // not sure why is this required - akhil -- Rupsi to advise on class workflow
        logger.logInto(stackTrace.get());
        var index = 0;
        var arr = [];
        var i;
        action.waitForDisplayed("circle[class*='MuiCircularProgress-circle']", undefined, true)
        res = action.findElements(this.bookTitle);
        if (res.length == 0) {
            res = res + " -- No Book available";
            logger.logInto(stackTrace.get(), res, 'error');
        } else {
            for (i = 0; i < res.length; i++) {
                var findBookName = action.getText(this.bookTitle + i + "']");
                if (bookName == findBookName) {
                    arr[index] = i
                    index = index + 1;
                }
            }
            if (arr.length == 1)
                res = arr[0];
            else if (arr.length > 1)
                res = "ERROR! Multiple Book present with name " + bookName + " at index " + arr + " !!";
            else
                res = "ERROR! No Book found with name " + bookName + " !!";
        }
        return res;
    },

    clickBookDeleteIcon: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.bookdeletebottomIcon);
        if (res == true) {
            logger.logInto(stackTrace.get(), "-- delete Icon is clicked");
            res = this.isInitialized();
        } else {
            res = res + " -- delete Icon is NOT clicked";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    checkbookAvaibility: function() {
        logger.logInto(stackTrace.get());
        if (action.getElementCount(this.bookIcon) < 1) {
            res = null;
        } else
            res = "alreadySelected"
        return res;
    },

    clickdeleteBook: function() {
        res = action.click(this.removeBookbtn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "Book is removed");
            res = this.isInitialized();
        } else
            logger.logInto(stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");

        return res;
    },


    clickPlusIconOfBook: function(bookName) {
        logger.logInto(stackTrace.get());
        var i;
        ret = dashboardPage.getDashboardPageData();
        for (i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.addBook_Btn + i + "]");
                if (res == true) {
                    logger.logInto(stackTrace.get(), " --Book Plus icon is clicked");
                } else {
                    res = res + " -- Error in clicking Book Plus icon"
                    logger.logInto(stackTrace.get(), res, "error");
                }
            }
        }
        return res;
    },
    /**************class workflow************************/

    /**************dashboard************************/
    clickOnBook: function(bookTitle) {
        let list;
        var i;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(list[i]);
                if (res == true) {
                    let bookViewTOC = require('./bookDetail.page.js');
                    res = bookViewTOC.isInitialized();
                    logger.logInto(stackTrace.get(), " --Book Title clicked");
                } else
                    logger.logInto(stackTrace.get(), " --Book Title NOT clicked", "error");
                break;
            }
        }
        return res;

    },

    clickViewButton: function(bookTitle) {
        let list;
        var i;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(this.view_Btn + i);
                if (res == true) {
                    let bookViewTOC = require('./bookDetail.page.js');
                    res = bookViewTOC.isInitialized();
                    logger.logInto(stackTrace.get(), " --View Button clicked");
                } else
                    logger.logInto(stackTrace.get(), " --View Button NOT clicked", "error");
                break;
            }
        }
        return res;
    },

    clickPlusbutton: function(bookTitle) {
        let list;
        var i;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(this.addBook_Btn + i);
                if (res == true) {
                    res = this.getBookInfo(bookTitle);
                    logger.logInto(stackTrace.get(), " --Plus Button clicked");
                } else
                    logger.logInto(stackTrace.get(), " --Plus Button NOT clicked", "error");
                break;
            }
        }
        return res;
    },
    /**************dashboard**********************************/

    /**************Browse*************************************/

    clickMoreOptions: function(bookTitle) {
        let list;
        var i;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(this.moreOptions + i);
                if (res == true) {
                    res = this.getDataForMoreOptions();
                    logger.logInto(stackTrace.get(), " --Plus Button clicked");
                } else
                    logger.logInto(stackTrace.get(), " --Plus Button NOT clicked", "error");
                break;
            }
        }
        return res;
    },

    getDataForMoreOptions: function() {
        logger.logInto(stackTrace.get());
        obj = {
            viewClass_btn: action.getElementCount(this.viewClass_btn) > 0 ? action.getText(this.viewClass_btn) : null,
            createClass_btn: action.getElementCount(this.createClass_btn) > 0 ? action.getText(this.createClass_btn) : null,
            addToMyBooks_btn: action.getElementCount(this.addToMyBooks_btn) > 0 ? action.getText(this.addToMyBooks_btn) : null,
            openFlipbook_btn: action.getElementCount(this.openFlipbook_btn) > 0 ? action.getText(this.openFlipbook_btn) : null,
            removeFromMyBooks_btn: action.getElementCount(this.removeFromMyBooks_btn) > 0 ? action.getText(this.removeFromMyBooks_btn) : null,
        }
        return obj;
    },

    clickViewClasses: function() {
        res = action.click(this.viewClass_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " View Classes Button Clicked");
            res = require('./classDrawer.page.js').isInitialized()
        } else
            logger.logInto(stackTrace.get(), res + " View Classes Button Not Clicked", "error");

        return res;
    },

    clickCreateNewClass: function() {
        res = action.click(this.createClass_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " View Classes Button Clicked");
            res = require('./createClass.page.js').isInitialized()
        } else
            logger.logInto(stackTrace.get(), res + " View Classes Button Not Clicked", "error");

        return res;
    },

    clickAddToMyBooks: function() {
        res = action.click(this.addToMyBooks_btn);
        if (res == true) {
            var snackBarTest = require('../../test/engageExperienceApp/common.test.js');
            res = snackBarTest.get_Snackbar_Message_Text()
            //console.log(res)
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Clicked");
        } else
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Not Clicked", "error");

        return res;

    },

    clickRemoveFromMyBooks: function() {
        res = action.click(this.removeFromMyBooks_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Clicked");
            action.waitForDisplayed(this.removeBook_Dialog)
            res = require('./bookDetail.page.js').getRemoveBookPopUpData()
            //console.log(res);

        } else
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Not Clicked", "error");

        return res;

    },

    clickCancel_RemoveBookDialog: function() {
        logger.logInto(stackTrace.get())
        action.waitForDisplayed(this.removeBook_Dialog)
        res = action.click(this.removeBookDialogCancel);
        if (res == true) {
            res = action.waitForDisplayed(this.removeBook_Dialog, 30000, true)
            logger.logInto(stackTrace.get(), " --Cancel Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Cancel Button NOT clicked", "error");
        return res;
    },

    clickRemove_RemoveBookDialog: function() {
        logger.logInto(stackTrace.get())
        action.waitForDisplayed(this.removeBook_Dialog)
        res = action.click(this.removeBookDialogRemove);
        if (res == true) {
            res = action.waitForDisplayed(this.removeBook_Dialog, 30000, true)
            if (res == true) {
                res = res = require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text()
                logger.logInto(stackTrace.get(), " --Remove Book Button clicked");
            }
        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    clickOpenFlipbook: function() {
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            var flipBooksList = action.findElements(this.flipBookCount)
            logger.logInto(stackTrace.get(), res + " Open Flipbook Button Clicked");
            if (flipBooksList.length > 0)
                res = this.getListOfFlipbooks();
            else {
                res = action.waitForDisplayed(this.breadcrumbbackbtn)
                //res = require('./flipbook.page.js').isInitialized() //dummy page object adde
            }

        } else
            logger.logInto(stackTrace.get(), res + " Open Flipbook Button Not Clicked", "error");

        return res;
    },

    getListofFlipbooks: function() {
        let list;
        var i;
        var flipBooksList = [];
        list = action.findElements(this.flipBookCount);
        for (i = 0; i < list.length; i++) {
            flipBooksList[i] = action.getText(list[i])
        }
        return flipBooksList;
    },

    clickOpenFlipbookFromList: function(title) {
        var i;
        res = this.clickOpenFlipbook();
        for (i = 0; i < res.length; i++) {
            if (res[i] == title) {
                res = action.click(this.flipBookTitle + title)
                logger.logInto(stackTrace.get(), res + " Flipbook Launched");
                break;
            }

        }
        if (res != true)
            logger.logInto(stackTrace.get(), res + " Flipbook NOT Launched", "error");

        return res;

    },

    goToPageNumber: function(pageNumber) {
        res = action.click(this.goToPage + pageNumber)
        if (res == true) {
            res = this.getAddBookPageData()
            logger.logInto(stackTrace.get(), res + "Page Number Clicked");
        } else
            logger.logInto(stackTrace.get(), res + "Page Number NOT Clicked", "error");

        return res;
    },

    clickNextArrowButton: function() {
        res = action.click(this.nextPageArrow)
        if (res == true) {
            res = this.getAddBookPageData()
            logger.logInto(stackTrace.get(), res + "Next Page Arrow Clicked");
        } else
            logger.logInto(stackTrace.get(), res + "Next Page Arrow NOT Clicked", "error");

        return res;

    },

    clickPreviousArrowButton: function() {
        res = action.click(this.previousPageArrow)
        if (res == true) {
            res = this.getAddBookPageData()
            logger.logInto(stackTrace.get(), res + "Previous Page Arrow Clicked");
        } else
            logger.logInto(stackTrace.get(), res + "Previous Page Arrow NOT Clicked", "error");

        return res;
    },
    /**************Browse****************************************************************/

    /**************Search*****************************************************************/
    enterTextInSearchBox: function(searchText) {
        logger.logInto(stackTrace.get());
        res = action.click(this.searchBox)
        if (res == true) {
            action.waitForDisplayed(this.searchBoxText)
            res = action.setValue(this.searchBoxText, searchText)
            if (res == true) {
                logger.logInto(stackTrace.get(), " -- searchText is entered");
            } else {
                res = res + " -- searchText is NOT entered";
                logger.logInto(stackTrace.get(), res, 'error');
            }
        }

        return res;
    },

    getSearchList: function() {
        logger.logInto(stackTrace.get());
        let listItem, listItemIcon;
        var obj = {}
        var i;
        var searchList = [];
        action.waitForDisplayed(this.searchList)
        listItem = action.findElements(this.searchList);
        listItemIcon = action.findElements(this.searchListIcon);

        if (action.getElementCount(this.noItemFound_Dropdown) > 0) {
            obj = {
                noItemFoundTitle: action.getElementCount(this.noItemFound_Dropdown) > 0 ? action.getText(this.noItemFound_Dropdown) : null
            }
            searchList[0] = obj;

        } else {
            for (i = 0; i < listItem.length; i++) {

                searchList[i] = action.getText(listItem[i])
            }

        }
        logger.logInto(stackTrace.get(), JSON.stringify(searchList));
        return searchList;
    },

    clickOnSearchSuggestion: function(suggestionText) {
        logger.logInto(stackTrace.get());
        let listItem, listItemIcon;

        action.waitForDisplayed(this.searchList)
        listItem = action.findElements(this.searchList);
        listItemIcon = action.findElements(this.searchListIcon);

        for (var i = 0; i < listItem.length - 1; i++) 
        {   
            if (action.getText(this.searchList + i).includes(suggestionText))
            {
                    res = action.click(this.searchList + i)
                    if (res == true) 
                    {
                        res = require('./bookDetail.page.js').isInitialized();
                        logger.logInto(stackTrace.get(), res + "- suggestionText Clicked");
                        //console.log(res)
                    } else
                        logger.logInto(stackTrace.get(), res + "- suggestionText NOT Clicked", "error");
            }
                
        }
        return res;
    },

    clickOnMoreSerachResult: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.showMoreResults)
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Show More Options Clicked");
            res = this.getAddBookPageData();
        } else
            logger.logInto(stackTrace.get(), res + "- Show More Options NOT Clicked");

        return res;
    },


    clearSearch: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.clearSearchText)
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Show More Options Clicked");
            res = this.getAddBookPageData();
        } else
            logger.logInto(stackTrace.get(), res + "- Show More Options NOT Clicked");

        return res;
    },

    pressEnter: function() {
        logger.logInto(stackTrace.get());
        res = action.keyPress('Enter')
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Search Pill cleared");
            res = this.getAddBookPageData()
        } else
            logger.logInto(stackTrace.get(), res + "- Search Pill NOT cleared");

        return res;

    },

    clearSearchPill: function() {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.searchPill)
        res = action.click(this.closeSearchPill)
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Search Pill cleared");
            res = this.getAddBookPageData()
        } else
            logger.logInto(stackTrace.get(), res + "- Search Pill NOT cleared");

        return res;

    },

    getSearchData: function() {
        var obj;
        obj = {

            searchBoxPlaceholder: action.getElementCount(this.searchBox) > 0 ? action.getAttribute(this.searchBox, "placeholder") : null,
            searchIcon: action.getElementCount(this.searchIcon) > 0 ? action.waitForExist(this.searchIcon) : null,
            searchCount: action.getElementCount(this.searchCount) > 0 ? action.getText(this.searchCount) : null,
            searchPill: action.getElementCount(this.searchPill) > 0 ? action.getText(this.searchPill) : null,
            search_NoResult_title: action.getElementCount(this.search_NoResult_title) > 0 ? action.getText(this.search_NoResult_title) : null,
            search_NoResult_subTitle: action.getElementCount(this.search_NoResult_subTitle) > 0 ? action.getText(this.search_NoResult_subTitle) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;

    }

    /**************Search*************************************/
}