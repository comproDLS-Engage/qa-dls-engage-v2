"use strict";
var iccAssignment = require('../../pages/engageExperienceApp/iccAssignment.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
const { confirmPasswordErrorTxt } = require('../../pages/engageExperienceApp/signUp.page.js');
var sts;

module.exports = {

    ENG_ICCA_TC_2: async function (testdata) {
        sts = await iccAssignment.click_activityName();
        await assertion.assertEqual(sts, true, "activityName are not Clicked");
    },

    ENG_ICCA_TC_3: async function (testdata) {
        sts = await iccAssignment.click_activityTypeMorebtn(testdata[0]);
        await assertion.assertEqual(sts.activityEditbtn, testdata[1].activityEditbtn, "activityEditbtn Values is not as expected.");
        await assertion.assert((sts.activityMakeRestrictedbtn).includes(testdata[1].activityMakeRestrictedbtn), "activityMakeRestrictedbtn Values is not as expected.");
        await assertion.assertEqual(sts.activityAssignbtn, testdata[1].activityAssignbtn, "activityAssignbtn Values is not as expected.");

    },

    ENG_ICCA_TC_4: async function (testdata) {
        sts = await iccAssignment.click_activityEditbtn();
        await assertion.assert((sts.editMaterial_Title).includes(testdata.editMaterial_Title), "editMaterial_Title Values is not as expected.");
        await assertion.assertEqual(sts.editMaterial_SubTitle, testdata.editMaterial_SubTitle, "editMaterial_SubTitle Values is not as expected.");
    },

    ENG_ICCA_TC_5: async function (testdata) {
        sts = await iccAssignment.click_activityMakeRestrictedbtn();
        await assertion.assertEqual(sts, true, "activityMakeRestrictedbtn are not Clicked");
    },

    ENG_ICCA_TC_6: async function (testdata) {
        sts = await iccAssignment.click_activityAssignbtn();
        await assertion.assertEqual(sts, true, "activityAssignbtn are not Clicked");
    },

    ENG_ICCA_TC_7: async function (testdata) {
        sts = await iccAssignment.click_resourceName();
        await assertion.assertEqual(sts, true, "resourceName are not Clicked");
    },

    ENG_ICCA_TC_8: async function (testdata) {
        sts = await iccAssignment.click_resourceTypeMorebtn();
    },

    ENG_ICCA_TC_9: async function (testdata) {
        sts = await iccAssignment.click_resourceEditbtn();
        await assertion.assertEqual(sts, true, "resourceEditbtn are not Clicked");
    },

    ENG_ICCA_TC_10: async function (testdata) {
        sts = await iccAssignment.click_resourceMakeRestrictedbtn();
        await assertion.assertEqual(sts, true, "resourceMakeRestrictedbtn are not Clicked");
    },

    ENG_ICCA_TC_11: async function (testdata) {
        sts = await iccAssignment.click_resourceAssignbtn();
        await assertion.assertEqual(sts, true, "resourceAssignbtn are not Clicked");
    },

    ENG_ICCA_TC_12: async function (testdata) {
        sts = await iccAssignment.set_searchTextbox();
        await assertion.assertEqual(sts, true, "searchTextbox values are not set");

    },

    ENG_ICCA_TC_13: async function (testdata) {
        sts = await iccAssignment.click_whyCantIfindmyResources();
        await assertion.assertEqual(sts, true, "whyCan'tIfindmyResources are not Clicked");
    },

    ENG_ICCA_TC_14: async function (testdata) {
        sts = await iccAssignment.click_materialOptionLbl();
        await assertion.assertEqual(sts, true, "materialOptionLbl are not Clicked");
    },

    ENG_ICCA_TC_15: async function (testdata) {
        sts = await iccAssignment.click_TypeOptionLbl();
        await assertion.assertEqual(sts, true, "TypeOptionLbl are not Clicked");
    },

    ENG_ICCA_TC_16: async function (testdata) {
        sts = await iccAssignment.click_AddedonOptionLbl();
        await assertion.assertEqual(sts, true, "AddedonOptionLbl are not Clicked");
    },

    ENG_ICCA_TC_17: async function (testdata) {
        sts = await iccAssignment.click_materialCheckbox(testdata);
        await assertion.assertEqual(sts, true, "materialCheckbox are not Clicked");
    },

    ENG_ICCA_TC_18: async function (testdata) {
        sts = await iccAssignment.click_moreOptionbtn();
    },

    ENG_ICCA_TC_19: async function (testdata) {
        sts = await iccAssignment.click_previewOptionbtn();
        await assertion.assertEqual(sts, true, "previewOptionbtn are not Clicked");
    },

    ENG_ICCA_TC_20: async function (testdata) {
        sts = await iccAssignment.click_cancelSelectActivityPagebtn();
        await assertion.assertEqual(sts, true, "cancelSelectActivityPagebtn are not Clicked");
    },

    ENG_ICCA_TC_21: async function (testdata) {
        sts = await iccAssignment.click_closeSelectActivityPagebtn();
        await assertion.assertEqual(sts, true, "closeSelectActivityPagebtn are not Clicked");
    },

    ENG_ICCA_TC_22: async function (testdata) {
        sts = await iccAssignment.click_continueToDetailsbtn();
        await assertion.assertEqual(sts, true, "continueToDetailsbtn are not Clicked");
    },

    ENG_ICCA_TC_23: async function (testdata) {
        sts = await iccAssignment.getData_devMaterialPage(testdata);
        await assertion.assertEqual(sts.activitiesAndResourseHeading, testdata.activitiesAndResourseHeading, "activitiesAndResourseHeading Values is not as expected.");
        await assertion.assertEqual(sts.activitieslbl, testdata.activitieslbl, "activitieslbl Values is not as expected.");
        await assertion.assertEqual(sts.resourceslbl, testdata.resourceslbl, "resourceslbl Values is not as expected.");
    },

    ENG_ICCA_TC_24: async function (testdata) {
        sts = await iccAssignment.getData_activitiesList();
        console.log(sts)
        await assertion.assertEqual(sts[0].activityIIcon, true, "activityIIcon Values is not as expected.");
        await assertion.assertEqual(sts[0].activityName, testdata.activityName, "activityName Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeIcon, true, "activityTypeIcon Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeStatus, testdata.activityTypeStatus, "activityTypeStatus Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeName, testdata.activityTypeName, "activityTypeName Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeMorebtn, true, "activityTypeMorebtn Values is not as expected.");
    },

    ENG_ICCA_TC_25: async function (testdata) {
        sts = await iccAssignment.getData_activityMoreOptionList(testdata);
        await assertion.assertEqual(sts.activityEditbtn, testdata.activityEditbtn, "activityEditbtn Values is not as expected.");
        await assertion.assert((sts.activityMakeRestrictedbtn).includes(testdata.activityMakeRestrictedbtn), "activityMakeRestrictedbtn Values is not as expected.");
        await assertion.assertEqual(sts.activityAssignbtn, testdata.activityAssignbtn, "activityAssignbtn Values is not as expected.");
    },

    ENG_ICCA_TC_26: async function (testdata) {
        sts = await iccAssignment.getData_resourcesList(testdata);
        await assertion.assertEqual(sts.resourceIcon, true, "resourceIcon Values is not as expected.");
        await assertion.assertEqual(sts.resourceName, testdata.resourceName, "resourceName Values is not as expected.");
        await assertion.assertEqual(sts.resourceTypeIcon, testdata.resourceTypeIcon, "resourceTypeIcon Values is not as expected.");
        await assertion.assertEqual(sts.resourceTypeStatus, testdata.resourceTypeStatus, "resourceTypeStatus Values is not as expected.");
        await assertion.assertEqual(sts.resourceTypeName, testdata.resourceTypeName, "resourceTypeName Values is not as expected.");
        await assertion.assertEqual(sts.resourceTypeMorebtn, testdata.resourceTypeMorebtn, "resourceTypeMorebtn Values is not as expected.");
    },

    ENG_ICCA_TC_27: async function (testdata) {
        sts = await iccAssignment.getData_resourceMoreOptionList(testdata);
        await assertion.assertEqual(sts.resourceEditbtn, testdata.resourceEditbtn, "resourceEditbtn Values is not as expected.");
        await assertion.assertEqual(sts.resourceMakeRestrictedbtn, testdata.resourceMakeRestrictedbtn, "resourceMakeRestrictedbtn Values is not as expected.");
        await assertion.assertEqual(sts.resourceAssignbtn, testdata.resourceAssignbtn, "resourceAssignbtn Values is not as expected.");
    },

    ENG_ICCA_TC_28: async function (testdata) {
        sts = await iccAssignment.getData_selectActivityPage(testdata);
        console.log(sts)
        await assertion.assertEqual(sts.createAssignmentSelectActivityHeader, testdata.createAssignmentSelectActivityHeader, "createAssignmentSelectActivityHeader Values is not as expected.");
        await assertion.assertEqual(sts.libraryIcon, true, "libraryIcon Values is not as expected.");
        await assertion.assertEqual(sts.className, testdata.className, "className Values is not as expected.");
        await assertion.assertEqual(sts.devMaterial, testdata.devMaterial, "devMaterial Values is not as expected.");
        await assertion.assertEqual(sts.searchTextbox, testdata.searchTextbox, "searchTextbox Values is not as expected.");
        await assertion.assertEqual(sts.materialHeading, testdata.materialHeading, "materialHeading Values is not as expected.");
        await assertion.assertEqual(sts.whyCantIfindmyResources, testdata.whyCantIfindmyResources, "whyCan'tIfindmyResources Values is not as expected.");
        await assertion.assertEqual(sts.materialSubHeading, testdata.materialSubHeading, "materialSubHeading Values is not as expected.");
        await assertion.assertEqual(sts.materialOptionLbl, testdata.materialOptionLbl, "materialOptionLbl Values is not as expected.");
        await assertion.assertEqual(sts.TypeOptionLbl, testdata.TypeOptionLbl, "TypeOptionLbl Values is not as expected.");
        await assertion.assertEqual(sts.AddedonOptionLbl, testdata.AddedonOptionLbl, "AddedonOptionLbl Values is not as expected.");
        await assertion.assertEqual(sts.cancelSelectActivityPagebtn, testdata.cancelSelectActivityPagebtn, "cancelSelectActivityPagebtn Values is not as expected.");
        await assertion.assertEqual(sts.closeSelectActivityPagebtn, testdata.closeSelectActivityPagebtn, "closeSelectActivityPagebtn Values is not as expected.");
        await assertion.assertEqual(sts.continueToDetailsbtn, testdata.continueToDetailsbtn, "continueToDetailsbtn Values is not as expected.");
    },

    ENG_ICCA_TC_29: async function (testdata) {
        sts = await iccAssignment.getData_materialList(testdata);
        await assertion.assertEqual(sts.materialCheckbox, testdata.materialCheckbox, "materialCheckbox Values is not as expected.");
        await assertion.assertEqual(sts.materialName, testdata.materialName, "materialName Values is not as expected.");
        await assertion.assertEqual(sts.materialTypeIcon, true, "materialTypeIcon Values is not as expected.");
        await assertion.assertEqual(sts.materialTypeName, testdata.materialTypeName, "materialTypeName Values is not as expected.");
        await assertion.assertEqual(sts.modifiedDate, testdata.modifiedDate, "modifiedDate Values is not as expected.");
        await assertion.assertEqual(sts.moreOptionbtn, testdata.moreOptionbtn, "moreOptionbtn Values is not as expected.");
    },

    ENG_ICCA_TC_30: async function (testdata) {
        sts = await iccAssignment.getData_materialMoreOptionList(testdata);
        await assertion.assertEqual(sts.previewOptionbtn, testdata.previewOptionbtn, "previewOptionbtn Values is not as expected.");
    },
    ENG_ICCA_TC_31: async function (testdata) {
        sts = await iccAssignment.click_yesbtn();
        await assertion.assertEqual(sts, true, "yesbtn are not Clicked");
    },

    ENG_ICCA_TC_32: async function (testdata) {
        sts = await iccAssignment.click_Npbtn();
        await assertion.assertEqual(sts, true, "Npbtn are not Clicked");
    },

    ENG_ICCA_TC_33: async function (testdata) {
        sts = await iccAssignment.getData_restrictedGroup(testdata);
        console.log(sts)
        console.log(testdata)
        console.log(testdata.makeRestrictedTitle[0])
        await assertion.assert((sts.makeRestrictedTitle).includes(testdata.makeRestrictedTitle[0]), "makeRestrictedTitle Values is not as expected.");
        await assertion.assertEqual(sts.makeRestrictedSubTitle, testdata.makeRestrictedSubTitle[0], "makeRestrictedSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.yesbtn, testdata.yesbtn, "yesbtn Values is not as expected.");
        await assertion.assertEqual(sts.Npbtn, testdata.Npbtn, "Npbtn Values is not as expected.");
    },
    ENG_ICCA_TC_34: async function (testdata) {
        sts = await iccAssignment.getData_restrictedGroup(testdata);
        console.log(sts)
        console.log(testdata)
        console.log(testdata.makeRestrictedTitle[1])
        await assertion.assert((sts.makeRestrictedTitle).includes(testdata.makeRestrictedTitle[1]), "makeRestrictedTitle Values is not as expected.");
        await assertion.assertEqual(sts.makeRestrictedSubTitle, testdata.makeRestrictedSubTitle[1], "makeRestrictedSubTitle Values is not as expected.");
        await assertion.assertEqual(sts.yesbtn, testdata.yesbtn, "yesbtn Values is not as expected.");
        await assertion.assertEqual(sts.Npbtn, testdata.Npbtn, "Npbtn Values is not as expected.");
    },
    ENG_ICCA_TC_35: async function (testdata) {
        sts = await iccAssignment.getData_activitiesList();
        console.log(sts)
        await assertion.assertEqual(sts[0].activityIIcon, true, "activityIIcon Values is not as expected.");
        await assertion.assertEqual(sts[0].activityName, testdata.activityName, "activityName Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeIcon, true, "activityTypeIcon Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeStatus, testdata.activityTypeStatus[1], "activityTypeStatus Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeName, testdata.activityTypeName, "activityTypeName Values is not as expected.");
        await assertion.assertEqual(sts[0].activityTypeMorebtn, true, "activityTypeMorebtn Values is not as expected.");
    },
}