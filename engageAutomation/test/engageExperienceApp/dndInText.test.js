'use strict';
//var DNDinText = require('../../pages/engageExperienceApp/dndInText.itemplayer.page.js');
var dndOnImageTest = require('./dndOnImage.test');
//var sts, sts1;

module.exports = {

    //Validate the drag and drop into text question in unattempted state
    ENG_ITEM_DNDT_TC_1: async function (testdata) {
        await dndOnImageTest.ENG_ITEM_DNDI_TC_1(testdata);
    },

    //Validate that user can drag and drop the pills from source to target location using drag drop functionality
    ENG_ITEM_DNDT_TC_2: async function (testdata) {
        await dndOnImageTest.ENG_ITEM_DNDI_TC_2(testdata);
    },

    //Validate that user can move the pills from source to target location using click functionality
    ENG_ITEM_DNDT_TC_3: async function (testdata) {
        await dndOnImageTest.ENG_ITEM_DNDI_TC_3(testdata);
    },

    //Validate the drag and drop into text question in attempted state after submission
    ENG_ITEM_DNDT_TC_4: async function (testdata) {
        await dndOnImageTest.ENG_ITEM_DNDI_TC_4(testdata);
    }

}