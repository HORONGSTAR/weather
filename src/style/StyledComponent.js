import styled from 'styled-components'
import { todays } from '../database/InternaLdata'
import { PiStarFourFill } from 'react-icons/pi'

const sunrise = 3
const sunset = 18

export default function SubTitle({ children }) {
   return (
      <h3 style={{ fontSize: '18px', margin: '30px 0', color: '#002855' }}>
         <PiStarFourFill style={{ fontSize: '12px', marginRight: '5px', fill: '#245E84' }} />
         {children}
      </h3>
   )
}

export const airMapStlye = (data) => ({
   fontSize: '12px',
   width: '30px',
   height: '30px',
   lineHeight: '30px',
   textAlign: 'center',
   color: '#fff',
   borderRadius: '15px',
   backgroundColor:
      data > 150
         ? 'darkorchid'
         : data > 80
         ? 'firebrick'
         : data > 30
         ? 'darkgoldenrod'
         : 'forestgreen',
})

export const Logo = styled.img.attrs({
   src: 'images/logo.png',
   alt: '우리들의 기상청',
})`
   width: 200px;
   @media (max-width: 500px) {
      width: 120px;
   }
`
export const getIcon = (icon) => {
   return icon
      ? 'https://openweathermap.org/img/wn/' +
           (sunset > todays.hour && todays.hour > sunrise
              ? icon.replace('n', 'd')
              : icon.replace('d', 'n')) +
           '@4x.png'
      : './images/empty_square.png'
}

export const WindDeg = styled.div`
   transform: rotate(${(props) => props.$deg || 0}deg);
   margin: 0;
   padding: 0;
   width: 20px;
   height: 20px;
`

export const skycolors = {
   bgcolor: sunset > todays.hour && todays.hour > sunrise ? '#7ed2e7' : '#588992',
}

export const avatarSx = (size) => [
   {
      width: size || '40px',
      height: size || '40px',
      borderRadius: '20px',
   },
]

export const BannerImg = styled.div`
   background-image: url(images/${sunset > todays.hour && todays.hour > sunrise
      ? 'sky_day.jpg'
      : 'sky_night.jpg'});
   background-size: cover;
   background-position: bottom;
   border-radius: 10px;
`

export const bannerSx = (fontSize) => [
   {
      width: '100%',
      height: '330px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0',
   },
   {
      padding: '10px',
      fontFamily: 'HakgyoansimBunpilR, sans-serif !important',
      fontSize: fontSize || '30px',
      color: 'white',
      textShadow: '0px 1px 3px #000',
      letterSpacing: '1px',
   },
]

export const sliceItmeSx = {
   minWidth: '120px',
   height: '300px',
   borderRadius: 2,
   margin: '2px',
}
