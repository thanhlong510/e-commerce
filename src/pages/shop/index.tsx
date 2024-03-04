import React from 'react'
import StoreNav from '../components/StoreNav'

const Shop = () => {
  return (
    <div >
        <StoreNav/>
        <div className='pt-[100px] relative'>
  <img
    src='./banner.jpg'
    className='w-full h-auto '
  />
  <div className="absolute inset-x-0 top-1/2 flex items-center justify-center">
    <p className='text-3xl'>
      Shop
    </p>
  </div>
</div>
        

    </div>
  )
}

export default Shop