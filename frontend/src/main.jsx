import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "./components/ui/provider"
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <BrowserRouter>
    <Toaster /> 
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
