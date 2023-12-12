import React from 'react'
import "./Ourvalues.scss"
import { IoDiamondOutline } from "react-icons/io5";
import { PiBagSimpleLight } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";

const Ourvalues = () => {
  return (
    <div className='Ourvalues'>
        <div className="title">
            <h1>Наши ценности <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
        </div>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <IoDiamondOutline className='icons'/>
            </div>
            <div className="text">
              <h2>Стабильность</h2>
              <p>Сохранность капитала клиентов приоритетнее доходности - каждое решение взвешено, обдумано и оценено.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <TbAntennaBars5  className='icons'/>
            </div>
            <div className="text">
              <h2>Устойчивость</h2>
              <p>Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и оценки предоставившихся возможностей для бизнеса до последовательного развития наших проектов и реаллокации капитала в новые возможности.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <PiBagSimpleLight  className='icons'/>
            </div>
            <div className="text">
              <h2>Команда</h2>
              <p>Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHandshake  className='icons'/>
            </div>
            <div className="text">
              <h2>Репутация</h2>
              <p>Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям самых требовательных клиентов.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ourvalues