import { useSelector } from 'react-redux'
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { airLevels } from '../../database/InternaLdata'

function MapBox({ coords }) {
   const { loading, airdatas, error } = useSelector((state) => state.local)

   if (loading) return <p>...loading</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         {airdatas && coords && (
            <Map
               center={{ lat: 36.2683, lng: 127.6358 }}
               style={{
                  maxWidth: '500px',
                  height: '500px',
                  border: '8px solid #fff',
                  borderRadius: '5px',
                  boxShadow: '1px 1px 5px #ddd',
               }}
               level={14}
            >
               {coords.map((coord) => (
                  <CustomOverlayMap
                     position={{
                        lat: coord[2],
                        lng: coord[3],
                     }}
                  >
                     <div
                        style={{
                           fontSize: '12px',
                           width: '30px',
                           height: '30px',
                           lineHeight: '30px',
                           textAlign: 'center',
                           color: '#fff',
                           borderRadius: '15px',
                           backgroundColor:
                              airdatas[coord[0]].pm10 &&
                              (airdatas[coord[0]].pm10 > 150
                                 ? 'darkorchid'
                                 : airdatas[coord[0]].pm10 > 80
                                 ? 'firebrick'
                                 : airdatas[coord[0]].pm10 > 30
                                 ? 'darkgoldenrod'
                                 : 'forestgreen'),
                        }}
                     >
                        {airLevels('pm10', airdatas[coord[0]])}
                     </div>
                  </CustomOverlayMap>
               ))}
            </Map>
         )}
      </>
   )
}

export default MapBox
