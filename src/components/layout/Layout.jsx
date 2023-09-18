import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Header />
        <main className="flex-auto mt-[9.945vw] tablet:mt-[11.71vw] pt-20">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout