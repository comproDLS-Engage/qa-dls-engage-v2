"use strict";
const findClassPage = require('../../pages/backoffice/findClass.page.js');
const findInstitutionPage = require('../../pages/backoffice/findInstitution.page.js');
//const findUserPage = require('../../pages/backoffice/findUser.page.js');
//const userDetailsPage = require('../../pages/backoffice/userDetails.page.js');
const common = require('../../pages/backoffice/common.page.js');
const homePage = require('../../pages/backoffice/home.page.js');
const instituionReqPage = require('../../pages/backoffice/institutionRequests.page.js');
const createInstitutionPage = require('../../pages/backoffice/createNewInstitution.page.js');
var sts;

module.exports = {

	// --------------------------- Find Class Test Cases ----------------------------- //

	// Validate that user is able to search the class using correct class code on the home page
	ADMN_FCLS_TC_1: async function (testdata) {
		sts = await homePage.search_Class(testdata.classKey);
		await assertion.assertEqual(sts, true, "Find class page status mismatch");
		sts = await findClassPage.get_Class_Details();
		await assertion.assertEqual(sts.classKey, testdata.classKey, "classKey mismatch");
		await assertion.assertEqual(sts.className, testdata.className, "className mismatch");
		await assertion.assertEqual(sts.institutionName, testdata.institutionName, "institutionName mismatch");
		await assertion.assertEqual(sts.startDate, testdata.startDate, "startDate mismatch");
		await assertion.assertEqual(sts.endDate, testdata.endDate, "endDate mismatch");
	},

	// Validate that no result is displayed if user search partial class code on the home page
	ADMN_FCLS_TC_2: async function (testdata) {
		sts = await homePage.search_Class(testdata);
		await assertion.assertEqual(sts, true, "Find class page status mismatch");
		sts = await findClassPage.get_Class_Details();
		await assertion.assertEqual(sts.classKey, null, "classKey mismatch");
		await assertion.assertEqual(sts.className, null, "className mismatch");
		await assertion.assertEqual(sts.institutionName, null, "institutionName mismatch");
		await assertion.assertEqual(sts.startDate, null, "startDate mismatch");
		await assertion.assertEqual(sts.endDate, null, "endDate mismatch");
	},

	// Validate that no result is displayed if user search incorrect class code on the home page
	ADMN_FCLS_TC_3: async function (testdata) {
		sts = await homePage.search_Class(testdata);
		await assertion.assertEqual(sts, true, "Find class page status mismatch");
		sts = await findClassPage.get_Class_Details();
		await assertion.assertEqual(sts.classKey, null, "classKey mismatch");
		await assertion.assertEqual(sts.className, null, "className mismatch");
		await assertion.assertEqual(sts.institutionName, null, "institutionName mismatch");
		await assertion.assertEqual(sts.startDate, null, "startDate mismatch");
		await assertion.assertEqual(sts.endDate, null, "endDate mismatch");
	},

	// Validate that user is able to search another class by using find another class feature
	ADMN_FCLS_TC_4: async function (testdata) {
		sts = await findClassPage.find_Another_Class(testdata.classKey);
		await assertion.assertEqual(sts, true, "Find class page status mismatch");
		sts = await findClassPage.get_Class_Details();
		await assertion.assertEqual(sts.classKey, testdata.classKey, "classKey mismatch");
		await assertion.assertEqual(sts.className, testdata.className, "className mismatch");
		await assertion.assertEqual(sts.institutionName, testdata.institutionName, "institutionName mismatch");
		await assertion.assertEqual(sts.startDate, testdata.startDate, "startDate mismatch");
		await assertion.assertEqual(sts.endDate, testdata.endDate, "endDate mismatch");
	},
	// ---------------------------------------------------------------------------- //


	// --------------------------- Find Institution Test Cases ----------------------------- //

	// Validate that user is able to search full name in find an institution on the home page
	ADMN_FINS_TC_1: async function (testdata) {
		sts = await homePage.search_Institution(testdata.name);
		await assertion.assertEqual(sts, true, "Find institution page status mismatch");
		sts = await findInstitutionPage.getInstitutionList();
		await assertion.assertEqual(sts, testdata.count, "institution count mismatch");
	},

	// Validate that user is able to search partial name in find an institution on the home page
	ADMN_FINS_TC_2: async function (testdata) {
		await this.ADMN_FINS_TC_1(testdata);
	},

	// Validate that user is able to search with special characters in find an institution on the home page
	ADMN_FINS_TC_3: async function (testdata) {
		await this.ADMN_FINS_TC_1(testdata);
	},

	// Validate that no result is displayed on searching an incorrect name in find an institution on the home page
	ADMN_FINS_TC_4: async function (testdata) {
		await this.ADMN_FINS_TC_1(testdata);
	},

	// Validate that user is able to do empty search on find an institute page
	ADMN_FINS_TC_5: async function (testdata) {
		sts = await findInstitutionPage.search_Institution(testdata.name);
		await assertion.assertEqual(sts, true, "Find institution page status mismatch");
		sts = await findInstitutionPage.getInstitutionList();
		await assertion.assert(sts >= testdata.count, "institution count mismatch");
	},

	// Validate that confirmation dialog opens on changing the key for an institute
	ADMN_FINS_TC_10: async function () {
		sts = await findInstitutionPage.click_ChangeKey_Option();
		await assertion.assertEqual(sts, true, "Change key dialog status mismatch");
	},

	// Validate that institute key is changed on confirming the dialog
	ADMN_FINS_TC_11: async function (testdata) {
		sts = await findInstitutionPage.click_DialogChangeKey_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata)), "Banner messsage mismatch. " + sts);
	},
	
	// ---------------------------------------------------------------------------- //


	// --------------------------- Institution Requests Test Cases ----------------------------- //

	// Validate that institution requests page is launched on clicking Institution Requests button on the home page
	ADMN_IREQ_TC_1: async function () {
		sts = await homePage.click_InstitutionRequests_Button();
		await assertion.assertEqual(sts, true, "Institution Requests page status mismatch");
	},

	// Validate that create new institution page is launched on clicking create new institution button
	ADMN_IREQ_TC_3: async function () {
		sts = await instituionReqPage.click_CreateNewInstitution_Button();
		await assertion.assertEqual(sts, true, "Create New Institution page status mismatch");
	},

	// Validate that all the fields except website are mandatory for institution creation
	ADMN_IREQ_TC_4: async function (testdata) {
		sts = await createInstitutionPage.set_Name(testdata.name);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.select_Country(testdata.country);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_Apartment(testdata.apartment);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_Street(testdata.street);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_City(testdata.city);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_State(testdata.state);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_Zip(testdata.zip);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.set_Telephone(testdata.telephone);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.get_Next_Button_Status();
		await assertion.assertEqual(sts, false, "get_Next_Button_Status status mismatch");
		sts = await createInstitutionPage.set_Email(testdata.email);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.get_Next_Button_Status();
		await assertion.assertEqual(sts, true, "get_Next_Button_Status status mismatch");
		sts = await createInstitutionPage.set_Website(testdata.website);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
	},

	// Validate that clicking on next button after entering all the details shows summary page
	ADMN_IREQ_TC_5: async function () {
		sts = await createInstitutionPage.click_Next_Button();
		await assertion.assertEqual(sts.isSummary, true, "isSummary status mismatch");
		await assertion.assertEqual(sts.isSuccess, false, "isSuccess status mismatch");
		await assertion.assertEqual(sts.isFailure, false, "isFailure status mismatch");
		await assertion.assertEqual(sts.isMatching, false, "isMatching status mismatch");
	},

	// Validate that clicking on create button creates the institution and request recieved page is displayed
	ADMN_IREQ_TC_6: async function () {
		sts = await createInstitutionPage.click_Next_Button();
		await assertion.assertEqual(sts.isSummary, false, "isSummary status mismatch");
		await assertion.assertEqual(sts.isSuccess, true, "isSuccess status mismatch");
		await assertion.assertEqual(sts.isFailure, false, "isFailure status mismatch");
		await assertion.assertEqual(sts.isMatching, false, "isMatching status mismatch");
	},

	// Validate that rejection page is displayed if all the details of the institution are duplicate
	ADMN_IREQ_TC_7: async function () {
		sts = await createInstitutionPage.click_Next_Button();
		await assertion.assertEqual(sts.isSummary, false, "isSummary status mismatch");
		await assertion.assertEqual(sts.isSuccess, false, "isSuccess status mismatch");
		await assertion.assertEqual(sts.isFailure, true, "isFailure status mismatch");
		await assertion.assertEqual(sts.isMatching, false, "isMatching status mismatch");
	},

	// Validate that matching record found page is displayed if city, state and coutry are same and name is similar to an existing institution
	ADMN_IREQ_TC_8: async function () {
		sts = await createInstitutionPage.click_Next_Button();
		await assertion.assertEqual(sts.isSummary, false, "isSummary status mismatch");
		await assertion.assertEqual(sts.isSuccess, false, "isSuccess status mismatch");
		await assertion.assertEqual(sts.isFailure, false, "isFailure status mismatch");
		await assertion.assertEqual(sts.isMatching, true, "isMatching status mismatch");
	},

	// Validate that summary page is displayed on clicking Previous button on the matching record found page
	ADMN_IREQ_TC_10: async function () {
		sts = await createInstitutionPage.click_Previous_Button();
		await assertion.assertEqual(sts.isSummary, true, "isSummary status mismatch");
		await assertion.assertEqual(sts.isSuccess, false, "isSuccess status mismatch");
		await assertion.assertEqual(sts.isFailure, false, "isFailure status mismatch");
		await assertion.assertEqual(sts.isMatching, false, "isMatching status mismatch");
	},

	// Validate that user exits the create workflow on clicking cross button during the workflow
	ADMN_IREQ_TC_12: async function () {
		sts = await createInstitutionPage.click_Close_Button();
		await assertion.assertEqual(sts, true, "click_Close_Button status mismatch");
	},

	// Validate that dialog box open on clicking accepted button for an institution in the pending list
	ADMN_IREQ_TC_13: async function () {
		sts = await instituionReqPage.click_Accept_Button();
		await assertion.assertEqual(sts, true, "click_Close_Button status mismatch");
	},

	// Validate that user exits the create workflow on clicking cross button during the workflow
	ADMN_IREQ_TC_14: async function () {
		sts = await createInstitutionPage.click_Close_Button();
		await assertion.assertEqual(sts, true, "click_Close_Button status mismatch");
	},

}
