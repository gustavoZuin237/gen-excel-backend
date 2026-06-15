import { z } from "zod";

export const spreadsheetUpdatesSchema = z.object({
  dotacaoOrcamentaria: z.string().optional(),
  ficha: z.string().optional(),
  valorTotalContrato: z.number().optional(),
  valorMensal: z.number().optional(),
  valorAnual: z.number().optional(),
  reajusteAnual: z.number().optional(),
  aditivoAnual: z.number().optional(),
  supressaoAnual: z.number().optional(),
  valor2024: z.number().optional(),
  valor2025: z.number().optional(),
  valor2026: z.number(),
  valor2027: z.number(),
  valor2028: z.number().optional(),
  valor2029: z.number().optional(),
});

export const updateSpreadsheetSchema = z.object({
  spreadsheet: z.any(), // replace with your spreadsheet schema if available
  rowIndex: z.number().int().min(0),
  updates: spreadsheetUpdatesSchema,
});

export type UpdateSpreadsheetDTO = z.infer<
  typeof updateSpreadsheetSchema
>;