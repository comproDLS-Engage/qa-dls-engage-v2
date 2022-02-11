"use strict";
var flipbook = require('../../pages/engageExperienceApp/flipBook.page.js');
var sts, sts2;

module.exports = {

	//Validate the state of flipbook when FLIPBOOK page is launched
	ENG_FLIP_TC_1: function () {
		sts = flipbook.getData_flipbookPage();
		assertion.assertEqual(sts.pageLayoutSingle, false, "pageLayoutSingle status mismatch");
		assertion.assertEqual(sts.pageLayoutDouble, true, "pageLayoutDouble status mismatch");
		assertion.assertEqual(sts.undoBtn, null, "undoBtn status mismatch");
		assertion.assertEqual(sts.redoBtn, null, "redoBtn status mismatch");
		assertion.assertEqual(sts.notesBtn, "", "notesBtn status mismatch");
		assertion.assertEqual(sts.zoomInBtn, "", "zoomInBtn status mismatch");
		assertion.assertEqual(sts.zoomOutBtn, "", "zoomOutBtn status mismatch");
		assertion.assertEqual(sts.fitToScreenBtn, "", "fitToScreenBtn status mismatch");
		assertion.assertEqual(sts.doublePageBtn, null, "doublePageBtn status mismatch");
		assertion.assertEqual(sts.singlePageBtn, "", "singlePageBtn status mismatch");
		assertion.assertEqual(sts.fullScreenBtn, "", "fullScreenBtn status mismatch");
		assertion.assertEqual(sts.bookmarkBtn, "", "bookmarkBtn status mismatch");
		assertion.assert((sts.TOCBtn instanceof Error) === false, "TOCBtn status mismatch - " + sts.TOCBtn);
		assertion.assertEqual(sts.previousBtn, "", "previousBtn status mismatch");
		assertion.assertEqual(sts.nextBtn, "", "nextBtn status mismatch");
	},

	//Validate that clicking on the single page button launches the flipbook in single page
	ENG_FLIP_TC_2: function (testdata) {
		sts = flipbook.click_singlePageBtn();
		assertion.assertEqual(sts, testdata.singlelayoutWidth, "Single Layout width text mismatch");
	},

	//Validate clicking on the Notes button for a New User (blank notes)
	ENG_FLIP_TC_3: function (testdata) {
		sts = flipbook.click_notesBtn();
		assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		assertion.assertEqual(sts.notesDockBtn,'', "My Notes title status mismatch");
		assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.noNoteIcon, true, "No note Icon status mismatch");
		assertion.assertEqual(sts.noNoteText, testdata.noNoteText, "No Note Text status mismatch");
		assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
	},

	//Validate that clicking on Add Note button on single page launches Add Note Text Area
	ENG_FLIP_TC_4: function (testdata) {
		sts = flipbook.click_addNoteBtn();
		assertion.assertEqual(sts.addNotesTitle, testdata.addNoteTitle, "Add Notes title status mismatch");
		assertion.assertEqual(sts.notesPageLabel, testdata.pageNoLabel, "page number text mismatch");
		assertion.assert(sts.notesPageValueSingle.includes(testdata.pageNoValue), "Page Value button text mismatch");
		assertion.assertEqual(sts.notesCancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.notesSaveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate setting and saving of notes by user
	ENG_FLIP_TC_5: function (testdata) {
		sts = flipbook.set_notesTextArea(testdata);
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.click_notesSaveBtn();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Click Close button in notes pane
	ENG_FLIP_TC_6: function () {
		sts = flipbook.click_notesCloseBtn();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate clicking on the Bookmark button for a new flipbook launches Bookmark pane
	ENG_FLIP_TC_7: function (testdata) {
		sts = flipbook.click_bookmarkBtn();
		assertion.assertEqual(sts.myBookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		assertion.assertEqual(sts.noBookmarkText, testdata.noBookmarkText, "No Bookmark Text status mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
	},

	//Validate that clicking on 'Bookmark This Page' button launches bookmark text area
	ENG_FLIP_TC_8: function (testdata) {
		sts = flipbook.click_addBookmarkBtn();
		assertion.assertEqual(sts.bookmarkNameLabel, testdata.bookmarkNameLabel, "Bookmarks Name status mismatch");
		assertion.assertEqual(sts.bookmarkPageLabel, testdata.pageNoLabel, "Bookmarks Name status mismatch");
		assertion.assert(sts.bookmarkPageValueSingle.includes(testdata.pageNoValue), "Page Value button text mismatch");
		assertion.assertEqual(sts.bookmarkCancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.bookmarkSaveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate on clicking Save button, bookmarks set by the user are saved
	ENG_FLIP_TC_9: function (testdata) {
		sts = flipbook.set_bookmarkTextArea(testdata);
		assertion.assertEqual(sts, true, "status mismatch");
		sts = flipbook.click_bookmarkSaveBtn();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Click Close button in Bookmark pane closes the pane
	ENG_FLIP_TC_10: function () {
		sts = flipbook.click_bookmarkCloseBtn();
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Suite 2 test cases
	//Validate clicking on the Notes button with already created notes, launches the notes list
	ENG_FLIP_TC_11: function (testdata) {
		sts = flipbook.click_notesBtn();
		assertion.assertEqual(sts.myNotesTitle, testdata[0].myNotesTitle, "My Notes title status mismatch");
		assertion.assertEqual(sts.notesDockBtn,'', "My Notes title status mismatch");
		assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.addNoteBtn, testdata[0].addNoteBtn, "Add Note Button Text status mismatch");
		sts = flipbook.getData_notesList();
		assertion.typeOf(sts, 'object', new Error(sts));
		// for (let i = 0; i < sts.length; i++) { 
        //     assertion.assertEqual(sts[i].noteListItemText, testdata[1].notelistBeforeEdit[i], "Note list Item Text mismatch");
        // }
	},

	//Validate clicking on the Edit button on Notes, launches the edit notes textarea
	ENG_FLIP_TC_12: function (testdata) {
		sts = flipbook.click_noteListEditBtn(testdata[0].setNote);
		assertion.assertEqual(sts.addNotesTitle, testdata[1].editNoteTitle, "Edit Notes title status mismatch");
		assertion.assertEqual(sts.notesPageLabel, testdata[1].pageNoLabel, "page number status mismatch");
		assertion.assert(sts.notesPageValueSingle.includes(testdata[1].pageNoValue), "Page Value button text mismatch");
		assertion.assertEqual(sts.notesCancelBtn, testdata[1].cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.notesSaveBtn, testdata[1].saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Notes, launches the delete notes modal
	ENG_FLIP_TC_13: function (testdata) {
		sts = flipbook.click_noteListDeleteBtn(testdata[0].setEditedNote);
		assertion.assertEqual(sts.deleteNoteTitle, testdata[1].deleteNoteModalTitle, "Delete Notes title text mismatch");
		assertion.assertEqual(sts.deleteNoteSubTitle, testdata[1].deleteNoteModalSubTitle, "Delete Notes Sub titletext mismatch");
		assertion.assertEqual(sts.deleteNoteCancelBtn, testdata[1].cancelBtn, "Delete Notes Cancel button text mismatch");
		assertion.assertEqual(sts.deleteNoteDeleteBtn, testdata[1].deleteNoteModalDeleteBtn, "Delete Notes Save button text mismatch");
	},

	//Validate clicking on Delete button on modal deletes the message from the notes list
	ENG_FLIP_TC_14: function (testdata) {
		sts = flipbook.click_deleteNoteDeleteBtn();
		assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
		//Since no Notes are left after deleting the created note:
		assertion.assertEqual(sts.noNoteIcon, true, "No note Icon status mismatch");
		assertion.assertEqual(sts.noNoteText, testdata.noNoteText, "No Note Text status mismatch");
	},

	//Validate clicking on the Bookmarks button with already created Bookmarks, launches the bookmarks list
	ENG_FLIP_TC_15: function (testdata) {
		sts = flipbook.click_bookmarkBtn();
		assertion.assertEqual(sts.myBookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Item Label Text status mismatch");
		sts = flipbook.getData_bookmarkList(testdata);
		assertion.typeOf(sts, 'object', new Error(sts));
	},

	//Validate clicking on the Edit button, launches the edit bookmark textarea
	ENG_FLIP_TC_16: function (testdata) {
		sts = flipbook.click_bookmarkListEditBtn(testdata[0].setBookmark);
		assertion.assertEqual(sts.bookmarkNameLabel, testdata[1].bookmarkNameLabel, "Bookmarks close button status mismatch");
		assertion.assertEqual(sts.bookmarkPageLabel, testdata[1].pageNoLabel, "page number status mismatch");
		assertion.assert(sts.bookmarkPageValueSingle.includes(testdata[1].pageNoValue), "Page Value button text mismatch");
		assertion.assertEqual(sts.bookmarkCancelBtn, testdata[1].cancelBtn, "Cancel Button Text status mismatch");
		assertion.assertEqual(sts.bookmarkSaveBtn, testdata[1].saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Bookmarks, deletes the BM directly 
	ENG_FLIP_TC_17: function (testdata) {
		sts = flipbook.click_bookmarkListDeleteBtn(testdata[0].setEditedBookmark);
		assertion.assertEqual(sts.myBookmarksTitle, testdata[1].bookmarksTitle, "Bookmarks title status mismatch");
		assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		assertion.assertEqual(sts.addBookmarkBtn, testdata[1].bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
		//Since no Bookmarks are left after deleting the created Bookmark:
		assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		assertion.assertEqual(sts.noBookmarkText, testdata[1].noBookmarkText, "No Bookmark Text status mismatch");
	},

	//Validate that clicking on the Zoom In button increases the width and height of the image
	ENG_FLIP_TC_18: function (testdata) {
		sts = flipbook.get_flipbookPanelSize();
		sts2 = flipbook.click_zoomInBtn();
		assertion.assert((sts2.width > sts.width), "Width comparison failed");
		assertion.assert((sts2.height > sts.height), "Height comparison failed");
	},

	//Validate that clicking on the Zoom Out button decreases the width and height of the image
	ENG_FLIP_TC_19: function (testdata) {
		sts = flipbook.get_flipbookPanelSize();
		sts2 = flipbook.click_zoomOutBtn();
		assertion.assert((sts2.width < sts.width), "Width comparison failed");
		assertion.assert((sts2.width < sts.width), "Height comparison failed");
	},

	//Validate that clicking on TOC button, launches the TOC layover
	ENG_FLIP_TC_20: function (testdata) {
		sts = flipbook.click_TOCBtn();
		assertion.assertEqual(sts.flipbookTitle, testdata[0].flipbookTitle, " text mismatch");
		assertion.assertEqual(sts.tableOfContentTitle, testdata[1].tableOfContentTitle, " text mismatch");
		assertion.assertEqual(sts.jumpToPageBtn, '', "jumpToPageBtn text mismatch");
	},

	//Validate entering the page number in input label after clicking the input field in TOC
	ENG_FLIP_TC_21: function (testdata) {
		sts = flipbook.click_jumpToPageInput();
		assertion.assertEqual(sts, true, "Input clicked mismatch");
		sts = flipbook.set_jumpToPageInput(testdata);
		assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate clicking on Jump to page button lauches the entered page in flipbook
	ENG_FLIP_TC_22: function () {
		sts = flipbook.click_jumpToPageBtn();
		assertion.assertEqual(sts.notesBtn, "", "notesBtn status mismatch");
		assertion.assertEqual(sts.zoomInBtn, "", "zoomInBtn status mismatch");
		assertion.assertEqual(sts.zoomOutBtn, "", "zoomOutBtn status mismatch");
		assertion.assertEqual(sts.fitToScreenBtn, "", "fitToScreenBtn status mismatch");
		assertion.assertEqual(sts.doublePageBtn, "", "doublePageBtn status mismatch");
		assertion.assertEqual(sts.singlePageBtn, "", "singlePageBtn status mismatch");
		assertion.assertEqual(sts.fullScreenBtn, "", "fullScreenBtn status mismatch");
		assertion.assertEqual(sts.bookmarkBtn, "", "bookmarkBtn status mismatch");
		assertion.assert((sts.TOCBtn instanceof Error) === false, "TOCBtn status mismatch - " + sts.TOCBtn);
		assertion.assertEqual(sts.previousBtn, "", "previousBtn status mismatch");
		assertion.assertEqual(sts.nextBtn, "", "nextBtn status mismatch");
	},
	
}
