
const httpService = require('../AxiosBookService/BooksService');

exports.getListOfBooks = () => {
    const _url = '/getbooks';
    return httpService.getService(_url);
}

exports.HighToLow = () => {
    const _url = '/decending';
    return httpService.sortHighToLow(_url);
}

exports.LowToHigh = () => {
    const _url = "/ascending";
    return httpService.sortHighToLow(_url);
}