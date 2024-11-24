import { NavLink } from 'react-router-dom'
import { Logo } from '../style/StyledComponent'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">
                     <Logo />
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/"> 처음으로</NavLink>
               </li>
               <li>
                  <NavLink to="/forecast">일기예보</NavLink>
               </li>
               <li>
                  <NavLink to="/airPollution">미세먼지</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
