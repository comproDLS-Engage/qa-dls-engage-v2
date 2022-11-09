"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
myMaterialsTxt: selectorFile.css.ComproEngage.myMaterials.myMaterialsTxt,
addNewMaterialBtn: selectorFile.css.ComproEngage.myMaterials.addNewMaterialBtn,
allTab: selectorFile.css.ComproEngage.myMaterials.allTab,
draftsTab: selectorFile.css.ComproEngage.myMaterials.draftsTab,
publishedTab: selectorFile.css.ComproEngage.myMaterials.publishedTab,
searchResultsLabel: selectorFile.css.ComproEngage.myMaterials.searchResultsLabel,
searchText: selectorFile.css.ComproEngage.myMaterials.searchText,
materialLabel: selectorFile.css.ComproEngage.myMaterials.materialLabel,
typeLabel: selectorFile.css.ComproEngage.myMaterials.typeLabel,
modifiedLabel: selectorFile.css.ComproEngage.myMaterials.modifiedLabel,
searchTextBox: selectorFile.css.ComproEngage.myMaterials.searchTextBox,
noMaterialTitleTxt: selectorFile.css.ComproEngage.myMaterials.noMaterialTitleTxt,
noMaterialSubtitleTxt: selectorFile.css.ComproEngage.myMaterials.noMaterialSubtitleTxt,
blankQuizBtn: selectorFile.css.ComproEngage.myMaterials.blankQuizBtn,
blankSurveyBtn: selectorFile.css.ComproEngage.myMaterials.blankSurveyBtn,
newResourceBtn: selectorFile.css.ComproEngage.myMaterials.newResourceBtn,
quizRow: selectorFile.css.ComproEngage.myMaterials.quizRow,
materialsQuizTitleTxt: selectorFile.css.ComproEngage.myMaterials.materialsQuizTitleTxt,
materialsDraftPillTxt: selectorFile.css.ComproEngage.myMaterials.materialsDraftPillTxt,
materialsQuizTypeTxt: selectorFile.css.ComproEngage.myMaterials.materialsQuizTypeTxt,
modifiedTime: selectorFile.css.ComproEngage.myMaterials.modifiedTime,
materialsContextMenuBtn: selectorFile.css.ComproEngage.myMaterials.materialsContextMenuBtn,
createNewTxt: selectorFile.css.ComproEngage.myMaterials.createNewTxt,
menuBlankQuizBtn: selectorFile.css.ComproEngage.myMaterials.menuBlankQuizBtn,
menuBlankSurveyBtn: selectorFile.css.ComproEngage.myMaterials.menuBlankSurveyBtn,
menuNewResourceBtn: selectorFile.css.ComproEngage.myMaterials.menuNewResourceBtn,
previewBtn: selectorFile.css.ComproEngage.myMaterials.previewBtn,
deleteBtn: selectorFile.css.ComproEngage.myMaterials.deleteBtn,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.myMaterialsTxt),
 appShellPage: await appShellPage.isInitialized()};
return res; 
},

