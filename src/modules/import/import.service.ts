import { MultipartFile } from "@fastify/multipart";

import { parseSpreadsheet } from "../../shared/excel/parser.js";

export async function importService(
  file: MultipartFile
) {
  if (!file) {
    throw new Error("Nenhum arquivo para importar")
  }

  const buffer = await file.toBuffer();

  let rows;

  try {
    rows = await parseSpreadsheet(buffer);
  } catch {
    throw new Error("Falha na análise de arquivo")
  }

  return {
    fileName: file.filename,
    totalRows: rows.length,
    importedAt: new Date().toISOString(),
    rows,
  };
}