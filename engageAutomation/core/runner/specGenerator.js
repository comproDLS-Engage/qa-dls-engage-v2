/*--------------------------------------------------------------------------------------------------------
Supported Options - testExecFile & excludeTestFile
Option1 : 1. 'E2E*.json';
          2. 'E2E*.json,land*.json'

Option2 : '*.json';

Option3 : 'etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'

Option4 : 1.  './testResources/testExecutionFiles/engageExperienceApp/'
          2. './testResources/testExecutionFiles/engageExperienceApp/*'
          3. './testResources/testExecutionFiles/engageExperienceApp,./testResources/testExecutionFiles/difusion'
          4. './testResources/testExecutionFiles/engageExperienceApp/*,./testResources/testExecutionFiles/difusion/*'

Option5 : 1. './testResources/testExecutionFiles/engageExperienceApp/userOnboardingTest.json'
          2. './testResources/testExecutionFiles/engageExperienceApp/*.json'
          3. './testResources/testExecutionFiles/engageExperienceApp/land*.json'
          4. './testResources/testExecutionFiles/engageExperienceApp/land*.json,./testResources/testExecutionFiles/engageExperienceApp/etext*.json'
-----------------------------------------------------------------------------------------------------------*/

'use strict';
// argv.testExecFile = 'etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'
// argv.excludeTestFile = './testResources/testExecutionFiles/engageExperienceApp/etext*.json'
var memFs = require("mem-fs");
var editor = require("mem-fs-editor");
var fss = require('fs-extra');
var glob = require("glob");
var path = require('path');
var rimraf = require("rimraf");
const { argv } = require("yargs");
const { convertPackageHashToObject } = require("@wdio/cli/build/utils");

module.exports = {

    //generating temp files based on spec file names
    fileArrayGenerator: async function() {
        var specData = [],
            specPath = [],
            specs = [],
            runner = [],
            store = [],
            fs = [];
        var testRunner = process.cwd() + '/core/runner/testrunner.js';
        var tempRunnerDirectory = process.cwd() + '/test/tempRunner/'
        if (!fss.existsSync(tempRunnerDirectory)) {
            //console.log("Creating Temp Runner directory...")
            await fss.mkdirSync(tempRunnerDirectory);
        }

        specs = await this.getLisOfTestFiles(argv.testExecFile);
        //if argv.excludeTestFile exists, then update specFilesArray by removing the specs to exclude
        if (argv.excludeTestFile) {
            var excludeArray = this.getLisOfTestFiles(argv.excludeTestFile)
            specs = specs.filter(x => !excludeArray.includes(x));
        }

        if (specs.length > 0) {
            specs.forEach(function (item, index) {

                runner.push(testRunner);
                var specName = item.substring(item.lastIndexOf("/") + 1, item.length);

                store[index] = memFs.create();
                fs[index] = editor.create(store[index]);
                fs[index].append(runner[index], 'let sr = new specRunner("' + specName + '")');

                specData[index] = fs[index].read(runner[index]);
                specPath[index] = path.join(tempRunnerDirectory, item.split(".")[0] + ".js")

                //writing specData into specPath
                fss.outputFileSync(specPath[index], specData[index])
            });
        }
        else
            console.log("ERROR!!! No Specs Found Matching the Pattern")
    },

    //This function returns an array with the list of test files based on the input (specFile names array generator)
    getLisOfTestFiles: async function (value) {
        var specFilesArray = [],
            specFiles = [];
        var pathProps;

        //if value (argv.testExecFile) is not a comma separated string
        if (value.toString().indexOf(",") == -1)
            specFiles = [value];
        else
            specFiles = value.split(",");

        specFiles.forEach(function (testSpec) {
            pathProps = path.parse(testSpec);
            //check if testSpec is a filename without path
            if (pathProps.dir === "" && pathProps.ext ==='.json') {
                //Option1 : E2E*.json,land*.json
                //Option2 : '*.json'
                //Option3 : 'etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'
                specFilesArray = [...specFilesArray, ...glob.sync(testSpec, { matchBase: true, cwd: global.testExecDir + argv.testEnv })];
            }
            //else if pathProps.dir is valid and it exists
            else if (fss.existsSync(pathProps.dir) && fss.lstatSync(pathProps.dir).isDirectory()) {
                //check if pathProps.ext is file name
                if (pathProps.ext === '.json') {
                    //Option5 : 1. './testResources/testExecutionFiles/engageExperienceApp/userOnboardingTest.json'
                    //          2. './testResources/testExecutionFiles/engageExperienceApp/*.json'
                    //          3. './testResources/testExecutionFiles/engageExperienceApp/land*.json'
                    //          4. './testResources/testExecutionFiles/engageExperienceApp/land*.json,./testResources/testExecutionFiles/engageExperienceApp/etext*.json'
                    specFilesArray = [...specFilesArray, ...glob.sync(pathProps.base, { matchBase: true, cwd: pathProps.dir })];
                }
                //check if pathProps.base is a file name with wildcard character (*)
                else if (pathProps.base.includes('*')) {
                    //Option4 : 2. './testResources/testExecutionFiles/engageExperienceApp/*'
                    //          4. './testResources/testExecutionFiles/engageExperienceApp/*,./testResources/testExecutionFiles/difusion/*'
                    specFilesArray = [...specFilesArray, ...glob.sync('*.json', { matchBase: true, cwd: pathProps.dir })];
                }
                /*else {
                    //check if pathProps.base is a folder instead of a file. Populate all jsons in the folder to specFilesArray
                    var resolvedPathForDir = path.resolve(pathProps.dir, pathProps.base);
                    var resolvedPathForDirParse = path.parse(resolvedPathForDir)
                    if (fss.existsSync(resolvedPathForDirParse.dir) && fss.lstatSync(resolvedPathForDirParse.dir).isDirectory()) {
                        //Option4 : 1.'./testResources/testExecutionFiles/engageExperienceApp/'
                        //          3. './testResources/testExecutionFiles/engageExperienceApp,./testResources/testExecutionFiles/difusion'
                        specFilesArray = [...specFilesArray, ...glob.sync('*.json', { matchBase: true, cwd: resolvedPathForDir })];
                    }
                }*/
            }
        })
        return specFilesArray;
    },

    removingTempSpecs: function () {
        rimraf.sync(process.cwd() + "/test/tempRunner/");
    }

}