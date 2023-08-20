import React from 'react'

function All({item}) {
  const {title,content,img,date} = item ;

  return (
    <div className="col">
      <div className="card ml-5 mt-5">
        <div href='#' className='text-decoration-none'>
          <img src={img} className="card-img-top" alt="Course Image"/>
            <div className="card-body text-dark">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{content}</p>
              <a href="#" className='text-success text-decoration-none font-weight-bold'>READ MORE&#62;&#62;</a>
            </div>
            <div className="card-footer">
              <small className="text-muted">{date} &#183; No comments</small>
            </div>
        </div>
      </div>
    </div>
  )
}

export default All;