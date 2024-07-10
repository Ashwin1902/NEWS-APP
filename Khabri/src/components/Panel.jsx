import React, { useEffect,useState } from 'react'
import Card from './Card'
function Panel() {
    const [data, setData] = useState({articles:[]})
       
    useEffect(()=>{
        fetch("")
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