import TableItem from './TableItem'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'

function TableBox({ coords, height, detail }) {
   const { loading, error } = useSelector((state) => state.local)

   if (loading) return <p> Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
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
   )
}

export default TableBox
