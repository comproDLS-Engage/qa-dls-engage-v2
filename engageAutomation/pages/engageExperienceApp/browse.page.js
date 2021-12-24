"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
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
    moreOptionsBtn: selectorFile.css.ComproEngage.browse.moreOptionsBtn,
    cardTitle: selectorFile.css.ComproEngage.browse.cardTitle,
    cardSubTitle: selectorFile.css.ComproEngage.browse.cardSubTitle,
    cardImgIcon: selectorFile.css.ComproEngage.browse.cardImgIcon,
    cardLockIcon: selectorFile.css.ComproEngage.browse.cardLockIcon,
    viewOption: selectorFile.css.ComproEngage.browse.viewOption,
    addToPlaylistOption: selectorFile.css.ComproEngage.browse.addToPlaylistOption,
    shareOption: selectorFile.css.ComproEngage.browse.shareOption,
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


    isInitialized: function() {
        var res;
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        res = {
            pageStatus: action.waitForDisplayed(this.pageTitle),
            appShellPage: appShellPage.isInitialized()
        };
        return res;
    },

    getData_browsePage: function() {
        logger.logInto(stackTrace.get());
        action.waitForDisplayed(this.searchIcon) //manually edited
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

    getData_resourceCategory: function(resourceCategoryName) {
        logger.logInto(stackTrace.get());
        var obj = [],
            i, arr = [];
        var resourceCategory = action.findElements(this.resourceCategory)
        var viewAllBtn = action.findElements(this.viewAllBtn)
        if (resourceCategoryName) {
            for (var i = 0; i < resourceCategory.length; i++) {
                if (action.getText(resourceCategory[i]) == resourceCategoryName) {
                    obj[0] = {
                        resourceCategory: (action.getElementCount(resourceCategory[i]) > 0) ? action.getText(resourceCategory[i]) : null,
                        viewAllBtn: (action.getElementCount(viewAllBtn[i]) > 0) ? action.getText(viewAllBtn[i]) : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i <= resourceCategory.length; i++) {
                obj[i] = {
                    resourceCategory: (action.getElementCount(resourceCategory[i]) > 0) ? action.getText(resourceCategory[i]) : null,
                    viewAllBtn: (action.getElementCount(viewAllBtn[i]) > 0) ? action.getText(viewAllBtn[i]) : null,
                }
            }
        }
        return obj;
    },

    getData_resourceList: function(cardTitleName) {
        logger.logInto(stackTrace.get());
        var obj = [],
            i, arr = [];
        var moreOptionsBtn = action.findElements(this.moreOptionsBtn)
        var cardTitle = action.findElements(this.cardTitle)
        var cardSubTitle = action.findElements(this.cardSubTitle)
        var cardImgIcon = action.findElements(this.cardImgIcon)
        var cardLockIcon = action.findElements(this.cardLockIcon)
        if (cardTitleName) {
            for (var i = 0; i < cardTitle.length; i++) {
                if (action.getText(cardTitle[i]) == cardTitleName) {
                    obj[0] = {
                        moreOptionsBtn: (action.getElementCount(moreOptionsBtn[i]) > 0) ? action.getText(moreOptionsBtn[i]) : null,
                        cardTitle: (action.getElementCount(cardTitle[i]) > 0) ? action.getText(cardTitle[i]) : null,
                        cardSubTitle: (action.getElementCount(cardSubTitle[i]) > 0) ? action.getText(cardSubTitle[i]) : null,
                        cardImgIcon: (action.getElementCount(cardImgIcon[i]) > 0) ? action.getText(cardImgIcon[i]) : null,
                        cardLockIcon: (action.getElementCount(cardLockIcon[i]) > 0) ? action.waitForDisplayed(cardLockIcon[i]) : false,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < cardTitle.length; i++) {
                obj[i] = {//manual for gettext //getElementCount not working
                    // moreOptionsBtn: (action.getElementCount(cardTitle[i]) > 0) ? action.getText(moreOptionsBtn[i]) : null,
                    // cardTitle: (action.getElementCount(cardTitle[i]) > 0) ? action.getText(cardTitle[i]): null,
                    // cardSubTitle: (action.getElementCount(cardSubTitle[i]) > 0) ? action.getText(cardSubTitle[i]) : null,
                    // cardImgIcon: (action.getElementCount(cardImgIcon[i]) > 0) ? action.waitForDisplayed(cardImgIcon[i]) : false,
                    // cardLockIcon: (action.getElementCount(cardLockIcon[i]) > 0) ? action.waitForDisplayed(cardLockIcon[i]) : false,
                    //manual edit
                    moreOptionsBtn: action.getText(moreOptionsBtn[i]),
                    cardTitle: action.getText(cardTitle[i]),
                    cardSubTitle: action.getText(cardSubTitle[i]) ,
                    cardImgIcon: action.waitForDisplayed(cardImgIcon[i]),
                    cardLockIcon: action.waitForDisplayed(cardLockIcon[i]),
                }
            }
        }
        return obj;
    },

    getData_moreOptions: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            viewOption: (action.getElementCount(this.viewOption) > 0) ? action.getText(this.viewOption) : null,
            addToPlaylistOption: (action.getElementCount(this.addToPlaylistOption) > 0) ? action.getText(this.addToPlaylistOption) : null,
            shareOption: (action.getElementCount(this.shareOption) > 0) ? action.getText(this.shareOption) : null,
        }
        return obj;
    },

    getData_addToPlaylist: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            listOfPlaylist: this.listOfPlaylist_Data(),
        }
        return obj;
    },

    listOfPlaylist_Data: function() {
        logger.logInto(stackTrace.get());
        var i, list;
        var listOfPlaylist_Arr = [];
        list = action.findElements(this.listOfPlaylist);
        for (i = 0; i < list.length; i++) {
            listOfPlaylist_Arr[i] = action.getText(list[i])
        }
        logger.logInto(stackTrace.get(), listOfPlaylist_Arr);
        return listOfPlaylist_Arr;
    },

    getData_searchList: function() {
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

    searchList_Data: function() {
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

    getData_searchNoResults: function() {
        logger.logInto(stackTrace.get());
        var obj;
        obj = {
            search_NoResult_img: (action.getElementCount(this.search_NoResult_img) > 0) ? action.waitForDisplayed(this.search_NoResult_img) : false,
            search_NoResult_title: (action.getElementCount(this.search_NoResult_title) > 0) ? action.getText(this.search_NoResult_title) : null,
            search_NoResult_subTitle: (action.getElementCount(this.search_NoResult_subTitle) > 0) ? action.getText(this.search_NoResult_subTitle) : null,
        }
        return obj;
    },

    getData_filterMenu: function() {
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


    click_filtersBtn: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filtersBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filtersBtn is clicked");
            res = this.getData_filterMenu();
        } else {
            logger.logInto(stackTrace.get(), res + "filtersBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_previousPageArrow: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.previousPageArrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " previousPageArrow is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "previousPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_nextPageArrow: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.nextPageArrow);
        if (true == res) {
            logger.logInto(stackTrace.get(), " nextPageArrow is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "nextPageArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllBtn: function(resourceCategoryName) {
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
        } else
            logger.logInto(stackTrace.get(), " --viewAllBtn NOT clicked", "error")
        return res;
    },

    click_moreOptionsBtn: function(cardTitleName) {
        logger.logInto(stackTrace.get());
        var i, res;
        var cardTitle = action.findElements(this.cardTitle);
        var moreOptionsBtn = action.findElements(this.moreOptionsBtn);
        for (i = 0; i < cardTitle.length; i++) {
            if ((action.getText(cardTitle[i])) == cardTitleName) {
                res = action.click(moreOptionsBtn[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --moreOptionsBtn clicked");
            res = this.getData_moreOptions();
        } else
            logger.logInto(stackTrace.get(), " --moreOptionsBtn NOT clicked", "error")
        return res;
    },

    click_cardImgIcon: function(cardTitleName) {
        logger.logInto(stackTrace.get());
        var i, res;
        var cardTitle = action.findElements(this.cardTitle);
        var cardImgIcon = action.findElements(this.cardImgIcon);
        for (i = 0; i < cardTitle.length; i++) {
            if ((action.getText(cardTitle[i])) == cardTitleName) {
                res = action.click(cardImgIcon[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --cardImgIcon clicked");
        } else
            logger.logInto(stackTrace.get(), " --cardImgIcon NOT clicked", "error")
        return res;
    },

    click_viewOption: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.viewOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " viewOption is clicked");
        } else {
            logger.logInto(stackTrace.get(), res + "viewOption is NOT clicked", 'error');
        }
        return res;
    },

    click_addToPlaylistOption: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.addToPlaylistOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " addToPlaylistOption is clicked");
            res = this.getData_addToPlaylist();
        } else {
            logger.logInto(stackTrace.get(), res + "addToPlaylistOption is NOT clicked", 'error');
        }
        return res;
    },

    click_shareOption: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.shareOption);
        if (true == res) {
            logger.logInto(stackTrace.get(), " shareOption is clicked");
        } else {
            logger.logInto(stackTrace.get(), res + "shareOption is NOT clicked", 'error');
        }
        return res;
    },

    click_listOfPlaylist: function(listOfPlaylistName) {
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
        } else
            logger.logInto(stackTrace.get(), " --listOfPlaylist NOT clicked", "error")
        return res;
    },

    click_searchList: function(searchListName) {
        logger.logInto(stackTrace.get());
        var i, list, res;
        list = action.findElements(this.searchList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == searchListName) {
                res = action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            logger.logInto(stackTrace.get(), " --searchList clicked");
        } else
            logger.logInto(stackTrace.get(), " --searchList NOT clicked", "error")
        return res;
    },

    click_showMoreResults: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.showMoreResults);
        if (true == res) {
            logger.logInto(stackTrace.get(), " showMoreResults is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "showMoreResults is NOT clicked", 'error');
        }
        return res;
    },

    click_clearSearch: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.clearSearch);
        if (true == res) {
            logger.logInto(stackTrace.get(), " clearSearch is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "clearSearch is NOT clicked", 'error');
        }
        return res;
    },

    click_closeSearchPill: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.closeSearchPill);
        if (true == res) {
            logger.logInto(stackTrace.get(), " closeSearchPill is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "closeSearchPill is NOT clicked", 'error');
        }
        return res;
    },

    click_goToPage: function(num) { //manual edit
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.goToPage + num);
        if (true == res) {
            logger.logInto(stackTrace.get(), " goToPage is clicked");
            res = this.getData_browsePage();
        } else {
            logger.logInto(stackTrace.get(), res + "goToPage is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuCloseBtn: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuCloseBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuCloseBtn is clicked");
            res = action.waitForDisplayed(this.filterMenuCloseBtn, undefined, true);
        } else {
            logger.logInto(stackTrace.get(), res + "filterMenuCloseBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuClearAllBtn: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuClearAllBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuClearAllBtn is clicked");
        } else {
            logger.logInto(stackTrace.get(), res + "filterMenuClearAllBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_filterMenuApplyBtn: function() {
        logger.logInto(stackTrace.get());
        var res;
        res = action.click(this.filterMenuApplyBtn);
        if (true == res) {
            logger.logInto(stackTrace.get(), " filterMenuApplyBtn is clicked");
        } else {
            logger.logInto(stackTrace.get(), res + "filterMenuApplyBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_searchBox: function(value) {
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

    pressEnter: function () {//manual edit
        logger.logInto(stackTrace.get());
        var res = action.keyPress('Enter')
        if (res == true) {
            logger.logInto(stackTrace.get(), " -- Enter key pressed");
            res = this.getData_browsePage();
        } else
            logger.logInto(stackTrace.get(), res + " -- Enter key not pressed");
        return res;

    },

}