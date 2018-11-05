import axios from 'axios';
import api from '../config';

const getUser = async item => axios.post(`${api}/register`, item);

export default getUser;
