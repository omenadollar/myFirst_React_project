import React from 'react'
import Card from './components/card'
import Data from "./data.json"
import Header from './components/header'
import "./App.css"




const App = () => {

   const newData =Data.map((data)=>{
      return <Card 
         key ={data.id}
         {...data}
      />
   })

   
    return ( 
      <div className='container'>
         <Header />
         <div className="body-cont">
           {newData} 
         </div>
      </div>
    )
};

export default App