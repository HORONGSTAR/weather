import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoord } from '../../features/coordSlice'
import { Select, InputLabel, MenuItem, FormControl, Stack, Grid2 } from '@mui/material'
import { cityDatas, address, labelId } from '../../database/InternaLdata'
import WeatherBox from './WeatherBox'
import ForecastTap from './tap/ForecastTap'

function CitySelect() {
   const dispatch = useDispatch()
   const [cityValue, setcityValue] = useState('')
   const [itemValue, setitemValue] = useState(null)
   const { loading, error } = useSelector((state) => state.coord)

   const ChangeCity = (e) => setcityValue(e.target.value)
   const ChangeItem = (e) => setitemValue(e.target.value)

   useEffect(() => {
      if (itemValue) dispatch(fetchCoord({ query: itemValue }))
   }, [dispatch, itemValue])

   return (
      <Grid2 container>
         <Stack spacing={3} direction="row" padding="20px 0">
            <FormControl sx={{ width: '300px' }}>
               <InputLabel id={labelId}>어느 지역의 날씨를 볼까요?</InputLabel>
               <Select
                  labelId={labelId}
                  value={cityValue}
                  onChange={ChangeCity}
                  label="어느 지역의 날씨를 볼까요?"
               >
                  {cityDatas.map((cityData) => (
                     <MenuItem key={cityData.value} value={cityData.value}>
                        {cityData.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            {cityValue && (
               <FormControl sx={{ width: '300px' }}>
                  <InputLabel id={labelId}>우리 동네를 골라보아요!</InputLabel>
                  <Select
                     labelId={labelId}
                     value={itemValue}
                     onChange={ChangeItem}
                     label="우리 동네를 골라보아요!"
                  >
                     {address[cityValue].map((item) => (
                        <MenuItem key={cityDatas.name + item} value={item}>
                           {item}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
            )}

            {loading && <p>정보를 찾아오는 중...</p>}
            {error && <p>문제가 생겼어요! {error}</p>}
         </Stack>
         {itemValue && (
            <>
               <WeatherBox />
               <ForecastTap />
            </>
         )}
      </Grid2>
   )
}

export default CitySelect
