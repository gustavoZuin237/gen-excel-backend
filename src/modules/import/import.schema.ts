import { Type } from "@sinclair/typebox";
import { NormalizedRowSchema } from "../../shared/types/rowFormats.js";

export const importSchema = {
  response: {
    200: Type.Object({
      fileName: Type.String(),
      totalRows: Type.Number(),
      importedAt: Type.String({ format: "date-time" }),
      rows: Type.Array(NormalizedRowSchema),
    }),
  },
};
