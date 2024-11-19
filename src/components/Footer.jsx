import { Box } from '@mui/material'

function Footer() {
   return (
      <footer>
         <Box
            sx={{
               height: '150px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <small>Copyright 2024. 우리들의 기상청. All rights reserved</small>
         </Box>
      </footer>
   )
}

export default Footer
