"use strict";
const { Browser } = require('selenium-webdriver');
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res, value = [];

module.exports = {

    header: selectorFile.homePage.header,
    hotlinkbtn: selectorFile.footer.hotlinkbtn,
    hotlinkElement: selectorFile.homePage.hotlinkElement,
    hideBookbtn: selectorFile.hotlinkPage.hideBookbtn,
    donebtn: selectorFile.hotlinkPage.donebtn,
    userName: selectorFile.hotlinkPage.userName,
    vhlHeader: selectorFile.hotlinkPage.vhlHeader,
    mediaPlayer: selectorFile.hotlinkPage.mediaPlayer,
    loadingContainer: selectorFile.common.loadingContainer,
    notesbtn: selectorFile.footer.notesbtn,
    zoominbtn: selectorFile.footer.zoominbtn,
    zoomresetbtn: selectorFile.footer.zoomresetbtn,
    zoomoutbtn: selectorFile.footer.zoomoutbtn,
    fullPagebtn: selectorFile.footer.fullPagebtn,
    bookmarkbtn: selectorFile.footer.bookmarkbtn,
    tocbtn: selectorFile.footer.tocbtn,
    prevActivityBtn: selectorFile.footer.prevActivityBtn,
    nextActivityBtn: selectorFile.footer.nextActivityBtn,
    searchbtn: selectorFile.footer.searchbtn,
    notesHeader: selectorFile.notes.notesHeader,
    notesCancelbtn: selectorFile.notes.notesCancelbtn,
    undockbtn: selectorFile.notes.undockbtn,
    noNotesImg: selectorFile.notes.noNotesImg,
    noNotesMsg: selectorFile.notes.noNotesMsg,
    addNotebtn: selectorFile.notes.addNotebtn,
    notesTextBox: selectorFile.notes.notesTextBox,
    notesEditTextBox: selectorFile.notes.notesEditTextBox,
    savebtn: selectorFile.notes.savebtn,
    cancelbtn: selectorFile.notes.cancelbtn,
    notesCardLabel: selectorFile.notes.notesCardLabel,
    deletebtn: selectorFile.notes.deletebtn,
    editbtn: selectorFile.notes.editbtn,
    notesText: selectorFile.notes.notesText,
    deleteNotespaneHeader: selectorFile.notes.deleteNotespaneHeader,
    deleteNotespaneSubHeader: selectorFile.notes.deleteNotespaneSubHeader,
    deleteNotespanenotesData: selectorFile.notes.deleteNotespanenotesData,
    deleteNotespaneDeletebtn: selectorFile.notes.deleteNotespaneDeletebtn,
    deleteNotespaneCancelbtn: selectorFile.notes.deleteNotespaneCancelbtn,
    bookmarkheader: selectorFile.bookmark.bookmarkheader,
    bookmarkCancelbtn: selectorFile.bookmark.bookmarkCancelbtn,
    undockbookmarkpanelbtn: selectorFile.bookmark.undockbookmarkpanelbtn,
    nobookmarkImg: selectorFile.bookmark.nobookmarkImg,
    nobookmarkMsg: selectorFile.bookmark.nobookmarkMsg,
    bookmarkthisPagebtn: selectorFile.bookmark.bookmarkthisPagebtn,
    bookmarkTextbox: selectorFile.bookmark.bookmarkTextbox,
    bookmarkcarddeletebtn: selectorFile.bookmark.bookmarkcarddeletebtn,
    bookmarkcardEditbtn: selectorFile.bookmark.bookmarkcardEditbtn,
    bookmarkLabelText: selectorFile.bookmark.bookmarkLabelText,
    addbookmarkheader: selectorFile.bookmark.addbookmarkheader,
    bookmarkPanelTextbox: selectorFile.bookmark.bookmarkPanelTextbox,
    bookmarkPanelSavebtn: selectorFile.bookmark.bookmarkPanelSavebtn,
    bookmarkPanelCancelbtn: selectorFile.bookmark.bookmarkPanelCancelbtn,
    bookmarkoptionCheckbox1: selectorFile.bookmark.bookmarkoptionCheckbox1,
    bookmarkoptionTextCheckbox1: selectorFile.bookmark.bookmarkoptionTextCheckbox1,
    bookmarkoptionCheckbox2: selectorFile.bookmark.bookmarkoptionCheckbox2,
    bookmarkoptionTextCheckbox2: selectorFile.bookmark.bookmarkoptionTextCheckbox2,
    searchTitle: selectorFile.search.searchTitle,
    searchCancelbtn: selectorFile.search.searchCancelbtn,
    docksearchpanelbtn: selectorFile.search.docksearchpanelbtn,
    searchTextbox: selectorFile.search.searchTextbox,
    searchTipsHeader: selectorFile.search.searchTipsHeader,
    searchTipsHeaderIcon: selectorFile.search.searchTipsHeaderIcon,
    searchTipsSubHeadertext: selectorFile.search.searchTipsSubHeadertext,
    searchTextbtn: selectorFile.search.searchTextbtn,
    searchList: selectorFile.search.searchList,
    searchListIcon: selectorFile.search.searchListIcon,
    searchListtext: selectorFile.search.searchListtext,
    searchListheader: selectorFile.search.searchListheader,
    searchpreviouspage_btn: selectorFile.search.searchpreviouspage_btn,
    searchnextpage_btn: selectorFile.search.searchnextpage_btn,
    searchPageNumber: selectorFile.search.searchPageNumber,
    nosearchIcon: selectorFile.search.nosearchIcon,
    nosearchTitle: selectorFile.search.nosearchTitle,
    nosearchSubTitle: selectorFile.search.nosearchSubTitle,
    searchResult: selectorFile.search.searchResult,
    searchSortbtn: selectorFile.search.searchSortbtn,
    docContainer:selectorFile.search.docContainer,

    isInitialized: async function () {
        await logger.logInto((await stackTrace.get()));
        await action.waitForDocumentLoad();
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        await action.switchToFrame(0);
        res = await action.waitForDisplayed(this.header);
        await action.switchToParentFrame();
        return res;
    },

    click_hotlinkbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.hotlinkbtn);
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " hotlinkbtn is clicked");
            res = await this.getData_hotlinkbtnStatus();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "hotlinkbtn is NOT clicked", 'error');
        }
        return res;
    },
    getData_hotlinkbtnStatus: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            hotlinkName: ((await action.getElementCount(this.hotlinkbtn)) > 0) ? await action.getAttribute(this.hotlinkbtn, "aria-label") : null,
            hotlinkHighlighted: ((await action.getElementCount(this.hotlinkbtn)) > 0) ? await action.getAttribute(this.hotlinkbtn, "aria-disabled") : null,
        }
        return obj;
    },
    getData_searchResult: async function (searchListName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.searchList);
        var list = await action.findElements(this.searchList);
        if (searchListName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.searchList + i)) == searchListName) {
                    obj[0] = {
                        searchList: ((await action.getElementCount(this.searchList + i + "]")) > 0) ? await action.waitForDisplayed(this.searchList + i + "]") : null,
                        searchListIcon: ((await action.getElementCount(this.searchList + i + "] img")) > 0) ? await action.waitForDisplayed(this.searchList + i + "] img") : null,
                        searchListtext: ((await action.getElementCount(this.searchList + i + "] div>div:nth-child(1)")) > 0) ? await action.getText(this.searchList + i + "] div>div:nth-child(1)") : null,
                        searchListheader: ((await action.getElementCount(this.searchList + i + "] div>div:nth-child(2)")) > 0) ? await action.getText(this.searchList + i + "] div>div:nth-child(2)") : null,
                    }
                    break;
                }
            }
            obj.searchnextpage_btn = ((await action.getElementCount(this.searchnextpage_btn)) > 0) ? await action.waitForDisplayed(this.searchnextpage_btn) : null
            obj.searchpreviouspage_btn = ((await action.getElementCount(this.searchpreviouspage_btn)) > 0) ? await action.waitForDisplayed(this.searchpreviouspage_btn) : null
            obj.searchPageNumber = ((await action.getElementCount(this.searchPageNumber)) > 0) ? await action.getText(this.searchPageNumber) : null
            obj.searchResult = ((await action.getElementCount(this.searchResult)) > 0) ? await action.getText(this.searchResult) : null
            obj.searchSortbtn = ((await action.getElementCount(this.searchSortbtn)) > 0) ? await action.waitForDisplayed(this.searchSortbtn) : null
            obj.searchTextbtn= ((await action.getElementCount(this.searchTextbtn)) > 0) ? await action.getText(this.searchTextbtn) : null
 
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    searchList: ((await action.getElementCount(this.searchList + i + "]")) > 0) ? await action.waitForDisplayed(this.searchList + i + "]") : null,
                    searchListIcon: ((await action.getElementCount(this.searchList + i + "] img")) > 0) ? await action.waitForDisplayed(this.searchList + i + "] img") : null,
                    searchListtext: ((await action.getElementCount(this.searchList + i + "] div>div:nth-child(1)")) > 0) ? await action.getText(this.searchList + i + "] div>div:nth-child(1)") : null,
                    searchListheader: ((await action.getElementCount(this.searchList + i + "] div>div:nth-child(2)")) > 0) ? await action.getText(this.searchList + i + "] div>div:nth-child(2)") : null,
            }
            }
            obj.searchpreviouspage_btn = ((await action.getElementCount(this.searchpreviouspage_btn)) > 0) ? await action.waitForDisplayed(this.searchpreviouspage_btn) : null
            obj.searchnextpage_btn = ((await action.getElementCount(this.searchnextpage_btn)) > 0) ? await action.waitForDisplayed(this.searchnextpage_btn) : null
            obj.searchPageNumber = ((await action.getElementCount(this.searchPageNumber)) > 0) ? await action.getText(this.searchPageNumber) : null
            obj.searchResult = ((await action.getElementCount(this.searchResult)) > 0) ? await action.getText(this.searchResult) : null
            obj.searchSortbtn = ((await action.getElementCount(this.searchSortbtn)) > 0) ? await action.waitForDisplayed(this.searchSortbtn) : null
            obj.searchTextbtn= ((await action.getElementCount(this.searchTextbtn)) > 0) ? await action.getText(this.searchTextbtn) : null

    
        }
        return obj;
    },

    click_PageHotlink: async function () {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        await action.switchToFrame(0);
        list = await action.findElements(this.hotlinkElement);
        await action.switchToParentFrame();
        for (i = 0; i < list.length; i++) {
            await action.switchToFrame(0);
            res = await action.click(list[i]);
            await action.waitForDisplayed(this.loadingContainer, undefined, true);
            await action.switchToParentFrame();
            value[i] = await this.getData_hotlinkPage();
            if (res == true) {
                res = await this.click_donebtn();
            }
        }
        await action.switchToParentFrame();

        return value;
    },
    getData_hotlinkPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;

        obj = {
            hideBookbtn: ((await action.getElementCount(this.hideBookbtn)) > 0) ? await action.waitForDisplayed(this.hideBookbtn) : null,
            donebtn: ((await action.getElementCount(this.donebtn)) > 0) ? await action.getText(this.donebtn) : null,
            mediaPlayer: ((await action.getElementCount(this.mediaPlayer)) > 0) ? await action.waitForDisplayed(this.mediaPlayer) : null,
            vhlData: await this.getData_vhlhotlinkPage()
            // vhlHeader: ((await action.getElementCount(this.vhlHeader)) > 0) ? await action.getText(this.vhlHeader) : null,
        }

        return obj;
    },
    getData_searchPanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            searchTitle: ((await action.getElementCount(this.searchTitle)) > 0) ? await action.getText(this.searchTitle) : null,
            searchCancelbtn: ((await action.getElementCount(this.searchCancelbtn)) > 0) ? await action.waitForDisplayed(this.searchCancelbtn) : null,
            docksearchpanelbtn: ((await action.getElementCount(this.docksearchpanelbtn)) > 0) ? await action.waitForDisplayed(this.docksearchpanelbtn) : null,
            searchTextbox: ((await action.getElementCount(this.searchTextbox)) > 0) ? await action.waitForDisplayed(this.searchTextbox) : null,
            searchTipsHeader: ((await action.getElementCount(this.searchTipsHeader)) > 0) ? await action.getText(this.searchTipsHeader) : null,
            searchTipsHeaderIcon: ((await action.getElementCount(this.searchTipsHeaderIcon)) > 0) ? await action.waitForDisplayed(this.searchTipsHeaderIcon) : false,
            searchTipsSubHeadertext: ((await action.getElementCount(this.searchTipsSubHeadertext)) > 0) ? await action.getText(this.searchTipsSubHeadertext) : null,
            searchTextbtn: ((await action.getElementCount(this.searchTextbtn)) > 0) ? await action.getText(this.searchTextbtn) : null,
            nosearchIcon: ((await action.getElementCount(this.nosearchIcon)) > 0) ? await action.waitForDisplayed(this.nosearchIcon) : null,
            nosearchTitle: ((await action.getElementCount(this.nosearchTitle)) > 0) ? await action.getText(this.nosearchTitle) : null,
            nosearchSubTitle: ((await action.getElementCount(this.nosearchSubTitle)) > 0) ? await action.getText(this.nosearchSubTitle) : null,
        }
        return obj;
    },
    getData_vhlhotlinkPage: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        await action.switchToFrame(1);

        obj = {

            userName: ((await action.getElementCount(this.userName)) > 0) ? await action.getText(this.userName) : null,
            vhlHeader: ((await action.getElementCount(this.vhlHeader)) > 0) ? await action.getText(this.vhlHeader) : null,
        }
        await action.switchToParentFrame();
        return obj;
    },
    click_searchTextbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.searchTextbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " searchTextbtn is clicked");
            res = await this.getData_searchResult();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "searchTextbtn is NOT clicked", 'error');
        }
        return res;
    },
    click_searchCancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.searchCancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " searchCancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "searchCancelbtn is NOT clicked", 'error');
        }
        return res;
    },
    
    click_donebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        console.log("Click done button")
        await action.waitForDisplayed(this.loadingContainer, undefined, true);
        res = await action.click(this.donebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "  is clicked");
            await action.switchToFrame(0);
            res = await action.waitForDisplayed(this.header);
            await action.switchToParentFrame();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "hotlinkbtn is NOT clicked", 'error');
        }
        return res;
    },
    getData_footer: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            notesbtn: ((await action.getElementCount(this.notesbtn)) > 0) ? await action.waitForDisplayed(this.notesbtn) : null,
            hotlinkbtn: ((await action.getElementCount(this.hotlinkbtn)) > 0) ? await action.waitForDisplayed(this.hotlinkbtn) : null,
            zoominbtn: ((await action.getElementCount(this.zoominbtn)) > 0) ? await action.waitForDisplayed(this.zoominbtn) : null,
            zoomresetbtn: ((await action.getElementCount(this.zoomresetbtn)) > 0) ? await action.waitForDisplayed(this.zoomresetbtn) : null,
            zoomoutbtn: ((await action.getElementCount(this.zoomoutbtn)) > 0) ? await action.waitForDisplayed(this.zoomoutbtn) : null,
            fullPagebtn: ((await action.getElementCount(this.fullPagebtn)) > 0) ? await action.waitForDisplayed(this.fullPagebtn) : null,
            bookmarkbtn: ((await action.getElementCount(this.bookmarkbtn)) > 0) ? await action.waitForDisplayed(this.bookmarkbtn) : null,
            tocbtn: ((await action.getElementCount(this.tocbtn)) > 0) ? await action.waitForDisplayed(this.tocbtn) : null,
            prevActivityBtn: ((await action.getElementCount(this.prevActivityBtn)) > 0) ? await action.waitForDisplayed(this.prevActivityBtn) : null,
            nextActivityBtn: ((await action.getElementCount(this.nextActivityBtn)) > 0) ? await action.waitForDisplayed(this.nextActivityBtn) : null,
            searchbtn: ((await action.getElementCount(this.searchbtn)) > 0) ? await action.waitForDisplayed(this.searchbtn) : null,
        }
        return obj;
    },

    getData_notesPanel: async function (notesTextName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.notesHeader);
        var list = await action.findElements(this.notesText);
        if (notesTextName) {
            for (vari = 0; i < list.length; i++) {
                if ((await action.getText(this.notesText + i)) == notesTextName) {
                    await action.waitForDisplayed(this.notesCardLabel + i + "]");
                    obj[0] = {
                        notesCardLabel: ((await action.getElementCount(this.notesCardLabel + i + "]")) > 0) ? await action.getText(this.notesCardLabel + i + "]") : null,
                        deletebtn: ((await action.getElementCount(this.deletebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.deletebtn + i + "]") : null,
                        editbtn: ((await action.getElementCount(this.editbtn + i + "]")) > 0) ? await action.waitForDisplayed(this.editbtn + i + "]") : null,
                        notesText: ((await action.getElementCount(this.notesText + i + "]")) > 0) ? await action.getText(this.notesText + i + "]") : null,
                    }
                    break;
                }
            }
            obj.notesHeader = ((await action.getElementCount(this.notesHeader)) > 0) ? await action.getText(this.notesHeader) : null
            obj.notesCancelbtn = ((await action.getElementCount(this.notesCancelbtn)) > 0) ? await action.getText(this.notesCancelbtn) : null
            obj.undockbtn = ((await action.getElementCount(this.undockbtn)) > 0) ? await action.getText(this.undockbtn) : null
            obj.noNotesImg = ((await action.getElementCount(this.noNotesImg)) > 0) ? await action.getText(this.noNotesImg) : null
            obj.noNotesMsg = ((await action.getElementCount(this.noNotesMsg)) > 0) ? await action.getText(this.noNotesMsg) : null
            obj.addNotebtn = ((await action.getElementCount(this.addNotebtn)) > 0) ? await action.getText(this.addNotebtn) : null
            obj.notesTextBox = ((await action.getElementCount(this.notesTextBox)) > 0) ? await action.getText(this.notesTextBox) : null
            obj.savebtn = ((await action.getElementCount(this.savebtn)) > 0) ? await action.getText(this.savebtn) : null
            obj.cancelbtn = ((await action.getElementCount(this.cancelbtn)) > 0) ? await action.getText(this.cancelbtn) : null
        } else {
            for (var i = 0; i < list.length; i++) {
                await action.waitForDisplayed(this.notesCardLabel + i + "]");
                obj[i] = {
                    notesCardLabel: ((await action.getElementCount(this.notesCardLabel + i + "]")) > 0) ? await action.getText(this.notesCardLabel + i + "]") : null,
                    deletebtn: ((await action.getElementCount(this.deletebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.deletebtn + i + "]") : null,
                    editbtn: ((await action.getElementCount(this.editbtn + i + "]")) > 0) ? await action.waitForDisplayed(this.editbtn + i + "]") : null,
                    notesText: ((await action.getElementCount(this.notesText + i + "]")) > 0) ? await action.getText(this.notesText + i + "]") : null,
                }
            }
            obj.notesHeader = ((await action.getElementCount(this.notesHeader)) > 0) ? await action.getText(this.notesHeader) : null
            obj.notesCancelbtn = ((await action.getElementCount(this.notesCancelbtn)) > 0) ? await action.waitForDisplayed(this.notesCancelbtn) : null
            obj.undockbtn = ((await action.getElementCount(this.undockbtn)) > 0) ? await action.waitForDisplayed(this.undockbtn) : null
            obj.noNotesImg = ((await action.getElementCount(this.noNotesImg)) > 0) ? await action.waitForDisplayed(this.noNotesImg) : null
            obj.noNotesMsg = ((await action.getElementCount(this.noNotesMsg)) > 0) ? await action.getText(this.noNotesMsg) : null
            obj.addNotebtn = ((await action.getElementCount(this.addNotebtn)) > 0) ? await action.getText(this.addNotebtn) : null
            obj.notesTextBox = ((await action.getElementCount(this.notesTextBox)) > 0) ? await action.getText(this.notesTextBox) : null
            obj.savebtn = ((await action.getElementCount(this.savebtn)) > 0) ? await action.getText(this.savebtn) : null
            obj.cancelbtn = ((await action.getElementCount(this.cancelbtn)) > 0) ? await action.getText(this.cancelbtn) : null
        }
        return obj;
    },

    getData_notesdeletePanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        await action.waitForDisplayed(this.deleteNotespaneHeader)
        obj = {
            deleteNotespaneHeader: ((await action.getElementCount(this.deleteNotespaneHeader)) > 0) ? await action.getText(this.deleteNotespaneHeader) : null,
            deleteNotespaneSubHeader: ((await action.getElementCount(this.deleteNotespaneSubHeader)) > 0) ? await action.getText(this.deleteNotespaneSubHeader) : null,
            deleteNotespanenotesData: ((await action.getElementCount(this.deleteNotespanenotesData)) > 0) ? await action.getText(this.deleteNotespanenotesData) : null,
            deleteNotespaneDeletebtn: ((await action.getElementCount(this.deleteNotespaneDeletebtn)) > 0) ? await action.getText(this.deleteNotespaneDeletebtn) : null,
            deleteNotespaneCancelbtn: ((await action.getElementCount(this.deleteNotespaneCancelbtn)) > 0) ? await action.getText(this.deleteNotespaneCancelbtn) : null,
        }
        return obj;
    },
    getData_bookmarkPanel: async function (bookmarkTextboxName) {
        await logger.logInto(await stackTrace.get());
        var obj = [];
        await action.waitForDisplayed(this.bookmarkheader);
        var list = await action.findElements(this.bookmarkTextbox);
        if (bookmarkTextboxName) {
            for (var i = 0; i < list.length; i++) {
                if ((await action.getText(this.bookmarkTextbox + i)) == bookmarkTextboxName) {
                    obj[0] = {
                        bookmarkTextbox: ((await action.getElementCount(this.bookmarkTextbox + i + "]")) > 0) ? await action.getText(this.bookmarkTextbox + i + "]") : null,
                        bookmarkcarddeletebtn: ((await action.getElementCount(this.bookmarkcarddeletebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.bookmarkcarddeletebtn + i + "]") : null,
                        bookmarkcardEditbtn: ((await action.getElementCount(this.bookmarkcardEditbtn + i + "]")) > 0) ? await action.waitForDisplayed(this.bookmarkcardEditbtn + i + "]") : null,
                    }
                    break;
                }
            }
            obj.bookmarkheader = ((await action.getElementCount(this.bookmarkheader)) > 0) ? await action.getText(this.bookmarkheader) : null
            obj.bookmarkCancelbtn = ((await action.getElementCount(this.bookmarkCancelbtn)) > 0) ? await action.waitForDisplayed(this.bookmarkCancelbtn) : null
            obj.undockbookmarkpanelbtn = ((await action.getElementCount(this.undockbookmarkpanelbtn)) > 0) ? await action.waitForDisplayed(this.undockbookmarkpanelbtn) : null
            obj.nobookmarkImg = ((await action.getElementCount(this.nobookmarkImg)) > 0) ? await action.waitForDisplayed(this.nobookmarkImg) : false
            obj.nobookmarkMsg = ((await action.getElementCount(this.nobookmarkMsg)) > 0) ? await action.getText(this.nobookmarkMsg) : null
            obj.bookmarkthisPagebtn = ((await action.getElementCount(this.bookmarkthisPagebtn)) > 0) ? await action.getText(this.bookmarkthisPagebtn) : null
        } else {
            for (var i = 0; i < list.length; i++) {
                obj[i] = {
                    bookmarkTextbox: ((await action.getElementCount(this.bookmarkTextbox + i + "]")) > 0) ? await action.getText(this.bookmarkTextbox + i + "]") : null,
                    bookmarkcarddeletebtn: ((await action.getElementCount(this.bookmarkcarddeletebtn + i + "]")) > 0) ? await action.waitForDisplayed(this.bookmarkcarddeletebtn + i + "]") : null,
                    bookmarkcardEditbtn: ((await action.getElementCount(this.bookmarkcardEditbtn + i + "]")) > 0) ? await action.waitForDisplayed(this.bookmarkcardEditbtn + i + "]") : null,
                }
            }
            obj.bookmarkheader = ((await action.getElementCount(this.bookmarkheader)) > 0) ? await action.getText(this.bookmarkheader) : null
            obj.bookmarkCancelbtn = ((await action.getElementCount(this.bookmarkCancelbtn)) > 0) ? await action.waitForDisplayed(this.bookmarkCancelbtn) : null
            obj.undockbookmarkpanelbtn = ((await action.getElementCount(this.undockbookmarkpanelbtn)) > 0) ? await action.waitForDisplayed(this.undockbookmarkpanelbtn) : null
            obj.nobookmarkImg = ((await action.getElementCount(this.nobookmarkImg)) > 0) ? await action.waitForDisplayed(this.nobookmarkImg) : false
            obj.nobookmarkMsg = ((await action.getElementCount(this.nobookmarkMsg)) > 0) ? await action.getText(this.nobookmarkMsg) : null
            obj.bookmarkthisPagebtn = ((await action.getElementCount(this.bookmarkthisPagebtn)) > 0) ? await action.getText(this.bookmarkthisPagebtn) : null
        }
        return obj;
    },
    getData_addbookmarkpanel: async function () {
        await logger.logInto(await stackTrace.get());
        var obj;
        obj = {
            bookmarkLabelText: ((await action.getElementCount(this.bookmarkLabelText)) > 0) ? await action.getText(this.bookmarkLabelText) : null,
            addbookmarkheader: ((await action.getElementCount(this.addbookmarkheader)) > 0) ? await action.getText(this.addbookmarkheader) : null,
            bookmarkPanelTextbox: ((await action.getElementCount(this.bookmarkPanelTextbox)) > 0) ? await action.getText(this.bookmarkPanelTextbox) : null,
            bookmarkPanelSavebtn: ((await action.getElementCount(this.bookmarkPanelSavebtn)) > 0) ? await action.getText(this.bookmarkPanelSavebtn) : null,
            bookmarkPanelCancelbtn: ((await action.getElementCount(this.bookmarkPanelCancelbtn)) > 0) ? await action.getText(this.bookmarkPanelCancelbtn) : null,
            bookmarkoptionCheckbox1: ((await action.getElementCount(this.bookmarkoptionCheckbox1)) > 0) ? await action.getText(this.bookmarkoptionCheckbox1) : null,
            bookmarkoptionTextCheckbox1: ((await action.getElementCount(this.bookmarkoptionTextCheckbox1)) > 0) ? await action.getText(this.bookmarkoptionTextCheckbox1) : null,
            bookmarkoptionCheckbox2: ((await action.getElementCount(this.bookmarkoptionCheckbox2)) > 0) ? await action.getText(this.bookmarkoptionCheckbox2) : null,
            bookmarkoptionTextCheckbox2: ((await action.getElementCount(this.bookmarkoptionTextCheckbox2)) > 0) ? await action.getText(this.bookmarkoptionTextCheckbox2) : null,
        }
        return obj;
    },
    click_notesbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.notesbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " notesbtn is clicked");
            res = await this.getData_notesPanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "notesbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_zoominbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.zoominbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " zoominbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "zoominbtn is NOT clicked", 'error');
        }
        return res;
    },
    click_bookmarkCancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkCancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkCancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkCancelbtn is NOT clicked", 'error');
        }
        return res;
    },
    click_zoomresetbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.zoomresetbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " zoomresetbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "zoomresetbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_zoomoutbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.zoomoutbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " zoomoutbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "zoomoutbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_fullPagebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.fullPagebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " fullPagebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "fullPagebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_bookmarkbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkbtn is clicked");
            res = await this.getData_bookmarkPanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_tocbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.tocbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " tocbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "tocbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_prevActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.prevActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " prevActivityBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "prevActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_nextActivityBtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.nextActivityBtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " nextActivityBtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "nextActivityBtn is NOT clicked", 'error');
        }
        return res;
    },

    click_searchbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.searchbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " searchbtn is clicked");
            res = await this.getData_searchPanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "searchbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_notesCancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.notesCancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " notesCancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "notesCancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_undockbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.undockbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " undockbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "undockbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_addNotebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.addNotebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " addNotebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "addNotebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_savebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.savebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " savebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "savebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_cancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.cancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " cancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "cancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    set_notesTextBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.notesTextBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in notesTextBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in notesTextBox", 'error');
        }
        return res;
    },
    set_notesEditTextBox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        await action.clearValue(this.notesEditTextBox);
        await browser.pause(5000)
        res = await action.setValue(this.notesEditTextBox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in notesEditTextBox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in notesEditTextBox", 'error');
        }
        return res;
    },
    click_deletebtn: async function (notesTextName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.deletebtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.notesText + i + "]"))) == notesTextName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --deletebtn clicked");
            res = await this.getData_notesdeletePanel();
        }
        else
            await logger.logInto(await stackTrace.get(), " --deletebtn NOT clicked", "error")
        return res;
    },

    click_editbtn: async function (notesTextName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.editbtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.notesText + i + "]"))) == notesTextName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --editbtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --editbtn NOT clicked", "error")
        return res;
    },
    click_deleteNotespaneDeletebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteNotespaneDeletebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " deleteNotespaneDeletebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteNotespaneDeletebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_deleteNotespaneCancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.deleteNotespaneCancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "deleteNotespaneCancelbtn is clicked");
            res = await this.getData_notesPanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "deleteNotespaneCancelbtn is NOT clicked", 'error');
        }
        return res;
    },
    click_bookmarkthisPagebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkthisPagebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkthisPagebtn is clicked");
            res = await this.getData_addbookmarkpanel();
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkthisPagebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_bookmarkcarddeletebtn: async function (bookmarkTextboxName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.bookmarkcarddeletebtn);
        browser.pause(4000)
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookmarkTextbox + i + "]"))) == bookmarkTextboxName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --bookmarkcarddeletebtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --bookmarkcarddeletebtn NOT clicked", "error")
        return res;
    },

    click_bookmarkcardEditbtn: async function (bookmarkTextboxName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.bookmarkcardEditbtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookmarkTextbox + i + "]"))) == bookmarkTextboxName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --bookmarkcardEditbtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --bookmarkcardEditbtn NOT clicked", "error")
        return res;
    },

    click_bookmarkPanelSavebtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        browser.pause(2000)
        res = await action.click(this.bookmarkPanelSavebtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkPanelSavebtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkPanelSavebtn is NOT clicked", 'error');
        }
        return res;
    },

    click_bookmarkPanelCancelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkPanelCancelbtn);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkPanelCancelbtn is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkPanelCancelbtn is NOT clicked", 'error');
        }
        return res;
    },

    click_bookmarkoptionCheckbox1: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkoptionCheckbox1);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkoptionCheckbox1 is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkoptionCheckbox1 is NOT clicked", 'error');
        }
        return res;
    },

    click_bookmarkoptionCheckbox2: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res = await action.click(this.bookmarkoptionCheckbox2);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), " bookmarkoptionCheckbox2 is clicked");
        }
        else {
            await logger.logInto(await stackTrace.get(), res + "bookmarkoptionCheckbox2 is NOT clicked", 'error');
        }
        return res;
    },
    set_bookmarkPanelTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.bookmarkPanelTextbox, value);
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in bookmarkPanelTextbox");
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in bookmarkPanelTextbox", 'error');
        }
        return res;
    },
    click_bookmarkcardEditbtn: async function (bookmarkTextboxName) {
        await logger.logInto(await stackTrace.get());
        var i, list, res;
        list = await action.findElements(this.bookmarkcardEditbtn);
        for (i = 0; i < list.length; i++) {
            if (((await action.getText(this.bookmarkTextbox + i + "]"))) == bookmarkTextboxName) {
                res = await action.click(list[i]);
                break;
            }
        }
        if (res == true) {
            await logger.logInto(await stackTrace.get(), " --bookmarkcardEditbtn clicked");
        }
        else
            await logger.logInto(await stackTrace.get(), " --bookmarkcardEditbtn NOT clicked", "error")
        return res;
    },
    set_searchTextbox: async function (value) {
        var res;
        await logger.logInto(await stackTrace.get());
        res = await action.setValue(this.searchTextbox, value);
    
        if (true == res) {
            await logger.logInto(await stackTrace.get(), "Value is entered in searchTextbox");
            res= await action.getText(this.searchTextbtn)
        } else {
            await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in searchTextbox", 'error');
        }
        return res;
    },

    click_docksearchpanelbtn: async function () {
        await logger.logInto(await stackTrace.get());
        var res;
        res =await action.click(this.docksearchpanelbtn);
        if (true == res) {
         await logger.logInto(await stackTrace.get(), " docksearchpanelbtn is clicked");
         res= await action.waitForDisplayed(this.docContainer)
        }
        else {
        await logger.logInto(await stackTrace.get(), res +"docksearchpanelbtn is NOT clicked", 'error');
        }
        return res;
        },

}
