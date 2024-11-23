import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk'
import { airLevels } from '../../../database/InternaLdata'
import TableItem from './TableItem'
import {
   Grid2,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { useSelector } from 'react-redux'

function TableBox({ coords, height, detail, isMap }) {
   const { loading, error, airdatas } = useSelector((state) => state.local)

   if (loading) return <p> Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         {isMap && (
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
               {coords &&
                  coords.map(
                     (coord) =>
                        airdatas[coord[0]] && (
                           <CustomOverlayMap
                              position={{
                                 lat: coord[3],
                                 lng: coord[2],
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
                        )
                  )}
            </Map>
         )}
         {isMap || (
            <TableContainer sx={{ minWidth: '290px', height: height || '300px' }}>
               <Table stickyHeader aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell size="small" align="center">
                           지역
                        </TableCell>
                        <TableCell size="small" align="center" colSpan={detail && 2}>
                           미세먼지 {detail && '/ 농도'}
                        </TableCell>
                        <TableCell size="small" align="center" colSpan={detail && 2}>
                           초미세먼지 {detail && '/ 농도'}
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {coords &&
                        coords.map((coord) => (
                           <TableItem detail={detail} coord={coord[0]} name={coord[1]} />
                        ))}
                  </TableBody>
               </Table>
            </TableContainer>
         )}
      </>
   )
}

export default TableBox
