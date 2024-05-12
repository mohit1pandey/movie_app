import axios from "axios";
// to access teh environment variable

const BASE_URI = 'https://api.themoviedb.org/3';

const TMBD_URI_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGFlZjU1YjEzYTIzM2FhZTQzNmZmY2JmYzdmOTkyYyIsInN1YiI6IjY1ZGI1OWUwNGMxZDlhMDE2MzZmNTMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d6jvqHTWW1ecGyijuBSBD5P1ftyNzjK6mnaquRQeOHk';

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${TMBD_URI_TOKEN}`
}



// now export a function to call fetch the API

export const fetchDataFromAPI = async (url, params) => {

    try {
  
      const response = await axios.get(BASE_URI + url, {
        headers,
        params
      })
  
      return response.data;
  
    } catch (error) {
  
      console.log(error)
      return error;
  
    }
  
}