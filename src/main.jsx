import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchContextTask from './context/SearchContextTask.jsx'
import { Analytics } from "@vercel/analytics/react";


 const GoogleclientId="540404990086-ilnemfk4b71i6ieu9v61779s3mb13es4.apps.googleusercontent.com"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <GoogleOAuthProvider clientId={GoogleclientId}>
      
      <SearchContextTask>
         <App />
         <Analytics/>
      </SearchContextTask>
      </GoogleOAuthProvider>
     
    </BrowserRouter>
   
  </StrictMode>


)

  console.log("GOOGLE CLIENT ID USED:", GoogleclientId);
console.log("APP ORIGIN:", window.location.origin);
