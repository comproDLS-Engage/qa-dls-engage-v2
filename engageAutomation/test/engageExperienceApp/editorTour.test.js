"use strict";
var editorTour = require('../../pages/engageExperienceApp/editorTour.page.js');
var sts;

module.exports = {

    //Validate that editor tour is launched when user creates first question in a quiz in a login session
    ENG_ICCT_TC_1: async function () {
        sts = await editorTour.isInitialized();
        await assertion.assertEqual(sts.pageStatus, true, "isInitialized status mismatch");
    },

    //Validate that editor tour is closed on clicking dismiss button
    ENG_ICCT_TC_2: async function () {
        sts = await editorTour.click_dismissBtn();
        await assertion.assertEqual(sts, true, "dismissBtn status mismatch");
    },

    //Validate that editor tour does not launch when user add another question of same type
    ENG_ICCT_TC_3: async function () {
        sts = await editorTour.isInitialized();
        await assertion.assertEqual(sts.pageStatus, false, "isInitialized status mismatch");
    },

    //Validate that editor tour does not launch when user creates first question in another quiz in a login session
    ENG_ICCT_TC_4: async function () {
        await this.ENG_ICCT_TC_3();
    },

    //Validate that first prompt appears on clicking Start Tour button
    ENG_ICCT_TC_5: async function () {
        sts = await editorTour.click_startTourBtn();
        await assertion.assertEqual(sts, true, "startTourBtn status mismatch");
    },

    //Validate that tour exits on clicking exit button in the first prompt
    ENG_ICCT_TC_6: async function () {
        sts = await editorTour.click_exitBtn();
        await assertion.assertEqual(sts, true, "exitBtn status mismatch");
    },

    //Validate that next prompt appears on clicking next button
    ENG_ICCT_TC_7: async function () {
        sts = await editorTour.click_nextBtn();
        await assertion.assertEqual(sts, true, "nextBtn status mismatch");
    },

    //Validate that previous prompt appears on clicking back button
    ENG_ICCT_TC_8: async function () {
        sts = await editorTour.click_backBtn();
        await assertion.assertEqual(sts, true, "backBtn status mismatch");
    },

    //Validate that tour exits on clicking exit button in the last prompt
    ENG_ICCT_TC_9: async function () {
        await this.ENG_ICCT_TC_6();
    },

    //Validate that dont show again checkbox is selected on clicking the checkbox
    ENG_ICCT_TC_10: async function () {
        sts = await editorTour.click_dontShowCheckbox();
        await assertion.assertEqual(sts, true, "dontShowCheckbox status mismatch");
    },

    //Validate that editor tour does not launch when user creates first question in a quiz in a new login session if dont show checkbox is checked
    ENG_ICCT_TC_11: async function () {
        await this.ENG_ICCT_TC_3();
    },

    //Validate the content of the start tour dialog
    ENG_ICCT_TC_12: async function (testdata) {
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.step0Title, testdata.step0Title, "step0Title status mismatch");
        await assertion.assertEqual(sts.step0Subtitle, testdata.step0Subtitle, "step0Subtitle status mismatch");
        await assertion.assertEqual(sts.dontShowCheckbox, testdata.dontShowCheckbox, "dontShowCheckbox status mismatch");
        await assertion.assertEqual(sts.dismissBtn, testdata.dismissBtn, "dismissBtn status mismatch");
        await assertion.assertEqual(sts.startTourBtn, testdata.startTourBtn, "startTourBtn status mismatch");
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, null, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, null, "backBtn status mismatch");
        await assertion.assertEqual(sts.step1Title, null, "step1Title status mismatch");
        await assertion.assertEqual(sts.step1Subtitle, null, "step1Subtitle status mismatch");
        await assertion.assertEqual(sts.step2Title, null, "step2Title status mismatch");
        await assertion.assertEqual(sts.step2Subtitle, null, "step2Subtitle status mismatch");
        await assertion.assertEqual(sts.step3Title, null, "step3Title status mismatch");
        await assertion.assertEqual(sts.step3Subtitle, null, "step3Subtitle status mismatch");
        await assertion.assertEqual(sts.step4Title, null, "step4Title status mismatch");
        await assertion.assertEqual(sts.step4Subtitle, null, "step4Subtitle status mismatch");
        await assertion.assertEqual(sts.step5Title, null, "step5Title status mismatch");
        await assertion.assertEqual(sts.step5Subtitle, null, "step5Subtitle status mismatch");
        await assertion.assertEqual(sts.step6Title, null, "step6Title status mismatch");
        await assertion.assertEqual(sts.step6Subtitle, null, "step6Subtitle status mismatch");
    },

    //Validate the content of the mcq editor tour
    ENG_ICCT_TC_13: async function (testdata) {
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.step0Title, null, "step0Title status mismatch");
        await assertion.assertEqual(sts.step0Subtitle, null, "step0Subtitle status mismatch");
        await assertion.assertEqual(sts.dontShowCheckbox, null, "dontShowCheckbox status mismatch");
        await assertion.assertEqual(sts.dismissBtn, null, "dismissBtn status mismatch");
        await assertion.assertEqual(sts.startTourBtn, null, "startTourBtn status mismatch");
        await assertion.assertEqual(sts.exitBtn, testdata.exitBtn, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, null, "backBtn status mismatch");
        await assertion.assertEqual(sts.step1Title, testdata.step1Title[0], "step1Title status mismatch");
        await assertion.assertEqual(sts.step1Subtitle, testdata.step1Subtitle[0], "step1Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step1Title, null, "step1Title status mismatch");
        await assertion.assertEqual(sts.step1Subtitle, null, "step1Subtitle status mismatch");
        await assertion.assertEqual(sts.step2Title, testdata.step2Title[0], "step2Title status mismatch");
        await assertion.assertEqual(sts.step2Subtitle, testdata.step2Subtitle[0], "step2Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step2Title, null, "step2Title status mismatch");
        await assertion.assertEqual(sts.step2Subtitle, null, "step2Subtitle status mismatch");
        await assertion.assertEqual(sts.step3Title, testdata.step3Title[0], "step3Title status mismatch");
        await assertion.assertEqual(sts.step3Subtitle, testdata.step3Subtitle[0], "step3Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step3Title, null, "step3Title status mismatch");
        await assertion.assertEqual(sts.step3Subtitle, null, "step3Subtitle status mismatch");
        await assertion.assertEqual(sts.step4Title, testdata.step4Title[0], "step4Title status mismatch");
        await assertion.assertEqual(sts.step4Subtitle, testdata.step4Subtitle[0], "step4Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, testdata.exitBtn, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, null, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step4Title, null, "step4Title status mismatch");
        await assertion.assertEqual(sts.step4Subtitle, null, "step4Subtitle status mismatch");
        await assertion.assertEqual(sts.step5Title, testdata.step5Title[0], "step5Title status mismatch");
        await assertion.assertEqual(sts.step5Subtitle, testdata.step5Subtitle[0], "step5Subtitle status mismatch");
    },

    //Validate the content of the text editor tour
    ENG_ICCT_TC_14: async function (testdata) {
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.step0Title, null, "step0Title status mismatch");
        await assertion.assertEqual(sts.step0Subtitle, null, "step0Subtitle status mismatch");
        await assertion.assertEqual(sts.dontShowCheckbox, null, "dontShowCheckbox status mismatch");
        await assertion.assertEqual(sts.dismissBtn, null, "dismissBtn status mismatch");
        await assertion.assertEqual(sts.startTourBtn, null, "startTourBtn status mismatch");
        await assertion.assertEqual(sts.exitBtn, testdata.exitBtn, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, null, "backBtn status mismatch");
        await assertion.assertEqual(sts.step1Title, testdata.step1Title[1], "step1Title status mismatch");
        await assertion.assertEqual(sts.step1Subtitle, testdata.step1Subtitle[1], "step1Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step1Title, null, "step1Title status mismatch");
        await assertion.assertEqual(sts.step1Subtitle, null, "step1Subtitle status mismatch");
        await assertion.assertEqual(sts.step2Title, testdata.step2Title[1], "step2Title status mismatch");
        await assertion.assertEqual(sts.step2Subtitle, testdata.step2Subtitle[1], "step2Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step2Title, null, "step2Title status mismatch");
        await assertion.assertEqual(sts.step2Subtitle, null, "step2Subtitle status mismatch");
        await assertion.assertEqual(sts.step3Title, testdata.step3Title[1], "step3Title status mismatch");
        await assertion.assertEqual(sts.step3Subtitle, testdata.step3Subtitle[1], "step3Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step3Title, null, "step3Title status mismatch");
        await assertion.assertEqual(sts.step3Subtitle, null, "step3Subtitle status mismatch");
        await assertion.assertEqual(sts.step4Title, testdata.step4Title[1], "step4Title status mismatch");
        await assertion.assertEqual(sts.step4Subtitle, testdata.step4Subtitle[1], "step4Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, null, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, testdata.nextBtn, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step4Title, null, "step4Title status mismatch");
        await assertion.assertEqual(sts.step4Subtitle, null, "step4Subtitle status mismatch");
        await assertion.assertEqual(sts.step5Title, testdata.step5Title[1], "step5Title status mismatch");
        await assertion.assertEqual(sts.step5Subtitle, testdata.step5Subtitle[1], "step5Subtitle status mismatch");
        await this.ENG_ICCT_TC_7();
        sts = await editorTour.getData_editorTour(testdata);
        await assertion.assertEqual(sts.exitBtn, testdata.exitBtn, "exitBtn status mismatch");
        await assertion.assertEqual(sts.nextBtn, null, "nextBtn status mismatch");
        await assertion.assertEqual(sts.backBtn, testdata.backBtn, "backBtn status mismatch");
        await assertion.assertEqual(sts.step5Title, null, "step5Title status mismatch");
        await assertion.assertEqual(sts.step5Subtitle, null, "step5Subtitle status mismatch");
        await assertion.assertEqual(sts.step6Title, testdata.step6Title[1], "step6Title status mismatch");
        await assertion.assertEqual(sts.step6Subtitle, testdata.step6Subtitle[1], "step6Subtitle status mismatch");
    },
}