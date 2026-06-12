import { NormalizedRow } from "./rowFormats.js";

export interface ExportSpreadsheetBody {
  fileName: string;
  rows: NormalizedRow[];
}