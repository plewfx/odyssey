const Resources = () => {
    return (
      <section className="pb-[15vw]">
        <div className="container relative">
          <div className="px-230 pt-80 pb-210 bg-3 bg-cover bg-center bg-no-repeat rounded-40">
            <h2 className="text-center text-white">We are committed to making space science accessible to all. Explore our educational resources, including</h2>
          </div>
          <div className="absolute -bottom-[15vw] flex items-start gap-52 mx-110">
            <div className="flex flex-col gap-10 bg-white rounded-24 px-52 pt-52 pb-60 shadow-grey">
              <h2 className="leading-140 text-blue-100">01.</h2>
              <div className="flex flex-col gap-20">
                <h4 className="text-24 font-extrabold">Online free courses and tutorials</h4>
                <p className="font-medium leading-180 text-black-100">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
              </div>
            </div>
            <div className="flex flex-col gap-10 bg-white rounded-24 px-52 pt-52 pb-60 shadow-grey">
              <h2 className="leading-140 text-blue-100">02.</h2>
              <div className="flex flex-col gap-20">
                <h4 className="text-24 font-extrabold">Resources for teachers and educators</h4>
                <p className="font-medium leading-180 text-black-100">Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
              </div>
            </div>
            <div className="flex flex-col gap-10 bg-white rounded-24 px-52 pt-52 pb-60 shadow-grey">
              <h2 className="leading-140 text-blue-100">03.</h2>
              <div className="flex flex-col gap-20">
                <h4 className="text-24 font-extrabold">Book recommendations and reviews</h4>
                <p className="font-medium leading-180 text-black-100">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Resources