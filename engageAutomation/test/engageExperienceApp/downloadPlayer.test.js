'use strict';
var downloadPlayer = require('../../pages/engageExperienceApp/downloadPlayer.page.js');
var sts;

module.exports = {

	//Validate the content of download player 
	ENG_DWNLD_PLYR_TC_1: function (testdata) {
		sts = downloadPlayer.downloadPlayer_Data();
	
		assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle,"pageSubTitle mismatch");
		assertion.assertEqual(sts.labelHeading, testdata.labelHeading,"labelHeading mismatch");
		assertion.assertEqual(sts.downloadInfo, testdata.downloadInfo,"downloadInfo mismatch");
		assertion.assertEqual(sts.fileLabel, testdata.fileLabel,"fileLabel mismatch");
		assertion.assertEqual(sts.typeLabel, testdata.typeLabel,"typeLabel mismatch");
		assertion.assertEqual(sts.sizeLabel, testdata.sizeLabel,"sizeLabel mismatch");
		
		
	},

	//Validate that clicking on download button for downloads the Word resource
	ENG_DWNLD_PLYR_TC_2: function () {
		sts = downloadPlayer.click_downloadBtn();
		assertion.assertEqual(sts.pageStatus, true, "Click Download Player button mismatch");
		
	},

	//Validate that clicking on download button for downloads the ZIP resource
	ENG_DWNLD_PLYR_TC_3: function () {
		sts = downloadPlayer.click_downloadBtn();
		assertion.assertEqual(sts.pageStatus, true, "Click Download Player button mismatch");
	},

	//Validate that clicking on download button for downloads the PDF resource
	ENG_DWNLD_PLYR_TC_4: function () {
		sts = downloadPlayer.click_downloadBtn();
		assertion.assertEqual(sts.pageStatus, true, "Click Download Player button mismatch");
	},

	//Validate that clicking on download button for downloads the Spreadsheet resource
	ENG_DWNLD_PLYR_TC_9: function () {
		sts = downloadPlayer.click_downloadBtn();
		assertion.assertEqual(sts.pageStatus, true, "Click Download Player button mismatch");
	},

	//Validate the download player for Word Resource
	ENG_DWNLD_PLYR_TC_5: function (testdata) {
		sts = downloadPlayer.downloadPlayer_Data();

		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "pageTitle mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[1].downloadBtnWord,"downloadBtn mismatch");
		assertion.assertEqual(sts.fileValue, testdata[0].fileValue,"fileValue mismatch");
		assertion.assertEqual(sts.typeValue, testdata[0].typeValue,"typeValue mismatch");
		assertion.assertEqual(sts.sizeValue, testdata[0].sizeValue,"sizeValue mismatch");
		
	},

	//Validate the download player for ZIP Resource
	ENG_DWNLD_PLYR_TC_6: function (testdata) {
		sts = downloadPlayer.downloadPlayer_Data();

		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "pageTitle mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[1].downloadBtnZIP,"downloadBtn mismatch");
		assertion.assertEqual(sts.fileValue, testdata[0].fileValue,"fileValue mismatch");
		assertion.assertEqual(sts.typeValue, testdata[0].typeValue,"typeValue mismatch");
		assertion.assertEqual(sts.sizeValue, testdata[0].sizeValue,"sizeValue mismatch");
		
	},

	//Validate the download player for PDF Resource
	ENG_DWNLD_PLYR_TC_7: function (testdata) {
		sts = downloadPlayer.downloadPlayer_Data();

		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "pageTitle mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[1].downloadBtnPDF,"downloadBtn mismatch");
		assertion.assertEqual(sts.fileValue, testdata[0].fileValue,"fileValue mismatch");
		assertion.assertEqual(sts.typeValue, testdata[0].typeValue,"typeValue mismatch");
		assertion.assertEqual(sts.sizeValue, testdata[0].sizeValue,"sizeValue mismatch");
		
	},

	//Validate the download player for Spreadhseet Resource
	ENG_DWNLD_PLYR_TC_8: function (testdata) {
		sts = downloadPlayer.downloadPlayer_Data();

		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "pageTitle mismatch");
		assertion.assertEqual(sts.downloadBtn, testdata[1].downloadBtnSheet,"downloadBtn mismatch");
		assertion.assertEqual(sts.fileValue, testdata[0].fileValue,"fileValue mismatch");
		assertion.assertEqual(sts.typeValue, testdata[0].typeValue,"typeValue mismatch");
		assertion.assertEqual(sts.sizeValue, testdata[0].sizeValue,"sizeValue mismatch");
		
	}


}