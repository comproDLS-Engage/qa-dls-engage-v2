"use strict";
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var successClassPage = require('../../pages/engageExperienceApp/successClass.page.js');
const dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var calender = require('../../pages/engageExperienceApp/calender.page.js');
var classDrawerpage = require('../../pages/engageExperienceApp/classDrawer.page.js');
const { add } = require('winston');
const teacherViewClassPage = require('../../pages/engageExperienceApp/teacherViewClass.page.js');
var sts;
module.exports = {



	//Validate the content (in english) of the My Classes Page if instructor has not created any Class.
	ENG_INS_CLASS_TC_1: function (testdata) {
		sts = classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.noClassSubtitle, testdata.noClassSubtitle, "Class Subtitle Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.noClassTitle, testdata.noClassTitle, "Class title Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.noClassFound_icon, true, "Class Icon Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.archivedTab, sts.archivedTab, "Archived Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.activeTab, testdata.activeTab, "MyClass Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
		sts = classDashboardPage.click_Archived_Tab();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageTitleNoClassArchived, testdata.pageTitleNoClassArchived, "Page title Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitleNoClassArchived, testdata.pageSubTitleNoClassArchived, "Page Subtitle Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageIconNoClassArchived, true, "Page Icon Not Displayed: " + JSON.stringify(sts))
		}
		else {
			assertion.assertFail(sts);
		}

	},

	//Validate the content (in english) of the My Classes Page if instructor has created Classes.
	ENG_INS_CLASS_TC_2: function (testdata) {
		sts = classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.classHeading, testdata.classHeading, "Archived Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classSubHeading, testdata.classSubHeading, "Archived Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.activeTab, testdata.activeTab, JSON.stringify(sts))
			assertion.assertEqual(sts.archivedTab, testdata.archivedTab, "Archived Tab is mismatched: " + JSON.stringify(sts))
			//this assertion is desktop only
			//assertion.assertEqual(sts.addClassBtn, testdata.addClassBtn, JSON.stringify(sts))
			assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[1].menuBtnExists, true, JSON.stringify(sts))
			assertion.assertEqual(sts.classList[1].bookIconExists, true, JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the content (in english) of the Archive Page
	ENG_INS_CLASS_TC_3: function (testdata) {
		sts = classDashboardPage.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.classHeading, testdata.classHeading, JSON.stringify(sts))
			assertion.assertEqual(sts.classSubHeading, testdata.classSubHeading, JSON.stringify(sts))
			assertion.assertEqual(sts.activeTab, testdata.activeTab, JSON.stringify(sts))
			assertion.assertEqual(sts.archivedTab, testdata.archivedTab, "Archived Tab is mismatched: " + JSON.stringify(sts))
			//this assertion is desktop only
			//	assertion.assertEqual(sts.addClassBtn, testdata.addClassBtn, JSON.stringify(sts))
			assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that My Classes tab option shows all classes 
	ENG_INS_CLASS_TC_4: function (testdata) {
		sts = classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].className, testdata[0].name, "Class Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].bookName, testdata[0].bookName, "Book Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].className, testdata[1].name, "Class Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].bookName, testdata[1].bookName, "Book Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].classDuration, testdata[1].classDuration, "Class Duration is mismatched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that Archived page lauched after clicking on archive tab
	ENG_INS_CLASS_TC_5: function (testdata) {
		sts = classDashboardPage.click_Archived_Tab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + JSON.stringify(sts))
		}
		else {
			assertion.assertFail(sts);
		}
	},
	//Validate that Create Class page is launched on clicking create class button
	ENG_INS_CLASS_TC_6: function () {
		sts = classDashboardPage.click_CreateClass_Button();
		if ((typeof (sts)) === "object") {
			
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that clicking on menu button on a class card displays available menu options
	ENG_INS_CLASS_TC_8: function (testdata) {
		sts = classDashboardPage.click_MoreOptions_Button(testdata[0].name);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.inboxOption_txt, testdata[1].inboxOption_txt, "Inbox button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.assignmentsOption_txt, testdata[1].assignmentsOption_txt, "Assignment button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.studentsOption_txt, testdata[1].studentsOption_txt, "Add Student button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.gradeBookOption_txt, testdata[1].gradeBookOption_txt, "GradeBook button is displayed: " + JSON.stringify(sts.status))
			assertion.assertEqual(sts.materialsOption_txt, testdata[1].materialsOption_txt, "Material button is displayed: " + JSON.stringify(sts.status))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that on clicking a Class card on the My Classes Page, Class Dashboard is launched for that class
	ENG_INS_CLASS_TC_7: function (testdata) {
		sts = classDashboardPage.click_ClassCard(testdata)
		assertion.assertEqual(sts, true, "Class Details page is not launched" ,sts.pageStatus)
		sts = teacherViewClassPage.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "Class Deatails page is not launched" + JSON.stringify(sts.pageStatus))

	},

	
	//Validate that clicking on Edit Class option from Class Menu launches Edit Class Workflow
	ENG_INS_CLASS_TC_9: function (testdata) {
		sts = teacherViewClassPage.clickClassOptionsButton()
		assertion.assertEqual(sts.editClassBtn, testdata[1].editOption_txt, "Edit button is Not displayed: " + JSON.stringify(sts))
		sts = teacherViewClassPage.clickEditbtn();
		
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Edit Class Page is not displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},

	//rupsi
	//Validate that clicking on inbox option from Class Menu launches class details page with inbox tab selected
	ENG_INS_CLASS_TC_10: function (testdata) {
		sts = classDashboardPage.click_inboxOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.selectedProduct, testdata.inboxOption_txt, "Add Student Page is not displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Student option from Class Menu launches class details page with Student tab selected
	ENG_INS_CLASS_TC_11: function (testdata) {
		sts = classDashboardPage.click_studentsOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.selectedProduct, testdata.studentsOption_txt, "Add Student Page is not displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Assignment option from Class Menu launches class details page with Assignment tab selected
	ENG_INS_CLASS_TC_12: function (testdata) {
		sts = classDashboardPage.click_assignmentsOption();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.selectedProduct, testdata.assignmentsOption_txt, "Add Student Page is not displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the content (in english) of the Create Class Page
	ENG_INS_CLASS_TC_13: function (testdata) {
		sts = createClassPage.isInitialized()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subTitle Text Mismatch: " + JSON.stringify(sts.pageSubTitle))
			assertion.assertEqual(sts.classHeader, testdata.classHeader, "Class Header Text Mismatch: " + JSON.stringify(sts.classHeader))
			assertion.assertEqual(sts.classSubHeader, testdata.classSubHeader, "Class Sub Header Text Mismatch: " + JSON.stringify(sts.classSubHeader))
			assertion.assertEqual(sts.title_lbl, testdata.title_lbl, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
			assertion.assertEqual(sts.title_txtbox, "", "Name InputBox Text Mismatch: " + JSON.stringify(sts.title_txtbox))
			assertion.assertEqual(sts.startDate_lbl, testdata.startDate_lbl, "StartDate Label Text Mismatch: " + JSON.stringify(sts.startDate_lbl))
			assertion.assertEqual(sts.endDate_lbl, testdata.endDate_lbl, "EndDate Label Text Mismatch: " + JSON.stringify(sts.endDate_lbl))
			assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_lbl))
			assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_txt))
			assertion.assertEqual(sts.createBtn_txt, testdata.createBtn_txt, "Create button Text Mismatch: " + JSON.stringify(sts.createBtn_txt))
			assertion.assertEqual(sts.cancelBtn_txt, testdata.cancelBtn_txt, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelBtn_txt))
		} else {
			assertion.assertFail(sts);
		}

	},

	//Validate class cannot be created if Class name field is left blank.
	ENG_INS_CLASS_TC_14: function (testdata) {
		sts = createClassPage.set_ClassName("");
		assertion.assertEqual(sts, "", JSON.stringify(sts))
		sts = createClassPage.click_Create_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.titleErrorMsg, testdata.notitleErrorMsg, "Title error message is mismatched" + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that class cannot be created if Class name field contains more than 50 characters.
	ENG_INS_CLASS_TC_15: function (testdata) {
		sts = createClassPage.set_ClassName(testdata[0].name);
		assertion.assertEqual(sts, testdata[0].name, "Class Name is mismatched" + JSON.stringify(sts))
		sts = createClassPage.click_Create_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.titleErrorMsg, testdata[1].titleErrorMsg, "Title error message is mismatched" + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that instructor is able to create a Class with 50 alphanumeric characters
	ENG_INS_CLASS_TC_16: function (testdata) {
		sts = createClassPage.set_ClassName(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Class Name is mismatched" + JSON.stringify(sts))
	},
	//Validate that instructor is able to create a Class with special characters
	ENG_INS_CLASS_TC_17: function (testdata) {
		sts = createClassPage.set_ClassName(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Class Name is mismatched" + JSON.stringify(sts))
	},

	//Update the start date of a class for next week
	ENG_INS_CLASS_TC_18: function () {
		sts = createClassPage.click_StartDate_Button()
		assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = calender.isInitialized()
		assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + JSON.stringify(sts))
		var currentDate = calender.getCurrentDate();
		calender.selectDate(parseInt(currentDate) + 15);
		calender.clickOkBtn()
	},

	//Validate that the My Classes page appears if user click on the cancel and go back button on Create Class Page
	ENG_INS_CLASS_TC_19: function () {
		sts = createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Update the end date of a class for next week
	ENG_INS_CLASS_TC_20: function () {
		sts = createClassPage.click_EndDate_Button()
		assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = calender.isInitialized()
		assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + JSON.stringify(sts))
		var currentDate = calender.getCurrentDate();
		calender.selectDate(parseInt(currentDate) + 15);
		calender.clickOkBtn()
	},
	//Validate the functionality of create button on Create Class Page.
	ENG_INS_CLASS_TC_21: function (testdata) {
		sts = createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Success Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))
			assertion.assert(sts.className_txt.includes(testdata[1].name), "Success Class Page class text mismatch ")

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the content of the Create Class Success Page
	ENG_INS_CLASS_TC_22: function (testdata) {
		sts = successClassPage.isInitialized();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
			assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page subTitle Text Mismatch: " + JSON.stringify(sts.pageSubTitle))
			assertion.assert(sts.className_txt.includes(testdata[1].name), "Class Name Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.viewClassbtn, testdata[0].viewClassbtn, "View Class btn Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.backToHomeBtn_txt, testdata[0].backToHomeBtn_txt, "BscktoHome btn Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.successCaption_txt, testdata[0].successCaption_txt, "Success Caption Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.copy_txt, testdata[0].copy_txt, "Copy Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.copy_btn, true, "Copy btn Mismatch: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that the class dashboard is launched on clicking the View Class button on success page
	//check how to use in execution file
	ENG_INS_CLASS_TC_23: function () {
		sts = successClassPage.click_ViewClass_Button()
		assertion.assertEqual(sts.pageStatus, true, "Dashboard Page status mismatch ")

	},

	//Validate that the My Classes page is launched on clicking Close button on success page
	ENG_INS_CLASS_TC_24: function () {
		sts = successClassPage.click_Close_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//rupsi	
	//Validate that class cannot be created if user has not selected any Book
	ENG_INS_CLASS_TC_27: function (testdata) {
		sts = createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message Mismatch: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//rupsi	
	//Future Class: Validate that the Instructor Dashboard for future Class is launched on clicking the future Class.
	ENG_INS_CLASS_TC_32: function (testdata) {
		sts = classDashboardPage.click_MoreOptions_Button(testdata[0].class[0].name)
		assertion.assertEqual(sts.viewClassText, testdata[1].viewClassText, "View Class button is Not displayed: " + JSON.stringify(sts))
		sts = classDashboardPage.click_ViewClass_Button(testdata[0].role);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "dashboard Page Not Displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate the content (in english) of the Edit Class Page
	ENG_INS_CLASS_TC_33: function (testdata) {
		sts = createClassPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subTitle Text Mismatch: " + JSON.stringify(sts.pageSubTitle))
			assertion.assertEqual(sts.classHeader, testdata.classHeader, "Class Header Text Mismatch: " + JSON.stringify(sts.classHeader))
			assertion.assertEqual(sts.classSubHeader, testdata.classSubHeader, "Class Sub Header Text Mismatch: " + JSON.stringify(sts.classSubHeader))
			assertion.assertEqual(sts.title_lbl, testdata.title_lbl, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
			assertion.assertEqual(sts.startDate_lbl, testdata.startDate_lbl, "StartDate Label Text Mismatch: " + JSON.stringify(sts.startDate_lbl))
			assertion.assertEqual(sts.endDate_lbl, testdata.endDate_lbl, "EndDate Label Text Mismatch: " + JSON.stringify(sts.endDate_lbl))
			assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_lbl))
			assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_txt))
			assertion.assertEqual(sts.saveBtn_txt, testdata.saveBtn_txt, "Save button Text Mismatch: " + JSON.stringify(sts.createBtn_txt))
			assertion.assertEqual(sts.cancelBtn_txt, testdata.cancelBtn_txt, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelBtn_txt))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that the class details are updated on clicking the save button on Edit Class Page
	ENG_INS_CLASS_TC_34: function (testdata) {
		sts = createClassPage.click_Save_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.msg, testdata.editMsgBar_txt, "Message Bar Not Displayed: " + JSON.stringify(sts.msg))
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that the instructor My Classes page is launched on clicking Cancel and Go Back button on the Edit Class Page
	ENG_INS_CLASS_TC_35: function () {
		sts = createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that Class Name cannot be modified as blank.
	ENG_INS_CLASS_TC_36: function (testdata) {
		sts = createClassPage.set_ClassName("");
		assertion.assertEqual(sts, "", "Title text mismatch " + JSON.stringify(sts))
		sts = createClassPage.click_Save_Button();
		//console.log(sts);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.titleErrorMsg, testdata.notitleErrorMsg, "Title Error Message Text Mismatch: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that Class name can be updated with less than 50 characters.
	ENG_INS_CLASS_TC_37: function (testdata) {
		sts = createClassPage.set_ClassName(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Title text mismatch " + JSON.stringify(sts))

	},
	//Validate the Close button of class drwaer Pane
	ENG_INS_CLASS_TC_31: function () {
		sts = classDrawerpage.Click_classDrawerCloseBtn();
		assertion.assertEqual(sts, true, "Close Drawer is not clicked: " + JSON.stringify(sts))
		//sts = dashboardPage.isInitialized();
		//assertion.assertEqual(sts.pageStatus, true, "Dashboard Page not launched: " + JSON.stringify(sts))
	},
	//Validate the class drwaer Pane when no class is added
	ENG_INS_CLASS_TC_38: function (testdata) {
		sts = classDrawerpage.isInitialized();
		assertion.assertEqual(sts.classDrawerHeader, testdata[1] + testdata[0].header, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDashboardData.classHeading, testdata[0].classHeading, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
		assertion.assertEqual(sts.classDashboardData.noClassFound_icon, true, "Page Icon Mismatch: " + JSON.stringify(sts.pageSubTitle))
		assertion.assertEqual(sts.classDashboardData.noClassTitle, testdata[0].noClassTitle, "Page Header Text Mismatch: " + JSON.stringify(sts.classHeader))
		assertion.assertEqual(sts.classDashboardData.noClassSubtitle, testdata[0].noClassSubtitle, "Page Sub Header Text Mismatch: " + JSON.stringify(sts.classSubHeader))
		assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata[0].addClassBtn, "Page Class add btn text is mismatch: " + JSON.stringify(sts.title_lbl))
	},
	//Validate the class drwaer Pane when  class is added
	ENG_INS_CLASS_TC_39: function (testdata) {
		sts = classDrawerpage.isInitialized();
		assertion.assertEqual(sts.classDrawerHeader, testdata[1] + testdata[0].header, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDrawerTitle, testdata[0].classDrawerTitle, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Close btn Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDrawerSubTitle, testdata[0].classDrawerSubTitle, "Class SubTitle Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDashboardData.classHeading, testdata[0].classHeading, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
		assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata[0].addClassBtnwithClass, "Add Class button Text Mismatch: " + JSON.stringify(sts.title_lbl))


	},
	//rupsi		
	//Edit Class -Validate that the error message appears if user delete the book and click on Save button to save the class
	ENG_INS_CLASS_TC_40: function (testdata) {
		sts = createClassPage.clickdeleteBook();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message mismatch " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate book is by default selected
	ENG_INS_CLASS_TC_41: function () {
		sts = createClassPage.isInitialized();
		assertion.assertEqual(sts.bookIcon, true, "Book is already displayed: " + JSON.stringify(sts.pageStatus))
		sts = createClassPage.checkbookAvaibility();
		//console.log(sts)
		if ((sts) == "alreadySelected") {
			sts = true;
		}
		assertion.assertEqual(sts, true, "Book is not selected on page: " + JSON.stringify(sts.pageStatus))

	},
	//Click on add book button and Validate the book is added in the class
	ENG_INS_CLASS_TC_42: function () {
		sts = createClassPage.click_AddANewBook_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Add book page is not launched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
		/*		
				sts = addBookPage.click_addBook("PROYECTOS");
				sts=addBookPage.click_AddtoClass_Button();
				assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))
				*/

	},

	//Validate the class drawer Pane for student when  class is added
	ENG_INS_CLASS_TC_43: function (testdata) {
		sts = classDrawerpage.isInitialized();
		assertion.assertEqual(sts.classDrawerHeader, "PROYECTOS" + testdata.header, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		//assertion.assertEqual(sts.classDrawerTitle, testdata.classDrawerTitle, "Class Title Text Mismatch: " + JSON.stringify(sts.title_lbl))
		assertion.assertEqual(sts.classDrawerCloseBtn, true, "Class Close btn Text Mismatch: " + JSON.stringify(sts.title_lbl))
		//assertion.assertEqual(sts.classDrawerSubTitle, testdata.classDrawerSubTitle, "Class SubTitle Text Mismatch: " + JSON.stringify(sts.title_lbl))
		//	assertion.assertEqual(sts.classDashboardData.classHeading, testdata.classHeading, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
		//	assertion.assertEqual(sts.classDashboardData.addClassBtn, testdata.addClassBtnwithClass, "Add Class button Text Mismatch: " + JSON.stringify(sts.title_lbl))


	},
	// Validate book details is launched after clicking on View Book button

	ENG_INS_CLASS_TC_44: function () {
		sts = teacherViewClassPage.clickViewBookbtn()
		assertion.assertEqual(sts.pageStatus, true, "View book page status mismatch");
        assertion.assertEqual(sts.appShell.header, true, "View book page header status mismatch");
	},
	//rupsi	
	//Class Restore - Validate the end date of class increase set for next year before restore.
	ENG_INS_CLASS_TC_98: function () {
		sts = createClassPage.click_EndDate_Button()
		assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = calender.isInitialized()
		assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + JSON.stringify(sts))
		calender.clickCurrentYear();
		calender.selectUpcomingYear(2);
		calender.clickOkBtn()

	},
	//Click on student tab and validate student tab is selected
	ENG_INS_CLASS_TC_99: function (testdata) {
		sts = teacherViewClassPage.clickStudentsTab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageData.selectedProduct, "Students", "Student Tab is not selected " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}

	},

	//Validate that score is coming for anchord book class students  
		ENG_INS_CLASS_TC_100: function (testdata) {
			//console.log(testdata)
			sts = teacherViewClassPage.getStudentPageData()
			if ((typeof (sts)) === "object") {
				assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentAvgScore, testdata[0].AvgScore, "Student AvgScore is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentCompletionScore, testdata[0].CompletionScore, "Student CompletionScore is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + JSON.stringify(sts))
	
			} else {
				assertion.assertFail(sts);
			}
	
		},
	//Validate that score is not coming for non-anchord book class students  
	ENG_INS_CLASS_TC_101: function (testdata) {
		//console.log(testdata)
		sts = teacherViewClassPage.getStudentPageData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.studentData[0].studentName, testdata[0].Name, "Student Name is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentStatus, testdata[1].enrolledStatus, "Student Status is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].viewProgressbtn, true, "Student viewProgressbtn is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0]. viewMessagebtn, true, "Student viewMessagebtn is not mismatched " + JSON.stringify(sts))
				assertion.assertEqual(sts.studentData[0].studentMoreOption, true, "Student MoreOption is not mismatched " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	// Validate the page when no student is added 
		ENG_INS_CLASS_TC_102: function (testdata) {
			sts = teacherViewClassPage.getStudentPageData()
			if ((typeof (sts)) === "object") {
				assertion.assertEqual(sts.noStudentSubTitle, testdata.noStudentSubTitle, "Student Title is not matched" + JSON.stringify(sts))
					assertion.assertEqual(sts.noStudentTitle, testdata.noStudentTitle, "Student subTitle is not mismatched " + JSON.stringify(sts))
					assertion.assertEqual(sts.noStudentIcon, true, "Student viewProgressbtn is not mismatched " + JSON.stringify(sts))
				
			} else {
				assertion.assertFail(sts);
			}
	},
	ENG_INS_CLASS_TC_103: function (testdata) {
		sts = teacherViewClassPage.clickAssignmentsTab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Assignment Tab is not selected " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}

	},
};