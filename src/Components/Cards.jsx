import React from 'react'
import leon from '../Assets/leon.png'
import cia from '../Assets/cia.png'
import skate from '../Assets/skate.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4  bg-zinc-900'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
        <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg  bg-zinc-800 text-white'>
                <img className='hover:scale-105 duration-300 mx-auto mt-[-3rem] bg-white' src={leon} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Leonid-X</h2>
                <p className='text-center text-4xl font-bold'>599 php</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Crew Neck</p>
                    
                </div>
                <button className=' bg-[#32bbc0] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg  bg-zinc-800 text-white'>
                <img className='hover:scale-105 duration-300 mx-auto mt-[-3rem] bg-white' src={cia} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Akereux</h2>
                <p className='text-center text-4xl font-bold'>599 php</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Oversized Tee</p>
                   
                </div>
                <button className=' bg-[#32bbc0] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg  bg-zinc-800 text-white'>
                <img className='hover:scale-105 duration-300 mx-auto mt-[-3rem] bg-white' src={skate} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Willy Wednesday</h2>
                <p className='text-center text-4xl font-bold'>599 php</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Oversized Teee</p>
                   
                </div>
                <button className=' bg-[#32bbc0] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>

        </div>

    </div>
  )
}

export default Cards