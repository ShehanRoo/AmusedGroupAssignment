# AmusedGroupAssignment

**Installation**  
  
Run the following command to install the pre-requisite packages after cloning the repository  
  
`npm -i`
  
**Running Tests**  
  
Tests can be running in the following ways:    
  
- To run all feature files: `npx cucumber-js -p runner "features"`  
- To run a specific feature file: `npx cucumber-js -p runner "features/<FileName>.feature"`   
(eg: `npx cucumber-js -p runner "features/ApiTest.feature"`)  
- To run tests based on tags: npx cucumber-js -p runner --tags "@TagName"  
(eg: `npx cucumber-js -p runner --tags "@regression"`)  
    
**Test Results**    
     
Playwright reporting module is added to view test results. These result files can be found in: "test-results/reports" which is generated after test run is complete. The following report types can be viewed:    
- HTML Report
- JSON File
