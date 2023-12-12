import React from 'react'
import "./Companyblog.scss"
import { CiCircleChevLeft , CiCircleChevRight } from "react-icons/ci";

const Companyblog = () => {
  return (
    <div className='Companyblog'>
        <div className="title">
            <h1>Наши ценности <img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
        </div>
        <div className="boxes">
            <CiCircleChevLeft className='left'/>
            <div className="box">
                <img src="../../../public/images/Rectangle 23.png" alt="" />
                <h2>Рэй Далио перестал считать наличные «мусором»</h2>
                <span>Подробнее ›</span>
            </div>
            <div className="box2">
                <img src="../../../public/images/Rectangle 23 (1).png" alt="" />
                <h2>Инвестиции в 5G – необходимое условие экономического развития</h2>
                <span>Подробнее ›</span>
            </div>
            <div className="box2">
                <img src="../../../public/images/Rectangle 23 (2).png" alt="" />
                <h2>Минфин предложил единый налоговый вычет</h2>
                <span>Подробнее ›</span>
            </div>
            <CiCircleChevRight className='right'/>
        </div>
        <div className="str">
            <h3>1</h3>
            <h3>2</h3>
            <h3 className='active'>3</h3>
            <h3>4</h3>
            <h3>5</h3>
        </div>
    </div>
  )
}

export default Companyblog