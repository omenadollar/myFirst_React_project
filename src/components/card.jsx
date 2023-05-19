import React from "react"


const About =(props)=>{
   const [message,setMessage] = React.useState('BUY')
   const [data,setData] =React.useState({
    isFavourite:true
   })
   
    let starIcon =data.isFavourite? props.img :"./images/_uhdanimals17.jpg"

   function handler() {
       setMessage("Added-to-cart")
   }
    function isFavorite() {
        setData((prevState)=>{
            return {prevState,isFavourite: !prevState.isFavourite}
        })
    }


    return (
        <div className="businesscard">
            <div className="rating">
                {props.Avalibility === 0 && <h1 className="ava">Sold out</h1>}
                <p className="stat"><span>onsales:</span><br />{props.stats.reviewCount}+</p>
            </div>
            <div className="card">
                <img src={starIcon} alt="" onClick={isFavorite}/> 
                <div className="card-body" >
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                    <p>{props.location}</p>

                    {
                    props.Avalibility !== 0 ? 
                    <button className="buy-btn" onClick={handler} >{message}</button> :

                    <button className="buy-btn" onClick={handler} style={{backgroundColor:'red',pointerEvents:'none'}}>NOT AVALIABLE NOW</button>
                    }
                </div>
            </div>
        </div>
    )
}


export default About