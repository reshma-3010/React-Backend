import React, { useState,useEffect } from 'react'

import fetchData from './api';
import Card from './Card'
import Smallcard from './Smallcard';

const Fitness = () => {
    const [apidata,setApiData]=useState([]);
    useEffect(()=>{
        const apiFetch=async()=>{
            setApiData(await fetchData());
        };
        apiFetch();

    },[apidata]);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
            <h1 style={{ margin: "20px 0px 20px 41.9%", display: "inline-block" }}>Top Posts</h1>
            <div className="Wholepage">
                <div className='Right-page'>
                    {
                        apidata.filter((article) => { return article.category === "Fitness" }).map((n) => (
                            <Card
                            key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                              
                            />
                        ))
                    }
                </div>

                <div className="Left-page">
                    {
                        apidata.filter((article) => { return article.category === "Fitness" }).map((n) => (
                            <Smallcard
                            key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                              
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
export default Fitness