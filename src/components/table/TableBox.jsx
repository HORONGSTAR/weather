import { localDatas } from '../../database/InternaLdata'
import TableItem from './TableItem'
import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'

function TableBox() {
   return (
      <Card variant="outlined">
         <TableContainer sx={{ minWidth: '290px', height: '300px' }}>
            <Table stickyHeader aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell size="small" align="center">
                        지역
                     </TableCell>
                     <TableCell size="small" align="center">
                        미세먼지
                     </TableCell>
                     <TableCell size="small" align="center">
                        초미세먼지
                     </TableCell>
                  </TableRow>
               </TableHead>

               <TableBody>
                  {localDatas.map((localData) => (
                     <TableItem lat={localData.lat} lon={localData.lon} name={localData.name} />
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Card>
   )
}

export default TableBox
