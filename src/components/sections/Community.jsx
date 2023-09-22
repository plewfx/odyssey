import React from 'react'
const Community = () => {
  return (
    <section className='mt-120'>
        <div className="container flex flex-col gap-48 bg-4 bg-cover bg-center bg-no-repeat rounded-40 p-120">
            <div className="flex flex-col gap-12">
                <h2 className='text-white'>Join our community</h2>
                <p className='text-white text-18 leading-190 max-w-[55%] font-normal'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
            </div>
            <form className='flex items-center gap-24 max-w-[65%]' action="#">
                <input className='py-26 px-32 rounded-24 flex-auto placeholder:text-24 placeholder:font-medium placeholder:text-black-100 placeholder:opacity-50 focus:outline-black-100' type="text" placeholder='Enter your email' />
                <button className='text-24 font-semibold text-white py-26 px-54 bg-blue-100 shadow-grey rounded-20'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Community