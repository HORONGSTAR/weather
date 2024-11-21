import React, { useState, useDispatch, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { localDatas, airLevels } from '../../database/InternaLdata'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { lavelcolors } from '../../style/StyledComponent'

function MapBox() {
   const { loading, airdatas, error } = useSelector((state) => state.local)
   const [type, setType] = useState('pm10')
   const datas = localDatas

   const handleChange = (e) => {
      setType(e.target.value)
   }

   if (loading) return <p>...loading</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         <Map
            center={{ lat: 36.2683, lng: 127.6358 }}
            style={{ maxWidth: '500px', height: '500px' }}
            level={14}
         >
            {datas.map((data) => (
               <CustomOverlayMap
                  position={{
                     lat: data.lat,
                     lng: data.lon,
                  }}
               >
                  <div
                     className="label"
                     style={{
                        fontSize: '12px',
                        width: '30px',
                        height: '30px',
                        lineHeight: '30px',
                        textAlign: 'center',
                        color: '#fff',
                        borderRadius: '15px',
                        backgroundColor:
                           airdatas[`${data.lon}.${data.lat}`].pm10 > 150
                              ? 'darkorchid'
                              : airdatas[`${data.lon}.${data.lat}`].pm10 > 80
                              ? 'firebrick'
                              : airdatas[`${data.lon}.${data.lat}`].pm10 > 30
                              ? 'darkgoldenrod'
                              : 'forestgreen',
                     }}
                  >
                     {airLevels('pm10', airdatas[`${data.lon}.${data.lat}`])}
                  </div>
               </CustomOverlayMap>
            ))}
         </Map>
         <ToggleButtonGroup
            color="primary"
            value={type}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
         >
            <ToggleButton value={'pm10'}>미세먼지</ToggleButton>
            <ToggleButton value={'pm2_5'}>초미세먼지</ToggleButton>
         </ToggleButtonGroup>
      </>
   )
}

export default MapBox
