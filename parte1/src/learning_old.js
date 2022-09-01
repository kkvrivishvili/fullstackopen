import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
 
  const now = new Date()
  const a = 10
  const b = 20
  const name = ['Flavio','Roberto','Nicolas']
  const age = [15,22,15,76,2]
  

  console.log()

  const Hello= (props) => {
    
    return (

    <>
      <p>Hola mundo {props.name}, you are {props.age} years old</p>
    </>
  )} 

  const Footer = () => {
    return (
      <>
        greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
      </>
    )
  }
  


  const App= document.getElementById('root');
  const RenderDom=ReactDOMClient.createRoot(App) 
  RenderDom.render(
    <>
        <h1>Greetings</h1>
        <Hello name={name[2]} age={20+20} />
        <Hello name='Agustin' age={age[3]+2}/>
        <p>Hello world</p>  
        <p>{a} plus {b} is {a + b} at the time {now.toString()}</p>

        <Footer/>

    </>


  );