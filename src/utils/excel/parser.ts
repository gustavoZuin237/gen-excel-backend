import * as XLSX from "xlsx";

import { NormalizedRow, RawSpreadsheetRow } from "../../shared/types/rowFormats.js"

import { validateColumns } from "./schemaValidator.js";

import { normalizeRow } from "./normalizer.js";

export async function parseSpreadsheet(buffer: Buffer): Promise<NormalizedRow[]> {
  if (!buffer) {
    throw new Error("Nenhum buffer para analisar")
  }

  const workbook = XLSX.read(buffer);

  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawRows = XLSX.utils.sheet_to_json<RawSpreadsheetRow>(worksheet, {
    defval: "",
  });

  try {
    validateColumns(rawRows);
  } catch {
    throw new Error("Falha na validação de colunas")
  }

  return rawRows.map(normalizeRow);
}