import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { localDatas } from '../../database/InternaLdata'

function AirPollutionMap() {
   return (
      <Map // 지도를 표시할 Container
         center={{ lat: 36.2683, lng: 127.6358 }}
         style={{ maxWidth: '500px', height: '500px' }}
         level={14}
      >
         {localDatas.map((localData) => (
            <CustomOverlayMap
               position={{
                  lat: localData.lat,
                  lng: localData.lon,
               }}
            >
               <div className="label" style={{ width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', color: '#000', backgroundColor: '#fff', borderRadius: '15px' }}>
                  <span>10</span>
               </div>
            </CustomOverlayMap>
         ))}
      </Map>
   )
}

export default AirPollutionMap
