import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/'
const API_KEY = process.env.REACT_APP_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

const fetchApi = async (url, params = {}) => {
   try {
      const response = await weatherApi.get(url, { params })
      console.log(response.data.list)
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

export const getWeather = (type = 'weather', q = 'incheon') => {
   const endpoint = {
      weather: '/weather',
      forecast: '/forecast',
   }[type]

   return fetchApi(`data/2.5${endpoint}`, {
      q,
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
   })
}

export default weatherApi
