'use strict';
var downloadPlayer = require('../../pages/engageExperienceApp/downloadPlayer.page.js');
var sts;

module.exports = {

	//Validate that clicking on the download button downloads the resource file
	ENG_DOWN_TC_1: async function () {
		sts = await downloadPlayer.click_downloadBtn();
		await assertion.assertEqual(sts, true, "Download button status mismatch");
	},

	//Validate the content of download player for Word Resource
	ENG_DOWN_TC_2: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		await assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		await assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		await assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		await assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		await assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		await assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		await assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		await assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[0], "downloadBtn mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.viewBtn, null, "viewBtn mismatch");
	},

	//Validate the content of download player for ZIP Resource
	ENG_DOWN_TC_3: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		await assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		await assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		await assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		await assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		await assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		await assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		await assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		await assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[1], "downloadBtn mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.viewBtn, null, "viewBtn mismatch");
	},

	//Validate the content of download player for PDF Resource
	ENG_DOWN_TC_4: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		await assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		await assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		await assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		await assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		await assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		await assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		await assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		await assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[2], "downloadBtn mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.viewBtn, testdata[0].viewBtn, "viewBtn mismatch");
	},

	//Validate the content of download player for Spreadsheet Resource
	ENG_DOWN_TC_5: async function (testdata) {
		sts = await downloadPlayer.isInitialized();
		await assertion.assertEqual(sts.pageStatus, true, "pageStatus mismatch");
		sts = await downloadPlayer.getData_downloadPlayer();
		await assertion.assertEqual(sts.downPlayer_img, testdata[0].downPlayer_img, "downPlayer_img status mismatch");
		await assertion.assertEqual(sts.resourceLabel, testdata[0].resourceLabel, "resourceLabel mismatch");
		await assertion.assertEqual(sts.downPlayer_subtitle, testdata[0].downPlayer_subtitle, "downPlayer_subtitle mismatch");
		await assertion.assertEqual(sts.downInfoLabel, testdata[0].downInfoLabel, "downInfoLabel mismatch");
		await assertion.assertEqual(sts.fileLabel, testdata[0].fileLabel, "fileLabel mismatch");
		await assertion.assertEqual(sts.typeLabel, testdata[0].typeLabel, "typeLabel mismatch");
		await assertion.assertEqual(sts.sizeLabel, testdata[0].sizeLabel, "sizeLabel mismatch");
		await assertion.assertEqual(sts.downloadBtn_isClickable, true, "downloadBtn_isClickable status mismatch");
		await assertion.assertEqual(sts.downPlayer_title, testdata[1].pageTitle, "downPlayer_title mismatch");
		await assertion.assertEqual(sts.downloadBtn, testdata[0].downloadBtn[3], "downloadBtn mismatch");
		await assertion.assertEqual(sts.fileName, testdata[1].fileName, "fileName mismatch");
		await assertion.assertEqual(sts.fileType, testdata[1].fileType, "fileType mismatch");
		await assertion.assertEqual(sts.fileSize, testdata[1].fileSize, "fileSize mismatch");
		await assertion.assertEqual(sts.viewBtn, null, "viewBtn mismatch");
	}

}