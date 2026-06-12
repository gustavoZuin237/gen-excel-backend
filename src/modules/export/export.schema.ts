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
      // * This FUCKING thing wouldn't register the correct typing. It works though, trust me. If it doesn't... Fix it, I guess lol 
    },
  },
  response: {
    200: {
      type: "null",
      description: "Excel file download",
    },
  },
};
