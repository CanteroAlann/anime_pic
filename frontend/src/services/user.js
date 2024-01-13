import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/users';


const create = async (newObject) => {
    const res = await axios.post(baseUrl, newObject);
    return res.data;
}

export default { create };