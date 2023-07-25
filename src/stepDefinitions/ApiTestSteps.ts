import { Given, When, Then } from "@cucumber/cucumber";
import {
  apiDELETERequest,
  apiGETRequest,
  apiPOSTRequest,
  apiPUTRequest,
} from "../support/utils/RequestBuilder";
import { RestAPIEndpoints } from "../support/constants/ApiEndPoints";
import {
  getCsvData,
  getItemId,
  getResponseData,
  getScenarioName,
  setCsvData,
  setResponseData,
  setScenarioName,
} from "../support/utils/gettersAndSetters";
import { readFromCsv } from "../support/utils/csvReader";
import { CsvDataObject } from "../support/models/common";
import { assertContains, assertEquals } from "../support/utils/Assertions";

Given(
  "User sends GET request with {string}",
  async function (scenario: string) {
    await setScenarioName(scenario);
    await readFromCsv(`${process.env.TEST_DATA}`).then(
      (data: CsvDataObject) => {
        setCsvData(data);
      }
    );
    await apiGETRequest(
      RestAPIEndpoints.objects,
      getCsvData()[scenario].parameters
    ).then((response) => {
      setResponseData(response);
    });
  }
);

Given(
  "User sends POST request with {string}",
  async function (scenario: string) {
    await setScenarioName(scenario);
    await readFromCsv(`${process.env.TEST_DATA}`).then(
      (data: CsvDataObject) => {
        setCsvData(data);
      }
    );
    await apiPOSTRequest(
      RestAPIEndpoints.objects,
      JSON.parse(getCsvData()[scenario].bodyData)
    ).then((response) => {
      setResponseData(response);
    });
  }
);

Given(
  "User sends PUT request with {string}",
  async function (scenario: string) {
    await setScenarioName(scenario);
    await readFromCsv(`${process.env.TEST_DATA}`).then(
      (data: CsvDataObject) => {
        setCsvData(data);
      }
    );
    await apiPUTRequest(
      RestAPIEndpoints.objects,
      getItemId(),
      JSON.parse(getCsvData()[scenario].bodyData)
    ).then((response) => {
      setResponseData(response);
    });
  }
);

Given(
  "User sends DELETE request with {string}",
  async function (scenario: string) {
    await setScenarioName(scenario);
    await readFromCsv(`${process.env.TEST_DATA}`).then(
      (data: CsvDataObject) => {
        setCsvData(data);
      }
    );
    await apiDELETERequest(RestAPIEndpoints.objects, getItemId()).then(
      (response) => {
        setResponseData(response);
      }
    );
  }
);

Then("User verifies GET response data", async function () {
  const expectedResponse: CsvDataObject = JSON.parse(
    getCsvData()[getScenarioName()].expectedResponse
  );
  assertEquals(getResponseData().id, expectedResponse.id);
  assertEquals(getResponseData().name, expectedResponse.name);
  assertEquals(getResponseData().data, expectedResponse.data);
});

Then("User verifies POST response data", async function () {
  const expectedResponse: CsvDataObject = JSON.parse(
    getCsvData()[getScenarioName()].bodyData
  );
  assertContains(getResponseData(), "id");
  assertEquals(getResponseData().name, expectedResponse.name);
  assertEquals(getResponseData().data, expectedResponse.data);
});

Then("User verifies PUT response data", async function () {
  const expectedResponse: CsvDataObject = JSON.parse(
    getCsvData()[getScenarioName()].expectedResponse
  );
  assertEquals(getResponseData().name, expectedResponse.name);
  assertContains(getResponseData().data, "Color");
});

Then("User verifies DELETE response data", async function () {
  const expectedResponse = JSON.parse(
    getCsvData()[getScenarioName()].expectedResponse
  );
  assertEquals(
    getResponseData().message,
    expectedResponse.message.replace("${id}", getItemId())
  );
});
