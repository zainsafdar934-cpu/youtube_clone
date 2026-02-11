import axios from "axios";

const BASE_URL = 'youtube-v31.p.rapidapi.com/search';

const options = {
    hostname: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};