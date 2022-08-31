
/*import {Component} from 'react';
import './App.css'
import Navbar from'./components/Navbar';
import Main from './components/Main';

function App() {
  return (
      <div>
      <Navbar />
       <Main/>
       </div>*/
       import React from "react";

       function App() {
        const date= new Date()
        const hours= date.getHours()
        return(
                <h1>its currentaly{hours} o,clock </h1>


        );
        
       }
          
          
        

        
    
  
    



export default App;
