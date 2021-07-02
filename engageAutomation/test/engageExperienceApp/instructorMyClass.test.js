"use strict";
var instructorMyClassPage = require('../../pages/engageExperienceApp/instructorMyClass.page.js');
var createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var successClassPage = require('../../pages/engageExperienceApp/successClass.page.js');

//var calender = require('../../pages/engageExperienceApp/calender.page.js');
//var addBook = require('../../pages/engageExperienceApp/addBook.page.js');
const { add } = require('winston');
const teacherViewClassPage = require('../../pages/engageExperienceApp/teacherViewClass.page.js');
var sts;
module.exports = {



	//Validate the content (in english) of the My Classes Page if instructor has not created any Class.
	ENG_INS_MYCO_TC_1: function (testdata) {
		sts = instructorMyClassPage.isInitialized()
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
		sts = instructorMyClassPage.click_Archived_Tab();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'false', "Myclass Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'true', "Archived Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageTitleNoClassArchived, testdata.pageTitleNoClassArchived, "Page title Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitleNoClassArchived, testdata.pageSubTitleNoClassArchived, "Page Subtitle Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageIconNoClassArchived,true, "Page Icon Not Displayed: " + JSON.stringify(sts))
		}
		else {
			assertion.assertFail(sts);
		}

	},

	//Validate the content (in english) of the My Classes Page if instructor has created Classes.
	ENG_INS_MYCO_TC_2: function (testdata) {
		sts = instructorMyClassPage.isInitialized()
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
	//Validate the content (in english) of the Archive Page if class is archived
	ENG_INS_MYCO_TC_3: function (testdata) {
		sts = instructorMyClassPage.isInitialized();
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
	//Validate that My Classes tab option shows only active and future class
	ENG_INS_MYCO_TC_4: function (testdata) {
		sts = instructorMyClassPage.isInitialized()
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
	//Click on archived tab and validate page is lauched 
	ENG_INS_MYCO_TC_5: function (testdata) {
		sts = instructorMyClassPage.click_Archived_Tab()
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
	ENG_INS_MYCO_TC_6: function () {
		sts = instructorMyClassPage.click_CreateClass_Button();
		assertion.assertEqual(sts, true, "Create Class Page not launched: " + JSON.stringify(sts))
		sts = createClassPage.isInitialized();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that on clicking a Class card on the My Classes Page, Class Dashboard is launched for that class
	ENG_INS_MYCO_TC_7: function (testdata) {
		sts = instructorMyClassPage.click_ClassCard(testdata.class[1].name)
		assertion.assertEqual(sts.pageStatus, true, "Class Deatails page is not launched" + JSON.stringify(sts.pageStatus))
		assertion.assertEqual(sts.className, testdata.class[1].name, "Same Class is not displayed" + JSON.stringify(sts))
			
	},

	//Validate that clicking on menu button on a class card displays available menu options
	ENG_INS_MYCO_TC_8: function (testdata) {
		sts = instructorMyClassPage.click_MoreOptions_Button(testdata[0].name);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.inboxOption_txt, testdata[1].inboxOption_txt, "Edit button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.assignmentsOption_txt, testdata[1].assignmentsOption_txt, "Archived button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.studentsOption_txt, testdata[1].studentsOption_txt, "Add Student button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.gradeBookOption_txt,testdata[1].gradeBookOption_txt, "Restore button is displayed: " + JSON.stringify(sts.status))
			assertion.assertEqual(sts.materialsOption_txt,testdata[1].materialsOption_txt, "Restore button is displayed: " + JSON.stringify(sts.status))
	
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that clicking on Edit Class option from Class Menu launches Edit Class Workflow
	ENG_INS_MYCO_TC_9: function (testdata) {
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
	//Validate that clicking on Add Student option from Class Menu launches Student Invitation Workflow
	ENG_INS_MYCO_TC_10: function (testdata) {
		sts = instructorMyClassPage.click_MoreOptions_Button(testdata[0].name)
		assertion.assertEqual(sts.archievedOption_txt, testdata[1].archievedOption_txt, "Edit button is Not displayed: " + JSON.stringify(sts))
		sts = instructorMyClassPage.click_AddStudents_Option();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Add Student Page is not displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},



	//Validate the content (in english) of the Create Class Page
	ENG_INS_MYCO_TC_13: function (testdata) {
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
	ENG_INS_MYCO_TC_14: function (testdata) {
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
	ENG_INS_MYCO_TC_15: function (testdata) {
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
	ENG_INS_MYCO_TC_16: function (testdata) {
		sts = createClassPage.set_ClassName(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Class Name is mismatched" + JSON.stringify(sts))
	},
	//Validate that the My Classes page appears if user click on the cancel and go back button on Create Class Page
	ENG_INS_MYCO_TC_19: function () {
		sts = createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the functionality of create button on Create Class Page.
	ENG_INS_MYCO_TC_21: function (testdata) {
		sts = createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Success Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))
			assertion.assertEqual(sts.className_txt, (testdata[0].className_txt).concat(testdata[1].name), "Success Class Page class text mismatch ")

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the content of the Create Class Success Page
	ENG_INS_MYCO_TC_22: function (testdata) {
		sts = successClassPage.isInitialized();
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch: " + JSON.stringify(sts.pageTitle))
			assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page subTitle Text Mismatch: " + JSON.stringify(sts.pageSubTitle))
			assertion.assertEqual(sts.className_txt, (testdata[0].className_txt).concat(testdata[1].name), "Class Name Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.viewClassbtn, testdata[0].viewClassbtn,"View Class btn Mismatch: " + JSON.stringify(sts))
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
	ENG_INS_MYCO_TC_23: function () {
		sts = successClassPage.click_ViewClass_Button()
		assertion.assertEqual(sts.pageStatus, true, "Dashboard Page status mismatch ")

	},
//rupsi	
	//Validate that the My Classes page is launched on clicking Back to all classes button on success page
	ENG_INS_MYCO_TC_24: function () {
		sts = successClassPage.click_BacktoallClass_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
//rupsi	
	//Validate that class cannot be created if user has not selected any Book
	ENG_INS_MYCO_TC_27: function (testdata) {
		sts = createClassPage.click_Create_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message Mismatch: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
//rupsi	
	//Future Class: Validate that the Instructor Dashboard for future Class is launched on clicking the future Class.
	ENG_INS_MYCO_TC_32: function (testdata) {
		sts = instructorMyClassPage.click_MoreOptions_Button(testdata[0].class[0].name)
		assertion.assertEqual(sts.viewClassText, testdata[1].viewClassText, "View Class button is Not displayed: " + JSON.stringify(sts))
		sts = instructorMyClassPage.click_ViewClass_Button(testdata[0].role);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "dashboard Page Not Displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},	
	//Edit Class: Validate the content (in english) of the Edit Class Page
	ENG_INS_MYCO_TC_33: function (testdata) {
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
	ENG_INS_MYCO_TC_34: function (testdata) {
		sts = createClassPage.click_Save_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.msg, testdata.editMsgBar_txt, "Message Bar Not Displayed: " + JSON.stringify(sts.msg))
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that the instructor My Classes page is launched on clicking Cancel and Go Back button on the Edit Class Page
	ENG_INS_MYCO_TC_35: function () {
		sts = createClassPage.click_Cancel_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Edit Class: Validate that Class Name cannot be modified as blank.
	ENG_INS_MYCO_TC_36: function (testdata) {
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
	ENG_INS_MYCO_TC_37: function (testdata) {
		sts = createClassPage.set_ClassName(testdata.name);
		assertion.assertEqual(sts, testdata.name, "Title text mismatch " + JSON.stringify(sts))

	},
//rupsi		
	//Edit Class -Validate that the error message appears if user deselect the book and click on Save button to save the class
	ENG_INS_MYCO_TC_40: function (testdata) {
		sts = createClassPage.click_Save_Button();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookErrorMsg, testdata.bookErrorMsg, "Book Error Message mismatch " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	
	//Validate the book selection
	ENG_INS_MYCO_TC_97: function () {
		sts=createClassPage.click_AddANewBook_Button();
		sts = createClassPage.click_SelectBook();
		assertion.assertEqual(sts, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

	},
	//Validate that My Class Page should displayed on clicking the active tab
	ENG_INS_MYCO_TC_96: function () {
		sts = instructorMyClassPage.click_MyClasses_Tab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
//rupsi	
	//Class Restore - Validate the end date of class increase set for next year before restore.
	ENG_INS_MYCO_TC_98: function () {
		sts = createClassPage.click_EndDate_Button()
		assertion.assertEqual(sts, true, "EndDateButton is not clicked.")
		sts = calender.isInitialized()
		assertion.assertEqual(sts.CalenderStatus, true, "Calender PopUp is not launched: " + JSON.stringify(sts))
		calender.clickCurrentYear();
		calender.selectUpcomingYear(2);
		calender.clickOkBtn()

	},

};