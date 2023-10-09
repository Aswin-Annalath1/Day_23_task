import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Section from './Components/Section';
import { detail } from './Utils/Constants';
import Footer from './Components/Footer';


function App() {
    const [cart,setCart]=useState(0)

  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart}/>
      <Header/>
      <div className="box1">
        {
            detail.map((element)=>(
                <Section {...element} cart={cart} setCart={setCart}/>
            ))
        }
        </div>
        <Footer/>
    
    </div>
  );
}

export default App;
