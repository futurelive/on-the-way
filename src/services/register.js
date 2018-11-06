import axios from 'axios';
import api from '../config';

const register = async item => axios.post(`${api}/register`, JSON.stringify(item));

export default register;
