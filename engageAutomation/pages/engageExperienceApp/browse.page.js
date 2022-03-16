"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

    cardSkeleton: selectorFile.css.ComproEngage.browse.cardSkeleton,
    pageTitle: selectorFile.css.ComproEngage.browse.pageTitle,
    pageSubTitle: selectorFile.css.ComproEngage.browse.pageSubTitle,
    filtersBtn: selectorFile.css.ComproEngage.browse.filtersBtn,
    previousPageArrow: selectorFile.css.ComproEngage.browse.previousPageArrow,
    nextPageArrow: selectorFile.css.ComproEngage.browse.nextPageArrow,
    currentPage: selectorFile.css.ComproEngage.browse.currentPage,
    searchBox: selectorFile.css.ComproEngage.browse.searchBox,
    searchIcon: selectorFile.css.ComproEngage.browse.searchIcon,
    resourceCategory: selectorFile.css.ComproEngage.browse.resourceCategory,
    viewAllBtn: selectorFile.css.ComproEngage.browse.viewAllBtn,
    cardTitle: selectorFile.css.ComproEngage.browse.cardTitle,
    cardSubTitle: selectorFile.css.ComproEngage.browse.cardSubTitle,
    cardImage: selectorFile.css.ComproEngage.browse.cardImage,
    cardLockIcon: selectorFile.css.ComproEngage.browse.cardLockIcon,
    moreOptionsBtn: selectorFile.css.ComproEngage.browse.moreOptionsBtn,
    viewOption: selectorFile.css.ComproEngage.browse.viewOption,
    addToPlaylistOption: selectorFile.css.ComproEngage.browse.addToPlaylistOption,
    shareOption: selectorFile.css.ComproEngage.browse.shareOption,
    bookTitle: selectorFile.css.ComproEngage.browse.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.browse.bookSubTitle,
    bookImage: selectorFile.css.ComproEngage.browse.bookImage,
    viewBtn: selectorFile.css.ComproEngage.browse.viewBtn,
    addBookBtn: selectorFile.css.ComproEngage.browse.addBookBtn,
    addedIcon: selectorFile.css.ComproEngage.browse.addedIcon,
    bookMoreOptionsBtn: selectorFile.css.ComproEngage.browse.bookMoreOptionsBtn,
    viewClassOption: selectorFile.css.ComproEngage.browse.viewClassOption,
    createNewClassOption: selectorFile.css.ComproEngage.browse.createNewClassOption,
    addToMyBooksOption: selectorFile.css.ComproEngage.browse.addToMyBooksOption,
    removeFromMyBooksOption: selectorFile.css.ComproEngage.browse.removeFromMyBooksOption,
    openFlipbookOption: selectorFile.css.ComproEngage.browse.openFlipbookOption,
    listOfPlaylist: selectorFile.css.ComproEngage.browse.listOfPlaylist,
    searchList: selectorFile.css.ComproEngage.browse.searchList,
    showMoreResults: selectorFile.css.ComproEngage.browse.showMoreResults,
    noResultListItemTitle: selectorFile.css.ComproEngage.browse.noResultListItemTitle,
    noResultListItemSubtitle: selectorFile.css.ComproEngage.browse.noResultListItemSubtitle,
    clearSearch: selectorFile.css.ComproEngage.browse.clearSearch,
    searchCount: selectorFile.css.ComproEngage.browse.searchCount,
    search_NoResult_img: selectorFile.css.ComproEngage.browse.search_NoResult_img,
    search_NoResult_title: selectorFile.css.ComproEngage.browse.search_NoResult_title,
    search_NoResult_subTitle: selectorFile.css.ComproEngage.browse.search_NoResult_subTitle,
    searchPill: selectorFile.css.ComproEngage.browse.searchPill,
    closeSearchPill: selectorFile.css.ComproEngage.browse.closeSearchPill,
    goToPage: selectorFile.css.ComproEngage.browse.goToPage,
    filterMenuTitle: selectorFile.css.ComproEngage.browse.filterMenuTitle,
    filterMenuCloseBtn: selectorFile.css.ComproEngage.browse.filterMenuCloseBtn,
    filterMenuFilterCount: selectorFile.css.ComproEngage.browse.filterMenuFilterCount,
    filterMenuClearAllBtn: selectorFile.css.ComproEngage.browse.filterMenuClearAllBtn,
    filterMenuApplyBtn: selectorFile.css.ComproEngage.browse.filterMenuApplyBtn,

    isInitialized: function () {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.searchBox),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

        getData_browsePage: function () {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.cardSkeleton, undefined, true); //manually edited
        var obj;
        obj = {
            pageTitle: (action.getElementCount(this.pageTitle) > 0) ? action.getText(this.pageTitle) : null,
            pageSubTitle: (action.getElementCount(this.pageSubTitle) > 0) ? action.getText(this.pageSubTitle) : null,
            filtersBtn: (action.getElementCount(this.filtersBtn) > 0) ? action.getText(this.filtersBtn) : null,
            previousPageArrow: (action.getElementCount(this.previousPageArrow) > 0) ? action.getText(this.previousPageArrow) : null,
            nextPageArrow: (action.getElementCount(this.nextPageArrow) > 0) ? action.getText(this.nextPageArrow) : null,
            currentPage: (action.getElementCount(this.currentPage) > 0) ? action.getText(this.currentPage) : null,
            searchBox: (action.getElementCount(this.searchBox) > 0) ? action.getText(this.searchBox) : null,
            searchIcon: (action.getElementCount(this.searchIcon) > 0) ? action.waitForDisplayed(this.searchIcon) : false,
            clearSearch: (action.getElementCount(this.clearSearch) > 0) ? action.getText(this.clearSearch) : null,
            searchCount: (action.getElementCount(this.searchCount) > 0) ? action.getText(this.searchCount) : null,
            searchPill: (action.getElementCount(this.searchPill) > 0) ? action.getText(this.searchPill) : null,
            tabInfo: appShellPage.getTabsListData() //manually edited
        }
        return obj;
    },

    getData_resourceCategory: function (resourceCategoryName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.resourceCategory);
        var list = action.findElements(this.resourceCategory);
        if (resourceCategoryName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.resourceCategory + i) == resourceCategoryName) {
                    obj[0] = {
                        resourceCategory: (action.getElementCount(this.resourceCategory + i + "]") > 0) ? action.getText(this.resourceCategory + i + "]") : null,
                        viewAllBtn: (action.getElementCount(this.viewAllBtn + i + "]") > 0) ? action.getText(this.viewAllBtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    resourceCategory: (action.getElementCount(this.resourceCategory + i + "]") > 0) ? action.getText(this.resourceCategory + i + "]") : null,
                    viewAllBtn: (action.getElementCount(this.viewAllBtn + i + "]") > 0) ? action.getText(this.viewAllBtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_resourceList: function (cardTitleName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.cardTitle);
        var list = this.getResourceIndex();
        if (cardTitleName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.cardTitle + list[i]) == cardTitleName) {
                    obj[0] = {
                        cardTitle: (action.getElementCount(this.cardTitle + list[i]) > 0) ? action.getText(this.cardTitle + list[i]) : null,
                        cardSubTitle: (action.getElementCount(this.cardSubTitle + list[i]) > 0) ? action.getText(this.cardSubTitle + list[i]) : null,
                        cardImage: (action.getElementCount(this.cardImage + list[i]) > 0) ? action.waitForDisplayed(this.cardImage + list[i]) : null,
                        cardLockIcon: (action.getElementCount(this.cardLockIcon + list[i]) > 0) ? action.waitForDisplayed(this.cardLockIcon + list[i]) : false,
                        moreOptionsBtn: (action.getElementCount(this.moreOptionsBtn + list[i]) > 0) ? action.getText(this.moreOptionsBtn + list[i]) : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    cardTitle: (action.getElementCount(this.cardTitle + list[i]) > 0) ? action.getText(this.cardTitle + list[i]) : null,
                    cardSubTitle: (action.getElementCount(this.cardSubTitle + list[i]) > 0) ? action.getText(this.cardSubTitle + list[i]) : null,
                    cardImage: (action.getElementCount(this.cardImage + list[i]) > 0) ? action.waitForDisplayed(this.cardImage + list[i]) : null,
                    cardLockIcon: (action.getElementCount(this.cardLockIcon + list[i]) > 0) ? action.waitForDisplayed(this.cardLockIcon + list[i]) : false,
                    moreOptionsBtn: (action.getElementCount(this.moreOptionsBtn + list[i]) > 0) ? action.getText(this.moreOptionsBtn + list[i]) : null,
                }
            }
        }
        return obj;
    },

    getData_moreOptions: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            viewOption: (action.getElementCount(this.viewOption) > 0) ? action.getText(this.viewOption) : null,
            addToPlaylistOption: (action.getElementCount(this.addToPlaylistOption) > 0) ? action.getText(this.addToPlaylistOption) : null,
            shareOption: (action.getElementCount(this.shareOption) > 0) ? action.getText(this.shareOption) : null,
        }
        return obj;
    },

    getData_bookList: function (bookTitleName) {
        logger.logInto(stackTrace.get());
        var obj = [];
        action.waitForDisplayed(this.bookTitle);
        var list = action.findElements(this.bookTitle);
        if (bookTitleName) {
            for (var i = 0; i < list.length; i++) {
                if (action.getText(this.bookTitle + i) == bookTitleName) {
                    obj[0] = {
                        bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
                        bookSubTitle: (action.getElementCount(this.bookSubTitle + i + "]") > 0) ? action.getText(this.bookSubTitle + i + "]") : null,
                        bookImage: (action.getElementCount(this.bookImage + i + "]") > 0) ? action.waitForDisplayed(this.bookImage + i + "]") : null,
                        viewBtn: (action.getElementCount(this.viewBtn + i + "]") > 0) ? action.getText(this.viewBtn + i + "]") : null,
                        addBookBtn: (action.getElementCount(this.addBookBtn + i + "]") > 0) ? action.getText(this.addBookBtn + i + "]") : null,
                        bookMoreOptionsBtn: (action.getElementCount(this.bookMoreOptionsBtn + i + "]") > 0) ? action.getText(this.bookMoreOptionsBtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    bookTitle: (action.getElementCount(this.bookTitle + i + "]") > 0) ? action.getText(this.bookTitle + i + "]") : null,
                    bookSubTitle: (action.getElementCount(this.bookSubTitle + i + "]") > 0) ? action.getText(this.bookSubTitle + i + "]") : null,
                    bookImage: (action.getElementCount(this.bookImage + i + "]") > 0) ? action.waitForDisplayed(this.bookImage + i + "]") : null,
                    viewBtn: (action.getElementCount(this.viewBtn + i + "]") > 0) ? action.getText(this.viewBtn + i + "]") : null,
                    addBookBtn: (action.getElementCount(this.addBookBtn + i + "]") > 0) ? action.getText(this.addBookBtn + i + "]") : null,
                    bookMoreOptionsBtn: (action.getElementCount(this.bookMoreOptionsBtn + i + "]") > 0) ? action.getText(this.bookMoreOptionsBtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_bookMoreOptions: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            viewClassOption: (action.getElementCount(this.viewClassOption) > 0) ? action.getText(this.viewClassOption) : null,
            createNewClassOption: (action.getElementCount(this.createNewClassOption) > 0) ? action.getText(this.createNewClassOption) : null,
            addToMyBooksOption: (action.getElementCount(this.addToMyBooksOption) > 0) ? action.getText(this.addToMyBooksOption) : null,
            removeFromMyBooksOption: (action.getElementCount(this.removeFromMyBooksOption) > 0) ? action.getText(this.removeFromMyBooksOption) : null,
            openFlipbookOption: (action.getElementCount(this.openFlipbookOption) > 0) ? action.getText(this.openFlipbookOption) : null,
        }
        return obj;
    },

    getData_addToPlaylist: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            listOfPlaylist: this.listOfPlaylist_Data(),
        }
        return obj;
    },

    listOfPlaylist_Data: function () {
        logger.logInto(stackTrace.get());
        var i, list;
        var listOfPlaylist_Arr = [];
        action.waitForDisplayed(this.listOfPlaylist);
        list = action.findElements(this.listOfPlaylist);
        for (i = 0; i < list.length; i++) {
            listOfPlaylist_Arr[i] = action.getText(list[i])
        }
        logger.logInto(stackTrace.get(), listOfPlaylist_Arr);
        return listOfPlaylist_Arr;
    },

    getData_searchList: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            searchList: this.searchList_Data(),
            showMoreResults: (action.getElementCount(this.showMoreResults) > 0) ? action.getText(this.showMoreResults) : null,
            noResultListItemTitle: (action.getElementCount(this.noResultListItemTitle) > 0) ? action.getText(this.noResultListItemTitle) : null,
            noResultListItemSubtitle: (action.getElementCount(this.noResultListItemSubtitle) > 0) ? action.getText(this.noResultListItemSubtitle) : null,
        }
        return obj;
    },

    searchList_Data: function () {
        logger.logInto(stackTrace.get());
        var i, list;
        var searchList_Arr = [];
        list = action.findElements(this.searchList);
        for (i = 0; i < list.length; i++) {
            searchList_Arr[i] = action.getText(list[i])
        }
        logger.logInto(stackTrace.get(), searchList_Arr);
        return searchList_Arr;
    },

    getData_searchNoResults: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            search_NoResult_img: (action.getElementCount(this.search_NoResult_img) > 0) ? action.waitForDisplayed(this.search_NoResult_img) : false,
            search_NoResult_title: (action.getElementCount(this.search_NoResult_title) > 0) ? action.getText(this.search_NoResult_title) : null,
            search_NoResult_subTitle: (action.getElementCount(this.search_NoResult_subTitle) > 0) ? action.getText(this.search_NoResult_subTitle) : null,
        }
        return obj;
    },

    getData_filterMenu: function () {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            filterMenuTitle: (action.getElementCount(this.filterMenuTitle) > 0) ? action.getText(this.filterMenuTitle) : null,
            filterMenuCloseBtn: (action.getElementCount(this.filterMenuCloseBtn) > 0) ? action.getText(this.filterMenuCloseBtn) : null,
            filterMenuFilterCount: (action.getElementCount(this.filterMenuFilterCount) > 0) ? action.getText(this.filterMenuFilterCount) : null,
            filterMenuClearAllBtn: (action.getElementCount(this.filterMenuClearAllBtn) > 0) ? action.getText(this.filterMenuClearAllBtn) : null,
            filterMenuApplyBtn: (action.getElementCount(this.filterMenuApplyBtn) > 0) ? action.getText(this.filterMenuApplyBtn) : null,
        }
        return obj;
    },

    click_filtersBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filtersBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filtersBtn is clicked");
            res = this.getData_filterMenu();
        }
        else {
            logger.logInto(stackTrace.get(), res + "filtersBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_previousPageArrow: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.previousPageArrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " previousPageArrow is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "previousPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_nextPageArrow: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.nextPageArrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " nextPageArrow is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "nextPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllBtn: function (resourceCategoryName) {
        logger.logInto(stackTrace.get());
        var i, res;
        var resourceCategory = action.findElements(this.resourceCategory);
        var viewAllBtn = action.findElements(this.viewAllBtn);
        for (i = 0; i < resourceCategory.length; i++) {
            if ((action.getText(resourceCategory[i])) == resourceCategoryName) {
                res = action.click(viewAllBtn[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --viewAllBtn clicked");
            res = this.getData_resourceCategory();
        }
        else
            logger.logInto(stackTrace.get(), " --viewAllBtn NOT clicked", "error")
        return res;
    },

    click_cardImage: function (cardTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = this.getResourceIndex();
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.cardTitle + list[i])) == cardTitleName) {
                res = action.click(this.cardImage + list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --cardImage clicked");
            res = require('./activityPlayer.page').isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), " --cardImage NOT clicked", "error")
        return res;
    },

    click_moreOptionsBtn: function (cardTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = this.getResourceIndex();
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.cardTitle + list[i])) == cardTitleName) {
                res = action.click(this.moreOptionsBtn + list[i]);
                action.waitForDisplayed(action.parentElement(this.viewOption));
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --moreOptionsBtn clicked");
            res = this.getData_moreOptions();
        }
        else
            logger.logInto(stackTrace.get(), " --moreOptionsBtn NOT clicked", "error")
        return res;
    },

    click_viewOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.viewOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " viewOption is clicked");
            res = require('./activityPlayer.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "viewOption is NOT clicked", 'error');
        }
        return res;
    },

    click_addToPlaylistOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.addToPlaylistOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addToPlaylistOption is clicked");
            res = this.getData_addToPlaylist();
        }
        else {
            logger.logInto(stackTrace.get(), res + "addToPlaylistOption is NOT clicked", 'error');
        }
        return res;
    },

    click_shareOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.shareOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " shareOption is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "shareOption is NOT clicked", 'error');
        }
        return res;
    },

    click_bookImage: function (bookTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.bookImage);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --bookImage clicked");
            res = require('./viewBook.page').isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), " --bookImage NOT clicked", "error")
        return res;
    },

    click_viewBtn: function (bookTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.viewBtn);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --viewBtn clicked");
            res = require('./viewBook.page').isInitialized();
        }
        else
            logger.logInto(stackTrace.get(), " --viewBtn NOT clicked", "error")
        return res;
    },

    click_addBookBtn: function (bookTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.addBookBtn);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --addBookBtn clicked");
            res = action.waitForDisplayed(this.addedIcon + i + "]");
        }
        else
            logger.logInto(stackTrace.get(), " --addBookBtn NOT clicked", "error")
        return res;
    },

    click_bookMoreOptionsBtn: function (bookTitleName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.bookMoreOptionsBtn);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(this.bookTitle + i + "]")) == bookTitleName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --bookMoreOptionsBtn clicked");
            res = this.getData_bookMoreOptions();
        }
        else
            logger.logInto(stackTrace.get(), " --bookMoreOptionsBtn NOT clicked", "error")
        return res;
    },

    click_viewClassOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.viewClassOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " viewClassOption is clicked");
            res = require('./classDrawer.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "viewClassOption is NOT clicked", 'error');
        }
        return res;
    },

    click_createNewClassOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.createNewClassOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " createNewClassOption is clicked");
            res = require('./createClass.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "createNewClassOption is NOT clicked", 'error');
        }
        return res;
    },

    click_addToMyBooksOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.addToMyBooksOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addToMyBooksOption is clicked");
            res = action.waitForDisplayed(this.addToMyBooksOption, undefined, true);
        }
        else {
            logger.logInto(stackTrace.get(), res + "addToMyBooksOption is NOT clicked", 'error');
        }
        return res;
    },

    click_removeFromMyBooksOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.removeFromMyBooksOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " removeFromMyBooksOption is clicked");
            res = require('./dashboard.page').getData_removeBookDialog();
        }
        else {
            logger.logInto(stackTrace.get(), res + "removeFromMyBooksOption is NOT clicked", 'error');
        }
        return res;
    },

    click_openFlipbookOption: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.openFlipbookOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " openFlipbookOption is clicked");
            res = require('./flipbook.page').isInitialized();
        }
        else {
            logger.logInto(stackTrace.get(), res + "openFlipbookOption is NOT clicked", 'error');
        }
        return res;
    },

    click_listOfPlaylist: function (listOfPlaylistName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.listOfPlaylist);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(list[i])) == listOfPlaylistName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --listOfPlaylist clicked");
        }
        else
            logger.logInto(stackTrace.get(), " --listOfPlaylist NOT clicked", "error")
        return res;
    },

    click_searchList: function (searchListName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.searchList);
        for (i = 0; i < list.length; i++) {
            if ((action.getText(list[i])) == searchListName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --searchList clicked");
            res = action.waitForDocumentLoad();
        }
        else
            logger.logInto(stackTrace.get(), " --searchList NOT clicked", "error")
        return res;
    },

    click_showMoreResults: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showMoreResults);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showMoreResults is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "showMoreResults is NOT clicked", 'error');
        }
        return res;
    },

    click_clearSearch: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.clearSearch);
        if (true == res) {
            logger.logInto(stackTrace.get(), " clearSearch is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "clearSearch is NOT clicked", 'error');
        }
        return res;
    },

    click_closeSearchPill: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.closeSearchPill);
        if (true == res) {
            logger.logInto(stackTrace.get(), " closeSearchPill is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "closeSearchPill is NOT clicked", 'error');
        }
        return res;
    },

    click_goToPage: function (num) { //manual edit
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.goToPage + num);
        if (true == res) {
            logger.logInto(stackTrace.get(), " goToPage is clicked");
            res = this.getData_browsePage();
        }
        else {
            logger.logInto(stackTrace.get(), res + "goToPage is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuCloseBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuCloseBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuCloseBtn is clicked");
            res = action.waitForDisplayed(this.filterMenuCloseBtn, undefined, true);
        }
        else {
            logger.logInto(stackTrace.get(), res + "filterMenuCloseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuClearAllBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuClearAllBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuClearAllBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "filterMenuClearAllBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuApplyBtn: function () {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuApplyBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuApplyBtn is clicked");
        }
        else {
            logger.logInto(stackTrace.get(), res + "filterMenuApplyBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_searchBox: function (value) {
        var res;
        logger.logInto(stackTrace.get());
        res = action.setValue(this.searchBox, value);
        if (true == res) {
            logger.logInto(stackTrace.get(), "Value is entered in searchBox");
        } else {
            logger.logInto(stackTrace.get(), res + "Value is NOT entered in searchBox", 'error');
        }
        return res;
    },

    click_removeBook_cancelBtn: function () { //manual edit
        logger.logInto(stackTrace.get());
        return require('./dashboard.page').click_removeBook_cancelBtn();
      },
    
      click_removeBook_removeBtn: function () { //manual edit
        logger.logInto(stackTrace.get());
        return require('./dashboard.page').click_removeBook_removeBtn();
      },

    pressEnter: function () { //manual edit
        logger.logInto(stackTrace.get());
        var res = action.keyPress('Enter')
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Enter key pressed");
            res = this.getData_browsePage();
        } else
            logger.logInto(stackTrace.get(), res + " -- Enter key not pressed");
        return res;

    },

    getResourceIndex: function () { //manual edit
        logger.logInto(stackTrace.get());
        var cardTitle = action.findElements(this.cardTitle);
        var rIndex = [], res;
        if (cardTitle.length > 0) {
            for (var i = 0; i < cardTitle.length; i++) {
                res = action.getAttribute(cardTitle[i], "data-tid");
                res = res.split('-');
                rIndex[i] = res[2];
            }
        }
        return rIndex;
    }
}
