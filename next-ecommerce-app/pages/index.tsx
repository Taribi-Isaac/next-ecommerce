import React from 'react'

const Home = () => {
  return (
    <>
    Herobanner
    <div className='products-heading'>
      <h2>Get the very best qualities</h2>
      <p>Accessories of many types</p>
    </div>
    <div className='products-container'>
      {['product 1', 'product 2'].map((product)=> product)}
    </div>
    Footer
    </>
  )
    
}

export default Home