"use client";
import React, { useState } from "react";
import "../Styles/navbar.css";
import { navItems } from "./Navlist";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from "next/link";



const Nav = ({navigate,setNavigate}) => {

  const [clicked, setClicked] = useState("hidden")
  const [active, setActive] = useState(' ')

  const handleClick = ()=> {
    if(clicked === "hidden"){
   
      setClicked(" ")
      setActive("active")
  
     
    }
   else{
    setClicked("hidden")
    setActive(" ")
   }
  }


  return (
    <div className="container-warp">
      <a className={`sidebar ${active}`}  onClick={handleClick}>
        <span>

        </span>
      </a>
      {/* <div className="sidebar-close" onClick={handleClick}>
        <CloseIcon fontSize="large"/>
      </div> */}
      <aside className={`colab-aside  ${clicked}`}>
        <div className="text-center">
          <div className="author-img"></div>
          <h1 id="logo-text">
            <a id="logo-text" href="#">
              Shivam Singh
            </a>
          </h1>
          <span className="position">
            <a href="#">Web Devoloper</a> {"in India"}{" "}
          </span>
        </div>
        <nav className="navbar" role="navigation">
          <div id="navbar" aria-expanded="false">
            <ul>
              {navItems.map((items) => {
                return items.path === navigate ? (
                  <li className="active" key={items.id} onClick={handleClick}>
                    <a
                      href={items.path}
                      onClick={() => setNavigate(items.path)}
                    >
                      {items.title}
                    </a>
                  </li>
                ) : (
                  <li  key={items.id} onClick={handleClick}>
                    <a
                      href={items.path}
                      onClick={() => setNavigate(items.path)}
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav-footer">
            <p className="footer">
              <small>
                {"© Copyright ©"}
                {"2023 All rights reserved |"}
              </small>
            </p>
            <div className="social-links">
              
               <a href="" className="insta"><InstagramIcon/></a>
               <a href="" className="twitter"> <TwitterIcon/> </a>
               <a href="" className="linkedIn"> <LinkedInIcon/> </a>
               <a href="" className="telegram">  <TelegramIcon/> </a>
              
             
            
            </div>
          </div>
      
        </nav>
      </aside>
    </div>
  );
};

export default Nav;
