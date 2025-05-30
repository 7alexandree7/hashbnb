import axios from 'axios';

export default  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;