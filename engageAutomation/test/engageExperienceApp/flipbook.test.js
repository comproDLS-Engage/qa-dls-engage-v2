"use strict";
var flipbook = require('../../pages/engageExperienceApp/flipbook.page.js');
var sts, sts2;

module.exports = {

	//Validate the state of flipbook when FLIPBOOK page is launched
	ENG_FLIP_TC_1: async function () {
		sts = await flipbook.getData_flipbookPage();
		await assertion.assertEqual(sts.pageLayoutSingle, false, "pageLayoutSingle status mismatch");
		await assertion.assertEqual(sts.pageLayoutDouble, true, "pageLayoutDouble status mismatch");
		await assertion.assertEqual(sts.undoBtn, null, "undoBtn status mismatch");
		await assertion.assertEqual(sts.redoBtn, null, "redoBtn status mismatch");
		await assertion.assertEqual(sts.notesBtn, "", "notesBtn status mismatch");
		await assertion.assertEqual(sts.zoomInBtn, "", "zoomInBtn status mismatch");
		await assertion.assertEqual(sts.zoomOutBtn, "", "zoomOutBtn status mismatch");
		await assertion.assertEqual(sts.fitToScreenBtn, "", "fitToScreenBtn status mismatch");
		await assertion.assertEqual(sts.doublePageBtn, null, "doublePageBtn status mismatch");
		await assertion.assertEqual(sts.singlePageBtn, "", "singlePageBtn status mismatch");
		await assertion.assertEqual(sts.fullScreenBtn, "", "fullScreenBtn status mismatch");
		await assertion.assertEqual(sts.bookmarkBtn, "", "bookmarkBtn status mismatch");
		await assertion.assertEqual(sts.jumpToPreviousPageBtn, null, "jumpToPreviousPageBtn status mismatch");
		await assertion.assert((sts.TOCBtn instanceof Error) === false, "TOCBtn status mismatch - " + sts.TOCBtn);
		await assertion.assertEqual(sts.previousBtn, "", "previousBtn status mismatch");
		await assertion.assertEqual(sts.nextBtn, "", "nextBtn status mismatch");
	},

	//Validate that clicking on the single page button launches the flipbook in single page
	ENG_FLIP_TC_2: async function (testdata) {
		sts = await flipbook.click_singlePageBtn();
		await assertion.assertEqual(sts, testdata.singlelayoutWidth, "Single Layout width text mismatch");
	},

	//Validate clicking on the Notes button for a New User (blank notes)
	ENG_FLIP_TC_3: async function (testdata) {
		sts = await flipbook.click_notesBtn();
		await assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		await assertion.assertEqual(sts.notesDockBtn,'', "My Notes title status mismatch");
		await assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.noNoteIcon, true, "No note Icon status mismatch");
		await assertion.assertEqual(sts.noNoteText, testdata.noNoteText, "No Note Text status mismatch");
		await assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
	},

	//Validate that clicking on Add Note button on single page launches Add Note Text Area
	ENG_FLIP_TC_4: async function (testdata) {
		sts = await flipbook.click_addNoteBtn();
		await assertion.assertEqual(sts.addNotesTitle, testdata.addNoteTitle, "Add Notes title status mismatch");
		await assertion.assertEqual(sts.notesPageLabel, testdata.pageNoLabel, "page number text mismatch");
		await assertion.assert(sts.notesPageValueSingle.includes(testdata.pageNoValue), "Page Value button text mismatch");
		await assertion.assertEqual(sts.notesCancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		await assertion.assertEqual(sts.notesSaveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate setting and saving of notes by user
	ENG_FLIP_TC_5: async function (testdata) {
		sts = await flipbook.set_notesTextArea(testdata);
		await assertion.assertEqual(sts, true, "status mismatch");
		sts = await flipbook.click_notesSaveBtn();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Click Close button in notes pane
	ENG_FLIP_TC_6: async function () {
		sts = await flipbook.click_notesCloseBtn();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate clicking on the Bookmark button for a new flipbook launches Bookmark pane
	ENG_FLIP_TC_7: async function (testdata) {
		sts = await flipbook.click_bookmarkBtn();
		await assertion.assertEqual(sts.myBookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		await assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		await assertion.assertEqual(sts.noBookmarkText, testdata.noBookmarkText, "No Bookmark Text status mismatch");
		await assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
	},

	//Validate that clicking on 'Bookmark This Page' button launches bookmark text area
	ENG_FLIP_TC_8: async function (testdata) {
		sts = await flipbook.click_addBookmarkBtn();
		await assertion.assertEqual(sts.bookmarkNameLabel, testdata.bookmarkNameLabel, "Bookmarks Name status mismatch");
		await assertion.assertEqual(sts.bookmarkPageLabel, testdata.pageNoLabel, "Bookmarks Name status mismatch");
		await assertion.assert(sts.bookmarkPageValueSingle.includes(testdata.pageNoValue), "Page Value button text mismatch");
		await assertion.assertEqual(sts.bookmarkCancelBtn, testdata.cancelBtn, "Cancel Button Text status mismatch");
		await assertion.assertEqual(sts.bookmarkSaveBtn, testdata.saveBtn, "Save Button status mismatch");
	},

	//Validate on clicking Save button, bookmarks set by the user are saved
	ENG_FLIP_TC_9: async function (testdata) {
		sts = await flipbook.set_bookmarkTextArea(testdata);
		await assertion.assertEqual(sts, true, "status mismatch");
		sts = await flipbook.click_bookmarkSaveBtn();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Click Close button in Bookmark pane closes the pane
	ENG_FLIP_TC_10: async function () {
		sts = await flipbook.click_bookmarkCloseBtn();
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Suite 2 test cases
	//Validate clicking on the Notes button with already created notes, launches the notes list
	ENG_FLIP_TC_11: async function (testdata) {
		sts = await flipbook.click_notesBtn();
		await assertion.assertEqual(sts.myNotesTitle, testdata[0].myNotesTitle, "My Notes title status mismatch");
		await assertion.assertEqual(sts.notesDockBtn,'', "My Notes title status mismatch");
		await assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.addNoteBtn, testdata[0].addNoteBtn, "Add Note Button Text status mismatch");
		sts = await flipbook.getData_notesList();
		await assertion.typeOf(sts, 'object', new Error(sts));
		// for (let i = 0; i < sts.length; i++) { 
        //     assertion.assertEqual(sts[i].noteListItemText, testdata[1].notelistBeforeEdit[i], "Note list Item Text mismatch");
        // }
	},

	//Validate clicking on the Edit button on Notes, launches the edit notes textarea
	ENG_FLIP_TC_12: async function (testdata) {
		sts = await flipbook.click_noteListEditBtn(testdata[0].setNote);
		await assertion.assertEqual(sts.addNotesTitle, testdata[1].editNoteTitle, "Edit Notes title status mismatch");
		await assertion.assertEqual(sts.notesPageLabel, testdata[1].pageNoLabel, "page number status mismatch");
		await assertion.assert(sts.notesPageValueSingle.includes(testdata[1].pageNoValue), "Page Value button text mismatch");
		await assertion.assertEqual(sts.notesCancelBtn, testdata[1].cancelBtn, "Cancel Button Text status mismatch");
		await assertion.assertEqual(sts.notesSaveBtn, testdata[1].saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Notes, launches the delete notes modal
	ENG_FLIP_TC_13: async function (testdata) {
		sts = await flipbook.click_noteListDeleteBtn(testdata[0].setEditedNote);
		await assertion.assertEqual(sts.deleteNoteTitle, testdata[1].deleteNoteModalTitle, "Delete Notes title text mismatch");
		await assertion.assertEqual(sts.deleteNoteSubTitle, testdata[1].deleteNoteModalSubTitle, "Delete Notes Sub titletext mismatch");
		await assertion.assertEqual(sts.deleteNoteCancelBtn, testdata[1].cancelBtn, "Delete Notes Cancel button text mismatch");
		await assertion.assertEqual(sts.deleteNoteDeleteBtn, testdata[1].deleteNoteModalDeleteBtn, "Delete Notes Save button text mismatch");
	},

	//Validate clicking on Delete button on modal deletes the message from the notes list
	ENG_FLIP_TC_14: async function (testdata) {
		sts = await flipbook.click_deleteNoteDeleteBtn();
		await assertion.assertEqual(sts.myNotesTitle, testdata.myNotesTitle, "My Notes title status mismatch");
		await assertion.assertEqual(sts.notesCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.addNoteBtn, testdata.addNoteBtn, "Add Note Button Text status mismatch");
		//Since no Notes are left after deleting the created note:
		await assertion.assertEqual(sts.noNoteIcon, true, "No note Icon status mismatch");
		await assertion.assertEqual(sts.noNoteText, testdata.noNoteText, "No Note Text status mismatch");
	},

	//Validate clicking on the Bookmarks button with already created Bookmarks, launches the bookmarks list
	ENG_FLIP_TC_15: async function (testdata) {
		sts = await flipbook.click_bookmarkBtn();
		await assertion.assertEqual(sts.myBookmarksTitle, testdata.bookmarksTitle, "Bookmarks title status mismatch");
		await assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.addBookmarkBtn, testdata.bookmarkThisPageBtn, "Item Label Text status mismatch");
		sts = await flipbook.getData_bookmarkList(testdata);
		await assertion.typeOf(sts, 'object', new Error(sts));
	},

	//Validate clicking on the Edit button, launches the edit bookmark textarea
	ENG_FLIP_TC_16: async function (testdata) {
		sts = await flipbook.click_bookmarkListEditBtn(testdata[0].setBookmark);
		await assertion.assertEqual(sts.bookmarkNameLabel, testdata[1].bookmarkNameLabel, "Bookmarks close button status mismatch");
		await assertion.assertEqual(sts.bookmarkPageLabel, testdata[1].pageNoLabel, "page number status mismatch");
		await assertion.assert(sts.bookmarkPageValueSingle.includes(testdata[1].pageNoValue), "Page Value button text mismatch");
		await assertion.assertEqual(sts.bookmarkCancelBtn, testdata[1].cancelBtn, "Cancel Button Text status mismatch");
		await assertion.assertEqual(sts.bookmarkSaveBtn, testdata[1].saveBtn, "Save Button status mismatch");
	},

	//Validate clicking on the Delete button on Bookmarks, deletes the BM directly 
	ENG_FLIP_TC_17: async function (testdata) {
		sts = await flipbook.click_bookmarkListDeleteBtn(testdata[0].setEditedBookmark);
		await assertion.assertEqual(sts.myBookmarksTitle, testdata[1].bookmarksTitle, "Bookmarks title status mismatch");
		await assertion.assertEqual(sts.bookmarkCloseBtn, '', "Close Button status mismatch");
		await assertion.assertEqual(sts.addBookmarkBtn, testdata[1].bookmarkThisPageBtn, "Add Bookmark Button Text status mismatch");
		//Since no Bookmarks are left after deleting the created Bookmark:
		await assertion.assertEqual(sts.noBookmarkIcon, true, "No Bookmark Icon status mismatch");
		await assertion.assertEqual(sts.noBookmarkText, testdata[1].noBookmarkText, "No Bookmark Text status mismatch");
	},

	//Validate that clicking on the Zoom In button increases the width and height of the image
	ENG_FLIP_TC_18: async function (testdata) {
		sts = await flipbook.get_flipbookPanelSize();
		sts2 = await flipbook.click_zoomInBtn();
		await assertion.assert((sts2.width > sts.width), "Width comparison failed");
		await assertion.assert((sts2.height > sts.height), "Height comparison failed");
	},

	//Validate that clicking on the Zoom Out button decreases the width and height of the image
	ENG_FLIP_TC_19: async function (testdata) {
		sts = await flipbook.get_flipbookPanelSize();
		sts2 = await flipbook.click_zoomOutBtn();
		await assertion.assert((sts2.width < sts.width), "Width comparison failed");
		await assertion.assert((sts2.width < sts.width), "Height comparison failed");
	},

	//Validate that clicking on TOC button, launches the TOC layover
	ENG_FLIP_TC_20: async function (testdata) {
		sts = await flipbook.click_TOCBtn();
		await assertion.assertEqual(sts.flipbookTitle, testdata[0].flipbookTitle, " text mismatch");
		await assertion.assertEqual(sts.tableOfContentTitle, testdata[1].tableOfContentTitle, " text mismatch");
		await assertion.assertEqual(sts.jumpToPageBtnTOC, '', "jumpToPageBtnTOC text mismatch");
	},

	//Validate entering the page number in input label after clicking the input field in TOC
	ENG_FLIP_TC_21: async function (testdata) {
		sts = await flipbook.click_jumpToPageInput();
		await assertion.assertEqual(sts, true, "Input clicked mismatch");
		sts = await flipbook.set_jumpToPageInput(testdata);
		await assertion.assertEqual(sts, true, "status mismatch");
	},

	//Validate clicking on Jump to page button lauches the entered page in flipbook
	ENG_FLIP_TC_22: async function () {
		sts = await flipbook.click_jumpToPageBtnTOC();
		await assertion.assertEqual(sts.notesBtn, "", "notesBtn status mismatch");
		await assertion.assertEqual(sts.zoomInBtn, "", "zoomInBtn status mismatch");
		await assertion.assertEqual(sts.zoomOutBtn, "", "zoomOutBtn status mismatch");
		await assertion.assertEqual(sts.fitToScreenBtn, "", "fitToScreenBtn status mismatch");
		await assertion.assertEqual(sts.doublePageBtn, "", "doublePageBtn status mismatch");
		await assertion.assertEqual(sts.singlePageBtn, "", "singlePageBtn status mismatch");
		await assertion.assertEqual(sts.fullScreenBtn, "", "fullScreenBtn status mismatch");
		await assertion.assertEqual(sts.bookmarkBtn, "", "bookmarkBtn status mismatch");
		await assertion.assert((sts.TOCBtn instanceof Error) === false, "TOCBtn status mismatch - " + sts.TOCBtn);
		await assertion.assertEqual(sts.previousBtn, "", "previousBtn status mismatch");
		await assertion.assertEqual(sts.nextBtn, "", "nextBtn status mismatch");
	},
	
	//Validate if the page contains any hotlink or not
	ENG_FLIP_TC_23: async function () {
		sts = await flipbook.isHotlinkExists();
		await assertion.assertEqual(sts.hotlinks_isExists, true, "hotlinks status mismatch");
	},

	//Validate that clicking on a hotlink activates it
	ENG_FLIP_TC_24: async function () {
		sts = await flipbook.click_hotlink();
		await assertion.assertEqual(sts.audioPlayer_isExists, true, "audioPlayer_isExists status mismatch");
		await assertion.assertEqual(sts.hotlink_isActive, true, "hotlink_isActive status mismatch");
	}
}
