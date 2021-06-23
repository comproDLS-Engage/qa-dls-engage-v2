### Engage TestCaseRepo creation utility
Released on March 26, 2020.

#### Utility Usage:
This utility can be used for convert the CSV exported from QATouch to Engage TestCase Repo JSON file.

# Basic Working Steps
1. Download the Test Cases from QA Touch in CSV format.
2. Require the utility in the desired file.
3. Call the function testCaseRepoCreation from the source file and provide the necessary arguments to the utility.

# Arguments:
1. `inputFilePath`
    - This is used for specifing the location of input CSV File. 
    *Note:* The path will include the folder path and file name.
2. `outputFolderPath`
    - This argument is used for specifing the location of output JSON File.
    *Note:* The path will include the folder path and file name.

*Notes:*
1. The order of TC's will be based on the order of Module Names in the CSV file.
2. Please note ModuleName is an mandatory property of the TC.

### Test Run

const c2j = require('./EngageTCRepoCreator.js');
c2j.testCaseRepoCreation(inputFilePath,outputFilePath);