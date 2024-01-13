import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/images';

let token = null;

const setToken = newToken => {
    token = `bearer ${newToken}`;
}
const config = {
    headers: { Authorization: token }
}


// GET all images
const getAll = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const create = async (newObject) => {
    const res = await axios.post(baseUrl, newObject, config);
    return res.data;
}

export default { getAll, create, setToken };