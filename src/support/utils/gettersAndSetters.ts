import { CsvDataObject } from "../models/common";
import { APIResponse } from "../models/responseModels";

let csvData: CsvDataObject;
let responseData: APIResponse;
let scenarioName: string;
let itemId: string;

export const getScenarioName = () => {
  return scenarioName;
};

export const setScenarioName = (scenario: string) => {
  scenarioName = scenario;
};

export const getResponseData = () => {
  return responseData;
};

export const setResponseData = (response: APIResponse) => {
  responseData = response;
};

export const getCsvData = () => {
  return csvData;
};

export const setCsvData = (csv: CsvDataObject) => {
  csvData = csv;
};

export const getItemId = () => {
  return itemId;
};

export const setItemId = (id: string) => {
  itemId = id;
};