import * as XLSX from "xlsx";

import { NormalizedRow, RawSpreadsheetRow } from "../types/rowFormats.js"

import { validateColumns } from "./schemaValidator.js";

import { normalizeRow } from "./normalizer.js";

export async function parseSpreadsheet(buffer: Buffer): Promise<NormalizedRow[]> {
   const workbook = XLSX.read(buffer);

  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawRows = XLSX.utils.sheet_to_json<RawSpreadsheetRow>(worksheet, {
    defval: "",
  });

  validateColumns(rawRows);

  return rawRows.map(normalizeRow);
}