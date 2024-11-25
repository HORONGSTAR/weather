import React, { useState, useMemo } from 'react'

import { TableCell, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import AirIcons from '../AirIcons'

function AirTableItem({ itemKey, itemName, page }) {
   const { airdatas } = useSelector((state) => state.local)
   const [lvType1, setlvType1] = useState(null)
   const [lvType2, setlvType2] = useState(null)

   useMemo(() => {
      const airLv = ['좋음', '보통', '나쁨', '매우 나쁨']
      if (!airdatas[itemKey]) return
      const pm10 = airdatas[itemKey].pm10
      const pm2_5 = airdatas[itemKey].pm2_5
      const result1 = pm10 > 150 ? airLv[3] : pm10 > 80 ? airLv[2] : pm10 > 30 ? airLv[1] : airLv[0]
      const result2 =
         pm2_5 > 75 ? airLv[3] : pm2_5 > 35 ? airLv[2] : pm2_5 > 15 ? airLv[1] : airLv[0]
      setlvType1(result1)
      setlvType2(result2)
   }, [airdatas, itemKey, setlvType1, setlvType2])

   return (
      <>
         {airdatas && (
            <TableRow>
               <TableCell align="center">{itemName}</TableCell>
               <TableCell align="center">
                  {airdatas[itemKey] && (
                     <>
                        {lvType1} &nbsp;
                        <AirIcons level={lvType1} />
                     </>
                  )}
               </TableCell>
               {page && airdatas[itemKey] && <TableCell>{airdatas[itemKey].pm10}</TableCell>}
               <TableCell align="center">
                  {airdatas[itemKey] && (
                     <>
                        {lvType2}&nbsp;
                        <AirIcons level={lvType2} />
                     </>
                  )}
               </TableCell>
               {page && airdatas[itemKey] && <TableCell>{airdatas[itemKey].pm2_5}</TableCell>}
            </TableRow>
         )}
      </>
   )
}

export default AirTableItem
