import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import "./Prodinfo.scss"
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

const Prodinfo = () => {
  return (
    <div>
        <Nav/>
        <main>
            <h3>Продукты <span>/ Хедж-фонд</span></h3>
            <div className="title">
                <h1>Хедж-фонд<img src="../../../public/images/Vector.png" alt="" className='vector'/></h1>            
            </div>
            <div className="gt">
                <div className="img"><img src="../../../public/images/a.png" alt="" /></div>
                <div className="text">
                    <p>Инвестиции, нацеленные на долгосрочный прирост капитала путем инвестирования в ценные бумаги международных эмитентов с высоким потенциалом роста. Инвестиции, нацеленные на долгосрочный прирост капитала путем инвестирования в ценные бумаги международных эмитентов с высоким потенциалом роста. Инвестиции, нацеленные на долгосрочный прирост капитала путем инвестирования в ценные бумаги международных эмитентов с высоким потенциалом роста. </p>
                </div>
            </div>
            <p>Индивидуальные инвестиционные счета (ИИС) третьего типа придут на смену ИИС первого типа. Новый формат ИИС попадет в систему единого налогового вычета на все инвестиционные продукты, в том числе договоры с пенсионными фондами и полисы страхования. Об этом пишут «Ведомости» со ссылкой на разработанную Минфином концепцию развития такой системы. <br /><br />
            Два первых типа ИИС появились в 2015 году. По данным Московской биржи на конец июля, они были открыты у 5,6 млн человек. ИИС-I позволяет его владельцу получать 13% от зачисленной на счет за год суммы, но не более 400 000 рублей (максимум вычета  — 52 000 рублей в год). По ИИС-II весь доход по операциям освобождается от уплаты налога при закрытии счета. Для получения льгот по обеим форматам счетов нужно держать ИИС три года и не выводить средства. Можно иметь только один ИИС и в год внести на него не более 1 млн рублей. </p>
            <div className="document">
                <h1>Документы</h1>
                <div className="doc1">
                <IoDocumentTextOutline className='icon'/>
                <div className="text">
                    <h2>Документ 1</h2>
                    <span>Размер 5мб</span>
                </div>
                <IoMdDownload className='icon'/>
                </div>
                <div className="doc1">
                <IoDocumentTextOutline className='icon'/>
                <div className="text">
                    <h2>Документ 2</h2>
                    <span>Размер 3.5мб</span>
                </div>
                <IoMdDownload className='icon'/>
                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Prodinfo