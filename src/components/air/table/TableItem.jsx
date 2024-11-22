import { TableCell, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import { airLevels } from '../../../database/InternaLdata'
import AirIcons from '../AirIcons'

function TableItem({ coord, name, detail }) {
   const { airdatas } = useSelector((state) => state.local)
   return (
      <>
         {airdatas && (
            <TableRow>
               <TableCell align="center">{name}</TableCell>
               <TableCell align="center">
                  {airdatas[coord] && airLevels('pm10', airdatas[coord])}&nbsp;
                  {airdatas[coord] && <AirIcons level={airLevels('pm10', airdatas[coord])} />}
               </TableCell>
               {detail && airdatas[coord] && <TableCell>{airdatas[coord].pm10}</TableCell>}
               <TableCell align="center">
                  {airdatas[coord] && airLevels('pm2_5', airdatas[coord])}&nbsp;
                  {airdatas[coord] && <AirIcons level={airLevels('pm2_5', airdatas[coord])} />}
               </TableCell>
               {detail && airdatas[coord] && <TableCell>{airdatas[coord].pm2_5}</TableCell>}
            </TableRow>
         )}
      </>
   )
}

export default TableItem
