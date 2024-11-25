import { Card, CardContent, CardMedia } from '@mui/material'
import { weatherKo } from '../../../database/InternaLdata'
import { useSelector } from 'react-redux'
import { sliceItmeSx, skycolors, getIcon } from '../../../style/StyledComponent'

function WeatherSliceItem({ itemKey, itemName }) {
   const { loading, weathers, error } = useSelector((state) => state.local)
   if (loading) return <p> 정보를 찾아오는 중...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>
   return (
      <>
         {weathers[itemKey] && (
            <Card sx={sliceItmeSx}>
               <CardContent>
                  <CardMedia
                     component="img"
                     className="gradation"
                     sx={{ ...skycolors, height: '120px', borderRadius: '5px' }}
                     image={getIcon(weathers[itemKey].weather[0].icon)}
                     alt={weatherKo[weathers[itemKey].weather[0].id]}
                  />
               </CardContent>
               <CardContent>
                  <small>{itemName}</small>
                  <h4>{weatherKo[weathers[itemKey].weather[0].id]}</h4>
                  <p>현재 온도 {weathers[itemKey].main.temp.toFixed(1)}°C</p>
                  <p>체감 온도 {weathers[itemKey].main.feels_like.toFixed(1)}°C</p>
               </CardContent>
            </Card>
         )}
      </>
   )
}

export default WeatherSliceItem
