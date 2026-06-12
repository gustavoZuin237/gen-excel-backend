import { MultipartFile } from "@fastify/multipart";

import { parseSpreadsheet } from "../../shared/excel/parser.js";

export async function importService(
  file: MultipartFile
) {
  const buffer = await file.toBuffer();

  const rows = await parseSpreadsheet(buffer);

  return {
    fileName: file.filename,
    totalRows: rows.length,
    importedAt: new Date().toISOString(),
    warnings: [], // TODO Add warnings about broken rows without rejecting the full spreadsheet
    rows,
  };
}