"use strict";
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var studentClassDetailsPage = require('../../pages/engageExperienceApp/studentClassDetails.page.js');
var joinClassPage = require('../../pages/engageExperienceApp/joinClass.page.js');
var sts;
module.exports = {



	//Validate the content (in english) of the My Classes Page if Studnet has not Added any Class.
	ENG_STU_CLASS_TC_1: function (testdata) {
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

	//Validate the content (in english) of the My Classes Page if some class are added
	ENG_STU_CLASS_TC_2: function (testdata) {
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
	ENG_STU_CLASS_TC_3: function (testdata) {
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
	ENG_STU_CLASS_TC_4: function (testdata) {
		sts = classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].className, testdata[0].name, "Class Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].bookName, testdata[0].bookName, "Book Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].classInstructorName, testdata[0].instructor.name, "Class Instructor Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[2].classInstructorIcon, true, "Class Instructor Icon is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].className, testdata[1].name, "Class Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].bookName, testdata[1].bookName, "Book Name is mismatched: " + JSON.stringify(sts))
			//assertion.assertEqual(sts.classList[0].classDuration, testdata[1].classDuration, "Class Duration is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].classInstructorName, testdata[1].instructor.name, "Class Instructor Name is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.classList[0].classInstructorIcon, true, "Class Instructor Icon is mismatched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that Archived page lauched after clicking on archive tab
	ENG_STU_CLASS_TC_5: function (testdata) {
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
	//Validate that Join Class pop is launched on clicking Join class button
	ENG_STU_CLASS_TC_6: function (testdata) {
		//sts = classDashboardPage.isInitialized()
		sts = classDashboardPage.Click_JoinClassBtn();
		assertion.assertEqual(sts, true, "Join Class Page not launched: " + JSON.stringify(sts))
		sts = joinClassPage.get_joinClassPopUpData();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "join Class header is not coming: " + JSON.stringify(sts.joinClassHeader))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that on clicking a Class card on the My Classes Page, Student Class Dashboard is launched for that class
	ENG_STU_CLASS_TC_7: function (testdata) {

		//need to update with student dashboard
		sts = classDashboardPage.click_ClassCard(testdata)
		assertion.assertEqual(sts, true, "Class Card is not clicked" + JSON.stringify(sts))
		sts = studentClassDetailsPage.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "Class Deatails page is not launched" + JSON.stringify(sts.pageStatus))


	},

	//Validate that clicking on menu button on a class card displays available menu options
	ENG_STU_CLASS_TC_8: function (testdata) {
		sts = classDashboardPage.click_MoreOptions_Button(testdata[0].name);
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.viewClassOption, testdata[1].viewClassOption, "Inbox button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.assignmentsOption_txt, testdata[1].assignmentsOption_txt, "Assignment button is Not displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.progressOption, testdata[1].progressOption, "Add Student button is Not displayed: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that clicking on View Class option from Class Menu launches student Class Dashboard
	ENG_STU_CLASS_TC_9: function (testdata) {
		sts = classDashboardPage.click_viewClassOption();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Details Page Not Displayed: " + JSON.stringify(sts.pageStatus))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the content (in english) of the Join Class PopUP
	ENG_STU_CLASS_TC_10: function (testdata) {
		sts = joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "joinClassHeader Text Mismatch: " + JSON.stringify(sts.joinClassHeader))
			assertion.assertEqual(sts.joinClassSubHeader, testdata.joinClassSubHeader, "joinClassSubHeader Text Mismatch: " + JSON.stringify(sts.joinClassSubHeader))
			assertion.assertEqual(sts.enterClassCodeLabel, testdata.enterClassCodeLabel, "enterClassCodeLabel Text Mismatch: " + JSON.stringify(sts.enterClassCodeLabel))
			assertion.assertEqual(sts.classCodeInput, testdata.classCodeInput, "classCodeInput placeHolderText Mismatch: " + JSON.stringify(sts.classCodeInput))
			assertion.assertEqual(sts.classHelpText, testdata.classHelpText, "classHelpText Text Mismatch: " + JSON.stringify(sts.classHelpText))
			assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + JSON.stringify(sts.joinclassPopUpbtn))
			assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + JSON.stringify(sts.helpJoiningClass))
		} else {
			assertion.assertFail(sts);
		}

	},

	//Validate class cannot be jojned if Class Key field is left blank.
	ENG_STU_CLASS_TC_11: function (testdata) {
		sts = joinClassPage.set_ClassCode("");
		assertion.assertEqual(sts, "", JSON.stringify(sts))
		sts = joinClassPage.click_joinclassPopUpbtn();
		assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "joinClassHeader Text Mismatch: " + JSON.stringify(sts.joinClassHeader))
			assertion.assertEqual(sts.joinClassSubHeader, testdata.joinClassSubHeader, "joinClassSubHeader Text Mismatch: " + JSON.stringify(sts.joinClassSubHeader))
			assertion.assertEqual(sts.enterClassCodeLabel, testdata.enterClassCodeLabel, "enterClassCodeLabel Text Mismatch: " + JSON.stringify(sts.enterClassCodeLabel))
			assertion.assertEqual(sts.classCodeInput, testdata.classCodeInput, "classCodeInput placeHolderText Mismatch: " + JSON.stringify(sts.classCodeInput))
			assertion.assertEqual(sts.classHelpText, testdata.classHelpText, "classHelpText Text Mismatch: " + JSON.stringify(sts.classHelpText))
			assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + JSON.stringify(sts.joinclassPopUpbtn))
			assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + JSON.stringify(sts.helpJoiningClass))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that class cannot be joined if Class Code is not correct.
	ENG_STU_CLASS_TC_12: function (testdata) {
		sts = joinClassPage.set_ClassCode(testdata[0]);
		assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = joinClassPage.click_joinclassPopUpbtn();
		assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.classHelpText, testdata[1].classHelpText, "Title error message is mismatched" + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that class cannot be joined if Class is already exist .
	ENG_STU_CLASS_TC_13: function (testdata) {
		sts = joinClassPage.set_ClassCode(testdata[0]);
		assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = joinClassPage.click_joinclassPopUpbtn();
		assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.classHelpText, testdata[1].alreadyExistErrorMessage, "Title error message is mismatched" + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate that the My Classes page appears if user click on the Close button on Join Class popup
	ENG_STU_CLASS_TC_14: function () {
		sts = joinClassPage.click_ClosebtnjoinclassPopUp();
		sts = classDashboardPage.isInitialized()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + JSON.stringify(sts.pageStatus))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate that class cannot be joined if Class Code is not correct format.
	ENG_STU_CLASS_TC_15: function (testdata) {
		sts = joinClassPage.set_ClassCode(testdata[0]);
		assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = joinClassPage.click_joinclassPopUpbtn();
		assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.classHelpText, testdata[1].classHelpText, "Title error message is mismatched" + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},
};