import { REQUIRED_COLUMNS } from '../../shared/types/spreadsheetColumns.js'
import { RawSpreadsheetRow } from '../../shared/types/rowFormats.js';

export function validateColumns(
  rows: RawSpreadsheetRow[]
) {
  const firstRow = rows[0];

  const missingColumns = REQUIRED_COLUMNS.filter(
    (column) => !(column in firstRow)
  );

  if (!rows.length) {
    throw new Error("O arquivo está vazio.");
  } else if (missingColumns.length > 0) {
    throw new Error(
      "O arquivo não tem o formato esperado. Apenas arquivos .xslx exportados por meio da ferramenta podem ser importados e lidos"
    );
  }
}