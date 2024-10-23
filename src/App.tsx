import React from 'react';
// import Back from `${process.env.PUBLIC_URL}/assets/images/image-01.jpg`
import Home from './pages/Home';

import {styled} from '@mui/material'
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import  './App.css' ;
const Back = `${process.env.PUBLIC_URL}/assets/images/image-01.jpg`;

function App() {
  const StyledDiv = styled('div')({
    backgroundImage: `url(${Back})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the background image
    backgroundAttachment: 'fixed', // Keeps the background image fixed while scrolling
    // height: '100vh', // Full viewport height for the background
    width: '100%',  // Use 100% to avoid horizontal scroll issues
    overflowX: 'hidden', // Prevents horizontal scrolling
    // overflowY: 'auto', // Allows vertical scrolling for content

    // maxHeight: '100vh', // This restricts the height to the viewport height
    overflowY: 'auto',  // Enables vertical scrolling
     
  })
  return (
    <>
     <NavBar/>
    <StyledDiv>
     
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/gallery" element={<Gallery/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/about" element={<About/>}/>
     </Routes>
    </StyledDiv>
    </>
    
  );
}

export default App;
