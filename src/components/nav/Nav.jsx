import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
const Nav = () => {
   const [activeNAV, setactiveNAV] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>{setactiveNAV('#')}} className={activeNAV === "#" ? "active" : ""}>
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => {
          setactiveNAV("#about");
        }}
        className={activeNAV === "#about" ? "active" : ""}
      >
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => {
          setactiveNAV("#experience");
        }}
        className={activeNAV === "#experience" ? "active" : ""}
      >
        <BiBook />{" "}
      </a>
      <a
        href="#services"
        onClick={() => {
          setactiveNAV("#services");
        }}
        className={activeNAV === "#services" ? "active" : ""}
      >
        <RiServiceLine />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => {
          setactiveNAV("#contact");
        }}
        className={activeNAV === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />{" "}
      </a>
    </nav>
  );
}

export default Nav
