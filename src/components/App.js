import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectBody } from './ProjectBody';
const App = () => {


  return (

    <div id="main">
     
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<ProjectBody/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
