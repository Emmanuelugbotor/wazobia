import axios from 'axios';
const BASE_URL = 'https://test-api.sytbuilder.com';


export default axios.create({
    baseURL:BASE_URL
})