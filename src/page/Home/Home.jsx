import React from 'react'
import "./Home.scss"
import Nav from '../../components/Nav/Nav'
import { LuChevronLeftCircle , LuChevronRightCircle } from "react-icons/lu";
import AboutUs from '../../components/AboutUs/AboutUs';
import Ourvalues from '../../components/Ourvalues/Ourvalues';
import Ourteam from '../../components/Ourteam/Ourteam';
import Companyblog from '../../components/Companyblog/Companyblog';
import Reg from '../../components/reg/Reg';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
        <Nav/>
        <header>
            <div className="text">
                <div className="icon">
                  <LuChevronLeftCircle />
                  <LuChevronRightCircle className='right'/>
                </div>
                <h1>Хедж-фонд</h1>
                <p>Классический выбор профессиональных инвесторов с заданными умеренными параметрами риска. Основан на инвестировании в бумаги индекса S&P 500 с диверсификацией по 11 секторам экономики.</p>
                <button>Подробнее</button>
            </div>
          <div className="img">
            <img src="" alt="" />
          </div>
        </header>
        <main>
          <AboutUs/>
          <br /><br /><br /><br />
          <hr className='one'/>
          <br /><br /><br /><br />
          <Ourvalues/>
          <br /><br /><br /><br />
          <hr className='two'/>
          <br /><br /><br /><br />
          <Ourteam/>
          <br /><br /><br /><br />
          <hr className='tree'/>
          <br /><br /><br /><br />
          <Companyblog/>
        </main>
        <Reg/>
        <Footer/>
    </>
  )
}

export default Home