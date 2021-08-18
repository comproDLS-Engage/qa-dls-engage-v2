'use strict';
const { BrowserType } = require('@applitools/eyes-webdriverio');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const createClassPage = require('./createClass.page.js');
const dashboardPage = require('./dashboard.page.js');
const appShell = require('./appShell.page.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj, ret;
var bookList = new Array();
module.exports = {

    pageTitle: selectorFile.css.ComproEngage.addBookPage.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.addBookPage.pageSubTitle,
    bookImgIcon: selectorFile.css.ComproEngage.addBookPage.bookImgIcon,
    bookTitle: selectorFile.css.ComproEngage.addBookPage.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.addBookPage.bookSubTitle,
    view_Btn: selectorFile.css.ComproEngage.addBookPage.view_Btn,
    searchBox: selectorFile.css.ComproEngage.addBookPage.searchBox,
    searchIcon: selectorFile.css.ComproEngage.addBookPage.searchIcon,
    closeSearch: selectorFile.css.ComproEngage.addBookPage.closeSearch,
    searchPopUp: selectorFile.css.ComproEngage.addBookPage.searchPopUp,
    searchList: selectorFile.css.ComproEngage.addBookPage.searchList,
    searchListIcon: selectorFile.css.ComproEngage.addBookPage.searchListIcon,
    showMoreResults: selectorFile.css.ComproEngage.addBookPage.showMoreResults,
    clearSearchText: selectorFile.css.ComproEngage.addBookPage.clearSearchText,
    searchCount: selectorFile.css.ComproEngage.addBookPage.searchCount,
    search_NoResult_title: selectorFile.css.ComproEngage.addBookPage.search_NoResult_title,
    search_NoResult_subTitle: selectorFile.css.ComproEngage.addBookPage.search_NoResult_subTitle,
    searchPill: selectorFile.css.ComproEngage.addBookPage.searchPill,
    //dashboard
    bookPlusIcon: selectorFile.css.ComproEngage.addBookPage.dashboard.bookPlusIcon,
    bookAddedIcon: selectorFile.css.ComproEngage.addBookPage.dashboard.bookAddedIcon,
    //browse
    moreOptions: selectorFile.css.ComproEngage.addBookPage.browse.moreOptions,
    viewClass_btn: selectorFile.css.ComproEngage.addBookPage.browse.viewClass_btn,
    createClass_btn: selectorFile.css.ComproEngage.addBookPage.browse.createClass_btn,
    addToMyBooks_btn: selectorFile.css.ComproEngage.addBookPage.browse.addToMyBooks_btn,
    openFlipbook_btn: selectorFile.css.ComproEngage.addBookPage.browse.openFlipbook_btn,
    flipBookTitle: selectorFile.css.ComproEngage.addBookPage.browse.flipBookTitle,
    flipBookCount: selectorFile.css.ComproEngage.addBookPage.browse.flipBookCount,
    previousPageArrow: selectorFile.css.ComproEngage.addBookPage.browse.previousPageArrow,
    nextPageArrow: selectorFile.css.ComproEngage.addBookPage.browse.nextPageArrow,
    goToPage: selectorFile.css.ComproEngage.addBookPage.browse.goToPage,
    currentPage: selectorFile.css.ComproEngage.addBookPage.browse.currentPage,
    //class workflow
    noBookTitle: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBookTitle,
    noBookSubTitle: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBookSubTitle,
    addtoClassbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.addtoClassbtn,
    cancelAndGoBackbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.cancelAndGoBackbtn,
    noBooklbl: selectorFile.css.ComproEngage.addBookPage.classWorkflow.noBooklbl,
    addBookbtn: selectorFile.css.ComproEngage.addBookPage.classWorkflow.addBookbtn,
    bookAddedlbl: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookAddedlbl,
    bookAddedtxt: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookAddedtxt,
    bookdeletebottomIcon: selectorFile.css.ComproEngage.addBookPage.classWorkflow.bookdeletebtmIcon,
    myBooksTab: selectorFile.css.ComproEngage.addBookPage.classWorkflow.myBooksTab,
    allBooksTab: selectorFile.css.ComproEngage.addBookPage.classWorkflow.allBooksTab,

    isInitialized: function() {
        logger.logInto(stackTrace.get());
        // action.waitForDocumentLoad();
        let pageStatus = action.waitForDisplayed(this.pageTitle)
        res = this.getAddBookPageData();
        res.pageStatus = pageStatus;
        //console.log(JSON.stringify(res))
        return res;
    },

    getPageInfo: function() {
        logger.logInto(stackTrace.get());
        obj = {
            pageTitle: action.getElementCount(this.pageTitle) > 0 ? action.getText(this.pageTitle) : null,
            pageSubTitle: action.getElementCount(this.pageSubTitle) > 0 ? action.getText(this.pageSubTitle) : null
        }
        return obj;
    },

    getAddBookPageData: function() {
        logger.logInto(stackTrace.get());
        obj = {
            pageStatus: "",
            pageInfo: this.getPageInfo(),
            booksList: this.getBooksList(),
            tabsList: appShell.getTabsListData(),
            //classes
            addtoClassbtn: action.getElementCount(this.addtoClassbtn) > 0 ? action.getText(this.addtoClassbtn) : null,
            cancelAndGoBackbtn: action.getElementCount(this.cancelAndGoBackbtn) > 0 ? action.getText(this.cancelAndGoBackbtn) : null,
            noBooklbl: action.getElementCount(this.noBooklbl) > 0 ? action.getText(this.noBooklbl) : null,
            bookAddedlbl: action.getElementCount(this.bookAddedlbl) > 0 ? action.getText(this.bookAddedlbl) : null,
            bookAddedtxt: action.getElementCount(this.bookAddedtxt) > 0 ? action.getText(this.bookAddedtxt) : null,
            bookdeletebottomIcon: action.getElementCount(this.bookdeletebottomIcon) > 0 ? action.waitForExist(this.bookdeletebottomIcon) : null,
            //browse
            previousPageArrow: action.getElementCount(this.previousPageArrow) > 0 ? action.waitForExist(this.previousPageArrow) : null,
            nextPageArrow: action.getElementCount(this.nextPageArrow) > 0 ? action.waitForExist(this.nextPageArrow) : null,
            currentPage: action.getElementCount(this.currentPage) > 0 ? action.getText(this.currentPage) : null,
            //search
            searchData : this.getSearchData()
        }
        return obj;
    },

    //getBookData: function() {
    getBooksList: function() {
        let bookCount = action.findElements(this.bookTitle);
        obj = {
            bookList: []
        }
        if (bookCount.length > 0) {
            let i;
            for (i = 0; i < bookCount.length; i++) {
                obj.bookList[i] = {
                    bookImgIcon: action.getElementCount(this.bookImgIcon + i + "]") > 0 ? action.waitForExist(this.bookImgIcon + i + "]") : null,
                    bookTitle: action.getElementCount(this.bookTitle + i + "']") > 0 ? action.getText(this.bookTitle + i + "']") : null,
                    bookSubTitle: action.getElementCount(this.bookSubTitle + i + "]") > 0 ? action.getText(this.bookSubTitle + i + "]") : null,
                    view_Btn: action.getElementCount(this.view_Btn + i) > 0 ? action.getText(this.view_Btn + i) : null,
                    //classWorkflow
                    addBookbtntxt: action.getElementCount(this.addBookbtn + i + "] div") > 0 ? action.getText(this.addBookbtn + i + "] div") : null,
                    addBookbtnIcon: action.getElementCount(this.addBookbtn + i + "] svg") > 0 ? action.waitForExist(this.addBookbtn + i + "] svg") : null,
                    //dashboard
                    bookAddedIcon: action.getElementCount(this.bookAddedIcon + i) > 0 ? action.waitForExist(this.bookAddedIcon + i) : null,
                    bookPlusIcon: action.getElementCount(this.bookPlusIcon + i) > 0 ? action.getText(this.bookPlusIcon + i) : null,
                    //browse
                    moreOptions: action.getElementCount(this.moreOptions + i) > 0 ? action.waitForExist(this.moreOptions + i) : null
                }
            }
        } else {
            obj = {
                //classWorkflow
                noBookTitle: action.getElementCount(this.noBookTitle) > 0 ? action.getText(this.noBookTitle) : null,
                noBookSubTitle: action.getElementCount(this.noBookSubTitle) > 0 ? action.getText(this.noBookSubTitle) : null,
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
            var creatClassPage = require('./createClass.page.js');
            action.waitForDisplayed(createClassPage.bookSkeleton, true, 30000)
            res = creatClassPage.isInitialized();
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
            var creatClassPage = require('./createClass.page.js');
            res = creatClassPage.isInitialized();
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
                res = this.isInitialized();
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

    getBookIndex: function(bookName) {
        logger.logInto(stackTrace.get());
        var index = 0;
        var arr = [];
        action.waitForDisplayed("circle[class*='MuiCircularProgress-circle']", undefined, true)
        res = action.findElements(this.bookTitle);
        if (res.length == 0) {
            res = res + " -- No Book available";
            logger.logInto(stackTrace.get(), res, 'error');
        } else {
            for (var i = 0; i < res.length; i++) {
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
        ret = dashboardPage.getDashboardPageData();
        for (var i = 0; i < ret.bookList.length; i++) {
            if (ret.bookList[i].bookTitle == bookName) {
                res = action.click(this.bookPlusIcon + i + "]");
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
        action.scrollIntoView("[title='" + bookTitle + "']");
        res = action.click("[title='" + bookTitle + "']")
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Book Title Clicked clicked");
            let bookViewTOC = require('./bookDetail.page.js');
            res = bookViewTOC.isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --Book Title NOT clicked", "error");
        return res;

    },

    clickViewButton: function(bookTitle) {
        let list;
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(this.view_Btn + i);
                if (res == true) {
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
        list = action.findElements(this.bookTitle);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == bookTitle) {
                res = action.click(this.bookPlusIcon + i);
                if (res == true) {
                    res = this.getBooksList();
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
            res = require('./classDrawer.page.js').isInitialized()
        } else
            logger.logInto(stackTrace.get(), res + " View Classes Button Not Clicked", "error");

        return res;
    },

    clickAddToMyBooks: function() {
        res = action.click(this.addToMyBooks_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Clicked");
            res = require('../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text()
        } else
            logger.logInto(stackTrace.get(), res + " Add To My Books Button Not Clicked", "error");

        return res;

    },

    clickOpenFlipbook: function() {
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), res + " Open Flipbook Button Clicked");
            if (action.getElementCount(this.flipBookCount) > 0)
                res = this.getListOfFlipbooks();
            else{
                //res = require('./flipbook.page.js').isInitialized()
            }
            
        } else
            logger.logInto(stackTrace.get(), res + " Open Flipbook Button Not Clicked", "error");

        return res;
    },

    getListofFlipbooks: function() {
        let list;
        var flipBooksList = [];
        list = action.findElements(this.flipBookCount);
        for (i = 0; i < list.length; i++) {
            flipBooksList[i] = action.getText(list[i])
        }
        return flipBooksList;
    },

    clickOpenFlipbookFromList: function(title) {
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
    /**************Browse*************************************/

    /**************Search*************************************/
    enterTextInSearchBox: function(searchText) {
        logger.logInto(stackTrace.get());
        res = action.setValue(this.searchBox, searchText)
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- searchText is entered");
        } else {
            res = res + " -- searchText is NOT entered";
            logger.logInto(stackTrace.get(), res, 'error');
        }
        return res;
    },

    getSearchList: function() {
        logger.logInto(stackTrace.get());
        let listItem;
        var obj;
        var searchList = [];
        action.waitForDisplayed(this.searchPopUp)
        listItem = action.findElements(this.searchList);
        listItemIcon = action.findElements(this.searchListIcon);

        for (i = 0; i < listItem.length; i++) {
            obj = {
                icon: action.getElementCount(this.listItemIcon[i]) > 0 ? action.waitForExist(this.listItemIcon[i]) : null,
                itemName: action.getElementCount(this.listItem[i]) > 0 ? action.getText(this.listItem[i]) : null
            }
            searchList[i] = obj;
        }
        logger.logInto(stackTrace.get(), JSON.stringify(searchList));
        return searchList;
    },

    clickOnSearchSuggestion: function(suggestionText) {
        logger.logInto(stackTrace.get());
        let listItem;
        var obj;
        var searchList = [];
        action.waitForDisplayed(this.searchPopUp)
        listItem = action.findElements(this.searchList);
        listItemIcon = action.findElements(this.searchListIcon);

        for (i = 0; i < listItem.length; i++) {
            if (action.getText(this.listItem[i]) == suggestionText) {
                res = action.click(this.listItem[i])
                if (res == true) {
                    logger.logInto(stackTrace.get(), res + "- suggestionText Clicked");
                    res = require('./bookDetail.page.js').isInitialized();
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

    clearSearchTextBox: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.clearSearchText)
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Search text cleared");
            res = action.waitForDisplayed(this.searchPopUp, true)
        } else
            logger.logInto(stackTrace.get(), res + "- Search text NOT cleared");

        return res;

    },

    clearSearch: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.clearSearchText)
        if (res == true) {
            logger.logInto(stackTrace.get(), res + "- Search cleared");
            res = this.getAddBookPageData()
        } else
            logger.logInto(stackTrace.get(), res + "- Search NOT cleared");

        return res;

    },

    clearSearchPill: function() {
        logger.logInto(stackTrace.get());
        res = action.click(this.searchPill)
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
            search_NoResult_title: action.getElementCount(this.search_NoResult_title) > 0 ? action.getText(this.search_NoResult_title) : null,
            search_NoResult_subTitle: action.getElementCount(this.search_NoResult_subTitle) > 0 ? action.getText(this.search_NoResult_subTitle) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;

    }

    /**************Search*************************************/
}