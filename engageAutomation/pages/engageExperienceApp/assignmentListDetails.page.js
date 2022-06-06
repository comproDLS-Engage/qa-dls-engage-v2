"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
  Assignment_title: selectorFile.css.ComproEngage.assignmentListDetails.Assignment_title,
  Assignment_subtitle: selectorFile.css.ComproEngage.assignmentListDetails.Assignment_subtitle,
  addNew_btn: selectorFile.css.ComproEngage.assignmentListDetails.addNew_btn,
  inProgress_lbl: selectorFile.css.ComproEngage.assignmentListDetails.inProgress_lbl,
  inProgress_count: selectorFile.css.ComproEngage.assignmentListDetails.inProgress_count,
  inProgress_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentListDetails.inProgress_noAssignmentTitle,
  inProgress_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentListDetails.inProgress_noAssignmentSubTitle,
  upcoming_lbl: selectorFile.css.ComproEngage.assignmentListDetails.upcoming_lbl,
  upcoming_count: selectorFile.css.ComproEngage.assignmentListDetails.upcoming_count,
  upcoming_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentListDetails.upcoming_noAssignmentTitle,
  upcoming_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentListDetails.upcoming_noAssignmentSubTitle,
  past_lbl: selectorFile.css.ComproEngage.assignmentListDetails.past_lbl,
  past_count: selectorFile.css.ComproEngage.assignmentListDetails.past_count,
  past_noAssignmentTitle: selectorFile.css.ComproEngage.assignmentListDetails.past_noAssignmentTitle,
  past_noAssignmentSubTitle: selectorFile.css.ComproEngage.assignmentListDetails.past_noAssignmentSubTitle,
  assignmentCard: selectorFile.css.ComproEngage.assignmentListDetails.assignmentCard,
  assignmentName: selectorFile.css.ComproEngage.assignmentListDetails.assignmentName,
  assignmentDueDate: selectorFile.css.ComproEngage.assignmentListDetails.assignmentDueDate,
  assignmentTunedIn: selectorFile.css.ComproEngage.assignmentListDetails.assignmentTunedIn,
  assignmentScoreIcon: selectorFile.css.ComproEngage.assignmentListDetails.assignmentScoreIcon,
  assignmentScore: selectorFile.css.ComproEngage.assignmentListDetails.assignmentScore,
  dueDatepill: selectorFile.css.ComproEngage.assignmentListDetails.dueDatepill,
  viewProgress_btn: selectorFile.css.ComproEngage.assignmentListDetails.viewProgress_btn,
  editAssignment_btn: selectorFile.css.ComproEngage.assignmentListDetails.editAssignment_btn,
  cloneAssignment_btn: selectorFile.css.ComproEngage.assignmentListDetails.cloneAssignment_btn,
  deleteAssignment_btn: selectorFile.css.ComproEngage.assignmentListDetails.deleteAssignment_btn,
  componentHeader: selectorFile.css.ComproEngage.assignmentListDetails.componentHeader,
  componentTeacherOnlyIcon: selectorFile.css.ComproEngage.assignmentListDetails.componentTeacherOnlyIcon,
  componentList: selectorFile.css.ComproEngage.assignmentListDetails.componentList,


  isInitialized: async function () {
    var res;
    await logger.logInto(await stackTrace.get());
    await action.waitForDocumentLoad();
    res = {
      pageStatus: await action.waitForDisplayed(this.Assignment_title),
      appShellPage: await appShellPage.isInitialized()
    };
    return res;
  },

  getData_assignmentListPage: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    await action.waitForDocumentLoad();
    obj = {
      Assignment_title: ((await action.getElementCount(this.Assignment_title)) > 0) ? await action.getText(this.Assignment_title) : null,
      Assignment_subtitle: ((await action.getElementCount(this.Assignment_subtitle)) > 0) ? await action.getText(this.Assignment_subtitle) : null,
      addNew_btn: ((await action.getElementCount(this.addNew_btn)) > 0) ? await action.getText(this.addNew_btn) : null,
      inProgress_lbl: ((await action.getElementCount(this.inProgress_lbl)) > 0) ? await action.getText(this.inProgress_lbl) : null,
      inProgress_count: ((await action.getElementCount(this.inProgress_count)) > 0) ? await action.getText(this.inProgress_count) : null,
      inProgress_noAssignmentTitle: ((await action.getElementCount(this.inProgress_noAssignmentTitle)) > 0) ? await action.getText(this.inProgress_noAssignmentTitle) : null,
      inProgress_noAssignmentSubTitle: ((await action.getElementCount(this.inProgress_noAssignmentSubTitle)) > 0) ? await action.getText(this.inProgress_noAssignmentSubTitle) : null,
      upcoming_lbl: ((await action.getElementCount(this.upcoming_lbl)) > 0) ? await action.getText(this.upcoming_lbl) : null,
      upcoming_count: ((await action.getElementCount(this.upcoming_count)) > 0) ? await action.getText(this.upcoming_count) : null,
      upcoming_noAssignmentTitle: ((await action.getElementCount(this.upcoming_noAssignmentTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentTitle) : null,
      upcoming_noAssignmentSubTitle: ((await action.getElementCount(this.upcoming_noAssignmentSubTitle)) > 0) ? await action.getText(this.upcoming_noAssignmentSubTitle) : null,
      past_lbl: ((await action.getElementCount(this.past_lbl)) > 0) ? await action.getText(this.past_lbl) : null,
      past_count: ((await action.getElementCount(this.past_count)) > 0) ? await action.getText(this.past_count) : null,
      past_noAssignmentTitle: ((await action.getElementCount(this.past_noAssignmentTitle)) > 0) ? await action.getText(this.past_noAssignmentTitle) : null,
      past_noAssignmentSubTitle: ((await action.getElementCount(this.past_noAssignmentSubTitle)) > 0) ? await action.getText(this.past_noAssignmentSubTitle) : null,
    }
    return obj;
  },

  getData_assignmentCard: async function (assignmentCardName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.assignmentCard);
    var list = await action.findElements(this.assignmentCard);
    if (assignmentCardName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.assignmentName + i)) == assignmentCardName) {
          obj[0] = {
            assignmentCard: ((await action.getElementCount(this.assignmentCard + i + "]")) > 0) ? await action.getText(this.assignmentCard + i + "]") : null,
            assignmentName: ((await action.getElementCount(this.assignmentName + i + "]")) > 0) ? await action.getText(this.assignmentName + i + "]") : null,
            assignmentDueDate: ((await action.getElementCount(this.assignmentDueDate + i + "]")) > 0) ? await action.getText(this.assignmentDueDate + i + "]") : null,
            assignmentTunedIn: ((await action.getElementCount(this.assignmentTunedIn + i + "]")) > 0) ? await action.getText(this.assignmentTunedIn + i + "]") : null,
            assignmentScoreIcon: ((await action.getElementCount(this.assignmentScoreIcon + i + "]")) > 0) ? await action.getText(this.assignmentScoreIcon + i + "]") : null,
            assignmentScore: ((await action.getElementCount(this.assignmentScore + i + "]")) > 0) ? await action.getText(this.assignmentScore + i + "]") : null,
            dueDatepill: ((await action.getElementCount(this.dueDatepill + i + "]")) > 0) ? await action.getText(this.dueDatepill + i + "]") : null,
            viewProgress_btn: ((await action.getElementCount(this.viewProgress_btn + i + "]")) > 0) ? await action.getText(this.viewProgress_btn + i + "]") : null,
            editAssignment_btn: ((await action.getElementCount(this.editAssignment_btn + i + "]")) > 0) ? await action.getText(this.editAssignment_btn + i + "]") : null,
            cloneAssignment_btn: ((await action.getElementCount(this.cloneAssignment_btn + i + "]")) > 0) ? await action.getText(this.cloneAssignment_btn + i + "]") : null,
            deleteAssignment_btn: ((await action.getElementCount(this.deleteAssignment_btn + i + "]")) > 0) ? await action.getText(this.deleteAssignment_btn + i + "]") : null,
          }
          break;
        }
      }
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          assignmentCard: ((await action.getElementCount(this.assignmentCard + i + "]")) > 0) ? await action.getText(this.assignmentCard + i + "]") : null,
          assignmentName: ((await action.getElementCount(this.assignmentName + i + "]")) > 0) ? await action.getText(this.assignmentName + i + "]") : null,
          assignmentDueDate: ((await action.getElementCount(this.assignmentDueDate + i + "]")) > 0) ? await action.getText(this.assignmentDueDate + i + "]") : null,
          assignmentTunedIn: ((await action.getElementCount(this.assignmentTunedIn + i + "]")) > 0) ? await action.getText(this.assignmentTunedIn + i + "]") : null,
          assignmentScoreIcon: ((await action.getElementCount(this.assignmentScoreIcon + i + "]")) > 0) ? await action.getText(this.assignmentScoreIcon + i + "]") : null,
          assignmentScore: ((await action.getElementCount(this.assignmentScore + i + "]")) > 0) ? await action.getText(this.assignmentScore + i + "]") : null,
          dueDatepill: ((await action.getElementCount(this.dueDatepill + i + "]")) > 0) ? await action.getText(this.dueDatepill + i + "]") : null,
          viewProgress_btn: ((await action.getElementCount(this.viewProgress_btn + i + "]")) > 0) ? await action.getText(this.viewProgress_btn + i + "]") : null,
          editAssignment_btn: ((await action.getElementCount(this.editAssignment_btn + i + "]")) > 0) ? await action.getText(this.editAssignment_btn + i + "]") : null,
          cloneAssignment_btn: ((await action.getElementCount(this.cloneAssignment_btn + i + "]")) > 0) ? await action.getText(this.cloneAssignment_btn + i + "]") : null,
          deleteAssignment_btn: ((await action.getElementCount(this.deleteAssignment_btn + i + "]")) > 0) ? await action.getText(this.deleteAssignment_btn + i + "]") : null,
        }
      }
    }
    return obj;
  },

  getData_componentList: async function (componentListName) {
    await logger.logInto(await stackTrace.get());
    var obj = [];
    await action.waitForDisplayed(this.componentList);
    var list = await action.findElements(this.componentList);
    if (componentListName) {
      for (var i = 0; i < list.length; i++) {
        if ((await action.getText(this.componentList + i)) == componentListName) {
          obj[0] = {
            componentTeacherOnlyIcon: ((await action.getElementCount(this.componentTeacherOnlyIcon + i + "]")) > 0) ? await action.getText(this.componentTeacherOnlyIcon + i + "]") : null,
            componentList: ((await action.getElementCount(this.componentList + i + "]")) > 0) ? await action.getText(this.componentList + i + "]") : null,
          }
          break;
        }
      }
      obj.componentHeader = ((await action.getElementCount(this.componentHeader)) > 0) ? await action.getText(this.componentHeader) : null
    } else {
      for (var i = 0; i < list.length; i++) {
        obj[i] = {
          componentTeacherOnlyIcon: ((await action.getElementCount(this.componentTeacherOnlyIcon + i + "]")) > 0) ? await action.getText(this.componentTeacherOnlyIcon + i + "]") : null,
          componentList: ((await action.getElementCount(this.componentList + i + "]")) > 0) ? await action.getText(this.componentList + i + "]") : null,
        }
      }
      obj.componentHeader = ((await action.getElementCount(this.componentHeader)) > 0) ? await action.getText(this.componentHeader) : null
    }
    return obj;
  },

  getData_deleteDialogue: async function () {
    await logger.logInto(await stackTrace.get());
    var obj;
    obj = {
      deletedialogueHeader: ((await action.getElementCount(this.deletedialogueHeader)) > 0) ? await action.getText(this.deletedialogueHeader) : null,
      deletedialoguesubHeader1: ((await action.getElementCount(this.deletedialoguesubHeader1)) > 0) ? await action.getText(this.deletedialoguesubHeader1) : null,
      deletedialoguesubHeader2: ((await action.getElementCount(this.deletedialoguesubHeader2)) > 0) ? await action.getText(this.deletedialoguesubHeader2) : null,
      cancel_btn: ((await action.getElementCount(this.cancel_btn)) > 0) ? await action.getText(this.cancel_btn) : null,
      delete_btn: ((await action.getElementCount(this.delete_btn)) > 0) ? await action.getText(this.delete_btn) : null,
    }
    return obj;
  },


  click_addNew_btn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.addNew_btn);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " addNew_btn is clicked");
      res = await this.getData_componentList();
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "addNew_btn is NOT clicked", 'error');
    }
    return res;
  },
  click_inProgress_lbl: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.inProgress_lbl);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " inProgress_lbl is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "inProgress_lbl is NOT clicked", 'error');
    }
    return res;
  },
  click_past_lbl: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.past_lbl);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " past_lbl is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "past_lbl is NOT clicked", 'error');
    }
    return res;
  },
  click_upcoming_lbl: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.upcoming_lbl);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " upcoming_lbl is clicked");
    }
    else {
      await logger.logInto(await stackTrace.get(), res + "upcoming_lbl is NOT clicked", 'error');
    }
    return res;
  },
  click_assignmentCard: async function (assignmentNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.assignmentCard);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.assignmentName + i + "]"))) == assignmentNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --assignmentCard clicked");
      res = await require('./assignmentDetails.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --assignmentCard NOT clicked", "error")
    return res;
  },

  click_viewProgress_btn: async function (assignmentNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.viewProgress_btn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.assignmentName + i + "]"))) == assignmentNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --viewProgress_btn clicked");
      res = await require('./assignmentDetails.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --viewProgress_btn NOT clicked", "error")
    return res;
  },

  click_editAssignment_btn: async function (assignmentNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.editAssignment_btn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.assignmentName + i + "]"))) == assignmentNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --editAssignment_btn clicked");
      res = await require('./editAssignment.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --editAssignment_btn NOT clicked", "error")
    return res;
  },

  click_cloneAssignment_btn: async function (assignmentNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.cloneAssignment_btn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.assignmentName + i + "]"))) == assignmentNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --cloneAssignment_btn clicked");
      res = await require('./createAssignment.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --cloneAssignment_btn NOT clicked", "error")
    return res;
  },

  click_deleteAssignment_btn: async function (assignmentNameName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.deleteAssignment_btn);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.assignmentName + i + "]"))) == assignmentNameName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --deleteAssignment_btn clicked");
      res = await this.getData_deleteDialogue();
    }
    else
      await logger.logInto(await stackTrace.get(), " --deleteAssignment_btn NOT clicked", "error")
    return res;
  },

  click_componentList: async function (componentListName) {
    await logger.logInto(await stackTrace.get());
    var i, list, res;
    list = await action.findElements(this.componentList);
    for (i = 0; i < list.length; i++) {
      if (((await action.getText(this.componentList + i + "]"))) == componentListName) {
        res = await action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      await logger.logInto(await stackTrace.get(), " --componentList clicked");
      res = await require('./selectActivity.page').isInitialized();
    }
    else
      await logger.logInto(await stackTrace.get(), " --componentList NOT clicked", "error")
    return res;
  },


}

