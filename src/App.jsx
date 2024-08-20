import { useEffect, useState } from 'react';
import './App.css'
import Discover from './Components/Discover/Discover';
import Home from './Components/Home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader';

function App() {
  const [isloading,setisloading]=useState(true)

  useEffect(()=>{
   const load=()=>{
     setTimeout(() => {
      setisloading(false)
     }, 2000);
   }
   load()  // call the function when the component mounts
  },[])
  return (
 
    isloading? (<Loader/>):(
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path='/discover' element ={<Discover/>}/>
      </Routes>
      </BrowserRouter>
      )
      
     
  
     
  
  
  )
}

export default App
