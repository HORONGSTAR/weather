import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoord } from '../../features/coordSlice'
import { Select, InputLabel, MenuItem, FormControl, Box } from '@mui/material'
import { cityDatas, address } from '../../database/InternaLdata'

function CitySelect({ page }) {
   const dispatch = useDispatch()
   const [cityValue, setcityValue] = useState('')
   const [itemValue, setitemValue] = useState(null)
   const { loading, error } = useSelector((state) => state.coord)

   const ChangeCity = (e) => setcityValue(e.target.value)
   const ChangeItem = (e) => setitemValue(e.target.value)

   useEffect(() => {
      if (itemValue) dispatch(fetchCoord({ query: itemValue }))
   }, [dispatch, itemValue, page])

   const labelId = 'demo-simple-select-helper-label'

   return (
      <Box padding={'20px'}>
         <FormControl sx={{ m: 1, width: 300 }}>
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
            <FormControl sx={{ m: 1, width: 300 }}>
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
      </Box>
   )
}

export default CitySelect
