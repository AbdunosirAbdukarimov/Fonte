import React from 'react'
import "./AboutUs.scss"
import { IoDocumentTextOutline } from "react-icons/io5";

function AboutUs() {
  return (
    <>
        <div className="title">
            <h1>О нас <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
        </div>
        <div className="mainhead">
            <div className="img">
                <img src="./images/image 18.png" alt="" />
            </div>
            <div className="text">
            <p>Наша Команда успешно осуществляет деятельность на нескольких рынках инвестиций. Богатство выбора инструментов этих рынков позволяет Нам успешно сохранять и преумножать капитал клиентов. <br /><br />
            Вступить в партнерство с Fonte могут как профессиональные инвестора, так и частные лица, только начинающие открывать для себя новые перспективы. Наша юрисдикция - Международный финансовый центр «Астана» (МФЦА). Комфортные налоговые условия и регуляторные политики обеспечивают необходимые свободы и преимущества для достижения целей инвестиций. <br /><br />
            В партнерстве с Fonte Capital LTD, инвесторы имеют возможность воспользоваться не только проверенными стратегиями, но и смогут совместно разработать персональные инвестиционные решения. <br /><br />
            </p>
            <button><span className='icon'><IoDocumentTextOutline /></span> Лицензии</button>
            </div>
        </div>
    </>
  )
}

export default AboutUs