getData_myMaterialsPage: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
myMaterialsTxt:(( await action.getElementCount(this.myMaterialsTxt)) > 0) ? await action.getText(this.myMaterialsTxt) : null,
addNewMaterialBtn:(( await action.getElementCount(this.addNewMaterialBtn)) > 0) ? await action.getText(this.addNewMaterialBtn) : null,
allTab:(( await action.getElementCount(this.allTab)) > 0) ? await action.getText(this.allTab) : null,
draftsTab:(( await action.getElementCount(this.draftsTab)) > 0) ? await action.getText(this.draftsTab) : null,
publishedTab:(( await action.getElementCount(this.publishedTab)) > 0) ? await action.getText(this.publishedTab) : null,
searchResultsLabel:(( await action.getElementCount(this.searchResultsLabel)) > 0) ? await action.getText(this.searchResultsLabel) : null,
searchText:(( await action.getElementCount(this.searchText)) > 0) ? await action.getText(this.searchText) : null,
materialLabel:(( await action.getElementCount(this.materialLabel)) > 0) ? await action.getText(this.materialLabel) : null,
typeLabel:(( await action.getElementCount(this.typeLabel)) > 0) ? await action.getText(this.typeLabel) : null,
modifiedLabel:(( await action.getElementCount(this.modifiedLabel)) > 0) ? await action.getText(this.modifiedLabel) : null,
searchTextBox:(( await action.getElementCount(this.searchTextBox)) > 0) ? await action.getText(this.searchTextBox) : null,
noMaterialTitleTxt:(( await action.getElementCount(this.noMaterialTitleTxt)) > 0) ? await action.getText(this.noMaterialTitleTxt) : null,
noMaterialSubtitleTxt:(( await action.getElementCount(this.noMaterialSubtitleTxt)) > 0) ? await action.getText(this.noMaterialSubtitleTxt) : null,
blankQuizBtn:(( await action.getElementCount(this.blankQuizBtn)) > 0) ? await action.getText(this.blankQuizBtn) : null,
blankSurveyBtn:(( await action.getElementCount(this.blankSurveyBtn)) > 0) ? await action.getText(this.blankSurveyBtn) : null,
newResourceBtn:(( await action.getElementCount(this.newResourceBtn)) > 0) ? await action.getText(this.newResourceBtn) : null,
}
 return obj; 
},

getData_quizRow: async function (quizRowName)
{
await logger.logInto(await stackTrace.get());
var obj=[];
 await action.waitForDisplayed(this.quizRow);
var list = await action.findElements(this.quizRow);
 if (quizRowName) {for (var i=0;i<list.length;i++){
if ((await action.getText(this.quizRow + i) )== quizRowName) {
obj[0] = {
quizRow:(( await action.getElementCount(this.quizRow+i+"]"))  > 0) ? await action.getText(this.quizRow+i+"]")  : null,
materialsQuizTitleTxt:(( await action.getElementCount(this.materialsQuizTitleTxt+i+"]"))  > 0) ? await action.getText(this.materialsQuizTitleTxt+i+"]")  : null,
materialsDraftPillTxt:(( await action.getElementCount(this.materialsDraftPillTxt+i+"]"))  > 0) ? await action.getText(this.materialsDraftPillTxt+i+"]")  : null,
materialsQuizTypeTxt:(( await action.getElementCount(this.materialsQuizTypeTxt+i+"]"))  > 0) ? await action.getText(this.materialsQuizTypeTxt+i+"]")  : null,
modifiedTime:(( await action.getElementCount(this.modifiedTime+i+"]"))  > 0) ? await action.getText(this.modifiedTime+i+"]")  : null,
materialsContextMenuBtn:(( await action.getElementCount(this.materialsContextMenuBtn+i+"]"))  > 0) ? await action.getText(this.materialsContextMenuBtn+i+"]")  : null,
}
 break; 
}
 } 
}else{
 for (var i=0;i<list.length;i++){
 obj[i] = {
quizRow:(( await action.getElementCount(this.quizRow+i+"]"))  > 0) ? await action.getText(this.quizRow+i+"]")  : null,
materialsQuizTitleTxt:(( await action.getElementCount(this.materialsQuizTitleTxt+i+"]"))  > 0) ? await action.getText(this.materialsQuizTitleTxt+i+"]")  : null,
materialsDraftPillTxt:(( await action.getElementCount(this.materialsDraftPillTxt+i+"]"))  > 0) ? await action.getText(this.materialsDraftPillTxt+i+"]")  : null,
materialsQuizTypeTxt:(( await action.getElementCount(this.materialsQuizTypeTxt+i+"]"))  > 0) ? await action.getText(this.materialsQuizTypeTxt+i+"]")  : null,
modifiedTime:(( await action.getElementCount(this.modifiedTime+i+"]"))  > 0) ? await action.getText(this.modifiedTime+i+"]")  : null,
materialsContextMenuBtn:(( await action.getElementCount(this.materialsContextMenuBtn+i+"]"))  > 0) ? await action.getText(this.materialsContextMenuBtn+i+"]")  : null,
}
 }
}
return obj; 
},

