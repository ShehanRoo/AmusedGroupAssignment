import { APIResponse } from "../models/responseModels";
import { request, expect } from "@playwright/test";
import { setItemId } from "./gettersAndSetters";

export async function apiGETRequest(
  endpoint: string,
  parameters: string
): Promise<APIResponse> {
  const context = await request.newContext();
  const url = `${process.env.BASE_URL}${endpoint}${parameters}`;
  const response = await context.get(url);

  expect(response.status()).toBe(200);
  const res = await response.json();
  return res;
}

export async function apiPOSTRequest(
  endpoint: string,
  body: object
): Promise<APIResponse> {
  const context = await request.newContext();
  const url = `${process.env.BASE_URL}${endpoint}`;
  const options = {
    data: body,
    headers: { "Content-Type": "application/json" }
  }
  const response = await context.post(url, options);
  expect(response.status()).toBe(200);
  const res = await response.json();
  setItemId(res.id)
  return res;
}

export async function apiPUTRequest(
  endpoint: string,
  params: string,
  body: object
): Promise<APIResponse> {
  const context = await request.newContext();
  const url = `${process.env.BASE_URL}${endpoint}/${params}`;
  const options = {
    data: body,
    headers: { "Content-Type": "application/json" }
  }
  const response = await context.put(url, options);
  expect(response.status()).toBe(200);
  const res = await response.json();
  return res;
}

export async function apiDELETERequest(
  endpoint: string,
  parameters: string
): Promise<APIResponse> {
  const context = await request.newContext();
  const url = `${process.env.BASE_URL}${endpoint}/${parameters}`;
  const response = await context.delete(url);

  expect(response.status()).toBe(200);
  const res = await response.json();
  return res;
}