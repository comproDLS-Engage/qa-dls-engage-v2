"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile =  jsonParserUtil.jsonParser(selectorDir)
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

    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.searchBox),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

        getData_browsePage: async function () {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.cardSkeleton, undefined, true); //manually edited
        var obj;
        obj = {
            pageTitle: ((await action.getElementCount(this.pageTitle)) > 0) ? await action.getText(this.pageTitle) : null,
            pageSubTitle: ((await action.getElementCount(this.pageSubTitle)) > 0) ? await action.getText(this.pageSubTitle) : null,
            filtersBtn: ((await action.getElementCount(this.filtersBtn)) > 0) ? await action.getText(this.filtersBtn) : null,
            previousPageArrow: ((await action.getElementCount(this.previousPageArrow)) > 0) ? await action.getText(this.previousPageArrow) : null,
            nextPageArrow: ((await action.getElementCount(this.nextPageArrow)) > 0) ? await action.getText(this.nextPageArrow) : null,
            currentPage: ((await action.getElementCount(this.currentPage)) > 0) ? await action.getText(this.currentPage) : null,
            searchBox: ((await action.getElementCount(this.searchBox)) > 0) ? await action.getText(this.searchBox) : null,
            searchIcon: ((await action.getElementCount(this.searchIcon)) > 0) ? await action.waitForDisplayed(this.searchIcon) : false,
            clearSearch: ((await action.getElementCount(this.clearSearch)) > 0) ? await action.getText(this.clearSearch) : null,
            searchCount: ((await action.getElementCount(this.searchCount)) > 0) ? await action.getText(this.searchCount) : null,
            searchPill: ((await action.getElementCount(this.searchPill)) > 0) ? await action.getText(this.searchPill) : null,
            tabInfo: await appShellPage.getTabsListData() //manually edited
        }
        return obj;
    },

    getData_resourceCategory: async function (resourceCategoryName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.resourceCategory);
        var list = await action.findElements(this.resourceCategory);
        if (resourceCategoryName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.resourceCategory + i)) == resourceCategoryName) {
                    obj[0] = {
                        resourceCategory: ((await action.getElementCount(this.resourceCategory + i + "]")) > 0) ? await action.getText(this.resourceCategory + i + "]") : null,
                        viewAllBtn: ((await action.getElementCount(this.viewAllBtn + i + "]")) > 0) ? await action.getText(this.viewAllBtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    resourceCategory: ((await action.getElementCount(this.resourceCategory + i + "]")) > 0) ? await action.getText(this.resourceCategory + i + "]") : null,
                    viewAllBtn: ((await action.getElementCount(this.viewAllBtn + i + "]")) > 0) ? await action.getText(this.viewAllBtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_resourceList: async function (cardTitleName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.cardTitle);
        var list = await this.getResourceIndex();
        if (cardTitleName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.cardTitle + list[i])) == cardTitleName) {
                    obj[0] = {
                        cardTitle: ((await action.getElementCount(this.cardTitle + list[i])) > 0) ? await action.getText(this.cardTitle + list[i]) : null,
                        cardSubTitle: ((await action.getElementCount(this.cardSubTitle + list[i])) > 0) ? await action.getText(this.cardSubTitle + list[i]) : null,
                        cardImage: ((await action.getElementCount(this.cardImage + list[i])) > 0) ? await action.waitForDisplayed(this.cardImage + list[i]) : null,
                        cardLockIcon: ((await action.getElementCount(this.cardLockIcon + list[i])) > 0) ? await action.waitForDisplayed(this.cardLockIcon + list[i]) : false,
                        moreOptionsBtn: ((await action.getElementCount(this.moreOptionsBtn + list[i])) > 0) ? await action.getText(this.moreOptionsBtn + list[i]) : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    cardTitle: ((await action.getElementCount(this.cardTitle + list[i])) > 0) ? await action.getText(this.cardTitle + list[i]) : null,
                    cardSubTitle: ((await action.getElementCount(this.cardSubTitle + list[i])) > 0) ? await action.getText(this.cardSubTitle + list[i]) : null,
                    cardImage: ((await action.getElementCount(this.cardImage + list[i])) > 0) ? await action.waitForDisplayed(this.cardImage + list[i]) : null,
                    cardLockIcon: ((await action.getElementCount(this.cardLockIcon + list[i])) > 0) ? await action.waitForDisplayed(this.cardLockIcon + list[i]) : false,
                    moreOptionsBtn: ((await action.getElementCount(this.moreOptionsBtn + list[i])) > 0) ? await action.getText(this.moreOptionsBtn + list[i]) : null,
                }
            }
        }
        return obj;
    },

    getData_moreOptions: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            viewOption: ((await action.getElementCount(this.viewOption)) > 0) ? await action.getText(this.viewOption) : null,
            addToPlaylistOption: ((await action.getElementCount(this.addToPlaylistOption)) > 0) ? await action.getText(this.addToPlaylistOption) : null,
            shareOption: ((await action.getElementCount(this.shareOption)) > 0) ? await action.getText(this.shareOption) : null,
        }
        return obj;
    },

    getData_bookList: async function (bookTitleName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.bookTitle);
        var list = await action.findElements(this.bookTitle);
        if (bookTitleName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.bookTitle + i)) == bookTitleName) {
                    obj[0] = {
                        bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
                        bookSubTitle: ((await action.getElementCount(this.bookSubTitle + i + "]")) > 0) ? await action.getText(this.bookSubTitle + i + "]") : null,
                        bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.waitForDisplayed(this.bookImage + i + "]") : null,
                        viewBtn: ((await action.getElementCount(this.viewBtn + i + "]")) > 0) ? await action.getText(this.viewBtn + i + "]") : null,
                        addBookBtn: ((await action.getElementCount(this.addBookBtn + i + "]")) > 0) ? await action.getText(this.addBookBtn + i + "]") : null,
                        bookMoreOptionsBtn: ((await action.getElementCount(this.bookMoreOptionsBtn + i + "]")) > 0) ? await action.getText(this.bookMoreOptionsBtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    bookTitle: ((await action.getElementCount(this.bookTitle + i + "]")) > 0) ? await action.getText(this.bookTitle + i + "]") : null,
                    bookSubTitle: ((await action.getElementCount(this.bookSubTitle + i + "]")) > 0) ? await action.getText(this.bookSubTitle + i + "]") : null,
                    bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.waitForDisplayed(this.bookImage + i + "]") : null,
                    viewBtn: ((await action.getElementCount(this.viewBtn + i + "]")) > 0) ? await action.getText(this.viewBtn + i + "]") : null,
                    addBookBtn: ((await action.getElementCount(this.addBookBtn + i + "]")) > 0) ? await action.getText(this.addBookBtn + i + "]") : null,
                    bookMoreOptionsBtn: ((await action.getElementCount(this.bookMoreOptionsBtn + i + "]")) > 0) ? await action.getText(this.bookMoreOptionsBtn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_bookMoreOptions: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            viewClassOption: ((await action.getElementCount(this.viewClassOption)) > 0) ? await action.getText(this.viewClassOption) : null,
            createNewClassOption: ((await action.getElementCount(this.createNewClassOption)) > 0) ? await action.getText(this.createNewClassOption) : null,
            addToMyBooksOption: ((await action.getElementCount(this.addToMyBooksOption)) > 0) ? await action.getText(this.addToMyBooksOption) : null,
            removeFromMyBooksOption: ((await action.getElementCount(this.removeFromMyBooksOption)) > 0) ? await action.getText(this.removeFromMyBooksOption) : null,
            openFlipbookOption: ((await action.getElementCount(this.openFlipbookOption)) > 0) ? await action.getText(this.openFlipbookOption) : null,
        }
        return obj;
    },

    getData_addToPlaylist: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            listOfPlaylist: await this.listOfPlaylist_Data(),
        }
        return obj;
    },

    listOfPlaylist_Data: async function () {
        await logger.logInto(await stackTrace.get());
        var i, list;
        var listOfPlaylist_Arr = [];
        await action.waitForDisplayed(this.listOfPlaylist);
        list = await action.findElements(this.listOfPlaylist);
        for (i = 0; i < list.length; i++) {
            listOfPlaylist_Arr[i] = await action.getText(list[i])
        }
        await logger.logInto(await stackTrace.get(), listOfPlaylist_Arr);
        return listOfPlaylist_Arr;
    },

    getData_searchList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            searchList: await this.searchList_Data(),
            showMoreResults: ((await action.getElementCount(this.showMoreResults)) > 0) ? await action.getText(this.showMoreResults) : null,
            noResultListItemTitle: ((await action.getElementCount(this.noResultListItemTitle)) > 0) ? await action.getText(this.noResultListItemTitle) : null,
            noResultListItemSubtitle: ((await action.getElementCount(this.noResultListItemSubtitle)) > 0) ? await action.getText(this.noResultListItemSubtitle) : null,
        }
        return obj;
    },

    searchList_Data: async function () {
        await logger.logInto(await stackTrace.get());
        var i, list;
        var searchList_Arr = [];
        list = await action.findElements(this.searchList);
        for (i = 0; i < list.length; i++) {
            searchList_Arr[i] = await action.getText(list[i])
        }
        await logger.logInto(await stackTrace.get(), searchList_Arr);
        return searchList_Arr;
    },

    getData_searchNoResults: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            search_NoResult_img: ((await action.getElementCount(this.search_NoResult_img)) > 0) ? await action.waitForDisplayed(this.search_NoResult_img) : false,
            search_NoResult_title: ((await action.getElementCount(this.search_NoResult_title)) > 0) ? await action.getText(this.search_NoResult_title) : null,
            search_NoResult_subTitle: ((await action.getElementCount(this.search_NoResult_subTitle)) > 0) ? await action.getText(this.search_NoResult_subTitle) : null,
        }
        return obj;
    },

    getData_filterMenu: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            filterMenuTitle: ((await action.getElementCount(this.filterMenuTitle)) > 0) ? await action.getText(this.filterMenuTitle) : null,
            filterMenuCloseBtn: ((await action.getElementCount(this.filterMenuCloseBtn)) > 0) ? await action.getText(this.filterMenuCloseBtn) : null,
            filterMenuFilterCount: ((await action.getElementCount(this.filterMenuFilterCount)) > 0) ? await action.getText(this.filterMenuFilterCount) : null,
            filterMenuClearAllBtn: ((await action.getElementCount(this.filterMenuClearAllBtn)) > 0) ? await action.getText(this.filterMenuClearAllBtn) : null,
            filterMenuApplyBtn: ((await action.getElementCount(this.filterMenuApplyBtn)) > 0) ? await action.getText(this.filterMenuApplyBtn) : null,
        }
        return obj;
    },

    click_filtersBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.filtersBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " filtersBtn is clicked");
            res = await this.getData_filterMenu();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "filtersBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_previousPageArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previousPageArrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " previousPageArrow is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previousPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_nextPageArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.nextPageArrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " nextPageArrow is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "nextPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllBtn: async function (resourceCategoryName) {
        await logger.logInto(await stackTrace.get());
        var i, res;
        var resourceCategory = await action.findElements(this.resourceCategory);
        var viewAllBtn = await action.findElements(this.viewAllBtn);
        for (i = 0; i < resourceCategory.length; i++) {
            if (((await action.getText(resourceCategory[i]))) == resourceCategoryName) {
                res = await action.click(viewAllBtn[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --viewAllBtn clicked");
            res = await this.getData_resourceCategory();
        }
        else
            await logger.logInto(await stackTrace.get(), " --viewAllBtn NOT clicked", "error")
        return res;
    },

    click_cardImage: async function (cardTitleName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await this.getResourceIndex();
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.cardTitle + list[i]))) == cardTitleName) {
                res = await action.click(this.cardImage + list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --cardImage clicked");
            res = await await require('./activityPlayer.page').isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), " --cardImage NOT clicked", "error")
        return res;
    },

    click_moreOptionsBtn: async function (cardTitleName) {
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.cardSkeleton, undefined, true); //manually edited
        var i, list, res;
        list = await this.getResourceIndex();
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.cardTitle + list[i]))) == cardTitleName) {
                res = await action.click(this.moreOptionsBtn + list[i]);
                await action.waitForDisplayed(await action.parentElement(this.viewOption));
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --moreOptionsBtn clicked");
            res = await this.getData_moreOptions();
        }
        else
            await logger.logInto(await stackTrace.get(), " --moreOptionsBtn NOT clicked", "error")
        return res;
    },

    click_viewOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewOption is clicked");
            res = await await require('./activityPlayer.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewOption is NOT clicked", 'error');
        }
        return res;
    },

    click_addToPlaylistOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addToPlaylistOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addToPlaylistOption is clicked");
            res = await this.getData_addToPlaylist();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addToPlaylistOption is NOT clicked", 'error');
        }
        return res;
    },

    click_shareOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.shareOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " shareOption is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "shareOption is NOT clicked", 'error');
        }
        return res;
    },

    click_bookImage: async function (bookTitleName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.bookImage);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --bookImage clicked");
            res = await await require('./viewBook.page').isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), " --bookImage NOT clicked", "error")
        return res;
    },

    click_viewBtn: async function (bookTitleName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.viewBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --viewBtn clicked");
            res = await await require('./viewBook.page').isInitialized();
        }
        else
            await logger.logInto(await stackTrace.get(), " --viewBtn NOT clicked", "error")
        return res;
    },

    click_addBookBtn: async function (bookTitleName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.addBookBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --addBookBtn clicked");
            res = await action.waitForDisplayed(this.addedIcon + i + "]");
        }
        else
            await logger.logInto(await stackTrace.get(), " --addBookBtn NOT clicked", "error")
        return res;
    },

    click_bookMoreOptionsBtn: async function (bookTitleName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.bookMoreOptionsBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookTitle + i + "]"))) == bookTitleName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --bookMoreOptionsBtn clicked");
            res = await this.getData_bookMoreOptions();
        }
        else
            await logger.logInto(await stackTrace.get(), " --bookMoreOptionsBtn NOT clicked", "error")
        return res;
    },

    click_viewClassOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewClassOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewClassOption is clicked");
            res = await await require('./classDrawer.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewClassOption is NOT clicked", 'error');
        }
        return res;
    },

    click_createNewClassOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.createNewClassOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " createNewClassOption is clicked");
            res = await await require('./createClass.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "createNewClassOption is NOT clicked", 'error');
        }
        return res;
    },

    click_addToMyBooksOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addToMyBooksOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addToMyBooksOption is clicked");
            res = await action.waitForDisplayed(this.addToMyBooksOption, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addToMyBooksOption is NOT clicked", 'error');
        }
        return res;
    },

    click_removeFromMyBooksOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.removeFromMyBooksOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeFromMyBooksOption is clicked");
            res = await await require('./dashboard.page').getData_removeBookDialog();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeFromMyBooksOption is NOT clicked", 'error');
        }
        return res;
    },

    click_openFlipbookOption: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.openFlipbookOption);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " openFlipbookOption is clicked");
            res = await await require('./flipbook.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "openFlipbookOption is NOT clicked", 'error');
        }
        return res;
    },

    click_listOfPlaylist: async function (listOfPlaylistName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.listOfPlaylist);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(list[i]))) == listOfPlaylistName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --listOfPlaylist clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --listOfPlaylist NOT clicked", "error")
        return res;
    },

    click_searchList: async function (searchListName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.searchList);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(list[i]))) == searchListName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --searchList clicked");
            res = await action.waitForDocumentLoad();
        }
        else
            await logger.logInto(await stackTrace.get(), " --searchList NOT clicked", "error")
        return res;
    },

    click_showMoreResults: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showMoreResults);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showMoreResults is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showMoreResults is NOT clicked", 'error');
        }
        return res;
    },

    click_clearSearch: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.clearSearch);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " clearSearch is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "clearSearch is NOT clicked", 'error');
        }
        return res;
    },

    click_closeSearchPill: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeSearchPill);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeSearchPill is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeSearchPill is NOT clicked", 'error');
        }
        return res;
    },

    click_goToPage: async function (num) { //manual edit
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.goToPage + num);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " goToPage is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "goToPage is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuCloseBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.filterMenuCloseBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " filterMenuCloseBtn is clicked");
            res = await action.waitForDisplayed(this.filterMenuCloseBtn, undefined, true);
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "filterMenuCloseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuClearAllBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.filterMenuClearAllBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " filterMenuClearAllBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "filterMenuClearAllBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuApplyBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.filterMenuApplyBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " filterMenuApplyBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "filterMenuApplyBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_searchBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.searchBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in searchBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in searchBox", 'error');
        }
        return res;
    },

    click_removeBook_cancelBtn: async function () { //manual edit
        await logger.logInto(await stackTrace.get());
        return await require('./dashboard.page').click_removeBook_cancelBtn();
      },
    
      click_removeBook_removeBtn: async function () { //manual edit
        await logger.logInto(await stackTrace.get());
        return await require('./dashboard.page').click_removeBook_removeBtn();
      },

    pressEnter: async function () { //manual edit
        await logger.logInto(await stackTrace.get());
        var res = await action.keyPress('Enter')
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " -- Enter key pressed");
            res = await this.getData_browsePage();
        } else
            await logger.logInto(await stackTrace.get(), res + " -- Enter key not pressed");
        return res;

    },

    getResourceIndex: async function () { //manual edit
        await logger.logInto(await stackTrace.get());
        var cardTitle = await action.findElements(this.cardTitle);
        var rIndex = [], res;
        if (cardTitle.length > 0) {
            for (var i = 0; i < cardTitle.length; i++) {
                res = await action.getAttribute(cardTitle[i], "data-tid");
                res = res.split('-');
                rIndex[i] = res[2];
            }
        }
        return rIndex;
    }
}
