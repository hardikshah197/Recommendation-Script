require('dotenv').config();

const config = {
  production: {
    uri: process.env.MONGO_URI,
    database: process.env.DB,
    sheetId: process.env.SHEET_ID,
  },
  development: {
    uri: process.env.MONGO_URI,
    database: process.env.DB,
    sheetId: process.env.SHEET_ID,
  },
  test: {
    uri: process.env.MONGO_URI,
    database: process.env.DB,
    sheetId: process.env.SHEET_ID,
  }
};

module.exports = config;
