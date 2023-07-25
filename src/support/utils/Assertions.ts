import { expect } from "@playwright/test";

export async function assertEquals(actual: any, expected: any) {
  expect(actual, `Expect ${actual} to equal ${expected}`).toEqual(expected);
}

export async function assertContains(actual: any, expected: any) {
  expect(actual, `Expect ${actual} to have property ${expected}`).toHaveProperty(expected);
}
