import React from 'react'

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Navba() {
  return (
    <div>
    {/* <div>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Product">Product</NavLink>
      </div> */}
      <nav  className="main-div">

      <div className="logo">
          <h2><span>S</span>hoaib<span>s</span>oomro  </h2>

          </div>
      <div className="menu-link">
              <ul>
                  <ol>
                      <NavLink to="#">Home</NavLink>
                  </ol>
                  <ol>
                      <NavLink to="/About">About</NavLink>
                  </ol>
                  <ol>
                      <NavLink to="/Contact">Contact</NavLink>
                  </ol>
                  <ol>
                      <NavLink to="/Product">Product</NavLink>
                  </ol>
                
              </ul>
          </div>
          </nav>
    </div>
  )
}

export default Navba

// import React from 'react'
// //import { RiFacebookFill } from 'react-icons/fa';
// import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

// import {GiHamburgerMenu} from 'react-icons/gi'


// function Navba() {
//   return (
//     <div>

//       <nav className="main-div">
//           <div className="logo">
//           <h2><span>S</span>hoaib<span>s</span>oomro  </h2>

//           </div>
//           <div className="menu-link">
//               <ul>
//                   <ol>
//                       <NavLink href="/Home/:id">Home</NavLink>
//                   </ol>
//                   <ol>
//                       <NavLink href="/About">About</NavLink>
//                   </ol>
//                   <ol>
//                       <NavLink href="/Contact">Contact</NavLink>
//                   </ol>
//                   <ol>
//                       <NavLink href="/Product">Product</NavLink>
//                   </ol>
                
//               </ul>
//           </div>
//           <div className="social-media">
//                <ul className="social-media-desktop">
//                    <li>
//                       <NavLink href="#" target="shoaib">
//                       <FaFacebookSquare className="facebook" />
//                       </NavLink>
//                    </li>
//                    <li>
//                       <NavLink href="#" target="shoaib">
//                       <FaInstagramSquare  className="instagram"/>
//                       </NavLink>
//                    </li>
//                    <li>
//                       <NavLink href="#" target="shoaib">
//                       <FaWhatsapp className="whatsapp" />
//                       </NavLink>
//                    </li>
                     
//                </ul>
//                {/* GiHamburgerMenu */}

//                <div className="Hambarger-menu">
//                <NavLink href="#"> 
//                   <GiHamburgerMenu />
//                </NavLink>

//                </div>
//           </div>
//           {/* hero Section start */}

         

//       </nav>
//       <section className="hero-section">
//               <p>Welcom to </p>
//               <h2>Shoaib soomro</h2>
//           </section>
//     </div>
//   )
// }

// export default Navba;

