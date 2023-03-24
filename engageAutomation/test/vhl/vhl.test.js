"use strict";
const loginPage = require('../../pages/vhl/login.page.js');
const homePage = require('../../pages/vhl/home.page.js');
const { test } = require('mocha');
var sts;

module.exports = {

	// Validate that user is able to login to the back office application
	VHL_TC_1: async function (testdata) {
		sts = await loginPage.isInitialized();
		await assertion.assertEqual(sts, true, "Login page status mismatch");
		sts = await loginPage.set_UserName(testdata.email);
		await assertion.assertEqual(sts, true, "Username status mismatch");
		sts = await loginPage.set_Password(testdata.password);
		await assertion.assertEqual(sts, true, "Password status mismatch");
		sts = await loginPage.click_Login_Button();
		//assertion.assertEqual(sts, testdata.name, "Name mismatch");
		await assertion.assertEqual(sts, true, "Home page status mismatch");
	},
	VHL_TC_2: async function (testdata) {
		sts = await homePage.click_hotlinkbtn();
		await assertion.assertEqual(sts.hotlinkName, 'Hide Hotlinks', "hotlink are highlighted");
		await assertion.assertEqual(sts.hotlinkHighlighted, 'true', "hotlink are highlighted");
	},
	VHL_TC_3: async function (testdata) {
		sts = await homePage.click_hotlinkbtn();
		await assertion.assertEqual(sts.hotlinkName, 'Show Hotlinks', "hotlink are highlighted");
		await assertion.assertEqual(sts.hotlinkHighlighted, 'false', "hotlink are highlighted");
	},
	VHL_TC_4: async function (testdata) {
		sts = await homePage.click_PageHotlink();
		for (var i = 0; i < sts.length; i++) {
			if (sts[i].mediaPlayer == true) {
				await assertion.assertEqual(sts[i].mediaPlayer, true, "Media Player exist");
			} else {
				await assertion.assertEqual(sts[i].hideBookbtn, true, "Hide book btn exist");
				await assertion.assertEqual(sts[i].vhlData.vhlHeader, 'VHL Central', "vhlHeader is not matched");
			}
		}
	},
	VHL_TC_5: async function (testdata) {
		sts = await homePage.click_donebtn();
	},
	// validate the notes pane for blank notes
	VHL_TC_6: async function (testdata) {
		sts = await homePage.click_notesbtn();
		await assertion.assertEqual(sts.notesHeader, testdata.notesHeader, "notesHeader text mismatch");
		await assertion.assertEqual(sts.notesCancelbtn, true, "notesCancelbtn text mismatch");
		await assertion.assertEqual(sts.undockbtn, true, "undockbtn text mismatch");
	},
	VHL_TC_7: async function (testdata) {
		sts = await homePage.getData_footer(testdata);
		await assertion.assertEqual(sts.notesbtn, true, "notesbtn Values is not as expected.");
		await assertion.assertEqual(sts.hotlinkbtn, true, "hotlinkbtn Values is not as expected.");
		await assertion.assertEqual(sts.zoominbtn, true, "zoominbtn Values is not as expected.");
		await assertion.assertEqual(sts.zoomresetbtn, true, "zoomresetbtn Values is not as expected.");
		await assertion.assertEqual(sts.zoomoutbtn, true, "zoomoutbtn Values is not as expected.");
		await assertion.assertEqual(sts.fullPagebtn, true, "fullPagebtn Values is not as expected.");
		await assertion.assertEqual(sts.bookmarkbtn, true, "bookmarkbtn Values is not as expected.");
		await assertion.assertEqual(sts.tocbtn, true, "tocbtn Values is not as expected.");
		await assertion.assertEqual(sts.prevActivityBtn, true, "prevActivityBtn Values is not as expected.");
		await assertion.assertEqual(sts.nextActivityBtn, true, "nextActivityBtn Values is not as expected.");
		await assertion.assertEqual(sts.searchbtn, true, "searchbtn Values is not as expected.");
	},
	VHL_TC_8: async function (testdata) {
		sts = await homePage.click_addNotebtn();
		await assertion.assertEqual(sts, true, "addNotebtn are not Clicked");
	},
	VHL_TC_9: async function (testdata) {
		sts = await homePage.set_notesTextBox(testdata);
		await assertion.assertEqual(sts, true, "notesTextBox values are not set");

	},
	VHL_TC_10: async function (testdata) {
		sts = await homePage.click_savebtn();
		await assertion.assertEqual(sts, true, "savebtn are not Clicked");
	},

	VHL_TC_11: async function (testdata) {
		sts = await homePage.click_cancelbtn();
		await assertion.assertEqual(sts, true, "cancelbtn are not Clicked");
	},
	// validate the notes pane when notes added
	VHL_TC_12: async function (testdata) {
		sts = await homePage.getData_notesPanel();
		await assertion.assertEqual(sts[0].notesCardLabel, "p. 4", "notesCardLabel text mismatch");
		await assertion.assertEqual(sts[0].deletebtn, true, "deletebtn text mismatch");
		await assertion.assertEqual(sts[0].editbtn, true, "editbtn text mismatch");
		await assertion.assertEqual(sts[0].notesText, testdata.notesText, "notesText text mismatch");
	},
	// Validate the notes pane when no notes added
	VHL_TC_13: async function (testdata) {
		sts = await homePage.getData_notesPanel();
		await assertion.assertEqual(sts.noNotesMsg, testdata.noNotesMsg, "noNotesMsg text mismatch");
		await assertion.assertEqual(sts.notesTextBox, null, "notesTextBox text mismatch");
	},
	VHL_TC_14: async function (testdata) {
		sts = await homePage.click_deletebtn(testdata[0]);
		await assertion.assertEqual(sts.deleteNotespaneHeader, testdata[1].deleteNotespaneHeader, "deleteNotespaneHeader text mismatch");
		await assertion.assertEqual(sts.deleteNotespaneSubHeader, testdata[1].deleteNotespaneSubHeader, "deleteNotespaneSubHeader text mismatch");
		await assertion.assertEqual(sts.deleteNotespanenotestdata, testdata[1].deleteNotespanenotestdata, "deleteNotespanenotestdata text mismatch");
		await assertion.assertEqual(sts.notesDeletebtn, testdata[1].notesDeletebtn, "notesDeletebtn text mismatch");
		await assertion.assertEqual(sts.notesCancelbtn, testdata[1].notesCancelbtn, "notesCancelbtn text mismatch");
	},

	VHL_TC_15: async function (testdata) {
		sts = await homePage.click_editbtn(testdata.notesText);
		await assertion.assertEqual(sts, true, "editbtn are not Clicked");
	},
	VHL_TC_16: async function (testdata) {
		sts = await homePage.getData_notesdeletePanel(testdata);
		await assertion.assertEqual(sts.deleteNotespaneHeader, testdata.deleteNotespaneHeader, "deleteNotespaneHeader Values is not as expected.");
		await assertion.assertEqual(sts.deleteNotespaneSubHeader, testdata.deleteNotespaneSubHeader, "deleteNotespaneSubHeader Values is not as expected.");
		await assertion.assertEqual(sts.deleteNotespanenotestdata, testdata.deleteNotespanenotestdata, "deleteNotespanenotestdata Values is not as expected.");
		await assertion.assertEqual(sts.deleteNotespaneDeletebtn, testdata.deleteNotespaneDeletebtn, "notesDeletebtn Values is not as expected.");
		await assertion.assertEqual(sts.deleteNotespaneCancelbtn, testdata.deleteNotespaneCancelbtn, "notesCancelbtn Values is not as expected.");
	},
	VHL_TC_17: async function (testdata) {
		sts = await homePage.click_deleteNotespaneDeletebtn();
		await assertion.assertEqual(sts, true, "deleteNotespaneDeletebtn are not Clicked");
	},
	VHL_TC_18: async function (testdata) {
		sts = await homePage.click_notesCancelbtn();
		await assertion.assertEqual(sts, true, "notesCancelbtn are not Clicked");
	},
	VHL_TC_19: async function (testdata) {
		sts = await homePage.click_bookmarkbtn();
		await assertion.assertEqual(sts.bookmarkheader, testdata.bookmarkheader, "bookmarkheader text mismatch");
		await assertion.assertEqual(sts.bookmarkCancelbtn, true, "bookmarkCancelbtn text mismatch");
		await assertion.assertEqual(sts.undockbookmarkpanelbtn, true, "undockbookmarkpanelbtn text mismatch");
	},
	// Validate the bookmark pane when no bookmark added
	VHL_TC_20: async function (testdata) {
		sts = await homePage.getData_bookmarkPanel();
		await assertion.assertEqual(sts.nobookmarkMsg, testdata.nobookmarkMsg, "nobookmarkMsg text mismatch");
		await assertion.assertEqual(sts.nobookmarkImg, true, "nobookmarkImg text mismatch");
	},
	VHL_TC_21: async function (testdata) {
		sts = await homePage.click_bookmarkcarddeletebtn(testdata.bookmarkText);
		await assertion.assertEqual(sts, true, "bookmarkcarddeletebtn are not Clicked");
	},
	VHL_TC_22: async function (testdata) {
		sts = await homePage.click_bookmarkthisPagebtn();
		await assertion.assertEqual(sts.bookmarkLabelText, testdata.bookmarkLabelText, "bookmarkLabelText text mismatch");
		await assertion.assertEqual(sts.addbookmarkheader, testdata.addbookmarkheader, "addbookmarkheader text mismatch");
		await assertion.assertEqual(sts.bookmarkPanelSavebtn, testdata.bookmarkPanelSavebtn, "bookmarkPanelSavebtn text mismatch");
		await assertion.assertEqual(sts.bookmarkPanelCancelbtn, testdata.bookmarkPanelCancelbtn, "bookmarkPanelCancelbtn text mismatch");
	},
	VHL_TC_23: async function (testdata) {
		sts = await homePage.set_bookmarkPanelTextbox(testdata);
		await assertion.assertEqual(sts, true, "bookmarkPanelTextbox values are not set");

	},
	VHL_TC_24: async function (testdata) {
		sts = await homePage.click_bookmarkPanelSavebtn();
		await assertion.assertEqual(sts, true, "bookmarkPanelSavebtn are not Clicked");
	},
	VHL_TC_25: async function (testdata) {
		sts = await homePage.getData_bookmarkPanel();
		await assertion.assertEqual(sts[0].bookmarkTextbox, testdata.bookmarkText, "bookmarkTextbox text mismatch");
		await assertion.assertEqual(sts[0].bookmarkcarddeletebtn, true, "bookmarkcarddeletebtn text mismatch");
		await assertion.assertEqual(sts[0].bookmarkcardEditbtn, true, "bookmarkcardEditbtn text mismatch");
	},
	VHL_TC_26: async function (testdata) {
		sts = await homePage.click_bookmarkCancelbtn();
		await assertion.assertEqual(sts, true, "bookmarkCancelbtn are not Clicked");
	},
	VHL_TC_27: async function (testdata) {
		sts = await homePage.set_notesEditTextBox(testdata);
		await assertion.assertEqual(sts, true, "notesTextBox values are not set");

	},
	VHL_TC_28: async function (testdata) {
		sts = await homePage.click_bookmarkcardEditbtn(testdata);
		await assertion.assertEqual(sts, true, "bookmarkcardEditbtn are not Clicked");
	},
	VHL_TC_29: async function (testdata) {
		sts = await homePage.click_searchbtn();
		await assertion.assertEqual(sts.searchTitle, testdata.searchTitle, "searchTitle text mismatch");
		await assertion.assertEqual(sts.searchCancelbtn, true, "searchCancelbtn text mismatch");
		await assertion.assertEqual(sts.undocksearchpanelbtn, true, "undocksearchpanelbtn mismatch");
		await assertion.assertEqual(sts.searchTextbox, true, "searchTextbox text mismatch");
		await assertion.assertEqual(sts.searchTipsHeader, testdata.searchTipsHeader, "searchTipsHeader text mismatch");
		await assertion.assertEqual(sts.searchTipsHeaderIcon, true, "searchTipsHeaderIcon  mismatch");
		await assertion.assertEqual(sts.searchTipsSubHeadertext, testdata.searchTipsSubHeadertext, "searchTipsSubHeadertext text mismatch");
		await assertion.assertEqual(sts.searchbtn, testdata.searchbtn, "searchbtn text mismatch");
	},
	VHL_TC_30: async function (testdata) {
		sts = await homePage.set_searchTextbox(testdata[0]);
		await assertion.assertEqual(sts, testdata[1].searchTextbtn, "searchTextbox values are not set");

	},
	VHL_TC_31: async function (testdata) {
		sts = await homePage.click_searchTextbtn();
		await assertion.assert(sts.searchResult.includes(testdata.searchResult), "searchResult text mismatch");
		await assertion.assertEqual(sts.searchTextbtn, testdata.searchTextbtn1, "searchTextbox values are not set");
		//	await assertion.assertEqual(sts[0].searchList, true, "searchList text mismatch");
		//await assertion.assertEqual(sts[0].searchListIcon, true ,"searchListIcon text mismatch");
		/*await assertion.assertEqual(sts.searchListtext, testdata.searchListtext, "searchListtext text mismatch");
		await assertion.assertEqual(sts.searchListheader, testdata.searchListheader, "searchListheader text mismatch");
		await assertion.assertEqual(sts.searchpreviouspage_btn, true, "searchpreviouspage_btn text mismatch");
		await assertion.assertEqual(sts.searchnextpage_btn, true, "searchnextpage_btn text mismatch");*/
	},
	VHL_TC_32: async function (testdata) {
		sts = await homePage.click_searchCancelbtn();
		await assertion.assertEqual(sts, true, "searchCancelbtn are not Clicked");
	},
	VHL_TC_33: async function (testdata) {
		sts = await homePage.click_searchTextbtn();
		await assertion.assertEqual(sts.searchpreviouspage_btn, null, "searchpreviouspage_btn text mismatch");
		await assertion.assertEqual(sts.searchnextpage_btn, null, "searchnextpage_btn text mismatch");
		sts = await homePage.getData_searchPanel()
		await assertion.assertEqual(sts.searchTitle, testdata.searchTitle, "searchTitle text mismatch");
		await assertion.assertEqual(sts.searchCancelbtn, true, "searchCancelbtn text mismatch");
		await assertion.assertEqual(sts.docksearchpanelbtn, true, "docksearchpanelbtn text mismatch");
		await assertion.assertEqual(sts.searchTextbox, true, "searchTextbox text mismatch");
		await assertion.assertEqual(sts.searchTipsHeader, testdata.searchTipsHeader, "searchTipsHeader text mismatch");
		await assertion.assertEqual(sts.searchTipsHeaderIcon, true, "searchTipsHeaderIcon text mismatch");
		await assertion.assertEqual(sts.searchTipsSubHeadertext, testdata.searchTipsSubHeadertext, "searchTipsSubHeadertext text mismatch");
	},
	// when no search data is displayed
	VHL_TC_34: async function (testdata) {
		sts = await homePage.getData_searchPanel();
		await assertion.assertEqual(sts.searchTitle, testdata.searchTitle, "searchTitle text mismatch");
		await assertion.assertEqual(sts.searchCancelbtn, true, "searchCancelbtn text mismatch");
		await assertion.assertEqual(sts.undocksearchpanelbtn, true, "undocksearchpanelbtn text mismatch");
		await assertion.assertEqual(sts.searchTextbox, true, "searchTextbox text mismatch");
		await assertion.assertEqual(sts.searchbtn, testdata.searchbtn, "searchbtn text mismatch");
		await assertion.assertEqual(sts.nosearchIcon, true, "nosearchIcon text mismatch");
		await assertion.assertEqual(sts.nosearchTitle, testdata.nosearchTitle, "nosearchTitle text mismatch");
		await assertion.assertEqual(sts.nosearchSubTitle, testdata.nosearchSubTitle, "nosearchSubTitle text mismatch");
	},
	VHL_TC_35: async function (testdata) {
		sts = await homePage.getData_searchResult();
		await assertion.assertEqual(sts[0].searchList, true, "searchList text mismatch");
		await assertion.assertEqual(sts[0].searchListIcon, true, "searchListIcon text mismatch");
		//await assertion.assertEqual(sts.searchListtext, testdata.searchListtext, "searchListtext text mismatch");
		//await assertion.assertEqual(sts.searchListheader, testdata.searchListheader, "searchListheader text mismatch");
		await assertion.assertEqual(sts.searchpreviouspage_btn, true, "searchpreviouspage_btn text mismatch");
		await assertion.assertEqual(sts.searchnextpage_btn, true, "searchnextpage_btn text mismatch");
		await assertion.assert(sts.searchResult.includes(testdata.searchResult), "searchResult text mismatch");
		await assertion.assertEqual(sts.searchSortbtn, true, "searchSortbtn text mismatch");
	},
	VHL_TC_36: async function (testdata) {
		sts = await homePage.click_docksearchpanelbtn();
		await assertion.assertEqual(sts, true, "docksearchpanelbtn are not Clicked");
	},

	VHL_TC_37: async function (testdata) {
		sts = await homePage.click_searchList();
		await assertion.assertEqual(sts, true, "searchList are not Clicked");
	},
}
