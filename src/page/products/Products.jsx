import React, { useEffect, useState } from 'react'
import "./products.scss"
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'

const Products = () => {
  const [product, setProduct] = useState();

    const getApi = async () => {

        
        const request = await fetch("http://localhost:3000/data1");
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
              <h1>Продукты <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
          </div>
          {
            product && product.map((item) =>{
              return <Link to={"/prodinfo"} className="box2" key={item.id}>
              <div className="text">                
                <h1>{item.name}</h1>
                <p>{item.info}</p>
                <button>Подробнее</button>
              </div>
              <div className="img">
              <div className="gradiend"></div>
                <img src={item.image} alt="" />
              </div>
            </Link>
            })
          }
          <h2><span>*</span> в процессе регистрации </h2>
        </main>
        <Footer/>
    </div>
  )
}

export default Products