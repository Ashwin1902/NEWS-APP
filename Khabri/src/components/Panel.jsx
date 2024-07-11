import React, { useEffect,useState } from 'react'
import Card from './Card'
function Panel() {
    const [data, setData] = useState({articles:[]})

    const [cat,setCat]=useState("general")
    useEffect(()=>{
      const API_KEY = import.meta.env.VITE_APIKEY; 
      const url = `https://newsapi.org/v2/everything?q=${cat}}&sortBy=popularity&apiKey=${API_KEY}`;
      fetch(url)  
      .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>console.log(err))
    },[cat])

  const handleCategoryChange = (e) => {
      setCat(e.target.value);
  };
  return (
    <div className="p-8">
        <div className="max-w-3xl mx-auto bg-slate-200 p-6 rounded-lg shadow-lg mb-8">
            <form className="flex justify-center space-x-4">
                <div className="flex flex-col">
                    <label htmlFor="category" className="mb-2 font-bold text-slate-800">Category:</label>
                    <select id="category" value={cat} onChange={handleCategoryChange} className="border rounded-lg p-2">
                        <option value="general">General</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>
                </div>
            </form>
        </div>
        <div className="flex flex-wrap justify-around">
            {data.articles.map((article, index) => {
                if (article.source.name !== "[Removed]") {
                    return <Card key={index} {...article} />;
                }
                return null;
            })}
        </div>
    </div>
);
}

export default Panel

// { data?<pre>{JSON.stringify(data.articles,null,2)}</pre>:'Loading...' }