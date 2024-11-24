import { Box } from '@mui/material'

function Footer() {
   return (
      <footer>
         <Box
            sx={{
               backgroundColor: '#eee',
               height: '80px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               color: '#555',
               fontSize: '12px',
            }}
         >
            Copyright 2024. 우리들의 기상청. All rights reserved
         </Box>
      </footer>
   )
}

export default Footer
