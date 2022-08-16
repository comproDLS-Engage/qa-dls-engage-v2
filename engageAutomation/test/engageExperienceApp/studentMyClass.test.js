"use strict";
var classDashboardPage = require('../../pages/engageExperienceApp/classDashboard.page.js');
var studentClassDetailsPage = require('../../pages/engageExperienceApp/studentClassDetails.page.js');
var joinClassPage = require('../../pages/engageExperienceApp/joinClass.page.js');
const { confirmPasswordError_text } = require('../../pages/engageExperienceApp/settings.page.js');
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
			await assertion.assertEqual(sts.classSubLable, testdata.classSubLable, "classSubLable Text Mismatch: " + (await JSON.stringify(sts.classHelpText)))
			await assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + (await JSON.stringify(sts.joinclassPopUpbtn)))
			//await assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + (await JSON.stringify(sts.helpJoiningClass)))
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
			await assertion.assertEqual(sts.classHelpText, testdata.blankErrorMsg, "classHelpText Text Mismatch: " + (await JSON.stringify(sts.classHelpText)))
			await assertion.assertEqual(sts.joinclassPopUpbtn, testdata.joinclassPopUpbtn, "joinclassPopUpbtn Text Mismatch: " + (await JSON.stringify(sts.joinclassPopUpbtn)))
			//await assertion.assertEqual(sts.helpJoiningClass, testdata.helpJoiningClass, "helpJoiningClass Text Mismatch: " + (await JSON.stringify(sts.helpJoiningClass)))
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
			await assertion.assertEqual(sts.pageStatus, true, "Gradebook Page is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	ENG_STU_CLASS_TC_17: async function () {
		sts = await classDashboardPage.click_progressOption();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Assignment Tab is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	ENG_STU_CLASS_TC_18: async function () {
		sts = await classDashboardPage.click_assignmentsOption_student();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Assignment Page is not displayed " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},
	ENG_STU_CLASS_TC_19: async function () {
		sts = await studentClassDetailsPage.click_overviewBtn();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.pageStatus, true, "Assignment Tab is not selected " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate the content on student details page
	ENG_STU_CLASS_TC_20: async function (testdata) {
		sts = await studentClassDetailsPage.getData_studentClassDashboardPageData();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.bookCoverIcon, true, "bookCoverIcon is not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.className, testdata[0].className, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.bookName, testdata[0].bookName, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classDuration, testdata[0].classDuration, "Class Duration is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classDurationIcon, true, "classDurationIcon is not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.classDatesLabel, testdata[1].classDatesLabel, "Class Duration Label is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.instructorIcon, true, "instructorIcon is not displayed: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.instrutorName, testdata[0].instrutorName, "Class Instructor Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.instructorLabel, testdata[1].instructorLabel, "instructorLabel is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.openFlipbookBtn, testdata[1].openFlipbookBtn, "openFlipbookBtn is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.otherDetailsBtn, true, "otherDetailsBtn is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.assignmentsLbl, testdata[1].assignmentsLbl, "assignmentsLbl is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.overviewBtn, testdata[1].overviewBtn, "overviewBtn is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.blankAssignment_img, true, "blankAssignment_img is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.blankAssignment_title, testdata[1].blankAssignment_title, "blankAssignment_title is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.blankAssignment_subtitle, testdata[1].blankAssignment_subtitle, "completeBtn is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.progress_lbl, testdata[1].progress_lbl, "completeBtn is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.viewProgress_btn, testdata[1].viewProgress_btn, "completeBtn is mismatched: " + (await JSON.stringify(sts)))

		} else {
			await assertion.assertFail(sts);
		}
	},

	//Validate the assignment section when assignment is added
	ENG_STU_CLASS_TC_21: async function (testdata) {
		sts = await studentClassDetailsPage.getData_studentClassDashboardPageData();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.dueBtn, testdata.dueBtn, "Class Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.upcomingBtn, testdata.upcomingBtn, "Book Name is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.completeBtn, testdata.completeBtn, "Class Name is mismatched: " + (await JSON.stringify(sts)))
		}
	},
	//Validate the Click on upcoming button (No Assignment is added)
	ENG_STU_CLASS_TC_22: async function (testdata) {
		sts = await studentClassDetailsPage.click_upcomingBtn();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.noUpcoming_title, testdata.noUpcoming_title, "noUpcoming_title is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noUpcoming_subtitle, testdata.noUpcoming_subtitle, "noUpcoming_subtitle is mismatched: " + (await JSON.stringify(sts)))
		}
	},
	//Validate the Click on upcoming button (No Assignment is added)
	ENG_STU_CLASS_TC_23: async function (testdata) {
		sts = await studentClassDetailsPage.click_completeBtn();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts.noCompleted_title, testdata.noCompleted_title, "noCompleted_title is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts.noCompleted_subtitle, testdata.noCompleted_subtitle, "noCompleted_subtitleis mismatched: " + (await JSON.stringify(sts)))
		}
	},

	//Validate the Assignment data on the class dashboard
	ENG_STU_CLASS_TC_24: async function (testdata) {
		sts = await studentClassDetailsPage.getData_assignmentList();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts[0].dueDaysChip, testdata[1].dueDaysChip, "dueDaysChip is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts[0].assignmentTitle, testdata[0].assignmentName, "assignmentTitle mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts[0].assignmentActivities, testdata[0].assignmentActivities + " " + testdata[1].activities, "assignmentTitle mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts[0].dueNumberChip, testdata[0].dueNumberChip, "assignmentTitle mismatched: " + (await JSON.stringify(sts)))
		}
	},

	// we discussed, automate this tc later
	//Validate the Book data on the class dashboard
	ENG_STU_CLASS_TC_25: async function (testdata) {
		sts = await studentClassDetailsPage.getData_bookList();
		if ((typeof (sts)) === "object") {
			await assertion.assertEqual(sts[0].bookMaterial_lbl, testdata.bookMaterial_lbl, "bookMaterial_lbl is mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts[0].completionValue, testdata.completionValue, "completionValue mismatched: " + (await JSON.stringify(sts)))
			await assertion.assertEqual(sts[0].progressbar, testdata.progressbar + "progressbar mismatched: " + (await JSON.stringify(sts)))
		}
	},

	//Validate that Archive Tag is displayed when user launch an archive Class Dashboard
	ENG_STU_CLASS_TC_26: async function (testdata) {
		sts = await classDashboardPage.click_ClassCard(testdata[0].name)
		await assertion.assertEqual(sts, true, "Class Card is not clicked" + (await JSON.stringify(sts)))
		sts = await studentClassDetailsPage.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "Class Deatails page is not launched" + (await JSON.stringify(sts.pageStatus)));
		sts = await studentClassDetailsPage.classstudent_Data();
		await assertion.assertEqual(sts.archiveTagLbl, testdata[1].archiveTagLbl, "tag mismatched " + (await JSON.stringify(sts)))

	},
};