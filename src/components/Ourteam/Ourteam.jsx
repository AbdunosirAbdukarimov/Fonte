import React from 'react'
import "./Ourteam.scss"

const Ourteam = () => {
  return (
    <div className='Ourteam'>
        <div className="title">
            <h1>Наша команда<img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>     
            <p>Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании – это ценный актив в рабочем процессе фонда. Наша цель – создание такой рабочей атмосферы и условий, которые позволят максимально раскрыть потенциал каждого сотрудника для достижения максимального результата.</p>       
        </div>
        <div className="boxes">
          <div className="box">
            <img src="../../../public/images/1.png" alt="" />
            <h4>Ержан Мусин  </h4>
              <span>CEO</span>
          </div>
          <div className="box">
            <img src="../../../public/images/1 (1).png" alt="" />
            <h4>Олжас Укенов</h4>
              <span>CFO</span>
          </div>
          <div className="box">
            <img src="../../../public/images/1.png" alt="" />
            <h4>Ержан Мусин  </h4>
              <span>CEO</span>
          </div>
          <div className="box">
            <img src="../../../public/images/1 (1).png" alt="" />
            <h4>Олжас Укенов</h4>
              <span>CFO</span>
          </div>
          <div className="box">
            <img src="../../../public/images/1.png" alt="" />
            <h4>Ержан Мусин  </h4>
              <span>CEO</span>
          </div>
          <div className="box">
            <img src="../../../public/images/1 (1).png" alt="" />
            <h4>Олжас Укенов</h4>
              <span>CFO</span>
          </div>
        </div>
        <div className="title2">
            <h1>Сторонники и Партнеры<img src="../../../public/images/Vector.png" alt="" className='vector'/></h1> 
            <div className="t">
              <h2>SeedBox</h2>
              <h2>Freedom Finance</h2>
            </div>
        </div>
    </div>
  )
}

export default Ourteam