import { useSelector } from 'react-redux'
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { localDatas, airLevels } from '../../database/InternaLdata'

function MapBox() {
   const { loading, airpoint, error } = useSelector((state) => state.local)
   const datas = localDatas

   if (loading) return <p>...loading</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         {airpoint && (
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
               {datas.map((data) => (
                  <CustomOverlayMap
                     position={{
                        lat: data.lat,
                        lng: data.lon,
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
                              airpoint[`${data.lon}.${data.lat}`].pm10 &&
                              (airpoint[`${data.lon}.${data.lat}`].pm10 > 150
                                 ? 'darkorchid'
                                 : airpoint[`${data.lon}.${data.lat}`].pm10 > 80
                                 ? 'firebrick'
                                 : airpoint[`${data.lon}.${data.lat}`].pm10 > 30
                                 ? 'darkgoldenrod'
                                 : 'forestgreen'),
                        }}
                     >
                        {airLevels('pm10', airpoint[`${data.lon}.${data.lat}`])}
                     </div>
                  </CustomOverlayMap>
               ))}
            </Map>
         )}
      </>
   )
}

export default MapBox
