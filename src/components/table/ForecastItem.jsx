import { TableRow, TableCell, Avatar, Box, Typography } from '@mui/material'
import { weatherKo, iconSrc } from '../../database/InternaLdata'
import { skycolors, WindDeg } from '../../style/StyledComponent'

import { FaArrowUpLong } from 'react-icons/fa6'

function ForecastItem({ items }) {
   return (
      <TableRow>
         <TableCell align="center">{items.hour}시</TableCell>
         <TableCell colSpan={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Avatar
                  src={
                     items.item.weather[0]
                        ? iconSrc[0] +
                          (18 >= items.hour && items.hour >= 6
                             ? items.item.weather[0].icon.replace('n', 'd')
                             : items.item.weather[0].icon.replace('d', 'n')) +
                          iconSrc[1]
                        : iconSrc[3]
                  }
                  alt={weatherKo[items.item.weather[0].id]}
                  sx={skycolors(items.hour)}
               />
               <Typography>&nbsp;&nbsp;{weatherKo[items.item.weather[0].id]}</Typography>
            </Box>
         </TableCell>
         <TableCell align="center">{items.item.main.temp.toFixed(1)}°C</TableCell>
         <TableCell align="center">{items.item.main.feels_like.toFixed(1)}°C</TableCell>
         <TableCell align="center">{items.item.main.humidity}%</TableCell>
         <TableCell align="center">{items.item.wind.speed}m/s</TableCell>
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
