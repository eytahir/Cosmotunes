import React from 'react'
import bg from '../Assets/bg.png'

const Home = () => {
  return (
    <div className='bg-zinc-900'>
        <div className=' bg-zinc-900 md:max-w-[1000px] lg:max-w-[1240px] pb-16 w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <img className='hover:scale-105 duration-300 ' src={bg} alt="//" />
        <div>
        
        <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-24 lg:py-11 font-bold text-white  '> Made in Space.</h1>
        </div>


    </div>
    </div>
  )
}

export default Home