import React from 'react'
import leon from '../Assets/leon.png'
import cia from '../Assets/cia.png'
import skate from '../Assets/skate.png'

const Home2 = () => {
  return (
    <div>
       
<div className="  bg-slate-900 mx-auto grid grid-cols-3 gap-4">
  <div className="mb-4 items-center">
    <div className="relative max-w-xs overflow-hidden bg-cover  bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
    </div>
  </div>
  <div className="mb-4">
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20"></div>
    </div>
  </div>
  <div className="mb-4">
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
    </div>
  </div>
</div>
<div className="grid grid-cols-3 gap-4">
  <div className="mb-4 md:mb-0">
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
    </div>
  </div>
  <div className="mb-4 md:mb-0">
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>
    </div>
  </div>
  <div className="mb-4 md:mb-0">
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <img
        src={cia}
        className="max-w-xs"
        alt="Louvre" />
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Home2