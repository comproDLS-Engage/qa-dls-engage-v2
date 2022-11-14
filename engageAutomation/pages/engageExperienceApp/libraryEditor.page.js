"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');

module.exports = {
    quizHeaderIcon: selectorFile.css.ComproEngage.libraryEditorPage.quizHeaderIcon,
    quizHeaderName: selectorFile.css.ComproEngage.libraryEditorPage.quizHeaderName,
    savedtoLibrarylbl: selectorFile.css.ComproEngage.libraryEditorPage.savedtoLibrarylbl,
    draftlbl: selectorFile.css.ComproEngage.libraryEditorPage.draftlbl,
    pageHeader: selectorFile.css.ComproEngage.libraryEditorPage.pageHeader,
    pageSubHeader: selectorFile.css.ComproEngage.libraryEditorPage.pageSubHeader,
    multipleChoicetabIcon: selectorFile.css.ComproEngage.libraryEditorPage.multipleChoicetabIcon,
    texttabIcon: selectorFile.css.ComproEngage.libraryEditorPage.texttabIcon,
    multipleChoicetab: selectorFile.css.ComproEngage.libraryEditorPage.multipleChoicetab,
    texttab: selectorFile.css.ComproEngage.libraryEditorPage.texttab,
    finishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.finishQuiz,
    questionNumber: selectorFile.css.ComproEngage.libraryEditorPage.questionNumber,
    multipleChoicelbl: selectorFile.css.ComproEngage.libraryEditorPage.multipleChoicelbl,
    dupicatebtn: selectorFile.css.ComproEngage.libraryEditorPage.dupicatebtn,
    deletebtn: selectorFile.css.ComproEngage.libraryEditorPage.deletebtn,
    deleteQuestionHeader: selectorFile.css.ComproEngage.libraryEditorPage.deleteQuestionHeader,
    deleteQuestionSubHeader: selectorFile.css.ComproEngage.libraryEditorPage.deleteQuestionSubHeader,
    cancelbtn: selectorFile.css.ComproEngage.libraryEditorPage.cancelbtn,
    deleteQuestionbtn: selectorFile.css.ComproEngage.libraryEditorPage.deleteQuestionbtn,
    questiontextbox: selectorFile.css.ComproEngage.libraryEditorPage.questiontextbox,
    inthisActivity: selectorFile.css.ComproEngage.libraryEditorPage.inthisActivity,
    inthisActivityIcon: selectorFile.css.ComproEngage.libraryEditorPage.inthisActivityIcon,
    descriptionlbl: selectorFile.css.ComproEngage.libraryEditorPage.descriptionlbl,
    addmediabtn: selectorFile.css.ComproEngage.libraryEditorPage.addmediabtn,
    addtextbtn: selectorFile.css.ComproEngage.libraryEditorPage.addtextbtn,
    Imagebtn: selectorFile.css.ComproEngage.libraryEditorPage.Imagebtn,
    audiobtn: selectorFile.css.ComproEngage.libraryEditorPage.audiobtn,
    vediobtn: selectorFile.css.ComproEngage.libraryEditorPage.vediobtn,
    medialbl: selectorFile.css.ComproEngage.libraryEditorPage.medialbl,
    browsebtn: selectorFile.css.ComproEngage.libraryEditorPage.browsebtn,
    titlearea: selectorFile.css.ComproEngage.libraryEditorPage.titlearea,
    alternativetxt: selectorFile.css.ComproEngage.libraryEditorPage.alternativetxt,
    txtpromptscelton: selectorFile.css.ComproEngage.libraryEditorPage.txtpromptscelton,
    prompttextboxheader: selectorFile.css.ComproEngage.libraryEditorPage.prompttextboxheader,
    txtprompttxtbox: selectorFile.css.ComproEngage.libraryEditorPage.txtprompttxtbox,
    deleteTextPromptbtn: selectorFile.css.ComproEngage.libraryEditorPage.deleteTextPromptbtn,
    titlestyle: selectorFile.css.ComproEngage.libraryEditorPage.titlestyle,
    titleDropdown: selectorFile.css.ComproEngage.libraryEditorPage.titleDropdown,
    titleValue: selectorFile.css.ComproEngage.libraryEditorPage.titleValue,
    boldbtn: selectorFile.css.ComproEngage.libraryEditorPage.boldbtn,
    italicbtn: selectorFile.css.ComproEngage.libraryEditorPage.italicbtn,
    underlinebtn: selectorFile.css.ComproEngage.libraryEditorPage.underlinebtn,
    numberingbtn: selectorFile.css.ComproEngage.libraryEditorPage.numberingbtn,
    bulletbtn: selectorFile.css.ComproEngage.libraryEditorPage.bulletbtn,
    selectonelbl: selectorFile.css.ComproEngage.libraryEditorPage.selectonelbl,
    subquestionskeltonbtn: selectorFile.css.ComproEngage.libraryEditorPage.subquestionskeltonbtn,
    subquestionTitle: selectorFile.css.ComproEngage.libraryEditorPage.subquestionTitle,
    option: selectorFile.css.ComproEngage.libraryEditorPage.option,
    addsubquestionbtn: selectorFile.css.ComproEngage.libraryEditorPage.addsubquestionbtn,
    addOptionbtn: selectorFile.css.ComproEngage.libraryEditorPage.addOptionbtn,
    correctIcon: selectorFile.css.ComproEngage.libraryEditorPage.correctIcon,
    leftArrow: selectorFile.css.ComproEngage.libraryEditorPage.leftArrow,
    closeDrawerArrow: selectorFile.css.ComproEngage.libraryEditorPage.closeDrawerArrow,
    drawerTitle: selectorFile.css.ComproEngage.libraryEditorPage.drawerTitle,
    tagsHeading: selectorFile.css.ComproEngage.libraryEditorPage.tagsHeading,
    tagsSubHeading: selectorFile.css.ComproEngage.libraryEditorPage.tagsSubHeading,
    addTagslbl: selectorFile.css.ComproEngage.libraryEditorPage.addTagslbl,
    inputlbl: selectorFile.css.ComproEngage.libraryEditorPage.inputlbl,
    tagChip: selectorFile.css.ComproEngage.libraryEditorPage.tagChip,
    bookTagsHeading: selectorFile.css.ComproEngage.libraryEditorPage.bookTagsHeading,
    bookTagsSubHeading: selectorFile.css.ComproEngage.libraryEditorPage.bookTagsSubHeading,
    booklbl: selectorFile.css.ComproEngage.libraryEditorPage.booklbl,
    selectBook: selectorFile.css.ComproEngage.libraryEditorPage.selectBook,
    newQuestionbtn: selectorFile.css.ComproEngage.libraryEditorPage.newQuestionbtn,
    multipleChoicebtn: selectorFile.css.ComproEngage.libraryEditorPage.multipleChoicebtn,
    textbtn: selectorFile.css.ComproEngage.libraryEditorPage.textbtn,
    leftactivityArrow: selectorFile.css.ComproEngage.libraryEditorPage.leftactivityArrow,
    rightactivityArrow: selectorFile.css.ComproEngage.libraryEditorPage.rightactivityArrow,
    questionnumber: selectorFile.css.ComproEngage.libraryEditorPage.questionnumber,
    studentWillAnswerHere: selectorFile.css.ComproEngage.libraryEditorPage.studentWillAnswerHere,
    longAnswerbtn: selectorFile.css.ComproEngage.libraryEditorPage.longAnswerbtn,
    fileUploadbtn: selectorFile.css.ComproEngage.libraryEditorPage.fileUploadbtn,
    finishdialogiueheader: selectorFile.css.ComproEngage.libraryEditorPage.finishdialogiueheader,
    closeIconfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.closeIconfinishDialogue,
    questionlblfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.questionlblfinishDialogue,
    questioncountfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.questioncountfinishDialogue,
    medialblfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.medialblfinishDialogue,
    mediaCountfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.mediaCountfinishDialogue,
    questionNumberfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.questionNumberfinishDialogue,
    materialIconfinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.materialIconfinishDialogue,
    questionTitlefinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.questionTitlefinishDialogue,
    questionMediafinishDialogue: selectorFile.css.ComproEngage.libraryEditorPage.questionMediafinishDialogue,
    declarationcheckbox: selectorFile.css.ComproEngage.libraryEditorPage.declarationcheckbox,
    declarationboxtext1: selectorFile.css.ComproEngage.libraryEditorPage.declarationboxtext1,
    declarationboxtext2: selectorFile.css.ComproEngage.libraryEditorPage.declarationboxtext2,
    ConfirmFinishbtn: selectorFile.css.ComproEngage.libraryEditorPage.ConfirmFinishbtn,
    linkinstructionhyperlink: selectorFile.css.ComproEngage.libraryEditorPage.linkinstructionhyperlink,
    quizHeaderPlaceHolder: selectorFile.css.ComproEngage.libraryEditorPage.quizHeaderPlaceHolder,
    headertickIcon: selectorFile.css.ComproEngage.libraryEditorPage.headertickIcon,
    previewbtn: selectorFile.css.ComproEngage.libraryEditorPage.previewbtn,
    morebtn: selectorFile.css.ComproEngage.libraryEditorPage.morebtn,
    deleteMoreOptionbtn: selectorFile.css.ComproEngage.libraryEditorPage.deleteMoreOptionbtn,
    duplicateMoreOptionbtn: selectorFile.css.ComproEngage.libraryEditorPage.duplicateMoreOptionbtn,
    previewcontainer: selectorFile.css.ComproEngage.libraryEditorPage.previewcontainer,
    eyeIcon: selectorFile.css.ComproEngage.libraryEditorPage.eyeIcon,
    previeCloseIcon: selectorFile.css.ComproEngage.libraryEditorPage.previeCloseIcon,
    iconBreadCrumbBack_btn: selectorFile.css.ComproEngage.libraryEditorPage.iconBreadCrumbBack_btn,


    isInitialized: async function () {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDocumentLoad();
        res = {
            pageStatus: await action.waitForDisplayed(this.quizHeaderIcon),
            appShellPage: await appShellPage.isInitialized()
        };
        return res;
    },

    getData_blankQuizPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            quizHeaderIcon: ((await action.getElementCount(this.quizHeaderIcon)) > 0) ? await action.waitForDisplayed(this.quizHeaderIcon) : false,
            quizHeaderName: ((await action.getElementCount(this.quizHeaderName)) > 0) ? await action.getText(this.quizHeaderName) : null,
            savedtoLibrarylbl: ((await action.getElementCount(this.savedtoLibrarylbl)) > 0) ? await action.getText(this.savedtoLibrarylbl) : null,
            draftlbl: ((await action.getElementCount(this.draftlbl)) > 0) ? await action.getText(this.draftlbl) : null,
            pageHeader: ((await action.getElementCount(this.pageHeader)) > 0) ? await action.getText(this.pageHeader) : null,
            pageSubHeader: ((await action.getElementCount(this.pageSubHeader)) > 0) ? await action.getText(this.pageSubHeader) : null,
            multipleChoicetab: ((await action.getElementCount(this.multipleChoicetab)) > 0) ? await action.getText(this.multipleChoicetab) : null,
            texttab: ((await action.getElementCount(this.texttab)) > 0) ? await action.getText(this.texttab) : null,
            finishQuiz: ((await action.getElementCount(this.finishQuiz)) > 0) ? await action.getText(this.finishQuiz) : null,
            multipleChoicetabIcon: ((await action.getElementCount(this.multipleChoicetabIcon)) > 0) ? await action.waitForDisplayed(this.multipleChoicetabIcon) : null,
            texttabIcon: ((await action.getElementCount(this.texttabIcon)) > 0) ? await action.waitForDisplayed(this.texttabIcon) : null,

        }
        return obj;
    },

    getData_editorPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.deletebtn)
        obj = {
            questionNumber: ((await action.getElementCount(this.questionNumber)) > 0) ? await action.getText(this.questionNumber) : null,
            Choicelbl: ((await action.getElementCount(this.multipleChoicelbl)) > 0) ? await action.getText(this.multipleChoicelbl) : null,
            dupicatebtn: ((await action.getElementCount(this.dupicatebtn)) > 0) ? await action.waitForDisplayed(this.dupicatebtn) : null,
            deletebtn: ((await action.getElementCount(this.deletebtn)) > 0) ? await action.waitForDisplayed(this.deletebtn) : null,
            questiontextbox: ((await action.getElementCount(this.questiontextbox)) > 0) ? await action.getText(this.questiontextbox) : null,
            inthisActivity: ((await action.getElementCount(this.inthisActivity)) > 0) ? await action.getText(this.inthisActivity) : null,
            inthisActivityIcon: ((await action.getElementCount(this.inthisActivityIcon)) > 0) ? await action.waitForDisplayed(this.inthisActivityIcon) : null,
            descriptionlbl: ((await action.getElementCount(this.descriptionlbl)) > 0) ? await action.getText(this.descriptionlbl) : null,
            addmediabtn: ((await action.getElementCount(this.addmediabtn)) > 0) ? await action.getText(this.addmediabtn) : null,
            addtextbtn: ((await action.getElementCount(this.addtextbtn)) > 0) ? await action.getText(this.addtextbtn) : null,
            txtpromptscelton: ((await action.getElementCount(this.txtpromptscelton)) > 0) ? await action.waitForDisplayed(this.txtpromptscelton) : null,
            prompttextboxheader: ((await action.getElementCount(this.prompttextboxheader)) > 0) ? await action.getText(this.prompttextboxheader) : null,
            txtprompttxtbox: ((await action.getElementCount(this.txtprompttxtbox)) > 0) ? await action.getText(this.txtprompttxtbox) : null,
            deleteTextPromptbtn: ((await action.getElementCount(this.deleteTextPromptbtn)) > 0) ? await action.getText(this.deleteTextPromptbtn) : null,
            selectonelbl: ((await action.getElementCount(this.selectonelbl)) > 0) ? await action.getText(this.selectonelbl) : null,
            subquestionskeltonbtn: ((await action.getElementCount(this.subquestionskeltonbtn)) > 0) ? await action.waitForDisplayed(this.subquestionskeltonbtn) : null,
            subquestionTitle: ((await action.getElementCount(this.subquestionTitle)) > 0) ? await action.getText(this.subquestionTitle) : null,
            option: ((await action.getElementCount(this.option)) > 0) ? await action.getText(this.option) : null,
            addsubquestionbtn: ((await action.getElementCount(this.addsubquestionbtn)) > 0) ? await action.getText(this.addsubquestionbtn) : null,
            addOptionbtn: ((await action.getElementCount(this.addOptionbtn)) > 0) ? await action.getText(this.addOptionbtn) : null,
            correctIcon: ((await action.getElementCount(this.correctIcon)) > 0) ? await action.getText(this.correctIcon) : null,
            leftArrow: ((await action.getElementCount(this.leftArrow)) > 0) ? await action.getText(this.leftArrow) : null,
            newQuestionbtn: ((await action.getElementCount(this.newQuestionbtn)) > 0) ? await action.getText(this.newQuestionbtn) : null,
            leftactivityArrow: ((await action.getElementCount(this.leftactivityArrow)) > 0) ? await action.getText(this.leftactivityArrow) : null,
            rightactivityArrow: ((await action.getElementCount(this.rightactivityArrow)) > 0) ? await action.getText(this.rightactivityArrow) : null,
            questionnumber: ((await action.getElementCount(this.questionnumber)) > 0) ? await action.getText(this.questionnumber) : null,
            studentWillAnswerHere: ((await action.getElementCount(this.studentWillAnswerHere)) > 0) ? await action.getText(this.studentWillAnswerHere) : null,
            longAnswerbtn: ((await action.getElementCount(this.longAnswerbtn)) > 0) ? await action.getText(this.longAnswerbtn) : null,
            fileUploadbtn: ((await action.getElementCount(this.fileUploadbtn)) > 0) ? await action.getText(this.fileUploadbtn) : null,
            previewbtn: ((await action.getElementCount(this.previewbtn)) > 0) ? await action.getText(this.previewbtn) : null,
            morebtn: ((await action.getElementCount(this.morebtn)) > 0) ? await action.waitForDisplayed(this.morebtn) : null,
        }
        return obj;
    },

    getData_deleteQunDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            deleteQuestionHeader: ((await action.getElementCount(this.deleteQuestionHeader)) > 0) ? await action.getText(this.deleteQuestionHeader) : null,
            deleteQuestionSubHeader: ((await action.getElementCount(this.deleteQuestionSubHeader)) > 0) ? await action.getText(this.deleteQuestionSubHeader) : null,
            cancelbtn: ((await action.getElementCount(this.cancelbtn)) > 0) ? await action.getText(this.cancelbtn) : null,
            deleteQuestionbtn: ((await action.getElementCount(this.deleteQuestionbtn)) > 0) ? await action.getText(this.deleteQuestionbtn) : null,
        }
        return obj;
    },

    getData_browsePage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            Imagebtn: ((await action.getElementCount(this.Imagebtn)) > 0) ? await action.getText(this.Imagebtn) : null,
            audiobtn: ((await action.getElementCount(this.audiobtn)) > 0) ? await action.getText(this.audiobtn) : null,
            vediobtn: ((await action.getElementCount(this.vediobtn)) > 0) ? await action.getText(this.vediobtn) : null,
            medialbl: ((await action.getElementCount(this.medialbl)) > 0) ? await action.getText(this.medialbl) : null,
            browsebtn: ((await action.getElementCount(this.browsebtn)) > 0) ? await action.getText(this.browsebtn) : null,
            titlearea: ((await action.getElementCount(this.titlearea)) > 0) ? await action.getText(this.titlearea) : null,
            alternativetxt: ((await action.getElementCount(this.alternativetxt)) > 0) ? await action.getText(this.alternativetxt) : null,
        }
        return obj;
    },

    getData_textpromptPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            titlestyle: ((await action.getElementCount(this.titlestyle)) > 0) ? await action.getText(this.titlestyle) : null,
            titleDropdown: ((await action.getElementCount(this.titleDropdown)) > 0) ? await action.getText(this.titleDropdown) : null,
            titleValue: ((await action.getElementCount(this.titleValue)) > 0) ? await action.getText(this.titleValue) : null,
            boldbtn: ((await action.getElementCount(this.boldbtn)) > 0) ? await action.getText(this.boldbtn) : null,
            italicbtn: ((await action.getElementCount(this.italicbtn)) > 0) ? await action.getText(this.italicbtn) : null,
            underlinebtn: ((await action.getElementCount(this.underlinebtn)) > 0) ? await action.getText(this.underlinebtn) : null,
            numberingbtn: ((await action.getElementCount(this.numberingbtn)) > 0) ? await action.getText(this.numberingbtn) : null,
            bulletbtn: ((await action.getElementCount(this.bulletbtn)) > 0) ? await action.getText(this.bulletbtn) : null,
        }
        return obj;
    },

    getData_drawerPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            drawerTitle: ((await action.getElementCount(this.drawerTitle)) > 0) ? await action.getText(this.drawerTitle) : null,
            tagsHeading: ((await action.getElementCount(this.tagsHeading)) > 0) ? await action.getText(this.tagsHeading) : null,
            tagsSubHeading: ((await action.getElementCount(this.tagsSubHeading)) > 0) ? await action.getText(this.tagsSubHeading) : null,
            addTagslbl: ((await action.getElementCount(this.addTagslbl)) > 0) ? await action.getText(this.addTagslbl) : null,
            inputlbl: ((await action.getElementCount(this.inputlbl)) > 0) ? await action.getText(this.inputlbl) : null,
            tagChip: ((await action.getElementCount(this.tagChip)) > 0) ? await action.getText(this.tagChip) : null,
            bookTagsHeading: ((await action.getElementCount(this.bookTagsHeading)) > 0) ? await action.getText(this.bookTagsHeading) : null,
            bookTagsSubHeading: ((await action.getElementCount(this.bookTagsSubHeading)) > 0) ? await action.getText(this.bookTagsSubHeading) : null,
            booklbl: ((await action.getElementCount(this.booklbl)) > 0) ? await action.getText(this.booklbl) : null,
            selectBook: ((await action.getElementCount(this.selectBook)) > 0) ? await action.getText(this.selectBook) : null,
        }
        return obj;
    },

    getData_questionPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            multipleChoicebtn: ((await action.getElementCount(this.multipleChoicebtn)) > 0) ? await action.getText(this.multipleChoicebtn) : null,
            textbtn: ((await action.getElementCount(this.textbtn)) > 0) ? await action.getText(this.textbtn) : null,
        }
        return obj;
    },

    getData_finishDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            finishdialogiueheader: ((await action.getElementCount(this.finishdialogiueheader)) > 0) ? await action.getText(this.finishdialogiueheader) : null,
            closeIconfinishDialogue: ((await action.getElementCount(this.closeIconfinishDialogue)) > 0) ? await action.getText(this.closeIconfinishDialogue) : null,
            questionlblfinishDialogue: ((await action.getElementCount(this.questionlblfinishDialogue)) > 0) ? await action.getText(this.questionlblfinishDialogue) : null,
            questioncountfinishDialogue: ((await action.getElementCount(this.questioncountfinishDialogue)) > 0) ? await action.getText(this.questioncountfinishDialogue) : null,
            medialblfinishDialogue: ((await action.getElementCount(this.medialblfinishDialogue)) > 0) ? await action.getText(this.medialblfinishDialogue) : null,
            mediaCountfinishDialogue: ((await action.getElementCount(this.mediaCountfinishDialogue)) > 0) ? await action.getText(this.mediaCountfinishDialogue) : null,
            questionNumberfinishDialogue: ((await action.getElementCount(this.questionNumberfinishDialogue)) > 0) ? await action.getText(this.questionNumberfinishDialogue) : null,
            materialIconfinishDialogue: ((await action.getElementCount(this.materialIconfinishDialogue)) > 0) ? await action.getText(this.materialIconfinishDialogue) : null,
            questionTitlefinishDialogue: ((await action.getElementCount(this.questionTitlefinishDialogue)) > 0) ? await action.getText(this.questionTitlefinishDialogue) : null,
            questionMediafinishDialogue: ((await action.getElementCount(this.questionMediafinishDialogue)) > 0) ? await action.getText(this.questionMediafinishDialogue) : null,
            declarationcheckbox: ((await action.getElementCount(this.declarationcheckbox)) > 0) ? await action.getText(this.declarationcheckbox) : null,
            declarationboxtext1: ((await action.getElementCount(this.declarationboxtext1)) > 0) ? await action.getText(this.declarationboxtext1) : null,
            declarationboxtext2: ((await action.getElementCount(this.declarationboxtext2)) > 0) ? await action.getText(this.declarationboxtext2) : null,
            ConfirmFinishbtn: ((await action.getElementCount(this.ConfirmFinishbtn)) > 0) ? await action.getText(this.ConfirmFinishbtn) : null,
            linkinstructionhyperlink: ((await action.getElementCount(this.linkinstructionhyperlink)) > 0) ? await action.getText(this.linkinstructionhyperlink) : null,
        }
        return obj;
    },
    getData_moreOptionList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            duplicatebtn: ((await action.getElementCount(this.duplicatebtn)) > 0) ? await action.getText(this.duplicatebtn) : null,
            deletebtn: ((await action.getElementCount(this.deletebtn)) > 0) ? await action.getText(this.deletebtn) : null,
        }
        return obj;
    },

    getData_previewPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDocumentLoad();
        obj = {
            previewcontainer: ((await action.getElementCount(this.previewcontainer)) > 0) ? await action.getText(this.previewcontainer) : null,
            eyeIcon: ((await action.getElementCount(this.eyeIcon)) > 0) ? await action.waitForDisplayed(this.eyeIcon) : false,
            previeCloseIcon: ((await action.getElementCount(this.previeCloseIcon)) > 0) ? await action.waitForDisplayed(this.previeCloseIcon) : null,
        }
        return obj;
    },

    click_iconBreadCrumbBack_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.iconBreadCrumbBack_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " iconBreadCrumbBack_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "iconBreadCrumbBack_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_quizHeaderName: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.quizHeaderName);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " quizHeaderName is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "quizHeaderName is NOT clicked", 'error');
        }
        return res;
    },
    set_quizHeaderName: async function (testdata) {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.setValue(this.quizHeaderPlaceHolder, testdata)
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " quizHeaderName is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "quizHeaderName is NOT clicked", 'error');
        }
        return res;
    },
    click_multipleChoicetab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.multipleChoicetab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "multipleChoicetab is clicked");
            res = await this.getData_editorPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "multipleChoicetab is NOT clicked", 'error');
        }
        return res;
    },

    click_texttab: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.texttab);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "texttab is clicked");
            res = await this.getData_editorPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "texttab is NOT clicked", 'error');
        }
        return res;
    },

    click_finishQuiz: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.finishQuiz);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " finishQuiz is clicked");
            // need to update res = await this.getData_finishDialogue();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "finishQuiz is NOT clicked", 'error');
        }
        return res;
    },

    click_dupicatebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.dupicatebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " dupicatebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "dupicatebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_deletebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deletebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deletebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deletebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteQuestionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteQuestionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteQuestionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteQuestionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_inthisActivityIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.inthisActivityIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " inthisActivityIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "inthisActivityIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_addmediabtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addmediabtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addmediabtn is clicked");
            res = await this.getData_browsePage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addmediabtn is NOT clicked", 'error');
        }
        return res;
    },

    click_addtextbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addtextbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addtextbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addtextbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_Imagebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.Imagebtn);
        if (true == res) {

            res = await this.getData_browsePage();
            await logger.logInto(await stackTrace.get(), " Imagebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "Imagebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_audiobtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.audiobtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " audiobtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "audiobtn is NOT clicked", 'error');
        }
        return res;
    },

    click_vediobtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.vediobtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " vediobtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "vediobtn is NOT clicked", 'error');
        }
        return res;
    },

    click_uploadImage: async function (imagePath) {
        await logger.logInto(await stackTrace.get());
        var res;
        let remoteFilePath = await browser.uploadFile(imagePath);
        // set file path value in the input field
        res = await action.addValue(this.browsebtn, remoteFilePath);
        res = await action.waitForDisplayed("[data-tid=input-mediaheight]")
        browser.pause(2000)
        await logger.logInto(await stackTrace.get(), " browsebtn is clicked");
        return res;
    },

    click_txtpromptscelton: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.txtpromptscelton);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " txtpromptscelton is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "txtpromptscelton is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteTextPromptbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteTextPromptbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteTextPromptbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteTextPromptbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_titlestyle: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.titlestyle);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " titlestyle is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "titlestyle is NOT clicked", 'error');
        }
        return res;
    },

    click_titleDropdown: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.titleDropdown);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " titleDropdown is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "titleDropdown is NOT clicked", 'error');
        }
        return res;
    },

    click_titleValue: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.titleValue);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " titleValue is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "titleValue is NOT clicked", 'error');
        }
        return res;
    },

    click_boldbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.boldbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " boldbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "boldbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_italicbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.italicbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " italicbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "italicbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_underlinebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.underlinebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " underlinebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "underlinebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_numberingbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.numberingbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " numberingbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "numberingbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_bulletbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bulletbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bulletbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bulletbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_subquestionskeltonbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.subquestionskeltonbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " subquestionskeltonbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "subquestionskeltonbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_addsubquestionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addsubquestionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addsubquestionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addsubquestionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_addOptionbtn: async function (id) {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addOptionbtn + id);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addOptionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addOptionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_correctIcon: async function (id) {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.correctIcon + id);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " correctIcon is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "correctIcon is NOT clicked", 'error');
        }
        return res;
    },

    click_leftArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.leftArrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " leftArrow is clicked");
            res = await this.getData_drawerPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "leftArrow is NOT clicked", 'error');
        }
        return res;
    },
    click_closeDrawerArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeDrawerArrow);
        if (true == res) {
            res = await action.waitForDisplayed(this.leftArrow)
            await logger.logInto(await stackTrace.get(), " closeDrawerArrow is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeDrawerArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_selectBook: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.selectBook);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " selectBook is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "selectBook is NOT clicked", 'error');
        }
        return res;
    },

    click_newQuestionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.newQuestionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " newQuestionbtn is clicked");
            res = await this.getData_questionPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "newQuestionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_multipleChoicebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.multipleChoicebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " multipleChoicebtn is clicked");
            await action.waitForDisplayed(this.headertickIcon)
            res = await this.getData_editorPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "multipleChoicebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_textbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.textbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " textbtn is clicked");
            await action.waitForDisplayed(this.headertickIcon)
            res = await this.getData_editorPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "textbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_leftactivityArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.leftactivityArrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " leftactivityArrow is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "leftactivityArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_rightactivityArrow: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.rightactivityArrow);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " rightactivityArrow is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "rightactivityArrow is NOT clicked", 'error');
        }
        return res;
    },

    click_studentWillAnswerHere: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.studentWillAnswerHere);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " studentWillAnswerHere is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "studentWillAnswerHere is NOT clicked", 'error');
        }
        return res;
    },

    click_longAnswerbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.longAnswerbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " longAnswerbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "longAnswerbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_fileUploadbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.fileUploadbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " fileUploadbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "fileUploadbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closeIconfinishDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closeIconfinishDialogue);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closeIconfinishDialogue is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closeIconfinishDialogue is NOT clicked", 'error');
        }
        return res;
    },

    click_declarationcheckbox: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.declarationcheckbox);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " declarationcheckbox is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "declarationcheckbox is NOT clicked", 'error');
        }
        return res;
    },

    click_ConfirmFinishbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.ConfirmFinishbtn);
        if (true == res) {
            await action.waitForDisplayed("[aria-labelledby=quiz-created-next-steps]")
            await logger.logInto(await stackTrace.get(), " ConfirmFinishbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "ConfirmFinishbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_linkinstructionhyperlink: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.linkinstructionhyperlink);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " linkinstructionhyperlink is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "linkinstructionhyperlink is NOT clicked", 'error');
        }
        return res;
    },
    click_previewbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previewbtn);
        if (true == res) {
            res = await this.getData_previewPage();
            await logger.logInto(await stackTrace.get(), " previewbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previewbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_morebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.morebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " morebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "morebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_duplicateMoreOptionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.duplicateMoreOptionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " duplicateMoreOptionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "duplicateMoreOptionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteMoreOptionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteMoreOptionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteMoreOptionbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteMoreOptionbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_previeCloseIcon: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previeCloseIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " previeCloseIcon is clicked");
            res = await this.getData_editorPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previeCloseIcon is NOT clicked", 'error');
        }
        return res;
    },

    set_questiontextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.questiontextbox);
        res = await action.setValue(this.questiontextbox, value);
        browser.pause(1000)
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in questiontextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in questiontextbox", 'error');
        }
        return res;
    },

    set_descriptionlbl: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        action.click(this.questiontextbox)
        res = await action.clearValueDefault(this.descriptionlbl);
        res = await action.addValue(this.descriptionlbl, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in descriptionlbl");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in descriptionlbl", 'error');
        }
        return res;
    },

    set_titlearea: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.titlearea, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in titlearea");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in titlearea", 'error');
        }
        return res;
    },

    set_alternativetxt: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.alternativetxt, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in alternativetxt");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in alternativetxt", 'error');
        }
        return res;
    },

    set_txtprompttxtbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.txtprompttxtbox)
        res = await action.setValue(this.txtprompttxtbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in txtprompttxtbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in txtprompttxtbox", 'error');
        }
        return res;
    },

    set_subquestionTitle: async function (id, value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.subquestionTitle + id + "] textarea")
        res = await action.setValue(this.subquestionTitle + id + "] textarea", value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in subquestionTitle");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in subquestionTitle", 'error');
        }
        return res;
    },

    set_option: async function (id, value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForDisplayed(this.option + id + "] input")
        res = await action.setValue(this.option + id + "] input", value);
        if (true == res) {
            browser.pause(500)
            await action.getValue(this.option + id + "] input")
            await logger.logInto(await stackTrace.get(), "Value is entered in option");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in option", 'error');
        }
        return res;
    },

    set_inputlbl: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.inputlbl, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in inputlbl");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in inputlbl", 'error');
        }
        return res;
    },

}

