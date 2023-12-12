import React from 'react'
import "./Nav.scss" 
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {


  const [show , setShow] = useState(false);


  return (
    <>
        <nav>
            <Link to={"/"} ><img src="./images/logo.png"/></Link>
            <ul>
              <NavLink to={"/aboutus"}><li>О нас</li></NavLink>
              <NavLink to={"/team"}><li>Команда</li></NavLink>
              <NavLink to={"/blog"}><li>Блог</li></NavLink>
              <NavLink to={"/products"}><li>Продукты</li></NavLink>
              <NavLink to={"/contacts"}><li>Контакты</li></NavLink>
            </ul>
            <div className="button">
                <button>Войти</button>
                <span>Рус</span>
            </div>
            <FaBars className='bars' onClick={() => setShow(!show)}/>
        </nav>
        <div className={show?"barsbox show":"barsbox"}>
          <ul>
              <NavLink to={"/aboutus"}><li>О нас</li></NavLink>
              <NavLink to={"/team"}><li>Команда</li></NavLink>
              <NavLink to={"/blog"}><li>Блог</li></NavLink>
              <NavLink to={"/products"}><li>Продукты</li></NavLink>
              <NavLink to={"/contacts"}><li>Контакты</li></NavLink>
          </ul>
          <div className="button">
            <button>Войти</button>
            <span>Русский</span>
          </div>
        </div>
    </>
  )
}

export default Nav