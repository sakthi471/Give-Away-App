import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <BrowserRouter>
       <App/>
     </BrowserRouter>
     </AuthProvider>
  </React.StrictMode>,
)
