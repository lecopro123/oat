import axios from 'axios';

const URL = 'https://dev-api.ownerandtenant.com/v1.0/auth/user/signin';
//const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchdata = async (cb, email, pass) => {
    const emp = { email: email, password: pass }
    const data = await axios.post(URL, emp)
    cb();
    return data.data;
}