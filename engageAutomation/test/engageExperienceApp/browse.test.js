"use strict";
var appShell = require('../../pages/engageExperienceApp/appShell.page');
var browsePage = require('../../pages/engageExperienceApp/browse.page');
const { bookName } = require('../../pages/engageExperienceApp/openActivityPlayer.page');
var common = require('./common.test');
var sts;

module.exports = {


	//Validate that the resources are displayed on clicking the Interactive Activities tab
	ENG_GLOB_TC_10: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[1]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, "", "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, "", "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[1], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that the resources are displayed on clicking the Videos tab
	ENG_GLOB_TC_11: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[2]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, null, "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, null, "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[2], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceCategory();
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that the resources are displayed on clicking the Online Classes tab
	ENG_GLOB_TC_12: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[3]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, null, "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, null, "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[3], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that the resources are displayed on clicking the Teacher Training tab
	ENG_GLOB_TC_13: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[4]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, null, "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, null, "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[4], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that the resources are displayed on clicking the Today in Class tab
	ENG_GLOB_TC_14: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[5]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, null, "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, null, "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[5], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that the resources are displayed on clicking the Projectable tab
	ENG_GLOB_TC_15: async function (testdata) {
		sts = await appShell.selectTab(testdata.tabList[6]);
		await assertion.assertEqual(sts, true, "Tab status mismatch");
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.previousPageArrow, null, "previousPageArrow mismatch");
		await assertion.assertEqual(sts.nextPageArrow, null, "nextPageArrow mismatch");
		await assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[6], "Tab Name mismatch");
		await assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate content in Browse page
	ENG_GLOB_TC_16: async function (testdata) {
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.pageTitle, testdata.pageTitle[0], "pageTitle mismatch");
		await assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[0], "pageSubTitle mismatch");
		await assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
		await assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
		await assertion.assertEqual(sts.otherBooks, testdata.otherBooks, "other books text mismatch");
	},

	//Validate that clicking on a page number in a non categorized view displays the next list of resources.
	ENG_GLOB_TC_19: async function (testdata) {
		let sts1 = await browsePage.getData_browsePage();
		sts = await browsePage.click_goToPage(testdata);
		await assertion.assertNotEqual(sts.currentPage, sts1.currentPage, "currentPage Mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that clicking on next arrows in a non categorized view displays the list of resources.
	ENG_GLOB_TC_20: async function () {
		let sts1 = await browsePage.getData_browsePage();
		sts = await browsePage.click_nextPageArrow();
		await assertion.assertNotEqual(sts.currentPage, sts1.currentPage, "currentPage Mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that clicking on previous arrows in a non categorized view displays the list of resources.
	ENG_GLOB_TC_21: async function () {
		let sts1 = await browsePage.getData_browsePage();
		sts = await browsePage.click_previousPageArrow();
		await assertion.assertNotEqual(sts.currentPage, sts1.currentPage, "currentPage Mismatch");
		sts = await browsePage.getData_resourceList();
		await assertion.assert(sts.length > 0, "no resource found: " + sts.length);
	},

	//Validate that clicking on 3 dot options for a resource displays a list of options available for the resource.
	ENG_GLOB_TC_22: async function (testdata) {
		sts = await browsePage.click_moreOptionsBtn(testdata[0]);
		await assertion.assertEqual(sts.viewOption, testdata[1].viewOption, "viewOption Text Mismatch");
		await assertion.assertEqual(sts.shareOption, testdata[1].shareOption, "shareOption Text Mismatch");
		if (!moduleOff.ENG_PLIS)
			await assertion.assertEqual(sts.addToPlaylistOption, testdata[1].addToPlaylistOption, "addToPlaylistOption Text Mismatch");
	},

	//Validate clicking on View on 3 dot options launches the resource.
	ENG_GLOB_TC_23: async function () {
		sts = await browsePage.click_viewOption();
		await assertion.assertEqual(sts.pageStatus, true, "Activity page status mismatch");
		await assertion.assertEqual(sts.appShellPage.header, true, "Activity page header status mismatch");
	},

	//Validate that clicking on Add to playlist on 3 dot options lists the existing playlists and option to create a new playlist.
	/*ENG_GLOB_TC_24: async function (testdata) {
		sts = await browsePage.click_addToPlaylistOption();
		await assertion.assertEqual(sts.listOfPlaylist[0], testdata, "Create playlist text mismatch");
	},*/

	/*//Validate that clicking on the playlist name adds the resource to the playlist
	ENG_GLOB_TC_25: async function (testdata) {
		sts = await browsePage.click_listOfPlaylist(testdata);
		await assertion.assertEqual(sts, true, sts);
	},*/

	//Validate that clicking on the resource image launches the resource
	ENG_GLOB_TC_26: async function (testdata) {
		sts = await browsePage.click_cardImage(testdata);
		await assertion.assertEqual(sts.pageStatus, true, "Activity page status mismatch");
		await assertion.assertEqual(sts.appShellPage.header, true, "Activity page header status mismatch");
	},

	//Validate that searching can be done on basis of resource name
	ENG_GLOB_TC_28: async function (testdata) {
		sts = await browsePage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await browsePage.getData_searchList();
		await assertion.assertEqual(sts.searchList[0], testdata[0].expected_txt, "Resource Name Text Mismatch in Dropdown")

		sts = await browsePage.pressEnter();
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch");

		if (sts.tabInfo.selected == sts.tabInfo.list[0]) {
			sts = await browsePage.getData_bookList();
			await assertion.assertEqual(sts[0].bookTitle, testdata[0].expected_txt, "bookTitle Mismatch");
			await assertion.assertEqual(sts[0].bookImage, true, "bookImage status Mismatch");
		}
		else {
			sts = await browsePage.getData_resourceList();
			await assertion.assertEqual(sts[0].cardTitle, testdata[0].expected_txt, "cardTitle Mismatch");
			await assertion.assertEqual(sts[0].cardSubTitle, testdata[0].tags, "cardSubTitle Mismatch");
			await assertion.assertEqual(sts[0].cardImage, true, "cardImage status Mismatch");
			await assertion.assertEqual(sts[0].moreOptionsBtn, testdata[1].moreOptionsBtn, "moreOptionsBtn text Mismatch");
		}
	},

	//Validate that No Result Found is displayed in the drop down suggestion and in the screen when no resource matching the search criteria is fulfilled
	ENG_GLOB_TC_36: async function (testdata) {
		sts = await browsePage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await browsePage.getData_searchList();
		await assertion.assertEqual(sts.noResultListItemTitle, testdata[1].noResultListItemTitle, "noResultListItemTitle text Mismatch")
		await assertion.assertEqual(sts.noResultListItemSubtitle, testdata[1].noResultListItemSubtitle, "noResultListItemSubtitle text Mismatch")

		sts = await browsePage.pressEnter();
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch: expected " + sts.searchCount + " to equal " + testdata[0].searchCount + testdata[1].searchCount);

		sts = await browsePage.getData_searchNoResults();
		await assertion.assertEqual(sts.search_NoResult_img, testdata[1].search_NoResult_img, "search_NoResult_img status Mismatch");
		await assertion.assertEqual(sts.search_NoResult_title, testdata[1].search_NoResult_title, "search_NoResult_title text Mismatch");
		await assertion.assertEqual(sts.search_NoResult_subTitle, testdata[1].search_NoResult_subTitle, "search_NoResult_subTitle text Mismatch");

	},

	//Validate that clicking on a resource from the search suggestion drop down list launches the resource.
	ENG_GLOB_TC_37: async function (testdata) {
		sts = await browsePage.set_searchBox(testdata.search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");
		sts = await browsePage.getData_searchList();
		await assertion.assertEqual(sts.searchList[0], testdata.expected_txt, "Resource Name Text Mismatch in Dropdown")
		sts = await browsePage.click_searchList(testdata.expected_txt);
		await assertion.assertEqual(sts, true, "Resource status mismatch");
	},

	//Validate that clicking on "More search results for ..xyz" lists the resources based on search text.
	ENG_GLOB_TC_38: async function (testdata) {
		sts = await browsePage.set_searchBox(testdata[0].search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await browsePage.getData_searchList()
		await assertion.assertEqual(sts.searchList[0], testdata[0].expected_txt, "Resource Name Text Mismatch in Dropdown")

		sts = await browsePage.click_showMoreResults()
		await assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		await assertion.assert(sts.searchCount.includes(testdata[0].searchResultCount + testdata[1].searchCount), "Search Pill Mismatch");

		if (sts.tabInfo.selected == sts.tabInfo.list[0]) {
			sts = await browsePage.getData_bookList();
			await assertion.assertEqual(sts[0].bookTitle, testdata[0].bookTitle, "bookTitle Mismatch");
			await assertion.assertEqual(sts[0].bookSubTitle, testdata[0].bookSubTitle, "bookSubTitle Mismatch");
			await assertion.assertEqual(sts[0].bookImage, true, "bookImage status Mismatch");
		}
		else {
			sts = await browsePage.getData_resourceList()
			await assertion.assertEqual(sts[0].cardTitle, testdata[0].expected_txt, "cardTitle Mismatch");
			await assertion.assertEqual(sts[0].cardSubTitle, testdata[0].tags, "cardSubTitle Mismatch");
			await assertion.assertEqual(sts[0].cardImage, true, "cardImage status Mismatch");
			await assertion.assertEqual(sts[0].moreOptionsBtn, testdata[1].moreOptionsBtn, "moreOptionsBtn text Mismatch");
		}
	},

	//Validate that clicking on close search button removes the search criteria
	ENG_GLOB_TC_41: async function () {
		sts = await browsePage.click_clearSearch();
		await assertion.assertEqual(sts.searchPill, null, "searchPill status Mismatch");
	},

	//Validate clicking on Filters displays the list of filter categories.
	ENG_GLOB_TC_42: async function (testdata) {
		sts = await browsePage.click_filtersBtn();
		await assertion.assertEqual(sts.filterMenuTitle, testdata.filterMenuTitle, "filterMenuTitle Text Mismatch")
		await assertion.assertEqual(sts.filterMenuCloseBtn, testdata.filterMenuCloseBtn, "filterMenuCloseBtn status Mismatch")
		await assertion.assert(sts.filterMenuFilterCount.includes(testdata.filterMenuFilterCount), "filterMenuFilterCount Text Mismatch: " + sts.filterMenuFilterCount)
		await assertion.assertEqual(sts.filterMenuClearAllBtn, testdata.filterMenuClearAllBtn, "filterMenuClearAllBtn Text Mismatch")
		await assertion.assertEqual(sts.filterMenuApplyBtn, testdata.filterMenuApplyBtn, "filterMenuApplyBtn Text Mismatch")
	},

	//Validate that clicking on cross icon on Filters screen closes the filter pop up.
	ENG_GLOB_TC_53: async function () {
		sts = await browsePage.click_filterMenuCloseBtn();
		await assertion.assertEqual(sts, true, "filterMenuCloseBtn Status Mismatch")
	},

	/**************************** Add Book Testcases *************************************************/

	//Validate the content of add book page launched from Dashboard
	ENG_GLOB_TC_57: async function (testdata) {
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.pageTitle, testdata.pageTitle[1], "pageTitle mismatch");
		await assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[1], "pageSubTitle mismatch");
		await assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
		await assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
		await assertion.assertEqual(sts.filtersBtn, null, "filtersBtn mismatch");
		sts = await browsePage.getData_bookList();
		await assertion.assertEqual(sts[0].viewBtn, testdata.viewBtn, "viewBtn mismatch");
		await assertion.assertEqual(sts[0].addBookBtn, testdata.addBookBtn[0], "addBookBtn mismatch");
	},

	//Validate that clicking on '+' button adds the book to My Books
	ENG_GLOB_TC_58: async function (testdata) {
		sts = await browsePage.click_addBookBtn(testdata);
		await assertion.assertEqual(sts, true, "Add book status mismatch");
	},

	//Validate that clicking on the book image launches the book
	ENG_GLOB_TC_59: async function (testdata) {
		sts = await browsePage.click_bookImage(testdata);
		await assertion.assertEqual(sts.pageStatus, true, "Activity page status mismatch");
		await assertion.assertEqual(sts.appShell.header, true, "Activity page header status mismatch");
	},

	//Validate that clicking on the View button launches the book
	ENG_GLOB_TC_60: async function (testdata) {
		sts = await browsePage.click_viewBtn(testdata);
		await assertion.assertEqual(sts.pageStatus, true, "Book page status mismatch");
		await assertion.assertEqual(sts.appShell.header, true, "Book page header status mismatch");
	},

	//Validate the content of books page launched from Browse
	ENG_GLOB_TC_61: async function (testdata) {
		sts = await browsePage.getData_browsePage();
		await assertion.assertEqual(sts.pageTitle, testdata.pageTitle[0], "pageTitle mismatch");
		await assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle[0], "pageSubTitle mismatch");
		await assertion.assertEqual(sts.searchBox, "", "searchBox Text Mismatch");
		await assertion.assertEqual(sts.searchIcon, true, "searchIcon status mismatch");
		await assertion.assertEqual(sts.filtersBtn, null, "filtersBtn mismatch");
		sts = await browsePage.getData_bookList();
		await assertion.assertEqual(sts[0].viewBtn, testdata.viewBtn, "viewBtn mismatch");
		await assertion.assertEqual(sts[0].addBookBtn, null, "addBookBtn mismatch");
		await assertion.assertEqual(sts[0].bookMoreOptionsBtn, "", "bookMoreOptionsBtn mismatch");
	},

	//Validate that clicking on more options button displays a list of options available for a book
	ENG_GLOB_TC_62: async function (testdata) {
		sts = await browsePage.click_bookMoreOptionsBtn(testdata[0]);
		await assertion.assertEqual(sts.viewClassOption, testdata[1].viewClassOption, "View Class button mismatch");
		await assertion.assertEqual(sts.createNewClassOption, testdata[1].createNewClassOption, "Create Class button mismatch");
		if (sts.addToMyBooksOption != null) {
			await assertion.assertEqual(sts.addToMyBooksOption, testdata[1].addToMyBooksOption, "Add To My Books button mismatch");
			await assertion.assertEqual(sts.removeFromMyBooksOption, null, "Remove from My Books button mismatch");
		}
		else {
			await assertion.assertEqual(sts.addToMyBooksOption, null, "Add To My Books button mismatch");
			await assertion.assertEqual(sts.removeFromMyBooksOption, testdata[1].removeFromMyBooksOption, "Remove from My Books button mismatch");
		}
		if (sts.openFlipbookOption != null)
			await assertion.assertEqual(sts.openFlipbookOption, testdata[1].openFlipbookOption, "Open Flipbook  button mismatch");
	},

	//Validate that clicking on View Classes option launches Class Drawer
	ENG_GLOB_TC_63: async function () {
		sts = await browsePage.click_viewClassOption();
		await assertion.assertEqual(sts.classDashboardData.pageStatus, true, "Class drawer mismatch: ");
		var classDrawerPage = await require('../../pages/engageExperienceApp/classDrawer.page');
		sts = await classDrawerPage.Click_classDrawerCloseBtn();
		await assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");
	},

	//Validate that clicking on Add to My Books adds the book to My Books and display a snackbar message
	ENG_GLOB_TC_64: async function () {
		sts = await browsePage.click_addToMyBooksOption();
		await assertion.assertEqual(sts, true, "Add to my books mismatch");
		sts = await common.get_Snackbar_Message_Text();
		await assertion.assert(sts.includes("1"), "Snackbar message mismatch: " + sts);
	},

	//Validate that clicking on Open flipbook launches the flipbook associated with the book
	ENG_GLOB_TC_65: async function () {
		sts = await browsePage.click_openFlipbookOption();
		await assertion.assertEqual(sts.pageStatus, true, "Flipbook page status mismatch");
		await assertion.assertEqual(sts.appShellPage.header, true, "Flipbook page header status mismatch")
	},

	//Validate that clicking on Remove from My Books launches a pop up with label 'Remove from My Books?'
	ENG_GLOB_TC_66: async function (testdata) {
		sts = await browsePage.click_removeFromMyBooksOption();
		await assertion.assertEqual(sts.removeBook_title, testdata[1].removeBook_title, "Menu Remove Title status mismatch");
		let removeBook_subTitle = testdata[1].removeBook_subTitle1 + testdata[0] + testdata[1].removeBook_subTitle2;
		await assertion.assertEqual(sts.removeBook_subTitle, removeBook_subTitle, "Menu Remove Subtitle status mismatch");
		await assertion.assertEqual(sts.removeBook_cancelBtn, testdata[1].removeBook_cancelBtn, "Menu Remove Cancel status mismatch");
		await assertion.assertEqual(sts.removeBook_removeBtn, testdata[1].removeBook_removeBtn, "Menu Remove Remove status mismatch");
	},

	//Validate that clicking on 'Cancel' in dialog box retains the book in 'My Books'
	ENG_GLOB_TC_67: async function () {
		sts = await browsePage.click_removeBook_cancelBtn();
		await assertion.assertEqual(sts, true, "Cancel button status mismatch");
		sts = await common.get_Snackbar_Message_Text();
		await assertion.assert(sts.includes("1"), "Snackbar message mismatch: " + sts);
	},

	//Validate that clicking on 'Remove' in dialog box removes the book from 'My Books'
	ENG_GLOB_TC_68: async function () {
		sts = await browsePage.click_removeBook_removeBtn();
		await assertion.assertEqual(sts, true, "Remove button status mismatch");
		sts = await common.get_Snackbar_Message_Text();
		await assertion.assert(sts.includes("1"), "Snackbar message mismatch: " + sts);
	},

	//Validate that clicking on Create New Class launches create class workflow where book is added to Class Books
	ENG_GLOB_TC_69: async function (testdata) {
		sts = await browsePage.click_createNewClassOption();
		await assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Create Class Page Title Mismatch");
		await assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Create Class Page SubTitle Mismatch");
		await assertion.assertEqual(sts.classHeader, testdata[0].classHeader, "Create Class Page Header Mismatch");
		await assertion.assertEqual(sts.classSubHeader, testdata[0].classSubHeader, "Create Class Page Class SubHeader Mismatch");
		await assertion.assertEqual(sts.title_lbl, testdata[0].title_lbl, "Create Class Page Title Label Mismatch");
		await assertion.assertEqual(sts.startDate_lbl, testdata[0].startDate_lbl, "Create Class Page Start Date Label Mismatch");
		await assertion.assertEqual(sts.endDate_lbl, testdata[0].endDate_lbl, "Create Class Page End Date Label Mismatch");
		await assertion.assertEqual(sts.selectBook_lbl, testdata[0].selectBook_lbl, "Create Class Page Select Book Label Mismatch");
		await assertion.assertEqual(sts.cancelBtn_txt, testdata[0].cancelBtn_txt, "Create Class Page Cancel Button Mismatch");
		await assertion.assertEqual(sts.createBtn_txt, testdata[0].createBtn_txt, "Create Class Page Create Button Mismatch");

		await assertion.assertEqual(sts.bookTitle, testdata[1], "Create Class Page Book Title Mismatch");
		await assertion.assertEqual(sts.bookIcon, true, "Create Class Page Book Cover Thumbnail Mismatch");
	},

	/********************************************************************************************************/

	//Validate that searching a text lists maximum 5 suggestions matching the search text
	ENG_GLOB_TC_70: async function (testdata) {
		sts = await browsePage.set_searchBox(testdata.search_txt);
		await assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = await browsePage.getData_searchList();
		await assertion.assert(sts.searchList.length <= 6, "Search List Count Mismatch: expected " + sts.searchList.length + " to <= 6");

		sts = await browsePage.click_clearSearch();
		await assertion.assertEqual(sts.searchPill, null, "searchPill status Mismatch");
	},

	/****************************************Book Family***************************************************************/
		//Validate Book added in the Family is available in correct Family on browse page
		ENG_GLOB_TC_71: async function (testdata) {
			sts = await browsePage.click_viewAllBtn(testdata[0]);
			assertion.assertEqual(sts, true, "View All button clicked");
			sts = await browsePage.getData_bookList();
			for (var i = 0; i < sts.length; i++) {
				if (sts[i].bookTitle == testdata[1]) {
					var res = true;
					break;
				}
				assertion.assertEqual(res, true, "book not found");
			}
		},
	
		//Validate the book which is not added in Family in available in Other Books
		ENG_GLOB_TC_72: async function (testdata) {
			sts = await browsePage.getData_otherBooksList();
			for (var i = 0; i < sts.length; i++) {
				if (sts[i].bookTitle == testdata) {
					var res = true;
					break;
				}
				assertion.assertEqual(res, true, "book not found");
			}
		},
	
		//Validate that clicking on View All button shows all books of a family
		ENG_GLOB_TC_73: async function (testdata) {
			sts = await browsePage.click_viewAllBtn(testdata[0]);
			assertion.assertEqual(sts, true, "View All button clicked");
			sts = await browsePage.getData_browsePage();
			assertion.assertEqual(sts.pageTitle, testdata[1], "page title mismatch");
			assertion.assertEqual(sts.pageSubTitle, null, "page subtitle mismatch");
			assertion.assertEqual(sts.searchIcon, true, "search ison not present");
			assertion.assert(sts.searchCount.includes(testdata[2].viewAllSearchCount, "Search result text not present"));
			sts = await browsePage.getData_bookList();
			assertion.assert(sts.length > 0, "no book found");
		},
	
		//Validate on Book tab, user is able to search book family name and clicking on it launch the book family page
		ENG_GLOB_TC_75: async function (testdata) {
			sts = await browsePage.set_searchBox(testdata[0])
			assertion.assertEqual(sts, true, "set_searchBox status Mismatch");
			sts = await browsePage.click_searchList(testdata[0]);
			assertion.assertEqual(sts, true, "click searchlist status Mismatch");
			sts = await browsePage.getData_browsePage();
			assertion.assertEqual(sts.pageTitle, testdata[1], "page title mismatch");
			assertion.assertEqual(sts.pageSubTitle, null, "page subtitle mismatch");
		},
	
		//Validate that on Book tab, in search results, Family name is displayed below book name and description
		ENG_GLOB_TC_76: async function (testdata) {
			sts = await browsePage.set_searchBox(testdata[0].search_txt)
			assertion.assertEqual(sts, true, "set_searchBox status Mismatch");
			sts = await browsePage.pressEnter();
			assertion.assertEqual(sts, true, "enter status Mismatch");
			sts = await browsePage.getData_bookList();
			assertion.assertEqual(sts[0].bookFamilyName, testdata[1].partOfText + testdata[2], "family name mismatch");
		},
	
		//Validate that on Book tab, Clicking Show More Books button loads the more books in "Other book" section
		ENG_GLOB_TC_77: async function () {
			sts = await browsePage.getData_otherBooksList();
			var oldCount = sts.length;
			sts = await browsePage.click_showMoreBooksBtn();
			assertion.assertEqual(sts, true, "enter status Mismatch");
			sts = await browsePage.getData_bookList();
			var newCount = sts.length;
			assertion.assert(newCount > oldCount, "more books not loaded");
		},
	
}
