import axios from 'axios'

const BASE_URL = 'https://dapi.kakao.com/v2/local/search/'
const API_KEY = process.env.REACT_APP_KAKAO_API_KEY

const kakaoApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      Authorization: `KakaoAK ${API_KEY}`,
      'Content-Type': 'application/json;charset=UTF-8',
   },
})

const fetchKakaoApi = async (url, params = {}) => {
   try {
      const response = await kakaoApi.get(url, { params })
      return response
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

export const getCoord = (query) => {
   return fetchKakaoApi('address.json', {
      query,
   })
}

export default kakaoApi
