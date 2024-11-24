import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoord } from '../../../features/coordSlice'
import { Select, InputLabel, MenuItem, FormControl, Stack } from '@mui/material'
import { cityDatas, address } from '../../../database/InternaLdata'
import WeatherBox from '../box/WeatherBox'
import ForecastTap from '../tap/ForecastTap'

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
      <>
         <Stack spacing={3} direction="row" padding="20px 0">
            <FormControl sx={{ width: '300px' }}>
               <InputLabel id="demo-simple-select-helper-label">
                  어느 지역의 날씨를 살펴볼까요?
               </InputLabel>
               <Select
                  labelId="demo-simple-select-helper-label"
                  value={cityValue}
                  onChange={ChangeCity}
                  label="어느 지역의 날씨를 살펴 볼까요?"
               >
                  {cityDatas.map((cityData) => (
                     <MenuItem key={cityData.value} value={cityData.value}>
                        {cityData.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            {
               <FormControl sx={{ width: '300px' }}>
                  <InputLabel id="demo-simple-select-helper-label">
                     우리 동네를 골라보아요!
                  </InputLabel>
                  <Select
                     labelId="demo-simple-select-helper-label"
                     value={cityValue && itemValue}
                     onChange={ChangeItem}
                     label="우리 동네를 골라보아요!"
                  >
                     {cityValue ? (
                        address[cityValue].map((item) => (
                           <MenuItem key={cityDatas.name + item} value={item}>
                              {item}
                           </MenuItem>
                        ))
                     ) : (
                        <MenuItem>지역을 먼저 선택해주세요~</MenuItem>
                     )}
                  </Select>
               </FormControl>
            }
         </Stack>
         {loading && <p>정보를 찾아오는 중...</p>}
         {error && <p>문제가 생겼어요! {error}</p>}
         {itemValue ? (
            <>
               <WeatherBox />
               <ForecastTap />
            </>
         ) : (
            <Stack spacing={1} padding="40px 0">
               <img src="images/marketing.png" alt="지역 선택 결과 창" width="200" />
               <p style={{ color: '#888' }}>날씨 정보가 표시될 영역이에요!</p>
               <p style={{ color: '#888' }}>
                  선택한 지역의 [오늘 날씨]와 앞으로 [5일간 날씨]를 알 수 있어요.
               </p>
            </Stack>
         )}
      </>
   )
}

export default CitySelect
