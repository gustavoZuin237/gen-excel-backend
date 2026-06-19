import { Type } from "@sinclair/typebox";
import { NormalizedRowSchema } from "../../shared/types/rowFormats.js";

export const exportSchema = {
  body: Type.Object({
    fileName: Type.String(),
    rows: Type.Array(NormalizedRowSchema),
  }),
  response: {
    200: Type.Null({ description: "Excel file download" }),
  },
};
