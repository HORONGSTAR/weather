import ForecastItem from './ForecastItem'
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
import { Text } from '../../style/StyledComponent'
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
                                    <Text>시각</Text>
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    <Text>날씨</Text>
                                 </TableCell>
                                 <TableCell align="center" size="small" colSpan={2}>
                                    <Text>온도 / 체감 온도</Text>
                                 </TableCell>
                                 <TableCell align="center" size="small">
                                    <Text>습도</Text>
                                 </TableCell>
                                 <TableCell align="center" size="small" colSpan={2}>
                                    <Text>풍속 / 풍향</Text>
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
