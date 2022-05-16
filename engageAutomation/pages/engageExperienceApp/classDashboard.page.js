'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const teacherViewClassPage = require('./teacherViewClass.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	pageTitle: selectorFile.css.ComproEngage.myClassPage.pageTitle,
	pageSubTitle: selectorFile.css.ComproEngage.myClassPage.pageSubTitle,
	pageTitleNoClassArchived: selectorFile.css.ComproEngage.myClassPage.pageTitleNoClassArchived,
	pageIconNoClassArchived: selectorFile.css.ComproEngage.myClassPage.pageIconNoClassArchived,
	pageSubTitleNoClassArchived: selectorFile.css.ComproEngage.myClassPage.pageSubTitleNoClassArchived,
	activeTab: selectorFile.css.ComproEngage.myClassPage.activeTab,
	archivedTab: selectorFile.css.ComproEngage.myClassPage.archivedTab,
	addClassBtn: selectorFile.css.ComproEngage.myClassPage.addClassBtn,
	menuOptionBtn: selectorFile.css.ComproEngage.myClassPage.menuOptionBtn,
	noClassPageTitle: selectorFile.css.ComproEngage.myClassPage.noClassPageTitle,
	noClassPageSubTitle: selectorFile.css.ComproEngage.myClassPage.noClassPageSubTitle,
	noClassFound_icon: selectorFile.css.ComproEngage.myClassPage.noClassPageSubImg,
	loaderIcon: selectorFile.css.ComproEngage.widgets.loaderIcon,
	className: selectorFile.css.ComproEngage.myClassPage.className,
	classInstructorName: selectorFile.css.ComproEngage.myClassPage.classInstructorName,
	classInstructorIcon: selectorFile.css.ComproEngage.myClassPage.classInstructorIcon,
	bookTitle: selectorFile.css.ComproEngage.myClassPage.bookTitle,
	bookIcon: selectorFile.css.ComproEngage.myClassPage.bookIcon,
	inboxOption: selectorFile.css.ComproEngage.myClassPage.inboxOption,
	assignmentsOption: selectorFile.css.ComproEngage.myClassPage.assignmentsOption,
	studentsOption: selectorFile.css.ComproEngage.myClassPage.studentsOption,
	gradeBookOption: selectorFile.css.ComproEngage.myClassPage.gradeBookOption,
	materialsOption: selectorFile.css.ComproEngage.myClassPage.materialsOption,
	classDuration: selectorFile.css.ComproEngage.myClassPage.classDuration,
	classHeading: selectorFile.css.ComproEngage.myClassPage.classHeading,
	classSubHeading: selectorFile.css.ComproEngage.myClassPage.classSubHeading,
	classCard: selectorFile.css.ComproEngage.myClassPage.classCard,
	joinClassbtn: selectorFile.css.ComproEngage.myClassPage.joinClassbtn,
	viewClassOption:selectorFile.css.ComproEngage.myClassPage.viewClassOption,
	progressOption:selectorFile.css.ComproEngage.myClassPage.progressOption,
	viewProgress_btn:selectorFile.css.ComproEngage.myClassPage.viewProgress_btn,

	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDocumentLoad();
		let pageStatus = await action.waitForDisplayed(this.classHeading);
		res = await this.get_MyClasses_Data();
		res.pageStatus = pageStatus;
		return res;
	},

	get_MyClasses_Data: async function () {
		await logger.logInto(await stackTrace.get());
		var obj = {
			classHeading: (await action.getElementCount(this.classHeading)) > 0 ? await action.getText(this.classHeading) : null,
			classSubHeading: (await action.getElementCount(this.classSubHeading)) > 0 ? await action.getText(this.classSubHeading) : null,
			pageIconNoClassArchived: (await action.getElementCount(this.pageIconNoClassArchived)) > 0 ? await action.waitForExist(this.pageIconNoClassArchived) : false,
			pageTitleNoClassArchived: (await action.getElementCount(this.pageTitleNoClassArchived)) > 0 ? await action.getText(this.pageTitleNoClassArchived) : null,
			pageSubTitleNoClassArchived: (await action.getElementCount(this.pageSubTitleNoClassArchived)) > 0 ? await action.getText(this.pageSubTitleNoClassArchived) : null,
			addClassBtn: (await action.getElementCount(this.addClassBtn)) > 0 ? await action.getText(this.addClassBtn) : null,
			activeTab: (await action.getElementCount(this.activeTab)) > 0 ? await action.getText(this.activeTab) : null,
			archivedTab: (await action.getElementCount(this.archivedTab)) > 0 ? await action.getText(this.archivedTab) : null,
			//archivedlbl: action.getElementCount(this.archivedlbl) > 0 ? action.getText(this.archivedlbl) : null,
			isActiveTabSelected: (await action.getElementCount(this.activeTab)) > 0 ? await action.getAttribute(this.activeTab, "aria-selected") : null,
			isArchievedTabSelected: (await action.getElementCount(this.archivedTab)) > 0 ? await action.getAttribute(this.archivedTab, "aria-selected") : null,
			noClassTitle: (await action.getElementCount(this.noClassPageTitle)) > 0 ? await action.getText(this.noClassPageTitle) : null,
			noClassSubtitle: (await action.getElementCount(this.noClassPageTitle)) > 0 ? await action.getText(this.noClassPageSubTitle) : null,
			noClassFound_icon: (await action.getElementCount(this.noClassFound_icon)) > 0 ? true : false,
			classList: [],
			footer: {}
		};

		let classCount = await action.getElementCount(this.className);
		if (classCount > 0) {
			let i;
			for (i = 0; i < classCount; i++) {
				obj.classList[i] = {
					className: (await action.getElementCount(this.className + i + "']")) > 0 ? (await action.getText(this.className + i + "']")).split("\n")[1] : null,
					// are we also going to use duration in test data? if not then we should ask dev for separate tids for start data and end date - akhil
					classDuration: (await action.getElementCount(this.classDuration + i + "']")) > 0 ? (await action.getText(this.classDuration + i + "']")).split("\n")[1] : null,
					bookName: (await action.getElementCount(this.bookTitle + i + "']")) > 0 ? (await action.getText(this.bookTitle + i + "']")).split("\n")[1] : null,
					//	viewClassText: action.getElementCount(this.viewClass_btn + i + "]") > 0 ? action.getText(this.viewClass_btn + i + "]") : null,
					menuBtnExists: (await action.getElementCount(this.menuOptionBtn + i + "]")) > 0 ? await action.waitForExist(this.menuOptionBtn + i + "]") : null,
					bookIconExists: (await action.getElementCount(this.bookIcon + i + "]")) > 0 ? await action.waitForExist(this.bookIcon + i + "]") : null,
					classInstructorName: (await action.getElementCount(this.classInstructorName + i + "]")) > 0 ? (await action.getText(this.classInstructorName + i + "]")).split("\n")[1] : null,
					classInstructorIcon: (await action.getElementCount(this.classInstructorIcon + i + "]")) > 0 ? await action.waitForExist(this.classInstructorIcon + i + "]") : null
				}
			}
		}
		return obj;
	},
	click_CreateClass_Button: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.addClassBtn);
		res = await action.click(this.addClassBtn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + " -- addClassBtn is clicked");
			var createClassPage = require('./createClass.page.js');
			res = await createClassPage.isInitialized();
		}
		else {
			res = res + " -- addClassBtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	Click_JoinClassBtn: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.joinClassbtn);
		res = await action.click(this.joinClassbtn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + " -- joinClassBtn is clicked");
		}
		else {
			res = res + " -- joinClassBtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_MyClasses_Tab: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.activeTab);
		if (res == true) {
			res = await this.isInitialized();
			await logger.logInto(await stackTrace.get(), res + " -- classbtn is clicked");
		}
		else {
			res = res + " -- classbtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_Archived_Tab: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.archivedTab);
		if (res == true) {
			res = await this.isInitialized();
			await logger.logInto(await stackTrace.get(), res + " -- Archievebtn is clicked");
		}
		else {
			res = res + " -- Archievebtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_ClassCard: async function (className) {
		await logger.logInto(await stackTrace.get());
		let class_index = await this.getClassIndex(className);
		if (typeof class_index != 'string') {
			res = await action.click(this.classCard + class_index + "]");
		
		}
		else {
			res = class_index; //storing error message recieved from getclassIndex()
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	getClassIndex: async function (className) {
		await logger.logInto(await stackTrace.get());
		var index = 0;
		var arr = [];
		await action.waitForDisplayed("circle[class*='MuiCircularProgress-circle']", undefined, true)
		res = await action.findElements(this.className);
		if (res.length == 0) {
			res = res + " -- No class available";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		else {
			for (var i = 0; i < res.length; i++) {
				var findClassName = (await action.getText(this.className + i + "']")).split("\n");
				if (className == findClassName[1]) {
					arr[index] = i
					index = index + 1;
				}
			}
			if (arr.length == 1)
				res = arr[0];
			else if (arr.length > 1)
				res = "ERROR! Multiple classes present with name " + className + " at index " + arr + " !!";
			else
				res = "ERROR! No class found with name " + className + " !!";
		}
		return res;
	},

	click_MoreOptions_Button: async function (className) {
		await logger.logInto(await stackTrace.get());
		let class_index = await this.getClassIndex(className);
		if (typeof class_index != 'string') {
			res = await action.waitForDisplayed(this.menuOptionBtn + class_index + "]");
			if (res == true) {
				res = await action.click(this.menuOptionBtn + class_index + "]");
				if (res == true) {
					res = await this.get_MoreOptionsMenu_Data();
				}
				else {
					res = res + " -- class menuOptionBtn is NOT clicked";
					await logger.logInto(await stackTrace.get(), res, 'error');
				}
			}
			else {
				res = res + " --class menuOptionBtn is NOT available";
				await logger.logInto(await stackTrace.get(), res, 'error');
			}
		}
		else {
			res = class_index; //storing error message recieved from getclassIndex()
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	get_MoreOptionsMenu_Data: async function () {
		await logger.logInto(await stackTrace.get());
		var obj = {
			inboxOption_txt: (await action.getElementCount(this.inboxOption)) > 0 ? await action.getText(this.inboxOption) : null,
			assignmentsOption_txt: (await action.getElementCount(this.assignmentsOption)) > 0 ? await action.getText(this.assignmentsOption) : null,
			studentsOption_txt: (await action.getElementCount(this.studentsOption)) > 0 ? await action.getText(this.studentsOption) : null,
			gradeBookOption_txt: (await action.getElementCount(this.gradeBookOption)) > 0 ? await action.getText(this.gradeBookOption) : null,
			materialsOption_txt: (await action.getElementCount(this.materialsOption)) > 0 ? await action.getText(this.materialsOption) : null,
			viewClassOption_txt: (await action.getElementCount(this.viewClassOption)) > 0 ? await action.getText(this.viewClassOption) : null,
			progressOption_txt: (await action.getElementCount(this.progressOption)) > 0 ? await action.getText(this.progressOption) : null

		}
		return obj;
	},
	click_inboxOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.inboxOption);
		if (res == true) {

			//teacherViewClass = require('./teacherViewClass.page.js');
			res = await teacherViewClassPage.getViewClassPageData();
		}
		else {
			res = res + " -- inboxBtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_assignmentsOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.assignmentsOption);
		if (res == true) {
			//var	teacherViewClass = require('./teacherViewClass.page.js');
			res = await teacherViewClassPage.getViewClassPageData();
		}
		else {
			res = res + " -- archievedBtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_studentsOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.studentsOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			res = await teacherViewClassPage.getViewClassPageData();
		}
		else {
			res = res + " -- restoreBtn is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_gradeBookOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.gradeBookOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			//res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_materialsOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.materialsOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			res = await teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_viewClassOption: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.viewClassOption);
		if (res == true) {
		var	studentClassdetails = require('./studentClassDetails.page.js');
			res = await studentClassdetails.isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_viewProgress: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.viewProgress_btn);
		if (res == true) {
		res = await require('./gradeBookStudent.page.js').isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	}
}