import React from 'react'
import { LandingPage } from 'pages/landing-page'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { router } from './router'

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}
