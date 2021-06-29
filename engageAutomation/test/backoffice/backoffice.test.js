"use strict";
const loginPage = require('../../pages/backOffice/login.page.js');
const homePage = require('../../pages/backOffice/home.page.js');
const viewBookPage = require('../../pages/backOffice/viewBook.page.js');
const learningPathPage = require('../../pages/backOffice/viewLearningPath.page.js');
const common = require('../../pages/backOffice/common.page.js');
const addTitlePage = require('../../pages/backOffice/addTitle.page.js');
const addCompPage = require('../../pages/backOffice/addComponent.page.js');
const addFolderPage = require('../../pages/backOffice/addFolder.page.js');
const addActivityPage = require('../../pages/backOffice/addActivity.page.js');
const commonPage = require('../../pages/backOffice/common.page.js');
var sts;

module.exports = {

	// Validate that use is able to login to the back office application
	BK_TC_1: function (testdata) {
		sts = loginPage.isInitialized();
		assertion.assertEqual(sts, true, "Login page status mismatch");
		sts = loginPage.set_UserName(testdata.email);
		assertion.assertEqual(sts, true, "Username status mismatch");
		sts = loginPage.set_Password(testdata.password);
		assertion.assertEqual(sts, true, "Password status mismatch");
		sts = loginPage.click_Login_Button();
		assertion.assertEqual(sts, testdata.name, "Name mismatch");
	},

	// Validate that add title page opens on clicking the add book button
	/*BK_TC_2: function () {
		sts = homePage.click_NewTitle_Button();
		assertion.assertEqual(sts, true, "Add title page status mismatch");
	},

	// Validate that new book is added on entering required details on the add title page
	BK_TC_3: function (testdata) {
		//sts = addTitlePage.select_TitleType("Book");
		//assertion.assertEqual(sts, true, "Title type selection status mismatch");
		sts = addTitlePage.set_Name(testdata.name);
		assertion.assertEqual(sts, true, "Title status mismatch");
		sts = addTitlePage.upload_CoverImage(testdata.coverImage);
		assertion.assertEqual(sts, true, "Upload cover image status mismatch");
		sts = addTitlePage.set_Description(testdata.description);
		assertion.assertEqual(sts, true, "Description status mismatch");
		sts = addTitlePage.click_CreateTitle_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Book creation request submitted successfully")), "Snackbar messsage mismatch. " + sts);
		//assertion.assert(sts.includes("Automation Test book"), "Snackbar messsage mismatch.");
	},*/

	// Validate that the view book page is launched on clicking the book card on the home page
	BK_TC_4: function (testdata) {
		sts = homePage.click_Book(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Book title mismatch");
	},

	// Validate that the delete book dialog box opens on clicking delete button on the components page
	/*BK_TC_5: function (testdata) {
		sts = viewBookPage.click_DeleteBook_Button();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Dialog text mismatch. " + sts);
	},

	// Validate that the book is deleted on clicking delete button in the dialog box
	BK_TC_6: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assertEqual(sts, "Book deleted successfully", "Snackbar messsage mismatch");
	},*/

	// Validate that user is able to logout of the back office application
	BK_TC_7: function () {
		sts = commonPage.signout_from_app();
		assertion.assertEqual(sts, true, "Login page status mismatch");
	},

	// Validate that add component page opens on clicking the new component button and proceed button
	BK_TC_8: function (testdata) {
		sts = viewBookPage.click_AddComponent_Button();
		assertion.assertEqual(sts, true, "Add component options status mismatch");
		sts = viewBookPage.select_ComponentType_and_Proceed(testdata.type);
		assertion.assertEqual(sts, true, "Add component page status mismatch");
	},

	// Validate that new component is added on entering required details on the add title page
	BK_TC_9: function (testdata) {
		sts = addCompPage.set_Title(testdata.title);
		assertion.assertEqual(sts, true, "Title status mismatch");
		sts = addCompPage.select_LearningPathLevel(testdata.folderLevel);
		assertion.assertEqual(sts, true, "Learning path level status mismatch");
		sts = addCompPage.select_Autonumbering(testdata.autonumbering);
		assertion.assertEqual(sts, true, "Autonumbering status mismatch");
		sts = addCompPage.select_CategoryType(testdata.category);
		assertion.assertEqual(sts, true, "Category status mismatch");
		sts = addCompPage.click_Add_Button();
		//assertion.assert((typeof sts === "string" && sts.includes("Component \"" + testdata.title + "\" is created")), "Banner messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("Your new Component is being setup.")), "Banner messsage mismatch. " + sts);
	},

	// Validate that the learning path page is launched on clicking the component card
	BK_TC_10: function (testdata) {
		sts = viewBookPage.click_Component(testdata.title);
		assertion.assertEqual(sts, true, "Learning Path page status mismatch");
	},

	// Validate that add folder page opens on clicking the add folder button
	BK_TC_11: function () {
		sts = learningPathPage.click_AddFolder_Button();
		assertion.assertEqual(sts, true, "Add folder page status mismatch");
	},

	// Validate that new folder is added on entering required details on the add folder page
	BK_TC_12: function (testdata) {
		sts = addFolderPage.set_Name(testdata.name);
		assertion.assertEqual(sts, true, "Name status mismatch");
		sts = addFolderPage.click_Add_Button();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Snackbar messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("Folder created successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the sub-folder page is launched on clicking the folder on the learning path page
	BK_TC_13: function (testdata) {
		sts = learningPathPage.click_Folder(testdata.name);
		assertion.assertEqual(sts, true, "Page status mismatch");
	},

	// Validate that add learning object page opens on clicking the add learning object and proceed button
	BK_TC_14: function (testdata) {
		sts = learningPathPage.click_AddActivity_Button();
		assertion.assertEqual(sts, true, "Add learning object options status mismatch");
		sts = learningPathPage.select_ActivityType_and_Proceed(testdata.type);
		assertion.assertEqual(sts, true, "Add activity page status mismatch");
	},

	// Validate that new learning object is added on entering required details on the add learning object page
	BK_TC_15: function (testdata) {
		sts = addActivityPage.set_Name(testdata.name);
		assertion.assertEqual(sts, true, "Name status mismatch");
		sts = addActivityPage.click_Add_Button();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Snackbar messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("created successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that clicking on the Level 1 breadcrumb launches components page
	BK_TC_16: function (testdata) {
		sts = common.click_Level1Breadcrumb();
		assertion.assertEqual(sts, testdata.name, "Book title mismatch");
	},

	// Validate that the delete component dialog box opens on clicking delete button on the learning path page
	BK_TC_17: function (testdata) {
		sts = learningPathPage.click_DeleteComponent_Button();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.title)), "Dialog text mismatch. " + sts);
	},

	// Validate that the component is deleted on clicking delete button in the dialog box
	BK_TC_18: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("deletion request submitted successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete folder dialog box opens on clicking delete button on the activity page
	BK_TC_19: function (testdata) {
		sts = learningPathPage.click_DeleteFolder_Button();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Dialog text mismatch. " + sts);
	},

	// Validate that the folder is deleted on clicking delete button in the dialog box
	BK_TC_20: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("folder deleted successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete activity dialog box opens on clicking delete button in the activity menu
	BK_TC_21: function (testdata) {
		sts = learningPathPage.click_Delete_Button_in_ActivityMenu();
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Dialog text mismatch. " + sts);
	},

	// Validate that the activity is deleted on clicking delete button in the dialog box
	BK_TC_22: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("deleted successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that clicking on the Level 2 breadcrumb launches learning path page
	BK_TC_23: function (testdata) {
		sts = common.click_Level2Breadcrumb(); //akhil
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.type, testdata.type, "Options type mismatch");
		assertion.assertEqual(sts.category, testdata.category, "Options category mismatch");
		assertion.assertEqual(sts.title, testdata.title, "Options title mismatch");
		assertion.assertEqual(sts.description, testdata.description, "Options description mismatch");
		assertion.assertEqual(sts.folderLevel, testdata.folderLevel, "Options learning path level mismatch");
	},
	// Validate that clicking on the back button moves to previous page
	BK_TC_24: function (testdata) {
		sts = common.click_Back_Button();
		assertion.assertEqual(sts, true, "Move to previous page status mismatch");
	},
}
