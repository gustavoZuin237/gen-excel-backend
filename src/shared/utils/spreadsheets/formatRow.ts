import { COLUMN_LABELS } from "../../types/spreadsheetColumns.js";

import { type NormalizedRow } from "../../types/rowFormats.js";

import { formatCurrency } from "../currency/formatCurrency.js";
import { titleCase } from "../strings/titleCase.js";
import { formatDate } from "../dates/formatDate.js";

export function formatRow(row: NormalizedRow) {
  return {
    [COLUMN_LABELS.secretaria]: titleCase(row.secretaria),
    [COLUMN_LABELS.orgao]: row.orgao,
    [COLUMN_LABELS.numeroProcesso]: row.numeroProcesso,
    [COLUMN_LABELS.tipoContrato]: row.tipoContrato,
    [COLUMN_LABELS.fornecedor]: titleCase(row.fornecedor),
    [COLUMN_LABELS.objetoContrato]: titleCase(row.objetoContrato),
    [COLUMN_LABELS.ficha]: row.ficha,
    [COLUMN_LABELS.dotacaoOrcamentaria]: row.dotacaoOrcamentaria,
    [COLUMN_LABELS.fonte]: row.fonte,
    [COLUMN_LABELS.codigoAplicacao]: row.codigoAplicacao,
    [COLUMN_LABELS.quantidadeProduto]: row.quantidadeProduto,
    [COLUMN_LABELS.dataInicio]: formatDate(row.dataInicio),
    [COLUMN_LABELS.dataVencimento]: formatDate(row.dataVencimento),
    [COLUMN_LABELS.dataPagamento]: row.dataPagamento,
    [COLUMN_LABELS.prazoMeses]: row.prazoMeses,
    [COLUMN_LABELS.valorTotalContrato]: formatCurrency(row.valorTotalContrato),
    [COLUMN_LABELS.valorMensal]: formatCurrency(row.valorMensal),
    [COLUMN_LABELS.valor2024]: formatCurrency(row.valor2024),
    [COLUMN_LABELS.valor2025]: formatCurrency(row.valor2025),
    [COLUMN_LABELS.valor2026]: formatCurrency(row.valor2026),
    [COLUMN_LABELS.valor2027]: formatCurrency(row.valor2027),
    [COLUMN_LABELS.valor2028]: formatCurrency(row.valor2028),
    [COLUMN_LABELS.valor2029]: formatCurrency(row.valor2029),
    [COLUMN_LABELS.valorAnual]: formatCurrency(row.valorAnual),
    [COLUMN_LABELS.reajusteAnual]: formatCurrency(row.reajusteAnual),
    [COLUMN_LABELS.aditivoAnual]: formatCurrency(row.aditivoAnual),
    [COLUMN_LABELS.supressaoAnual]: formatCurrency(row.supressaoAnual),
    [COLUMN_LABELS.valorTotalAnual]: formatCurrency(row.valorTotalAnual),
    [COLUMN_LABELS.gestorContrato]: titleCase(row.gestorContrato),
    [COLUMN_LABELS.observacao]: row.observacao,
    [COLUMN_LABELS.alterador]: row.alterador,
    [COLUMN_LABELS.dataExportacao]: formatDate(row.dataExportacao),
  };
}
