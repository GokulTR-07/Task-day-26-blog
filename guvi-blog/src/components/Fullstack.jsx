import React from 'react'
import list2 from '../Data2'
import All from './All'
import Footer from './Footer'

function Fullstack() {
  return (
    <>
    <section className=' py-5 bg-light'>
      <div className="container">
          <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 justify-content-center">
      {
        list2.map((item)=>{
          return <All item={item} key={item.id}/>
        })
      }
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Fullstack