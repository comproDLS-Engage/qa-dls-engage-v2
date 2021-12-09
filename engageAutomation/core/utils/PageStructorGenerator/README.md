# Page Object Generator
----
## Prerequisite:
Create the csv json form selector hub as per format 




----
## Steps to run the Tool: 

Step 1: On the debug console, Move to the page object structure folder
Step 2: Type “Node form.js” command in console debug
Step 3: Open the “http://localhost:8080/” in the chrome browser, html page will be opened
Step 4: Upload the csv and Click on "proceed" 
Step 6: Enter the Page Object Name in the textbox in html page
Step 7: choose the options (if Required)
Step 8: Click on “Generate”
Step 9: Page object and selector file is generated on the Page Structure utility folder.
---

### Mandatory parameters:

#### label
 1. This is auto-populated by Selector hub for each selector Value,  
 2. Note Label/Selector name will be used in entire automation so for better readability of the page ensure its matching with Engage Page.

#### cssSelector
1. This is auto-populated by Selector hub but values can be changed if required

#### tagName
1. This is auto-populated by Selector hub but values can be changed if required
2. Click function will be created for button and anchor tags
3. setValue function will be created for input and textarea tags
4. Data functions:
    a.wait for displayed will be used for img and svg tags 
    b. For all other tags, get text function will be used

#### group
1. This column will be used by the tool to create multiple data groups as required for a page object
2. It can contain number or string values, the function name in the page obj file will use this value. For example, “1” in this column will create “getData_1_Group()”, “dashboard” in this column will create “getData_dashboard_Group()”.
3. In case of blank values, the selector will be ignored and will not be part of any data group
4. If the entire column is blank then only one data function will be created.
   
#### relation
1. This column will be used by the tool to identify if there is a parent-child relation between the selectors of a group
2. This information will be used in creating pattern-based functions in the page object
3. This column can be updated based on the following:
        a. If a selector is a parent of other selectors in a group then specify “parent” for that selector
        b. If condition in the patten-based function needs to checked for an selector other than the “parent” then specify “condition” for that selector
        c. Leave blank for any other case
4. A group can have only one “parent” and one “condition”.
5. If “condition” is present in a group then “parent” must be present, vice-versa is not true.

#### extraInfo
1. This column will be used by the tool to identify if the selector is a pattern (returns multiple selectors) or simple (returns single selector)
2. If the selector returns multiple selectors then specify “pattern” in this column
3. If the selector returns a single selector always then leave it blank
4. If “isInitialized” is available in this column then isInitialized function will use this selector else first selector in the selector file will be used by isInitialized function

#### returnValue
1. This column is used for return value
2. For returning isintialize of any page for this you need to type "pageName.Page"
3. For returning any group data of that page for that you need to type "GroupName"
4. For returing any function form action library, need to type function name including with all param (For eg. waitForDisplayed, showResponseBtn, true, 1000)
