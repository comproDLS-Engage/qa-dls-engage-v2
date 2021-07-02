"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, obj;

module.exports = {

    bookCover: selectorFile.css.ComproEngage.bookView.bookCover,
    bookTitle: selectorFile.css.ComproEngage.bookView.bookTitle,
    bookSubTitle: selectorFile.css.ComproEngage.bookView.bookSubTitle,
    viewClass: selectorFile.css.ComproEngage.bookView.viewClass,
    moreOptions: selectorFile.css.ComproEngage.bookView.moreOptions,
    removeBook_btn: selectorFile.css.ComproEngage.bookView.removeBook_btn,
    viewBookDetails_btn: selectorFile.css.ComproEngage.bookView.viewBookDetails_btn,
    addBook_btn: selectorFile.css.ComproEngage.bookView.addBook_btn,
    myBooks_lbl: selectorFile.css.ComproEngage.bookView.myBooks_lbl,
    component: selectorFile.css.ComproEngage.bookView.component,
    openFlipbook_btn: selectorFile.css.ComproEngage.bookView.openFlipbook_btn,
    unit: selectorFile.css.ComproEngage.bookView.unit,
    chapter: selectorFile.css.ComproEngage.bookView.chapter,
    chapter_bandColor: selectorFile.css.ComproEngage.bookView.chapter_bandColor,
    chapterTitle: selectorFile.css.ComproEngage.bookView.chapterTitle,
    chapterPage: selectorFile.css.ComproEngage.bookView.chapterPage,
    chapterCoverImg: selectorFile.css.ComproEngage.bookView.chapterCoverImg,
    chapterMoreOptions: selectorFile.css.ComproEngage.bookView.chapterMoreOptions,
    activityIcon: selectorFile.css.ComproEngage.bookView.activityIcon,
    activityCount: selectorFile.css.ComproEngage.bookView.activityCount,
    folderIcon: selectorFile.css.ComproEngage.bookView.folderIcon, //duplicate Data-tids in engage ENG-6702
    folderCount: selectorFile.css.ComproEngage.bookView.folderCount,
    chapterOpenFlipbook_btn : selectorFile.css.ComproEngage.bookView.chapterOpenFlipbook_btn,
    chapterViewActivity_btn : selectorFile.css.ComproEngage.bookView.chapterViewActivity_btn, 

    isInitialized: function() {
        logger.logInto(stackTrace.get());
        action.waitForDocumentLoad();
        action.waitForDisplayed(this.bookCover);
        res = this.getBookViewPageData();
        return res;
    },

    getBookViewPageData: function() {
        obj = {

            bookCover: (action.getElementCount(this.bookCover) > 0) ? action.waitForDisplayed(this.bookCover) : null,
            bookTitle: (action.getElementCount(this.bookTitle) > 0) ? action.getText(this.bookTitle) : null,
            bookSubTitle: (action.getElementCount(this.bookSubTitle) > 0) ? action.getText(this.bookSubTitle) : null,
            viewClass: (action.getElementCount(this.viewClass) > 0) ? action.getText(this.viewClass) : null,
            moreOptions: (action.getElementCount(this.moreOptions) > 0) ? action.waitForDisplayed(this.moreOptions) : null,
            addBook_btn: (action.getElementCount(this.addBook_btn) > 0) ? action.getText(this.addBook_btn) : null,
            myBooks_lbl: (action.getElementCount(this.myBooks_lbl) > 0) ? action.getText(this.myBooks_lbl) : null,
            openFlipbook_btn: (action.getElementCount(this.openFlipbook_btn) > 0) ? action.getText(this.openFlipbook_btn) : null,
            unit: (action.getElementCount(this.unit) > 0) ? action.getText(this.unit) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;
    },

    getComponentListData: function() {
        let i, list;
        let componentArr = [];
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            componentArr[i] = acttion.getText(list[i])
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    getChapterListData: function(componentName) {
        logger.logInto(stackTrace.get())
        this.clickComponent(componentName);

        let i, list;
        let componentArr = [];
        list = action.findElements(this.chapter);
        for (i = 0; i < list.length; i++) {
            let obj;
            obj = {
                chapter_bandColor: action.waitForDisplayed(this.chapter_bandColor + i),
                chapterTitle: action.getText(this.chapterTitle + i),
                chapterPage: action.getText(this.chapterPage + i),
                chapterCoverImg: action.waitForDisplayed(this.chapterCoverImg + i),
                activityIcon: (action.getElementCount(this.activityIcon) > 0) ? action.waitForDisplayed(this.bookCover) : null,
                activityCount: (action.getElementCount(this.activityCount) > 0) ? action.getText(this.activityCount) : null,
                folderIcon: (action.getElementCount(this.folderIcon) > 0) ? action.waitForDisplayed(this.folderIcon) : null,
                folderCount: (action.getElementCount(this.folderCount) > 0) ? action.getText(this.folderCount) : null

            }
            componentArr[i] = obj;
        }

        logger.logInto(stackTrace.get(), componentArr);
        return componentArr;
    },

    clickViewClasses: function() {
        logger.logInto(stackTrace.get())
        res = action.click(viewClass);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Classes Button clicked");
            res = require('./classDrawer.page.js').isInitialized();
        } else
            logger.logInto(stackTrace.get(), " --View Classes Button NOT clicked", "error");
        return res;
    },

    clickAddBook: function() {
        logger.logInto(stackTrace.get())
        res = action.click(addBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Add Book Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Add Book Button NOT clicked", "error");
        return res;
    },

    clickOpenFlipbook: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.openFlipbook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Open Flipbook Button clicked");
        } else
            logger.logInto(stackTrace.get(), " --Open Flipbook Button NOT clicked", "error");
        return res;
    },

    clickComponent: function(componentName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.component);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == componentName) {
                action.click(list[i]);
                res = i;
                break;
            }
            res = false;
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    clickChapter: function(chapterName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.chapter);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == chapterName) {
                res = action.click(list[i]);
                break;
            }
            res = false;
        }

        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click3dotOption: function() {
        logger.logInto(stackTrace.get())
        res = action.click(this.moreOptions);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --More Options Button clicked");
            res = this.getMoreOptionsButtonData();
        } else
            logger.logInto(stackTrace.get(), " --More Options Button NOT clicked", "error");
        return res;

    },

    getMoreOptionsButtonData: function() {
        obj = {

            removeBook: (action.getElementCount(this.removeBook_btn) > 0) ? action.getText(this.removeBook_btn) : null,
            viewBookDetails: (action.getElementCount(this.viewBookDetails_btn) > 0) ? action.getText(this.viewBookDetails_btn) : null
        }
        logger.logInto(stackTrace.get(), JSON.stringify(obj));
        return obj;

    },

    clickRemoveBook: function() {
        logger.logInto(stackTrace.get())
        this.click3dotOption();

        res = action.click(this.removeBook_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --Remove Book Button clicked");

        } else
            logger.logInto(stackTrace.get(), " --Remove Book Button NOT clicked", "error");
        return res;
    },

    clickViewBookDetails: function() {
        logger.logInto(stackTrace.get())
        this.click3dotOption();

        res = action.click(this.viewBookDetails_btn);
        if (res == true) {
            logger.logInto(stackTrace.get(), " --View Book Details Button clicked");

        } else
            logger.logInto(stackTrace.get(), " --View Book Details Button NOT clicked", "error");
        return res;
    },

    clickChapterMoreOptions: function(chapterName) {
        logger.logInto(stackTrace.get());
        let i, list;
        list = action.findElements(this.chapter);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == chapterName) {
                res = action.click(this.chapterMoreOptions + i);
                break;
            }
            res = false;
        }

        logger.logInto(stackTrace.get(), res);
        return res;

    },

    clickChapterOpeninFlipbook: function(chapterName) {
        this.clickChapterMoreOptions(chapterName)
        if (res == true) {
            res = action.click(this.openFlipbook_moreOptions)
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");

        return res;


    },

    clickChapterViewActivities: function(chapterName) {
        this.clickChapterMoreOptions(chapterName)
        if (res == true) {
            res = action.click(this.openFlipbook_moreOptions)
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options Clicked");
        } else
            logger.logInto(stackTrace.get(), "Open FlipBook in More Options  Not Clicked", "error");

        return res;

    }
}