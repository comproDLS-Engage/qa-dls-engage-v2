"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var res;

module.exports = {

	// View book page
	ENG_DIF_TC_1: function () {
		res = action.click("[class*=Drawer-paperAnchorRight] [class*=Button-edgeEnd]");
		console.log(res)
		res = action.click("[data-tid=button-view-0]");
		console.log(res)
		//action.waitForDocumentLoad();
		res = action.waitForDisplayed("[data-tid=image-chapter-0]");
		console.log(res)
	},

	//Unit page
	ENG_DIF_TC_2: function () {
		res = action.click("[data-tid=button-chapter-0]");
		console.log(res)
		//action.waitForDocumentLoad();
		res = action.waitForDisplayed("[data-tid=image-unit-thumbnail-0]");
		console.log(res)
	},

	// Activity page
	ENG_DIF_TC_3: function () {
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		res = action.click("[data-tid=text-title-0-0]");
		console.log(res)
		//action.waitForDisplayed("[data-tid=image-loader]", undefined, true);
		res = action.waitForDisplayed("iframe");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.waitForDisplayed("[id=page]");
		console.log(res)
		action.waitForDocumentLoad();
		res = action.switchToParentFrame();
		console.log(res)
	},

	// Browse page with books tab
	ENG_DIF_TC_4: function () {
		res = action.waitForDisplayed("[data-tid=button-close]", undefined, true);
		console.log(res)
		/*if (action.isDisplayed("[data-tid=button-close]")) {
			let i, list = action.findElements("[data-tid=button-close]");
			for(i=0;i<list.length;i++){
				action.click(list[i]);
			}
			//action.click("[data-tid=button-close]");
		}*/
		if (action.isDisplayed("[data-tid=button-goback]")) {
			res = action.click("[data-tid=button-goback]");
			console.log(res)
		}
		if (action.isDisplayed("[data-tid=button-continue]")) {
			res = action.click("div:nth-child(1) > div > div > button")
			console.log(res)
		}
		if (!action.isDisplayed("[data-tid=button-dashboard]")) {
			res = action.click("[aria-label=toggle-sidebar]");
			console.log(res)
			res = action.click("[data-tid=button-dashboard]");
			console.log(res)
			//action.click("[class*=MuiBackdrop]");
		}
		else {
			res = action.click("[data-tid=button-dashboard]");
			console.log(res)
		}
		//action.waitForDocumentLoad();
		res = action.click("[data-tid=btn-label-viewall]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("img[data-tid=img-bookCover-3]");
		console.log(res)
	},

	// View book page (not added)
	ENG_DIF_TC_5: function () {
		res = action.click("[data-tid=button-view-3]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-chapter-0]");
		console.log(res)
		//action.click("[data-tid=button-product-2]");
		//res = action.waitForDisplayed("[data-tid=button-next-unit]");
		//console.log(res)
	},

	// Browse page with interactive activities tab
	ENG_DIF_TC_6: function () {
		if (action.isDisplayed("[data-tid=breadcrumb-productName]")) {
			res = action.click("[data-tid=breadcrumb-productName]");
			console.log(res)
		}
		res = action.click("[data-tid=button-browse]");
		console.log(res)
		res = action.click("[data-tid=button-product-1]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Browse page with videos tab
	ENG_DIF_TC_7: function () {
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Browse page with online classes tab
	ENG_DIF_TC_8: function () {
		res = action.click("[data-tid=button-product-3]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Browse page with teacher training tab
	ENG_DIF_TC_9: function () {
		res = action.click("[data-tid=button-product-4]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Browse page with today in class tab
	ENG_DIF_TC_10: function () {
		res = action.click("[data-tid=button-product-5]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Browse page with projectable tab
	ENG_DIF_TC_11: function () {
		res = action.click("[data-tid=button-product-6]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// View all Projectables
	ENG_DIF_TC_12: function () {
		res = action.click("[data-tid=btn-viewAll-0]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Filter button snackbar message
	ENG_DIF_TC_13: function () {
		res = action.waitForDisplayed("[data-tid=button-close]", undefined, true);
		console.log(res)
		res = action.click("[data-tid=button-filter]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Open classes sidebar on the view book page
	ENG_DIF_TC_14: function () {
		res = action.waitForDisplayed("[data-tid=button-close]", undefined, true);
		console.log(res)
		if (action.isDisplayed("[id=infoToc-popover] [data-tid=button-closeinfotoc]")) {
			res = action.click("[id=infoToc-popover] [data-tid=button-closeinfotoc]");
			console.log(res)
		}
		if (action.isDisplayed("[data-tid=button-goback]")) {
			res = action.click("[data-tid=button-goback]");
			console.log(res)
			res = action.scrollIntoView("#app")
			console.log(res)
		}
		if (action.isDisplayed("[data-tid=breadcrumb-viewbook]")) {
			res = action.click("[data-tid=breadcrumb-viewbook]");
			console.log(res)
		}
		res = action.click("button[data-tid=button-classes]");
		console.log(res)
		//action.waitForDocumentLoad();
		//res = action.waitForDisplayed("[class*=MuiIconButton-edgeEnd]");
		//console.log(res)
		res = action.waitForDisplayed("[data-tid=button-class-0]");
		console.log(res)
	},

	// Teacher view class page
	ENG_DIF_TC_15: function () {
		/*let i, list = action.findElements("[class*=MuiListItem-secondaryAction] h6")
		for (i = 0; i < list.length; i++) {
			if (action.getText(list[i]) == "Test Class")
				action.click(list[i]);
		}*/
		res = action.click("[data-tid=button-class-0]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		//action.waitForDisplayed("[data-tid=image-bookCover]");
		res = action.waitForDisplayed("img[src*=Proyectos]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Student tab on teacher view class page
	ENG_DIF_TC_16: function () {
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		//action.waitForDisplayed("[data-tid=image-bookCover]");
		res = action.waitForDisplayed("[data-tid=value-text-heading-name]");
		console.log(res)
	},

	// Edit class page
	ENG_DIF_TC_17: function () {
		res = action.click("[data-tid=button-classOptions]");
		console.log(res)
		res = action.click("[data-tid=button-editClass]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
	},

	// Edit and save class changes
	ENG_DIF_TC_18: function () {
		res = action.getValue("[id=input-title]");
		if (res == "class0") {
			res = action.setValue("[id=input-title]", "class1");
		}
		else {
			res = action.setValue("[id=input-title]", "class0");
		}
		console.log(res)
		res = action.click("[data-tid=button-Save]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("img[src*=Proyectos]");
		console.log(res)
	},

	// Classes page
	ENG_DIF_TC_19: function () {
		res = action.waitForDisplayed("[data-tid=button-close]", undefined, true);
		console.log(res)
		/*if (action.isDisplayed("[data-tid=button-close]")) {
			let i, list = action.findElements("[data-tid=button-close]");
			for(i=0;i<list.length;i++){
				action.click(list[i]);
			}
			//action.click("[data-tid=button-close]");
		}*/
		if (!action.isDisplayed("[data-tid=button-classes]")) {
			res = action.click("[aria-label=toggle-sidebar]");
			console.log(res)
			res = action.click("[data-tid=button-classes]");
			console.log(res)
		}
		else {
			res = action.click("[data-tid=button-classes]");
			console.log(res)
		}
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-pageTitle]");
		console.log(res)
	},

	// Create Class page
	ENG_DIF_TC_20: function () {
		res = action.click("[data-tid=button-add]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-assignBook]");
		console.log(res)
	},

	// Book materials page
	ENG_DIF_TC_21: function () {
		res = action.click("[data-tid=button-assignBook]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid='button-Add to Class']");
		console.log(res)
	},

	// Select book and add to class
	ENG_DIF_TC_22: function () {
		res = action.click("[data-tid=button-add-0]");
		console.log(res)
		res = action.click("[data-tid='button-Add to Class']");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
	},

	// Cancel and go back to Classes page
	ENG_DIF_TC_23: function () {
		res = action.setValue("[id=input-title]", "test automation class");
		console.log(res)
		res = action.click("[data-tid='button-cancel']");
		console.log(res)
		//action.click("[data-tid='button-cancel']");
		//action.click("[data-tid='button-cancel']");
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-add]");
		console.log(res)
	},

	// Student view class page
	ENG_DIF_TC_24: function () {
		//res = action.click("li:nth-child(1) [class*=MuiListItem-secondaryAction] h6");
		if (action.isDisplayed("[title=class0]"))
			res = action.click("[title=class0]");
		else
			res = action.click("[title=class1]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-chapter-0]");
		console.log(res)
	},

	// Move to next activity
	ENG_DIF_TC_25: function () {
		res = action.click("[data-tid=button-nextactivity]");
		console.log(res)
		res = action.waitForDisplayed("iframe");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.waitForDisplayed("[id=page]");
		console.log(res)
		action.waitForDocumentLoad();
		res = action.switchToParentFrame();
		console.log(res)
	},

	// Join Class page
	ENG_DIF_TC_26: function () {
		res = action.click("[data-tid=button-joincourse]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-continue]");
		console.log(res)
		//action.waitForDisplayed("div:nth-child(1) > div > div > button")
	},

	// Add book page from Getting Started
	ENG_DIF_TC_27: function () {
		res = action.click("div:nth-child(1) > div > button[class*=MuiButton-textSecondary]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("button > span > div > img");
		console.log(res)
	},

	// Change language to Spanish
	ENG_DIF_TC_28: function () {
		res = action.click("[data-tid=dropdown-languageselector]");
		console.log(res)
		res = action.click("[data-tid=dropdownitem-1]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Resource Bank page
	ENG_DIF_TC_29: function () {
		res = action.click("[data-tid=button-chapter-0]");
		console.log(res)
		res = action.click("[data-tid=button-product-1]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
	},

	// Flipbook page
	ENG_DIF_TC_30: function () {
		res = action.click("[data-tid=btn-open-in-flipbook]");
		console.log(res)
		//browser.back();
		//res = action.click("[data-tid=btn-open-in-flipbook]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("div > img");
		console.log(res)
	},

	// info popup on Activity page
	ENG_DIF_TC_31: function () {
		res = action.click("[data-tid=button-openinfotoc]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bundlecover]");
		console.log(res)
	},

	// Assignment tab on Teacher view class page
	ENG_DIF_TC_32: function () {
		res = action.click("[data-tid=button-product-1]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-no-assignments]");
		console.log(res)
	},

	// Notifications pane
	ENG_DIF_TC_33: function () {
		res = action.click("[data-tid=button-notification]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-noNotifications]");
		console.log(res)
	},
}
