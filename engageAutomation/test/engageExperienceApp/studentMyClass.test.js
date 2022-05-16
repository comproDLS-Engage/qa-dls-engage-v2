"use strict";
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var studentClassDetailsPage = require('../../pages/engageExperienceApp/studentClassDetails.page.js');
var joinClassPage = require('../../pages/engageExperienceApp/joinClass.page.js');
var sts;
module.exports = {



	//Validate the content (in english) of the My Classes Page if Studnet has not Added any Class.
	ENG_STU_CLASS_TC_1: async function (testdata) {
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

	//Validate the content (in english) of the My Classes Page if some class are added
	ENG_STU_CLASS_TC_2: async function (testdata) {
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
	//Validate the content (in english) of the Archive Page
	ENG_STU_CLASS_TC_3: async function (testdata) {
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
	ENG_STU_CLASS_TC_4: async function (testdata) {
		sts = await classDashboardPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.isActiveTabSelected, 'true', "Myclass Tab is not selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.isArchievedTabSelected, 'false', "Archived Tab is selected: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].className, testdata[0].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].bookName, testdata[0].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].classInstructorName, testdata[0].instructor.name, "Class Instructor Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[2].classInstructorIcon, true, "Class Instructor Icon is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].className, testdata[1].name, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].bookName, testdata[1].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			//assertion.assertEqual(sts.classList[0].classDuration, testdata[1].classDuration, "Class Duration is mismatched: " + JSON.stringify(sts))
			await assertion.assertEqual(sts.classList[0].classInstructorName, testdata[1].instructor.name, "Class Instructor Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classList[0].classInstructorIcon, true, "Class Instructor Icon is mismatched: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that Archived page lauched after clicking on archive tab
	ENG_STU_CLASS_TC_5: async function (testdata) {
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
	//Validate that Join Class pop is launched on clicking Join class button
	ENG_STU_CLASS_TC_6: async function (testdata) {
		//sts = classDashboardPage.isInitialized()
		sts = await classDashboardPage.Click_JoinClassBtn();
		await assertion.assertEqual(sts, true, "Join Class Page not launched: " + (await JSON.stringify(sts)))
		sts = await joinClassPage.get_joinClassPopUpData();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "join Class header is not coming: " + (await JSON.stringify(sts.joinClassHeader)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that on clicking a Class card on the My Classes Page, Student Class Dashboard is launched for that class
	ENG_STU_CLASS_TC_7: async function (testdata) {

		//need to update with student dashboard
		sts = await classDashboardPage.click_ClassCard(testdata)
		await assertion.assertEqual(sts, true, "Class Card is not clicked" + (await JSON.stringify(sts)))
		sts = await studentClassDetailsPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Class Deatails page is not launched" + (await JSON.stringify(sts.pageStatus)))


	},

	//Validate that clicking on menu button on a class card displays available menu options
	ENG_STU_CLASS_TC_8: async function (testdata) {
		sts = await classDashboardPage.click_MoreOptions_Button(testdata[0].name);
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.viewClassOption, testdata[1].viewClassOption, "Inbox button is Not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.assignmentsOption_txt, testdata[1].assignmentsOption_txt, "Assignment button is Not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.progressOption, testdata[1].progressOption, "Add Student button is Not displayed: " + (await JSON.stringify(sts)))
		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that clicking on View Class option from Class Menu launches student Class Dashboard
	ENG_STU_CLASS_TC_9: async function (testdata) {
		sts = await classDashboardPage.click_viewClassOption();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "My Class Details Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))
		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate the content (in english) of the Join Class PopUP
	ENG_STU_CLASS_TC_10: async function (testdata) {
		sts = await joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "joinClassHeader Text Mismatch: " + (await JSON.stringify(sts.joinClassHeader)))
			await assertion.assertEqual(sts.joinClassSubHeader, testdata.joinClassSubHeader, "joinClassSubHeader Text Mismatch: " + (await JSON.stringify(sts.joinClassSubHeader)))
			await assertion.assertEqual(sts.enterClassCodeLabel, testdata.enterClassCodeLabel, "enterClassCodeLabel Text Mismatch: " + (await JSON.stringify(sts.enterClassCodeLabel)))
			await assertion.assertEqual(sts.classCodeInput, testdata.classCodeInput, "classCodeInput placeHolderText Mismatch: " + (await JSON.stringify(sts.classCodeInput)))
			await assertion.assertEqual(sts.classHelpText, testdata.classHelpText, "classHelpText Text Mismatch: " + (await JSON.stringify(sts.classHelpText)))
			await assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + (await JSON.stringify(sts.joinclassPopUpbtn)))
			await assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + (await JSON.stringify(sts.helpJoiningClass)))
		} else {
			await assertion.assertFail(sts);
		}

	},

	//Validate class cannot be jojned if Class Key field is left blank.
	ENG_STU_CLASS_TC_11: async function (testdata) {
		sts = await joinClassPage.set_ClassCode("");
		await assertion.assertEqual(sts, "", JSON.stringify(sts))
		sts = await joinClassPage.click_joinclassPopUpbtn();
		await assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = await joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.joinClassHeader, testdata.joinClassHeader, "joinClassHeader Text Mismatch: " + (await JSON.stringify(sts.joinClassHeader)))
			await assertion.assertEqual(sts.joinClassSubHeader, testdata.joinClassSubHeader, "joinClassSubHeader Text Mismatch: " + (await JSON.stringify(sts.joinClassSubHeader)))
			await assertion.assertEqual(sts.enterClassCodeLabel, testdata.enterClassCodeLabel, "enterClassCodeLabel Text Mismatch: " + (await JSON.stringify(sts.enterClassCodeLabel)))
			await assertion.assertEqual(sts.classCodeInput, testdata.classCodeInput, "classCodeInput placeHolderText Mismatch: " + (await JSON.stringify(sts.classCodeInput)))
			await assertion.assertEqual(sts.classHelpText, testdata.classHelpText, "classHelpText Text Mismatch: " + (await JSON.stringify(sts.classHelpText)))
			await assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + (await JSON.stringify(sts.joinclassPopUpbtn)))
			await assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + (await JSON.stringify(sts.helpJoiningClass)))
		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that class cannot be joined if Class Code is not correct.
	ENG_STU_CLASS_TC_12: async function (testdata) {
		sts = await joinClassPage.set_ClassCode(testdata[0]);
		await assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = await joinClassPage.click_joinclassPopUpbtn();
		await assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = await joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.classHelpText, testdata[1].classHelpText, "Title error message is mismatched" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that class cannot be joined if Class is already exist .
	ENG_STU_CLASS_TC_13: async function (testdata) {
		sts = await joinClassPage.set_ClassCode(testdata[0]);
		await assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = await joinClassPage.click_joinclassPopUpbtn();
		await assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = await joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.classHelpText, testdata[1].alreadyExistErrorMessage, "Title error message is mismatched" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate that the My Classes page appears if user click on the Close button on Join Class popup
	ENG_STU_CLASS_TC_14: async function () {
		sts = await joinClassPage.click_ClosebtnjoinclassPopUp();
		sts = await classDashboardPage.isInitialized()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "My Class Page Not Displayed: " + (await JSON.stringify(sts.pageStatus)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	//Validate that class cannot be joined if Class Code is not correct format.
	ENG_STU_CLASS_TC_15: async function (testdata) {
		sts = await joinClassPage.set_ClassCode(testdata[0]);
		await assertion.assertEqual(sts, testdata[0], JSON.stringify(sts))
		sts = await joinClassPage.click_joinclassPopUpbtn();
		await assertion.assertEqual(sts, true, JSON.stringify(sts))
		sts = await joinClassPage.get_joinClassPopUpData()
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.classHelpText, testdata[1].classHelpText, "Title error message is mismatched" + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	ENG_STU_CLASS_TC_16: async function () {
		sts = await classDashboardPage.click_viewProgress();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Assignment Tab is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
};