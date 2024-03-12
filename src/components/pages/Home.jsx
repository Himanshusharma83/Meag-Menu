import React from 'react'
import Button from './Button'


function Home() {
  return (
    <div>
         <section
      className="h-[86.7vh] bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
    
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-white text-2xl font-medium ">Movies Tips</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
         It's Show Time
        </h1>
        <div className="text-xl">
          <Button />
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Home