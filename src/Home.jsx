import Brands from "./components/sections/Brands"
import Community from "./components/sections/Community"
import Hero from "./components/sections/Hero"
import Resources from "./components/sections/Resources"
import SpaceCommunity from "./components/sections/SpaceCommunity"

const Home = () => {
  return (
    <>
        <Hero />
        <Brands />
        <SpaceCommunity />
        <Resources />
        <Community />
    </>
  )
}

export default Home