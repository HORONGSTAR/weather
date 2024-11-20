import { TableCell, TableRow, LinearProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalAir } from '../../features/localSlice'
import { FaRegFaceMeh } from 'react-icons/fa6'

function AirItem({ lat, lon, name }) {
   const dispatch = useDispatch()
   const { loading, airdatas, error } = useSelector((state) => state.local)
   const key = lon + '.' + lat

   useEffect(() => {
      dispatch(fetchLocalAir({ type: 'air_pollution', lon, lat }))
   }, [dispatch, lon, lat])
   if (loading)
      return (
         <TableRow>
            <TableCell colSpan={3} align="center">
               <LinearProgress sx={{ opacity: '40%' }} />
            </TableCell>
         </TableRow>
      )
   if (error)
      return (
         <TableRow>
            <TableCell colSpan={3} align="center">
               문제가 생겼어요! : {error}
            </TableCell>
         </TableRow>
      )

   return (
      <TableRow>
         <TableCell align="center">{name}</TableCell>
         <TableCell align="center">
            {airdatas[key] && (
               <>
                  {airdatas[key].pm10 > 150 ? (
                     '매우 나쁨'
                  ) : airdatas[key].pm10 > 80 ? (
                     '나쁨'
                  ) : airdatas[key].pm10 > 30 ? (
                     <>
                        보통
                        <FaRegFaceMeh />
                     </>
                  ) : (
                     <>좋음</>
                  )}
               </>
            )}
         </TableCell>
         <TableCell align="center">
            {airdatas[key] && (
               <>
                  {airdatas[key].pm2_5 > 75
                     ? '매우 나쁨'
                     : airdatas[key].pm2_5 > 35
                     ? '나쁨'
                     : airdatas[key].pm2_5 > 15
                     ? '보통'
                     : '좋음'}
               </>
            )}
         </TableCell>
      </TableRow>
   )
}

export default AirItem
