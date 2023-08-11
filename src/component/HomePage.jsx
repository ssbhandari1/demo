import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const newsData=useSelector((state)=>state.newsData.data)
    console.log(newsData)
  return (
    <div style={{width:'100%',height:'100%'}}>

        {
            newsData.map((item,index)=>{
                return(
                 <div key={index} style={{width:'70%',height:'40vh'}}>
                    <h4>{item.title}</h4>
                    <img src={item.urlToImage} alt="" width='50%' height='60%'/>
                 </div>
                )
            })
        }
  
    </div>
  )
}

export default HomePage
