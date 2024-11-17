import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const weathersApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

const fetchWeatherApi = async (url, params = {}) => {
   try {
      const response = await weathersApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

export const getWeathers = (type, lat = 0, lon = 0) => {
   const endpoint = {
      weather: '/weather',
      forecast: '/forecast',
      air_pollution: '/air_pollution',
   }[type]

   return fetchWeatherApi(endpoint, {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric',
      lang: 'kr',
   })
}

export default weathersApi
