import { LandingPage } from 'pages/landing-page'
import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, MainPage, SignupPage } from 'pages/auth-page'
import { WithMenuComponent } from './ui/WithMenuComponent'
import { ProfilePage } from 'pages'
import { CurrenciesList } from 'widgets'
import { WithNamePage } from 'shared/pages/with-name-page'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { CurrencyPage } from 'pages/currency-page'

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
    path: '/shop',
    element: (
      <WithMenuComponent>
        <WithBackbuttonPage pageTitle="О валюте">
          <WithNamePage name="Валюты">
            <CurrenciesList />
          </WithNamePage>
        </WithBackbuttonPage>
      </WithMenuComponent>
    ),
  },
  {
    path: '/currency/:id',
    element: <CurrencyPage />,
  },
])
