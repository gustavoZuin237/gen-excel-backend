export const importSchema = {
  response: {
    200: {
      type: "object",
      properties: {
        fileName: {
          type: "string"
        },
        totalRows: {
          type: "number"
        },
        importedAt: {
          type: "string",
          format: "date-time"
        },
        rows: {
          type: "array"
        }
      }
    },
  },
};