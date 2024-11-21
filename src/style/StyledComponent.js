import styled from 'styled-components'

export const Wrap = styled.div`
   margin: 0 auto;
   max-width: 1200px;
   overflow: hidden;
`

export const Main = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const WindDeg = styled.div`
   transform: rotate(${(props) => props.$deg || 0}deg);
   margin: 0;
   padding: 0;
   width: 20px;
   height: 20px;
`

export const Text = styled.p`
   font-size: 16px;
   white-space: nowrap;

   ${(props) =>
      props.$media
         ? '@media (max-width: 600px) { letter-spacing: -1px; font-size: 14px;  white-space: normal; word-break: break-all;}'
         : '@media (max-width: 600px) { letter-spacing: -1px; font-size: 14px;  }'}
`

export const UnitSpan = styled.span`
   @media (max-width: 600px) {
      font-size: ${(props) => props.$size || 10}px;
      color: ${(props) => props.$textcolor || 'gray'};
   }
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

export const avatarSx = (size) => [
   {
      width: (size || '40') + 'px',
      height: (size || '40') + 'px',
      marginRight: '5px',
      borderRadius: '20px',
   },
]
