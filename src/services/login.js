import axios from 'axios';
import api from '../config';

const login = async item => axios.post(`${api}/login`, JSON.stringify(item));

export default login;
