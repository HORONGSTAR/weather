import { TableCell, TableRow, LinearProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalAir } from '../../features/localSlice'
import { airLevels } from '../../database/InternaLdata'
import AirIcons from '../details/AirIcons'

function AirItem({ lat, lon, name, detail }) {
   const dispatch = useDispatch()
   const { loading, airdatas, error } = useSelector((state) => state.local)
   const key = lon + '.' + lat

   useEffect(() => {
      dispatch(fetchLocalAir({ lon, lat }))
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
      <>
         {airdatas && (
            <TableRow>
               <TableCell align="center">{name}</TableCell>
               <TableCell align="center">
                  {airdatas[key] && airLevels('pm10', airdatas[key])}&nbsp;
                  {airdatas[key] && <AirIcons level={airLevels('pm10', airdatas[key])} />}
               </TableCell>
               {detail && airdatas[key] && <TableCell>{airdatas[key].pm10}</TableCell>}
               <TableCell align="center">
                  {airdatas[key] && airLevels('pm2_5', airdatas[key])}&nbsp;
                  {airdatas[key] && <AirIcons level={airLevels('pm2_5', airdatas[key])} />}
               </TableCell>
               {detail && airdatas[key] && <TableCell>{airdatas[key].pm2_5}</TableCell>}
            </TableRow>
         )}
      </>
   )
}

export default AirItem
