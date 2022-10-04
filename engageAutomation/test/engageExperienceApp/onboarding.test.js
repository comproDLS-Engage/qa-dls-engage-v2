"use strict";
const onboardingPage = require('../../pages/engageExperienceApp/onboarding.page.js');
var sts;

module.exports = {

    //Teacher Onboarding - Validate the content of  "Welcome" Page
    ENG_ONBO_TC_58: async function (testdata) {
        sts = await onboardingPage.getData_welcomePage();
        await assertion.assertEqual(sts.welcomeTxt, testdata[1].welcomeTxt, "Welcome Text mismatch");
        await assertion.assertEqual(sts.welcomeSubtitleTxt, testdata[1].welcomeSubtitleTxt, "welcomeSubtitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsTitleTxt, testdata[1].completeStepsTitleTxt, "completeStepsTitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsSubtitleTxt, testdata[1].completeStepsSubtitleTxt, "completeStepsSubtitleTxt mismatch");
        await assertion.assertEqual(sts.joinSchoolTxt, testdata[1].joinSchoolTxt, "joinSchoolTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsTxt, testdata[1].activateMaterialsTxt, "activateMaterialsTxt mismatch");
        await assertion.assertEqual(sts.accessEngageTxt, testdata[1].accessEngageTxt, "accessEngageTxt mismatch");
        await assertion.assertEqual(sts.teacherGetStartedBtn, testdata[1].teacherGetStartedBtn, "teacherGetStartedBtn text mismatch");
        await assertion.assertEqual(sts.logoutBtn, testdata[1].logoutBtn, "logoutBtn text mismatch");
    },

    //Teacher Onboarding - Validate the click on Logout  button on Welcome Page
    ENG_ONBO_TC_61: async function () {
        sts = await onboardingPage.click_logoutBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page status Mismatch");
    },

    //Teacher Onboarding - Validate the click on Get Started button on Welcome Page
    ENG_ONBO_TC_60: async function () {
        sts = await onboardingPage.click_teacherGetStartedBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
    },

    //Teacher Onboarding - Validate the content of "Join Your School" Page
    ENG_ONBO_TC_63: async function (testdata) {
        sts = await onboardingPage.getData_joinYourSchoolPage();
        await assertion.assertEqual(sts.joinYourSchoolTitleTxt, testdata.joinYourSchoolTitleTxt, "joinYourSchoolTitleTxt mismatch");
        await assertion.assertEqual(sts.joinYourSchoolSubTitleTxt, testdata.joinYourSchoolSubTitleTxt, "joinYourSchoolSubTitleTxt mismatch");
        await assertion.assertEqual(sts.schoolKeyLbl, testdata.schoolKeyLbl, "schoolKeyLbl mismatch");
        await assertion.assertEqual(sts.schoolKeyTextbox, "", "schoolKeyTextbox text mismatch");
        await assertion.assertEqual(sts.schoolKeySubLbl, testdata.schoolKeySubLbl, "schoolKeySubLbl mismatch");
        await assertion.assertEqual(sts.joinSchoolHelperTxt, testdata.joinSchoolHelperTxt, "joinSchoolHelperTxt mismatch");
        await assertion.assertEqual(sts.verifyBtn, testdata.verifyBtn, "verifyBtn text mismatch");
        await assertion.assertEqual(sts.continueBtn, testdata.continueBtn, "continueBtn text mismatch");
        await assertion.assertEqual(sts.joinSchoolBackBtn, testdata.joinSchoolBackBtn, "joinSchoolBackBtn text mismatch");
        await assertion.assertEqual(sts.continueBtnState, 'true', "continue button state mismatch");
        await assertion.assertEqual(sts.addressTxt, null, "address text status mismatch");
        await assertion.assertEqual(sts.schoolNameTxt, null, "schoolName text status mismatch")
    },

    //Teacher Onboarding - Validate that error message when no school key is entered
    ENG_ONBO_TC_64: async function (testdata) {
        sts = await onboardingPage.click_verifyBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_joinYourSchoolPage();
        await assertion.assertEqual(sts.schoolKeyErrorTxt, testdata.schoolKeyErrorTxt[0], "schoolKeyErrorTxt mismatch");
    },

    //Teacher Onboarding - Validate the error message appears on entering invalid or wrong school Key
    ENG_ONBO_TC_65: async function (testdata) {
        sts = await onboardingPage.set_schoolKeyTextbox(testdata[0].invalidKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_verifyBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_joinYourSchoolPage();
        await assertion.assertEqual(sts.schoolKeyErrorTxt, testdata[1].schoolKeyErrorTxt[1], "schoolKeyErrorTxt mismatch")
    },

    //Teacher Onboarding - Validate the click on Verify button with correct School key on Join Your School  page
    ENG_ONBO_TC_67: async function (testdata) {
        sts = await onboardingPage.set_schoolKeyTextbox(testdata[0].validKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_verifyBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_joinYourSchoolPage();
        await assertion.assertEqual(sts.verifyBtn, null, "verifyBtn text mismatch");
        await assertion.assertEqual(sts.schoolKeyTextbox, testdata[0].validKey, "schoolKeyTextbox text mismatch");
        await assertion.assertEqual(sts.continueBtn, testdata[1].continueBtn, "continueBtn text mismatch");
        await assertion.assertEqual(sts.continueBtnState, null, "continue button state mismatch");
        await assertion.assertEqual(sts.addressTxt, testdata[1].addressTxt, "address text status mismatch");
        await assertion.assertEqual(sts.schoolNameTxt, testdata[1].schoolNameTxt, "schoolName text status mismatch")
    },
    
    //Teacher Onboarding - Validate that click on continue button Join Your School  page
    ENG_ONBO_TC_69: async function () {
        sts = await onboardingPage.click_continueBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
    },

    //Teacher Onboarding- Validate that on clicking "Back to start" Button on Join Your School  page
    ENG_ONBO_TC_70: async function (testdata) {
        sts = await onboardingPage.click_joinSchoolBackBtn();
        await assertion.assertEqual(sts.welcomeTxt, testdata.welcomeTxt, "Welcome Text mismatch");
        await assertion.assertEqual(sts.welcomeSubtitleTxt, testdata.welcomeSubtitleTxt, "welcomeSubtitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsTitleTxt, testdata.completeStepsTitleTxt, "completeStepsTitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsSubtitleTxt, testdata.completeStepsSubtitleTxt, "completeStepsSubtitleTxt mismatch");
        await assertion.assertEqual(sts.joinSchoolTxt, testdata.joinSchoolTxt, "joinSchoolTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsTxt, testdata.activateMaterialsTxt, "activateMaterialsTxt mismatch");
        await assertion.assertEqual(sts.accessEngageTxt, testdata.accessEngageTxt, "accessEngageTxt mismatch");
        await assertion.assertEqual(sts.teacherGetStartedBtn, testdata.teacherGetStartedBtn, "teacherGetStartedBtn text mismatch");
        await assertion.assertEqual(sts.logoutBtn, testdata.logoutBtn, "logoutBtn text mismatch");
    },

    //Teacher Onboarding - Validate the content of "Activate your materials" Page
    ENG_ONBO_TC_74: async function (testdata) {
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateMaterialsTitleTxt, testdata.activateMaterialsTitleTxt, "activateMaterialsTitleTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsSubTitleTxt, testdata.activateMaterialsSubTitleTxt, "activateMaterialsSubTitleTxt mismatch");
        await assertion.assertEqual(sts.accessKeyLbl, testdata.accessKeyLbl, "accessKeyLbl text mismatch");
        await assertion.assertEqual(sts.accessKeySubLbl, testdata.accessKeySubLbl, "accessKeySubLbl text mismatch");
        await assertion.assertEqual(sts.activateMaterialHelperTxt, testdata.activateMaterialHelperTxt, "activateMaterialHelperTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsBtn, testdata.activateMaterialsBtn, "activateMaterialsBtn text mismatch");
        await assertion.assertEqual(sts.teacherActivateMaterialsBackBtn, testdata.teacherActivateMaterialsBackBtn, "teacherActivateMaterialsBackBtn text mismatch");
        await assertion.assertEqual(sts.accessKeyTextbox, '', "accessKeyTextbox text mismatch");
    },

    //Teacher Onboarding - Validate that error message when no access key is entered on Access Key page
    ENG_ONBO_TC_78: async function (testdata) {
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata.activateErrorTxt[0], "activateErrorTxt mismatch");
    },

    //Teacher Onboarding - Validate the error message appears on entering invalid or wrong access Key
    ENG_ONBO_TC_75: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].invalidKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[1], "activateErrorTxt mismatch");
    },

    //Teacher Onboarding - Validate the error message appears on entering used access Key
    ENG_ONBO_TC_76: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].usedKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[2], "activateErrorTxt mismatch");
    },

    //Teacher Onboarding - Validate the error message appears on entering expired access Key
    ENG_ONBO_TC_77: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].expiredKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[3], "activateErrorTxt mismatch");
    },

    //Teacher Onboarding- Validate that on clicking Back Button on Activate your materials Page
    ENG_ONBO_TC_80: async function (testdata) {
        sts = await onboardingPage.click_teacherActivateMaterialsBackBtn();
        await assertion.assertEqual(sts.joinYourSchoolTitleTxt, testdata[0].joinYourSchoolTitleTxt, "joinYourSchoolTitleTxt mismatch");
        await assertion.assertEqual(sts.joinYourSchoolSubTitleTxt, testdata[0].joinYourSchoolSubTitleTxt, "joinYourSchoolSubTitleTxt mismatch");
        await assertion.assertEqual(sts.schoolKeyLbl, testdata[0].schoolKeyLbl, "schoolKeyLbl mismatch");
        await assertion.assertEqual(sts.schoolKeyTextbox, testdata[1].validKey, "schoolKeyTextbox text mismatch");
        await assertion.assertEqual(sts.schoolKeySubLbl, testdata[0].schoolKeySubLbl, "schoolKeySubLbl mismatch");
        await assertion.assertEqual(sts.joinSchoolHelperTxt, testdata[0].joinSchoolHelperTxt, "joinSchoolHelperTxt mismatch");
        await assertion.assertEqual(sts.verifyBtn, null, "verifyBtn text mismatch");
        await assertion.assertEqual(sts.continueBtn, testdata[0].continueBtn, "continueBtn text mismatch");
        await assertion.assertEqual(sts.joinSchoolBackBtn, testdata[0].joinSchoolBackBtn, "joinSchoolBackBtn text mismatch");
        await assertion.assertEqual(sts.continueBtnState, null, "continue button state mismatch");
        await assertion.assertEqual(sts.addressTxt, testdata[0].addressTxt, "address text status mismatch");
        await assertion.assertEqual(sts.schoolNameTxt, testdata[0].schoolNameTxt, "schoolName text status mismatch")
    },

    //Validate the content of  "Welcome" Page after selecting the Student role
    ENG_ONBO_TC_59: async function (testdata) {
        sts = await onboardingPage.getData_welcomePage();
        await assertion.assertEqual(sts.welcomeTxt, testdata[1].welcomeTxt, "Welcome Text mismatch");
        await assertion.assertEqual(sts.welcomeSubtitleTxt, testdata[1].welcomeSubtitleTxt, "welcomeSubtitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsTitleTxt, testdata[1].completeStepsTitleTxt, "completeStepsTitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsSubtitleTxt, testdata[1].completeStepsSubtitleTxt, "completeStepsSubtitleTxt mismatch");
        await assertion.assertEqual(sts.joinSchoolTxt, null, "joinSchoolTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsTxt, testdata[1].activateMaterialsTxt, "activateMaterialsTxt mismatch");
        await assertion.assertEqual(sts.accessEngageTxt, testdata[1].accessEngageTxt, "accessEngageTxt mismatch");
        await assertion.assertEqual(sts.teacherGetStartedBtn, testdata[1].teacherGetStartedBtn, "teacherGetStartedBtn text mismatch");
        await assertion.assertEqual(sts.logoutBtn, testdata[1].logoutBtn, "logoutBtn text mismatch");
    },

    //Student Onboarding - Validate the click on Get Started button on Welcome Page
    ENG_ONBO_TC_93: async function () {
        sts = await onboardingPage.click_studentGetStartedBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
    },

    //Student Onboarding - Validate that content of  "Activate Your Mayerials" Page
    ENG_ONBO_TC_94: async function (testdata) {
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateMaterialsTitleTxt, testdata.activateMaterialsTitleTxt, "activateMaterialsTitleTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsSubTitleTxt, testdata.activateMaterialsSubTitleTxt, "activateMaterialsSubTitleTxt mismatch");
        await assertion.assertEqual(sts.accessKeyLbl, testdata.accessKeyLbl, "accessKeyLbl text mismatch");
        await assertion.assertEqual(sts.accessKeySubLbl, testdata.accessKeySubLbl, "accessKeySubLbl text mismatch");
        await assertion.assertEqual(sts.activateMaterialHelperTxt, testdata.activateMaterialHelperTxt, "activateMaterialHelperTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsBtn, testdata.activateMaterialsBtn, "activateMaterialsBtn text mismatch");
        await assertion.assertEqual(sts.studentActivateMaterialsBackBtn, testdata.studentActivateMaterialsBackBtn, "teacherActivateMaterialsBackBtn text mismatch");
        await assertion.assertEqual(sts.accessKeyTextbox, '', "accessKeyTextbox text mismatch");
    },

    //Student Onboarding - Validate that on Logout  button on Welcome Page
    ENG_ONBO_TC_95: async function () {
        sts = await onboardingPage.click_logoutBtn();
        await assertion.assertEqual(sts.pageStatus, true, "Page status Mismatch");
    },

    //Student Onboarding - Validate that error message when no access key is entered on Activate your materials
    ENG_ONBO_TC_100: async function (testdata) {
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata.activateErrorTxt[0], "activateErrorTxt mismatch");
    },

    //Student Onboarding - Validate the error message appears on entering invalid or wrong access Key on Activate your materials
    ENG_ONBO_TC_98: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].invalidKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[1], "activateErrorTxt mismatch");
    },

    //Student Onboarding - Validate that error message when already used access key is entered
    ENG_ONBO_TC_103: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].usedKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[2], "activateErrorTxt mismatch");
    },

    //Student Onboarding - Validate that error message when expired access key is entered
    ENG_ONBO_TC_102: async function (testdata) {
        sts = await onboardingPage.set_accessKeyTextbox(testdata[0].expiredKey);
        await assertion.assertEqual(sts, true, "value not entered in Textbox");
        sts = await onboardingPage.click_activateMaterialsBtn();
        await assertion.assertEqual(sts, true, "Page status Mismatch");
        sts = await onboardingPage.getData_activateMaterialsPage();
        await assertion.assertEqual(sts.activateErrorTxt, testdata[1].activateErrorTxt[3], "activateErrorTxt mismatch");
    },

    //Student Onboarding- Validate that on clicking Back to start Button on Activate your materials
    ENG_ONBO_TC_106: async function (testdata) {
        sts = await onboardingPage.click_studentActivateMaterialsBackBtn();
        await assertion.assertEqual(sts.welcomeTxt, testdata.welcomeTxt, "Welcome Text mismatch");
        await assertion.assertEqual(sts.welcomeSubtitleTxt, testdata.welcomeSubtitleTxt, "welcomeSubtitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsTitleTxt, testdata.completeStepsTitleTxt, "completeStepsTitleTxt mismatch");
        await assertion.assertEqual(sts.completeStepsSubtitleTxt, testdata.completeStepsSubtitleTxt, "completeStepsSubtitleTxt mismatch");
        await assertion.assertEqual(sts.joinSchoolTxt, null, "joinSchoolTxt mismatch");
        await assertion.assertEqual(sts.activateMaterialsTxt, testdata.activateMaterialsTxt, "activateMaterialsTxt mismatch");
        await assertion.assertEqual(sts.accessEngageTxt, testdata.accessEngageTxt, "accessEngageTxt mismatch");
        await assertion.assertEqual(sts.teacherGetStartedBtn, testdata.teacherGetStartedBtn, "teacherGetStartedBtn text mismatch");
        await assertion.assertEqual(sts.logoutBtn, testdata.logoutBtn, "logoutBtn text mismatch");
    }
};