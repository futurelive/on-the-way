import axios from 'axios';

const getUser = async function name() {
  return axios.get('https://randomuser.me/api/');
};

export default getUser;
