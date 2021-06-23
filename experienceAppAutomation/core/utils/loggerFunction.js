'use strict';
const winston = require('winston');
var logger = require('../utils/logger.js');
const config = require('../../wdio.conf.js').config;
var toLog;
//logger function
// var toLog = {
//     sessionId: browser.sessionId,
//     ...(build != undefined && jobName != undefined ? { env: "#" + build + ',' + jobName + ',' + browser.capabilities.browserName + ',' + browser.capabilities.browserVersion + ',' + browser.config.testEnv + ',[' + resolution.width + '*' + resolution.height + "]" } : { env: browser.capabilities.browserName + ',' + browser.capabilities.browserVersion + ',' + browser.config.testEnv + ',[' + resolution.width + '*' + resolution.height + "]" }),
//     logger: "",
//     trace: "",
//     msg: ''
// };

var stackTrace = require('stack-trace');
var trace;

//logger details
function logMessageTrace(trace, msg) {
    var toLog = {
        sessionId: browser.sessionId,
        ...(build != undefined && jobName != undefined ? { env: "#" + build + ',' + jobName + ',' + browser.capabilities.browserName + ',' + browser.capabilities.browserVersion + ',' + browser.config.testEnv + ',[' + resolution.width + '*' + resolution.height + "]" } : { env: browser.capabilities.browserName + ',' + browser.capabilities.browserVersion + ',' + browser.config.testEnv + ',[' + resolution.width + '*' + resolution.height + "]" }),
        logger: "",
        trace: "",
        msg: ''
    };
    var counter = 0;
    var logmessage = "";
    while (counter < trace.length) {
        logmessage = logmessage + trace[counter].getFunctionName() + ".";
        counter++;
    }

    toLog["logger"] = logmessage;
    toLog["trace"] = trace.toString()

    if (typeof msg === "undefined") {
        toLog["msg"] = "";
    } else
        toLog["msg"] = msg;

    // console.log(toLog);
    return toLog;

}

exports.logInto = function(trace, msg, level) {

    if (config.logFormat == 'jsonFileFormat') {
        if (level == 'error') {
            logger.error(JSON.stringify(logMessageTrace(trace, msg)));
        } else {
            logger.info(JSON.stringify(logMessageTrace(trace, msg)));
        }

    }
    //log format not implemented....
    // else {

    //     if (level == 'error') {

    //         if (functionName.includes('Page:')) {
    //             logger.error("pageFunction: " + functionName.substring(5, functionName.length), " | message: " + selector);
    //         }

    //         else
    //             logger.error("action: " + functionName + " | selector: " + selector);
    //     }

    //     else {
    //         level = 'info';

    //         if (functionName.includes('assert')) {
    //             logger.log(level, functionName + ": " + selector);
    //         }

    //         if (functionName.includes('sessionId')) {
    //             logger.log(level, functionName);
    //         }

    //         else if (functionName.includes('Test Case') || functionName.includes('Test Suite') || functionName.includes('sessionId') || functionName.includes('browserName')) {
    //             logger.log(level, functionName);
    //         }

    //         else if (functionName.includes('Page:')) {
    //             var msg = selector;
    //             logger.log(level, "pageFunction: " + functionName.substring(5, functionName.length) + " | message: " + selector);
    //             // logger.log(level,"pageFunction: "+functionName,msg);
    //         }

    //         else
    //             logger.log(level, "action: " + functionName + " | selector: " + selector);

    //     }
    // }
}