import React from 'react'
import '../styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectBody } from './ProjectBody';
import {SignUpPage} from './SignUpPage';
import { FrontPage } from './FrontPage';
const App = () => {


  return (

    <div id="main">
     
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<FrontPage/>} />
        <Route  path='/home' element={<ProjectBody/>} />
        <Route  path='/signUp' element={<SignUpPage/>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
