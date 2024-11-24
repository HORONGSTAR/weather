import AirTableItem from './AirTableItem'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

function AirTable({ height }) {
   const { items } = useSelector((state) => state.item)
   const { loading, error } = useSelector((state) => state.local)
   const page = useLocation().pathname === '/airPollution' ? true : false

   if (loading) return <p> Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         <Card>
            <TableContainer sx={{ minWidth: '290px', height: height || '300px' }}>
               <Table stickyHeader aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell size="small" align="center">
                           지역
                        </TableCell>
                        <TableCell size="small" align="center" colSpan={page && 2}>
                           미세먼지 {page && '/ 농도'}
                        </TableCell>

                        <TableCell size="small" align="center" colSpan={page && 2}>
                           초미세먼지 {page && '/ 농도'}
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {items &&
                        items.map((item) => (
                           <AirTableItem
                              key={'AirTableItem/' + item.key}
                              page={page}
                              itemKey={item.key}
                              itemName={item.name}
                           />
                        ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Card>
         <p style={{ textAlign: 'right', color: '#888' }}>농도 단위 : ㎍/m³</p>
      </>
   )
}

export default AirTable
