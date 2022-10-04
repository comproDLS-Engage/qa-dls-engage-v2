"use strict";
require('./env.conf.js');
//let QaTouchReporter = require('wdio-qatouch-reporter/lib/index');
const novusVisualCompare = require('wdio-novus-visual-regression-service/compare');
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
const specGenerator = require((process.cwd()) + '/core/runner/specGenerator.js')
const visualTimelineReportService = require('./core/utils/visual-report-utility/report-service').TimelineService;
var visualReportService = new visualTimelineReportService();
var retryTimes = 0;
if (argv.retry)
    retryTimes = 1;

var resizeImage = true;
if (argv.noCompressImage)
    resizeImage = false;

var hostname = global.capabilitiesFile[argv.browserCapability].hostname;
var portNumber = global.capabilitiesFile[argv.browserCapability].portNumber;
var webServicePath = global.capabilitiesFile[argv.browserCapability].webServicePath;
var webDriverService = global.capabilitiesFile[argv.browserCapability].webDriverService;
var user = global.capabilitiesFile[argv.browserCapability].user;
var key = global.capabilitiesFile[argv.browserCapability].key;
var browserstackLocal = global.capabilitiesFile[argv.browserCapability].browserstackLocal;
var updateJob = global.capabilitiesFile[argv.browserCapability].updateJob;
var enableEyesLogs = global.capabilitiesFile[argv.browserCapability].enableEyesLogs;
var eyes = global.capabilitiesFile[argv.browserCapability].eyes;

// setting parameters for novus service
var NovusService = [
    'novus-visual-regression',
    {
        compare: new novusVisualCompare.LocalCompare({
            referenceName: getScreenshotName(path.join(process.cwd(), global.baseScreenshotDir)),
            screenshotName: getScreenshotName(path.join(process.cwd(), global.testScreenshotDir)),
            diffName: getScreenshotName(path.join(process.cwd(), global.diffScreenshotDir)),
            misMatchTolerance: 0,
            ignoreComparison: 'nothing'
        })
    }
];

function getScreenshotName(basePath) {
    return function (context) {
        if (context.test.file.indexOf("/") >= 0)
            global.testFileName = context.test.file.split('tempRunner/')[1].replace('.js', "");
        else
            global.testFileName = context.test.file.split('tempRunner\\')[1].replace('.js', "");

        global.screenshotName = global.suiteKey + "-" + ((global.tcNumber.toString().length == 1) ? "0" + global.tcNumber : global.tcNumber) + "-" + global.tcId + '.png';
        return (path.join(basePath, global.testFileName, global.screenshotName));
    }
};
exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    //runner: 'local',
    //
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete, as
    // WebdriverIO automatically connects to localhost. Also if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack, Testing Bot or LambdaTest, you also don't
    // need to define host and port information (because WebdriverIO can figure that out
    // from your user and key information). However, if you are using a private Selenium
    // backend, you should define the `hostname`, `port`, and `path` here.
    //
    hostname: hostname,
    port: portNumber,
    path: webServicePath,
    // Protocol: http | https
    // protocol: 'http',
    //
    user: user,
    key: key,
    browserstackLocal: browserstackLocal,
    enableEyesLogs: enableEyesLogs,
    eyes: eyes,
    //updateJob: updateJob,
    //
    // Override default path ('/wd/hub') for chromedriver service.
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './test/tempRunner/**.js'
    ],
    /**
     * The number of times to retry the entire specfile when it fails as a whole
     */
    specFileRetries: retryTimes,
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    logFormat: 'jsonFileFormat',
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    port: portNumber,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: global.capabilities,
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: argv.browserCapability ? [
        [TimelineService], webDriverService, NovusService
    ] : argv.deviceName ? [
        [TimelineService], webDriverService, NovusService
    ] : [
        [TimelineService], 'chromedriver', NovusService, webDriverService
    ],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec',
        ['timeline', {
            outputDir: global.reportOutputDir,
            fileName: 'index.html',
            embedImage: true,
            images: {
                quality: 40,
                resize: resizeImage,
                reductionRatio: 1
            },
            screenshotStrategy: 'before:click'
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            disableMochaHooks: true
        }]
        /*[QaTouchReporter,
            {
                qaTouchOptions: {
                    'domain' : "clientdemo",
                    'apiToken': "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
                    'projectKey': 'XXXX',
                    'testRunId': 'XXXX',
                }
            }
        ]*/
    ],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        //require: './env.conf.js',
        ui: 'bdd',
        timeout: 600000,
        grep: argv.testFilter
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: async function (config, capabilities) {
        await specGenerator.fileArrayGenerator(); //generating specs
        if (argv.visual) {
            await visualReportService.onPrepare();    //initiating visualReportService
        }
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {   
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: async function (config, capabilities, specs) {
        require('./core/utils/reportUpdater.js').updateFunctionalObj();
    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: async function (exitCode, config, capabilities, results) {
        if (argv.tesultsToken) {
            var envData = JSON.parse(fs.readFileSync(process.cwd() + '/env.json'));
            const tesults = require('tesults');
            const util = require('util');
            const tesultsResults = util.promisify(tesults.results);
            const jsonString = fs.readFileSync(process.cwd() + '/' + global.reportOutputDir + "/wdio-0-0-timeline-reporter.log", 'utf-8');
            const logData = await JSON.parse(jsonString);
            var tesultsCases = [];
            let testCase = {};
            testCase.name = "Test Run Summary"
            testCase.result = (logData.state.failed > 0) ? "fail" : "pass";
            testCase.duration = logData.duration;
            testCase.suite = "[build]";
            //testCase._Passed = logData.state.passed;
            //testCase._Failed = logData.state.failed;
            //testCase._Skipped = logData.state.skipped;
            testCase._Environment = logData.capabilities.platformName.toUpperCase() + '\n' + logData.capabilities.browserName.toUpperCase() + " " + logData.capabilities.browserVersion + "\n" + logData.capabilities.screenResolution.width + "x" + logData.capabilities.screenResolution.height;
            testCase._TestFile = logData.specs[0];
            testCase._ReportURL = envData[argv.appType].environments[argv.testEnv].reportDirRepo + "/" + argv.appType + "/" + argv.testEnv + "/" + argv.reportdir + "/index.html";
            testCase._AppURL = global.appUrl;
            testCase._AppVersion = logData.appVersion;
            console.log(testCase)
            tesultsCases.push(testCase);

            for (let i = 0; i < logData.suites.length; i++) {
                for (let j = 0; j < logData.suites[i].tests.length; j++) {
                    testCase = {};
                    testCase.name = logData.suites[i].tests[j].title;
                    testCase.result = logData.suites[i].tests[j].state.substring(0, 4);
                    //console.log(testCase.result)
                    testCase.duration = logData.suites[i].tests[j].duration;
                    //testCase.files = logData.suites[i].tests[j].screenshots;
                    testCase.suite = logData.suites[i].title;
                    tesultsCases.push(testCase);
                }
            }
            //console.log(argv.tesultsToken)
            let data = {
                target: argv.tesultsToken,
                results: {
                    cases: tesultsCases
                }
            }
            //console.log(data.target)
            let response;
            try {
                response = await tesultsResults(data)
            } catch (err) {
                console.log(err)
            } finally {
                console.log(response)
            }
        }

        //require('./core/utils/reportUpdater.js').indexFileUpdate();
        await specGenerator.removingTempSpecs();
        if (argv.visual) {
            await visualReportService.onComplete();
        }
    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    // onReload: function(oldSessionId, newSessionId) {
    // },
    afterStep: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) { //condition for allure report
            await browser.takeScreenshot();
        }
    }
}