getData_addMaterialContextMenu: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
createNewTxt:(( await action.getElementCount(this.createNewTxt)) > 0) ? await action.getText(this.createNewTxt) : null,
menuBlankQuizBtn:(( await action.getElementCount(this.menuBlankQuizBtn)) > 0) ? await action.getText(this.menuBlankQuizBtn) : null,
menuBlankSurveyBtn:(( await action.getElementCount(this.menuBlankSurveyBtn)) > 0) ? await action.getText(this.menuBlankSurveyBtn) : null,
menuNewResourceBtn:(( await action.getElementCount(this.menuNewResourceBtn)) > 0) ? await action.getText(this.menuNewResourceBtn) : null,
}
 return obj; 
},

getData_myMaterialsContextMenu: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
previewBtn:(( await action.getElementCount(this.previewBtn)) > 0) ? await action.getText(this.previewBtn) : null,
deleteBtn:(( await action.getElementCount(this.deleteBtn)) > 0) ? await action.getText(this.deleteBtn) : null,
}
 return obj; 
},


click_addNewMaterialBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.addNewMaterialBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " addNewMaterialBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"addNewMaterialBtn is NOT clicked", 'error');
}
return res;
},

click_allTab: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.allTab);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " allTab is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"allTab is NOT clicked", 'error');
}
return res;
},

click_draftsTab: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.draftsTab);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " draftsTab is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"draftsTab is NOT clicked", 'error');
}
return res;
},

click_publishedTab: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.publishedTab);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " publishedTab is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"publishedTab is NOT clicked", 'error');
}
return res;
},

click_blankQuizBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.blankQuizBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " blankQuizBtn is clicked");
res =await require ('./libraryEditorPage.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"blankQuizBtn is NOT clicked", 'error');
}
return res;
},

click_blankSurveyBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.blankSurveyBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " blankSurveyBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"blankSurveyBtn is NOT clicked", 'error');
}
return res;
},

click_newResourceBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.newResourceBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " newResourceBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"newResourceBtn is NOT clicked", 'error');
}
return res;
},

click_quizRow:async function (quizRowName) {
await logger.logInto(await stackTrace.get());
var i, list, res;
list =await action.findElements(this.quizRow);
for (i = 0; i < list.length; i++) {
if ((( await action.getText(this.quizRow+i+"]")))== quizRowName) {
 res = await action.click(list[i]);
break;
}
}
if (res == true) {
 await logger.logInto(await stackTrace.get(), " --quizRow clicked");
} 
else
await logger.logInto(await stackTrace.get(), " --quizRow NOT clicked", "error")
return res;
},

click_materialsContextMenuBtn:async function (quizRowName) {
await logger.logInto(await stackTrace.get());
var i, list, res;
list =await action.findElements(this.materialsContextMenuBtn);
for (i = 0; i < list.length; i++) {
if ((( await action.getText(this.quizRow+i+"]")))== quizRowName) {
 res = await action.click(list[i]);
break;
}
}
if (res == true) {
 await logger.logInto(await stackTrace.get(), " --materialsContextMenuBtn clicked");
} 
else
await logger.logInto(await stackTrace.get(), " --materialsContextMenuBtn NOT clicked", "error")
return res;
},

click_menuBlankQuizBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.menuBlankQuizBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " menuBlankQuizBtn is clicked");
res =await require ('./libraryEditorPage.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"menuBlankQuizBtn is NOT clicked", 'error');
}
return res;
},

click_menuBlankSurveyBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.menuBlankSurveyBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " menuBlankSurveyBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"menuBlankSurveyBtn is NOT clicked", 'error');
}
return res;
},

click_menuNewResourceBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.menuNewResourceBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " menuNewResourceBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"menuNewResourceBtn is NOT clicked", 'error');
}
return res;
},

click_previewBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.previewBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " previewBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"previewBtn is NOT clicked", 'error');
}
return res;
},

click_deleteBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.deleteBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " deleteBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"deleteBtn is NOT clicked", 'error');
}
return res;
},

set_searchTextBox:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.searchTextBox,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in searchTextBox");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in searchTextBox", 'error');
}
return res;
},

}

