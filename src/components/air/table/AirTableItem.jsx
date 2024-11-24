import { TableCell, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { airLevels } from '../../../database/InternaLdata'
import AirIcons from '../AirIcons'

function AirTableItem({ itemKey, itemName, page }) {
   const { airdatas } = useSelector((state) => state.local)

   return (
      <>
         {airdatas && (
            <TableRow>
               <TableCell align="center">{itemName}</TableCell>
               <TableCell align="center">
                  {airdatas[itemKey] && (
                     <>
                        {airLevels('pm10', airdatas[itemKey])}&nbsp;
                        <AirIcons level={airLevels('pm10', airdatas[itemKey])} />
                     </>
                  )}
               </TableCell>
               {page && airdatas[itemKey] && <TableCell>{airdatas[itemKey].pm10}</TableCell>}
               <TableCell align="center">
                  {airdatas[itemKey] && (
                     <>
                        {airLevels('pm2_5', airdatas[itemKey])}&nbsp;
                        <AirIcons level={airLevels('pm2_5', airdatas[itemKey])} />
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
