import axios from "axios";

const BASE_URL = 'youtube-v31.p.rapidapi.com/search';

const options = {
    hostname: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '2ddbd1e5bamsh26b5736cceca647p1f5c75jsn53ed7e8e2b6d',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};