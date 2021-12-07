"use strict";
var flipbook = require('../../pages/engageExperienceApp/flipBook.page.js');
var sts;

module.exports = {

	//Validate that flipbook is launched (Desktop)
	ENG_FLIP_TC_1: function () {
		sts = flipbook.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "flipbook page status mismatch");
		assertion.assertEqual(sts.appShellPage.header, true, "appshell header status mismatch");
	},

	//Validate that clicking on the single page button launches the flipbook in single page
	ENG_FLIP_TC_2: function (testdata) {
		sts = flipbook.click_singlePageBtn();
		assertion.assertEqual(sts, testdata.singlelayoutWidth, "Single Layout width text mismatch");

	},

	//Validate clicking on the Notes button for a New User (blank notes)
	ENG_FLIP_TC_3: function (testdata) {
		sts = flipbook.click_notesBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.getData_blankNotes(testdata);
		assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		assertion.assertEqual(sts.closeBtnNotes, true, "Close Button status mismatch");
		assertion.assertEqual(sts.noNoteIcon, true, "No note Icon status mismatch");
		assertion.assertEqual(sts.noNoteText, testdata.noNoteText, "No Note Text status mismatch");
		assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
	},

	//Validate that clicking on Add Note button on single page launches Add Note Text Area
	ENG_FLIP_TC_4: function (testdata) {
		sts = flipbook.click_addNoteBtn();
		assertion.assertEqual(sts.addNotesTitle, testdata.addNoteTitle, "Add Notes title status mismatch");
		assertion.assertEqual(sts.closeBtnNotes, true, "Notes close button status mismatch");
		assertion.assertEqual(sts.pageNumberLabelNotes, testdata.pageNoLabel, "page number text mismatch");
		assertion.assertEqual(sts.pageNumberValueNotes, testdata.pageNoValue, "page Value button text mismatch");
		assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.saveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate on clicking Save button, notes set by the user are saved
	ENG_FLIP_TC_5: function (testdata) {
		sts = flipbook.set_textAreaNotes(testdata);
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.click_saveBtn();
	},

	//Click Close button in notes pane
	ENG_FLIP_TC_6: function () {
		sts = flipbook.click_closeBtn_notes();
	},

	//Validate clicking on the Bookmark button for a new flipbook launches Bookmark pane
	ENG_FLIP_TC_7: function (testdata) {
		sts = flipbook.click_bookmarkBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.getData_noBookmarks(testdata);
		assertion.assertEqual(sts.bookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.closeBtnBookmarks, true, "Close Button status mismatch");
		assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		assertion.assertEqual(sts.noBookmarkText, testdata.noBookmarkText, "No Bookmark Text status mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
	},

	//Validate that clicking on 'Bookmark This Page' button launches bookmark text area
	ENG_FLIP_TC_8: function (testdata) {
		sts = flipbook.click_addBookmarkBtn();
		assertion.assertEqual(sts.bookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.closeBtnBookmarks, true, "Bookmarks close button status mismatch");
		assertion.assertEqual(sts.pageNumberLabelBookmarks, testdata.pageNoLabel, "page number status mismatch");
		assertion.assertEqual(sts.pageNumberValueBookmarks, testdata.pageNoValue, "pageNoValue button text mismatch");
		assertion.assertEqual(sts.bookmarkNameLabel, testdata.bookmarkNameLabel, "Bookmarks Name status mismatch");
		assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.saveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate on clicking Save button, bookmarks set by the user are saved
	ENG_FLIP_TC_9: function (testdata) {
		sts = flipbook.set_textBookmark(testdata);
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.click_saveBtn();
	},

	//Click Close button in Bookmark pane closes the pane
	ENG_FLIP_TC_10: function () {
		sts = flipbook.click_closeBtnBookmarks();
	},

	//SUite 2 test cases
	//Validate clicking on the Notes button with already created notes, launches the notes list
	ENG_FLIP_TC_11: function (testdata) {
		sts = flipbook.click_notesBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.getData_myNotesList(testdata);
		assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		assertion.assertEqual(sts.notesDockBtn, true, "Dock Button status mismatch");
		assertion.assertEqual(sts.closeBtnNotes, true, "Close Button status mismatch");
		assertion.assertEqual(sts.myNotesPageProduct, testdata.notesListPagenumber, "Page number status mismatch");
		assertion.assertEqual(sts.myNotesAllPagesProduct, testdata.allPagesLabel, "All pages Text status mismatch");
		assertion.assertEqual(sts.noteListItemLabel, testdata.noteListItemLabel, "Item lAbel Text status mismatch");
		assertion.assertEqual(sts.noteListDeleteBtn, true, "Delete button status mismatch");
		assertion.assertEqual(sts.noteListEditBtn, true, "Edit button status mismatch");
		assertion.assertEqual(sts.noteListItemText, testdata.setNote, "Note list Item Text mismatch");
		assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
	},

	//Validate clicking on the Edit button, launches the edit notes textarea
	ENG_FLIP_TC_12: function (testdata) {
		sts = flipbook.click_editNoteBtn();
		assertion.assertEqual(sts.editNotesTitle, testdata.editNotesTitle, "Edit Notes title status mismatch");
		assertion.assertEqual(sts.closeBtnNotes, true, "Close Button status mismatch");
		assertion.assertEqual(sts.pageNumberLabelNotes, testdata.pageNoLabel, "page number status mismatch");
		assertion.assertEqual(sts.pageNumberValueNotes, testdata.pageNoValue, "pageNoValue button text mismatch");
		assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.saveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Notes, launches the delete notes modal
	ENG_FLIP_TC_13: function (testdata) {
		sts = flipbook.click_deleteNoteBtn();
		assertion.assertEqual(sts.deleteNoteModalTitle, testdata.deleteNoteModalTitle, "Delete Notes title text mismatch");
		assertion.assertEqual(sts.deleteNoteModalSubTitle, testdata.deleteNoteModalSubTitle, "Delete Notes Sub titletext mismatch");
		assertion.assertEqual(sts.deleteNoteModalCancelBtn, testdata.cancelBtn, "Delete Notes Cancel button text mismatch");
		assertion.assertEqual(sts.deleteNoteModalDeleteBtn, testdata.deleteNoteModalDeleteBtn, "Delete Notes Save button text mismatch");
	},

	//Validate clicking on Delete button on modal deletes the message from the notes list
	ENG_FLIP_TC_14: function () {
		sts = flipbook.click_modalDeleteBtn();
	},

	//Validate clicking on the Bookmarks button with already created Bookmarks, launches the bookmarks list
	ENG_FLIP_TC_15: function (testdata) {
		sts = flipbook.click_bookmarkBtn();
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.getData_bookmarksList(testdata);
		assertion.assertEqual(sts.bookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.closeBtnBookmarks, true, "Close Button status mismatch");
		assertion.assertEqual(sts.bookmarkListItemLabel, testdata.noteListItemLabel, "Item Label Text status mismatch");
		assertion.assertEqual(sts.bookmarkListDeleteBtn, true, "Delete button status mismatch");
		assertion.assertEqual(sts.bookmarkListEditBtn, true, "Edit button status mismatch");
		assertion.assertEqual(sts.bookmarkListItemName, testdata.setBookmark, "Bookmark list Item Name Text mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
	},

	//Validate clicking on the Edit button, launches the edit bookmark textarea
	ENG_FLIP_TC_16: function (testdata) {
		sts = flipbook.click_editBookmarkBtn();
		assertion.assertEqual(sts.editBookmarkTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.closeBtnBookmarks, true, "Bookmarks close button status mismatch");
		assertion.assertEqual(sts.pageNumberLabelBookmarks, testdata.pageNoLabel, "page number status mismatch");
		assertion.assertEqual(sts.pageNumberValueBookmarks, testdata.pageNoValue, "pageNoValue button text mismatch");
		assertion.assertEqual(sts.bookmarkNameLabel, testdata.bookmarkNameLabel, "Bookmarks Name status mismatch");
		assertion.assertEqual(sts.cancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.saveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Bookmarks, deletes the BM directly and launches BM list or no BM list
	ENG_FLIP_TC_17: function (testdata) {
		sts = flipbook.click_deleteBookmarkBtn();
		sts = flipbook.getData_noBookmarks();
		assertion.assertEqual(sts.bookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.closeBtnBookmarks, true, "Close Button status mismatch");
		assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		assertion.assertEqual(sts.noBookmarkText, testdata.noBookmarkText, "No Bookmark Text status mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
	},

	//Validate that clicking on the Zoom In button increases the width and height of the image
	//Default launch width = 1411 px, height = 1733 px

	//after one zoom = 1796, 2205
	ENG_FLIP_TC_18: function (testdata) {
		sts = flipbook.click_zoomInBtn();
		console.log("sts.width =",sts.width)
		console.log("sts.height =",sts.height)
		console.log("testdata.singlelayoutDefaultWidth =",testdata.singlelayoutDefaultWidth)
		console.log("testdata.singlelayoutDefaultHeight = ",testdata.singlelayoutDefaultHeight)
		assertion.assert((sts.width > testdata.singlelayoutDefaultWidth), "Width comparison failed");
		assertion.assert((sts.height > testdata.singlelayoutDefaultHeight), "Height comparison failed");

	},

	//Validate that clicking on the Zoom Out button decreases the width and height of the image
	//after one zoom out = 1276, 1567
	ENG_FLIP_TC_19: function (testdata) {
		sts = flipbook.click_zoomOutBtn();
		sts = flipbook.click_zoomOutBtn();
		console.log("sts.width =",sts.width)
		console.log("sts.height =",sts.height)
		console.log("testdata.singlelayoutDefaultWidth =",testdata.singlelayoutDefaultWidth)
		console.log("testdata.singlelayoutDefaultHeight = ",testdata.singlelayoutDefaultHeight)
		assertion.assert((sts.width < testdata.singlelayoutDefaultWidth), "Width comparison failed");
		assertion.assert((sts.height < testdata.singlelayoutDefaultHeight), "Height comparison failed");
	}
}
