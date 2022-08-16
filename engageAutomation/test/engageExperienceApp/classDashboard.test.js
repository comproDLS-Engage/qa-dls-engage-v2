"use strict";
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var successClassPage = require('../../pages/engageExperienceApp/successClass.page.js');
const dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var calender = require('../../pages/engageExperienceApp/calender.page.js');
var classDrawerpage = require('../../pages/engageExperienceApp/classDrawer.page.js');
var gradeBookPage = require('../../pages/engageExperienceApp/gradeBook.page.js');
var assignmentPage = require('../../pages/engageExperienceApp/assignmentListTeacher.page.js');
const teacherViewClassPage = require('../../pages/engageExperienceApp/teacherViewClass.page.js');
const { confirmPassword_input } = require('../../pages/engageExperienceApp/settings.page.js');
var sts;
module.exports = {



	//Validate the content (in english) of the My Classes Page if instructor has not created any Class.
	ENG_INS_CLASS_TC_1: async function (testdata) {
		sts = await classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.noClassSubtitle, testdata.noClassSubtitle, "Class Subtitle Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noClassTitle, testdata.noClassTitle, "Class title Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noClassFound_icon, true, "Class Icon Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.archivedTab, sts.archivedTab, "Archived Tab is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.activeTab, testdata.activeTab, "MyClass Tab is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + (await JSON.stringify(sts)))
			//await assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
			//await assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
		} else {
			await assertion.assertFail(sts);
		}
		sts = await classDashboardPage.click_Archived_Tab();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageTitleNoClassArchived, testdata.pageTitleNoClassArchived, "Page title Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageSubTitleNoClassArchived, testdata.pageSubTitleNoClassArchived, "Page Subtitle Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageIconNoClassArchived, true, "Page Icon Not Displayed: " + (await JSON.stringify(sts)))
		}
		else {
			await assertion.assertFail(sts);
		}

	},

	//Validate the content (in english) of the My Classes Page if instructor has created Classes.
	ENG_INS_CLASS_TC_2: async function (testdata) {
		sts = await classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.classHeading, testdata.classHeading, "Archived Tab is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classSubHeading, testdata.classSubHeading, "Archived Tab is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.activeTab, testdata.activeTab, JSON.stringify(sts))
			await assertion.assertEqual(sts.archivedTab, testdata.archivedTab, "Archived Tab is mismatched: " + (await JSON.stringify(sts)))
			//this assertion is desktop only
			//assertion.assertEqual(sts.addClassBtn, testdata.addClassBtn, JSON.stringify(sts))
			await assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[1].menuBtnExists, true, JSON.stringify(sts))
			await assertion.assertEqual(sts.classList[1].bookIconExists, true, JSON.stringify(sts))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the content (in english) of the Archive Page (blank page)
	ENG_INS_CLASS_TC_3: async function (testdata) {
		sts = await classDashboardPage.isInitialized();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.classHeading, testdata.classHeading, JSON.stringify(sts))
			await assertion.assertEqual(sts.classSubHeading, testdata.classSubHeading, JSON.stringify(sts))
			await assertion.assertEqual(sts.activeTab, testdata.activeTab, JSON.stringify(sts))
			await assertion.assertEqual(sts.archivedTab, testdata.archivedTab, "Archived Tab is mismatched: " + (await JSON.stringify(sts)))
			//this assertion is desktop only
			//	assertion.assertEqual(sts.addClassBtn, testdata.addClassBtn, JSON.stringify(sts))
			await assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + (await JSON.stringify(sts)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that My Classes tab option shows all classes 
	ENG_INS_CLASS_TC_4: async function (testdata) {
		sts = await classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].className, testdata[0].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].bookName, testdata[0].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].className, testdata[1].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].bookName, testdata[1].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].classDuration, testdata[1].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that Archived page lauched after clicking on archive tab
	ENG_INS_CLASS_TC_5: async function (testdata) {
		sts = await classDashboardPage.click_Archived_Tab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + (await JSON.stringify(sts)))
		}
		else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that Create Class page is launched on clicking create class button
	ENG_INS_CLASS_TC_6: async function () {
		sts = await classDashboardPage.click_CreateClass_Button();
		if ((typeof (sts)) === "object") {

			await assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that clicking on menu button on a class card displays available menu options
	ENG_INS_CLASS_TC_8: async function (testdata) {
		sts = await classDashboardPage.click_MoreOptions_Button(testdata[0].name);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.inboxOption_txt, testdata[1].inboxOption_txt, "Inbox button is Not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.assignmentsOption_txt, testdata[1].assignmentsOption_txt, "Assignment button is Not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentsOption_txt, testdata[1].studentsOption_txt, "Add Student button is Not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.gradeBookOption_txt, testdata[1].gradeBookOption_txt, "GradeBook button is displayed: " + (await JSON.stringify(sts.status)))
			await assertion.assertEqual(sts.materialsOption_txt, testdata[1].materialsOption_txt, "Material button is displayed: " + (await JSON.stringify(sts.status)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that on clicking a Class card on the My Classes Page, Class Dashboard is launched for that class
	ENG_INS_CLASS_TC_7: async function (testdata) {
		sts = await classDashboardPage.click_ClassCard(testdata)
		await assertion.assertEqual(sts, true, "Class Details page is not launched", sts.pageStatus)
		sts = await teacherViewClassPage.isInitialized();
		await assertion.assertEqual(sts, true, "Class Deatails page is not launched" + (await JSON.stringify(sts.pageStatus)))

	},


	//Validate that clicking on Edit Class option from Class Menu launches Edit Class Workflow
	ENG_INS_CLASS_TC_9: async function (testdata) {
		sts = await teacherViewClassPage.clickClassOptionsButton()
		await assertion.assertEqual(sts.editClassBtn, testdata[1].editOption_txt, "Edit button is Not displayed: " + (await JSON.stringify(sts)))
		sts = await teacherViewClassPage.clickEditbtn();

		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Edit Class Page is not displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},

	//rupsi
	//Validate that clicking on inbox option from Class Menu launches class details page with inbox tab selected
	ENG_INS_CLASS_TC_10: async function (testdata) {
		sts = await classDashboardPage.click_inboxOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assert(sts.selectedProduct.includes(testdata.inboxOption_txt), "Inbox Page is not displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Student option from Class Menu launches class details page with Student tab selected
	ENG_INS_CLASS_TC_11: async function (testdata) {
		sts = await classDashboardPage.click_studentsOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.selectedProduct, testdata.studentsOption_txt, "Add Student Page is not displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Assignment option from Class Menu launches class details page with Assignment tab selected
	ENG_INS_CLASS_TC_12: async function (testdata) {
		sts = await classDashboardPage.click_assignmentsOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.selectedProduct, testdata.assignmentsOption_txt, "Assignment Page is not displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the content (in english) of the Create Class Page
	ENG_INS_CLASS_TC_13: async function (testdata) {
		sts = await createClassPage.isInitialized()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page Title Text Mismatch: " + (await JSON.stringify(sts.pageTitle)))
			await assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subTitle Text Mismatch: " + (await JSON.stringify(sts.pageSubTitle)))
			await assertion.assertEqual(sts.classHeader, testdata.classHeader, "Class Header Text Mismatch: " + (await JSON.stringify(sts.classHeader)))
			await assertion.assertEqual(sts.classSubHeader, testdata.classSubHeader, "Class Sub Header Text Mismatch: " + (await JSON.stringify(sts.classSubHeader)))
			await assertion.assertEqual(sts.title_lbl, testdata.title_lbl, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
			await assertion.assertEqual(sts.title_txtbox, "", "Name InputBox Text Mismatch: " + (await JSON.stringify(sts.title_txtbox)))
			await assertion.assertEqual(sts.startDate_lbl, testdata.startDate_lbl, "StartDate Label Text Mismatch: " + (await JSON.stringify(sts.startDate_lbl)))
			await assertion.assertEqual(sts.endDate_lbl, testdata.endDate_lbl, "EndDate Label Text Mismatch: " + (await JSON.stringify(sts.endDate_lbl)))
			await assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + (await JSON.stringify(sts.selectBook_lbl)))
			await assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + (await JSON.stringify(sts.selectBook_txt)))
			await assertion.assertEqual(sts.createBtn_txt, testdata.createBtn_txt, "Create button Text Mismatch: " + (await JSON.stringify(sts.createBtn_txt)))
			await assertion.assertEqual(sts.cancelBtn_txt, testdata.cancelBtn_txt, "Cancel button Text Mismatch: " + (await JSON.stringify(sts.cancelBtn_txt)))
		} else {
			await assertion.assertFail(sts);
		}

	},

	//Validate class cannot be created if Class name field is left blank.
	ENG_INS_CLASS_TC_14: async function (testdata) {
		sts = await createClassPage.set_ClassName("");
		await assertion.assertEqual(sts, "", JSON.stringify(sts))
		sts = await createClassPage.click_Create_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.titleErrorMsg, testdata.notitleErrorMsg, "Title error message is mismatched" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that class cannot be created if Class name field contains more than 50 characters.
	ENG_INS_CLASS_TC_15: async function (testdata) {
		sts = await createClassPage.set_ClassName(testdata[0].name);
		await assertion.assertEqual(sts, testdata[0].name, "Class Name is mismatched" + (await JSON.stringify(sts)))
		sts = await createClassPage.click_Create_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.titleErrorMsg, testdata[1].titleErrorMsg, "Title error message is mismatched" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that instructor is able to create a Class with 50 alphanumeric characters
	ENG_INS_CLASS_TC_16: async function (testdata) {
		sts = await createClassPage.set_ClassName(testdata.name);
		await assertion.assertEqual(sts, testdata.name, "Class Name is mismatched" + (await JSON.stringify(sts)))
	},
	//Validate that instructor is able to create a Class with special characters
	ENG_INS_CLASS_TC_17: async function (testdata) {
		sts = await createClassPage.set_ClassName(testdata.name);
		await assertion.assertEqual(sts, testdata.name, "Class Name is mismatched" + (await JSON.stringify(sts)))
	},

	//Update the start date of a class for next week
	ENG_INS_CLASS_TC_18: async function () {
		sts = await createClassPage.click_StartDate_Button()
		await assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = await calender.isInitialized()
		await assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + (await JSON.stringify(sts)))
		var currentDate = await calender.getCurrentDate();
		await calender.selectDate(parseInt(currentDate) + 15);
		await calender.clickOkBtn()
	},

	//Validate that the My Classes page appears if user click on the cancel and go back button on Create Class Page
	ENG_INS_CLASS_TC_19: async function () {
		sts = await createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Update the end date of a class for next week
	ENG_INS_CLASS_TC_20: async function () {
		sts = await createClassPage.click_EndDate_Button()
		await assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = await calender.isInitialized()
		await assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + (await JSON.stringify(sts)))
		var currentDate = await calender.getCurrentDate();
		await calender.selectDate(parseInt(currentDate) + 15);
		await calender.clickOkBtn()
	},
	//Validate the functionality of create button on Create Class Page.
	ENG_INS_CLASS_TC_21: async function (testdata) {
		sts = await createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Success Class Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))
			await assertion.assert(sts.className_txt.includes(testdata[1].name), "Success Class Page class text mismatch ")

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the content of the Create Class Success Page
	ENG_INS_CLASS_TC_22: async function (testdata) {
		sts = await successClassPage.isInitialized();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch: " + (await JSON.stringify(sts.pageTitle)))
			await assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page subTitle Text Mismatch: " + (await JSON.stringify(sts.pageSubTitle)))
			await assertion.assert(sts.className_txt.includes(testdata[1].name), "Class Name Text Mismatch: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.viewClassbtn, testdata[0].viewClassbtn, "View Class btn Mismatch: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.backToHomeBtn_txt, testdata[0].backToHomeBtn_txt, "BscktoHome btn Text Mismatch: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.successCaption_txt, testdata[0].successCaption_txt, "Success Caption Text Mismatch: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.copy_txt, testdata[0].copy_txt, "Copy Text Mismatch: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.copy_btn, true, "Copy btn Mismatch: " + (await JSON.stringify(sts)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that the class dashboard is launched on clicking the View Class button on success page
	//check how to use in execution file
	ENG_INS_CLASS_TC_23: async function () {
		sts = await successClassPage.click_ViewClass_Button()
		await assertion.assertEqual(sts, true, "Dashboard Page status mismatch ")

	},

	//Validate that the My Classes page is launched on clicking Close button on success page
	ENG_INS_CLASS_TC_24: async function () {
		sts = await successClassPage.click_Close_Button()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//rupsi	
	//Validate that class cannot be created if user has not selected any Book
	ENG_INS_CLASS_TC_27: async function (testdata) {
		sts = await createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message Mismatch: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//rupsi	
	//Future Class: Validate that the Instructor Dashboard for future Class is launched on clicking the future Class.
	ENG_INS_CLASS_TC_32: async function (testdata) {
		sts = await classDashboardPage.click_MoreOptions_Button(testdata[0].class[0].name)
		await assertion.assertEqual(sts.viewClassText, testdata[1].viewClassText, "View Class button is Not displayed: " + (await JSON.stringify(sts)))
		sts = await classDashboardPage.click_ViewClass_Button(testdata[0].role);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "dashboard Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate the content (in english) of the Edit Class Page
	ENG_INS_CLASS_TC_33: async function (testdata) {
		sts = await createClassPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page Title Text Mismatch: " + (await JSON.stringify(sts.pageTitle)))
			await assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subTitle Text Mismatch: " + (await JSON.stringify(sts.pageSubTitle)))
			await assertion.assertEqual(sts.classHeader, testdata.classHeader, "Class Header Text Mismatch: " + (await JSON.stringify(sts.classHeader)))
			await assertion.assertEqual(sts.classSubHeader, testdata.classSubHeader, "Class Sub Header Text Mismatch: " + (await JSON.stringify(sts.classSubHeader)))
			await assertion.assertEqual(sts.title_lbl, testdata.title_lbl, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
			await assertion.assertEqual(sts.startDate_lbl, testdata.startDate_lbl, "StartDate Label Text Mismatch: " + (await JSON.stringify(sts.startDate_lbl)))
			await assertion.assertEqual(sts.endDate_lbl, testdata.endDate_lbl, "EndDate Label Text Mismatch: " + (await JSON.stringify(sts.endDate_lbl)))
			await assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + (await JSON.stringify(sts.selectBook_lbl)))
			await assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + (await JSON.stringify(sts.selectBook_txt)))
			await assertion.assertEqual(sts.saveBtn_txt, testdata.saveBtn_txt, "Save button Text Mismatch: " + (await JSON.stringify(sts.createBtn_txt)))
			await assertion.assertEqual(sts.cancelBtn_txt, testdata.cancelBtn_txt, "Cancel button Text Mismatch: " + (await JSON.stringify(sts.cancelBtn_txt)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that the class details are updated on clicking the save button on Edit Class Page
	ENG_INS_CLASS_TC_34: async function (testdata) {
		sts = await createClassPage.click_Save_Button();
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.msg, testdata.editMsgBar_txt, "Message Bar Not Displayed: " + (await JSON.stringify(sts.msg)))
			//assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that the instructor My Classes page is launched on clicking Cancel and Go Back button on the Edit Class Page
	ENG_INS_CLASS_TC_35: async function () {
		sts = await createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that Class Name cannot be modified as blank.
	ENG_INS_CLASS_TC_36: async function (testdata) {
		sts = await createClassPage.set_ClassName("");
		await assertion.assertEqual(sts, "", "Title text mismatch " + (await JSON.stringify(sts)))
		sts = await createClassPage.click_Save_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.titleErrorMsg, testdata.notitleErrorMsg, "Title Error Message Text Mismatch: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that Class name can be updated with less than 50 characters.
	ENG_INS_CLASS_TC_37: async function (testdata) {
		sts = await createClassPage.set_ClassName(testdata.name);
		await assertion.assertEqual(sts, testdata.name, "Title text mismatch " + (await JSON.stringify(sts)))

	},
	//Validate the Close button of class drwaer Pane
	ENG_INS_CLASS_TC_31: async function () {
		sts = await classDrawerpage.Click_classDrawerCloseBtn();
		await assertion.assertEqual(sts, true, "Close Drawer is not clicked: " + (await JSON.stringify(sts)))
		//sts = dashboardPage.isInitialized();
		//assertion.assertEqual(sts.pageStatus, true, "Dashboard Page not launched: " + JSON.stringify(sts))
	},
	//Validate the class drwaer Pane when no class is added
	ENG_INS_CLASS_TC_38: async function (testdata) {
		sts = await classDrawerpage.isInitialized();
		await assertion.assertEqual(sts.classDrawerHeader, testdata[1] + testdata[0].header, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDashboardData.classHeading, testdata[0].classHeading, "Page Title Text Mismatch: " + (await JSON.stringify(sts.pageTitle)))
		await assertion.assertEqual(sts.classDashboardData.noClassFound_icon, true, "Page Icon Mismatch: " + (await JSON.stringify(sts.pageSubTitle)))
		await assertion.assertEqual(sts.classDashboardData.noClassTitle, testdata[0].noClassTitle, "Page Header Text Mismatch: " + (await JSON.stringify(sts.classHeader)))
		await assertion.assertEqual(sts.classDashboardData.noClassSubtitle, testdata[0].noClassSubtitle, "Page Sub Header Text Mismatch: " + (await JSON.stringify(sts.classSubHeader)))
		await assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata[0].addClassBtn, "Page Class add btn text is mismatch: " + (await JSON.stringify(sts.title_lbl)))
	},
	//Validate the class drwaer Pane when  class is added
	ENG_INS_CLASS_TC_39: async function (testdata) {
		sts = await classDrawerpage.isInitialized();
		await assertion.assertEqual(sts.classDrawerHeader, testdata[1] + testdata[0].header, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDrawerTitle, testdata[0].classDrawerTitle, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Close btn Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDrawerSubTitle, testdata[0].classDrawerSubTitle, "Class SubTitle Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		await assertion.assertEqual(sts.classDashboardData.classHeading, testdata[0].classHeading, "Page Title Text Mismatch: " + (await JSON.stringify(sts.pageTitle)))
		await assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata[0].addClassBtnwithClass, "Add Class button Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))


	},
	//rupsi		
	//Edit Class -Validate that the error message appears if user delete the book and click on Save button to save the class
	ENG_INS_CLASS_TC_40: async function (testdata) {
		sts = await createClassPage.clickdeleteBook();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message mismatch " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate book is by default selected
	ENG_INS_CLASS_TC_41: async function () {
		sts = await createClassPage.isInitialized();
		await assertion.assertEqual(sts.bookIcon, true, "Book is already displayed: " + (await JSON.stringify(sts.pageStatus)))
		sts = await createClassPage.checkbookAvaibility();
		//console.log(sts)
		if ((sts) == "alreadySelected") {
			sts = true;
		}
		await assertion.assertEqual(sts, true, "Book is not selected on page: " + (await JSON.stringify(sts.pageStatus)))

	},
	//Click on add book button and Validate the book is added in the class
	ENG_INS_CLASS_TC_42: async function () {
		sts = await createClassPage.click_AddANewBook_Button();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Add book page is not launched: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
		/*		
				sts = addBookPage.click_addBook("PROYECTOS");
				sts=addBookPage.click_AddtoClass_Button();
				assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))
				*/

	},

	//Validate the class drawer Pane for student when  class is added
	ENG_INS_CLASS_TC_43: async function (testdata) {
		sts = await classDrawerpage.isInitialized();
		await assertion.assertEqual(sts.classDrawerHeader, "PROYECTOS" + testdata.header, "Class Title Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		//assertion.assertEqual(sts.classDrawerTitle, testdata.classDrawerTitle, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		await assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Close btn Text Mismatch: " + (await JSON.stringify(sts.title_lbl)))
		//assertion.assertEqual(sts.classDrawerSubTitle, testdata.classDrawerSubTitle, "Class SubTitle Text Mismatch: " + JSON.stringify(sts.title_lbl))
		//	assertion.assertEqual(sts.classDashboardData.classHeading, testdata.classHeading, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
		//	assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata.addClassBtnwithClass, "Add Class button Text Mismatch: " + JSON.stringify(sts.title_lbl))


	},
	// Validate book details is launched after clicking on View Book button

	ENG_INS_CLASS_TC_44: async function () {
		sts = await teacherViewClassPage.clickViewBookbtn()
		await assertion.assertEqual(sts.pageStatus, true, "View book page status mismatch");
		await assertion.assertEqual(sts.appShell.header, true, "View book page header status mismatch");
	},
	//rupsi	
	//Class Restore - Validate the end date of class increase set for next year before restore.
	ENG_INS_CLASS_TC_98: async function () {
		sts = await createClassPage.click_EndDate_Button()
		await assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = await calender.isInitialized()
		await assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + (await JSON.stringify(sts)))
		await calender.clickCurrentYear();
		await calender.selectUpcomingYear(2);
		await calender.clickOkBtn()

	},
	//Click on student tab and validate student tab is selected
	ENG_INS_CLASS_TC_99: async function (testdata) {
		sts = await teacherViewClassPage.clickStudentsTab()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageData.selectedProduct, "Students", "Student Tab is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}

	},

	//Validate that score is coming for anchord book class students  
	ENG_INS_CLASS_TC_100: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getStudentPageData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentAvgScore, testdata[0].AvgScore, "Student AvgScore is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentCompletionScore, testdata[0].CompletionScore, "Student CompletionScore is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}

	},
	//Validate that score is not coming for non-anchord book class students  
	ENG_INS_CLASS_TC_101: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getStudentPageData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].viewProgressbtn, true, "Student viewProgressbtn is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].viewMessagebtn, true, "Student viewMessagebtn is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	// Validate the page when no student is added 
	ENG_INS_CLASS_TC_102: async function (testdata) {
		sts = await teacherViewClassPage.getStudentPageData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.noStudentSubTitle, testdata.noStudentSubTitle, "Student Title is not matched" + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noStudentTitle, testdata.noStudentTitle, "Student subTitle is not mismatched " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noStudentIcon, true, "Student viewProgressbtn is not mismatched " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the click on Assignment Tab on class details page
	ENG_INS_CLASS_TC_103: async function (testdata) {
		sts = await teacherViewClassPage.clickAssignmentsTab()
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Assignment Tab is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}

	},
	//Click GradeBok btn on the class details page
	ENG_INS_CLASS_TC_104: async function () {
		sts = await teacherViewClassPage.clickGradeBookbtn();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "gradebook page is not displayed" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Click on the view progress button
	ENG_INS_CLASS_TC_105: async function () {
		sts = await classDashboardPage.click_viewProgress();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Progress page is not displayed " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Mobile: Validate that score is coming for anchord book class students  
	ENG_INS_CLASS_TC_106: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getStudentPageData()
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentAvgScore, testdata[0].AvgScore, "Student AvgScore is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentCompletionScore, testdata[0].CompletionScore, "Student CompletionScore is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + JSON.stringify(sts))

		} else {
			await assertion.assertFail(sts);
		}

	},
	//Mobile: Validate that score is not coming for non-anchord book class students  
	ENG_INS_CLASS_TC_107: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getStudentPageData()
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + JSON.stringify(sts))
			//await	assertion.assertEqual(sts.studentData[0].viewProgressbtn, true, "Student viewProgressbtn is not mismatched " + JSON.stringify(sts))
			//assertion.assertEqual(sts.studentData[0]. viewMessagebtn, true, "Student viewMessagebtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + JSON.stringify(sts))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that Content of class details page
	ENG_INS_CLASS_TC_108: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getViewClassPageData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.className, testdata[0].name, "Class Name is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.classDuration, testdata[0].classDuration, "classDuration is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.gradebookBtn, testdata[1].gradebookBtn, "gradebookBtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.bookCoverImg, true, "bookCoverImg is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.classOptionsBtn_exists, true, "classOptionsBtn_exists is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.gradebookBtn, testdata[1].gradebookBtn, "gradebookBtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.bookTitleTxt, testdata[0].bookName, "bookTitleTxt is not mismatched " + JSON.stringify(sts))
			//await assertion.assertEqual(sts.bookSubtitleTxt, testdata[0].bookSubtitleTxt, "bookSubtitleTxt is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.viewBookBtn, testdata[1].viewBookBtn, "classDuration is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.usingClasses_lbl, testdata[1].usingClasses_lbl, "usingClasses_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.usingClassesByline_lbl, testdata[1].usingClassesByline_lbl, "usingClassesByline_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.inviteStudents_btn, testdata[1].inviteStudents_btn, "inviteStudents_btn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.createAssignments_btn, testdata[1].createAssignments_btn, "createAssignments_btn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.createAssignment_lbl, testdata[1].createAssignment_lbl, "createAssignment_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.createAssignmentByline_lbl, testdata[1].createAssignmentByline_lbl, "createAssignmentByline_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.noInboxActivity_lbl, testdata[1].noInboxActivity_lbl, "noInboxActivity_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.noInboxActivityByline_lbl, testdata[1].noInboxActivityByline_lbl, "noInboxActivity_lbl is not mismatched " + JSON.stringify(sts))

			await assertion.assertEqual(sts.inviteStudentsdropDown_btn, testdata[1].inviteStudentsdropDown_btn, "inviteStudentsdropDown_btn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.inviteStudents_lbl, testdata[1].inviteStudents_lbl, "inviteStudents_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.inviteStudentsByline_lbl, testdata[1].inviteStudentsByline_lbl, "inviteStudentsByline_lbl is not mismatched " + JSON.stringify(sts))

		} else {
			await assertion.assertFail(sts);
		}

	},
	// Validate book Content on the class details page
	ENG_INS_CLASS_TC_109: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getViewClassPageData()
		console.log(sts)
		console.log(sts.bookComponentList.length)
		if ((typeof (sts)) === "object") {
			for (var i = 0; i < sts.bookComponentList.length - 1; i++) {
				await assertion.assertEqual(sts.bookComponentList[i].bookComponentData, testdata[0].component[i].name.EN, "Name is not mismatched " + JSON.stringify(sts))
				console.log(testdata[0].component[i].type)
				if ((testdata[0].component[i].type) === 'LP1') {
					await assertion.assertEqual(sts.bookComponentList[i].bookComponentUnits, testdata[0].component[i].unit.length + " " + testdata[1].bookComponentUnits, "bookComponentUnits is not mismatched " + JSON.stringify(sts))
					await assertion.assertEqual(sts.bookComponentList[i].bookComponentActivities, testdata[0].component[i].activityCount + " " + testdata[1].bookComponentActivities, "bookComponentActivities is not mismatched " + JSON.stringify(sts))
				}
				/*	else {
	
						await assertion.assertEqual(sts.bookComponentList[i].bookComponentUnits, testdata[0].component[i].activityCount + " " + testdata[1].resources, "bookComponentActivities is not mismatched " + JSON.stringify(sts))
					}*/
			}
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that clicking on gradebook option from Class Menu launches class details page with inbox tab selected
	ENG_INS_CLASS_TC_110: async function () {
		sts = await classDashboardPage.click_gradeBookOption();
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "GradeBook Page is not displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Material option from Class Menu launches class details page with inbox tab selected
	ENG_INS_CLASS_TC_111: async function (testdata) {
		sts = await classDashboardPage.click_materialsOption();
		await assertion.assertEqual(sts, true, "materialsOption is clicked");
		sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
		await assertion.assert(sts, testdata, "Snackbar message mismatch: " + sts);
	},
	//Validate that searching can be done on basis of Class name
	ENG_INS_CLASS_TC_112: async function (testdata) {
		sts = await classDashboardPage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await classDashboardPage.getData_searchList();
		await assertion.assertEqual(sts.searchList[0], testdata[0].expected_txt, "Class Name Text Mismatch in Dropdown")

		sts = await classDashboardPage.pressEnter();
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch");


		sts = await classDashboardPage.get_MyClasses_Data();// copy from tc 4
		await assertion.assertEqual(sts.classList[0].className, testdata[0].expected_txt, "Class Name is mismatched: " + (await JSON.stringify(sts)))
		await assertion.assertEqual(sts.classList[0].bookIconExists, true, "bookImage status Mismatch");

	},

	//Validate that No Result Found is displayed in the drop down suggestion and in the screen when no Class matching the search criteria is fulfilled
	ENG_INS_CLASS_TC_113: async function (testdata) {
		sts = await classDashboardPage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await classDashboardPage.getData_searchList();
		await assertion.assertEqual(sts.noResultListItemTitle, testdata[1].noResultListItemTitle, "noResultListItemTitle text Mismatch")
		await assertion.assertEqual(sts.noResultListItemSubtitle, testdata[1].noResultListItemSubtitle, "noResultListItemSubtitle text Mismatch")

		sts = await classDashboardPage.pressEnter();
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch: expected " + sts.searchCount + " to equal " + testdata[0].searchCount + testdata[1].searchCount);

		sts = await classDashboardPage.getData_searchNoResults();
		await assertion.assertEqual(sts.search_NoResult_img, testdata[1].search_NoResult_img, "search_NoResult_img status Mismatch");
		await assertion.assertEqual(sts.search_NoResult_title, testdata[1].search_NoResult_title, "search_NoResult_title text Mismatch");
		await assertion.assertEqual(sts.search_NoResult_subTitle, testdata[1].search_NoResult_subTitle, "search_NoResult_subTitle text Mismatch");

	},

	//Validate that clicking on a class from the search suggestion drop down list launches the class.
	ENG_INS_CLASS_TC_114: async function (testdata) {
		sts = await classDashboardPage.set_searchBox(testdata.search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");
		sts = await classDashboardPage.getData_searchList();
		await assertion.assertEqual(sts.searchList[0], testdata.expected_txt, "Class Name Text Mismatch in Dropdown")
		sts = await classDashboardPage.click_searchList(testdata.expected_txt);
		await assertion.assertEqual(sts, true, "Class status mismatch");
	},

	//Validate that clicking on "More search results for ..xyz" lists the resources based on search text.
	ENG_INS_CLASS_TC_115: async function (testdata) {
		sts = await classDashboardPage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await classDashboardPage.getData_searchList()
		await assertion.assertEqual(sts.searchList[0], testdata[0].expected_txt, "Resource Name Text Mismatch in Dropdown")

		sts = await classDashboardPage.click_showMoreResults()
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch");
		if (sts.tabInfo.selected == sts.tabInfo.list[0]) {
			sts = await classDashboardPage.get_MyClasses_Data();// copy from tc 4
			await assertion.assertEqual(sts.classList[0].className, testdata[1].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].bookName, testdata[1].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].classDuration, testdata[1].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))

		}

	},

	//Validate that clicking on close search button removes the search criteria
	ENG_INS_CLASS_TC_116: async function () {
		sts = await classDashboardPage.click_clearSearch();
		await assertion.assertEqual(sts.searchPill, null, "searchPill status Mismatch");
	},

	//Validate the Review Pane content validation on inbox tab of dashboard
	ENG_INS_CLASS_TC_117: async function (testdata) {
		sts = await teacherViewClassPage.getViewClassPageData()
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.reviewBox_Title, testdata.reviewBox_Title, "reviewBox_Title is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.reviewBox_SubTitle, testdata.reviewBox_SubTitle, "reviewBox_SubTitle Status is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.reviewBox_Cancelbtn, true, "reviewBox_Cancelbtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.reviewBox_icon, true, "reviewBox_icon Status is not mismatched " + JSON.stringify(sts))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the student card on inbox tab of dashboard
	ENG_INS_CLASS_TC_118: async function (testdata) {
		sts = await teacherViewClassPage.getData_activityGradeCard(testdata[0].activityName)
		console.log(sts)
		console.log(testdata[0])
		console.log(testdata[0].studentName)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts[0].assignmentCardStudentName, testdata[0].studentName, "assignmentCardStudentName is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts[0].assignmentCardActivityText, testdata[1].assignmentCardActivityText, "assignmentCardActivityText Status is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts[0].assignmentCardActivityDate, testdata[0].time, "assignmentCardActivityDate is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts[0].assignmentCardActivityName, testdata[0].activityName, "assignmentCardActivityName Status is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts[0].assignmentCardUnitName, testdata[0].unitName, "assignmentCardUnitName Status is not mismatched " + JSON.stringify(sts))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate the Review Pane cancel button  on inbox tab of dashboard
	ENG_INS_CLASS_TC_119: async function (testdata) {
		sts = await teacherViewClassPage.click_reviewBox_Cancelbtn()
		console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.reviewBox_Title, null, "reviewBox_Title is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.reviewBox_SubTitle, null, "reviewBox_SubTitle Status is not mismatched " + JSON.stringify(sts))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate the Click on Activity Card  on inbox tab of dashboard
	ENG_INS_CLASS_TC_120: async function (testdata) {
		sts = await teacherViewClassPage.click_assignmentCardActivityName(testdata)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Open activity player grading page is not Launched ")
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate default launch of Archive class tab when a class is present
	ENG_INS_CLASS_TC_121: async function (testdata) {
		sts = await classDashboardPage.isInitialized()
		// console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.archivedlbl, testdata[1].archivedlbl, "Archived Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[1].className, testdata[0].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[1].bookName, testdata[0].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[1].classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))


		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that Content of Archived class details page 
	ENG_INS_CLASS_TC_122: async function (testdata) {
		//console.log(testdata)
		sts = await teacherViewClassPage.getViewClassPageData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.className, testdata[0].name, "Class Name is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.classDuration, testdata[0].classDuration, "classDuration is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.gradebookBtn, testdata[1].gradebookBtn, "gradebookBtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.archivedlbl, testdata[1].archivedlbl, "gradebookBtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.archivedMsg, testdata[1].archivedMsg, "gradebookBtn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.bookCoverImg, true, "bookCoverImg is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.classOptionsBtn_exists, true, "classOptionsBtn_exists is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.bookTitleTxt, testdata[0].bookName, "bookTitleTxt is not mismatched " + JSON.stringify(sts))
			//await assertion.assertEqual(sts.bookSubtitleTxt, testdata[0].bookSubtitleTxt, "bookSubtitleTxt is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.viewBookBtn, testdata[1].viewBookBtn, "classDuration is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.inviteStudents_btn, null, "inviteStudents_btn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.createAssignments_btn, null, "createAssignments_btn is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.noInboxActivity_lbl, testdata[1].noInboxActivity_lbl, "noInboxActivity_lbl is not mismatched " + JSON.stringify(sts))
			await assertion.assertEqual(sts.noInboxActivityByline_lbl, testdata[1].noInboxActivityByline_lbl, "noInboxActivity_lbl is not mismatched " + JSON.stringify(sts))
		} else {
			await assertion.assertFail(sts);
		}
	},

	// Validate snackbar message is displayed on clicking Create Assignment btton
	ENG_INS_CLASS_TC_123: async function (testdata) {
		sts = await assignmentPage.click_createAssignments_ArchiveClass();
		await assertion.assertEqual(sts, true, "create Assignment is clicked");
		sts = await require('../../test/engageExperienceApp/common.test.js').get_Snackbar_Message_Text();
		await assertion.assert(sts, testdata, "Snackbar message mismatch: " + sts); //ENG_INS_CLASS_TC_111
	},

	//Validate that archive label is removed on clicking cross icon
	ENG_INS_CLASS_TC_124: async function () {
		//console.log(testdata)
		sts = await classDashboardPage.click_archiveLblCrossButton()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.archivedlbl, null, "archive label status mismatched " + JSON.stringify(sts))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate default launch of Archive class tab when no class is present
	ENG_INS_CLASS_TC_125: async function (testdata) {
		sts = await classDashboardPage.get_MyClasses_Data();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageTitleNoClassArchived, testdata.pageTitleNoClassArchived, "Page title Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageSubTitleNoClassArchived, testdata.pageSubTitleNoClassArchived, "Page Subtitle Not Displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.pageIconNoClassArchived, true, "Page Icon Not Displayed: " + (await JSON.stringify(sts)))
		}
		else {
			await assertion.assertFail(sts);
		}
	},

	//Teacher login - Validate the data when user on More options on Archive class
	ENG_INS_CLASS_TC_126: async function (testdata) {
		await this.ENG_INS_CLASS_TC_8(testdata);
	},
	//Teacher login - Validate Inbox page is launched on clicking Inbox option from More options
	ENG_INS_CLASS_TC_127: async function (testdata) {
		await this.ENG_INS_CLASS_TC_10(testdata);
	},

	//Teacher login - Validate Assignments page is launched on clicking Assignments option from More options
	ENG_INS_CLASS_TC_128: async function (testdata) {
		await this.ENG_INS_CLASS_TC_12(testdata);
	},

	//Teacher login - Validate Students page is launched on clicking Students option from More options
	ENG_INS_CLASS_TC_129: async function (testdata) {
		await this.ENG_INS_CLASS_TC_11(testdata);
	},

	//Teacher login - Validate Gradebook page is launched on clicking Gradebook option from More options
	ENG_INS_CLASS_TC_130: async function (testdata) {
		await this.ENG_INS_CLASS_TC_110(testdata);
	},

	//Teacher login - Validate snackbar message is displayed on clicking Materials option from More options
	ENG_INS_CLASS_TC_131: async function (testdata) {
		await this.ENG_INS_CLASS_TC_111(testdata);
	}

};