import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout/Layout'
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/odyssey/" element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
