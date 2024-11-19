import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalAir } from '../../features/localSlice'

function AirPollutionList({ lon, lat, name }) {
   const dispatch = useDispatch()
   const { loading, airdatas, error } = useSelector((state) => state.local)
   const key = lon + '.' + lat

   useEffect(() => {
      dispatch(fetchLocalAir({ type: 'air_pollution', lon, lat }))
   }, [dispatch, lon, lat])
   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <>
         <p>
            {name} 미세먼지
            {airdatas[key] && (
               <>
                  <span>{airdatas[key].pm10 > 150 ? '매우나쁨' : airdatas[key].pm10 > 80 ? '나쁨' : airdatas[key].pm10 > 30 ? '보통' : '좋음'}</span>
                  초미세먼지
                  <span>{airdatas[key].pm2_5 > 75 ? '매우나쁨' : airdatas[key].pm2_5 > 35 ? '나쁨' : airdatas[key].pm2_5 > 15 ? '보통' : '좋음'}</span>
               </>
            )}
         </p>
      </>
   )
}

export default AirPollutionList
