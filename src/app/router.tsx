import { LandingPage } from 'pages/landing-page'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, MainPage, SignupPage } from 'pages/auth-page'
import { WithMenuComponent } from './ui/WithMenuComponent'
import { ProfilePage } from 'pages'
import { AccountsPage } from 'pages/accounts/accounts'
import { AdminLoginPage } from 'pages/admin/admin-page'
import { AdminManagePage } from 'pages/admin/admin-manage'

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
    path: '/profile',
    element: (
      <WithMenuComponent>
        <ProfilePage />
      </WithMenuComponent>
    ),
  },
  {
    path: '/accounts',
    element: <AccountsPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin/manage',
    element: <AdminManagePage />,
  },
])
