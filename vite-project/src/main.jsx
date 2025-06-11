import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>customApp</h1>
    </div>
  )
}
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
    "click me to visit google"
  
);
createRoot(document.getElementById('root')).render(
 
   
    reactElement

)
//for using the createElement we have to use the import React from react
