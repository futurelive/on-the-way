import axios from 'axios';
import api from '../config';
import handleNetwork from './base';

const login = async item => handleNetwork(axios.post(`${api}/login`, JSON.stringify(item)));

export default login;
