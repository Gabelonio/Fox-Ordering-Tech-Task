import axios from "axios";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: apiKey,
  },
});

export default omdb;
