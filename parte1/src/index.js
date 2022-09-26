import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

// Header Component 

const Header= (header) => {    
  return (
  <>
    <h1>{header.course}</h1>
  </>
)} 


// Content Component Parts

const Content= (content) => {  
  
  return (
  <>
      <Part
        part={content.parts[0].name}
        exercise={content.parts[0].exercises}
      />
      <Part
        part={content.parts[1].name}
        exercise={content.parts[1].exercises}
      />
      <Part
        part={content.parts[2].name}
        exercise={content.parts[2].exercises }
      />
  </>
)} 

// Content Component 

const Part= (content) => {  
  
  return (
  <>
    <p>
    {content.part} {content.exercise}    
    </p>  
  </>
)} 

// Total Component 

const Total= (total) => {   

  return (

  <>
    <p>
        Number of exercises {" "}
        {total.parts[0].exercises + 
        total.parts[1].exercises + 
        total.parts[2].exercises}
    </p>
  </>
)} 

// App Component 

const App= () => {   

  const text = {
    title: "Half Stack application development",
    parts: 
    [  
    {name: "Fundamentals of React",exercises: 10,},   
    {name: "Using props to pass data",exercises: 7,},   
    {name: "State of a component",exercises: 14,},
    ],
  };

  return (

    <>
    <Header course={text.title}  />
    <Content parts={text.parts} />
    <Total parts={text.parts} />
    </>
)} 





// Primary ReactDOM Component

const PrimaryComponent= document.getElementById('root');
const RenderDom=ReactDOMClient.createRoot(PrimaryComponent) 

  RenderDom.render(
    <App  />
  )