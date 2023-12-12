import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import "./Blog.scss"

const Blog = () => {
    const [product, setProduct] = useState();

    const getApi = async () => {

        
        const request = await fetch("http://localhost:3000/data");
        const data = await request.json();
        setProduct(data);
      };
    
      useEffect(() => {
        getApi();
      }, []);
  return (
    <div>
        <Nav/>
        <main>
            <div className="title">
                <h1>Блог  <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
            </div>
            {
                product && product.map((item) => {
                    return <Link to={"/bloginfo"} className="box" key={item.id}>
                    <div className="img8"><img src={item.image} alt="" /></div>
                    <div className="text">
                        <span>Менеджемент</span>
                        <h1>{item.name}</h1>
                        <span>Арман Арманов, Октябрь 13, 2022</span>
                        <p>Минфин разработал новый формат индивидуальных инвестиционных счетов (ИИС-III) — его включат в систему единого налогового вычета наряду с пенсионными и страховыми инвестициями. С 2024 года ИИС-III полностью заменит ИИС-I, запущенный в 2015 году. Новый инвестсчет будет неинтересен для инвесторов в предложенной </p>
                        <h3>Подробнее ›</h3>
                    </div>
                </Link>
                })
            }
            
        </main>
        <Footer/>
    </div>
  )
}

export default Blog