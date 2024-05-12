import React, { useEffect, useState } from 'react'
import './style.scss'
import { HiOutlineSearch } from "react-icons/hi"; // search icon lense
import { SlMenu } from "react-icons/sl";          //hamburger menu
import { VscChromeClose } from "react-icons/vsc"  // 'x' menu to remove the search or anything
import { useNavigate, useLocation } from 'react-router-dom';

import ContantWrapper from '../contentWrapper/ContantWrapper';
import logo from '../../assets/movix-logo.svg'



const Header = () => {

  const [show, setShow] = useState('top');              // state for 'show' 'hide' navbar by default 'show'
  const [lastScrollY, setLastScrollY] = useState(0);    // this state is used for keep the scroll ammount
  const [mobileMenu, setMobileMenu] = useState(false);  //to set the mobile menu
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const navigate = useNavigate();
  const loaction = useLocation();

  const openSearch = () => {
    // seachbox open 
    setMobileMenu(false);
    setShowSearch(true);

  }

  const openMobileMenu = () => {
    // mobile menu open

    setMobileMenu(true);
    setShowSearch(false);

  }


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  const navigationHandler=(type)=>{
    if(type==="movie"){
      navigate('/explore/movie')
    }else{
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }

  // create controlNavbar

  const controlNavbar =()=>{
    if(window.scrollY>200 && !mobileMenu) {
      if(window.scrollY>lastScrollY){
        setShow('hide')
      }else{
        setShow('show')
      }
    }else{
      setShow('top')
    }
    setLastScrollY(window.scrollY)
  }

useEffect(()=>{
  window.addEventListener('scroll',controlNavbar)
  return(
    ()=>{
      window.removeEventListener('scroll',controlNavbar)
    }
  )
},[lastScrollY])


// uselocation

useEffect(()=>{
  //in any another page we should direct at top 
window.scrollTo(0,0);
},[loaction])

  return (

    <header className={`header ${mobileMenu ? 'mobileView' : ""} ${show}`}>

      <ContantWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* 
            ul.menuItmes>li.menuItmes*3
            use this shortcut
            */}
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>{navigationHandler("movie")}}>Movies</li>
          <li className="menuItem" onClick={()=>{navigationHandler("tv")}}>TV Show</li>
          <li className="menuItem">

            <HiOutlineSearch onClick={openSearch} />

          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {
            mobileMenu ?
              <VscChromeClose onClick={() => setMobileMenu(false)} />
              :
              <SlMenu onClick={openMobileMenu} />
          }
        </div>
      </ContantWrapper>
      {/* make search area */}
      {showSearch &&
        <div className="searchBar">
          <ContantWrapper>

            <div className="searchInput">
              <input type="text" placeholder='Serarch for a movie or a tv show....'

                onChange={(e) => setQuery(e.target.value)}

                onKeyUp={searchQueryHandler}
              />
              {/* add close icon to close the seacrh bar */}
              <VscChromeClose onClick={() => {
                setShowSearch(false)
              }} />
            </div>
          </ContantWrapper>
        </div>
      }
    </header>

  )
}

export default Header




/* if mobile menu satae is true then show all the icon
*/
