import CitySelect from '../components/weather/select/CitySelect'
import SubTitle from '../style/StyledComponent'

function Forecast() {
   return (
      <>
         <SubTitle>지역 별로 날씨를 찾아볼 수 있어요!</SubTitle>
         <CitySelect />
      </>
   )
}

export default Forecast
