import React from 'react'
import ree from '../Assets/ree.png'

const Product = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500] mx-auto my-4 py-4 px-4' src={ree} alt="SHIRT" />
            <div className=' flex flex-col justify-center px-4'>
                <p className='bg-[#32bbc0] font-bold pl-4 rounded'>COMMING SOON!</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Hippie Billy </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem cumque nihil? Voluptates suscipit qui eius? Ratione officia delectus eligendi soluta quisquam, totam possimus enim architecto perferendis maxime inventore eveniet.</p>
                <button className=' bg-[#32bbc0] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Pre-Order Now</button>
            </div>

        </div>

    </div>
  )
}

export default Product