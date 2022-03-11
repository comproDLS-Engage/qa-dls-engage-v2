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
	BK_TC_1: function (testdata) {
		sts = loginPage.isInitialized();
		assertion.assertEqual(sts, true, "Login page status mismatch");
		sts = loginPage.set_UserName(testdata.email);
		assertion.assertEqual(sts, true, "Username status mismatch");
		sts = loginPage.set_Password(testdata.password);
		assertion.assertEqual(sts, true, "Password status mismatch");
		sts = loginPage.click_Login_Button();
		//assertion.assertEqual(sts, testdata.name, "Name mismatch");
		assertion.assertEqual(sts, true, "Home page status mismatch");
	},

	// Validate that add title page opens on clicking the add book button
	BK_TC_2: function (testdata) {
		sts = homePage.click_NewTitle_Button();
		assertion.assertEqual(sts, true, "Add title options status mismatch");
		sts = homePage.select_TitleType_and_Proceed(testdata.type);
		assertion.assertEqual(sts, true, "Add title page status mismatch");
	},

	// Validate that new book is added on entering required details on the add title page
	BK_TC_3: function (testdata) {
		sts = addTitlePage.set_Name(testdata.name);
		assertion.assertEqual(sts, true, "Title status mismatch");
		sts = addTitlePage.upload_CoverImage(testdata.coverImage);
		assertion.assertEqual(sts, true, "Upload cover image status mismatch");
		sts = addTitlePage.set_Description(testdata.description);
		assertion.assertEqual(sts, true, "Description status mismatch");
		sts = addTitlePage.select_bookDesign(testdata.bookDesign);
		assertion.assertEqual(sts, true, "Book Design status mismatch");
		sts = addTitlePage.select_bookVisibility(testdata.visibility);
		assertion.assertEqual(sts, true, "Visibility status mismatch");
		sts = addTitlePage.click_CreateTitle_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Your new Umbrella Product is being setup.")), "Banner messsage mismatch. " + sts);
	},

	// Validate that the view book page is launched on clicking the book card on the home page
	BK_TC_4: function (testdata) {
		sts = homePage.click_Book(testdata.name);
		assertion.assert(sts.includes(testdata.name), "Book title mismatch. " + sts);
		sts = viewBookPage.getBookParamDetails();
		assertion.assertEqual(sts.description, testdata.description, "book description mismatch");
		assertion.assertEqual(sts.bookDesign, testdata.bookDesign, "book design mismatch");
		assertion.assertEqual(sts.visibility, testdata.visibility, "book visibility mismatch");
	},

	// Validate that the delete book dialog box opens on clicking delete button on the components page
	BK_TC_5: function (testdata) {
		sts = viewBookPage.click_DeleteBook_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the Umbrella Product")), "Dialog text mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Dialog text mismatch. " + sts);
	},

	// Validate that the book is deleted on clicking delete button in the dialog box
	BK_TC_6: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assertEqual(sts, "Umbrella Product deleted successfully", "Snackbar messsage mismatch");
	},

	// Validate that user is able to logout of the back office application
	BK_TC_7: function () {
		browser.switchWindow(global.appUrl);
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
		if (testdata.type != "Flipbook") {
			sts = addCompPage.select_LearningPathLevel(testdata.folderLevel);
			assertion.assertEqual(sts, true, "Learning path level status mismatch");
			sts = addCompPage.select_Autonumbering(testdata.autonumbering);
			assertion.assertEqual(sts, true, "Autonumbering status mismatch");
			sts = addCompPage.select_Assignable(testdata.assignable);
			assertion.assertEqual(sts, true, "Assignable status mismatch");
		}
		if (testdata.type == "Bank") {
			sts = addCompPage.select_enableTracking(testdata.enableTracking);
			assertion.assertEqual(sts, true, "enableTracking status mismatch");
		}
		sts = addCompPage.select_CategoryType(testdata.category);
		assertion.assertEqual(sts, true, "Category status mismatch");
		sts = addCompPage.select_TargetRole(testdata.targetRole);
		assertion.assertEqual(sts, true, "Target Role status mismatch");
		sts = addCompPage.select_Visibility(testdata.visibility);
		assertion.assertEqual(sts, true, "Visibility status mismatch");
		sts = addCompPage.click_Add_Button();
		//assertion.assert((typeof sts === "string" && sts.includes("Component \"" + testdata.title + "\" is created")), "Banner messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("Your new Component is being setup.")), "Banner messsage mismatch. " + sts);
	},

	// Validate that the component details page is launched on clicking the component card
	BK_TC_10: function (testdata) {
		sts = viewBookPage.click_Component(testdata.title);
		assertion.assertEqual(sts, true, "Learning Path page status mismatch");
		sts = viewLearningPathPage.getComponentParamDetails();
		if (testdata.type != "Flipbook") {
			assertion.assertEqual(sts.levels, testdata.folderLevel, "component levels mismatch");
			assertion.assertEqual(sts.autonumbering, testdata.autonumbering, "component design mismatch");
			assertion.assertEqual(sts.assignable, testdata.assignable, "component assignable mismatch");
		}
		assertion.assertEqual(sts.category, testdata.category, "component category mismatch");
		assertion.assertEqual(sts.visibility, testdata.visibility, "component visibility mismatch");
		assertion.assertEqual(sts.targetRole, testdata.targetRole, "component targetRole mismatch");
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
		if (testdata.coverImage != "") {
			sts = addFolderPage.upload_CoverImage(testdata.coverImage);
			assertion.assertEqual(sts, true, "Upload cover image status mismatch");
		}
		if (testdata.targetRole != "") {
			sts = addFolderPage.select_TargetRole(testdata.targetRole);
			assertion.assertEqual(sts, true, "Target Role status mismatch");
		}
		if (testdata.assignable != "") {
			sts = addFolderPage.select_Assignable(testdata.assignable);
			assertion.assertEqual(sts, true, "Assignable status mismatch");
		}
		if (testdata.color != "") {
			sts = addFolderPage.set_Folder_Color(testdata.color);
			assertion.assertEqual(sts, true, "Folder color status mismatch");
		}
		if (testdata.page == "") {
			testdata.page = Math.floor(Math.random() * 10);
		}
		sts == addFolderPage.set_Page_Reference(testdata.page);
		assertion.assertEqual(sts, true, "Page reference status mismatch");
		sts = addFolderPage.click_Add_Button();
		//assertion.assert((typeof sts === "string" && sts.includes(testdata.name)), "Snackbar messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("Folder")), "Snackbar messsage mismatch. " + sts);
		assertion.assert((typeof sts === "string" && sts.includes("successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the sub-folder page is launched on clicking the folder on the learning path page
	BK_TC_13: function (testdata) {
		sts = learningPathPage.click_Folder(testdata);
		assertion.assertEqual(sts, true, "Page status mismatch");
	},

	// Validate that add learning object page opens on clicking the add learning object and proceed button
	BK_TC_14: function (testdata) {
		sts = learningPathPage.click_AddActivity_Button();
		assertion.assertEqual(sts, true, "Add learning object options status mismatch");
		sts = learningPathPage.select_ActivityType_and_Proceed(testdata.id);
		assertion.assertEqual(sts, true, "Add activity page status mismatch");
	},

	// Validate that new learning object is added on entering required details on the add learning object page
	BK_TC_15: function (testdata) {
		sts = addActivityPage.set_Name(testdata.name);
		assertion.assertEqual(sts, true, "Name status mismatch");
		if (testdata.id.includes("category-2") || testdata.id.includes("category-3")) {
			sts = addActivityPage.uploadFile(testdata.file);
			assertion.assertEqual(sts, true, "file upload status mismatch");
		}
		sts = addActivityPage.click_Add_Button();
		assertion.assertEqual(sts, true, "Add button status mismatch");
		if (testdata.id == "category-0-option-0")
			browser.switchWindow('paint.backoffice.comprodls.com/');
	},

	// Validate that clicking on the Level 1 breadcrumb launches components page
	BK_TC_16: function (testdata) {
		sts = common.click_Level1Breadcrumb();
		assertion.assertEqual(sts, testdata.name, "Book title mismatch");
	},

	// Validate that the delete component dialog box opens on clicking delete button on the learning path page
	BK_TC_17: function () {
		sts = learningPathPage.click_DeleteComponent_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete component")), "Dialog text mismatch. " + sts);
	},

	// Validate that the component is deleted on clicking delete button in the dialog box
	BK_TC_18: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("is being deleted. This process can take a few seconds to complete.")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete folder dialog box opens on clicking delete button on the activity page
	BK_TC_19: function (testdata) {
		sts = learningPathPage.select_Item_and_Click_Delete(testdata.name);
		assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the selected items?")), "Dialog text mismatch. " + sts);
	},

	// Validate that the folder is deleted on clicking delete button in the dialog box
	BK_TC_20: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Deleted Successfully")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the delete activity dialog box opens on clicking delete button in the activity menu
	BK_TC_21: function (testdata) {
		sts = learningPathPage.click_Delete_Button_in_ActivityMenu(testdata.name);
		assertion.assert((typeof sts === "string" && sts.includes("Are you sure, you want to delete the selected items")), "Dialog text mismatch. " + sts);
	},

	// Validate that the activity is deleted on clicking delete button in the dialog box
	BK_TC_22: function () {
		sts = common.click_confirmDialog_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Deleted Successfully")), "Snackbar messsage mismatch. " + sts);
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
	BK_TC_24: function () {
		sts = common.click_Back_Button();
		assertion.assertEqual(sts, true, "Move to previous page status mismatch");
	},

	// Validate that clicking on the activity launches the activity preview
	BK_TC_25: function (testdata) {
		sts = viewLearningPathPage.click_Activity(testdata);
		assertion.assertEqual(sts, true, "Preview status mismatch");
	},

	// Validate that the form/preview is closed on clicking on the close button
	BK_TC_26: function () {
		sts = common.click_Close_Button();
		assertion.assertEqual(sts, true, "Close form/preview status mismatch");
	},

	// Validate that the generate codes page is launched on clicking generate codes button
	BK_TC_27: function () {
		sts = homePage.click_GenerateCodes_Button();
		assertion.assertEqual(sts, true, "Generate codes page status mismatch");
	},

	// Validate that access code batch is created on entering required details on the generate codes page
	BK_TC_28: function (testdata) {
		sts = generateCodesPage.select_Book(testdata[0].name);
		assertion.assertEqual(sts, true, "Error in selecting book name");
		sts = generateCodesPage.set_BatchName(testdata[1].batchName);
		assertion.assertEqual(sts, true, "Error in setting batch name");
		sts = generateCodesPage.set_StartDate(testdata[1].startDate);
		assertion.assertEqual(sts, true, "Error in setting start date");
		sts = generateCodesPage.set_EndDate(testdata[1].endDate);
		assertion.assertEqual(sts, true, "Error in setting end date");
		sts = generateCodesPage.set_CodeLimit(testdata[1].codeLimit);
		assertion.assertEqual(sts, true, "Error in setting code limit");
		sts = generateCodesPage.click_Generate_Button();
		assertion.assert((typeof sts === "string" && sts.includes("Access Batch and its Codes are generated successfully.")), "Snackbar messsage mismatch. " + sts);
	},

	// Validate that the view access code page is launched on clicking the view codes button on the home page
	BK_TC_29: function (testdata) {
		sts = homePage.click_ViewCodes_Button();
		assertion.assertEqual(sts, true, "Error in clicking view codes button");
		sts = homePage.select_Book_in_ViewCode_Launcher(testdata[0].name);
		assertion.assertEqual(sts, true, "Error in selecting book");
		sts = homePage.select_Batch_in_ViewCode_Launcher(testdata[1].batchName);
		assertion.assertEqual(sts, true, "Error in selecting batch");
		sts = homePage.click_Proceed_Button_in_ViewCode_Launcher();
		assertion.assertEqual(sts.batchName, testdata[1].batchName, "Batch name mismatch");
		assertion.assertEqual(sts.totalAccessCodes, testdata[1].codeLimit, "Total access codes mismatch");
		assertion.assertEqual(sts.batchStatus, testdata[1].status, "Batch status mismatch");
	},

	// Validate that the assessment author app is launched on clicking activity author button in the activity menu
	BK_TC_30: function (testdata) {
		sts = learningPathPage.click_ActivityAuthor_Button_in_ActivityMenu(testdata.name);
		assertion.assertEqual(sts, true, "Error in clicking LO");
	},

	// Validate that the searched LO is displayed on searching the LO in the Library
	BK_TC_31: function (testdata) {
		sts = libraryPage.searchLO_byName(testdata.file);
		assertion.assertEqual(sts, true, "Error in searching LO");
	},

	// Validate that the add activity page appears after selecting the LO and clicking on next button
	BK_TC_32: function (testdata) {
		sts = libraryPage.select_Resource_and_Proceed(testdata.file);
		assertion.assertEqual(sts, true, "Error in searching LO");
	},

	//Validate on clicking Global resources Pill, global resources are filtered out
	BK_TC_33: function () {
		sts = homePage.click_GlobalResources_Pill();
		assertion.assertEqual(sts, true, "Global resources not filtered");

	},

	//Validate on clicking Books Pill, Books are filtered out
	BK_TC_34: function () {
		sts = homePage.click_Books_Pill();
		assertion.assertEqual(sts, true, "Books not filtered");
	},

	//Validate user is able to search a book
	BK_TC_35: function (testdata) {
		sts = homePage.set_Search_Text(testdata.name);
		assertion.assertEqual(sts, true, "search text status mismatch");
		sts = homePage.click_Search_Button();
		assertion.assertEqual(sts.length, "1", "Book count Mismatch");
	},

	//Set Optional fields on Add Learning Object page
	BK_TC_36: function (testdata) {
		sts = addActivityPage.click_Completion_Checkbox();
		assertion.assertEqual(sts, true, "completion checkbox status mismatch");
		sts = addActivityPage.click_Score_Checkbox();
		assertion.assertEqual(sts, true, "score checkbox status mismatch");
		sts = addActivityPage.select_TargetRole(testdata.targetRole);
		assertion.assertEqual(sts, true, "target role status mismatch");
		sts = addActivityPage.select_Assignable(testdata.assignable);
		assertion.assertEqual(sts, true, "assignable status mismatch");
		sts = addActivityPage.set_Page_Reference(testdata.page);
		assertion.assertEqual(sts, true, "page reference status mismatch");
	},

	//Click Preview and Publish button on Component viewer Page
	BK_TC_37: function () {
		sts = common.click_PreviewAndPublish_button();
		assertion.assertEqual(sts.snapshotBtn_isEnabled, true, "Preview and Publish page status mismatch");
	},

	//Click Snapshot on Preview and Publish Component page
	BK_TC_38: function () {
		sts = publishComponentPage.click_CreateSnapshot_Button();
		assertion.assertEqual(sts, true, "Snapshot status mismatch");
	},

	//Click Publish on Preview and Publish Component page
	BK_TC_39: function () {
		sts = publishComponentPage.click_Publish_Button();
		assertion.assertEqual(sts, true, "Publish status mismatch");
	},

	//Click Preview on Preview and Publish Component page
	BK_TC_40: function () {
		sts = publishComponentPage.click_Preview_Button();
		assertion.assertEqual(sts, true, "Preview status mismatch");
		//browser.switchWindow('engage-difusion');
		//const page = require('../../pages/engageExperienceApp/appShell.page');
		//sts = page.getAppShellHeaderData();
		//assertion.assertEqual(sts, "Preview", "Preview status mismatch");
	},

	//Close Preview window
	BK_TC_41: function () {
		browser.closeWindow();
		browser.switchWindow(global.appUrl);
	},

	//Validate that edit folder page opens on clicking the modify options button
	BK_TC_42: function () {
		sts = learningPathPage.click_ModifyFolderOptions_Button();
		assertion.assertEqual(sts, true, "Edit folder page status mismatch");
	},

	// launch url and republish native LO
	BK_TC_999: function (testdata) {
		var action = require('../../core/actionLibrary/baseActionLibrary.js');
		var i, j;
		for (i = 0; i < testdata.length; i++) {
			//browser.url(testdata[i].url);
			sts = action.click("a[class*=mdc-top-app-bar__title]");
			assertion.assertEqual(sts, true);
			browser.pause(5000);
			this.BK_TC_4(testdata[i].bookName);
			this.BK_TC_10(testdata[i].component);
			if (testdata[i].folderL1 != "" || testdata[i].folderL1 != undefined) {
				this.BK_TC_13(testdata[i].folderL1);
			}
			if (testdata[i].folderL2 != "" || testdata[i].folderL2 != undefined) {
				this.BK_TC_13(testdata[i].folderL2);
			}
			browser.pause(5000);
			//console.log("url launched...")
			sts = action.waitForExist("[class*=c-activity-launching],[class*=isBeingEdited]", undefined, true);
			assertion.assertEqual(sts, true, "Error! Activities in processing state.");
			for (j = 0; j < testdata[i].activity.length; j++) {
				sts = learningPathPage.click_ActivityAuthor_Button_in_ActivityMenu(testdata[i].activity[j]);
				assertion.assertEqual(sts, true, "Error in clicking LO: " + sts);
				console.log("activity launched...")
				browser.pause(5000)
				browser.switchWindow('paint.backoffice.comprodls.com');
				console.log("switch to editor...")
				sts = action.waitForClickable("div:nth-child(2) [data-tid=button-saveandreturn]");
				assertion.assertEqual(sts, true);
				browser.pause(2000)
				sts = action.click("div:nth-child(2) [data-tid=button-saveandreturn]");
				assertion.assertEqual(sts, true);
				browser.pause(5000)
				console.log("activity saved...")
				browser.switchWindow(global.appUrl);
				console.log("switch to backoffice...")
				sts = action.waitForExist("[class*=c-activity-launching],[class*=isBeingEdited]", 60000, true);
				assertion.assertEqual(sts, true, "Error! Activities in processing state.");
				browser.pause(2000)
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
			this.BK_TC_37();
			this.BK_TC_38();
			console.log("snapshot created...")
			this.BK_TC_39();
			console.log("component published...")
			this.BK_TC_26();
		}

	},


}
