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
global.resolution = { //default resolution
    width: 360,
    height: 640
};
global.view = "mobile";
global.build = argv.buildNumber;
global.jobName = argv.jobName;
global.suiteKey = undefined;
global.tcId = undefined;
global.tcNumber = undefined;
global.screenshotName = undefined;
global.reportOutputDir = 'output/reports/' + (argv.reportdir ? argv.reportdir : 'TestReports');
global.baseScreenshotDir = 'screenshots/baseline/';
global.testScreenshotDir = 'screenshots/screen/';
global.diffScreenshotDir = 'screenshots/diff/';
global.capabilities = undefined;
global.resScreenshotDir = undefined;
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
} else {
    let envData = global.jsonParserUtil.jsonParser(process.cwd()+'/env.json');
    //global.testJsDir = envData[argv.appType].testJsDir;
    // global.testRepoDir = envData[argv.appType].testRepoDir;
    global.testExecDir = envData[argv.appType].testExecDir;
    //global.tcDataDir = envData[argv.appType].tcDataDir;
    // global.tcDataDir = envData[argv.appType].environments[argv.testEnv].tcDataDir;
    // global.selectorDir = envData[argv.appType].selectorDir;
    global.appUrl = envData[argv.appType].environments[argv.testEnv].url;

    if (!global.appUrl || !global.testExecDir) {
        console.log("!!!!! ERROR: One or more environment parameters are missing in the env.json !!!!!");
        console.log("url = " + global.appUrl);
        //console.log("testJsDir = " + global.testJsDir);
        //console.log("testRepoDir = " + global.testRepoDir);
        console.log("testExecDir = " + global.testExecDir);
        //console.log("tcDataDir = " + global.tcDataDir);
        //console.log("selectorDir = " + global.selectorDir);
        console.log("!!!!! Exiting program... !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!");
        process.exit(1);
    }

    // ============================
    // Setting browser capabilities
    // ============================
    if (argv.deviceName) {
        global.resScreenshotDir = argv.deviceName;
        global.capabilities = [{
            maxInstances: 2,
            browserName: argv.browserName ? argv.browserName : 'chrome',
            deviceName: argv.deviceName,
            platformName: argv.platformName ? argv.platformName : 'Android',
            chromedriverExecutable: require('chromedriver').path,
            javascriptEnabled: true,
            browserVersion: "85.0.4183"
        }]
    } else if (!argv.windowWidth || !argv.windowHeight) { //if no height or width present
        console.log("WARNING!! Window width or height not provided, using default resolution of mobile mode...");
        global.resScreenshotDir = (global.resolution.width + "x" + global.resolution.height);
        global.capabilities = [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                // Network emulation requires device mode, which is only enabled when mobile emulation is on
                mobileEmulation: {
                    deviceMetrics: {
                        width: global.resolution.width,
                        height: global.resolution.height
                    },
                    //added user Agent capability to responsive mode in chrome to support Landscape mode
                    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36"
                    //"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.88 Mobile/15E148 Safari/604.1"
                    //"Mozilla/5.0 (Linux; Android 10;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36"				},
                },
                //args: ['--headless', '--disable-gpu']
            }
        }]
    } else if (parseInt(argv.windowWidth, 10) > 767) {
        global.view = 'desktop';
        global.resolution.width = argv.windowWidth;
        global.resolution.height = argv.windowHeight;
        global.resScreenshotDir = (global.resolution.width + "x" + global.resolution.height);
        let windowSize = "window-size=" + global.resolution.width + "," + global.resolution.height;
        global.capabilities = [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [windowSize]//,'--headless', '--disable-gpu']
            }
        }]
    } else { //if height,width present
        global.resolution.width = argv.windowWidth;
        global.resolution.height = argv.windowHeight;
        global.resScreenshotDir = (global.resolution.width + "x" + global.resolution.height);
        global.capabilities = [{
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                mobileEmulation: {
                    deviceMetrics: {
                        width: parseInt(global.resolution.width, 10),
                        height: parseInt(global.resolution.height, 10)
                    },
                    userAgent: "Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36"
                },
                args: ['--headless', '--disable-gpu']
            }
        }]
    }

    global.baseScreenshotDir = path.join('screenshots/baseline', argv.appType, global.resScreenshotDir);
    global.testScreenshotDir = path.join('screenshots/screen/' + argv.appType, global.resScreenshotDir);
    global.diffScreenshotDir = path.join('screenshots/diff/' + argv.appType, global.resScreenshotDir);

    // ========================================
    // Setting screenshot label folder location
    // ========================================
    if (argv.visual) {
        fs.mkdirSync(global.reportOutputDir + '/visual/', { recursive: true });
    }
}