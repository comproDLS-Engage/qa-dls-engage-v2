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
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
	},

	//Unit page
	ENG_DIF_TC_2: function () {
		res = action.click("[data-tid=button-chapter-0]");
		console.log(res)
		res = action.waitForDocumentLoad();
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
	},

	// Activity page
	ENG_DIF_TC_3: function () {
		//res = action.click("[data-tid=button-product-0]");
		//console.log(res)
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
		res = action.switchToParentFrame();
		console.log(res)
	},

	// Browse page with books tab
	ENG_DIF_TC_4: function () {
		//res = action.click("[data-tid=button-close]");
		//console.log(res)
		if (action.isDisplayed("[data-tid=breadcrumb-productTitle]")) {
			res = action.click("[data-tid=breadcrumb-productTitle]");
			console.log(res)
		}
		if (action.isDisplayed("[data-tid=button-continue]")) {
			res = action.click("[role=dialog] button svg")
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
		res = action.click("[data-tid=btn-label-viewall]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-product-0]");
		console.log(res)
		res = action.click("[data-tid=button-product-0]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// View book page (not added)
	ENG_DIF_TC_5: function () {
		res = action.click("[data-tid=button-view-0]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
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
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Browse page with videos tab
	ENG_DIF_TC_7: function () {
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Browse page with online classes tab
	ENG_DIF_TC_8: function () {
		res = action.click("[data-tid=button-product-3]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Browse page with teacher training tab
	ENG_DIF_TC_9: function () {
		res = action.click("[data-tid=button-product-4]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Browse page with today in class tab
	ENG_DIF_TC_10: function () {
		res = action.click("[data-tid=button-product-5]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Browse page with projectable tab
	ENG_DIF_TC_11: function () {
		res = action.click("[data-tid=button-product-6]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// View all Projectables
	ENG_DIF_TC_12: function () {
		res = action.click("[data-tid=btn-viewAll-0]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		browser.pause(3000);
	},

	// Open filter sidebar
	ENG_DIF_TC_13: function () {
		res = action.waitForDisplayed("[data-tid=button-close]", undefined, true);
		console.log(res)
		res = action.click("[data-tid=button-filter]");
		console.log(res)
		res = action.waitForDisplayed("[aria-label=filter-sidebar]");
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
		if (action.isDisplayed("[data-tid=breadcrumb-productTitle]")) {
			res = action.click("[data-tid=breadcrumb-productTitle]");
			console.log(res)
			res = action.scrollIntoView("#app")
			console.log(res)
		}
		res = action.waitForDisplayed("[class*=MuiCircularProgress-indeterminate]", undefined, true);
		console.log(res);
		res = action.click("[data-tid=breadcrumb-viewbook]");
		console.log(res)
		res = action.click("button[data-tid=button-bookClasses]");
		console.log(res)
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
		res = action.waitForDisplayed("img[src*=Compro]");
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
		res = action.waitForDisplayed("img[src*=Compro]");
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
		res = action.waitForDisplayed("[data-tid=button-add],[data-tid=button-joincourse]");
		console.log(res)
	},

	// Create Class page
	ENG_DIF_TC_20: function () {
		res = action.click("[data-tid=button-add]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-assignBook]");
		console.log(res)
	},

	// Book materials page
	ENG_DIF_TC_21: function () {
		res = action.click("[data-tid=button-assignBook]");
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
		res = action.waitForDisplayed("[data-tid=image-bookCover]");
		console.log(res)
	},

	// Cancel and go back to Classes page
	ENG_DIF_TC_23: function () {
		res = action.setValue("[id=input-title]", "test automation class");
		console.log(res)
		res = action.click("[data-tid='button-cancel']");
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
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
	},

	// Move to next activity
	ENG_DIF_TC_25: function () {
		res = action.click("[data-tid*=button-next]");
		console.log(res)
		// res = action.waitForDisplayed("iframe");
		// console.log(res)
		// res = action.findElements("iframe");
		// res = action.switchToFrame(res[0]);
		// console.log(res)
		res = action.waitForDisplayed("[id=page],[id=container-non-lo");
		console.log(res)
		//res = action.switchToParentFrame();
	},

	// Join Class page
	ENG_DIF_TC_26: function () {
		res = action.click("[data-tid=button-joincourse]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-continue]");
		console.log(res)
		//action.waitForDisplayed("div:nth-child(1) > div > div > button")
	},

	// Add book page from Getting Started
	ENG_DIF_TC_27: function () {
		res = action.click("[data-tid=button-actionCardBtn-0]");
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
	},

	// Resource Bank page
	ENG_DIF_TC_29: function () {
		res = action.click("[data-tid=button-product-3]");
		console.log(res)
		//res = action.click("[data-tid=button-chapter-0]");
		//console.log(res)
	},

	// Flipbook page
	ENG_DIF_TC_30: function () {
		res = action.click("[data-tid=button-openFlipbook]");
		console.log(res)
		res = action.waitForDisplayed("[id=readerpagedivA]");
		console.log(res)
	},

	// info popup on Activity page
	ENG_DIF_TC_31: function () {
		if (action.isDisplayed("[data-tid=button-closeinfotoc]")) {
			res = action.click("[data-tid=button-closeinfotoc]");
			console.log(res)
		}
		res = action.click("[data-tid=button-openinfotoc]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-bundlecover]");
		console.log(res)
	},

	// Assignment tab on Teacher view class page (No assignment)
	ENG_DIF_TC_32: function () {
		res = action.click("[data-tid=button-product-1]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-no-assignments]");
		console.log(res)
	},

	// Notifications pane
	ENG_DIF_TC_33: function () {
		res = action.click("[data-tid=button-dashboard]");
		console.log(res)
		res = action.click("[data-tid=button-notification]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-noNotifications]");
		console.log(res)
	},

	// Sign out of the app
	ENG_DIF_TC_34: function () {
		if (action.isDisplayed("[role=dialog] button > svg")) {
			res = action.click("[role=dialog] button > svg");
			console.log(res)
		}
		res = action.click("[data-tid=button-user-profile]");
		console.log(res)
		res = action.click("[data-tid=button-user-profile-option-2]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-logintitle]");
		console.log(res)
	},

	// Add a book to my books
	ENG_DIF_TC_35: function () {
		res = action.click("[data-tid=band-moreOptions]");
		console.log(res)
		res = action.click("[data-tid=button-addToMyBook]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=pill-myBooks]");
		console.log(res)
	},

	// Remove book dialog box
	ENG_DIF_TC_36: function () {
		if (action.isDisplayed("[data-tid=breadcrumb-viewbook]")) {
			res = action.click("[data-tid*=breadcrumb]");
			console.log(res)
		}
		res = action.click("[data-tid=button-dashboard]");
		console.log(res)
		res = action.click("[data-tid=button-contextMenu-0]");
		console.log(res)
		res = action.click("[data-tid=button-remove-0]");
		console.log(res)
		res = action.waitForDisplayed("[role=dialog] button:nth-child(2)");
		console.log(res)
	},

	// Remove book and check the dashboard page
	ENG_DIF_TC_37: function () {
		res = action.click("[role=dialog] button:nth-child(2)");
		console.log(res)
		res = action.click("[data-tid=button-dashboard]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-actionCardBtn-0]");
		console.log(res)
	},

	// Select and apply filter
	ENG_DIF_TC_38: function () {
		res = action.click("[data-tid=filtermenu-list-item-0-0]");
		console.log(res)
		res = action.click("[data-tid=button-apply-filter]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=chip-filter0]");
		browser.pause(3000);
		console.log(res)
	},

	// View profile tab on Settings page
	ENG_DIF_TC_39: function () {
		if (action.isDisplayed("[role=dialog] button > svg")) {
			res = action.click("[role=dialog] button > svg");
			console.log(res)
		}
		res = action.click("[data-tid=button-settings]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-product-0]");
		console.log(res)
	},

	// View password tab on Settings page
	ENG_DIF_TC_40: function () {
		res = action.click("[data-tid=button-product-1]");
		console.log(res)
		res = action.waitForDisplayed("button[aria-selected=true]");
		console.log(res)
	},

	// View accessibility tab on Settings page
	ENG_DIF_TC_41: function () {
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=reset-button]");
		console.log(res)
	},

	// View index
	ENG_DIF_TC_42: function () {
		res = action.click("[data-tid=button-indextoc]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-closeinfotoc]");
		console.log(res)
	},

	// Create playlist dialog
	ENG_DIF_TC_43: function () {
		res = action.scrollIntoView("#app");
		console.log(res)
		res = action.click("[data-tid=button-CreatePlaylist]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-createPlaylistLabel]");
		console.log(res)
	},

	// Enter playlist name and create playlist
	ENG_DIF_TC_44: function () {
		res = action.waitForDisplayed("[data-tid=text-createPlaylistLabel]");
		console.log(res)
		res = action.setValue("[id=input-createPlaylist]", "qa automation test playlist1")
		console.log(res)
		res = action.click("button[type=submit]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-playlistTitle-0]");
		console.log(res)
	},

	// View blank playlist page
	ENG_DIF_TC_45: function () {
		res = action.click("[data-tid=text-playlistTitle-0]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-noPlaylist]");
		console.log(res)
	},

	// Browse resources and add to playlist
	ENG_DIF_TC_46: function () {
		res = action.click("div > button[class*=containedSecondary]");
		console.log(res)
		res = action.click("[data-tid='button-contextMenu-0.0']");
		console.log(res)
		res = action.moveTo("[data-tid='menu-add-to-playlist-0.0']");
		console.log(res)
		res = action.click("div[id*=class-subMenu] li[class*=MuiListItem-button]:nth-child(3)");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-error], [data-tid=text-info], [data-tid=text-success]");
		console.log(res)
	},

	// View playlist page
	ENG_DIF_TC_47: function () {
		if (action.isDisplayed("[data-tid=button-close]")) {
			res = action.click("[data-tid=button-close]");
			console.log(res)
		}
		if (!action.isDisplayed("[data-tid=text-playlistTitle-0]")) {
			res = action.click("[data-tid=button-dashboard]");
			console.log(res)
		}
		res = action.click("[data-tid=text-playlistTitle-0]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-playlistOptions]");
		console.log(res)
	},

	// Delete playlist dialog
	ENG_DIF_TC_48: function () {
		res = action.click("[data-tid=button-playlistOptions]");
		console.log(res)
		res = action.click("[data-tid=button-deletePlaylist]");
		console.log(res)
		res = action.waitForDisplayed("[role=dialog] button:nth-child(2)");
		console.log(res)
	},

	// Confirm playlist deletion
	ENG_DIF_TC_49: function () {
		res = action.click("[role=dialog] button:nth-child(2)");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-error], [data-tid=text-info], [data-tid=text-success]");
		console.log(res)
	},

	// Search in global resources
	ENG_DIF_TC_50: function () {
		res = action.setValue("div > input", "Automation");
		console.log(res)
		res = action.keyPress("Enter");
		console.log(res)
		res = action.waitForDisplayed("img[src*=Compro]");
		console.log(res)
	},

	// Empty search in global resources
	ENG_DIF_TC_51: function () {
		res = action.setValue("div > input", "test123");
		console.log(res)
		res = action.keyPress("Enter");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-noResultFound]");
		console.log(res)
	},

	// View book page (locked book)
	ENG_DIF_TC_52: function () {
		res = action.click("[data-tid=button-view-1]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-no-access]");
		console.log(res)
	},

	// Activate book popup
	ENG_DIF_TC_53: function () {
		res = action.click("[data-tid=button-accessKeyBtn]");
		console.log(res)
		res = action.waitForDisplayed("[id=input-access-code]");
		console.log(res)
	},

	// Close activate book popup
	ENG_DIF_TC_54: function () {
		res = action.click("[data-tid=button-close]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiBackdrop]", undefined, true);
		console.log(res)
	},

	// Premium plan popup
	ENG_DIF_TC_55: function () {
		res = action.click("[data-tid=button-premiumAccessBtn]");
		console.log(res)
		res = action.waitForDisplayed("//*[text()='Upgrade to Premium']/..");
		console.log(res)
	},

	// Change and Apply Accessibility Settings
	ENG_DIF_TC_56: function () {
		res = action.click("[data-tid=settings-accessibilty-fontsize-next]");
		console.log(res)
		res = action.click("[data-tid=settings-accessibilty-fontsize-next]");
		console.log(res)
		res = action.click("[data-tid=settings-accessibilty-lineSpace-next]");
		console.log(res)
		res = action.click("[data-tid=settings-accessibilty-lineSpace-next]");
		console.log(res)
		res = action.click("[data-tid=input-high_contrast]");
		console.log(res)
		res = action.click("[data-tid=input-dylexic-font]");
		console.log(res)
		res = action.click("[data-tid=input-underline_links]");
		console.log(res)
		res = action.click("[data-tid=button-accessbility][type=submit]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-info]");
		console.log(res)
		res = action.click("[data-tid=button-dashboard]");
		console.log(res)
	},

	// Reset to Default Accessibility Settings
	ENG_DIF_TC_57: function () {
		res = action.click("[data-tid=reset-button]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiBackdrop]");
		console.log(res)
		res = action.click("[data-tid=button-primary-reset-user-settings]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-info]");
		console.log(res)
	},

	// View billing tab on Settings page
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-product-3]");
		console.log(res)
		res = action.waitForDisplayed("main:nth-child(2) div:nth-child(1) > div:nth-child(1) > h6:nth-child(1)");
		console.log(res)
	},

	// Teacher gradebook page
	ENG_DIF_TC_59: function () {
		res = action.click("[data-tid=button-gradebook]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=list-0]");
		console.log(res)
	},

	// Student progress page
	ENG_DIF_TC_60: function () {
		res = action.click("[data-tid=list-0]");
		console.log(res)
		res = action.waitForDisplayed("[id*=doughnutCanvas-card]");
		console.log(res)
	},


/*
	// Click Create Assignment button and launch activities page
	ENG_DIF_TC_59: function () {
		res = action.click("[data-tid=button-createAssignment]");
		console.log(res)
		res = action.click("[data-tid=button-2]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-selectedActivityCount]");
		console.log(res)
	},

	// Create Assignment page
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=checkbox-resourcetitle-0-0]");
		console.log(res)
		res = action.click("[data-tid=button-ProceedButton]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-assignAssignment]");
		console.log(res)
	},

	// Create assignment confirmation dialog
	ENG_DIF_TC_58: function () {
		res = action.setValue("[id=input-assignmentName]", "Test automation assignment");
		console.log(res)
		res = action.click("[data-tid=button-assignAssignment]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-primary-assignment-submit-dialog]");
		console.log(res)
	},

	// Assignment tab on Teacher view class page after adding assignment
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-primary-assignment-submit-dialog]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-assignmentCard-00]");
		console.log(res)
	},

	// View Assignment page for Teacher
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-assignmentCard-00]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-studentView]");
		console.log(res)
	},

	// View Assignment as Student
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-studentView]");
		console.log(res)
		res = action.waitForDisplayed("[id=viewAsStudentBannerContainer]");
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
	
	// Delete assignment dialog
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-closestudentview]");
		console.log(res)
		res = action.click("[data-tid=button-assignmentOptions]");
		console.log(res)
		res = action.click("[data-tid=button-deleteAssignment]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-primary-removeAssignment]");
		console.log(res)
	},

	// Assignment tab on Teacher view class page after delete assignment
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=button-primary-removeAssignment]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-no-assignments]");
		console.log(res)
	},

	

	// Download Player page
	ENG_DIF_TC_58: function () {
		res = action.click("[data-tid=list-0]");
		console.log(res)
		res = action.waitForDisplayed("[id*=doughnutCanvas-card]");
		console.log(res)
	},
*/
	// --------------------------------- Test cases for Native LO and Avallain LO --------------------------------- //
	// ------------------------------------------------------------------------------------------------------------ //
	// Launch native LO
	ENG_DIF_TC_999: function () {
		res = action.click("[data-tid=button-class-0]");
		console.log(res)
		res = action.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
		console.log(res)
		res = action.click("[data-tid=button-product-2]");
		console.log(res)
		res = action.click("[data-tid=button-chapter-1]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=image-unit-thumbnail-1]");
		console.log(res)
		res = action.click("[data-tid=button-item-0-2]");
		console.log(res)
		res = action.waitForDisplayed("iframe");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.waitForDisplayed("[id=player-container]");
		console.log(res)
	},

	// Perform question1
	ENG_DIF_TC_998: function () {
		res = action.click("[data-tid*=input-click-option-sub-question-1-O1]");
		console.log(res)
		res = action.click("[data-tid*=input-click-option-sub-question-2-O2]");
		console.log(res)
		res = action.switchToParentFrame();
		console.log(res)
		res = action.click("[data-tid=button-checkAnswers]");
		console.log(res)
		res = action.click("[data-tid=button-goNext]");
		console.log(res)
		res = action.waitForClickable("[data-tid=button-goPrev]");
		console.log(res)
		res = action.click("[data-tid=button-goPrev]");
		console.log(res)
	},

	// Perform question2
	ENG_DIF_TC_997: function () {
		res = action.click("[data-tid=button-goNext]");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.setValue("[data-tid*=input-response-A] input", "caterpillar");
		console.log(res)
		res = action.switchToParentFrame();
		console.log(res)
		res = action.click("[data-tid=button-goNext]");
		console.log(res)
		res = action.waitForClickable("[data-tid=button-goPrev]");
		console.log(res)
		res = action.click("[data-tid=button-goPrev]");
		console.log(res)
	},

	// Perform question3
	ENG_DIF_TC_996: function () {
		res = action.click("[data-tid=button-goNext]");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.dragAndDrop2("[data-tid=dragsource-option-O3]", "[data-tid=droptarget-option-C]");
		console.log(res)
		res = action.switchToParentFrame();
		console.log(res)
		res = action.click("[data-tid=button-checkAnswers]");
		console.log(res)
		res = action.waitForClickable("[data-tid=button-goPrev]");
		console.log(res)
		res = action.click("[data-tid=button-goPrev]");
		console.log(res)
		res = action.click("[data-tid=button-goNext]");
		console.log(res)
	},

	// Submit activity and relaunch
	ENG_DIF_TC_995: function () {
		res = action.click("[data-tid=button-submitActivity]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=button-retakeActivity]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid=text-activityScoreInfo]");
		console.log(res)
		res = action.click("[data-tid=breadcrumb-productTitle]");
		console.log(res)
		res = action.click("[data-tid=button-item-0-2]");
		console.log(res)
		res = action.waitForDisplayed("iframe");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.waitForDisplayed("[id=player-container]");
		console.log(res)
		res = action.switchToParentFrame();
		console.log(res)
	},

	// Reset and go back
	ENG_DIF_TC_994: function () {
		res = action.click("[data-tid=button-retakeActivity]");
		console.log(res)
		res = action.waitForDisplayed("[data-tid='button-checkAnswers']");
		console.log(res)
		res = action.waitForDisplayed("iframe");
		console.log(res)
		res = action.findElements("iframe");
		res = action.switchToFrame(res[0]);
		console.log(res)
		res = action.waitForDisplayed("[id=player-container]");
		console.log(res)
		res = action.switchToParentFrame();
		console.log(res)
		res = action.click("[data-tid=breadcrumb-productTitle]");
		console.log(res)
	}
}