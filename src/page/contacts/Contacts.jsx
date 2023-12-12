import React from 'react'
import "./contacts.scss"
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const Contacts = () => {
  return (
    <div>
        <Nav/>
        <main>
        <div className="main">  
            <div className="title">
                <h1>Контакты <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>    
                <p><span>Задайте нам любой вопрос</span><br />
                    +7 701 776 24 20 <br /><br />

                    <span>Электронная почта</span><br />
                    client@fonte.kz <br /><br />

                    <span>Юридический адрес</span><br />
                    050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы, Казахстан
                    Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346, Астана, Казахстан
                    </p>       
            </div>
            <div className="reg">
                <input type="text" className='name' placeholder='Имя пользователя'/>
                <input type="email" className='email' placeholder='Электронная почта'/>
                <input type="number" className='number' placeholder='Номер телефона'/>
                <input type="button" value="Отправить" className='button' />
            </div>
        </div>
        <div className="images">
            <div className="img">
                <img src="../../../public/images/image 19.png" alt="" />
                <span>Астана</span>
            </div>
            <div className="img">
                <img src="../../../public/images/image 19 (1).png" alt="" />
                <span>Алматы</span>
            </div>
        </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Contacts