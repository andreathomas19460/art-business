import axios from 'axios';

export default {
    // Gets all books
    getBooks() {
        return axios.get(`/api/books`);
    },
};
