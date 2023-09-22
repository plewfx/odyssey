const Community = () => {
  return (
    <section className='mt-120 tablet:mt-[7.81vw] mobile:mt-[200vw] mobile:bg-4 mobile:bg-cover mobile:bg-left mobile:bg-no-repeat'>
        <div className="container flex flex-col gap-48 tablet:gap-[4.28vw] mobile:gap-[6.4vw] bg-4 mobile:bg-[url()] bg-cover bg-center bg-no-repeat rounded-40 tablet:rounded-[3.9vw] p-120 tablet:py-[6.83vw] mobile:py-[10.66vw] tablet:px-[3.9vw] mobile:px-[0vw]">
            <div className="flex flex-col gap-12 tablet:gap-[1.17vw] mobile:gap-[4.16vw]">
                <h2 className='text-white'>Join our community</h2>
                <p className='text-white text-18 tablet:text-[1.36vw] mobile:text-[3.73vw] leading-190 max-w-[55%] mobile:max-w-none font-normal'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
            </div>
            <form className='flex mobile:flex-col mobile-min:items-center mobile:unset gap-24 tablet:gap-[2.34vw] mobile:gap-[3.2vw] max-w-[65%] mobile:max-w-none' action="#">
                <input className='py-26 tablet:py-[2.14vw] mobile:py-[5.86vw] px-32 tablet:px-[2.34vw] mobile:px-[6.4vw] rounded-24 tablet:rounded-[1.56vw] mobile:rounded-[4.26vw] flex-auto text-24 tablet:text-[1.56vw] mobile:text-[4.26vw] placeholder:text-24 placeholder:tablet:text-[1.56vw] placeholder:mobile:text-[4.26vw] placeholder:font-medium placeholder:text-black-100 placeholder:opacity-50 focus:outline-black-100' type="email" placeholder='Enter your email' />
                <button className='text-24 tablet:text-[1.95vw] mobile:text-[5.33vw] font-semibold text-white py-26 tablet:py-[1.95vw] mobile:py-[5.33vw] px-54 tablet:px-[3.9vw] bg-blue-100 shadow-grey rounded-20 tablet:rounded-[1.9vw] mobile:rounded-[4.26vw]'>Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Community