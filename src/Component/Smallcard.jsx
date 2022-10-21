import React from 'react'
import { Link } from 'react-router-dom'

const Smallcard = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <Link state={{ title: title, 
                   img: imgUrl,
                    description: description,
                     id: articleid 
                     }} 
                     to={`${articleid}`}>
      <div className='Smallbox' >
        <div className="Card" >
          <div className="SmallboxImage">
            <img src={imgUrl} aria-hidden alt="Not Found" />
          </div>
          <div className='Head'  >
            <h3>{title}</h3>
          </div>

        </div>
      </div></Link>
  )
}

export default Smallcard