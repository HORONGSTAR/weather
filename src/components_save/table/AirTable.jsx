import { localDatas } from '../../database/InternaLdata'
import AirItem from './AirItem'
import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

function AirTable({ height, detail }) {
   return (
      <Card variant="outlined">
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
                  {localDatas.map((localData) => (
                     <>
                        {localData.key}
                        <AirItem
                           lat={localData.lat}
                           lon={localData.lon}
                           name={localData.name}
                           detail={detail}
                           key={localData.key}
                        />
                     </>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Card>
   )
}

export default AirTable
