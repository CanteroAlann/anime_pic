import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/images';

let token = null;

const setToken = newToken => {
    token = `Bearer ${newToken}`;
}


// GET all images
const getAll = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const create = async (newObject) => {
    const res = await axios.post(baseUrl, newObject, {
        headers: {
            'Authorization': token
        }
    });
    return res.data;
}

export default { getAll, create, setToken };