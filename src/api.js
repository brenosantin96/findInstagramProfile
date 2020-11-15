import axios from 'axios';

const apiInsta = axios.create({baseURL:'https://rocketseat-node.herokuapp.com/api'});

export default apiInsta;