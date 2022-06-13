import './App.css';
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Layaout from './Components/Layaout';
import SinglePage from './pages/Singlpage/SinglePage';
function App() {
  return (
    <div className="App">
   

    <Routes>
    <Route path='/' element={<Layaout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
     <Route path='post' element={<Blog/>}></Route>
     <Route path='post/:id' element={<SinglePage/>}></Route>
    </Route>
    
  </Routes>
    </div>
  );
}
export default App;
