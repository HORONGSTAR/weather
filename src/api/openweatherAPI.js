import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5'
const KEY = 'a11b42848a8f6883382d58f86737564a'

const openweatherAPI = axios.create({
   baseURL: URL,
   headers: {
      accept: 'application/json',
   },
})

export const getWeather = async () => {
   const response = await openweatherAPI.get('/weather', {
      params: {
         q: 'incheon',
         appid: KEY,
         units: 'metric',
         lang: 'kr',
      },
   })
   return response
}

export default openweatherAPI
