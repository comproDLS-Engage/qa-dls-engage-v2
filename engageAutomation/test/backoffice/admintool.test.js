"use strict";
const findClassPage = require('../../pages/backoffice/findClass.page.js');
const findInstitutionPage = require('../../pages/backoffice/findInstitution.page.js');
const findUserPage = require('../../pages/backoffice/findUser.page.js');
const entitleUserPage = require('../../pages/backoffice/entitleUser.page.js');
const common = require('../../pages/backoffice/common.page.js');
const homePage = require('../../pages/backoffice/home.page.js');
const institutionReqPage = require('../../pages/backoffice/institutionRequests.page.js');
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

	// Validate that Engage app is launched on clicking view class as teacher
	ADMN_FCLS_TC_5: async function () {
		sts = await findClassPage.click_ViewClassAsTeacher_Button();
		await assertion.assertEqual(sts, true, "click_ViewClassAsTeacher_Button status mismatch");
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
		sts = await institutionReqPage.click_CreateNewInstitution_Button();
		await assertion.assertEqual(sts, true, "Create New Institution page status mismatch");
	},

	// Validate that all the fields except website are mandatory for institution creation
	ADMN_IREQ_TC_4: async function (testdata) {
		if (testdata.name == "") {
			testdata.name = Math.random().toString(36).substring(2, 10);
			console.log(testdata.name);
		}
		sts = await createInstitutionPage.set_Name(testdata.name);
		await assertion.assertEqual(sts, true, "set_Name status mismatch");
		sts = await createInstitutionPage.select_Country(testdata.country);
		await assertion.assertEqual(sts, true, "select_Country status mismatch");
		sts = await createInstitutionPage.set_Apartment(testdata.apartment);
		await assertion.assertEqual(sts, true, "set_Apartment status mismatch");
		sts = await createInstitutionPage.set_Street(testdata.street);
		await assertion.assertEqual(sts, true, "set_Street status mismatch");
		sts = await createInstitutionPage.set_City(testdata.city);
		await assertion.assertEqual(sts, true, "set_City status mismatch");
		sts = await createInstitutionPage.set_State(testdata.state);
		await assertion.assertEqual(sts, true, "set_State status mismatch");
		sts = await createInstitutionPage.set_Zip(testdata.zip);
		await assertion.assertEqual(sts, true, "set_Zip status mismatch");
		sts = await createInstitutionPage.set_Telephone(testdata.telephone);
		await assertion.assertEqual(sts, true, "set_Telephone status mismatch");
		sts = await createInstitutionPage.get_Next_Button_Status();
		await assertion.assertEqual(sts, false, "get_Next_Button_Status status mismatch");
		sts = await createInstitutionPage.set_Email(testdata.email);
		await assertion.assertEqual(sts, true, "set_Email status mismatch");
		sts = await createInstitutionPage.get_Next_Button_Status();
		await assertion.assertEqual(sts, true, "get_Next_Button_Status status mismatch");
		sts = await createInstitutionPage.set_Website(testdata.website);
		await assertion.assertEqual(sts, true, "set_Website status mismatch");
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
		sts = await institutionReqPage.click_Accept_Button();
		await assertion.assertEqual(sts, true, "click_Accept_Button status mismatch");
	},

	// Validate that institution moves to accepted list when the accept button is clicked in the dialog
	ADMN_IREQ_TC_14: async function (testdata) {
		sts = await institutionReqPage.click_ConfirmDialog_Button();
		await assertion.assertEqual(sts, true, "click_ConfirmDialog_Button status mismatch");
		sts = await institutionReqPage.click_AcceptedTab();
		await assertion.assertEqual(sts[0], testdata, "Institution did not move to Accepted tab");
	},

	// Validate that dialog box open on clicking process button for an institution in the accepted list
	ADMN_IREQ_TC_15: async function () {
		sts = await institutionReqPage.click_Process_Button();
		await assertion.assertEqual(sts, true, "click_Process_Button status mismatch");
	},

	// Validate that institution moves to processing list when the process button is clicked in the dialog
	ADMN_IREQ_TC_16: async function (testdata) {
		sts = await institutionReqPage.click_ConfirmDialog_Button();
		await assertion.assertEqual(sts, true, "click_ConfirmDialog_Button status mismatch");
		sts = await institutionReqPage.click_ProcessingTab();
		await assertion.assertEqual(sts[0], testdata, "Institution did not move to Processing tab");
	},

	// Validate that dialog box open on clicking complete button for an institution in the processing list
	ADMN_IREQ_TC_17: async function () {
		sts = await institutionReqPage.click_Complete_Button();
		await assertion.assertEqual(sts, true, "click_Complete_Button status mismatch");
	},

	// Validate that institution moves to completed list when the complete button is clicked in the dialog
	ADMN_IREQ_TC_18: async function (testdata) {
		sts = await institutionReqPage.click_ConfirmDialog_Button();
		await assertion.assertEqual(sts, true, "click_ConfirmDialog_Button status mismatch");
		sts = await institutionReqPage.click_CompletedTab();
		await assertion.assertEqual(sts[0], testdata, "Institution did not move to Completed tab");
	},

	// Validate that dialog box open on clicking logs button for an institution in the processing list
	ADMN_IREQ_TC_19: async function () {
		sts = await institutionReqPage.click_Logs_Button();
		await assertion.assertEqual(sts, true, "click_Logs_Button status mismatch");
	},

	// Validate that logs dialog is closed on clicking close button
	ADMN_IREQ_TC_20: async function () {
		sts = await institutionReqPage.click_ConfirmDialog_Button();
		await assertion.assertEqual(sts, true, "click_ConfirmDialog_Button status mismatch");
	},

	// Validate that dialog box open on clicking reject button for an institution
	ADMN_IREQ_TC_21: async function () {
		sts = await institutionReqPage.click_Reject_Button();
		await assertion.assertEqual(sts, false, "click_Reject_Button status mismatch");
	},

	// Validate that institution moves to rejected list when the reject button is clicked after entering reject reason in the dialog
	ADMN_IREQ_TC_22: async function (testdata) {
		sts = await institutionReqPage.set_Reject_Reason(testdata[0]);
		await assertion.assertEqual(sts, true, "Reject button is not clickable");
		sts = await institutionReqPage.click_ConfirmDialog_Button();
		await assertion.assertEqual(sts, true, "click_ConfirmDialog_Button status mismatch");
		sts = await institutionReqPage.click_RejectedTab();
		await assertion.assertEqual(sts[0], testdata[1], "Institution did not move to Rejected tab");
	},

	// ---------------------------------------------------------------------------- //

	// --------------------------- Find a User Test Cases ----------------------------- //

	// Validate that user is able to Search by Email
	ADMN_FUSR_TC_1: async function (testdata) {
		sts = await homePage.search_User_ByEmail(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByEmail status mismatch");
		sts = await findUserPage.get_User_Details();
		await assertion.assertEqual(sts.email, testdata, "get_User_Details status mismatch");
	},

	// Validate that user is able to Search with spanish word in FirstName
	ADMN_FUSR_TC_2: async function (testdata) {
		sts = await homePage.search_User_ByFirstName(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByEmail status mismatch");
		sts = await findUserPage.getUserList();
		if (sts == 0) {
			sts = await findUserPage.get_User_Details();
			await assertion.assert(sts.name.includes(testdata), "get_User_Details status mismatch");
		}
	},

	// Validate that user is able to Search with special character in lastName
	ADMN_FUSR_TC_3: async function (testdata) {
		sts = await homePage.search_User_ByLastName(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByEmail status mismatch");
		sts = await findUserPage.getUserList();
		if (sts == 0) {
			sts = await findUserPage.get_User_Details();
			await assertion.assert(sts.name.includes(testdata), "get_User_Details status mismatch");
		}
	},

	// Validate the scenario for incorrect Email ID
	ADMN_FUSR_TC_4: async function (testdata) {
		sts = await homePage.search_User_ByEmail(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByEmail status mismatch");
		sts = await findUserPage.get_User_Details();
		await assertion.assertEqual(sts.email, null, "get_User_Details status mismatch");
	},

	// Validate user is able to search with UserID on User search page
	ADMN_FUSR_TC_5: async function (testdata) {
		sts = await findUserPage.search_User_ByUserId(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByUserId status mismatch");
		sts = await findUserPage.get_User_Details();
		await assertion.assertEqual(sts.userId, testdata, "get_User_Details status mismatch");
	},

	// Validate clicking on a row in the search list launch User details page
	ADMN_FUSR_TC_6: async function (testdata) {
		sts = await findUserPage.click_User_in_List();
		await assertion.assertEqual(sts, true, "click_User_in_List status mismatch");
		sts = await findUserPage.get_User_Details();
		await assertion.assert(sts.name.includes(testdata), "get_User_Details status mismatch");
	},

	// Validate that search page is launched on clicking on Find Another User button
	ADMN_FUSR_TC_7: async function () {
		sts = await findUserPage.find_Another_User();
		await assertion.assertEqual(sts, true, "find_Another_User status mismatch");
	},

	// Find Another User - Validate user is able to search by entering data in search box 
	ADMN_FUSR_TC_8: async function (testdata) {
		sts = await findUserPage.search_User_ByFirstName(testdata);
		await assertion.assertEqual(sts, true, "search_User_ByFirstName status mismatch");
	},

	// ---------------------------------------------------------------------------- //

	// --------------------------- User Details Page Test Cases ----------------------------- //

	// Validate Entitlements card shows the list of entitled components of a book
	ADMN_USRD_TC_1: async function (testdata) {
		sts = await findUserPage.remove_Entitlement();
		await assertion.assertEqual(sts, true, "remove_Entitlement status mismatch");
		sts = await findUserPage.click_DialogConfirm_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata)), "Snackbar messsage mismatch. " + sts);
	},

	// Validate the scenario of Disable a User
	ADMN_USRD_TC_2: async function (testdata) {
		sts = await findUserPage.click_DisableEnableUser_Button();
		await assertion.assertEqual(sts, "DISABLE", "click_DisableEnableUser_Button status mismatch");
		sts = await findUserPage.click_DialogConfirm_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata)), "Snackbar messsage mismatch. " + sts);
	},

	// Validate the scenario of Enable a User
	ADMN_USRD_TC_3: async function (testdata) {
		sts = await findUserPage.click_DisableEnableUser_Button();
		await assertion.assertEqual(sts, "ENABLE", "click_DisableEnableUser_Button status mismatch");
		sts = await findUserPage.click_DialogConfirm_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata)), "Snackbar messsage mismatch. " + sts);
	},

	// ---------------------------------------------------------------------------- //

	// --------------------------- Entitle User Test Cases ----------------------------- //

	// Validate clicking on 'Entitle User With Pass Key' from User details page
	ADMN_EUSR_TC_1: async function () {
		sts = await findUserPage.click_EntitleUser_Button();
		await assertion.assertEqual(sts, true, "click_EntitleUser_Button status mismatch");
	},

	// Validate the scenario if user is successfully Entitled with Passkey
	ADMN_EUSR_TC_2: async function (testdata) {
		//sts = await entitleUserPage.set_Email(testdata[0].email);
		//await assertion.assertEqual(sts, true, "set_Email status mismatch");
		sts = await entitleUserPage.set_ProductCode(testdata[0].productCode);
		await assertion.assertEqual(sts, true, "set_ProductCode status mismatch");
		sts = await entitleUserPage.select_StartDate();
		await assertion.assertEqual(sts, true, "select_StartDate status mismatch");
		sts = await entitleUserPage.select_EndDate();
		await assertion.assertEqual(sts, true, "select_EndDate status mismatch");
		sts = await entitleUserPage.set_PassKey(testdata[0].passKey);
		await assertion.assertEqual(sts, true, "set_PassKey status mismatch");
		sts = await entitleUserPage.click_Entitle_Button();
		await assertion.assertEqual(sts, true, "click_Entitle_Button status mismatch");
	},

	// Validate that entitle user page is launched on clicking on 'Entitle User With Pass Key' from Home page and user enter Email and click Proceed button
	ADMN_EUSR_TC_3: async function (testdata) {
		sts = await homePage.entitle_User(testdata);
		await assertion.assertEqual(sts, true, "click_EntitleUser_Button status mismatch");
	},

	// Validate the scenario in Entitle User with pass Key from Dashboard, when user click Cross icon
	ADMN_EUSR_TC_4: async function () {
		sts = await entitleUserPage.click_Close_Button();
		await assertion.assertEqual(sts, true, "click_Close_Button status mismatch");
		sts = await homePage.isInitialized();
		await assertion.assertEqual(sts, true, "Home page status mismatch");
	},

	// Validate that user details page is launched on clicking View Entitlements button
	ADMN_EUSR_TC_5: async function () {
		sts = await entitleUserPage.click_ViewEntitlements_Button();
		await assertion.assertEqual(sts, true, "click_ViewEntitlements_Button status mismatch");
	},

}
