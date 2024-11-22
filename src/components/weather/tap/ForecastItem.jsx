import { TableRow, TableCell, Avatar, Box, Stack } from '@mui/material'
import { weatherKo, iconSrc } from '../../../database/InternaLdata'
import { skycolors, WindDeg, Text, avatarSx, UnitSpan } from '../../../style/StyledComponent'
import { FaArrowUpLong } from 'react-icons/fa6'

function ForecastItem({ items }) {
   return (
      <TableRow>
         <TableCell align="center">
            <Text>
               {items.hour}
               <UnitSpan>시 경</UnitSpan>
            </Text>
         </TableCell>
         <TableCell>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
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
                  sx={skycolors(items.hour).concat(avatarSx)}
               />
               <Text $media={true}>{weatherKo[items.item.weather[0].id]}</Text>
            </Stack>
         </TableCell>
         <TableCell align="center">
            <Text>
               {items.item.main.temp.toFixed(1)} <UnitSpan>°C</UnitSpan>
            </Text>
         </TableCell>
         <TableCell align="center">
            <Text>
               {items.item.main.feels_like.toFixed(1)} <UnitSpan>°C</UnitSpan>
            </Text>
         </TableCell>
         <TableCell align="center">
            <Text>
               {items.item.main.humidity} <UnitSpan>%</UnitSpan>
            </Text>
         </TableCell>
         <TableCell align="center">
            <Text>
               {items.item.wind.speed.toFixed(1)} <UnitSpan>m/s</UnitSpan>
            </Text>
         </TableCell>
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
