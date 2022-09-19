import axios from 'axios'

const BASE_URL = 'https://bayut.p.rapidapi.com/properties'

const options = {
    url: BASE_URL,
    
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_PROPERTY_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};


export const fetchProperties = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}