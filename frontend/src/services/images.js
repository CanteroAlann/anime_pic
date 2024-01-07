import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/images';


// GET all images
const getAll = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
}

export default { getAll };