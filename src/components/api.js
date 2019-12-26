import axios from 'axios';
import configKey from '../config/config';

const zomatoApi = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'user-key': configKey
    }
});

export default zomatoApi;

