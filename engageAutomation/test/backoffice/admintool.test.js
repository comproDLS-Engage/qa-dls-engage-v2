"use strict";
const findClassPage = require('../../pages/backoffice/findClass.page.js');
const findInstitutionPage = require('../../pages/backoffice/findInstitution.page.js');
//const findUserPage = require('../../pages/backoffice/findUser.page.js');
//const userDetailsPage = require('../../pages/backoffice/userDetails.page.js');
const common = require('../../pages/backoffice/common.page.js');
const homePage = require('../../pages/backoffice/home.page.js');
var sts;

module.exports = {

	// --------------------------- Find Class Test Cases ----------------------------- //

	// Validate that user is able to search the class using correct class code on the home page
	ADMN_TC_1: async function (testdata) {
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
	ADMN_TC_2: async function (testdata) {
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
	ADMN_TC_3: async function (testdata) {
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
	ADMN_TC_4: async function (testdata) {
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
	ADMN_TC_5: async function (testdata) {
		sts = await homePage.search_Institution(testdata.name);
		await assertion.assertEqual(sts, true, "Find institution page status mismatch");
		sts = await findInstitutionPage.getInstitutionList();
		await assertion.assertEqual(sts, testdata.count, "institution count mismatch");
	},

	// Validate that user is able to search partial name in find an institution on the home page
	ADMN_TC_6: async function (testdata) {
		await this.ADMN_TC_5(testdata);
	},

	// Validate that user is able to search with special characters in find an institution on the home page
	ADMN_TC_7: async function (testdata) {
		await this.ADMN_TC_5(testdata);
	},

	// Validate that no result is displayed on searching an incorrect name in find an institution on the home page
	ADMN_TC_8: async function (testdata) {
		await this.ADMN_TC_5(testdata);
	},

	// Validate that user is able to do empty search on find an institute page
	ADMN_TC_9: async function (testdata) {
		sts = await findInstitutionPage.search_Institution(testdata.name);
		await assertion.assertEqual(sts, true, "Find institution page status mismatch");
		sts = await findInstitutionPage.getInstitutionList();
		await assertion.assert(sts >= testdata.count, "institution count mismatch");
	},

	// Validate that confirmation dialog opens on changing the key for an institute
	ADMN_TC_10: async function () {
		sts = await findInstitutionPage.click_ChangeKey_Option();
		await assertion.assertEqual(sts, true, "Change key dialog status mismatch");
	},

	// Validate that institute key is changed on confirming the dialog
	ADMN_TC_11: async function (testdata) {
		sts = await findInstitutionPage.click_DialogChangeKey_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata)), "Banner messsage mismatch. " + sts);
	},

	// Validate that change institute name page is launched on clicking change name for any institute
	ADMN_TC_12: async function () {
		sts = await findInstitutionPage.click_ChangeName_Option();
		await assertion.assertEqual(sts, true, "Change name page status mismatch");
	},

	// Validate that user is able to change the name of the institute
	ADMN_TC_13: async function (testdata) {
		sts = await findInstitutionPage.change_Institution_Name(testdata);
		await assertion.assertEqual(sts, true, "Change name status mismatch");
		//assertion should be updated for snackbar message
	},

}
