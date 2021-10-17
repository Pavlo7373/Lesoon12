import React from "react"
import logo from './logo.png';
// import lll from '../../../../logo.svg'


import './style.css'


function Peperoni() {
    return (
      <div id='blokPizza'>


        <div id= "vagaD">
        
        <div id='type1'>480g</div>
        <div id='d'>30cm</div>


        </div>
        


        <div><img src={logo}  /></div>
        <div id= "PizzaName">Peperoni</div>        
        <div id="opys">tomato sauce, parmesan cheese, mozzarella cheese, ricotta cheese, ham, tomatoes.</div>
        
              
        <div id="add">
        <div id="flex">
                <div id='type2'>220</div>
                <div id="ua">UAH</div>
        </div>


        <div id="flex">
                <div> <button id="plus">+</button></div>
                <div id='quantity'>0</div>
                <div> <button id="plus">-</button></div>
        </div>
      
        <div>
                <button id="submit">Add</button>
        </div>



          
        </div>
       




        


     </div>
    
  )
}

export default Peperoni