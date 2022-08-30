import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


  
  const now = new Date()
  const a = 10
  const b = 20

  console.log('Hello from component')

  const Hello= () => {
    return (

    <div>
      <p>Hola mundo</p>
    </div>


  )} 


  const App= document.getElementById('root');
  const RenderDom=ReactDOMClient.createRoot(App)
  RenderDom.render(
    <div>
        <h1>Greetings</h1>
        <Hello />
        <p>Hello world</p>
        

        <p>{a} plus {b} is {a + b} at the time {now.toString()}</p>
    </div>


  );