import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/images';


// GET all images
const getAll = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

const create = async (newObject) => {
    const res = await axios.post(baseUrl, newObject);
    return res.data;
}

export default { getAll, create };