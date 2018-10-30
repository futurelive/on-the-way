import axios from 'axios';

const getUser = async () => axios.get('https://randomuser.me/api/');

export default getUser;
