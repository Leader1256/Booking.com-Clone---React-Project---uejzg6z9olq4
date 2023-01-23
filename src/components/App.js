import React from 'react'
import '../styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectBody } from './ProjectBody';
import {SignUpPage} from './SignUpPage';
import { FrontPage } from './FrontPage';
import { BookInfo } from './BookInfo';
const App = () => {


  return (

    <div id="main">
     
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<FrontPage/>} />
        <Route  path='/home' element={<ProjectBody/>} />
        <Route  path='/signUp' element={<SignUpPage/>} />
       <Route path='/book' element={<BookInfo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
