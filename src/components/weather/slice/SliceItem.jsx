import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherKo, iconSrc, todays } from '../../../database/InternaLdata'
import { useSelector } from 'react-redux'
import { sliceItmeSx } from '../../../style/StyledComponent'

function SliceItem({ coord, name }) {
   const { loading, weathers, error } = useSelector((state) => state.local)
   if (loading) return <p>Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         {weathers[coord] && (
            <Card variant="outlined" sx={sliceItmeSx[0]}>
               <div className="gradation">
                  <Box sx={sliceItmeSx[1].con}>
                     <CardMedia
                        component="img"
                        image={
                           weathers[coord].weather[0]
                              ? iconSrc[0] +
                                (17 > todays.hour && todays.hour > 5
                                   ? weathers[coord].weather[0].icon.replace('n', 'd')
                                   : weathers[coord].weather[0].icon.replace('d', 'n')) +
                                iconSrc[1]
                              : iconSrc[3]
                        }
                        alt={weatherKo[weathers[coord].weather[0].id]}
                     />
                  </Box>
               </div>
               <CardContent>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="h6">{weatherKo[weathers[coord].weather[0].id]}</Typography>
                  <Typography variant="body2">
                     현재 온도 {weathers[coord].main.temp.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2">
                     체감 온도 {weathers[coord].main.feels_like.toFixed(1)}°C
                  </Typography>
               </CardContent>
            </Card>
         )}
      </>
   )
}

export default SliceItem
