import React from 'react'
import "./Reg.scss"

const Reg = () => {
  return (
    <div className='Reg'>
        <div className="text">
          <input type="text" className='name' placeholder='Имя пользователя'/>
          <div className="rt">
            <input type="email" className='email' placeholder='Электронная почта'/>
            <input type="number" className='number' placeholder='Номер телефона'/>
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Текст обращения'></textarea>
          <input type="button" value="Получить консультацию" className='button' />
        </div>
        <div className="img">
          <img src="../../../public/images/Group 41.png" alt="" />
        </div>
    </div>
  )
}

export default Reg