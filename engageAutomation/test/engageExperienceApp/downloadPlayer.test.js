'use strict';
var downloadPlayer = require('../../pages/engageExperienceApp/downloadPlayer.page.js');
var sts;

module.exports = {

	//Validate that clicking on the download button downloads the resource file
	ENG_DOWN_TC_1: function () {
		sts = downloadPlayer.click_downloadBtn();
		assertion.assertEqual(sts, true, "Download button status mismatch");
	},

	//Validate the content of download player for Word Resource
	ENG_DOWN_TC_2: function (testdata) {
		sts = downloadPlayer.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = downloadPlayer.getData_downloadPlayer();
		assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
		assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
	},

	//Validate the content of download player for ZIP Resource
	ENG_DOWN_TC_3: function (testdata) {
		sts = downloadPlayer.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = downloadPlayer.getData_downloadPlayer();
		assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[1], "downloadBtn mismatch");
		assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
	},

	//Validate the content of download player for PDF Resource
	ENG_DOWN_TC_4: function (testdata) {
		sts = downloadPlayer.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = downloadPlayer.getData_downloadPlayer();
		assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[2], "downloadBtn mismatch");
		assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
	},

	//Validate the content of download player for Spreadsheet Resource
	ENG_DOWN_TC_5: function (testdata) {
		sts = downloadPlayer.isInitialized();
		assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = downloadPlayer.getData_downloadPlayer();
		assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[3], "downloadBtn mismatch");
		assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
	}

}