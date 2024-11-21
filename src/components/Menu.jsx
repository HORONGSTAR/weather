import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">
                     <img src="images/logo.png" alt="우리들의 기상청" width={200} />
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/forecast">일기예보</NavLink>
               </li>
               <li>
                  <NavLink to="/airPollution">미세먼지</NavLink>
               </li>
               <li>
                  <NavLink to="/planetarium">작은 천문관</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
