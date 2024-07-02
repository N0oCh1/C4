import useEffect from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  useEffect(() => {
    
  })
  


  return (
    <BrowserRouter basename='/Login'>
      <Routes>
        <Route path="/Login"/>
      </Routes>
      <div className='flex justify-center items-center w-ful bg-slate-500 border-3 border-emerald-600 rounded-xl '>
      
      </div>
    </BrowserRouter>
  )
}

export default App
