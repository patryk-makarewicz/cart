export const useAPImocks = false;

export const BASE_URL = `https://api.airtable.com/v0/${process.env.DB_ID}`;

export const headers = {
  Authorization: `Bearer ${process.env.API_KEY}`
};
