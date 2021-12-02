"use strict";
var appShell = require('../../pages/engageExperienceApp/appShell.page.js');
var browsePage = require('../../pages/engageExperienceApp/browse.page.js');

var sts;

module.exports = {

	//Validate that the resources are displayed on clicking the Interactive Activities tab
	ENG_GLOB_TC_10: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[1]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[1], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate that the resources are displayed on clicking the Videos tab
	ENG_GLOB_TC_11: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[2]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[2], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate that the resources are displayed on clicking the Online Classes tab
	ENG_GLOB_TC_12: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[3]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[3], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate that the resources are displayed on clicking the Teacher Training tab
	ENG_GLOB_TC_13: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[4]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[4], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate that the resources are displayed on clicking the Today in Class tab
	ENG_GLOB_TC_14: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[5]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[5], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate that the resources are displayed on clicking the Projectable tab
	ENG_GLOB_TC_15: function (testdata) {
		sts = appShell.selectTab(testdata.tabList[6]);
		assertion.assertEqual(sts, true, "Tab status Mismatch");

		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.searchIcon, true, "searchIcon status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata.tabList[6], "Tab Name Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Mismatch");
		
	},

	//Validate content in Browse page
	ENG_GLOB_TC_16: function (testdata) {
		sts = browsePage.getData_browsePage();
		assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata.filtersBtn, "filtersBtn Text Mismatch");
		assertion.assertEqual(sts.searchBox, testdata.searchBox, "searchBox Text Mismatch");

	},

	//Validate that clicking on a page number in a non categorized view displays the next list of resources.
	ENG_GLOB_TC_19: function (testdata) {
		sts = browsePage.click_goToPage(testdata[0].pageNumToJump);

		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata[0].filtersBtn, "filtersBtn Text Mismatch");
		assertion.assertEqual(sts.searchBox, testdata[0].searchBox, "searchBox Text Mismatch");
		assertion.assertEqual(sts.searchIcon, true, "searchIcon Status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata[1], "Tab Name Mismatch");

	},

	//Validate that clicking on next arrows in a non categorized view displays the list of resources.
	ENG_GLOB_TC_20: function (testdata) {
		sts = browsePage.click_nextPageArrow();
		
		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata[0].filtersBtn, "filtersBtn Text Mismatch");
		assertion.assertEqual(sts.searchBox, testdata[0].searchBox, "searchBox Text Mismatch");
		assertion.assertEqual(sts.searchIcon, true, "searchIcon Status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata[1], "Tab Name Mismatch");

	},

	//Validate that clicking on previous arrows in a non categorized view displays the list of resources.
	ENG_GLOB_TC_21: function (testdata) {
		sts = browsePage.click_previousPageArrow();
		
		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Page Title Text Mismatch");
		assertion.assertEqual(sts.filtersBtn, testdata[0].filtersBtn, "filtersBtn Text Mismatch");
		assertion.assertEqual(sts.searchBox, testdata[0].searchBox, "searchBox Text Mismatch");
		assertion.assertEqual(sts.searchIcon, true, "searchIcon Status Mismatch");
		assertion.assertEqual(sts.tabInfo.selected, testdata[1], "Tab Name Mismatch");

	},


	//Validate that clicking on 3 dot options for a resource displays a list of options available for the resource.
	ENG_GLOB_TC_22: function (testdata) {
		//resource name hardcoded - akanksha 
		sts = browsePage.click_moreOptionsBtn("A la hora de dormir");
		
		assertion.assertEqual(sts.viewOption, testdata.viewOption, "viewOption Text Mismatch");
		assertion.assertEqual(sts.addToPlaylistOption, testdata.addToPlaylistOption, "addToPlaylistOption Text Mismatch");
		assertion.assertEqual(sts.shareOption, testdata.shareOption, "shareOption Text Mismatch");

	},

	//Validate clicking on View on 3 dot options launches the resource.
	ENG_GLOB_TC_23: function (testdata) {
		
		sts = browsePage.click_viewOption()
		assertion.assertEqual(sts, true, "View status Mismatch");

	},

	//Validate that clicking on Add to playlist on 3 dot options lists the existing playlists and option to create a new playlist.
	ENG_GLOB_TC_24: function (testdata) {

		sts = browsePage.click_addToPlaylistOption()
		assertion.assertEqual(sts.listOfPlaylist, testdata, "listOfPlaylist count Mismatch");

	},

	//function to click on resource ?? discuss
	//Validate that clicking on a resource launches the Global Resources view page
	// ENG_GLOB_TC_26: function (testdata) {
	// 	sts = browsePage.click_moreOptionsBtn(testdata[0]);
	// 	//tbd
	// 	sts = browsePage.click_addToPlaylistOption()
	// 	assertion.assertEqual(sts.listOfPlaylist, testdata, "View status Mismatch");

	// },

	//Validate that searching can be done on basis of resource name
	ENG_GLOB_TC_28: function (testdata) {
		sts = browsePage.set_searchBox(testdata[0].search_txt);
		assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = browsePage.getData_searchList()
		assertion.assertEqual(sts.searchList[0],testdata[0].expected_txt,"Resource Name Text Mismatch in Dropdown")
		
		sts = browsePage.pressEnter()
		assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " +testdata[1].result_label, "Search Pill Mismatch");

		sts = browsePage.getData_resourceList()
		assertion.assertEqual(sts[0].cardTitle, testdata[0].expected_txt, "cardTitle Mismatch");
		assertion.assertEqual(sts[0].cardSubTitle, testdata[0].tags, "cardSubTitle Mismatch");
		//assertion.assertEqual(sts[0].cardImgIcon, true, "cardImgIcon status Mismatch");
		assertion.assertEqual(sts[0].moreOptionsBtn, '', "moreOptionsBtn text Mismatch");

	},

	//Validate that No Result Found is displayed in the drop down suggestion and in the screen when no resource matching the search criteria is fulfilled
	ENG_GLOB_TC_36: function (testdata) {
		sts = browsePage.set_searchBox(testdata[0].search_txt);
		assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = browsePage.getData_searchList()
		assertion.assertEqual(sts.noResultListItemTitle, testdata[1].noResultListItemTitle,"noResultListItemTitle text Mismatch")
		assertion.assertEqual(sts.noResultListItemSubtitle, testdata[1].noResultListItemSubtitle,"noResultListItemSubtitle text Mismatch")
		
		sts = browsePage.pressEnter()
		assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " +testdata[1].results_label, "Search Pill Mismatch");

		sts = browsePage.getData_searchNoResults()
		assertion.assertEqual(sts.search_NoResult_img, true, "search_NoResult_img status Mismatch");
		assertion.assertEqual(sts.search_NoResult_title, testdata[1].noResultFound.title, "search_NoResult_title text Mismatch");
		assertion.assertEqual(sts.search_NoResult_subTitle, testdata[1].noResultFound.subTitle, "search_NoResult_subTitle text Mismatch");

	},

	//Validate that clicking on a resource from the search suggestion drop down list launches the resource.
	ENG_GLOB_TC_37: function (testdata) {
		sts = browsePage.set_searchBox(testdata.search_txt);
		assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = browsePage.getData_searchList()
		assertion.assertEqual(sts.searchList[0],testdata.expected_txt,"Resource Name Text Mismatch in Dropdown")
		
		sts = browsePage.click_searchList(testdata.expected_txt)
		assertion.assertEqual(sts, true, "Resource status mismatch");

	},

	//Validate that clicking on "More search results for ..xyz" lists the resources based on search text.
	ENG_GLOB_TC_38: function (testdata) {
		sts = browsePage.set_searchBox(testdata[0].search_txt);
		assertion.assertEqual(sts, true, "set_searchBox status Mismatch");

		sts = browsePage.getData_searchList()
		assertion.assertEqual(sts.searchList[0],testdata[0].expected_txt,"Resource Name Text Mismatch in Dropdown")
		
		sts = browsePage.click_showMoreResults()
		assertion.assertEqual(sts.searchPill, testdata[0].search_txt, "Search Pill Mismatch");
		assertion.assertEqual(sts.searchCount, testdata[0].searchResultCount + " " +testdata[1].result_label, "Search Pill Mismatch");

		sts = browsePage.getData_resourceList()
		assertion.assertEqual(sts[0].cardTitle, testdata[0].expected_txt, "cardTitle Mismatch");
		assertion.assertEqual(sts[0].cardSubTitle, testdata[0].tags, "cardSubTitle Mismatch");
		//assertion.assertEqual(sts[0].cardImgIcon, true, "cardImgIcon status Mismatch");
		assertion.assertEqual(sts[0].moreOptionsBtn, '', "moreOptionsBtn text Mismatch");
	},

	//Validate that clicking on close serach button removes the search criteria
	ENG_GLOB_TC_41: function () {

		sts = browsePage.click_clearSearch();
		assertion.assertEqual(sts.searchPill, null, "searchPill status Mismatch");

	},

	//Validate clicking on Filters displays the list of filter categories.
	ENG_GLOB_TC_42: function (testdata) {
		sts = browsePage.click_filtersBtn();
		assertion.assertEqual(sts.filterMenuTitle,testdata.filterMenuTitle,"filterMenuTitle Text Mismatch")
		assertion.assertEqual(sts.filterMenuCloseBtn, '' ,"filterMenuCloseBtn status Mismatch")
		assertion.assertEqual(sts.filterMenuFilterCount,testdata.filterMenuFilterCount,"filterMenuFilterCount Text Mismatch")
		assertion.assertEqual(sts.filterMenuClearAllBtn,testdata.filterMenuClearAllBtn,"filterMenuClearAllBtn Text Mismatch")
		assertion.assertEqual(sts.filterMenuApplyBtn,testdata.filterMenuApplyBtn,"filterMenuApplyBtn Text Mismatch")

	},

	//Validate that clicking on cross icon on Filters screen closes the filter pop up.
	ENG_GLOB_TC_52: function () {

		sts = browsePage.click_filterMenuCloseBtn();
		assertion.assertEqual(sts,true,"filterMenuCloseBtn Status Mismatch")
	},

	
}
