import styled from 'styled-components'

export const Wrap = styled.div`
   margin: 0 auto;
   max-width: 1200px;
   overflow: hidden;
`

export const WindDeg = styled.div`
   transform: rotate(${(props) => props.$deg || 0}deg);
   margin: 0;
   padding: 0;
   width: 20px;
   height: 20px;
`

export const bannerSx = [
   {
      width: '100%',
      height: '200px',
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
      borderRadius: '2px',
   },
   {
      padding: '10px',
      fontFamily: 'Gamja Flower, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
   },
]

export const sliceItmeSx = [
   {
      minWidth: '145px',
      height: '300px',
      borderRadius: 2,
   },
   {
      height: '150px',
      backgroundColor: 'skyblue',
      display: 'flex',
      alignItems: 'center',
   },
   {
      display: 'flex',
      width: '100%',
      height: '300px',
      alignItems: 'center',
   },
]

export const skycolors = (hour) => [
   {
      bgcolor:
         hour >= 21
            ? 'Thistle'
            : hour >= 18
            ? 'Pink'
            : hour >= 9
            ? 'LightBlue'
            : hour >= 6
            ? 'Wheat'
            : 'Thistle',
   },
]
