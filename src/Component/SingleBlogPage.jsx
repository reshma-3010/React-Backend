import React from 'react'
import { useLocation } from 'react-router-dom'



const SingleBlogPage = () => {
const location = useLocation();
const {title, img, description} = location.state;
console.log(title)
  return (
    <div style={{ margin: "50px 20%",
      alignItems: "center"}}>
        <h1>{title}</h1>
        <img src={img}  aria-hidden alt="Not Found"  style={{width: "100%",
    margin: "20px 0",
    height: "500px",
    alignItems: "center"}}/>
        <p>{description}</p>
      
    </div>
  )
}

export default SingleBlogPage