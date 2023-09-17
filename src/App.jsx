import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/odyssey/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
