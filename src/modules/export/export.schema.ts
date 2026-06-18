import { Type } from "@sinclair/typebox";

export const exportSchema = {
  body: {
    type: "object",
    required: ["fileName", "rows"],
    properties: {
      fileName: {
        type: "string",
      },
      rows: Type.Array(Type.Any()),
    },
  },
  response: {
    200: {
      type: "null",
      description: "Excel file download",
    },
  },
};
