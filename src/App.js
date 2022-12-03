import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import OurServices from './Components/OurService';
import { useState } from 'react'
import ourData from './data/ourdata'
import About from './Components/About';
import Model from './Components/Model';
import Product from './Components/Product';
import productInfo from './data/product'
import Contect from './Components/Contect';

function App() {

  const [selectedOur, setSelectedOur] = useState('')

  const onOurOpenClick = (Our) => {
    setSelectedOur(Our);
  }

  const onOurCloseClick = () => {
    setSelectedOur(null);
  }

  const Ourlist = ourData.map((result, index) => {
    return <OurServices key={index} result={result} Click={onOurOpenClick} />
  })

  let Our = null
  if (!!selectedOur) {
    Our = <Model popup={selectedOur} ClickBg={onOurCloseClick} />
  }

  const productList = productInfo.map((result, index) => {
    return <Product key={index} result={result} />
  })

  return (
    <div className="app">
      <section className="section-head">
        <div className="container">
          <Header />
          <section className="section-main" />
          <div className="content-main">
            <div className="title">
              <h1>Our Services</h1>
            </div>
            <div className="grid">
              {Ourlist}
            </div>
            <section className="section-product">
              <div className="title">
                <strong>Product</strong>
              </div>
              <div className="grid">
                {productList}
              </div>
            </section>
            <div className="about">
              <About />
            </div>
            <div className='footer'>
              <Contect />
            </div>
          </div>
        </div>
      </section>
      {Our}
    </div>
  );
}

export default App;
