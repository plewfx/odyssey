const Brands = () => {
  return (
    <section className="mt-120 mobile:mt-[200vw]">
        <div className="container flex items-center justify-between mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 mobile:gap-[5vw]">
            <div className="bg-spaceX bg-cover bg-no-repeat bg-center w-[15.88vw] mobile:w-full tablet:w-[27.8vw] h-[10.625vw] mobile:[5vw] opacity-30 duration-500 hover:opacity-100">

            </div>
            <div className="bg-NASA bg-cover bg-no-repeat bg-center w-[5.93vw] mobile:w-[50%] tablet:w-[10.09vw] h-[1.61vw] tablet:h-[2.66vw] mobile:h-[5vw] opacity-30 duration-500 hover:opacity-100">

            </div>
            <div className="bg-boeing bg-cover bg-no-repeat bg-center w-[13.8vw] mobile:w-full tablet:w-[20.8vw] h-[7.76vw] mobile:h-[5vw] opacity-30 duration-500 hover:opacity-100">

            </div>
            <div className="bg-astro bg-cover bg-no-repeat bg-center w-[16.66vw] mobile:w-full h-[5.132vw] mobile:h-[10vw] opacity-30 duration-500 hover:opacity-100">

            </div>
        </div>
    </section>
  )
}

export default Brands