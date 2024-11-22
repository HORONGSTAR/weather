import { FaRegFaceSmile, FaRegFaceMeh, FaRegFaceFrown, FaRegFaceDizzy } from 'react-icons/fa6'

function AirIcons({ level }) {
   return (
      <>
         {level === '매우 나쁨' && <FaRegFaceDizzy style={{ fill: 'darkorchid' }} />}
         {level === '나쁨' && <FaRegFaceFrown style={{ fill: 'firebrick' }} />}
         {level === '보통' && <FaRegFaceMeh style={{ fill: 'darkgoldenrod' }} />}
         {level === '좋음' && <FaRegFaceSmile style={{ fill: 'forestgreen' }} />}
      </>
   )
}

export default AirIcons
