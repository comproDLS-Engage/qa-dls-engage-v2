"use strict";
const loginPage = require('../../pages/backoffice/login.page.js');
const homePage = require('../../pages/backoffice/home.page.js');
const viewBookPage = require('../../pages/backoffice/viewBook.page.js');
const learningPathPage = require('../../pages/backoffice/viewLearningPath.page.js');
const common = require('../../pages/backoffice/common.page.js');
const addTitlePage = require('../../pages/backoffice/addTitle.page.js');
const addCompPage = require('../../pages/backoffice/addComponent.page.js');
const addFolderPage = require('../../pages/backoffice/addFolder.page.js');
const addActivityPage = require('../../pages/backoffice/addActivity.page.js');
const commonPage = require('../../pages/backoffice/common.page.js');
const viewLearningPathPage = require('../../pages/backoffice/viewLearningPath.page.js');
const generateCodesPage = require('../../pages/backoffice/generateCodes.page.js');
const libraryPage = require('../../pages/backoffice/linkFromLibrary.page.js');
const publishComponentPage = require('../../pages/backoffice/publishComponent.page.js');
var sts;

module.exports = {

	// Validate that user is able to login to the back office application
	BK_TC_1: async function (testdata) {
		sts = await loginPage.isInitialized();
		await assertion.assertEqual(sts, true, "Login page status mismatch");
		sts = await loginPage.set_UserName(testdata.email);
		await assertion.assertEqual(sts, true, "Username status mismatch");
		sts = await loginPage.set_Password(testdata.password);
		await assertion.assertEqual(sts, true, "Password status mismatch");
		sts = await loginPage.click_Login_Button();
		//assertion.assertEqual(sts, testdata.name, "Name mismatch");
		await assertion.assertEqual(sts, true, "Home page status mismatch");
	},

	// Validate that add title page opens on clicking the add book button
	BK_TC_2: async function (testdata) {
		sts = await homePage.click_NewTitle_Button();
		await assertion.assertEqual(sts, true, "Add title options status mismatch");
		sts = await homePage.select_TitleType_and_Proceed(testdata.type);
		await assertion.assertEqual(sts, true, "Add title page status mismatch");
	},

	// Validate that new book is added on entering required details on the add title page
	BK_TC_3: async function (testdata) {
		sts = await addTitlePage.set_Name(testdata[0].name);
		await assertion.assertEqual(sts, true, "Title status mismatch");
		sts = await addTitlePage.upload_CoverImage(testdata[0].coverImage);
		await assertion.assertEqual(sts, true, "Upload cover image status mismatch");
		sts = await addTitlePage.set_Description(testdata[0].description);
		await assertion.assertEqual(sts, true, "Description status mismatch");
		sts = await addTitlePage.select_bookDesign(testdata[0].bookDesign);
		await assertion.assertEqual(sts, true, "Book Design status mismatch");
		sts = await addTitlePage.select_visibility(testdata[0].visibility);
		await assertion.assertEqual(sts, true, "Visibility status mismatch");
		sts = await addTitlePage.select_Category(testdata[0].category);
		await assertion.assertEqual(sts, true, "Category status mismatch");
		sts = await addTitlePage.select_TargetRole(testdata[0].targetRole);
		await assertion.assertEqual(sts, true, "targetRole status mismatch");
		sts = await addTitlePage.click_CreateTitle_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata[1])), "Banner messsage mismatch. " + sts);
	},

	// Validate that the view book page is launched on clicking the book card on the home page
	BK_TC_4: async function (testdata) {
		sts = await homePage.click_Book(testdata.name);
		await assertion.assert(sts.includes(testdata.name), "Book title mismatch. " + sts);
		sts = await viewBookPage.getBookParamDetails();
		if (testdata.type == "BOOK") {
			await assertion.assertEqual(sts.description, testdata.description, "book description mismatch");
			await assertion.assertEqual(sts.bookDesign, testdata.bookDesign, "book design mismatch");
			await assertion.assertEqual(sts.visibility, testdata.visibility, "book visibility mismatch");
		}
		else {
			await assertion.assertEqual(sts.description, testdata.category, "global resource category mismatch");
			await assertion.assertEqual(sts.bookDesign, testdata.visibility, "global resource visibility mismatch");
			await assertion.assertEqual(sts.visibility, testdata.targetRole, "global resource targetRole mismatch");
		}
	},

	// Validate that the delete book dialog box opens on clicking delete button on the components page
	BK_TC_5: async function (testdata) {
		sts = await viewBookPage.click_DeleteBook_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the Umbrella Product")), "Dialog text mismatch. " + sts);
		await assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Dialog text mismatch. " + sts);
	},

	// Validate that the book is deleted on clicking delete button in the dialog box
	BK_TC_6: async function () {
		sts = await common.click_confirmDialog_Button();
		await assertion.assertEqual(sts, "Umbrella Product deleted successfully", "Snackbar messsage mismatch");
	},

	// Validate that user is able to logout of the back office application
	BK_TC_7: async function () {
		await browser.switchWindow(global.appUrl);
		sts = await commonPage.signout_from_app();
		await assertion.assertEqual(sts, true, "Login page status mismatch");
	},

	// Validate that add component page opens on clicking the new component button and proceed button
	BK_TC_8: async function (testdata) {
		sts = await viewBookPage.click_AddComponent_Button();
		await assertion.assertEqual(sts, true, "Add component options status mismatch");
		sts = await viewBookPage.select_ComponentType_and_Proceed(testdata.type);
		await assertion.assertEqual(sts, true, "Add component page status mismatch");
	},

	// Validate that new component is added on entering required details on the add title page
	BK_TC_9: async function (testdata) {
		sts = await addCompPage.set_Title(testdata[0].title);
		await assertion.assertEqual(sts, true, "Title status mismatch");
		if (testdata[0].type != "Flipbook") {
			sts = await addCompPage.select_LearningPathLevel(testdata[0].folderLevel);
			await assertion.assertEqual(sts, true, "Learning path level status mismatch");
			sts = await addCompPage.select_Autonumbering(testdata[0].autonumbering);
			await assertion.assertEqual(sts, true, "Autonumbering status mismatch");
			sts = await addCompPage.select_Assignable(testdata[0].assignable);
			await assertion.assertEqual(sts, true, "Assignable status mismatch");
		}
		if (testdata[0].type == "Bank") {
			sts = await addCompPage.select_enableTracking(testdata[0].enableTracking);
			await assertion.assertEqual(sts, true, "enableTracking status mismatch");
		}
		sts = await addCompPage.select_CategoryType(testdata[0].category);
		await assertion.assertEqual(sts, true, "Category status mismatch");
		sts = await addCompPage.select_TargetRole(testdata[0].targetRole);
		await assertion.assertEqual(sts, true, "Target Role status mismatch");
		sts = await addCompPage.select_Visibility(testdata[0].visibility);
		await assertion.assertEqual(sts, true, "Visibility status mismatch");
		sts = await addCompPage.select_freeAvailability(testdata[0].freelyAvailable);
		await assertion.assertEqual(sts, true, "Freely available to roles status mismatch");
		sts = await addCompPage.click_Add_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata[1])), "Banner messsage mismatch. " + sts);
	},

	// Validate that the component details page is launched on clicking the component card
	BK_TC_10: async function (testdata) {
		sts = await viewBookPage.click_Component(testdata.title);
		await assertion.assertEqual(sts, true, "Learning Path page status mismatch");
		sts = await viewLearningPathPage.getComponentParamDetails();
		if (testdata.type == "Flipbook") {
			await assertion.assertEqual(sts.levels, testdata.category, "component category mismatch");
			await assertion.assertEqual(sts.autonumbering, testdata.visibility, "component visibility mismatch");
			await assertion.assertEqual(sts.category, testdata.targetRole, "component targetRole mismatch");
			await assertion.assertEqual(sts.visibility, testdata.freelyAvailable, "component freelyAvailable mismatch");
		}
		else {
			await assertion.assertEqual(sts.levels, testdata.folderLevel, "component levels mismatch");
			await assertion.assertEqual(sts.autonumbering, testdata.autonumbering, "component design mismatch");
			await assertion.assertEqual(sts.assignable, testdata.assignable, "component assignable mismatch");
			await assertion.assertEqual(sts.category, testdata.category, "component category mismatch");
			await assertion.assertEqual(sts.visibility, testdata.visibility, "component visibility mismatch");
			await assertion.assertEqual(sts.targetRole, testdata.targetRole, "component targetRole mismatch");
			await assertion.assertEqual(sts.freelyAvailable, testdata.freelyAvailable, "component freelyAvailable mismatch");
		}
	},

	// Validate that add folder page opens on clicking the add folder button
	BK_TC_11: async function () {
		sts = await learningPathPage.click_AddFolder_Button();
		await assertion.assertEqual(sts, true, "Add folder page status mismatch");
	},

	// Validate that new folder is added on entering required details on the add folder page
	BK_TC_12: async function (testdata) {
		sts = await addFolderPage.set_Name(testdata[0].name);
		await assertion.assertEqual(sts, true, "Name status mismatch");
		sts = await addFolderPage.upload_CoverImage(testdata[0].coverImage);
		await assertion.assertEqual(sts, true, "Upload cover image status mismatch");
		sts = await addFolderPage.select_TargetRole(testdata[0].targetRole);
		await assertion.assertEqual(sts, true, "Target Role status mismatch");
		sts = await addFolderPage.select_Assignable(testdata[0].assignable);
		await assertion.assertEqual(sts, true, "Assignable status mismatch");
		sts = await addFolderPage.set_Folder_Color(testdata[0].color);
		await assertion.assertEqual(sts, true, "Folder color status mismatch");
		sts = await addFolderPage.select_Folder_Type(testdata[0].folderType);
		await assertion.assertEqual(sts, true, "folderType status mismatch");
		if (testdata[0].page == "") {
			testdata[0].page = Math.floor(Math.random() * 10);
		}
		sts == (await addFolderPage.set_Page_Reference(testdata[0].page));
		await assertion.assertEqual(sts, true, "Page reference status mismatch");
		sts = await addFolderPage.click_Add_Button();
		await assertion.assert((typeof sts === "string" && sts.includes(testdata[1])), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the sub-folder page is launched on clicking the folder on the learning path page
	BK_TC_13: async function (testdata) {
		sts = await learningPathPage.click_Folder(testdata);
		await assertion.assertEqual(sts, true, "Page status mismatch");
	},

	// Validate that add learning object page opens on clicking the add learning object and proceed button
	BK_TC_14: async function (testdata) {
		sts = await learningPathPage.click_AddActivity_Button();
		await assertion.assertEqual(sts, true, "Add learning object options status mismatch");
		sts = await learningPathPage.select_ActivityType_and_Proceed(testdata.id);
		await assertion.assertEqual(sts, true, "Add activity page status mismatch");
	},

	// Validate that new learning object is added on entering required details on the add learning object page
	BK_TC_15: async function (testdata) {
		sts = await addActivityPage.set_Name(testdata.name);
		await assertion.assertEqual(sts, true, "Name status mismatch");
		sts = await addActivityPage.click_Completion_Checkbox(testdata.completion);
		await assertion.assertEqual(sts, true, "completion checkbox status mismatch");
		sts = await addActivityPage.click_Score_Checkbox(testdata.scoring);
		await assertion.assertEqual(sts, true, "score checkbox status mismatch");
		sts = await addActivityPage.select_TargetRole(testdata.targetRole);
		await assertion.assertEqual(sts, true, "target role status mismatch");
		sts = await addActivityPage.select_Assignable(testdata.assignable);
		await assertion.assertEqual(sts, true, "assignable status mismatch");
		sts = await addActivityPage.set_Page_Reference(testdata.page);
		await assertion.assertEqual(sts, true, "page reference status mismatch");
		sts = await addActivityPage.select_ActivityTheme(testdata.activityTheme);
		await assertion.assertEqual(sts, true, "activityTheme status mismatch");
		if (testdata.id.includes("category-2") || testdata.id.includes("category-3")) {
			sts = await addActivityPage.uploadFile(testdata.file);
			await assertion.assertEqual(sts, true, "file upload status mismatch");
		}
		sts = await addActivityPage.click_Add_Button();
		await assertion.assertEqual(sts, true, "Add button status mismatch");
		if (testdata.id == "category-0-option-0")
			await browser.switchWindow('paint.backoffice.comprodls.com/');
	},

	// Validate that clicking on the Level 1 breadcrumb launches components page
	BK_TC_16: async function (testdata) {
		sts = await common.click_Level1Breadcrumb();
		await assertion.assertEqual(sts, testdata.name, "Book title mismatch");
	},

	// Validate that the delete component dialog box opens on clicking delete button on the learning path page
	BK_TC_17: async function () {
		sts = await learningPathPage.click_DeleteComponent_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete component")), "Dialog text mismatch. " + sts);
	},

	// Validate that the component is deleted on clicking delete button in the dialog box
	BK_TC_18: async function () {
		sts = await common.click_confirmDialog_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("is being deleted. This process can take a few seconds to complete.")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete folder dialog box opens on clicking delete button on the activity page
	BK_TC_19: async function (testdata) {
		sts = await learningPathPage.select_Item_and_Click_Delete(testdata.name);
		await assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the selected items?")), "Dialog text mismatch. " + sts);
	},

	// Validate that the folder is deleted on clicking delete button in the dialog box
	BK_TC_20: async function () {
		sts = await common.click_confirmDialog_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Deleted Successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete activity dialog box opens on clicking delete button in the activity menu
	BK_TC_21: async function (testdata) {
		sts = await learningPathPage.click_Delete_Button_in_ActivityMenu(testdata.name);
		await assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the selected items")), "Dialog text mismatch. " + sts);
	},

	// Validate that the activity is deleted on clicking delete button in the dialog box
	BK_TC_22: async function () {
		sts = await common.click_confirmDialog_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Deleted Successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that clicking on the Level 2 breadcrumb launches learning path page
	BK_TC_23: async function (testdata) {
		sts = await common.click_Level2Breadcrumb(); //akhil
		await assertion.typeOf(sts, 'object', new Error(sts));
		await assertion.assertEqual(sts.type, testdata.type, "Options type mismatch");
		await assertion.assertEqual(sts.category, testdata.category, "Options category mismatch");
		await assertion.assertEqual(sts.title, testdata.title, "Options title mismatch");
		await assertion.assertEqual(sts.description, testdata.description, "Options description mismatch");
		await assertion.assertEqual(sts.folderLevel, testdata.folderLevel, "Options learning path level mismatch");
	},

	// Validate that clicking on the back button moves to previous page
	BK_TC_24: async function () {
		sts = await common.click_Back_Button();
		await assertion.assertEqual(sts, true, "Move to previous page status mismatch");
	},

	// Validate that clicking on the activity launches the activity preview
	BK_TC_25: async function (testdata) {
		sts = await viewLearningPathPage.click_Activity(testdata);
		await assertion.assertEqual(sts, true, "Preview status mismatch");
	},

	// Validate that the form/preview is closed on clicking on the close button
	BK_TC_26: async function () {
		sts = await common.click_Close_Button();
		await assertion.assertEqual(sts, true, "Close form/preview status mismatch");
	},

	// Validate that the generate codes page is launched on clicking generate codes button
	BK_TC_27: async function () {
		sts = await homePage.click_GenerateCodes_Button();
		await assertion.assertEqual(sts, true, "Generate codes page status mismatch");
	},

	// Validate that access code batch is created on entering required details on the generate codes page
	BK_TC_28: async function (testdata) {
		sts = await generateCodesPage.select_Book(testdata[0].name);
		await assertion.assertEqual(sts, true, "Error in selecting book name");
		sts = await generateCodesPage.set_BatchName(testdata[1].batchName);
		await assertion.assertEqual(sts, true, "Error in setting batch name");
		sts = await generateCodesPage.set_StartDate(testdata[1].startDate);
		await assertion.assertEqual(sts, true, "Error in setting start date");
		sts = await generateCodesPage.set_EndDate(testdata[1].endDate);
		await assertion.assertEqual(sts, true, "Error in setting end date");
		sts = await generateCodesPage.set_CodeLimit(testdata[1].codeLimit);
		await assertion.assertEqual(sts, true, "Error in setting code limit");
		sts = await generateCodesPage.click_Generate_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Access Batch and its Codes are generated successfully.")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the view access code page is launched on clicking the view codes button on the home page
	BK_TC_29: async function (testdata) {
		sts = await homePage.click_ViewCodes_Button();
		await assertion.assertEqual(sts, true, "Error in clicking view codes button");
		sts = await homePage.select_Book_in_ViewCode_Launcher(testdata[0].name);
		await assertion.assertEqual(sts, true, "Error in selecting book");
		sts = await homePage.select_Batch_in_ViewCode_Launcher(testdata[1].batchName);
		await assertion.assertEqual(sts, true, "Error in selecting batch");
		sts = await homePage.click_Proceed_Button_in_ViewCode_Launcher();
		await assertion.assertEqual(sts.batchName, testdata[1].batchName, "Batch name mismatch");
		await assertion.assertEqual(sts.totalAccessCodes, testdata[1].codeLimit, "Total access codes mismatch");
		await assertion.assertEqual(sts.batchStatus, testdata[1].status, "Batch status mismatch");
	},

	// Validate that the assessment author app is launched on clicking activity author button in the activity menu
	BK_TC_30: async function (testdata) {
		sts = await learningPathPage.click_ActivityAuthor_Button_in_ActivityMenu(testdata.name);
		await assertion.assertEqual(sts, true, "Error in clicking LO");
	},

	// Validate that the searched LO is displayed on searching the LO in the Library
	BK_TC_31: async function (testdata) {
		sts = await libraryPage.searchLO_byName(testdata.file);
		await assertion.assertEqual(sts, true, "Error in searching LO");
	},

	// Validate that the add activity page appears after selecting the LO and clicking on next button
	BK_TC_32: async function (testdata) {
		sts = await libraryPage.select_Resource_and_Proceed(testdata.file);
		await assertion.assertEqual(sts, true, "Error in searching LO");
	},

	//Validate on clicking Global resources Pill, global resources are filtered out
	BK_TC_33: async function () {
		sts = await homePage.click_GlobalResources_Pill();
		await assertion.assertEqual(sts, true, "Global resources not filtered");

	},

	//Validate on clicking Books Pill, Books are filtered out
	BK_TC_34: async function () {
		sts = await homePage.click_Books_Pill();
		await assertion.assertEqual(sts, true, "Books not filtered");
	},

	//Validate user is able to search a book
	BK_TC_35: async function (testdata) {
		sts = await homePage.set_Search_Text(testdata.name);
		await assertion.assertEqual(sts, true, "search text status mismatch");
		sts = await homePage.click_Search_Button();
		await assertion.assertEqual(sts.length, "1", "Book count Mismatch");
	},

	//Validate editing of the activity metadata
	BK_TC_36: async function (testdata) {
		sts = await addActivityPage.set_Name(testdata.name);
		await assertion.assertEqual(sts, true, "Name status mismatch");
		sts = await addActivityPage.click_Completion_Checkbox(testdata.completion);
		await assertion.assertEqual(sts, true, "completion checkbox status mismatch");
		sts = await addActivityPage.click_Score_Checkbox(testdata.scoring);
		await assertion.assertEqual(sts, true, "score checkbox status mismatch");
		sts = await addActivityPage.select_TargetRole(testdata.targetRole);
		await assertion.assertEqual(sts, true, "target role status mismatch");
		sts = await addActivityPage.select_Assignable(testdata.assignable);
		await assertion.assertEqual(sts, true, "assignable status mismatch");
		sts = await addActivityPage.set_Page_Reference(testdata.page);
		await assertion.assertEqual(sts, true, "page reference status mismatch");
		sts = await addActivityPage.select_ActivityTheme(testdata.activityTheme);
		await assertion.assertEqual(sts, true, "activityTheme status mismatch");
		if (testdata.id.includes("category-2") || testdata.id.includes("category-3")) {
			sts = await addActivityPage.uploadFile(testdata.file);
			await assertion.assertEqual(sts, true, "file upload status mismatch");
		}
		sts = await addActivityPage.click_Add_Button();
		await assertion.assertEqual(sts, true, "Add button status mismatch");			
	},

	//Click Preview and Publish button on Component viewer Page
	BK_TC_37: async function () {
		sts = await common.click_PreviewAndPublish_button();
		await assertion.assertEqual(sts.snapshotBtn_isEnabled, true, "Preview and Publish page status mismatch");
	},

	//Click Snapshot on Preview and Publish Component page
	BK_TC_38: async function () {
		sts = await publishComponentPage.click_CreateSnapshot_Button();
		await assertion.assertEqual(sts, true, "Snapshot status mismatch");
	},

	//Click Publish on Preview and Publish Component page
	BK_TC_39: async function () {
		sts = await publishComponentPage.click_Publish_Button();
		await assertion.assertEqual(sts, true, "Publish status mismatch");
	},

	//Click Preview on Preview and Publish Component page
	BK_TC_40: async function () {
		sts = await publishComponentPage.click_Preview_Button();
		await assertion.assertEqual(sts, true, "Preview status mismatch");
		//browser.switchWindow('engage-difusion');
		//const page = require('../../pages/engageExperienceApp/appShell.page');
		//sts = page.getAppShellHeaderData();
		//assertion.assertEqual(sts, "Preview", "Preview status mismatch");
	},

	//Close Preview window
	BK_TC_41: async function () {
		await browser.closeWindow();
		await browser.switchWindow(global.appUrl);
	},

	//Validate that edit folder page opens on clicking the modify options button
	BK_TC_42: async function () {
		sts = await learningPathPage.click_ModifyFolderOptions_Button();
		await assertion.assertEqual(sts, true, "Edit folder page status mismatch");
	},

	//Validate that edit book page opens on clicking the modify options button
	BK_TC_43: async function () {
		sts = await viewBookPage.click_ModifyBook_Button();
		await assertion.assertEqual(sts, true, "Edit book page status mismatch");
	},

	//Validate that edit component page opens on clicking the modify options button
	BK_TC_44: async function () {
		sts = await viewLearningPathPage.click_ModifyCompOptions_Button();
		await assertion.assertEqual(sts, true, "Edit component page status mismatch");
	},

	// Validate that the delete dialog box opens on selecting all items and deleting on the activity page
	BK_TC_45: async function () {
		sts = await learningPathPage.click_SelectAll_And_Click_Delete_Button();
		await assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the selected items?")), "Dialog text mismatch. " + sts);
	},

	//Validate that edit activity page opens on selecting the modify options in the menu
	BK_TC_46: async function (testdata) {
		sts = await viewLearningPathPage.click_Modify_Button_in_ActivityMenu(testdata.name);
		await assertion.assertEqual(sts, true, "Edit activity page status mismatch");
	},

	// launch url and republish native LO
	BK_TC_999: async function (testdata) {
		var action = require('../../core/actionLibrary/baseActionLibrary.js');
		var i, j;
		for (i = 0; i < testdata.length; i++) {
			//browser.url(testdata[i].url);
			sts = await action.click("a[class*=mdc-top-app-bar__title]");
			await assertion.assertEqual(sts, true);
			await browser.pause(5000);
			await this.BK_TC_4(testdata[i].bookName);
			await this.BK_TC_10(testdata[i].component);
			if (testdata[i].folderL1 != "" || testdata[i].folderL1 != undefined) {
				await this.BK_TC_13(testdata[i].folderL1);
			}
			if (testdata[i].folderL2 != "" || testdata[i].folderL2 != undefined) {
				await this.BK_TC_13(testdata[i].folderL2);
			}
			await browser.pause(5000);
			//console.log("url launched...")
			sts = await action.waitForExist("[class*=c-activity-launching],[class*=isBeingEdited]", undefined, true);
			await assertion.assertEqual(sts, true, "Error! Activities in processing state.");
			for (j = 0; j < testdata[i].activity.length; j++) {
				sts = await learningPathPage.click_ActivityAuthor_Button_in_ActivityMenu(testdata[i].activity[j]);
				await assertion.assertEqual(sts, true, "Error in clicking LO: " + sts);
				console.log("activity launched...")
				await browser.pause(5000)
				await browser.switchWindow('paint.backoffice.comprodls.com');
				console.log("switch to editor...")
				sts = await action.waitForClickable("div:nth-child(2) [data-tid=button-saveandreturn]");
				await assertion.assertEqual(sts, true);
				await browser.pause(2000)
				sts = await action.click("div:nth-child(2) [data-tid=button-saveandreturn]");
				await assertion.assertEqual(sts, true);
				await browser.pause(5000)
				console.log("activity saved...")
				await browser.switchWindow(global.appUrl);
				console.log("switch to backoffice...")
				sts = await action.waitForExist("[class*=c-activity-launching],[class*=isBeingEdited]", 60000, true);
				await assertion.assertEqual(sts, true, "Error! Activities in processing state.");
				await browser.pause(2000)
			}
			/*this.BK_TC_42();
			browser.pause(5000)
			sts = action.getValue("[id=page-reference]");
			if (sts != "11") {
				sts = action.setValue("[id=page-reference]", "11");
			}
			else {
				sts = action.setValue("[id=page-reference]", "12");
			}
			sts = action.waitForClickable("[class*=c-save-changes-button]");
			assertion.assertEqual(sts, true);
			browser.pause(2000)
			sts = action.click("[class*=c-save-changes-button]");
			assertion.assertEqual(sts, true, "Error in clicking save button");
			browser.pause(20000)*/
			await this.BK_TC_37();
			await this.BK_TC_38();
			console.log("snapshot created...")
			await this.BK_TC_39();
			console.log("component published...")
			await this.BK_TC_26();
		}

	},


}
