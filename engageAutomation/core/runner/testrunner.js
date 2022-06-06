"use strict";
var testObj, execJsonData, prevtestFile, getName, hookFuncData, tcProp;
var testDataArr = [];
var Arr = [];
var rootDir = process.cwd();
const { convertPackageHashToObject } = require('@wdio/cli/build/utils');
var async = require('async');
class specRunner {
    //instantiate class
    constructor(testExecFile) {
        if (argv.visual) {
            this.visualTest = require(process.cwd() + '/core/runner/visualTest.js');
            this.startTime = Date.now();
        }
        this.testExecFile = testExecFile;
        this.runMochaSuite();
    }

    //mocha hooks for iterating over suites and tests
    async runMochaSuite() {
        try {
            //setting context for this
            var that = this;
            var visualTotalTc = 0;
            execJsonData = await jsonParserUtil.jsonParser(path.resolve(rootDir, testExecDir, argv.testEnv, this.testExecFile));
            Object.keys(execJsonData).forEach(async (suiteIndex, count) => {
                Arr[count] = { "title": suiteIndex + " " + execJsonData[suiteIndex].Name, "duration": "-", "start": "-", "end": "-", "tests": [], "hooks": [] }
                // console.log(Arr[count])
                // initiating Applitools     
                if (argv.visual == 'applitools')
                    await that.visualTest.initiateApplitools();

                //Mocha test Suite
                describe(suiteIndex + " - " + execJsonData[suiteIndex].Name, () => {
                    //this.retries(1);
                    //This is before hook of Mocha runner
                    before(async () => {
                        if (count != 0) {
                            await browser.reloadSession();
                        }

                        if (global.maximizeWindow == true && global.view == 'desktop') { //this will cause browser to maximize on the client screen resolution
                            await browser.maximizeWindow();
                            global.resolution = await browser.getWindowSize();
                        }
                        else if (global.resolution.width != undefined && global.resolution.height != undefined) {
                            await browser.setWindowSize(parseInt(global.resolution.width), parseInt(global.resolution.height));
                        }

                        console.log("====== Starting Test " + suiteIndex + ": " + execJsonData[suiteIndex].Name + " ======");

                        if (argv.visual == 'applitools')
                            await that.visualTest.openApplitoolsEyes(suiteIndex, execJsonData[suiteIndex].Name);

                        global.logger = await require(path.join(rootDir, '/core/utils/loggerFunction.js'));
                        logger.logInto(stackTrace.get(), "Starting Test Suite:" + suiteIndex + " - " + execJsonData[suiteIndex].Name);
                        let beforeGroup = Object.keys(execJsonData[suiteIndex].Before);

                        for (const key of beforeGroup) {
                            await console.log(" Before      : Start " + execJsonData[suiteIndex].Before[key].id);
                            await logger.logInto(stackTrace.get(), "BEFORE HOOK:" + JSON.stringify(execJsonData[suiteIndex].Before[key]));
                            global.selectorDir = await that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].Before[key].testFile, execJsonData[suiteIndex].Before[key].id).selectorDir;
                            await that.jsonHookObjParser(execJsonData[suiteIndex].Before[key]);
                            await console.log(" Before      :   End " + execJsonData[suiteIndex].Before[key].id);

                        }
                    });
                    //This is beforeEach hook of Mocha runner
                    beforeEach(async () => {

                        let beforeEachGroup = Object.keys(execJsonData[suiteIndex].BeforeEach);

                        for (const key of beforeEachGroup) {
                            await console.log(" Before each : Start " + execJsonData[suiteIndex].BeforeEach[key].id);
                            await logger.logInto(stackTrace.get(), "BEFORE EACH HOOK: " + JSON.stringify(execJsonData[suiteIndex].BeforeEach[key]));
                            global.selectorDir = await that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].BeforeEach[key].testFile, execJsonData[suiteIndex].BeforeEach[key].id).selectorDir;
                            await that.jsonHookObjParser(execJsonData[suiteIndex].BeforeEach[key]);
                            await console.log(" Before each :   End " + execJsonData[suiteIndex].BeforeEach[key].id);

                        }
                    })
                    //processing Test node in the execution json (pre-steps for mocha it)
                    testDataArr[suiteIndex] = [];
                    Object.keys(execJsonData[suiteIndex].Test).forEach(function (testIndex) {
                        testDataArr[suiteIndex][testIndex] = [];
                        Arr[count].tests[testIndex] = { "title": "", "start": "-", "end": "-", "duration": "-", "state": "skipped", "screenshots": [], "visual": "no", "misMatchPercentage": "", "isWithinMisMatchTolerance": "", "isSameDimensions": "", "isExactSameImage": "" };
                        tcProp = that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id, execJsonData[suiteIndex].Test[testIndex].description);
                        if (argv.visual == 'novus') {
                            let visual = execJsonData[suiteIndex].Test[testIndex].visualTest;
                            if (visual == undefined)
                                visual = tcProp.visualTag;
                            //visual = that.getVisualTagFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id);
                            if (visual == true) {
                                visualTotalTc = parseInt(visualTotalTc) + 1;
                                Arr[count].tests[testIndex].visual = "yes";
                            }
                        }
                        //processing data node for every Test node in the execution json
                        var arrIndex = 0;
                        Object.keys(execJsonData[suiteIndex].Test[testIndex].testData).forEach(async (tdIndex) => {
                            //condition for checking if test data is a string or an array
                            if (typeof execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath == 'string') {
                                //condition for accepting login data file via command
                                if (execJsonData[suiteIndex].Test[testIndex].testFile.includes('login.test.js') && argv.loginDataFile)
                                    //testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + argv.loginDataFile), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath);
                                    testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(path.resolve(rootDir, argv.loginDataFile)), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath);
                                else
                                    //testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].dataFile), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath);
                                    testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(path.resolve(rootDir, execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].dataFile)), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath);
                                arrIndex++;
                            } else {
                                Object.keys(execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath).forEach(async function (key) {
                                    if (execJsonData[suiteIndex].Test[testIndex].testFile.includes('login.test.js') && argv.loginDataFile)
                                        //testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + argv.loginDataFile), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath[key]);
                                        testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(path.resolve(rootDir, argv.loginDataFile)), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath[key]);
                                    else
                                        //testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].dataFile), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath[key]);
                                        testDataArr[suiteIndex][testIndex][arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(path.resolve(rootDir, execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].dataFile)), execJsonData[suiteIndex].Test[testIndex].testData[tdIndex].jsonPath[key]);
                                    arrIndex++;
                                })
                            }
                        })
                        if (testDataArr[suiteIndex][testIndex].length == 1) {
                            testDataArr[suiteIndex][testIndex] = testDataArr[suiteIndex][testIndex][0];
                        }
                        //get name of the test case
                        getName = tcProp.tcName;
                        //getName = that.getTCName(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id, execJsonData[suiteIndex].Test[testIndex].description)
                        Arr[count].tests[testIndex].title = getName;

                        //This is test hook of Mocha runner
                        it(getName, async () => {
                            await console.log(" Testcase    : Start " + execJsonData[suiteIndex].Test[testIndex].id);
                            logger.logInto(stackTrace.get(), "Executing testCase:" + execJsonData[suiteIndex].Test[testIndex].id);
                            global.selectorDir = await that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id).selectorDir;
                            await that.identifyTest(execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id, testDataArr[suiteIndex][testIndex]);
                            if (argv.visual == 'novus' && Arr[count].tests[testIndex].visual == "yes") {
                                Arr[count] = await that.visualTest.generateScreenshotsAndLogs(execJsonData[suiteIndex].Test[testIndex], suiteIndex, testIndex, Arr, count);



                            } else if (argv.visual == 'applitools')
                                await that.visualTest.generateScreenshotsApplitools(execJsonData[suiteIndex].Test[testIndex]);

                            console.log(" Testcase    :   End " + execJsonData[suiteIndex].Test[testIndex].id);
                        })
                    })

                    //This is afterEach hook of Mocha runner
                    afterEach(async function () {
                        let afterEachGroup = Object.keys(execJsonData[suiteIndex].AfterEach);

                        for (const key of afterEachGroup) {
                            await console.log(" After each  : Start " + execJsonData[suiteIndex].AfterEach[key].id);
                            logger.logInto(stackTrace.get(), "AFTER EACH HOOK: " + JSON.stringify((execJsonData[suiteIndex].AfterEach[key])));
                            global.selectorDir = await that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].AfterEach[key].testFile, execJsonData[suiteIndex].AfterEach[key].id).selectorDir;
                            await that.jsonHookObjParser(execJsonData[suiteIndex].AfterEach[key]);
                            //   await that.identifyTest(execJsonData[suiteIndex].Test[testIndex].testFile, execJsonData[suiteIndex].Test[testIndex].id, testDataArr[suiteIndex][testIndex]);
                            await console.log(" After each  :   End " + execJsonData[suiteIndex].AfterEach[key].id);
                        };
                    });

                    //This is after hook of Mocha runner
                    after(async function () {
                        let afterGroup = Object.keys(execJsonData[suiteIndex].After);

                        for (const key of afterGroup) {
                            console.log(" After       : Start " + execJsonData[suiteIndex].After[key].id);
                            logger.logInto(stackTrace.get(), "AFTER HOOK: " + (JSON.stringify((execJsonData[suiteIndex].After[key]))));
                            global.selectorDir = (await that.getTCPropertiesFromTCRepo(execJsonData[suiteIndex].TestCaseRepo, execJsonData[suiteIndex].After[key].testFile, execJsonData[suiteIndex].After[key].id)).selectorDir;
                            await that.jsonHookObjParser(execJsonData[suiteIndex].After[key]);
                            //await that.identifyTest(execJsonData[suiteIndex].After[key].testFile, execJsonData[suiteIndex].After[key].id, testDataArr[suiteIndex][key]);
                            console.log(" After       :   End " + execJsonData[suiteIndex].After[key].id);
                        };
                        if (argv.visual == 'applitools')
                            await that.visualTest.closeApplitoolsEyes();

                        console.log("====== Test " + suiteIndex + " Ended ======");
                        console.log(" ");
                    });
                })
            })
            after(() => {
                let endTime = Date.now();
                if (argv.visual)
                    that.visualTest.setVisualReportData(this.testExecFile, visualTotalTc, this.startTime, endTime, Arr);
            })
        } catch (err) {
            //console.log(err.stack);
            throw err;
        }
    }

    //identifying and calling a test case function from the test js file 
    async identifyTest(testFile, testFunction, testdata) {
        var testFilepath;
        if (prevtestFile != testFile) {
            testObj = null;
            prevtestFile = testFile
            try {
                if (testFile.includes("launchUrl.js"))
                    testFilepath = await path.resolve(rootDir, '../', testFile);
                else
                    testFilepath = await path.resolve(rootDir, testFile);
                testObj = await require(testFilepath);
            } catch (e) {
                //logger.logInto(stackTrace.get(), "ERROR!! " + rootDir + '/test/' + testJsDir + testFile + " NOT found.");
                logger.logInto(stackTrace.get(), "ERROR!! " + testFilepath + " NOT found." + e);
                //console.log(" ERROR!! " + rootDir + '/test/' + testJsDir + testFile + " NOT found.");
                console.log(" ERROR!! " + testFilepath + " NOT found.");
                throw e;
            }
        }
        try {
            // calling a test case function from the test js file
            await testObj[testFunction](testdata);
            //logger.logInto(stackTrace.get(),testObj[testFunction](testdata));
        } catch (e) {
            //logger.logInto(stackTrace.get(), " ERROR while executing " + testFunction + "() in " + testJsDir + testFile)
            logger.logInto(stackTrace.get(), " ERROR while executing " + testFunction + "() in " + testFile)
            //console.log(" ERROR while executing " + testFunction + "() in " + testJsDir + testFile);
            console.log(" ERROR while executing " + testFunction + "() in " + testFile);
            throw e;
        }
    }

    //function to read json file and parse the testfiles and testfunctions
    async jsonHookObjParser(obj) {
        hookFuncData = [];
        var arrIndex = 0;
        let jsonHookObjParserGroup = Object.keys(Object.keys(obj.testData));
        for (const dataIndex of jsonHookObjParserGroup) {
            // Object.keys(obj.testData).forEach(async () => {
            if (typeof obj.testData[dataIndex].jsonPath == 'string') {

                if (obj.testFile.includes('login.test.js') && argv.loginDataFile) {
                    //hookFuncData[arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + argv.loginDataFile), obj.testData[dataIndex].jsonPath);
                    //assuming argv.loginDataFile will be a path to logindata file
                    hookFuncData[arrIndex] = await jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(argv.loginDataFile), obj.testData[dataIndex].jsonPath);
                } else {
                    //hookFuncData[arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + obj.testData[dataIndex].dataFile), obj.testData[dataIndex].jsonPath);
                    hookFuncData[arrIndex] = await jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(obj.testData[dataIndex].dataFile), obj.testData[dataIndex].jsonPath);
                }
                arrIndex++;
            } else {
                let jsonGroup = Object.keys(Object.keys(obj.testData[dataIndex].jsonPath));
                for (const key of jsonGroup) {
                    // Object.keys(obj.testData[dataIndex].jsonPath).forEach(async (key) => {
                    if (obj.testFile.includes('login.test.js') && argv.loginDataFile) {
                        //hookFuncData[arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + argv.loginDataFile), obj.testData[dataIndex].jsonPath[key]);
                        //assuming argv.loginDataFile will be a path to logindata file
                        hookFuncData[arrIndex] = await jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(argv.loginDataFile), obj.testData[dataIndex].jsonPath);
                    } else {
                        //hookFuncData[arrIndex] = jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(tcDataDir + obj.testData[dataIndex].dataFile), obj.testData[dataIndex].jsonPath[key]);
                        hookFuncData[arrIndex] = await jsonParserUtil.getJsonNode(jsonParserUtil.jsonParser(obj.testData[dataIndex].dataFile), obj.testData[dataIndex].jsonPath);
                    }
                    arrIndex++;
                }
            }
        }



        if (hookFuncData.length == 1) { hookFuncData = hookFuncData[0] }
        await this.identifyTest(obj.testFile, obj.id, hookFuncData)
    }

    //function to identify if a testcase in testRepo has a visual tag
    getTCPropertiesFromTCRepo(tcRepo, moduleTestFile, tcId, tcDescription) {
        let repoKey, moduleKey, tcKey, testObj, obj = {};
        let repository = [];

        tcRepo.forEach(async (repoFile, index) => {
            repository[index] = jsonParserUtil.jsonParser(path.resolve(rootDir, repoFile))
        })
        for (repoKey = 0; repoKey < repository.length; repoKey++) {
            for (moduleKey = 0; moduleKey < repository[repoKey].modules.length; moduleKey++) {
                //selectorFileInRepo = repository[repoKey].selectorFile;
                if (repository[repoKey].modules[moduleKey].testFile == moduleTestFile) {
                    for (tcKey = 0; tcKey < repository[repoKey].modules[moduleKey].testcase.length; tcKey++) {
                        testObj = repository[repoKey].modules[moduleKey].testcase[tcKey];
                        if (testObj.id == tcId) {
                            //global.selectorDir = path.resolve(rootDir, repository[repoKey].selectorFile);
                            obj.tcName = testObj.id + " " + ((tcDescription == "") ? testObj.description : tcDescription) + " - (" + testObj.tags + ")";
                            obj.visualTag = testObj.visualTest;
                            obj.selectorDir = path.resolve(rootDir, repository[repoKey].selectorFile);
                            break;
                        }
                    }
                    break;
                }
            }
        }
        if (undefined == obj.tcName && tcId != "launchUrl")
            throw new Error(" Cannot find " + tcId + " or " + moduleTestFile + " in the test case repository.");
        //console.log("----------------- obj:")
        //console.log(obj)
        return obj;
    }
};