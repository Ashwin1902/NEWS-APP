import React, { useEffect,useState } from 'react'
import Card from './Card'
function Panel() {
    const [data, setData] = useState({articles:[]})
       
    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=Apple&from=2024-07-08&sortBy=popularity&apiKey=5f33c95080b1471d99b71359dea1452e")
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
    <div className='flex flex-wrap flex-row justify-around'>
        {data.articles.map((article,index)=>{
            if(article.source.name!=="[Removed]") return <Card {...article}></Card>
        })}
    </div>
    </div>
  )
}

export default Panel

// { data?<pre>{JSON.stringify(data.articles,null,2)}</pre>:'Loading...' }