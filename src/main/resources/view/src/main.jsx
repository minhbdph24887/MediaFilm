import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoadingApp from './layout/Loading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingApp />
  </StrictMode>,
)
