import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Gold from '../../assets/gold.svg'

import './Home.css';
import axios from 'axios';
 const Home = ()=>{
    const [metalPrices,setMetalPrices] = useState({
        
    })
    const [cardData,setCardData] = useState([
        {  
            image:"https://freesvg.org/img/hrum-remix-silver.png",
            metal:"Silver",
            price:10000
          },
          {
            image:Gold,
            metal:"Gold",
            price:200000
          },
          {
            image:"https://www.svgrepo.com/show/288765/diamond.svg",
            metal:"Diamond",
            price:10000000
          }
        ]
    );
    // useEffect(()=>{
    //   axios.get("https://api.metals.dev/v1/latest?api_key=ATFCASQXWWEAD18Z5ZHE2568Z5ZHE&currency=USD&unit=toz").then((response)=>{
    //     console.log(response.data)
    //     setMetalPrices(response.data.metals)
    //   })
    // },[])
    // useEffect(()=>{
    //  setCardData(
    //     [
    //       {  
    //         image:"https://freesvg.org/img/hrum-remix-silver.png",
    //         metal:"Silver",
    //         price:metalPrices.silver
    //       }
    //     ]
    //  )
    // },[metalPrices])
    return(
        <div className='homeContainer'>
            <h1>Metal Prices</h1>
            <div className='metalPriceCardsContainer'>
{
    cardData.map((data)=>(
        <Card
            image={
                data.image
            }
            title={data.metal}
            content={`$${data.price} / kg`}
            />
    ))
}
            </div>
            
        </div>
    )
}


export default Home;