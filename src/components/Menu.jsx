import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li>
                  <NavLink to="/">우리들의 기상청</NavLink>
               </li>
               <li>
                  <NavLink to="/">처음으로</NavLink>
               </li>
               <li>
                  <NavLink to="/weather">일기예보</NavLink>
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
