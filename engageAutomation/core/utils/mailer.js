"use strict";
const nodemailer = require("nodemailer");
const fs = require("fs");
var argv = require('yargs').argv;
var folder = fs.readdirSync('../../output/reports/');
var envData = JSON.parse(fs.readFileSync('../../env.json'));
var errorMailingList = 'akhil.aggarwal@comprotechnologies.com';
var semaphoreJob = 'https://semaphoreci.com/comprodlsengage/' + argv.projectName + '/branches/' + argv.branchName + '/builds/' + argv.buildNumber;

var funcReportDir = '../../output/reports/' + folder[0];
var visReportDir = funcReportDir + '/visual';
var mailingList, mailOutput, mailSubject, appUrl, baseurl;

async function main() {
    try {
        if (!argv.appType || !argv.testEnv || !argv.mailingList || !argv.jobResult || !argv.buildNumber) {
            console.log("!!!!! ERROR: One or more environment parameters are missing!!!!!");
            console.log("appType = " + argv.appType);
            console.log("testEnv = " + argv.testEnv);
            console.log("projectName = " + argv.projectName);
            console.log("branchName = " + argv.branchName);
            console.log("buildNumber = " + argv.buildNumber);
            console.log("mailingList = " + argv.mailingList);
            console.log("jobResult = " + argv.jobResult);
            console.log("Semaphore Job = " + semaphoreJob);
            mailOutput = '<p>!!!!! ERROR: One or more environment parameters are missing!!!!!</p><p>&nbsp;appType = ' + argv.appType + '</p><p>&nbsp;testEnv = ' + argv.testEnv + '</p><p>&nbsp;projectName = ' + argv.projectName + '</p><p>&nbsp;branchName = ' + argv.branchName + '</p><p>&nbsp;buildNumber = ' + argv.buildNumber + '</p></p><p>&nbsp;mailingList = ' + argv.mailingList + '</p><p><span style="background-color: #ffffff;"><span style="font-weight: 400;">This test was triggered via \'' + argv.triggerSource + '\' on the \'' + argv.branchName + '\' branch. For semaphore build details, click <a style="background-color: #ffffff;" href=' + semaphoreJob + '><span style="font-weight: 400;">here</span></a></span></span></p>';
            mailSubject = "❌ " + argv.appType + " | " + argv.testEnv + " | " + folder[0] + " | Error in sending mail";
            mailingList = errorMailingList;
        } else {
            var mailObj1, mailObj2, reportUrl, logData;
            appUrl = envData[argv.appType].environments[argv.testEnv].url;
            baseurl = envData[argv.appType].environments[argv.testEnv].reportDirRepo;

            logData = updateLogDataObj(funcReportDir)

            if (logData.skipAssertion != true) {
                reportUrl = baseurl + "/" + argv.appType + "/" + argv.testEnv + "/" + folder[0] + '/index.html';
                mailObj1 = await createMail(logData, reportUrl, "Functional Automation Test Run");
            }

            if (fs.existsSync(visReportDir)) {
                reportUrl = baseurl + "/" + argv.appType + "/" + argv.testEnv + "/" + folder[0] + '/visual/index.html';
                logData = updateLogDataObj(visReportDir);
                mailObj2 = await createMail(logData, reportUrl, "Visual Regression Test Run");
            }

            if (mailObj2 == undefined) {
                mailOutput = mailObj1.mailOutput + mailObj1.lastLine;
                mailSubject = mailObj1.mailSubject;
            } else if (mailObj1 == undefined) {
                mailOutput = mailObj2.mailOutput + mailObj2.lastLine;
                mailSubject = mailObj2.mailSubject;
            } else {
                mailOutput = mailObj1.mailOutput + '<!DOCTYPE html><html><body><br></body></html>' + mailObj2.mailOutput + mailObj1.lastLine;
                if (mailObj1.status == "passed" && mailObj2.status == "passed")
                    mailSubject = "✔️ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | PASSED";
                else if (mailObj1.status == "error" || mailObj2.status == "error")
                    mailSubject = "❌ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | Error in sending mail";
                else
                    mailSubject = "❌ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | FAILED";
            }
        }
        console.log(mailSubject)
        console.log(mailOutput)
        await sendMail(mailingList, mailSubject, mailOutput, 'html');
    } catch (err) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Error !!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(err)
        mailOutput = err.toString();
        mailSubject = "❌ " + argv.appType + " | " + argv.testEnv + " | " + folder[0] + " | Error in sending Mail";
        await sendMail(errorMailingList, mailSubject, mailOutput, 'text');
    }
}
main().catch(function (err) { console.log(err); throw err; });


