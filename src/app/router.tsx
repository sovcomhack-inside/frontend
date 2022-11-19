import { LandingPage } from 'pages/landing-page'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, MainPage, SignupPage } from 'pages/auth-page'
import { PassportPage } from 'pages/passport-page'

export const router = createBrowserRouter([
  {
    path: '/new',
    element: <MainPage />,
  },
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/passport',
    element: <PassportPage />,
  },
  {
    path: '/profile',
    element: <>Proflet</>,
  },
])
