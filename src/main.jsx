import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './Music/App.jsx'
import App3 from './Forms/App.jsx'
import App4 from './Cards/App.jsx'
import App5 from './Routing/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App></App> */}
    {/* <App1></App1> */}
    {/* <App2></App2> */}
    {/* <App3></App3> */}
    {/* <App4></App4> */}
    
    <BrowserRouter>
      <App5></App5>
    </BrowserRouter>

  </>
)
