# Engage

#Running Default tests:

1. npm install
2. npm run test (on desktop)
3. npm run mobiletest(on device*)
* Android Studio should be installed on your machine to run the automation on Android Device.

Refer [google doc](https://docs.google.com/document/d/1Eh6gFHoB3nrjEXZpuPFgRtZBXzX3IplUABiJ4iyS7xU/edit#) section for Steps to Run Engage Automation Test on Mobile Devices for more details

# Running Tests by providing command line parameters


```
npm test -- --appType=engage -- testEnv=qa --testExecFile='End2End.json'
```
#### Mandatory run Parameters:
appType, testEnv, testExecFile

**appType**: Application Name like engage, Difusion itemPlayerTestbench etc.
**testEnv**: Application test environment like qa, staging, production etc.
**testExecFile**: Test execution json that contains the list of all the testcases to be executed.


#### Optional run Parameters:

**deviceName**: Device Name on which test need to be executed.

```
npm test -- --appType=engage -- testEnv=qa --testExecFile='End2End.json' --deviceName='OnePlus 6T'
```
**windowHeight, windowWidth** : These are optional parameters applicable for desktop browser. key points to be considered while passing these parameters:
If windowWidth < 767, the browser window will be maximised and viewport of the browser would be set as per windowWidth and windowHeight.The application will be launched in mobile mode.
If WindowWidth > 767, the browser window will re-size to the width and height passed. Desktop Mode for the application will be launched.
If these parameters are skipped, the default viewport (360 x 640) will be used.

```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json' ’ --windowWidth=375 --windowHeight=812
```
 
**logglyToken**: This optional parameter to used pass Loggly customer token through the script. When passed in the script, the logs generated will be shipped to loggly. 

Currently token’s value is encrypted in the Semaphore jobs and is used for shipping logs which are triggered on master branch only.

```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json' ’ --logglyToken=’XYZ’
```


**loginDataFile**: This optional parameter is for passing login data json via command line. When this parameter is passed then login data is picked from this file instead of json file passed via Test execution Json file.
1. The datafile passed via command line shoule be available in testdata folder
2. This works for only login testcases(for all login testcases available under hooks and test node in execution json)

```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json' --loginDataFile='dummylogindata.json'
```
**reportdir**: This optional parameter is for passing name of testrun report folder via command line. When this parameter is passed then report is saved in this folder otherwise it get saved in a default named folder "TestReports"
Current;ly, we have used reportdir=%date:/=%-%time::=-% so that report will be generated in a folder based on date and time(08-01-2021-15-03-32) of test run.

```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json'
```
**visual**: This optional parameter is for exceuting the Visual regression check. Key Points:
1. Currently, applitools and novus support is added for visual runs. 
2. The visual test for a testcase is run if the visual flag is true for that testcase. The visual flag is override using Execution json. If the visual tag is not present for testcase in exceution json, then its value is picked from testcase repository.
3. When only visual paramter is passed, both functional and visual tests are executed. Firstly, functional testcase is exceuted and if the testcase is passed then visual run for the testcase is exceuted based on the visual flag.

Sample command for visual run using novus tool
 ```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --visual=novus
```
Sample command for visual run using applitools
 ```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --visual=applitools
```
**skipAssertion**: This optional parameter is passed for enabling or disabling the assertions in testcase functions When visual test is run.
If we want to disable the functional test assertion checks while the visual run then we will pass "true" value for "skipAssertion" paramter via commandline.
And If we want to enable  the functional test assertion checks while the visual run then we will pass "false" value for "skipAssertion" paramter via commandline or do not pass this parmeter.

If this paramter is passed with "true" value, then all the functional assertions are skipped while the excecution of test. Visual test will run for all the testcases with visual flag true.

Sample command for visual run with skipAssertion true
 ```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --visual=novus --skipAssertion=true
```
**retry**: This optional parameter is passed for re-running the entire test if any test is failed. This parameter will run the entire spec file once.

Sample command for running tests with retry option
 ```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --retry
```
**testFilter**: This optional parameter is passed for running tests based on a keyword. For e.g. passing keyword "Suite1" will run Suite1, Suite11 etc. if they are present in the execution file.

Sample command for running tests with grep option
 ```
npm test  --reportdir=%date:/=%-%time::=-% --appType=engageExperienceApp  --testEnv=qa --testExecFile=End2End.json --testFilter="Suite1"
```

**excludeTestFile**: This optional parameter is passed for excluding one or more comma separated set of json files from a group of test execution files to be run. This parameter can be used in parallel mode when multiple sessions of browser run concurrently.

Sample command for excludeTestFile - This command will run all the json files under engageExperienceApp but exclude etextFeatureTest.json,  tocFeatureTest.json, dashboardFeatureTest.json
 ```
"./node_modules/.bin/wdio --reportdir=landingFeatureTest --testExecFile='./testResources/testExecutionFiles/engageExperienceApp/*' --excludeTestFile='etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json' --appType=engage --testEnv=qa --windowWidth=360 --windowHeight=640
```

----
Supported Options - testExecFile & excludeTestFile
Option1 :
1. 'E2E*.json';
2. 'E2E*.json,land*.json'

Option2 : '*.json';

Option3 : 'etextFeatureTest.json,tocFeatureTest.json,dashboardFeatureTest.json'

Option4 : 
1.  './testResources/testExecutionFiles/engageExperienceApp/'
2. './testResources/testExecutionFiles/engageExperienceApp/*'
3. './testResources/testExecutionFiles/engageExperienceApp,./testResources/testExecutionFiles/difusion'
4. './testResources/testExecutionFiles/engageExperienceApp/*,./testResources/testExecutionFiles/difusion/*'

Option5 : 
1. './testResources/testExecutionFiles/engageExperienceApp/userOnboardingTest.json'
2. './testResources/testExecutionFiles/engageExperienceApp/*.json'
3. './testResources/testExecutionFiles/engageExperienceApp/land*.json'
4. './testResources/testExecutionFiles/engageExperienceApp/land*.json,./testResources/testExecutionFiles/engageExperienceApp/etext*.json'

----

