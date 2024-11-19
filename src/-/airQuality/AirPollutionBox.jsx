import AirPollutionList from './AirPollutionList'
import AirPollutionMap from './AirPollutionMap'
import { localDatas } from '../../database/InternaLdata'
import { List, ListItem, Divider } from '@mui/material'

const listSx = {
   padding: 0,
   width: '100%',
   height: 300,
   borderRadius: 2,
   border: '1px solid',
   borderColor: 'divider',
   backgroundColor: 'background.paper',
   overflow: 'auto',
}

function AirPollutionBox() {
   return (
      <>
         <List sx={listSx} aria-label="mailbox folders">
            {localDatas.map((localData) => (
               <>
                  <ListItem sx={{ paddingY: '2px' }}>
                     <AirPollutionList lat={localData.lat} lon={localData.lon} name={localData.name} />
                  </ListItem>
                  <Divider component="li" />
               </>
            ))}
         </List>
      </>
   )
}

export default AirPollutionBox
