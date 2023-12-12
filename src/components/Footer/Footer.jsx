import React from 'react'
import "./Footer.scss"
import { FaFacebookF , FaInstagram , FaTwitter  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="top">
            <div className="logo">
                <img src="../../../public/images/logo (1).png" alt="" />
            </div>
            <div className="text">
                <ul>
                <NavLink to={"/aboutus"}><li>О нас</li></NavLink>
                <NavLink to={"/team"}><li>Команда</li></NavLink>
                <NavLink to={"/blog"}><li>Блог</li></NavLink>
                <NavLink to={"/products"}><li>Продукты</li></NavLink>
                <NavLink to={"/contacts"}><li>Контакты</li></NavLink>
                </ul>
                <ul>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="icons">
                <FaFacebookF className='icon2'/>
                <FaInstagram className='icon2'/>
                <FaTwitter  className='icon2'/>
            </div>
        </div>
        <div className="bottom">
            <h2>© 2022 • Fonte • All rights reserved</h2>
            <p>Частная компания «FONTE Capital Ltd.»,  зарегистрированная по адресу: Есильский район, г. Нур-Султан, Мангилик Ел, 55/20, офис 345-346, БИН 220140900035, осуществляет свою деятельность в соответствии с законодательством Международного Финансового центра «Астана» (МФЦА)  имеет право осуществлять регулируемую деятельность по управлению коллективными инвестициями – на основании лицензии № AFSA-A-LA-2022-0004, от 27 января 2022 года на бессрочной основе <br /><br />
            Стоимость инвестиции инвестора в инвестиционный фонд может увеличиваться или уменьшаться. Результаты инвестирования в прошлом не определяют доходы в будущем. Управляющая компания инвестиционного фонда или МФЦА не гарантируют доходности инвестиций. Инвестору необходимо ознакомиться с Уставом (Constitution) и Инвестиционным меморандумом (Offering Memorandum) инвестиционного фонда, его инвестиционной декларацией и определенными рисками перед инвестированием активов в инвестиционный фонд.</p>
        </div>
    </footer>
  )
}

export default Footer