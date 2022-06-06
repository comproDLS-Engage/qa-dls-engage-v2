"use strict";
var fs = require('fs');

var resolvedOutputDir = process.cwd() + '/' + global.reportOutputDir;
var functionalChangeLogFile = process.cwd() + '/' + global.reportOutputDir + "/changelog.txt";

module.exports = {

    updateFunctionalObj: function() {
        var logData, specName, logDataObjToConsole;

        try {

            if (fs.existsSync(functionalChangeLogFile)) {

                const functionalLogFiles = fs.readFileSync(functionalChangeLogFile, 'utf-8')
                    .split('\n')
                    .filter(line => line !== '');

                //console.log(functionalLogFiles)
                Array.from(new Set(functionalLogFiles))
                    .filter(line => line !== '')
                    .forEach(file => {
                        try {

                            var reportLogPath = `${resolvedOutputDir}/${file}`;

                            fs.readFile(reportLogPath, 'utf8', function readFileCallback(err, logDataObj) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    //if file not empty
                                    logDataObjToConsole = logDataObj;
                                    if (logDataObj.length > 0) {

                                        logData = JSON.parse(logDataObj)
                                        //checking for linux..
                                        if(logData.specs[0].toString().indexOf("/") >= 0)
                                            specName = logData.specs[0].toString().split('/');

                                        else
                                            specName = logData.specs[0].toString().split('\\');

                                        if (specName.length > 1) {
                                            //console.log(specName)
                                            logData.capabilities.screenResolution = global.resolution;

                                            logData.specs = [specName[specName.length - 1].replace(".js", ".json")];
                                            logData.skipAssertion = (argv.skipAssertion) ? true : false;
                                            logData.appVersion = global.appVersion;

                                            //console.log("writing to file..." + reportLogPath)
                                            fs.writeFileSync(reportLogPath, JSON.stringify(logData));

                                        }  

                                    }
                                }

                            })

                        } catch (error) {
                            console.log(error);
                            console.log("logData-")
                            console.log(logDataObjToConsole);
                        }

                    })

            } else {
                console.log("changelog does not exist")
            }

        } catch (err) {
            console.error(err)
        }

    }
}