import ForecastItem from './ForecastItem'
import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { TabPanel } from '@mui/lab'

function ForecastTable({ itemList }) {
   return (
      <>
         {itemList &&
            itemList.keys.map((key) => (
               <TabPanel value={key}>
                  <Card variant="outlined">
                     <TableContainer>
                        <Table aria-label="simple table">
                           <TableHead>
                              <TableRow>
                                 <TableCell align="center" size="small">
                                    시각
                                 </TableCell>
                                 <TableCell align="center" colSpan={2} size="small">
                                    날씨
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    온도
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    체감 온도
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    습도
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    풍속
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    풍향
                                 </TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {itemList[key].map((items) => (
                                 <ForecastItem items={items} />
                              ))}
                           </TableBody>
                        </Table>
                     </TableContainer>
                  </Card>
               </TabPanel>
            ))}
      </>
   )
}

export default ForecastTable
