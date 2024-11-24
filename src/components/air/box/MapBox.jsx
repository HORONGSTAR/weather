import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { airLevels } from '../../../database/InternaLdata'
import { Card } from '@mui/material'
import { useSelector } from 'react-redux'
import { airMapStlye, airLevelColor } from '../../../style/StyledComponent'

function MapBox() {
   const { loading, error, airdatas } = useSelector((state) => state.local)
   const { items } = useSelector((state) => state.item)

   if (loading) return <p> Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <Card sx={{ maxWidth: '500px' }}>
         <Map
            center={{ lat: 36.2683, lng: 127.6358 }}
            style={{
               margin: '0 auto',
               height: '550px',
               border: '9px solid #fff',
               borderRadius: '5px',
            }}
            level={14}
         >
            {items &&
               items.map(
                  (item) =>
                     airdatas[item.key] && (
                        <CustomOverlayMap
                           position={{
                              lng: item.key.split('/')[0],
                              lat: item.key.split('/')[1],
                           }}
                        >
                           <div
                              style={{
                                 ...airMapStlye,
                                 backgroundColor: airLevelColor('pm10', airdatas[item.key]),
                              }}
                           >
                              {airLevels('pm10', airdatas[item.key])}
                           </div>
                        </CustomOverlayMap>
                     )
               )}
         </Map>
      </Card>
   )
}

export default MapBox
