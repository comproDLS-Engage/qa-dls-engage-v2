'use strict';
var action = require('../../core/actionLibrary/baseActionLibrary.js');
const teacherViewClassPage = require('./teacherViewClass.page.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	pageTitle: selectorFile.css.ComproEngage.myClassPage.pageTitle,
	pageSubTitle: selectorFile.css.ComproEngage.myClassPage.pageSubTitle,
	pageTitleNoClassArchived: selectorFile.css.ComproEngage.myClassPage.pageTitleNoClassArchived,
	pageIconNoClassArchived:selectorFile.css.ComproEngage.myClassPage.pageIconNoClassArchived,
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
	isInitialized: function () {
		logger.logInto(stackTrace.get());
		action.waitForDocumentLoad();
		let pageStatus = action.waitForDisplayed(this.activeTab);
		res = this.get_MyClasses_Data();
		res.pageStatus = pageStatus;
		return res;
	},

	get_MyClasses_Data: function () {
		logger.logInto(stackTrace.get());
		var obj = {
			classHeading: action.getElementCount(this.classHeading) > 0 ? action.getText(this.classHeading) : null,
			classSubHeading: action.getElementCount(this.classSubHeading) > 0 ? action.getText(this.classSubHeading) : null,
			pageIconNoClassArchived:action.getElementCount(this.pageIconNoClassArchived) > 0 ? action.waitForExist(this.pageIconNoClassArchived) : false,
			pageTitleNoClassArchived: action.getElementCount(this.pageTitleNoClassArchived) > 0 ? action.getText(this.pageTitleNoClassArchived) : null,
			pageSubTitleNoClassArchived: action.getElementCount(this.pageSubTitleNoClassArchived) > 0 ? action.getText(this.pageSubTitleNoClassArchived) : null,
			addClassBtn: action.getElementCount(this.addClassBtn) > 0 ? action.getText(this.addClassBtn) : null,
			activeTab: action.getElementCount(this.activeTab) > 0 ? action.getText(this.activeTab) : null,
			archivedTab: action.getElementCount(this.archivedTab) > 0 ? action.getText(this.archivedTab) : null,
			//archivedlbl: action.getElementCount(this.archivedlbl) > 0 ? action.getText(this.archivedlbl) : null,
			isActiveTabSelected: action.getElementCount(this.activeTab) > 0 ? action.getAttribute(this.activeTab, "aria-selected") : null,
			isArchievedTabSelected: action.getElementCount(this.archivedTab) > 0 ? action.getAttribute(this.archivedTab, "aria-selected") : null,
			noClassTitle: action.getElementCount(this.noClassPageTitle) > 0 ? action.getText(this.noClassPageTitle) : null,
			noClassSubtitle: action.getElementCount(this.noClassPageTitle) > 0 ? action.getText(this.noClassPageSubTitle) : null,
			noClassFound_icon: action.getElementCount(this.noClassFound_icon) > 0 ? true : false,
			classList: [],
			footer: {}
		};

		let classCount = action.getElementCount(this.className);
		if (classCount > 0) {
			let i;
			for (i = 0; i < classCount; i++) {
				obj.classList[i] = {
					className: action.getElementCount(this.className + i + "']") > 0 ? action.getText(this.className + i + "']").split("\n")[1] : null,
					// are we also going to use duration in test data? if not then we should ask dev for separate tids for start data and end date - akhil
					classDuration: action.getElementCount(this.classDuration + i + "']") > 0 ? action.getText(this.classDuration + i + "']").split("\n")[1] : null,
					bookName: action.getElementCount(this.bookTitle + i + "']") > 0 ? action.getText(this.bookTitle + i + "']").split("\n")[1] : null,
					//	viewClassText: action.getElementCount(this.viewClass_btn + i + "]") > 0 ? action.getText(this.viewClass_btn + i + "]") : null,
					menuBtnExists: action.getElementCount(this.menuOptionBtn + i + "]") > 0 ? action.waitForExist(this.menuOptionBtn + i + "]") : null,
					bookIconExists: action.getElementCount(this.bookIcon + i + "]") > 0 ? action.waitForExist(this.bookIcon + i + "]") : null
				}
			}
		}
		return obj;
	},
	click_CreateClass_Button: function () {
		logger.logInto(stackTrace.get());
		action.waitForDisplayed(this.addClassBtn);
		res = action.click(this.addClassBtn);
		if (res == true) {
			logger.logInto(stackTrace.get(), res + " -- addClassBtn is clicked");
		}
		else {
			res = res + " -- addClassBtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_MyClasses_Tab: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.activeTab);
		if (res == true) {
			res = this.isInitialized();
			logger.logInto(stackTrace.get(), res + " -- classbtn is clicked");
		}
		else {
			res = res + " -- classbtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_Archived_Tab: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.archivedTab);
		if (res == true) {
			res = this.isInitialized();
			logger.logInto(stackTrace.get(), res + " -- Archievebtn is clicked");
		}
		else {
			res = res + " -- Archievebtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_ClassCard: function (className) {
		logger.logInto(stackTrace.get());
		let class_index = this.getClassIndex(className);
		if (typeof class_index != 'string') {
			res = action.click(this.classCard + class_index + "]");
			if (res == true) {
				res = teacherViewClassPage.isInitialized();
			}
			else {
				res = res + " --class card is NOT available";
				logger.logInto(stackTrace.get(), res, 'error');
			}
		}
		else {
			res = class_index; //storing error message recieved from getclassIndex()
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},

	getClassIndex: function (className) {
		logger.logInto(stackTrace.get());
		var index = 0;
		var arr = [];
		action.waitForDisplayed("circle[class*='MuiCircularProgress-circle']", undefined, true)
		res = action.findElements(this.className);
		if (res.length == 0) {
			res = res + " -- No class available";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		else {
			for (var i = 0; i < res.length; i++) {
				var findClassName = action.getText(this.className + i + "']").split("\n");
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

	click_MoreOptions_Button: function (className) {
		logger.logInto(stackTrace.get());
		let class_index = this.getClassIndex(className);
		if (typeof class_index != 'string') {
			res = action.waitForDisplayed(this.menuOptionBtn + class_index + "]");
			if (res == true) {
				res = action.click(this.menuOptionBtn + class_index + "]");
				if (res == true) {
					res = this.get_MoreOptionsMenu_Data();
				}
				else {
					res = res + " -- class menuOptionBtn is NOT clicked";
					logger.logInto(stackTrace.get(), res, 'error');
				}
			}
			else {
				res = res + " --class menuOptionBtn is NOT available";
				logger.logInto(stackTrace.get(), res, 'error');
			}
		}
		else {
			res = class_index; //storing error message recieved from getclassIndex()
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	get_MoreOptionsMenu_Data: function () {
		logger.logInto(stackTrace.get());
		var obj = {
			inboxOption_txt: action.getElementCount(this.inboxOption) > 0 ? action.getText(this.inboxOption) : null,
			assignmentsOption_txt: action.getElementCount(this.assignmentsOption) > 0 ? action.getText(this.assignmentsOption) : null,
			studentsOption_txt: action.getElementCount(this.studentsOption) > 0 ? action.getText(this.studentsOption) : null,
			gradeBookOption_txt: action.getElementCount(this.gradeBookOption) > 0 ? action.getText(this.gradeBookOption) : null,
			materialsOption_txt: action.getElementCount(this.materialsOption) > 0 ? action.getText(this.materialsOption) : null
		}
		return obj;
	},
	click_inboxOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.inboxOption);
		if (res == true) {

			//teacherViewClass = require('./teacherViewClass.page.js');
			res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- inboxBtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_assignmentsOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.assignmentsOption);
		if (res == true) {
		//var	teacherViewClass = require('./teacherViewClass.page.js');
			res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- archievedBtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_studentsOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.studentsOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- restoreBtn is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_gradeBookOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.gradeBookOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	},
	click_materialsOption: function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.materialsOption);
		if (res == true) {
			//teacherViewClass = require('./teacherViewClass.page.js');
			res = teacherViewClassPage.isInitialized();
		}
		else {
			res = res + " -- addStudentsOption button is NOT clicked";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return res;
	}
}