async function createMail(logData, reportUrl, mailTitle) {

    let tc_passed = logData.state.tc_passed;
    let tc_failed = logData.state.tc_failed;
    let tc_skipped = logData.state.tc_skipped;
    let tc_total = tc_passed + tc_failed + tc_skipped;
    let testExecFile = logData.specs.toString();
    let tc_status = (tc_total == tc_passed) ? "passed" : "failed";
    let envDetail, output, subject, jobDetails;
    let appVersion = logData.appVersion;

    if (logData.capabilities.pixelRatio == undefined) {
        envDetail = logData.capabilities.platformName.toUpperCase() + '<br>' + logData.capabilities.browserName.toUpperCase() + " " + logData.capabilities.browserVersion + "<br>" + logData.capabilities.screenResolution.width + "x" + logData.capabilities.screenResolution.height;
    } else {
        let deviceScreenSize = logData.capabilities.deviceScreenSize.split("x")
        let browserWidth = Math.floor(parseInt(deviceScreenSize[0]) / (logData.capabilities.pixelRatio))
        let browserHeight = Math.floor(parseInt(deviceScreenSize[1]) / (logData.capabilities.pixelRatio))
        envDetail = logData.capabilities.deviceModel + "<br>" + logData.capabilities.platformName.toUpperCase() + " " + logData.capabilities.platformVersion + "<br>" + logData.capabilities.browserName.toUpperCase() + " " + logData.capabilities.browserVersion + "<br>" + browserWidth + "x" + browserHeight;
    }

    if (null == tc_passed || null == tc_failed || !envDetail || !appUrl || /*reportStatus != 200 ||*/ tc_total == 0) {
        console.log(mailTitle);
        console.log("!!!!! ERROR: One or more details are missing in the timeline report log file !!!!!");
        console.log("tc_total = " + tc_total);
        console.log("tc_passed = " + tc_passed);
        console.log("tc_failed = " + tc_failed);
        console.log("tc_skipped = " + tc_skipped);
        console.log("appUrl = " + appUrl);
        console.log("appVersion = " + appVersion);
        console.log("envDetail = " + envDetail);
        console.log("detailedReport url = " + reportUrl);
        //console.log("detailedReport upload status = " + reportStatus);
        console.log("testExecFile = " + testExecFile);
        output = '<p><strong>' + mailTitle + ' (' + argv.testEnv.toUpperCase() + ')</strong></p><p>!!!!! ERROR: One or more parameter are missing/invalid for the report to publish successfully !!!!!</p><p>appType = ' + argv.appType + '</p><p>testEnv = ' + argv.testEnv + '</p><p>projectName = ' + argv.projectName + '</p><p>branchName = ' + argv.branchName + '</p><p>buildNumber = ' + argv.buildNumber + '</p><p>testExecFile = ' + testExecFile + '</p><p>tc_total = ' + tc_total + '</p><p>tc_passed = ' + tc_passed + '</p><p>tc_failed = ' + tc_failed + '</p><p>tc_skipped = ' + tc_skipped + '</p><p>appURL = ' + appUrl + '</p><p>Environment = ' + envDetail + '</p><p>detailedReport = ' + reportUrl /*+ '</p><p>detailedReport http status =&nbsp; ' + reportStatus*/;
        jobDetails = '<p><span style="font-weight: 400;">This test was triggered via \'' + argv.triggerSource + '\' on the \'' + argv.branchName + '\' branch. For semaphore build details, click <a style=background-color: #ffffff;" href=' + semaphoreJob + '><span>here</span></a></span></p></body></html>';
        subject = "❌ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | Error in sending Mail";
        tc_status = "error";
        mailingList = errorMailingList;
    } else {
        output = '<!DOCTYPE html><html> <head><style> table, td { padding: 5px; border: 1.5px solid #D3D3D3; border-collapse: collapse; font-size: 14px; font-family: Arial; } </style> </head> <body><h2 style="font-family: Arial;"><strong>' + mailTitle + ' (' + argv.testEnv.toUpperCase() + ')</strong>&nbsp;</h2><table style="width: 560px;"><tbody><tr><td style="width:140px;"><strong>Build#</strong></td><td><span>' + argv.buildNumber + '</span></td></tr><tr><td><strong>Total Test</strong></td><td><strong><span style="color: #0000ff;">' + tc_total + '</span></strong></td></tr><tr><td><strong>Passed</strong></td><td><strong><span style="color: #3db67a;">' + tc_passed + '</span></strong></td></tr><tr><td><strong>Failed</strong></td><td><strong><span style="color: #ff0000;">' + tc_failed + '</span></strong></td></tr><tr><td><strong>Skipped</strong></td><td><strong><span style="color: #ff9900;">' + tc_skipped + '</span></strong></td></tr><tr><td><strong>Status</strong></td><td>' + tc_status.toUpperCase() + '</td></tr><tr><td><strong>Environment&nbsp;</strong></td><td>' + envDetail + '</td></tr><tr><td><strong>Test File&nbsp;</strong></td><td>' + testExecFile + '</td></tr><tr><td><strong>Application Url</strong></td><td><a href=' + appUrl + '><span>' + appUrl + '</span></a></td></tr><tr><td><strong>Application Version&nbsp;</strong></td><td>' + appVersion + '</td></tr><tr><td><strong>Detailed Report</strong></td><td style="white-space: nowrap;"><a href=' + reportUrl + '><span >' + reportUrl + '</span></a></td></tr></tbody></table>';
        if (tc_status == "passed")
            subject = "✔️ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | " + tc_status.toUpperCase();
        else
            subject = "❌ " + argv.appType + " | " + argv.testEnv.toUpperCase() + " | " + folder[0] + " | " + tc_status.toUpperCase();
        jobDetails = '<p><span style="font-family: Arial; font-size: 14px;">This test was triggered via \'' + argv.triggerSource + '\' on the \'' + argv.branchName + '\' branch. For semaphore build details, click <a style=background-color: #ffffff;" href=' + semaphoreJob + '><span>here</span></a></span></p></body></html>';
        mailingList = argv.mailingList;
    }

    return {
        status: tc_status,
        mailSubject: subject,
        mailOutput: output,
        lastLine: jobDetails
    };
}

