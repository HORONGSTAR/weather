import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">
                     <h4>우리들의 기상청</h4>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">
                     <NavLink to="/weather">일기예보</NavLink>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">
                     <NavLink to="/airPollution">미세먼지</NavLink>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/">
                     <NavLink to="/planetarium">작은 천문관</NavLink>
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
