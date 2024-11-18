import AirPollutionList from './AirPollutionList'
import AirPollutionMap from './AirPollutionMap'
import { localDatas } from '../../database/InternaLdata'
import { List, ListItem, Divider } from '@mui/material'

const style = {
   p: 0,
   width: '100%',
   maxWidth: 360,
   borderRadius: 2,
   border: '1px solid',
   borderColor: 'divider',
   backgroundColor: 'background.paper',
}

function AirPollutionBox() {
   return (
      <>
         <List sx={style} aria-label="mailbox folders">
            {localDatas.map((localData) => (
               <>
                  <ListItem>
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
