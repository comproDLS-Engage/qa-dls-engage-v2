# Engage Automation
----
## Run Default tests:
1. npm install
2. npm run [script name available in the package.json]

Refer [google doc](https://docs.google.com/document/d/1Eh6gFHoB3nrjEXZpuPFgRtZBXzX3IplUABiJ4iyS7xU/edit#) section for Steps to Run Engage Automation Test on Mobile Devices for more details.

----
## Run Tests using Command Line parameters

### Mandatory parameters:
#### appType
Application name like engageExperienceApp, difusionExperienceApp, backoffice etc. It must be present in env.json.
#### testEnv
Application test environment like qa, staging, production etc. It must be present in env.json.
#### testExecFile
Test execution json that contains the list of all the testcases to be executed. It must be present in the testExecDir as mentioned in the env.json.
```
npm test -- --appType=engageExperienceApp -- testEnv=qa --testExecFile='End2End.json'
```
```
npm test -- --appType=engageExperienceApp -- testEnv=qa --testExecFile='etextFeatureTest.json,'End2End.json'
```
----
### Optional parameters:
#### capability
Browser capability for running the test. Check capabilities.json to view/set the desired capabilities.
```
npm test -- --appType=engageExperienceApp -- testEnv=qa --testExecFile='End2End.json' --capability='desktop-chrome-1366'
```
>If this parameter is not used then the default capability **desktop-chrome-1920** will be used.

#### reportdir
Custom folder name to store the reports. 
```
npm test -- --reportdir="E2E-report" --appType=engageExperienceApp -- testEnv=qa --testExecFile='End2End.json'
```
To generate report folder based on date-timestamp, use 
- **--reportdir=%date:/=%-%time::=-%** for Linux
- **--reportdir="%date:~-4%-%date:~7,2%-%date:~10,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%"** for Windows

>If this parameter is not used then report will generate in the default folder "TestReports".

#### visual
Parameter for executing the visual test. Allowed values are **novus** and **applitools**. Visual flag for a testcase should be set to true in the testcase repository or in the execution json.
 ```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --visual=novus
```
> - Visual test will be performed only if the functional test is passed or if --skipAssertion is set to true.
> - If this parameter is used without --skipAssertion=true then both functional and visual tests will be executed.

#### skipAssertion
Parameter for disabling/skipping assertions for the entire test run.
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --visual=novus --skipAssertion=true
```
> This parameter should NOT be used without --visual parameter.

#### testFilter
Parameter for running selective suites/tests based on a keyword. For e.g. passing keyword "Suite1" will run Suite1, Suite11 etc. if they are present in the execution file.
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --testFilter="Suite1"
```

#### retry
Parameter for re-running the entire test if any test is failed. This parameter will run the entire spec file once.
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --retry
```

#### noCompressImage
Parameter for disabling the image compression of the timeline report.
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --noCompressImage
```

#### logglyToken
Parameter for setting loggly token. If used,the generated logs will be shipped to loggly. 
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --logglyToken=XYZ
```

#### loginDataFile
Parameter for passing login data json via command line. When this parameter is passed then login data is picked from this file instead of test execution file.
```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json' --loginDataFile='dummylogindata.json'
```

#### excludeTestFile
Parameter for excluding one or more test execution files from a group of test execution files. This parameter can be used in parallel mode when multiple sessions of browser run concurrently.

 ```
npm test -- --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile='./testResources/testExecutionFiles/engageExperienceApp/*' --excludeTestFile='etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'
```

Supported Options for testExecFile & excludeTestFile
1. 'E2E*.json'
2. 'E2E*.json,land*.json'
3. '*.json'
4. 'etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'

> Above options will use testExecDir from env.json for identifying the file location.

5. './testResources/testExecutionFiles/engageExperienceApp/'
6. './testResources/testExecutionFiles/engageExperienceApp/*'
7. './testResources/testExecutionFiles/engageExperienceApp,./testResources/testExecutionFiles/difusion'
8. './testResources/testExecutionFiles/engageExperienceApp/*,./testResources/testExecutionFiles/difusion/*'
9. './testResources/testExecutionFiles/engageExperienceApp/userOnboardingTest.json'
10. './testResources/testExecutionFiles/engageExperienceApp/*.json'
11. './testResources/testExecutionFiles/engageExperienceApp/land*.json'
12. './testResources/testExecutionFiles/engageExperienceApp/land*.json,./testResources/testExecutionFiles/engageExperienceApp/etext*.json'

----
