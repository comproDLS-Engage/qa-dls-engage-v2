"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var res;

module.exports = {

	// View programs tab on the teacher class page
	ENG_INUI_TC_1: async function () {
		res = await action.click("[data-tid=button-classes]");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=button-class-0]");
		console.log(res)
		res = await action.click("[data-tid=button-class-0]");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=image-classBookCover]");
		console.log(res)
		res = await action.click("[data-tid=button-product-3]");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=text-insights]");
		console.log(res)
	},

	// View insights page
	ENG_INUI_TC_2: async function () {
		res = await action.click("[data-tid=text-insights]");
		console.log(res)
		res = await action.waitForDisplayed("[id=online-performance]");
		console.log(res)
		res = await action.click("[data-tid=button-product-1]");
		console.log(res)
		res = await action.waitForDisplayed("svg>rect");
		console.log(res)
	},

	// View create program dialog
	ENG_INUI_TC_3: async function () {
		res = await action.click("//button/*[text()='Create Program']");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=button-primary-program-create-dialog]");
		console.log(res)
	},

	// View create program page
	ENG_INUI_TC_4: async function () {
		res = await action.setValue("[data-tid=input-assignmentName]", "test");
		console.log(res)
		res = await action.click("[data-tid=button-primary-program-create-dialog]");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=button-createProgram]");
		console.log(res)
	},

	// View program page
	ENG_INUI_TC_5: async function () {
		res = await action.click("[data-tid=button-cancelProgram]");
		console.log(res)
		res = await action.click("[data-tid=breadcrumb-dashboard]");
		console.log(res)
		res = await action.click("[data-tid=button-program-1-index]");
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=list-0]");
		console.log(res)
	},

	// View gradebook page for student
	ENG_INUI_TC_6: async function () {
		res = await action.click("[data-tid=list-0]");
		console.log(res)
		res = await action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		res = await action.waitForDisplayed("[data-tid=analytics-donut-chart]")
		console.log(res)
	},

}