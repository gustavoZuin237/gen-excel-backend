import type { UpdateSpreadsheetDTO } from "./update.schema.js";

export async function UpdateSpreadsheetService({
  rows,
  rowIndex,
  updates,
}: UpdateSpreadsheetDTO) {
  const row = rows[rowIndex];

  if (!row) {
    throw new Error("Row not found");
  }

  const updatedRow = {
    ...row,
    ...updates,
  };

  function recalculateFields(row: Record<string, unknown>) {
    row.valorTotalAnual =
      Number(row.valorAnual ?? 0) +
      Number(row.reajusteAnual ?? 0) +
      Number(row.aditivoAnual ?? 0) -
      Number(row.supressaoAnual ?? 0);
  }

  recalculateFields(updatedRow);

  rows[rowIndex] = updatedRow;

  return {
    rows
  };
}
