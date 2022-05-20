"use strict";
var assert = require('chai').assert;
/*******************************************************************
Skip Assertions
# added skipAssertion argument to _evaluateAndAssert function. 
On basis of skipAssertion parameter (which can be True/False/or missing), 
assertions will be skipped when tests are executed.

Possible values : Expected behaviour
#True : skip the assertions in the testcases
#False : execute default Chai assertions
#missing/undefined : execute default Chai assertions

********************************************************************/

function noop() {
    //No Operation Performed...
}

//add new assertion type in the object: assertionList
var assertionList = {

    assert: async function (actual, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert(actual, message);
    },

    assertEqual: async function (actual, expected, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.equal(actual, expected, message);
    },

    assertNotEqual: async function (actual, expected, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.notEqual(actual, expected, message);
    },

    isNotNaN: async function (actual, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.isNotNaN(actual, message);
    },

    typeOf: async function (value, name, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.typeOf(value, name, message)
    },

    assertFail: async function (message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.fail(message);
    },

    isAtMost: async function (valueToCheck, valueToBeAtMost, message) {
        await logger.logInto(await stackTrace.get(), message);
        assert.isAtMost(valueToCheck, valueToBeAtMost, [message]);
    }
}

function _evaluateAndAssert(skipAssertion) {
    var out = {};
    var keys = Object.keys(assertionList);

    keys.forEach(function (k) {
        if (skipAssertion == true) {
            out[k] = noop;
            return;
        } else { //skipAssertion is missing / false 
            out[k] = assertionList[k];

        }

    });
    return out;
}

module.exports = _evaluateAndAssert(argv.skipAssertion);


// module.exports = {

//     assert: function(actual, message) {

//         assert(actual, message);
//         await logger.logInto(await stackTrace.get(), message);
//     },
//     assertEqual: function(actual, expected, message) {
//         assert.equal(actual, expected, message);
//         await logger.logInto(await stackTrace.get(), message);
//     },
//     assertNotEqual: function(actual, expected, message) {
//         assert.notEqual(actual, expected, message);
//         await logger.logInto(await stackTrace.get(), message);
//     },
//     /*expectEqual:function(actual,expected,message)
//     {
//         expect(actual).to.equal(expected,message);
//     }*/
// }