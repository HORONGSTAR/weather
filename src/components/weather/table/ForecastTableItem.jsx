import { TableRow, TableCell, Avatar, Box, Stack } from '@mui/material'
import { weatherKo } from '../../../database/InternaLdata'
import { skycolors, WindDeg, avatarSx, getIcon } from '../../../style/StyledComponent'
import { FaArrowUpLong } from 'react-icons/fa6'

function ForecastItem({ items }) {
   return (
      <TableRow>
         <TableCell align="center">{items.hour}시 경</TableCell>
         <TableCell>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
               <Avatar
                  src={getIcon(items.item.weather[0].icon)}
                  alt={weatherKo[items.item.weather[0].id]}
                  sx={{ ...skycolors, ...avatarSx() }}
               />
               <p>{weatherKo[items.item.weather[0].id]}</p>
            </Stack>
         </TableCell>
         <TableCell align="center">{items.item.main.temp.toFixed(1)}</TableCell>
         <TableCell align="center">{items.item.main.feels_like.toFixed(1)} °C</TableCell>
         <TableCell align="center">{items.item.main.humidity} %</TableCell>
         <TableCell align="center">{items.item.wind.speed.toFixed(1)} m/s</TableCell>
         <TableCell align="center">
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <WindDeg $deg={items.item.wind.deg}>
                  <FaArrowUpLong />
               </WindDeg>
            </Box>
         </TableCell>
      </TableRow>
   )
}

export default ForecastItem