async function sendMail(mailingList, mailsubject, content, contentType) {
    let info;
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: argv.emailId,
            pass: argv.emailPwd
        }
    });
    if (contentType == 'html') {
        info = await transporter.sendMail({
            from: '"engage-test-report" <' + argv.emailId + '>', // sender address
            to: mailingList,
            subject: mailsubject,
            html: content
        });
    } else {
        info = await transporter.sendMail({
            from: '"engage-test-report" <' + argv.emailId + '>', // sender address
            to: mailingList,
            subject: mailsubject,
            text: content
        });
    }
    console.log("Message sent: %s", info.messageId);
}

function updateLogDataObj(dir) {
    var logData;
    var changelogFile = dir + '/changelog.txt';
    console.log(changelogFile)
    try {
        if (fs.existsSync(changelogFile)) {
            var specs = [];
            let tc_status = {
                tc_passed: 0,
                tc_failed: 0,
                tc_skipped: 0
            }
            const functionalLogFiles = fs.readFileSync(changelogFile, 'utf-8')
                .split('\n')
                .filter(line => line !== '');

            //console.log(functionalLogFiles)
            Array.from(new Set(functionalLogFiles))
                .filter(line => line !== '')
                .forEach(file => {
                    try {
                        var reportLogPath = `${dir}/${file}`;
                        if (fs.existsSync(reportLogPath) && fs.readFileSync(reportLogPath).length > 0) {
                            console.log(reportLogPath)
                            logData = JSON.parse(fs.readFileSync(reportLogPath))
                            specs.push(logData.specs.toString());
                            tc_status.tc_passed = tc_status.tc_passed + logData.state.passed;
                            tc_status.tc_failed = tc_status.tc_failed + logData.state.failed;
                            tc_status.tc_skipped = tc_status.tc_skipped + logData.state.skipped;
                            logData.state = tc_status;
                            logData.specs = specs;
                        }
                    } catch (error) {
                        console.error(error);
                    }

                })
        }
    } catch (err) {
        console.error(err)
    }
    return logData;
}