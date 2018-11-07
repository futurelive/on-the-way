import axios from 'axios';
import api from '../config';
import handleNetwork from './base';

const register = async item => handleNetwork(axios.post(`${api}/register`, JSON.stringify(item)));

export default register;
