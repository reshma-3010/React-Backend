import React, { useEffect, useState } from 'react'

import fetchData from './api';
import Card from './Card'
import Smallcard from './Smallcard';

const Bollywood = () => {
    const [apidata,setApiData]=useState([]);
    
    useEffect(()=>{
        const apiFetch=async()=>{
            setApiData(await fetchData());
        };
        apiFetch();

    },[apidata]);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="Wholepage">
                <div className='Right-page'>
                    {
                        apidata.filter((article) => { return article.category === "Bollywood" }).map((data) => (
                            <Card
                            key={data.id}
                                articleid={data.id}
                                imgUrl={data.Image}
                                title={data.title}
                                description={data.description.slice(0, 200)}
                              
                            />
                        ))
                    }
                </div>

                <div className="Left-page">
                    {
                        apidata.filter((article) => { return article.category === "Bollywood" }).map((data) => (
                            <Smallcard
                            key={data.id}
                                articleid={data.id}
                                imgUrl={data.Image}
                                description={data.description.slice(0, 200)}
                                title={data.title.slice(0, 25)}
                             
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Bollywood