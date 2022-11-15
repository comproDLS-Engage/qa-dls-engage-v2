"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
    libraryTitleTxt: selectorFile.css.ComproEngage.library.libraryTitleTxt,
    librarySubtitleTxt: selectorFile.css.ComproEngage.library.librarySubtitleTxt,
    createMaterialsTxt: selectorFile.css.ComproEngage.library.createMaterialsTxt,
    blankQuizBtn: selectorFile.css.ComproEngage.library.blankQuizBtn,
    blankSurveyBtn: selectorFile.css.ComproEngage.library.blankSurveyBtn,
    newResourceBtn: selectorFile.css.ComproEngage.library.newResourceBtn,
    recentMaterialsTxt: selectorFile.css.ComproEngage.library.recentMaterialsTxt,
    pastDaysTxt: selectorFile.css.ComproEngage.library.pastDaysTxt,
    viewAllMaterialsBtn: selectorFile.css.ComproEngage.library.viewAllMaterialsBtn,
    noMaterialTitleTxt: selectorFile.css.ComproEngage.library.noMaterialTitleTxt,
    noMaterialSubtitleTxt: selectorFile.css.ComproEngage.library.noMaterialSubtitleTxt,
    quizTitleTxt: selectorFile.css.ComproEngage.library.quizTitleTxt,
    quizTypeTxt: selectorFile.css.ComproEngage.library.quizTypeTxt,
    quizTime: selectorFile.css.ComproEngage.library.quizTime,
    draftPillTxt: selectorFile.css.ComproEngage.library.draftPillTxt,
    editDraftBtn: selectorFile.css.ComproEngage.library.editDraftBtn,
    contextMenuBtn: selectorFile.css.ComproEngage.library.contextMenuBtn,
    addToClassBtn: selectorFile.css.ComproEngage.library.addToClassBtn,
    bookImg: selectorFile.css.ComproEngage.library.bookImg,
    previewBtn: selectorFile.css.ComproEngage.library.previewBtn,
    duplicateBtn: selectorFile.css.ComproEngage.library.duplicateBtn,
    deleteBtn: selectorFile.css.ComproEngage.library.deleteBtn,
    editBtn: selectorFile.css.ComproEngage.library.editBtn,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.blankQuizBtn),
            // appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_libraryPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            libraryTitleTxt: ((await action.getElementCount(this.libraryTitleTxt)) > 0) ? await action.getText(this.libraryTitleTxt) : null,
            librarySubtitleTxt: ((await action.getElementCount(this.librarySubtitleTxt)) > 0) ? await action.getText(this.librarySubtitleTxt) : null,
            createMaterialsTxt: ((await action.getElementCount(this.createMaterialsTxt)) > 0) ? await action.getText(this.createMaterialsTxt) : null,
            blankQuizBtn: ((await action.getElementCount(this.blankQuizBtn)) > 0) ? await action.getText(this.blankQuizBtn) : null,
            blankSurveyBtn: ((await action.getElementCount(this.blankSurveyBtn)) > 0) ? await action.getText(this.blankSurveyBtn) : null,
            newResourceBtn: ((await action.getElementCount(this.newResourceBtn)) > 0) ? await action.getText(this.newResourceBtn) : null,
            recentMaterialsTxt: ((await action.getElementCount(this.recentMaterialsTxt)) > 0) ? await action.getText(this.recentMaterialsTxt) : null,
            pastDaysTxt: ((await action.getElementCount(this.pastDaysTxt)) > 0) ? await action.getText(this.pastDaysTxt) : null,
            viewAllMaterialsBtn: ((await action.getElementCount(this.viewAllMaterialsBtn)) > 0) ? await action.getText(this.viewAllMaterialsBtn) : null,
            noMaterialTitleTxt: ((await action.getElementCount(this.noMaterialTitleTxt)) > 0) ? await action.getText(this.noMaterialTitleTxt) : null,
            noMaterialSubtitleTxt: ((await action.getElementCount(this.noMaterialSubtitleTxt)) > 0) ? await action.getText(this.noMaterialSubtitleTxt) : null,
        }
        return obj;
    },

    getData_quizCard: async function (quizTitleTxtName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.quizTitleTxt);
        var list = await action.findElements(this.quizTitleTxt);
        if (quizTitleTxtName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.quizTitleTxt + i)) == quizTitleTxtName) {
                    obj[0] = {
                        quizTitleTxt: ((await action.getElementCount(this.quizTitleTxt + i + "]")) > 0) ? await action.getText(this.quizTitleTxt + i + "]") : null,
                        quizTypeTxt: ((await action.getElementCount(this.quizTypeTxt + i + "]")) > 0) ? await action.getText(this.quizTypeTxt + i + "]") : null,
                        quizTime: ((await action.getElementCount(this.quizTime + i + "]")) > 0) ? await action.getText(this.quizTime + i + "]") : null,
                        draftPillTxt: ((await action.getElementCount(this.draftPillTxt + i + "]")) > 0) ? await action.getText(this.draftPillTxt + i + "]") : null,
                        editDraftBtn: ((await action.getElementCount(this.editDraftBtn + i + "]")) > 0) ? await action.getText(this.editDraftBtn + i + "]") : null,
                        contextMenuBtn: ((await action.getElementCount(this.contextMenuBtn + i + "]")) > 0) ? await action.waitForExist(this.contextMenuBtn + i + "]") : null,
                        addToClassBtn: ((await action.getElementCount(this.addToClassBtn + i + "]")) > 0) ? await action.getText(this.addToClassBtn + i + "]") : null,
                        bookImg: ((await action.getElementCount(this.bookImg + i + "]")) > 0) ? await action.waitForDisplayed(this.bookImg + i + "]") : false,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    quizTitleTxt: ((await action.getElementCount(this.quizTitleTxt + i + "]")) > 0) ? await action.getText(this.quizTitleTxt + i + "]") : null,
                    quizTypeTxt: ((await action.getElementCount(this.quizTypeTxt + i + "]")) > 0) ? await action.getText(this.quizTypeTxt + i + "]") : null,
                    quizTime: ((await action.getElementCount(this.quizTime + i + "]")) > 0) ? await action.getText(this.quizTime + i + "]") : null,
                    draftPillTxt: ((await action.getElementCount(this.draftPillTxt + i + "]")) > 0) ? await action.getText(this.draftPillTxt + i + "]") : null,
                    editDraftBtn: ((await action.getElementCount(this.editDraftBtn + i + "]")) > 0) ? await action.getText(this.editDraftBtn + i + "]") : null,
                    contextMenuBtn: ((await action.getElementCount(this.contextMenuBtn + i + "]")) > 0) ? await action.waitForExist(this.contextMenuBtn + i + "]") : null,
                    addToClassBtn: ((await action.getElementCount(this.addToClassBtn + i + "]")) > 0) ? await action.getText(this.addToClassBtn + i + "]") : null,
                    bookImg: ((await action.getElementCount(this.bookImg + i + "]")) > 0) ? await action.waitForDisplayed(this.bookImg + i + "]") : false,
                }
            }
        }
        return obj;
    },

    getData_libraryContextMenu: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            previewBtn: ((await action.getElementCount(this.previewBtn)) > 0) ? await action.getText(this.previewBtn) : null,
            duplicateBtn: ((await action.getElementCount(this.duplicateBtn)) > 0) ? await action.getText(this.duplicateBtn) : null,
            deleteBtn: ((await action.getElementCount(this.deleteBtn)) > 0) ? await action.getText(this.deleteBtn) : null,
            editBtn: ((await action.getElementCount(this.editBtn)) > 0) ? await action.getText(this.editBtn) : null,
        }
        return obj;
    },


    click_blankQuizBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.blankQuizBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " blankQuizBtn is clicked");
            res = await require('./libraryEditor.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "blankQuizBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_blankSurveyBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.blankSurveyBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " blankSurveyBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "blankSurveyBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_newResourceBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.newResourceBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " newResourceBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "newResourceBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_viewAllMaterialsBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewAllMaterialsBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewAllMaterialsBtn is clicked");
            res = await require('./myMaterials.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewAllMaterialsBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_editDraftBtn: async function (quizTitleTxtName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.editDraftBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.quizTitleTxt + i + "]"))) == quizTitleTxtName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --editDraftBtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --editDraftBtn NOT clicked", "error")
        return res;
    },

    click_contextMenuBtn: async function (quizTitleTxtName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.contextMenuBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.quizTitleTxt + i + "]"))) == quizTitleTxtName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --contextMenuBtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --contextMenuBtn NOT clicked", "error")
        return res;
    },

    click_addToClassBtn: async function (quizTitleTxtName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.addToClassBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.quizTitleTxt + i + "]"))) == quizTitleTxtName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --addToClassBtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --addToClassBtn NOT clicked", "error")
        return res;
    },

    click_previewBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previewBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " previewBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previewBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_duplicateBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.duplicateBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " duplicateBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "duplicateBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_editBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.editBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " editBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "editBtn is NOT clicked", 'error');
        }
        return res;
    },

}

