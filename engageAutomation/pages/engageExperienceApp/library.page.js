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
    viewAllBtn: selectorFile.css.ComproEngage.library.viewAllBtn,
    materialsPreviewBtn: selectorFile.css.ComproEngage.library.materialsPreviewBtn,
    materialsDeleteBtn: selectorFile.css.ComproEngage.library.materialsDeleteBtn,
    noMaterialTitleTxt: selectorFile.css.ComproEngage.library.noMaterialTitleTxt,
    noMaterialSubtitleTxt: selectorFile.css.ComproEngage.library.noMaterialSubtitleTxt,
    materialCard: selectorFile.css.ComproEngage.library.materialCard,
    quizTitleTxt: selectorFile.css.ComproEngage.library.quizTitleTxt,
    quizTypeTxt: selectorFile.css.ComproEngage.library.quizTypeTxt,
    draftPillTxt: selectorFile.css.ComproEngage.library.draftPillTxt,
    editDraftBtn: selectorFile.css.ComproEngage.library.editDraftBtn,
    contextMenuBtn: selectorFile.css.ComproEngage.library.contextMenuBtn,
    addToClassBtn: selectorFile.css.ComproEngage.library.addToClassBtn,
    bookImg: selectorFile.css.ComproEngage.library.bookImg,
    previewBtn: selectorFile.css.ComproEngage.library.previewBtn,
    duplicateBtn: selectorFile.css.ComproEngage.library.duplicateBtn,
    deleteBtn: selectorFile.css.ComproEngage.library.deleteBtn,
    editBtn: selectorFile.css.ComproEngage.library.editBtn,
    myMaterialsTxt: selectorFile.css.ComproEngage.library.myMaterialsTxt,
    addNewMaterialBtn: selectorFile.css.ComproEngage.library.addNewMaterialBtn,
    createNewTxt: selectorFile.css.ComproEngage.library.createNewTxt,
    allTab: selectorFile.css.ComproEngage.library.allTab,
    draftsTab: selectorFile.css.ComproEngage.library.draftsTab,
    publishedTab: selectorFile.css.ComproEngage.library.publishedTab,
    searchResult: selectorFile.css.ComproEngage.library.searchResult,
    searchResultSubCount: selectorFile.css.ComproEngage.library.searchResultSubCount,
    materialLabel: selectorFile.css.ComproEngage.library.materialLabel,
    typeLabel: selectorFile.css.ComproEngage.library.typeLabel,
    modifiedLabel: selectorFile.css.ComproEngage.library.modifiedLabel,
    quizRow: selectorFile.css.ComproEngage.library.quizRow,
    materialsQuizTitleTxt: selectorFile.css.ComproEngage.library.materialsQuizTitleTxt,
    materialsDraftPillTxt: selectorFile.css.ComproEngage.library.materialsDraftPillTxt,
    materialsQuizTypeTxt: selectorFile.css.ComproEngage.library.materialsQuizTypeTxt,
    modifiedTime: selectorFile.css.ComproEngage.library.modifiedTime,
    materialsContextMenuBtn: selectorFile.css.ComproEngage.library.materialsContextMenuBtn,
    searchTextBox: selectorFile.css.ComproEngage.library.searchTextBox,
    materialsNoMaterialTitleTxt: selectorFile.css.ComproEngage.library.materialsNoMaterialTitleTxt,
    materialsNoMaterialSubtitleTxt: selectorFile.css.ComproEngage.library.materialsNoMaterialSubtitleTxt,
    materialsBlankQuizBtn: selectorFile.css.ComproEngage.library.materialsBlankQuizBtn,
    materialsBlankSurveyBtn: selectorFile.css.ComproEngage.library.materialsBlankSurveyBtn,
    materialsNewResourceBtn: selectorFile.css.ComproEngage.library.materialsNewResourceBtn,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.blankQuizBtn),
            appShellPage: await appShellPage.isInitialized()
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
            viewAllBtn: ((await action.getElementCount(this.viewAllBtn)) > 0) ? await action.getText(this.viewAllBtn) : null,
            noMaterialTitleTxt: ((await action.getElementCount(this.noMaterialTitleTxt)) > 0) ? await action.getText(this.noMaterialTitleTxt) : null,
            noMaterialSubtitleTxt: ((await action.getElementCount(this.noMaterialSubtitleTxt)) > 0) ? await action.getText(this.noMaterialSubtitleTxt) : null,
        }
        return obj;
    },

    getData_myMaterialsContextMenu: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            materialsPreviewBtn: ((await action.getElementCount(this.materialsPreviewBtn)) > 0) ? await action.getText(this.materialsPreviewBtn) : null,
            materialsDeleteBtn: ((await action.getElementCount(this.materialsDeleteBtn)) > 0) ? await action.getText(this.materialsDeleteBtn) : null,
        }
        return obj;
    },

    getData_quizCard: async function (materialCardName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.materialCard);
        var list = await action.findElements(this.materialCard);
        if (materialCardName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.materialCard + i)) == materialCardName) {
                    obj[0] = {
                        materialCard: ((await action.getElementCount(this.materialCard + i + "]")) > 0) ? await action.getText(this.materialCard + i + "]") : null,
                        quizTitleTxt: ((await action.getElementCount(this.quizTitleTxt + i + "]")) > 0) ? await action.getText(this.quizTitleTxt + i + "]") : null,
                        quizTypeTxt: ((await action.getElementCount(this.quizTypeTxt + i + "]")) > 0) ? await action.getText(this.quizTypeTxt + i + "]") : null,
                        draftPillTxt: ((await action.getElementCount(this.draftPillTxt + i + "]")) > 0) ? await action.getText(this.draftPillTxt + i + "]") : null,
                        editDraftBtn: ((await action.getElementCount(this.editDraftBtn + i + "]")) > 0) ? await action.getText(this.editDraftBtn + i + "]") : null,
                        contextMenuBtn: ((await action.getElementCount(this.contextMenuBtn + i + "]")) > 0) ? await action.getText(this.contextMenuBtn + i + "]") : null,
                        addToClassBtn: ((await action.getElementCount(this.addToClassBtn + i + "]")) > 0) ? await action.getText(this.addToClassBtn + i + "]") : null,
                        bookImg: ((await action.getElementCount(this.bookImg + i + "]")) > 0) ? await action.waitForDisplayed(this.bookImg + i + "]") : false,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    materialCard: ((await action.getElementCount(this.materialCard + i + "]")) > 0) ? await action.getText(this.materialCard + i + "]") : null,
                    quizTitleTxt: ((await action.getElementCount(this.quizTitleTxt + i + "]")) > 0) ? await action.getText(this.quizTitleTxt + i + "]") : null,
                    quizTypeTxt: ((await action.getElementCount(this.quizTypeTxt + i + "]")) > 0) ? await action.getText(this.quizTypeTxt + i + "]") : null,
                    draftPillTxt: ((await action.getElementCount(this.draftPillTxt + i + "]")) > 0) ? await action.getText(this.draftPillTxt + i + "]") : null,
                    editDraftBtn: ((await action.getElementCount(this.editDraftBtn + i + "]")) > 0) ? await action.getText(this.editDraftBtn + i + "]") : null,
                    contextMenuBtn: ((await action.getElementCount(this.contextMenuBtn + i + "]")) > 0) ? await action.getText(this.contextMenuBtn + i + "]") : null,
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

    getData_myMaterialsPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            myMaterialsTxt: ((await action.getElementCount(this.myMaterialsTxt)) > 0) ? await action.getText(this.myMaterialsTxt) : null,
            addNewMaterialBtn: ((await action.getElementCount(this.addNewMaterialBtn)) > 0) ? await action.getText(this.addNewMaterialBtn) : null,
            allTab: ((await action.getElementCount(this.allTab)) > 0) ? await action.getText(this.allTab) : null,
            draftsTab: ((await action.getElementCount(this.draftsTab)) > 0) ? await action.getText(this.draftsTab) : null,
            publishedTab: ((await action.getElementCount(this.publishedTab)) > 0) ? await action.getText(this.publishedTab) : null,
            searchResult: ((await action.getElementCount(this.searchResult)) > 0) ? await action.getText(this.searchResult) : null,
            searchResultSubCount: ((await action.getElementCount(this.searchResultSubCount)) > 0) ? await action.getText(this.searchResultSubCount) : null,
            materialLabel: ((await action.getElementCount(this.materialLabel)) > 0) ? await action.getText(this.materialLabel) : null,
            typeLabel: ((await action.getElementCount(this.typeLabel)) > 0) ? await action.getText(this.typeLabel) : null,
            modifiedLabel: ((await action.getElementCount(this.modifiedLabel)) > 0) ? await action.getText(this.modifiedLabel) : null,
            searchTextBox: ((await action.getElementCount(this.searchTextBox)) > 0) ? await action.getText(this.searchTextBox) : null,
            materialsNoMaterialTitleTxt: ((await action.getElementCount(this.materialsNoMaterialTitleTxt)) > 0) ? await action.getText(this.materialsNoMaterialTitleTxt) : null,
            materialsNoMaterialSubtitleTxt: ((await action.getElementCount(this.materialsNoMaterialSubtitleTxt)) > 0) ? await action.getText(this.materialsNoMaterialSubtitleTxt) : null,
        }
        return obj;
    },

    getData_addMaterialContextMenu: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            createNewTxt: ((await action.getElementCount(this.createNewTxt)) > 0) ? await action.getText(this.createNewTxt) : null,
            materialsBlankQuizBtn: ((await action.getElementCount(this.materialsBlankQuizBtn)) > 0) ? await action.getText(this.materialsBlankQuizBtn) : null,
            materialsBlankSurveyBtn: ((await action.getElementCount(this.materialsBlankSurveyBtn)) > 0) ? await action.getText(this.materialsBlankSurveyBtn) : null,
            materialsNewResourceBtn: ((await action.getElementCount(this.materialsNewResourceBtn)) > 0) ? await action.getText(this.materialsNewResourceBtn) : null,
        }
        return obj;
    },

    getData_quizRow: async function (quizRowName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.quizRow);
        var list = await action.findElements(this.quizRow);
        if (quizRowName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.quizRow + i)) == quizRowName) {
                    obj[0] = {
                        quizRow: ((await action.getElementCount(this.quizRow + i + "]")) > 0) ? await action.getText(this.quizRow + i + "]") : null,
                        materialsQuizTitleTxt: ((await action.getElementCount(this.materialsQuizTitleTxt + i + "]")) > 0) ? await action.getText(this.materialsQuizTitleTxt + i + "]") : null,
                        materialsDraftPillTxt: ((await action.getElementCount(this.materialsDraftPillTxt + i + "]")) > 0) ? await action.getText(this.materialsDraftPillTxt + i + "]") : null,
                        materialsQuizTypeTxt: ((await action.getElementCount(this.materialsQuizTypeTxt + i + "]")) > 0) ? await action.getText(this.materialsQuizTypeTxt + i + "]") : null,
                        modifiedTime: ((await action.getElementCount(this.modifiedTime + i + "]")) > 0) ? await action.getText(this.modifiedTime + i + "]") : null,
                        materialsContextMenuBtn: ((await action.getElementCount(this.materialsContextMenuBtn + i + "]")) > 0) ? await action.getText(this.materialsContextMenuBtn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    quizRow: ((await action.getElementCount(this.quizRow + i + "]")) > 0) ? await action.getText(this.quizRow + i + "]") : null,
                    materialsQuizTitleTxt: ((await action.getElementCount(this.materialsQuizTitleTxt + i + "]")) > 0) ? await action.getText(this.materialsQuizTitleTxt + i + "]") : null,
                    materialsDraftPillTxt: ((await action.getElementCount(this.materialsDraftPillTxt + i + "]")) > 0) ? await action.getText(this.materialsDraftPillTxt + i + "]") : null,
                    materialsQuizTypeTxt: ((await action.getElementCount(this.materialsQuizTypeTxt + i + "]")) > 0) ? await action.getText(this.materialsQuizTypeTxt + i + "]") : null,
                    modifiedTime: ((await action.getElementCount(this.modifiedTime + i + "]")) > 0) ? await action.getText(this.modifiedTime + i + "]") : null,
                    materialsContextMenuBtn: ((await action.getElementCount(this.materialsContextMenuBtn + i + "]")) > 0) ? await action.getText(this.materialsContextMenuBtn + i + "]") : null,
                }
            }
        }
        return obj;
    },


    click_blankQuizBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.blankQuizBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " blankQuizBtn is clicked");
            res = await require('./libraryEditorPage.page').isInitialized();
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

    click_viewAllBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewAllBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " viewAllBtn is clicked");
            res = await this.getData_myMaterialsPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewAllBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_materialsPreviewBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialsPreviewBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialsPreviewBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialsPreviewBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_materialsDeleteBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialsDeleteBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialsDeleteBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialsDeleteBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_materialCard: async function (materialCardName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.materialCard);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.materialCard + i + "]"))) == materialCardName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --materialCard clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --materialCard NOT clicked", "error")
        return res;
    },

    click_editDraftBtn: async function (materialCardName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.editDraftBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.materialCard + i + "]"))) == materialCardName) {
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

    click_contextMenuBtn: async function (materialCardName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.contextMenuBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.materialCard + i + "]"))) == materialCardName) {
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

    click_addToClassBtn: async function (materialCardName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.addToClassBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.materialCard + i + "]"))) == materialCardName) {
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

    click_addNewMaterialBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addNewMaterialBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addNewMaterialBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addNewMaterialBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_allTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.allTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " allTab is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "allTab is NOT clicked", 'error');
        }
        return res;
    },

    click_draftsTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.draftsTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " draftsTab is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "draftsTab is NOT clicked", 'error');
        }
        return res;
    },

    click_publishedTab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.publishedTab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " publishedTab is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "publishedTab is NOT clicked", 'error');
        }
        return res;
    },

    click_quizRow: async function (quizRowName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.quizRow);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.quizRow + i + "]"))) == quizRowName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --quizRow clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --quizRow NOT clicked", "error")
        return res;
    },

    click_materialsContextMenuBtn: async function (quizRowName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.materialsContextMenuBtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.quizRow + i + "]"))) == quizRowName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --materialsContextMenuBtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --materialsContextMenuBtn NOT clicked", "error")
        return res;
    },

    click_materialsBlankQuizBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialsBlankQuizBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialsBlankQuizBtn is clicked");
            res = await require('./libraryEditorPage.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialsBlankQuizBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_materialsBlankSurveyBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialsBlankSurveyBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialsBlankSurveyBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialsBlankSurveyBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_materialsNewResourceBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.materialsNewResourceBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " materialsNewResourceBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "materialsNewResourceBtn is NOT clicked", 'error');
        }
        return res;
    },

    set_searchTextBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.searchTextBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in searchTextBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in searchTextBox", 'error');
        }
        return res;
    },

}

