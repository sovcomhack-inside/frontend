import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
