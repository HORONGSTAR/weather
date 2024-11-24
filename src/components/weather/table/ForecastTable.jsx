import ForecastItem from './ForecastTableItem'
import {
   Card,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material'
import { TabPanel } from '@mui/lab'

function ForecastTable({ itemList }) {
   return (
      <>
         {itemList &&
            itemList.keys.map((key) => (
               <TabPanel value={key} sx={{ padding: '0' }}>
                  <Typography variant="body2" align="right" color="gray">
                     {key.split('-')[0]}년 {key.split('-')[1]}월 {key.split('-')[2]}일&nbsp;
                  </Typography>
                  <Card variant="outlined">
                     <TableContainer>
                        <Table aria-label="simple table">
                           <TableHead>
                              <TableRow>
                                 <TableCell align="center" size="small">
                                    시각
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    날씨
                                 </TableCell>
                                 <TableCell align="center" size="small" colSpan={2}>
                                    온도 / 체감 온도
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    습도
                                 </TableCell>
                                 <TableCell align="center" size="small" colSpan={2}>
                                    풍속 / 풍향
                                 </TableCell>
                              </TableRow>
                           </TableHead>
                           <TableBody>
                              {itemList[key].map((items) => (
                                 <ForecastItem
                                    items={items}
                                    key={key + 'ForecastItem' + items.hour}
                                 />
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
