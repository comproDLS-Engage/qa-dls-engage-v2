"use strict";
global.appUrl = undefined;
// global.testJsDir = undefined;
// global.testRepoDir = undefined;
global.testExecDir = undefined;
global.selectorDir = undefined;
// global.tcDataDir = undefined;
global.fs = require('fs');
global.argv = require('yargs').argv;
global.path = require('path');
global.jsonParserUtil = require('./core/utils/jsonParser.js');
global.assertion = require('./core/actionLibrary/baseAssertionLibrary.js');
global.loadashget = require('lodash.get');
global.stackTrace = require('stack-trace');
global.resolution = undefined;
global.view = undefined;
global.build = argv.buildNumber;
global.jobName = argv.jobName;
global.suiteKey = undefined;
global.tcId = undefined;
global.tcNumber = undefined;
global.screenshotName = undefined;
global.reportOutputDir = 'output/reports/' + (argv.reportdir ? argv.reportdir : 'TestReports');
global.baseScreenshotDir = undefined;
global.testScreenshotDir = undefined;
global.diffScreenshotDir = undefined;
global.capabilities = undefined;
global.resScreenshotDir = undefined;
global.capabilitiesFile = global.jsonParserUtil.jsonParser(path.join(process.cwd() + '/capabilities.json'));
//global.specs = require('./core/utils/memoryfs.js')


// ====================================
// Check for mandatory input parameters
// ====================================
if (!argv.appType || !argv.testEnv || !argv.testExecFile) {
    console.log("!!!!! ERROR: One or more of the following run parameters are missing !!!!!!!!!!!");
    console.log("appType = " + argv.appType);
    console.log("testEnv = " + argv.testEnv);
    console.log("testExecFile = " + argv.testExecFile);
    console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    process.exit(1);
} 
else {
    let envData = global.jsonParserUtil.jsonParser(process.cwd() + '/env.json');
    //global.testJsDir = envData[argv.appType].testJsDir;
    // global.testRepoDir = envData[argv.appType].testRepoDir;
    global.testExecDir = envData[argv.appType].testExecDir;
    //global.tcDataDir = envData[argv.appType].tcDataDir;
    // global.tcDataDir = envData[argv.appType].environments[argv.testEnv].tcDataDir;
    // global.selectorDir = envData[argv.appType].selectorDir;
    global.appUrl = envData[argv.appType].environments[argv.testEnv].url;

    if (!global.appUrl || !global.testExecDir) {
        console.log("!!!!! ERROR: One or more environment parameters are missing in the env.json !!!!!");
        console.log("appUrl = " + global.appUrl);
        //console.log("testJsDir = " + global.testJsDir);
        //console.log("testRepoDir = " + global.testRepoDir);
        console.log("testExecDir = " + global.testExecDir);
        //console.log("tcDataDir = " + global.tcDataDir);
        //console.log("selectorDir = " + global.selectorDir);
        console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        process.exit(1);
    }

    // ============================
    // Setting browser capabilities
    // ============================
    if (!argv.capability) {
        argv.capability = "local-chrome-1920";
        console.log("WARNING!! Capabilities not provided, using default capabilities (local-chrome-1920)...");
    }
    if (capabilitiesFile[argv.capability] == undefined) {
        console.log("!!!!! ERROR: Capabilities not found in the capabilities.json !!!!!");
        console.log("capability = " + argv.capability);
        console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        process.exit(1);
    }
    global.capabilities = capabilitiesFile[argv.capability].capabilities;
    global.resolution = argv.capability;
    global.resScreenshotDir = argv.capability;
    let browserWidth = argv.capability.split("-")[2].trim();
    if (parseInt(browserWidth, 10) > 1024)
        global.view = 'desktop';
    else
        global.view = 'mobile';

    //global.resScreenshotDir = capabilitiesFile[argv.capability].resolution;
    //global.resolution.width = capabilitiesFile[argv.capability].resolution.split("x")[0].trim();
    //global.resolution.height = capabilitiesFile[argv.capability].resolution.split("x")[1].trim();
}

global.baseScreenshotDir = path.join('screenshots/baseline/' + argv.appType, global.resScreenshotDir);
global.testScreenshotDir = path.join('screenshots/screen/' + argv.appType, global.resScreenshotDir);
global.diffScreenshotDir = path.join('screenshots/diff/' + argv.appType, global.resScreenshotDir);

// ========================================
// Setting screenshot label folder location
// ========================================
if (argv.visual) {
    fs.mkdirSync(global.reportOutputDir + '/visual/', { recursive: true });
}
