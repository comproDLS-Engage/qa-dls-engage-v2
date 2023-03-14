"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js');
const { activeHotlink } = require('./flipbook.page.js');

module.exports = {
    quizHeaderIcon: selectorFile.css.ComproEngage.libraryEditorPage.quizHeaderIcon,
    quizHeaderName: selectorFile.css.ComproEngage.libraryEditorPage.quizHeaderName,
    savedtoLibrarylbl: selectorFile.css.ComproEngage.libraryEditorPage.savedtoLibrarylbl,
    draftlbl: selectorFile.css.ComproEngage.libraryEditorPage.draftlbl,
    addtoClass_btn: selectorFile.css.ComproEngage.libraryEditorPage.addtoClass_btn,
    edit_btn: selectorFile.css.ComproEngage.libraryEditorPage.edit_btn,
    viewAsStudent: selectorFile.css.ComproEngage.libraryEditorPage.viewAsStudent,
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
    canceldeleteQuestionbtn: selectorFile.css.ComproEngage.libraryEditorPage.canceldeleteQuestionbtn,
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
    editorTourDismiss: selectorFile.css.ComproEngage.libraryEditorPage.editorTourDismiss,
    deleteTitle: selectorFile.css.ComproEngage.libraryEditorPage.deleteTitle,
    deleteSubTitle: selectorFile.css.ComproEngage.libraryEditorPage.deleteSubTitle,
    deleteSubTitleMaterial: selectorFile.css.ComproEngage.libraryEditorPage.deleteSubTitleMaterial,
    cancel_btn: selectorFile.css.ComproEngage.libraryEditorPage.cancel_btn,
    delete_btn: selectorFile.css.ComproEngage.libraryEditorPage.delete_btn,
    manageAccess_Title: selectorFile.css.ComproEngage.libraryEditorPage.manageAccess_Title,
    manageAccess_SubTitle: selectorFile.css.ComproEngage.libraryEditorPage.manageAccess_SubTitle,
    close_btn: selectorFile.css.ComproEngage.libraryEditorPage.close_btn,
    newAccess_btn: selectorFile.css.ComproEngage.libraryEditorPage.newAccess_btn,
    pill_number: selectorFile.css.ComproEngage.libraryEditorPage.pill_number,
    classAccessHeader: selectorFile.css.ComproEngage.libraryEditorPage.classAccessHeader,
    done_btn: selectorFile.css.ComproEngage.libraryEditorPage.done_btn,
    classIcon: selectorFile.css.ComproEngage.libraryEditorPage.classIcon,
    selectClass: selectorFile.css.ComproEngage.libraryEditorPage.selectClass,
    ClassName: selectorFile.css.ComproEngage.libraryEditorPage.ClassName,
    classRadiobtn: selectorFile.css.ComproEngage.libraryEditorPage.classRadiobtn,
    bookName: selectorFile.css.ComproEngage.libraryEditorPage.bookName,
    bookImage: selectorFile.css.ComproEngage.libraryEditorPage.bookImage,
    dropDown_btn: selectorFile.css.ComproEngage.libraryEditorPage.dropDown_btn,
    updateTo: selectorFile.css.ComproEngage.libraryEditorPage.updateTo,
    removeAccess: selectorFile.css.ComproEngage.libraryEditorPage.removeAccess,
    removeAccess_btn: selectorFile.css.ComproEngage.libraryEditorPage.removeAccess_btn,
    newAccess_Title: selectorFile.css.ComproEngage.libraryEditorPage.newAccess_Title,
    newAccess_SubTitle: selectorFile.css.ComproEngage.libraryEditorPage.newAccess_SubTitle,
    noAccessClassIcon: selectorFile.css.ComproEngage.libraryEditorPage.noAccessClassIcon,
    noClassRemaining: selectorFile.css.ComproEngage.libraryEditorPage.noClassRemaining,
    addtoClassDescription: selectorFile.css.ComproEngage.libraryEditorPage.addtoClassDescription,
    addnowbutton: selectorFile.css.ComproEngage.libraryEditorPage.addnowbutton,
    accessClosebtn: selectorFile.css.ComproEngage.libraryEditorPage.accessClosebtn,
    editMaterial_Title: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_Title,
    editMaterial_SubTitle: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_SubTitle,
    editMaterial_classIcon: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_classIcon,
    editMaterial_ClassInfoBoxTitle: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_ClassInfoBoxTitle,
    editMaterial_addedClasses_classInfoBox: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_addedClasses_classInfoBox,
    editMaterial_Note: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_Note,
    editMaterial_Cancel: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_Cancel,
    editMaterial_ContinueToEdit: selectorFile.css.ComproEngage.libraryEditorPage.editMaterial_ContinueToEdit,
    versionNumber: selectorFile.css.ComproEngage.libraryEditorPage.versionNumber,
    quizAddedsuccessfullyHeader: selectorFile.css.ComproEngage.libraryEditorPage.quizAddedsuccessfullyHeader,
    quizAddedsuccessfullySubHeader: selectorFile.css.ComproEngage.libraryEditorPage.quizAddedsuccessfullySubHeader,
    classIconModal: selectorFile.css.ComproEngage.libraryEditorPage.classIconModal,
    classNameModal: selectorFile.css.ComproEngage.libraryEditorPage.classNameModal,
    bookNameModal: selectorFile.css.ComproEngage.libraryEditorPage.bookNameModal,
    bookIconModal: selectorFile.css.ComproEngage.libraryEditorPage.bookIconModal,
    addedIconModal: selectorFile.css.ComproEngage.libraryEditorPage.addedIconModal,
    whatdoyouwantText: selectorFile.css.ComproEngage.libraryEditorPage.whatdoyouwantText,
    assignlbl: selectorFile.css.ComproEngage.libraryEditorPage.assignlbl,
    assignIcon: selectorFile.css.ComproEngage.libraryEditorPage.assignIcon,
    assignDescription: selectorFile.css.ComproEngage.libraryEditorPage.assignDescription,
    assignbtn: selectorFile.css.ComproEngage.libraryEditorPage.assignbtn,
    addToAnotherClasslbl: selectorFile.css.ComproEngage.libraryEditorPage.addToAnotherClasslbl,
    addToAnotherClassIcon: selectorFile.css.ComproEngage.libraryEditorPage.addToAnotherClassIcon,
    addToAnotherClassDescription: selectorFile.css.ComproEngage.libraryEditorPage.addToAnotherClassDescription,
    addToAnotherClassbtn: selectorFile.css.ComproEngage.libraryEditorPage.addToAnotherClassbtn,
    returnToLibrarylbl: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylbl,
    returnToLibrarylIcon: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylIcon,
    returnToLibrarylDescription: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylDescription,
    returnToLibrarylbtn: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylbtn,
    removingFromClassHeader: selectorFile.css.ComproEngage.libraryEditorPage.removingFromClassHeader,
    removingFromClassSubHeader: selectorFile.css.ComproEngage.libraryEditorPage.removingFromClassSubHeader,
    removeClassPanel: selectorFile.css.ComproEngage.libraryEditorPage.removeClassPanel,
    removeAnywaybtn: selectorFile.css.ComproEngage.libraryEditorPage.removeAnywaybtn,
    cancelbtnRemoveDialogue: selectorFile.css.ComproEngage.libraryEditorPage.cancelbtnRemoveDialogue,
    closebtnRemoveAccess: selectorFile.css.ComproEngage.libraryEditorPage.closebtnRemoveAccess,
    quizRemovedSuccessfullyHeader: selectorFile.css.ComproEngage.libraryEditorPage.quizRemovedSuccessfullyHeader,
    quizRemovedSuccessfullySubHeader: selectorFile.css.ComproEngage.libraryEditorPage.quizRemovedSuccessfullySubHeader,
    classIconModal: selectorFile.css.ComproEngage.libraryEditorPage.classIconModal,
    classNameModal: selectorFile.css.ComproEngage.libraryEditorPage.classNameModal,
    bookNameModal: selectorFile.css.ComproEngage.libraryEditorPage.bookNameModal,
    bookIconModal: selectorFile.css.ComproEngage.libraryEditorPage.bookIconModal,
    removedIconModal: selectorFile.css.ComproEngage.libraryEditorPage.removedIconModal,
    donebtn: selectorFile.css.ComproEngage.libraryEditorPage.donebtn,
    closebtnRemoveModal: selectorFile.css.ComproEngage.libraryEditorPage.closebtnRemoveModal,
    dialogueHeaderAfterFinish: selectorFile.css.ComproEngage.libraryEditorPage.dialogueHeaderAfterFinish,
    dialogueSubheaderAfterFinish: selectorFile.css.ComproEngage.libraryEditorPage.dialogueSubheaderAfterFinish,
    whatdoyouwantTextinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.whatdoyouwantTextinFinishQuiz,
    pushupdateToClasslblinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.pushupdateToClasslblinFinishQuiz,
    pushupdateToClassIconinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.pushupdateToClassIconinFinishQuiz,
    pushupdateToClassDescriptioninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.pushupdateToClassDescriptioninFinishQuiz,
    pushupdateToClassbtninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.pushupdateToClassbtninFinishQuiz,
    addToClasslblinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.addToClasslblinFinishQuiz,
    addToClassIconinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.addToClassIconinFinishQuiz,
    addToClassDescriptioninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.addToClassDescriptioninFinishQuiz,
    addToClassbtninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.addToClassbtninFinishQuiz,
    returnToLibrarylblinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylblinFinishQuiz,
    returnToLibrarylIconinFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylIconinFinishQuiz,
    returnToLibrarylDescriptioninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylDescriptioninFinishQuiz,
    returnToLibrarylbtninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.returnToLibrarylbtninFinishQuiz,
    closebtninFinishQuiz: selectorFile.css.ComproEngage.libraryEditorPage.closebtninFinishQuiz,
    quesNumber: selectorFile.css.ComproEngage.activityPlayer.quesNumber,

    helpbtn: selectorFile.css.ComproEngage.libraryEditorPage.helpbtn,
    takeEditorTourbtn: selectorFile.css.ComproEngage.libraryEditorPage.takeEditorTourbtn,
    reportAProblembtn: selectorFile.css.ComproEngage.libraryEditorPage.reportAProblembtn,
    helpCenterbtn: selectorFile.css.ComproEngage.libraryEditorPage.helpCenterbtn,
    contentGuidelinesbtn: selectorFile.css.ComproEngage.libraryEditorPage.contentGuidelinesbtn,
    showDetailsbtn: selectorFile.css.ComproEngage.libraryEditorPage.showDetailsbtn,
    detailsSubtitle: selectorFile.css.ComproEngage.libraryEditorPage.detailsSubtitle,
    detailstitle: selectorFile.css.ComproEngage.libraryEditorPage.detailstitle,
    detailsActivityIcon: selectorFile.css.ComproEngage.libraryEditorPage.detailsActivityIcon,
    detailsActivityType: selectorFile.css.ComproEngage.libraryEditorPage.detailsActivityType,
    detailsPublichedChip: selectorFile.css.ComproEngage.libraryEditorPage.detailsPublichedChip,
    containerPanel: selectorFile.css.ComproEngage.libraryEditorPage.containerPanel,

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
        await action.waitForDisplayed(this.quizHeaderIcon);
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
    getData_publishedQuizPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.quizHeaderIcon)
        obj = {
            quizHeaderIcon: ((await action.getElementCount(this.quizHeaderIcon)) > 0) ? await action.waitForDisplayed(this.quizHeaderIcon) : false,
            quizHeaderName: ((await action.getElementCount(this.quizHeaderName)) > 0) ? await action.getText(this.quizHeaderName) : null,
            savedtoLibrarylbl: ((await action.getElementCount(this.savedtoLibrarylbl)) > 0) ? await action.getText(this.savedtoLibrarylbl) : null,
            draftlbl: ((await action.getElementCount(this.draftlbl)) > 0) ? await action.getText(this.draftlbl) : null,
            addtoClass_btn: ((await action.getElementCount(this.addtoClass_btn)) > 0) ? await action.getText(this.addtoClass_btn) : null,
            edit_btn: ((await action.getElementCount(this.edit_btn)) > 0) ? await action.getText(this.edit_btn) : null,
            viewAsStudent: ((await action.getElementCount(this.viewAsStudent)) > 0) ? await action.getText(this.viewAsStudent) : null,
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
    getData_QuizPageHeader: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.savedtoLibrarylbl);
        obj = {
            quizHeaderIcon: ((await action.getElementCount(this.quizHeaderIcon)) > 0) ? await action.waitForDisplayed(this.quizHeaderIcon) : false,
            quizHeaderName: ((await action.getElementCount(this.quizHeaderName)) > 0) ? await action.getText(this.quizHeaderName) : null,
            savedtoLibrarylbl: ((await action.getElementCount(this.savedtoLibrarylbl)) > 0) ? await action.getText(this.savedtoLibrarylbl) : null,
            draftlbl: ((await action.getElementCount(this.draftlbl)) > 0) ? await action.getText(this.draftlbl) : null,
            pageHeader: ((await action.getElementCount(this.pageHeader)) > 0) ? await action.getText(this.pageHeader) : null,
            pageSubHeader: ((await action.getElementCount(this.pageSubHeader)) > 0) ? await action.getText(this.pageSubHeader) : null,
            finishQuiz: ((await action.getElementCount(this.finishQuiz)) > 0) ? await action.getText(this.finishQuiz) : null,
            previewbtn: ((await action.getElementCount(this.previewbtn)) > 0) ? await action.getText(this.previewbtn) : null,
            versionNumber: ((await action.getElementCount(this.versionNumber)) > 0) ? await action.waitForDisplayed(this.versionNumber) : null,

        }
        return obj;
    },
    getData_deleteQunDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            deleteQuestionHeader: ((await action.getElementCount(this.deleteQuestionHeader)) > 0) ? await action.getText(this.deleteQuestionHeader) : null,
            deleteQuestionSubHeader: ((await action.getElementCount(this.deleteQuestionSubHeader)) > 0) ? await action.getText(this.deleteQuestionSubHeader) : null,
            canceldeleteQuestionbtn: ((await action.getElementCount(this.canceldeleteQuestionbtn)) > 0) ? await action.getText(this.canceldeleteQuestionbtn) : null,
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
            duplicateMoreOptionbtn: ((await action.getElementCount(this.duplicateMoreOptionbtn)) > 0) ? await action.getText(this.duplicateMoreOptionbtn) : null,
            deleteMoreOptionbtn: ((await action.getElementCount(this.deleteMoreOptionbtn)) > 0) ? await action.getText(this.deleteMoreOptionbtn) : null,
        }
        return obj;
    },

    getData_previewPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.quesNumber)
        obj = {
            previewcontainer: ((await action.getElementCount(this.previewcontainer)) > 0) ? await action.getText(this.previewcontainer) : null,
            eyeIcon: ((await action.getElementCount(this.eyeIcon)) > 0) ? await action.waitForDisplayed(this.eyeIcon) : false,
            previeCloseIcon: ((await action.getElementCount(this.previeCloseIcon)) > 0) ? await action.waitForDisplayed(this.previeCloseIcon) : null,
            quesNumber: ((await action.getElementCount(this.quesNumber)) > 0) ? await action.getText(this.quesNumber) : null,

        }
        return obj;
    },
    click_addtoClass_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        await action.waitForDisplayed(this.addtoClass_btn + " p")
        res = await action.click(this.addtoClass_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addtoClass_btn is clicked");
            res = await this.getData_NewAccessPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addtoClass_btn is NOT clicked", 'error');
        }
        return res;
    },
    click_edit_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.edit_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " edit_btn is clicked");
            res = await this.getData_editMaterial_Modal()
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "edit_btn is NOT clicked", 'error');
        }
        return res;
    },
    click_viewAsStudent: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.viewAsStudent);
        if (true == res) {
            res = await this.getData_previewPage();
            await logger.logInto(await stackTrace.get(), " viewAsStudent is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "viewAsStudent is NOT clicked", 'error');
        }
        return res;
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
            await this.getData_deleteDialogue();
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
    click_editorTourDismiss: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.editorTourDismiss);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " editorTourDismiss is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "editorTourDismiss is NOT clicked", 'error');
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
        await browser.pause(2000)
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
            await action.waitForDisplayed(this.deletebtn)
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
            await this.getData_deleteDialogue();
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
    click_viewAsStudentClosebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.previeCloseIcon);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " previeCloseIcon is clicked");
            res = await this.getData_publishedQuizPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "previeCloseIcon is NOT clicked", 'error');
        }
        return res;
    },

    set_questiontextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.waitForClickable(this.questiontextbox);
        res = await action.setValue(this.questiontextbox, value);
        await browser.pause(10000)
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
            await browser.pause(5000)
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
    getData_deleteDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            deleteTitle: ((await action.getElementCount(this.deleteTitle)) > 0) ? await action.getText(this.deleteTitle) : null,
            deleteSubTitle: ((await action.getElementCount(this.deleteSubTitle)) > 0) ? await action.getText(this.deleteSubTitle) : null,
            deleteSubTitleMaterial: ((await action.getElementCount(this.deleteSubTitleMaterial)) > 0) ? await action.getText(this.deleteSubTitleMaterial) : null,
            cancel_btn: ((await action.getElementCount(this.cancel_btn)) > 0) ? await action.getText(this.cancel_btn) : null,
            delete_btn: ((await action.getElementCount(this.delete_btn)) > 0) ? await action.getText(this.delete_btn) : null,
        }
        return obj;
    },

    getData_manageAccessPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            manageAccess_Title: ((await action.getElementCount(this.manageAccess_Title)) > 0) ? await action.getText(this.manageAccess_Title) : null,
            manageAccess_SubTitle: ((await action.getElementCount(this.manageAccess_SubTitle)) > 0) ? await action.getText(this.manageAccess_SubTitle) : null,
            close_btn: ((await action.getElementCount(this.close_btn)) > 0) ? await action.getText(this.close_btn) : null,
            newAccess_btn: ((await action.getElementCount(this.newAccess_btn)) > 0) ? await action.getText(this.newAccess_btn) : null,
            pill_number: ((await action.getElementCount(this.pill_number)) > 0) ? await action.getText(this.pill_number) : null,
            classAccessHeader: ((await action.getElementCount(this.classAccessHeader)) > 0) ? await action.getText(this.classAccessHeader) : null,
            done_btn: ((await action.getElementCount(this.done_btn)) > 0) ? await action.getText(this.done_btn) : null,
        }
        return obj;
    },

    getData_classPanePage: async function (ClassNameName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.ClassName);
        var list = await action.findElements(this.ClassName);
        if (ClassNameName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.ClassName + i)) == ClassNameName) {
                    obj[0] = {
                        classIcon: ((await action.getElementCount(this.classIcon + i + "]")) > 0) ? await action.getText(this.classIcon + i + "]") : null,
                        ClassName: ((await action.getElementCount(this.ClassName + i + "]")) > 0) ? await action.getText(this.ClassName + i + "]") : null,
                        bookName: ((await action.getElementCount(this.bookName + i + "]")) > 0) ? await action.getText(this.bookName + i + "]") : null,
                        bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.getText(this.bookImage + i + "]") : null,
                        dropDown_btn: ((await action.getElementCount(this.dropDown_btn + i + "]")) > 0) ? await action.getText(this.dropDown_btn + i + "]") : null,
                        classRadiobtn: ((await action.getElementCount(this.classRadiobtn + i + "]")) > 0) ? await action.waitForDisplayed(this.classRadiobtn + i + "]") : null,

                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    classIcon: ((await action.getElementCount(this.classIcon + i + "]")) > 0) ? await action.getText(this.classIcon + i + "]") : null,
                    ClassName: ((await action.getElementCount(this.ClassName + i + "]")) > 0) ? await action.getText(this.ClassName + i + "]") : null,
                    classRadiobtn: ((await action.getElementCount(this.classRadiobtn + i + "]")) > 0) ? await action.waitForDisplayed(this.classRadiobtn + i + "]") : null,
                    bookName: ((await action.getElementCount(this.bookName + i + "]")) > 0) ? await action.getText(this.bookName + i + "]") : null,
                    bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.getText(this.bookImage + i + "]") : null,
                    dropDown_btn: ((await action.getElementCount(this.dropDown_btn + i + "]")) > 0) ? await action.getText(this.dropDown_btn + i + "]") : null,
                }
            }
        }
        return obj;
    },

    getData_updateDrownDownMenu: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            updateTo: ((await action.getElementCount(this.updateTo)) > 0) ? await action.getText(this.updateTo) : null,
            removeAccess: ((await action.getElementCount(this.removeAccess)) > 0) ? await action.getText(this.removeAccess) : null,
        }
        return obj;
    },

    getData_NewAccessPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.newAccess_Title);
        obj = {
            newAccess_Title: ((await action.getElementCount(this.newAccess_Title)) > 0) ? await action.getText(this.newAccess_Title) : null,
            newAccess_SubTitle: ((await action.getElementCount(this.newAccess_SubTitle)) > 0) ? await action.getText(this.newAccess_SubTitle) : null,
            noAccessClassIcon: ((await action.getElementCount(this.noAccessClassIcon)) > 0) ? await action.waitForDisplayed(this.noAccessClassIcon) : null,
            noClassRemaining: ((await action.getElementCount(this.noClassRemaining)) > 0) ? await action.getText(this.noClassRemaining) : null,
            addtoClassDescription: ((await action.getElementCount(this.addtoClassDescription)) > 0) ? await action.getText(this.addtoClassDescription) : null,
            addnowbutton: ((await action.getElementCount(this.addnowbutton)) > 0) ? await action.getText(this.addnowbutton) : null,
            accessClosebtn: ((await action.getElementCount(this.accessClosebtn)) > 0) ? await action.waitForDisplayed(this.accessClosebtn) : null,
            classList: [],
        }
        var i, list, res;
        list = await action.findElements(this.selectClass);
        for (var i = 0; i < list.length; i++) {
            obj.classList[i] = {
                ClassName: ((await action.getElementCount(this.ClassName + i + "]")) > 0) ? await action.getText(this.ClassName + i + "]") : null,
            }
        }
        return obj;

    },

    getData_editMaterial_Modal: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.editMaterial_Title)
        obj = {
            editMaterial_Title: ((await action.getElementCount(this.editMaterial_Title)) > 0) ? await action.getText(this.editMaterial_Title) : null,
            editMaterial_SubTitle: ((await action.getElementCount(this.editMaterial_SubTitle)) > 0) ? await action.getText(this.editMaterial_SubTitle) : null,
            editMaterial_classIcon: ((await action.getElementCount(this.editMaterial_classIcon)) > 0) ? await action.waitForDisplayed(this.editMaterial_classIcon) : null,
            editMaterial_ClassInfoBoxTitle: ((await action.getElementCount(this.editMaterial_ClassInfoBoxTitle)) > 0) ? await action.getText(this.editMaterial_ClassInfoBoxTitle) : null,
            editMaterial_addedClasses_classInfoBox: ((await action.getElementCount(this.editMaterial_addedClasses_classInfoBox)) > 0) ? await action.getText(this.editMaterial_addedClasses_classInfoBox) : null,
            editMaterial_Note: ((await action.getElementCount(this.editMaterial_Note)) > 0) ? await action.getText(this.editMaterial_Note) : null,
            editMaterial_Cancel: ((await action.getElementCount(this.editMaterial_Cancel)) > 0) ? await action.getText(this.editMaterial_Cancel) : null,
            editMaterial_ContinueToEdit: ((await action.getElementCount(this.editMaterial_ContinueToEdit)) > 0) ? await action.getText(this.editMaterial_ContinueToEdit) : null,
        }
        return obj;
    },


    click_cancel_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancel_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancel_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancel_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_delete_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.delete_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " delete_btn is clicked");
            browser.pause(10000)
            res = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "delete_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_close_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.close_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " close_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "close_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_newAccess_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.newAccess_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " newAccess_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "newAccess_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_done_btn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.done_btn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " done_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "done_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_selectClass: async function (ClassNameName) {
        await logger.logInto(await stackTrace.get());

        var i, list, res;
        list = await action.findElements(this.selectClass);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.ClassName + i + "]"))) == ClassNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            res = await action.waitForEnabled(this.addnowbutton)
            await logger.logInto(await stackTrace.get(), " --selectClass clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --selectClass NOT clicked", "error")
        return res;
    },

    click_dropDown_btn: async function (ClassNameName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.dropDown_btn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.ClassName + i + "]"))) == ClassNameName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --dropDown_btn clicked");
            res = await this.getData_updateDrownDownMenu();
        }
        else
            await logger.logInto(await stackTrace.get(), " --dropDown_btn NOT clicked", "error")
        return res;
    },

    click_updateTo: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.updateTo);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " updateTo is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "updateTo is NOT clicked", 'error');
        }
        return res;
    },

    click_removeAccess: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.removeAccess);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeAccess is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeAccess is NOT clicked", 'error');
        }
        return res;
    },

    click_removeAccess_btn: async function (ClassNameName) {
        await logger.logInto(await stackTrace.get());
        var res;
        await logger.logInto(await stackTrace.get());
        console.log(ClassNameName)
        var i, list, res;
        list = await action.findElements(this.ClassName);
        console.log(list.length)
        for (i = 0; i < list.length; i++) {
            console.log(await action.getText(this.ClassName + i + "]"))
            if (((await action.getText(this.ClassName + i + "]"))) == ClassNameName) {
                console.log(this.removeAccess_btn + i + "]")
                res = await action.click(this.removeAccess_btn + i + "]");
                break;
            }
        }
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeAccess_btn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeAccess_btn is NOT clicked", 'error');
        }
        return res;
    },

    click_addnowbutton: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addnowbutton);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addnowbutton is clicked");
            await this.getData_quizAddedPage();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addnowbutton is NOT clicked", 'error');
        }
        return res;
    },

    click_accessClosebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.accessClosebtn);
        if (true == res) {
            await action.waitForDisplayed(this.addtoClass_btn);
            await logger.logInto(await stackTrace.get(), " accessClosebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "accessClosebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_editMaterial_Cancel: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.editMaterial_Cancel);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " editMaterial_Cancel is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "editMaterial_Cancel is NOT clicked", 'error');
        }
        return res;
    },

    click_editMaterial_ContinueToEdit: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.editMaterial_ContinueToEdit);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " editMaterial_ContinueToEdit is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "editMaterial_ContinueToEdit is NOT clicked", 'error');
        }
        return res;
    },
    getData_quizAddedPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.classIconModal)
        obj = {
            quizAddedsuccessfullyHeader: ((await action.getElementCount(this.quizAddedsuccessfullyHeader)) > 0) ? await action.getText(this.quizAddedsuccessfullyHeader) : null,
            quizAddedsuccessfullySubHeader: ((await action.getElementCount(this.quizAddedsuccessfullySubHeader)) > 0) ? await action.getText(this.quizAddedsuccessfullySubHeader) : null,
            classIconModal: ((await action.getElementCount(this.classIconModal)) > 0) ? await action.waitForDisplayed(this.classIconModal) : false,
            classNameModal: ((await action.getElementCount(this.classNameModal)) > 0) ? await action.getText(this.classNameModal) : null,
            bookNameModal: ((await action.getElementCount(this.bookNameModal)) > 0) ? await action.getText(this.bookNameModal) : null,
            bookIconModal: ((await action.getElementCount(this.bookIconModal)) > 0) ? await action.waitForDisplayed(this.bookIconModal) : false,
            addedIconModal: ((await action.getElementCount(this.addedIconModal)) > 0) ? await action.getText(this.addedIconModal) : false,
            whatdoyouwantText: ((await action.getElementCount(this.whatdoyouwantText)) > 0) ? await action.getText(this.whatdoyouwantText) : null,
            assignlbl: ((await action.getElementCount(this.assignlbl)) > 0) ? await action.getText(this.assignlbl) : null,
            assignIcon: ((await action.getElementCount(this.assignIcon)) > 0) ? await action.waitForDisplayed(this.assignIcon) : false,
            assignDescription: ((await action.getElementCount(this.assignDescription)) > 0) ? await action.getText(this.assignDescription) : null,
            assignbtn: ((await action.getElementCount(this.assignbtn)) > 0) ? await action.getText(this.assignbtn) : null,
            addToAnotherClasslbl: ((await action.getElementCount(this.addToAnotherClasslbl)) > 0) ? await action.getText(this.addToAnotherClasslbl) : null,
            addToAnotherClassIcon: ((await action.getElementCount(this.addToAnotherClassIcon)) > 0) ? await action.waitForDisplayed(this.addToAnotherClassIcon) : false,
            addToAnotherClassDescription: ((await action.getElementCount(this.addToAnotherClassDescription)) > 0) ? await action.getText(this.addToAnotherClassDescription) : null,
            addToAnotherClassbtn: ((await action.getElementCount(this.addToAnotherClassbtn)) > 0) ? await action.getText(this.addToAnotherClassbtn) : null,
            returnToLibrarylbl: ((await action.getElementCount(this.returnToLibrarylbl)) > 0) ? await action.getText(this.returnToLibrarylbl) : null,
            returnToLibrarylIcon: ((await action.getElementCount(this.returnToLibrarylIcon)) > 0) ? await action.waitForDisplayed(this.returnToLibrarylIcon) : false,
            returnToLibrarylDescription: ((await action.getElementCount(this.returnToLibrarylDescription)) > 0) ? await action.getText(this.returnToLibrarylDescription) : null,
            returnToLibrarylbtn: ((await action.getElementCount(this.returnToLibrarylbtn)) > 0) ? await action.getText(this.returnToLibrarylbtn) : null,
        }
        return obj;
    },

    getData_removeAccessDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.removingFromClassHeader)
        obj = {
            removingFromClassHeader: ((await action.getElementCount(this.removingFromClassHeader)) > 0) ? await action.getText(this.removingFromClassHeader) : null,
            removingFromClassSubHeader: ((await action.getElementCount(this.removingFromClassSubHeader)) > 0) ? await action.getText(this.removingFromClassSubHeader) : null,
            removeClassPanel: ((await action.getElementCount(this.removeClassPanel)) > 0) ? await action.getText(this.removeClassPanel) : null,
            removeAnywaybtn: ((await action.getElementCount(this.removeAnywaybtn)) > 0) ? await action.getText(this.removeAnywaybtn) : null,
            cancelbtnRemoveDialogue: ((await action.getElementCount(this.cancelbtnRemoveDialogue)) > 0) ? await action.getText(this.cancelbtnRemoveDialogue) : null,
            closebtnRemoveAccess: ((await action.getElementCount(this.closebtnRemoveAccess)) > 0) ? await action.waitForDisplayed(this.closebtnRemoveAccess) : null,
        }
        return obj;
    },

    getData_quizRemovedAccessPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.quizRemovedSuccessfullyHeader)
        obj = {
            quizRemovedSuccessfullyHeader: ((await action.getElementCount(this.quizRemovedSuccessfullyHeader)) > 0) ? await action.getText(this.quizRemovedSuccessfullyHeader) : null,
            quizRemovedSuccessfullySubHeader: ((await action.getElementCount(this.quizRemovedSuccessfullySubHeader)) > 0) ? await action.getText(this.quizRemovedSuccessfullySubHeader) : null,
            classIconModal: ((await action.getElementCount(this.classIconModal)) > 0) ? await action.waitForDisplayed(this.classIconModal) : null,
            classNameModal: ((await action.getElementCount(this.classNameModal)) > 0) ? await action.getText(this.classNameModal) : null,
            bookNameModal: ((await action.getElementCount(this.bookNameModal)) > 0) ? await action.getText(this.bookNameModal) : null,
            bookIconModal: ((await action.getElementCount(this.bookIconModal)) > 0) ? await action.waitForDisplayed(this.bookIconModal) : null,
            removedIconModal: ((await action.getElementCount(this.removedIconModal)) > 0) ? await action.waitForDisplayed(this.removedIconModal) : null,
            donebtn: ((await action.getElementCount(this.donebtn)) > 0) ? await action.getText(this.donebtn) : null,
            closebtnRemoveModal: ((await action.getElementCount(this.closebtnRemoveModal)) > 0) ? await action.waitForDisplayed(this.closebtnRemoveModal) : null,
        }
        return obj;
    },

    getData_AfterFinishQuizDialogue: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            dialogueHeaderAfterFinish: ((await action.getElementCount(this.dialogueHeaderAfterFinish)) > 0) ? await action.getText(this.dialogueHeaderAfterFinish) : null,
            dialogueSubheaderAfterFinish: ((await action.getElementCount(this.dialogueSubheaderAfterFinish)) > 0) ? await action.getText(this.dialogueSubheaderAfterFinish) : null,
            whatdoyouwantTextinFinishQuiz: ((await action.getElementCount(this.whatdoyouwantTextinFinishQuiz)) > 0) ? await action.getText(this.whatdoyouwantTextinFinishQuiz) : null,
            pushupdateToClasslblinFinishQuiz: ((await action.getElementCount(this.pushupdateToClasslblinFinishQuiz)) > 0) ? await action.getText(this.pushupdateToClasslblinFinishQuiz) : null,
            pushupdateToClassIconinFinishQuiz: ((await action.getElementCount(this.pushupdateToClassIconinFinishQuiz)) > 0) ? await action.waitForDisplayed(this.pushupdateToClassIconinFinishQuiz) : false,
            pushupdateToClassDescriptioninFinishQuiz: ((await action.getElementCount(this.pushupdateToClassDescriptioninFinishQuiz)) > 0) ? await action.getText(this.pushupdateToClassDescriptioninFinishQuiz) : null,
            pushupdateToClassbtninFinishQuiz: ((await action.getElementCount(this.pushupdateToClassbtninFinishQuiz)) > 0) ? await action.getText(this.pushupdateToClassbtninFinishQuiz) : null,
            addToClasslblinFinishQuiz: ((await action.getElementCount(this.addToClasslblinFinishQuiz)) > 0) ? await action.getText(this.addToClasslblinFinishQuiz) : null,
            addToClassIconinFinishQuiz: ((await action.getElementCount(this.addToClassIconinFinishQuiz)) > 0) ? await action.waitForDisplayed(this.addToClassIconinFinishQuiz) : false,
            addToClassDescriptioninFinishQuiz: ((await action.getElementCount(this.addToClassDescriptioninFinishQuiz)) > 0) ? await action.getText(this.addToClassDescriptioninFinishQuiz) : null,
            addToClassbtninFinishQuiz: ((await action.getElementCount(this.addToClassbtninFinishQuiz)) > 0) ? await action.getText(this.addToClassbtninFinishQuiz) : null,
            returnToLibrarylblinFinishQuiz: ((await action.getElementCount(this.returnToLibrarylblinFinishQuiz)) > 0) ? await action.getText(this.returnToLibrarylblinFinishQuiz) : null,
            returnToLibrarylIconinFinishQuiz: ((await action.getElementCount(this.returnToLibrarylIconinFinishQuiz)) > 0) ? await action.waitForDisplayed(this.returnToLibrarylIconinFinishQuiz) : false,
            returnToLibrarylDescriptioninFinishQuiz: ((await action.getElementCount(this.returnToLibrarylDescriptioninFinishQuiz)) > 0) ? await action.getText(this.returnToLibrarylDescriptioninFinishQuiz) : null,
            returnToLibrarylbtninFinishQuiz: ((await action.getElementCount(this.returnToLibrarylbtninFinishQuiz)) > 0) ? await action.getText(this.returnToLibrarylbtninFinishQuiz) : null,
            closebtninFinishQuiz: ((await action.getElementCount(this.closebtninFinishQuiz)) > 0) ? await action.getText(this.closebtninFinishQuiz) : null,
        }
        return obj;
    },


    click_assignbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.assignbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " assignbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "assignbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_addToAnotherClassbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addToAnotherClassbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addToAnotherClassbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addToAnotherClassbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_returnToLibrarylbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.returnToLibrarylbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " returnToLibrarylbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "returnToLibrarylbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_removeAnywaybtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.removeAnywaybtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " removeAnywaybtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "removeAnywaybtn is NOT clicked", 'error');
        }
        return res;
    },

    click_canceldeleteQuestionbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.canceldeleteQuestionbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closebtnRemoveAccess: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closebtnRemoveAccess);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closebtnRemoveAccess is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closebtnRemoveAccess is NOT clicked", 'error');
        }
        return res;
    },

    click_donebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.donebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " donebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "donebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_closebtnRemoveModal: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closebtnRemoveModal);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closebtnRemoveModal is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closebtnRemoveModal is NOT clicked", 'error');
        }
        return res;
    },

    click_pushupdateToClassbtninFinishQuiz: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.pushupdateToClassbtninFinishQuiz);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " pushupdateToClassbtninFinishQuiz is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "pushupdateToClassbtninFinishQuiz is NOT clicked", 'error');
        }
        return res;
    },

    click_addToClassbtninFinishQuiz: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addToClassbtninFinishQuiz);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addToClassbtninFinishQuiz is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addToClassbtninFinishQuiz is NOT clicked", 'error');
        }
        return res;
    },

    click_returnToLibrarylbtninFinishQuiz: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.returnToLibrarylbtninFinishQuiz);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " returnToLibrarylbtninFinishQuiz is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "returnToLibrarylbtninFinishQuiz is NOT clicked", 'error');
        }
        return res;
    },

    click_closebtninFinishQuiz: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.closebtninFinishQuiz);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " closebtninFinishQuiz is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "closebtninFinishQuiz is NOT clicked", 'error');
        }
        return res;
    },
    getData_addToClassPage: async function (ClassNameName) {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            manageAccess_Title: ((await action.getElementCount(this.manageAccess_Title)) > 0) ? await action.getText(this.manageAccess_Title) : null,
            manageAccess_SubTitle: ((await action.getElementCount(this.manageAccess_SubTitle)) > 0) ? await action.getText(this.manageAccess_SubTitle) : null,
            close_btn: ((await action.getElementCount(this.close_btn)) > 0) ? await action.getText(this.close_btn) : null,
            newAccess_btn: ((await action.getElementCount(this.newAccess_btn)) > 0) ? await action.getText(this.newAccess_btn) : null,
            pill_number: ((await action.getElementCount(this.pill_number)) > 0) ? await action.getText(this.pill_number) : null,
            classAccessHeader: ((await action.getElementCount(this.classAccessHeader)) > 0) ? await action.getText(this.classAccessHeader) : null,
            done_btn: ((await action.getElementCount(this.done_btn)) > 0) ? await action.getText(this.done_btn) : null,
            classList: []
        }
        await action.waitForDisplayed(this.ClassName);
        var list = await action.findElements(this.ClassName);
        if (ClassNameName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.ClassName + i)) == ClassNameName) {
                    obj.classList[0] = {
                        classIcon: ((await action.getElementCount(this.classIcon + i + "]")) > 0) ? await action.getText(this.classIcon + i + "]") : null,
                        ClassName: ((await action.getElementCount(this.ClassName + i + "]")) > 0) ? await action.getText(this.ClassName + i + "]") : null,
                        bookName: ((await action.getElementCount(this.bookName + i + "]")) > 0) ? await action.getText(this.bookName + i + "]") : null,
                        bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.getText(this.bookImage + i + "]") : null,
                        removeAccess_btn: ((await action.getElementCount(this.removeAccess_btn + i + "]")) > 0) ? await action.getText(this.removeAccess_btn + i + "]") : null,
                    }
                    break;
                }
            }
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    classIcon: ((await action.getElementCount(this.classIcon + i + "]")) > 0) ? await action.getText(this.classIcon + i + "]") : null,
                    ClassName: ((await action.getElementCount(this.ClassName + i + "]")) > 0) ? await action.getText(this.ClassName + i + "]") : null,
                    classRadiobtn: ((await action.getElementCount(this.classRadiobtn + i + "]")) > 0) ? await action.waitForDisplayed(this.classRadiobtn + i + "]") : null,
                    bookName: ((await action.getElementCount(this.bookName + i + "]")) > 0) ? await action.getText(this.bookName + i + "]") : null,
                    bookImage: ((await action.getElementCount(this.bookImage + i + "]")) > 0) ? await action.getText(this.bookImage + i + "]") : null,
                    dropDown_btn: ((await action.getElementCount(this.dropDown_btn + i + "]")) > 0) ? await action.getText(this.dropDown_btn + i + "]") : null,
                }
            }
        }
        return obj;
    },
    getData_helpMenuList: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            takeEditorTourbtn: ((await action.getElementCount(this.takeEditorTourbtn)) > 0) ? await action.getText(this.takeEditorTourbtn) : null,
            reportAProblembtn: ((await action.getElementCount(this.reportAProblembtn)) > 0) ? await action.getText(this.reportAProblembtn) : null,
            helpCenterbtn: ((await action.getElementCount(this.helpCenterbtn)) > 0) ? await action.getText(this.helpCenterbtn) : null,
            contentGuidelinesbtn: ((await action.getElementCount(this.contentGuidelinesbtn)) > 0) ? await action.getText(this.contentGuidelinesbtn) : null,
        }
        return obj;
    },


    click_helpbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.helpbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " helpbtn is clicked");
            res = await this.getData_helpMenuList();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "helpbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_takeEditorTourbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.takeEditorTourbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " takeEditorTourbtn is clicked");
            res = await require('./editorTour.page').isInitialized();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "takeEditorTourbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_reportAProblembtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.reportAProblembtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " reportAProblembtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "reportAProblembtn is NOT clicked", 'error');
        }
        return res;
    },

    click_helpCenterbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.helpCenterbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " helpCenterbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "helpCenterbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_contentGuidelinesbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.contentGuidelinesbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " contentGuidelinesbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "contentGuidelinesbtn is NOT clicked", 'error');
        }
        return res;
    },
    getData_showDetailsPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            detailsSubtitle: ((await action.getElementCount(this.detailsSubtitle)) > 0) ? await action.getText(this.detailsSubtitle) : null,
            detailstitle: ((await action.getElementCount(this.detailstitle)) > 0) ? await action.getText(this.detailstitle) : null,
            detailsActivityIcon: ((await action.getElementCount(this.detailsActivityIcon)) > 0) ? await action.waitForDisplayed(this.detailsActivityIcon) : null,
            detailsActivityType: ((await action.getElementCount(this.detailsActivityType)) > 0) ? await action.getText(this.detailsActivityType) : null,
            detailsPublichedChip: ((await action.getElementCount(this.detailsPublichedChip)) > 0) ? await action.getText(this.detailsPublichedChip) : null,
        }
        return obj;
    },


    click_showDetailsbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        await action.waitForClickable(this.showDetailsbtn)
        res = await action.click(this.showDetailsbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showDetailsbtn is clicked");
            await action.waitForDisplayed(this.detailsSubtitle)
            res = await action.getAttribute(this.containerPanel, "aria-hidden")
            console.log(res)
            if (res == "false") {
                res = await this.getData_showDetailsPanel();
            }
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showDetailsbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_hideDetailsbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.showDetailsbtn);

        if (true == res) {
            await logger.logInto(await stackTrace.get(), " showDetailsbtn is clicked");
            res = await action.getAttribute(this.containerPanel, "aria-hidden")
            console.log(res)
            if (res == "true") {
                res = await this.getData_showDetailsPanel();
            }
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "showDetailsbtn is NOT clicked", 'error');
        }
        return res;
    }
}

