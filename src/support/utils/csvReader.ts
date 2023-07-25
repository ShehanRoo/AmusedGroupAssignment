import { CsvDataObject } from "../models/common";

const fs = require("fs");
const csv = require("csv-parser");

export async function readFromCsv(filePath: string):Promise<CsvDataObject>{
    const results: { [key: string]: { [key: string]: string } } = {};

    const stream = fs
      .createReadStream(filePath)
      .pipe(csv())
      .on("data", (data: { [key: string]: string }) => {
        const firstColumn = data[Object.keys(data)[0]];
        const remainingColumns = { ...data };
        delete remainingColumns[Object.keys(data)[0]];
        results[firstColumn] = remainingColumns;
      });

    return new Promise((resolve, reject) => {
      stream.on("end", () => {
        resolve(results);
      });

      stream.on("error", (error: Error) => {
        reject(error);
      });
    });
  }