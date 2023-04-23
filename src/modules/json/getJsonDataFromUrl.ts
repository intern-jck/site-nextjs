import axios from 'axios';

export async function getJsonDataFromUrl(url:string) {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    // console.log(data)
    return data;
  } catch (error) {
    console.log('getJsonData Error:', error)
    return error;
  }
};
