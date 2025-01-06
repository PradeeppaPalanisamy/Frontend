import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Slam from './Slam.jsx'
import Apps from './Apps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Slam /> */}
    <Apps />
  </StrictMode>,
)
