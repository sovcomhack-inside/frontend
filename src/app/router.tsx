import { LandingPage } from 'pages/landing-page'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, MainPage, SignupPage } from 'pages/auth-page'
import { WithMenuComponent } from './ui/WithMenuComponent'
import { ProfilePage } from 'pages'
import { AdminLoginPage } from 'pages/admin/admin-page'
import { CardsPage } from 'pages/cards/cards-page'
import { CardsNewPage } from 'pages/cards/cards-new-page'
import { CurrenciesList } from 'widgets'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { CurrencyPage } from 'pages/currency-page'
import { AdminManagePage } from 'pages/admin/admin-manage'
import { AccountsPage } from 'pages/accounts/accounts'
import { BuyCurrencyPage } from 'pages/buy-currency-page'
import { SettingsPage } from 'pages/settings-page'
import { AccountsNewPage } from 'pages/accounts/accounts-new-page'

export const unauthRouter = createBrowserRouter([
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
    path: '*',
    element: <MainPage />,
  },
])

export const router = createBrowserRouter([
  {
    path: '/new',
    element: <ProfilePage />,
  },
  {
    path: '/',
    element: <ProfilePage />,
  },
  {
    path: '/login',
    element: <ProfilePage />,
  },
  {
    path: '/signup',
    element: <ProfilePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/accounts',
    element: <AccountsPage />,
  },
  {
    path: '/accounts/new',
    element: <AccountsNewPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin/manage',
    element: <AdminManagePage />,
  },
  {
    path: '/cards',
    element: <CardsPage />,
  },
  {
    path: '/cards/new',
    element: <CardsNewPage />,
  },
  {
    path: '/currencies',
    element: <CurrenciesList />,
  },
  {
    path: '/currency/:id',
    element: <CurrencyPage />,
  },
  {
    path: '/buy/:id',
    element: <BuyCurrencyPage />,
  },
])
