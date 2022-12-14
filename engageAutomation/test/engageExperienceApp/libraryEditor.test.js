"use strict";
var libraryEditorPage = require('../../pages/engageExperienceApp/libraryEditor.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var sts;

module.exports = {
    ENG_ICCE_TC_1: async function () {
        sts = await libraryEditorPage.click_quizHeaderName();
        await assertion.assertEqual(sts, true, "quizHeaderName are not Clicked");
    },
    ENG_ICCE_TC_60: async function (testdata) {
        sts = await libraryEditorPage.set_quizHeaderName(testdata);
        await assertion.assertEqual(sts, true, "quizHeaderName are not Clicked");
    },
    ENG_ICCE_TC_74: async function (testdata) {
        sts = await libraryEditorPage.click_editorTourDismiss(testdata);
        await assertion.assertEqual(sts, true, "editorTourDismiss are not Clicked");
    },

    //check
    ENG_ICCE_TC_73: async function (testdata) {
        sts = await libraryEditorPage.click_iconBreadCrumbBack_btn(testdata);
        await assertion.assertEqual(sts, true, "iconBreadCrumbBack_btn are not Clicked");
    },
    ENG_ICCE_TC_2: async function (testdata) {
        sts = await libraryEditorPage.click_multipleChoicetab();
        console.log(sts)
        await assertion.assert(sts.questionNumber.includes(testdata.questionNumber), "questionNumber text mismatch");
        await assertion.assertEqual(sts.Choicelbl, testdata.multipleChoicelbl, "multipleChoicelbl text mismatch");
        await assertion.assertEqual(sts.dupicatebtn, true, "dupicatebtn text mismatch");
        await assertion.assertEqual(sts.deletebtn, true, "deletebtn text mismatch");
        await assertion.assertEqual(sts.questiontextbox, testdata.questiontextbox, "questiontextbox text mismatch");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity text mismatch");
        await assertion.assertEqual(sts.inthisActivityIcon, true, "inthisActivityIcon text mismatch");
        await assertion.assertEqual(sts.addmediabtn, testdata.addmediabtn, "addmediabtn text mismatch");
        await assertion.assertEqual(sts.addtextbtn, testdata.addtextbtn, "addtextbtn text mismatch");
        await assertion.assertEqual(sts.selectonelbl, testdata.selectonelbl, "txtpromptscelton text mismatch");

    },

    ENG_ICCE_TC_3: async function (testdata) {
        sts = await libraryEditorPage.click_texttab();
        await assertion.assert(sts.questionNumber.includes(testdata.questionNumber), "questionNumber text mismatch");
        await assertion.assertEqual(sts.Choicelbl, testdata.textChoicelbl, "multipleChoicelbl text mismatch");
        await assertion.assertEqual(sts.dupicatebtn, true, "dupicatebtn text mismatch");
        await assertion.assertEqual(sts.deletebtn, true, "deletebtn text mismatch");
        await assertion.assertEqual(sts.questiontextbox, testdata.questiontextbox, "questiontextbox text mismatch");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity text mismatch");
        await assertion.assertEqual(sts.inthisActivityIcon, true, "inthisActivityIcon text mismatch");
        await assertion.assertEqual(sts.addmediabtn, testdata.addmediabtn, "addmediabtn text mismatch");
        await assertion.assertEqual(sts.addtextbtn, testdata.addtextbtn, "addtextbtn text mismatch");
        await assertion.assertEqual(sts.selectonelbl, null, "selectonelbl text mismatch")
    },

    ENG_ICCE_TC_4: async function (testdata) {
        sts = await libraryEditorPage.click_finishQuiz();
        await assertion.assertEqual(sts, true, "finishQuiz are not Clicked");
    },

    ENG_ICCE_TC_5: async function (testdata) {
        sts = await libraryEditorPage.click_dupicatebtn();
        await assertion.assertEqual(sts, true, "dupicatebtn are not Clicked");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assert(sts, testdata.duplicate_msg, "Snackbar message mismatch: " + sts);

    },

    ENG_ICCE_TC_6: async function (testdata) {
        sts = await libraryEditorPage.click_deletebtn();
        await assertion.assertEqual(sts, true, "deletebtn are not Clicked");
    },

    ENG_ICCE_TC_7: async function (testdata) {
        sts = await libraryEditorPage.click_cancelbtn();
        await assertion.assertEqual(sts, true, "cancelbtn are not Clicked");
    },

    ENG_ICCE_TC_8: async function (testdata) {
        sts = await libraryEditorPage.click_deleteQuestionbtn();
        await assertion.assertEqual(sts, true, "deleteQuestionbtn are not Clicked");
    },

    ENG_ICCE_TC_9: async function (testdata) {
        sts = await libraryEditorPage.set_questiontextbox(testdata);
        await assertion.assertEqual(sts, true, "questiontextbox values are not set");

    },

    ENG_ICCE_TC_10: async function (testdata) {
        sts = await libraryEditorPage.click_inthisActivityIcon();
        await assertion.assertEqual(sts, true, "inthisActivityIcon are not Clicked");
    },

    ENG_ICCE_TC_11: async function (testdata) {
        sts = await libraryEditorPage.set_descriptionlbl(testdata);
        await assertion.assertEqual(sts, true, "descriptionlbl values are not set");

    },

    ENG_ICCE_TC_12: async function (testdata) {
        sts = await libraryEditorPage.click_addmediabtn();
        await assertion.assertEqual(sts.Imagebtn, testdata.Imagebtn, "Imagebtn text mismatch");
        await assertion.assertEqual(sts.audiobtn, testdata.audiobtn, "audiobtn text mismatch");
        await assertion.assertEqual(sts.vediobtn, testdata.vediobtn, "vediobtn text mismatch");
    },

    ENG_ICCE_TC_13: async function (testdata) {
        sts = await libraryEditorPage.click_addtextbtn();
        await assertion.assertEqual(sts, true, "addtextbtn are not Clicked");
    },

    ENG_ICCE_TC_14: async function (testdata) {
        sts = await libraryEditorPage.click_Imagebtn();
        console.log(sts)
        await assertion.assertEqual(sts.medialbl, testdata.medialbl, "medialbl text mismatch");

        // need to check prompt await assertion.assertEqual(sts.browsebtn, testdata.browsebtn, "browsebtn text mismatch");
        // await assertion.assertEqual(sts.titlearea, testdata.titlearea, "titlearea text mismatch");
        //await assertion.assertEqual(sts.alternativetxt, testdata.alternativetxt, "alternativetxt text mismatch");
    },

    //check
    ENG_ICCE_TC_15: async function (testdata) {
        sts = await libraryEditorPage.click_audiobtn();
        await assertion.assertEqual(sts, true, "audiobtn are not Clicked");
    },

    //check
    ENG_ICCE_TC_16: async function (testdata) {
        sts = await libraryEditorPage.click_vediobtn();
        await assertion.assertEqual(sts, true, "vediobtn are not Clicked");
    },

    ENG_ICCE_TC_17: async function (testdata) {
        sts = await libraryEditorPage.click_uploadImage(testdata);
        await assertion.assertEqual(sts, true, "browsebtn are not Clicked");
    },

    ENG_ICCE_TC_18: async function (testdata) {
        sts = await libraryEditorPage.set_titlearea();
        await assertion.assertEqual(sts, true, "titlearea values are not set");

    },

    ENG_ICCE_TC_19: async function (testdata) {
        sts = await libraryEditorPage.set_alternativetxt();
        await assertion.assertEqual(sts, true, "alternativetxt values are not set");

    },

    //check
    ENG_ICCE_TC_20: async function (testdata) {
        sts = await libraryEditorPage.click_txtpromptscelton();
        await assertion.assertEqual(sts, true, "txtpromptscelton are not Clicked");
    },

    ENG_ICCE_TC_21: async function (testdata) {
        sts = await libraryEditorPage.set_txtprompttxtbox(testdata);
        await assertion.assertEqual(sts, true, "txtprompttxtbox values are not set");

    },
    //check all text formating
    ENG_ICCE_TC_22: async function (testdata) {
        sts = await libraryEditorPage.click_deleteTextPromptbtn();
        await assertion.assertEqual(sts, true, "deleteTextPromptbtn are not Clicked");
    },

    ENG_ICCE_TC_23: async function (testdata) {
        sts = await libraryEditorPage.click_titlestyle();
        await assertion.assertEqual(sts, true, "titlestyle are not Clicked");
    },

    ENG_ICCE_TC_24: async function (testdata) {
        sts = await libraryEditorPage.click_titleDropdown();
        await assertion.assertEqual(sts, true, "titleDropdown are not Clicked");
    },

    ENG_ICCE_TC_25: async function (testdata) {
        sts = await libraryEditorPage.click_titleValue();
        await assertion.assertEqual(sts, true, "titleValue are not Clicked");
    },

    ENG_ICCE_TC_26: async function (testdata) {
        sts = await libraryEditorPage.click_boldbtn();
        await assertion.assertEqual(sts, true, "boldbtn are not Clicked");
    },

    ENG_ICCE_TC_27: async function (testdata) {
        sts = await libraryEditorPage.click_italicbtn();
        await assertion.assertEqual(sts, true, "italicbtn are not Clicked");
    },

    ENG_ICCE_TC_28: async function (testdata) {
        sts = await libraryEditorPage.click_underlinebtn();
        await assertion.assertEqual(sts, true, "underlinebtn are not Clicked");
    },

    ENG_ICCE_TC_29: async function (testdata) {
        sts = await libraryEditorPage.click_numberingbtn();
        await assertion.assertEqual(sts, true, "numberingbtn are not Clicked");
    },

    ENG_ICCE_TC_30: async function (testdata) {
        sts = await libraryEditorPage.click_bulletbtn();
        await assertion.assertEqual(sts, true, "bulletbtn are not Clicked");
    },

    ENG_ICCE_TC_31: async function () {
        sts = await libraryEditorPage.click_subquestionskeltonbtn();
        await assertion.assertEqual(sts, true, "subquestionskeltonbtn are not Clicked");
    },

    ENG_ICCE_TC_32: async function (testdata) {
        sts = await libraryEditorPage.set_subquestionTitle(testdata[0], testdata[1]);
        await assertion.assertEqual(sts, true, "subquestionTitle values are not set");

    },

    ENG_ICCE_TC_33: async function (testdata) {
        sts = await libraryEditorPage.set_option(testdata[0], testdata[1]);
        await assertion.assertEqual(sts, true, "option values are not set");

    },

    ENG_ICCE_TC_34: async function (testdata) {
        sts = await libraryEditorPage.click_addsubquestionbtn();
        await assertion.assertEqual(sts, true, "addsubquestionbtn are not Clicked");
    },

    ENG_ICCE_TC_35: async function (testdata) {
        sts = await libraryEditorPage.click_addOptionbtn(testdata);
        await assertion.assertEqual(sts, true, "addOptionbtn are not Clicked");
    },

    ENG_ICCE_TC_36: async function (testdata) {
        sts = await libraryEditorPage.click_correctIcon(testdata);
        await assertion.assertEqual(sts, true, "correctIcon are not Clicked");
    },

    ENG_ICCE_TC_37: async function (testdata) {
        sts = await libraryEditorPage.click_leftArrow();
        await assertion.assertEqual(sts.drawerTitle, testdata.drawerTitle, "drawerTitle text mismatch");
        await assertion.assertEqual(sts.tagsHeading, testdata.tagsHeading, "tagsHeading text mismatch");
        await assertion.assertEqual(sts.tagsSubHeading, testdata.tagsSubHeading, "tagsSubHeading text mismatch");
        await assertion.assertEqual(sts.addTagslbl, testdata.addTagslbl, "addTagslbl text mismatch");
        await assertion.assertEqual(sts.bookTagsHeading, testdata.bookTagsHeading, "bookTagsHeading text mismatch");
        await assertion.assertEqual(sts.bookTagsSubHeading, testdata.bookTagsSubHeading, "bookTagsSubHeading text mismatch");
        await assertion.assertEqual(sts.booklbl, testdata.booklbl, "booklbl text mismatch");
    },
    //check book
    ENG_ICCE_TC_38: async function (testdata) {
        sts = await libraryEditorPage.set_inputlbl();
        await assertion.assertEqual(sts, true, "inputlbl values are not set");

    },

    ENG_ICCE_TC_39: async function (testdata) {
        sts = await libraryEditorPage.click_selectBook();
        await assertion.assertEqual(sts, true, "selectBook are not Clicked");
    },

    ENG_ICCE_TC_40: async function (testdata) {
        sts = await libraryEditorPage.click_newQuestionbtn();
        await assertion.assertEqual(sts.multipleChoicebtn, testdata.multipleChoicebtn, "multipleChoicebtn text mismatch");
        await assertion.assertEqual(sts.textbtn, testdata.textbtn, "textbtn text mismatch");
    },

    ENG_ICCE_TC_41: async function (testdata) {
        sts = await libraryEditorPage.click_multipleChoicebtn();
        await assertion.assert(sts.questionNumber.includes(testdata.questionNumber), "questionNumber text mismatch");
        await assertion.assertEqual(sts.Choicelbl, testdata.multipleChoicelbl, "multipleChoicelbl text mismatch");
        await assertion.assertEqual(sts.dupicatebtn, true, "dupicatebtn text mismatch");
        await assertion.assertEqual(sts.deletebtn, true, "deletebtn text mismatch");
        await assertion.assertEqual(sts.questiontextbox, testdata.questiontextbox, "questiontextbox text mismatch");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity text mismatch");
        await assertion.assertEqual(sts.inthisActivityIcon, true, "inthisActivityIcon text mismatch");
        await assertion.assertEqual(sts.addmediabtn, testdata.addmediabtn, "addmediabtn text mismatch");
        await assertion.assertEqual(sts.addtextbtn, testdata.addtextbtn, "addtextbtn text mismatch");
        await assertion.assertEqual(sts.selectonelbl, testdata.selectonelbl, "txtpromptscelton text mismatch");
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        console.log(sts)
        console.log(testdata.duplicate_msg)
        await assertion.assertEqual(sts, testdata.added_msg, "Snackbar message mismatch: " + sts);

    },

    ENG_ICCE_TC_42: async function (testdata) {
        sts = await libraryEditorPage.click_textbtn();
        await assertion.assert(sts.questionNumber.includes(testdata.questionNumber), "questionNumber text mismatch");
        await assertion.assertEqual(sts.Choicelbl, testdata.textChoicelbl, "multipleChoicelbl text mismatch");
        await assertion.assertEqual(sts.dupicatebtn, true, "dupicatebtn text mismatch");
        await assertion.assertEqual(sts.deletebtn, true, "deletebtn text mismatch");
        await assertion.assertEqual(sts.questiontextbox, testdata.questiontextbox, "questiontextbox text mismatch");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity text mismatch");
        await assertion.assertEqual(sts.inthisActivityIcon, true, "inthisActivityIcon text mismatch");
        await assertion.assertEqual(sts.addmediabtn, testdata.addmediabtn, "addmediabtn text mismatch");
        await assertion.assertEqual(sts.addtextbtn, testdata.addtextbtn, "addtextbtn text mismatch");
        await assertion.assertEqual(sts.selectonelbl, null, "selectonelbl text mismatch")
        sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
        await assertion.assertEqual(sts, testdata.added_msg, "Snackbar message mismatch: " + sts);

    },

    ENG_ICCE_TC_43: async function (testdata) {
        sts = await libraryEditorPage.click_leftactivityArrow();
        await assertion.assertEqual(sts, true, "leftactivityArrow are not Clicked");
    },

    ENG_ICCE_TC_44: async function (testdata) {
        sts = await libraryEditorPage.click_rightactivityArrow();
        await assertion.assertEqual(sts, true, "rightactivityArrow are not Clicked");
    },

    ENG_ICCE_TC_45: async function (testdata) {
        sts = await libraryEditorPage.click_studentWillAnswerHere();
        await assertion.assertEqual(sts, true, "studentWillAnswerHere are not Clicked");
    },

    ENG_ICCE_TC_46: async function (testdata) {
        sts = await libraryEditorPage.click_longAnswerbtn();
        await assertion.assertEqual(sts, true, "longAnswerbtn are not Clicked");
    },

    ENG_ICCE_TC_47: async function (testdata) {
        sts = await libraryEditorPage.click_fileUploadbtn();
        await assertion.assertEqual(sts, true, "fileUploadbtn are not Clicked");
    },

    ENG_ICCE_TC_48: async function (testdata) {
        sts = await libraryEditorPage.click_closeIconfinishDialogue();
        await assertion.assertEqual(sts, true, "closeIconfinishDialogue are not Clicked");
    },

    ENG_ICCE_TC_49: async function (testdata) {
        sts = await libraryEditorPage.click_declarationcheckbox();
        await assertion.assertEqual(sts, true, "declarationcheckbox are not Clicked");
    },

    ENG_ICCE_TC_50: async function (testdata) {
        sts = await libraryEditorPage.click_ConfirmFinishbtn();
        await assertion.assertEqual(sts, true, "ConfirmFinishbtn are not Clicked");
    },

    ENG_ICCE_TC_51: async function (testdata) {
        sts = await libraryEditorPage.click_linkinstructionhyperlink();
        await assertion.assertEqual(sts, true, "linkinstructionhyperlink are not Clicked");
    },
    ENG_ICCE_TC_67: async function (testdata) {
        sts = await libraryEditorPage.click_previewbtn();
        console.log(sts)
        await assertion.assertEqual(sts.previewcontainer, testdata.previewcontainer, "previewcontainer Values is not as expected.");
        await assertion.assertEqual(sts.eyeIcon, true, "eyeIcon Values is not as expected.");
        await assertion.assertEqual(sts.previeCloseIcon, true, "previeCloseIcon is not as expected.");

    },

    ENG_ICCE_TC_68: async function (testdata) {
        sts = await libraryEditorPage.click_morebtn();
        await assertion.assertEqual(sts, true, "morebtn are not Clicked");
    },

    ENG_ICCE_TC_69: async function (testdata) {
        sts = await libraryEditorPage.click_duplicateMoreOptionbtn();
        await assertion.assertEqual(sts, true, "duplicatebtn are not Clicked");
    },

    ENG_ICCE_TC_70: async function (testdata) {
        sts = await libraryEditorPage.click_deleteMoreOptionbtn();
        console.log(sts)
        await assertion.assertEqual(sts.deleteTitle, testdata.deleteTitle, "deleteTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitle, testdata.deleteSubTitle, "deleteSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitleMaterial, testdata.deleteSubTitleMaterial, "deleteSubTitleMaterial Values is not as expected.");
        await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn Values is not as expected.");
        await assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn Values is not as expected.");
    },
    ENG_ICCE_TC_71: async function (testdata) {
        sts = await libraryEditorPage.click_previeCloseIcon();
        console.log(sts)
        await assertion.assert(sts.questionNumber.includes(testdata.questionNumber), "questionNumber text mismatch");
        await assertion.assertEqual(sts.dupicatebtn, true, "dupicatebtn text mismatch");
        await assertion.assertEqual(sts.deletebtn, true, "deletebtn text mismatch");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity text mismatch");
        await assertion.assertEqual(sts.inthisActivityIcon, true, "inthisActivityIcon text mismatch");
        await assertion.assertEqual(sts.selectonelbl, testdata.selectonelbl, "txtpromptscelton text mismatch");
    },
    ENG_ICCE_TC_72: async function (testdata) {
        sts = await libraryEditorPage.click_closeDrawerArrow();
        await assertion.assertEqual(sts, true, "deletebtn are not Clicked");
    },
    ENG_ICCE_TC_52: async function (testdata) {
        sts = await libraryEditorPage.getData_blankQuizPage(testdata);
        await assertion.assertEqual(sts.quizHeaderIcon, true, "quizHeaderIcon Values is not as expected.");
        await assertion.assertEqual(sts.quizHeaderName, testdata.quizHeaderName, "quizHeaderName Values is not as expected.");
        await assertion.assertEqual(sts.savedtoLibrarylbl, testdata.savedtoLibrarylbl, "savedtoLibrarylbl Values is not as expected.");
        await assertion.assertEqual(sts.draftlbl, testdata.draftlbl, "draftlbl Values is not as expected.");
        await assertion.assertEqual(sts.pageHeader, testdata.pageHeader, "pageHeader Values is not as expected.");
        await assertion.assertEqual(sts.pageSubHeader, testdata.pageSubHeader, "pageSubHeader Values is not as expected.");
        await assertion.assertEqual(sts.multipleChoicetab, testdata.multipleChoicelbl, "multipleChoicebtn Values is not as expected.");
        await assertion.assertEqual(sts.texttab, testdata.textChoicelbl, "textbtn Values is not as expected.");
        await assertion.assertEqual(sts.finishQuiz, testdata.finishQuiz, "finishQuiz Values is not as expected.");
    },

    ENG_ICCE_TC_53: async function (testdata) {
        sts = await libraryEditorPage.getData_editorPage(testdata);
        await assertion.assertEqual(sts.questionNumber, testdata.questionNumber, "questionNumber Values is not as expected.");
        await assertion.assertEqual(sts.multipleChoicelbl, testdata.multipleChoicelbl, "multipleChoicelbl Values is not as expected.");
        await assertion.assertEqual(sts.dupicatebtn, testdata.dupicatebtn, "dupicatebtn Values is not as expected.");
        await assertion.assertEqual(sts.deletebtn, testdata.deletebtn, "deletebtn Values is not as expected.");
        await assertion.assertEqual(sts.questiontextbox, testdata.questiontextbox, "questiontextbox Values is not as expected.");
        await assertion.assertEqual(sts.inthisActivity, testdata.inthisActivity, "inthisActivity Values is not as expected.");
        await assertion.assertEqual(sts.inthisActivityIcon, testdata.inthisActivityIcon, "inthisActivityIcon Values is not as expected.");
        await assertion.assertEqual(sts.descriptionlbl, testdata.descriptionlbl, "descriptionlbl Values is not as expected.");
        await assertion.assertEqual(sts.addmediabtn, testdata.addmediabtn, "addmediabtn Values is not as expected.");
        await assertion.assertEqual(sts.addtextbtn, testdata.addtextbtn, "addtextbtn Values is not as expected.");
        await assertion.assertEqual(sts.txtpromptscelton, testdata.txtpromptscelton, "txtpromptscelton Values is not as expected.");
        await assertion.assertEqual(sts.prompttextboxheader, testdata.prompttextboxheader, "prompttextboxheader Values is not as expected.");
        await assertion.assertEqual(sts.txtprompttxtbox, testdata.txtprompttxtbox, "txtprompttxtbox Values is not as expected.");
        await assertion.assertEqual(sts.deleteTextPromptbtn, testdata.deleteTextPromptbtn, "deleteTextPromptbtn Values is not as expected.");
        await assertion.assertEqual(sts.selectonelbl, testdata.selectonelbl, "selectonelbl Values is not as expected.");
        await assertion.assertEqual(sts.subquestionskeltonbtn, testdata.subquestionskeltonbtn, "subquestionskeltonbtn Values is not as expected.");
        await assertion.assertEqual(sts.subquestionTitle, testdata.subquestionTitle, "subquestionTitle Values is not as expected.");
        await assertion.assertEqual(sts.option, testdata.option, "option Values is not as expected.");
        await assertion.assertEqual(sts.addsubquestionbtn, testdata.addsubquestionbtn, "addsubquestionbtn Values is not as expected.");
        await assertion.assertEqual(sts.addOptionbtn, testdata.addOptionbtn, "addOptionbtn Values is not as expected.");
        await assertion.assertEqual(sts.correctIcon, testdata.correctIcon, "correctIcon Values is not as expected.");
        await assertion.assertEqual(sts.leftArrow, testdata.leftArrow, "leftArrow Values is not as expected.");
        await assertion.assertEqual(sts.newQuestionbtn, testdata.newQuestionbtn, "newQuestionbtn Values is not as expected.");
        await assertion.assertEqual(sts.leftactivityArrow, testdata.leftactivityArrow, "leftactivityArrow Values is not as expected.");
        await assertion.assertEqual(sts.rightactivityArrow, testdata.rightactivityArrow, "rightactivityArrow Values is not as expected.");
        await assertion.assertEqual(sts.questionnumber, testdata.questionnumber, "questionnumber Values is not as expected.");
        await assertion.assertEqual(sts.studentWillAnswerHere, testdata.studentWillAnswerHere, "studentWillAnswerHere Values is not as expected.");
        await assertion.assertEqual(sts.longAnswerbtn, testdata.longAnswerbtn, "longAnswerbtn Values is not as expected.");
        await assertion.assertEqual(sts.fileUploadbtn, testdata.fileUploadbtn, "fileUploadbtn Values is not as expected.");
    },

    ENG_ICCE_TC_54: async function (testdata) {
        sts = await libraryEditorPage.getData_deleteQunDialogue(testdata);
        console.log(sts)
        await assertion.assertEqual(sts.deleteQuestionHeader, testdata.deleteQuestionHeader, "deleteQuestionHeader Values is not as expected.");
        await assertion.assertEqual(sts.deleteQuestionSubHeader, testdata.deleteQuestionSubHeader, "deleteQuestionSubHeader Values is not as expected.");
        await assertion.assertEqual(sts.cancelbtn, testdata.cancelbtn, "cancelbtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteQuestionbtn, testdata.deleteQuestionbtn, "deleteQuestionbtn Values is not as expected.");
    },

    ENG_ICCE_TC_55: async function (testdata) {
        sts = await libraryEditorPage.getData_browsePage(testdata);
        await assertion.assertEqual(sts.Imagebtn, testdata.Imagebtn, "Imagebtn Values is not as expected.");
        await assertion.assertEqual(sts.audiobtn, testdata.audiobtn, "audiobtn Values is not as expected.");
        await assertion.assertEqual(sts.vediobtn, testdata.vediobtn, "vediobtn Values is not as expected.");
        await assertion.assertEqual(sts.medialbl, testdata.medialbl, "medialbl Values is not as expected.");
        await assertion.assertEqual(sts.browsebtn, testdata.browsebtn, "browsebtn Values is not as expected.");
        await assertion.assertEqual(sts.titlearea, testdata.titlearea, "titlearea Values is not as expected.");
        await assertion.assertEqual(sts.alternativetxt, testdata.alternativetxt, "alternativetxt Values is not as expected.");
    },

    ENG_ICCE_TC_56: async function (testdata) {
        sts = await libraryEditorPage.getData_textpromptPage(testdata);
        await assertion.assertEqual(sts.titlestyle, testdata.titlestyle, "titlestyle Values is not as expected.");
        await assertion.assertEqual(sts.titleDropdown, testdata.titleDropdown, "titleDropdown Values is not as expected.");
        await assertion.assertEqual(sts.titleValue, testdata.titleValue, "titleValue Values is not as expected.");
        await assertion.assertEqual(sts.boldbtn, testdata.boldbtn, "boldbtn Values is not as expected.");
        await assertion.assertEqual(sts.italicbtn, testdata.italicbtn, "italicbtn Values is not as expected.");
        await assertion.assertEqual(sts.underlinebtn, testdata.underlinebtn, "underlinebtn Values is not as expected.");
        await assertion.assertEqual(sts.numberingbtn, testdata.numberingbtn, "numberingbtn Values is not as expected.");
        await assertion.assertEqual(sts.bulletbtn, testdata.bulletbtn, "bulletbtn Values is not as expected.");
    },

    ENG_ICCE_TC_57: async function (testdata) {
        sts = await libraryEditorPage.getData_drawerPage(testdata);
        await assertion.assertEqual(sts.drawerTitle, testdata.drawerTitle, "drawerTitle Values is not as expected.");
        await assertion.assertEqual(sts.tagsHeading, testdata.tagsHeading, "tagsHeading Values is not as expected.");
        await assertion.assertEqual(sts.tagsSubHeading, testdata.tagsSubHeading, "tagsSubHeading Values is not as expected.");
        await assertion.assertEqual(sts.addTagslbl, testdata.addTagslbl, "addTagslbl Values is not as expected.");
        await assertion.assertEqual(sts.inputlbl, testdata.inputlbl, "inputlbl Values is not as expected.");
        await assertion.assertEqual(sts.tagChip, testdata.tagChip, "tagChip Values is not as expected.");
        await assertion.assertEqual(sts.bookTagsHeading, testdata.bookTagsHeading, "bookTagsHeading Values is not as expected.");
        await assertion.assertEqual(sts.bookTagsSubHeading, testdata.bookTagsSubHeading, "bookTagsSubHeading Values is not as expected.");
        await assertion.assertEqual(sts.booklbl, testdata.booklbl, "booklbl Values is not as expected.");
        await assertion.assertEqual(sts.selectBook, testdata.selectBook, "selectBook Values is not as expected.");
    },

    ENG_ICCE_TC_58: async function (testdata) {
        sts = await libraryEditorPage.getData_questionPage(testdata);
        await assertion.assertEqual(sts.multipleChoicebtn, testdata.multipleChoicebtn, "multipleChoicebtn Values is not as expected.");
        await assertion.assertEqual(sts.textbtn, testdata.textbtn, "textbtn Values is not as expected.");
    },

    ENG_ICCE_TC_59: async function (testdata) {
        sts = await libraryEditorPage.getData_finishDialogue(testdata);
        await assertion.assertEqual(sts.finishdialogiueheader, testdata.finishdialogiueheader, "finishdialogiueheader Values is not as expected.");
        await assertion.assertEqual(sts.closeIconfinishDialogue, testdata.closeIconfinishDialogue, "closeIconfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.questionlblfinishDialogue, testdata.questionlblfinishDialogue, "questionlblfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.questioncountfinishDialogue, testdata.questioncountfinishDialogue, "questioncountfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.medialblfinishDialogue, testdata.medialblfinishDialogue, "medialblfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.mediaCountfinishDialogue, testdata.mediaCountfinishDialogue, "mediaCountfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.questionNumberfinishDialogue, testdata.questionNumberfinishDialogue, "questionNumberfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.materialIconfinishDialogue, testdata.materialIconfinishDialogue, "materialIconfinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.questionTitlefinishDialogue, testdata.questionTitlefinishDialogue, "questionTitlefinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.questionMediafinishDialogue, testdata.questionMediafinishDialogue, "questionMediafinishDialogue Values is not as expected.");
        await assertion.assertEqual(sts.declarationcheckbox, testdata.declarationcheckbox, "declarationcheckbox Values is not as expected.");
        await assertion.assertEqual(sts.declarationboxtext1, testdata.declarationboxtext1, "declarationboxtext1 Values is not as expected.");
        await assertion.assertEqual(sts.declarationboxtext2, testdata.declarationboxtext2, "declarationboxtext2 Values is not as expected.");
        await assertion.assertEqual(sts.ConfirmFinishbtn, testdata.ConfirmFinishbtn, "ConfirmFinishbtn Values is not as expected.");
        await assertion.assertEqual(sts.linkinstructionhyperlink, testdata.linkinstructionhyperlink, "linkinstructionhyperlink Values is not as expected.");
    },
    ENG_ICCE_TC_65: async function (testdata) {
        sts = await libraryEditorPage.getData_moreOptionList(testdata);
        console.log(sts)
        console.log(testdata)
        await assertion.assertEqual(sts.duplicateMoreOptionbtn, testdata.duplicatebtn, "duplicatebtn Values is not as expected.");
        await assertion.assertEqual(sts.deleteMoreOptionbtn, testdata.deletebtn, "deletebtn Values is not as expected.");
    },

    ENG_ICCE_TC_66: async function (testdata) {
        sts = await libraryEditorPage.getData_previewPage(testdata);
        await assertion.assertEqual(sts.previewcontainer, testdata.previewcontainer, "previewcontainer Values is not as expected.");
        await assertion.assertEqual(sts.eyeIcon, true, "eyeIcon Values is not as expected.");
        await assertion.assertEqual(sts.previeCloseIcon, true, "previewCloseIcon Values is not as expected.");
    },
    ENG_ICCE_TC_76: async function (testdata) {
        sts = await libraryEditorPage.click_cancel_btn();
        await assertion.assertEqual(sts, true, "cancel_btn are not Clicked");
    },
    //Validate the Click on delete button on the quiz delete dialogue box
    ENG_ICCE_TC_75: async function (testdata) {
        sts = await libraryEditorPage.click_delete_btn();
        await assertion.assertEqual(sts, testdata.Snackbar_DeleteMessage_Text, "snackbar is not displayed");

    },
// Validate the Add to Class Page when no class is available
    ENG_ICCE_TC_77: async function (testdata) {
        sts = await libraryEditorPage.click_addtoClass_btn();
        console.log(sts)
        await assertion.assertEqual(sts.newAccess_Title, testdata.newAccess_Title, "newAccess_Title Values is not as expected.");
        await assertion.assertEqual(sts.newAccess_SubTitle, testdata.newAccess_SubTitle, "newAccess_SubTitle Values is not as expected.");
      // await assertion.assertEqual(sts.addnowbutton, testdata.addnowbutton, "addnowbutton Values is not as expected.");
        await assertion.assertEqual(sts.accessClosebtn, true, "accessClosebtn Values is not as expected.");

    },
    // Validate the Add to Class Page when class is available
    ENG_ICCE_TC_61: async function (testdata) {
        sts = await libraryEditorPage.click_addtoClass_btn();
        console.log(sts)
        await assertion.assertEqual(sts.newAccess_Title, testdata.newAccess_Title, "newAccess_Title Values is not as expected.");
        await assertion.assertEqual(sts.newAccess_SubTitle, testdata.newAccess_SubTitle, "newAccess_SubTitle Values is not as expected.");
      // await assertion.assertEqual(sts.addnowbutton, testdata.addnowbutton, "addnowbutton Values is not as expected.");
        await assertion.assertEqual(sts.accessClosebtn, true, "accessClosebtn Values is not as expected.");

    },
    ENG_ICCE_TC_78: async function (testdata) {
        sts = await libraryEditorPage.click_edit_btn();
        console.log(sts)
        await assertion.assert(sts.editMaterial_Title.includes(testdata.editMaterial_Title), "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata.editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_classIcon, null, "editMaterial_classIcon Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ClassInfoBoxTitle, null, "editMaterial_ClassInfoBoxTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_addedClasses_classInfoBox, null, "editMaterial_addedClasses-classInfoBox Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Note, null, "editMaterial_Note Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Cancel, testdata.editMaterial_Cancel, "editMaterial_Cancel Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ContinueToEdit, testdata.editMaterial_ContinueToEdit, "editMaterial_ContinueToEdit Values is not as expected.");

    },
    ENG_ICCE_TC_79: async function (testdata) {
        sts = await libraryEditorPage.click_viewAsStudent();
        await assertion.assertEqual(sts.previewcontainer, testdata.studentView, "previewcontainer Values is not as expected.");
        await assertion.assertEqual(sts.eyeIcon, true, "eyeIcon Values is not as expected.");
        await assertion.assertEqual(sts.previeCloseIcon, true, "previeCloseIcon is not as expected.");
    },
    ENG_ICCE_TC_80: async function (testdata) {
        sts = await libraryEditorPage.click_viewAsStudentClosebtn();
        console.log(sts)
        await assertion.assertEqual(sts.quizHeaderIcon, true, "quizHeaderIcon Values is not as expected.");
        //await assertion.assertEqual(sts.quizHeaderName, testdata.quizHeaderName, "quizHeaderName Values is not as expected.");
        await assertion.assertEqual(sts.addtoClass_btn, testdata.addtoClass_btn, "addtoClass_btn Values is not as expected.");
        await assertion.assertEqual(sts.edit_btn, testdata.edit_btn, "edit_btn Values is not as expected.");
        await assertion.assertEqual(sts.viewAsStudent, testdata.viewAsStudent, "edit_btn Values is not as expected.");

    },
    ENG_ICCE_TC_81: async function (testdata) {
        sts = await libraryEditorPage.click_editMaterial_Cancel();
        await assertion.assertEqual(sts, true, "editMaterial_Cancel are not Clicked");
    },

    ENG_ICCE_TC_82: async function (testdata) {
        sts = await libraryEditorPage.click_accessClosebtn();
        await assertion.assertEqual(sts, true, "accessClosebtn are not Clicked");
    },

    //Validate the Click on Continue to Edit button Edit Quiz Dialogue"
    ENG_ICCE_TC_83: async function (testdata) {
        sts = await libraryEditorPage.click_editMaterial_ContinueToEdit();
        await assertion.assertEqual(sts, true, "editMaterial_ContinueToEdit are not Clicked");
    },
    ENG_ICCE_TC_84: async function (testdata) {
        sts = await libraryEditorPage.getData_editMaterial_Modal(testdata);
        await assertion.assert(sts.editMaterial_Title.includes(testdata.editMaterial_Title), "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata.editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_classIcon, testdata.editMaterial_classIcon, "editMaterial_classIcon Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ClassInfoBoxTitle, null, "editMaterial_ClassInfoBoxTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_addedClasses_classInfoBox, null, "editMaterial_addedClasses-classInfoBox Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Note, null, "editMaterial_Note Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Cancel, testdata.editMaterial_Cancel, "editMaterial_Cancel Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ContinueToEdit, testdata.editMaterial_ContinueToEdit, "editMaterial_ContinueToEdit Values is not as expected.");
    },
    ENG_ICCE_TC_85: async function (testdata) {
        sts = await libraryEditorPage.click_editMaterial_Cancel();
        await assertion.assertEqual(sts, true, "editMaterial_Cancel are not Clicked");
    },


    ENG_LIBR_TC_3: async function (testdata) {
        sts = await libraryEditorPage.click_close_btn();
        await assertion.assertEqual(sts, true, "close_btn are not Clicked");
    },

    ENG_LIBR_TC_4: async function (testdata) {
        sts = await libraryEditorPage.click_newAccess_btn();
        await assertion.assertEqual(sts, true, "newAccess_btn are not Clicked");
    },

    ENG_LIBR_TC_5: async function (testdata) {
        sts = await libraryEditorPage.click_done_btn();
        await assertion.assertEqual(sts, true, "done_btn are not Clicked");
    },

    ENG_LIBR_TC_6: async function (testdata) {
        sts = await libraryEditor.click_selectClass();
        await assertion.assertEqual(sts, true, "selectClass are not Clicked");
    },

    ENG_LIBR_TC_7: async function (testdata) {
        sts = await libraryEditor.click_dropDown_btn();
        await assertion.assertEqual(sts.updateTo, tesdata.updateTo, "updateTo text mismatch");
        await assertion.assertEqual(sts.removeAccess, tesdata.removeAccess, "removeAccess text mismatch");
    },

    ENG_LIBR_TC_8: async function (testdata) {
        sts = await libraryEditor.click_updateTo();
        await assertion.assertEqual(sts, true, "updateTo are not Clicked");
    },

    ENG_LIBR_TC_9: async function (testdata) {
        sts = await libraryEditor.click_removeAccess();
        await assertion.assertEqual(sts, true, "removeAccess are not Clicked");
    },

    ENG_LIBR_TC_10: async function (testdata) {
        sts = await libraryEditor.click_removeAccess_btn();
        await assertion.assertEqual(sts, true, "removeAccess_btn are not Clicked");
    },

    ENG_LIBR_TC_11: async function (testdata) {
        sts = await libraryEditor.click_addnowbutton();
        await assertion.assertEqual(sts, true, "addnowbutton are not Clicked");
    },

    ENG_LIBR_TC_12: async function (testdata) {
        sts = await libraryEditor.click_accessClosebtn();
        await assertion.assertEqual(sts, true, "accessClosebtn are not Clicked");
    },

    ENG_LIBR_TC_13: async function (testdata) {
        sts = await libraryEditor.click_editMaterial_Cancel();
        await assertion.assertEqual(sts, true, "editMaterial_Cancel are not Clicked");
    },



    ENG_LIBR_TC_15: async function (testdata) {
        sts = await libraryEditor.getData_deleteDialogue(testdata);
        await assertion.assertEqual(sts.deleteTitle, testdata.deleteTitle, "deleteTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitle, testdata.deleteSubTitle, "deleteSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.deleteSubTitleMaterial, testdata.deleteSubTitleMaterial, "deleteSubTitleMaterial Values is not as expected.");
        await assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn Values is not as expected.");
        await assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn Values is not as expected.");
    },

    ENG_LIBR_TC_16: async function (testdata) {
        sts = await libraryEditor.getData_manageAccessPage(testdata);
        await assertion.assertEqual(sts.manageAccess_Title, testdata.manageAccess_Title, "manageAccess_Title Values is not as expected.");
        await assertion.assertEqual(sts.manageAccess_SubTitle, testdata.manageAccess_SubTitle, "manageAccess_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.close_btn, testdata.close_btn, "close_btn Values is not as expected.");
        await assertion.assertEqual(sts.newAccess_btn, testdata.newAccess_btn, "newAccess_btn Values is not as expected.");
        await assertion.assertEqual(sts.pill_number, testdata.pill_number, "pill_number Values is not as expected.");
        await assertion.assertEqual(sts.classAccessHeader, testdata.classAccessHeader, "classAccessHeader Values is not as expected.");
        await assertion.assertEqual(sts.done_btn, testdata.done_btn, "done_btn Values is not as expected.");
    },

    ENG_LIBR_TC_17: async function (testdata) {
        sts = await libraryEditor.getData_classPanePage(testdata);
        await assertion.assertEqual(sts.classIcon, testdata.classIcon, "classIcon Values is not as expected.");
        await assertion.assertEqual(sts.selectClass, testdata.selectClass, "selectClass Values is not as expected.");
        await assertion.assertEqual(sts.ClassName, testdata.ClassName, "ClassName Values is not as expected.");
        await assertion.assertEqual(sts.bookName, testdata.bookName, "bookName Values is not as expected.");
        await assertion.assertEqual(sts.bookImage, testdata.bookImage, "bookImage Values is not as expected.");
        await assertion.assertEqual(sts.dropDown_btn, testdata.dropDown_btn, "dropDown_btn Values is not as expected.");
        await assertion.assertEqual(sts.removeAccess_btn, testdata.removeAccess_btn, "removeAccess_btn Values is not as expected.");
    },

    ENG_LIBR_TC_18: async function (testdata) {
        sts = await libraryEditor.getData_updateDrownDownMenu(testdata);
        await assertion.assertEqual(sts.updateTo, testdata.updateTo, "updateTo Values is not as expected.");
        await assertion.assertEqual(sts.removeAccess, testdata.removeAccess, "removeAccess Values is not as expected.");
    },

    ENG_LIBR_TC_19: async function (testdata) {
        sts = await libraryEditor.getData_NewAccessPage(testdata);
        await assertion.assertEqual(sts.newAccess_Title, testdata.newAccess_Title, "newAccess_Title Values is not as expected.");
        await assertion.assertEqual(sts.newAccess_SubTitle, testdata.newAccess_SubTitle, "newAccess_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.noAccessClassIcon, testdata.noAccessClassIcon, "noAccessClassIcon Values is not as expected.");
        await assertion.assertEqual(sts.noClassRemaining, testdata.noClassRemaining, "noClassRemaining Values is not as expected.");
        await assertion.assertEqual(sts.addtoClassDescription, testdata.addtoClassDescription, "addtoClassDescription Values is not as expected.");
        await assertion.assertEqual(sts.addnowbutton, testdata.addnowbutton, "addnowbutton Values is not as expected.");
        await assertion.assertEqual(sts.accessClosebtn, testdata.accessClosebtn, "accessClosebtn Values is not as expected.");
    },

    ENG_LIBR_TC_20: async function (testdata) {
        sts = await libraryEditor.getData_editMaterial_Modal(testdata);
        await assertion.assertEqual(sts.editMaterial_Title, testdata.editMaterial_Title, "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata.editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_classIcon, testdata.editMaterial_classIcon, "editMaterial_classIcon Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ClassInfoBoxTitle, testdata.editMaterial_ClassInfoBoxTitle, "editMaterial_ClassInfoBoxTitle Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_addedClasses - classInfoBox, testdata.editMaterial_addedClasses - classInfoBox, "editMaterial_addedClasses-classInfoBox Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Note, testdata.editMaterial_Note, "editMaterial_Note Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_Cancel, testdata.editMaterial_Cancel, "editMaterial_Cancel Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_ContinueToEdit, testdata.editMaterial_ContinueToEdit, "editMaterial_ContinueToEdit Values is not as expected.");
    },

}