const axios = require('axios');

const baseURL = 'http://localhost:8088/';

exports.getService = (url) => {
    return axios.get(baseURL + url );
}

exports.sortHighToLow = (url) => {
    return axios.get(baseURL + url);
}

exports.sortLowToHigh = (url) => {
    return axios.get(baseURL + url);
}

exports.additem = (url,book) => {
    return axios.post(baseURL + url,book);
}