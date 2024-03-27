import  { Component,ReactNode } from 'react'
import LandingPage from './pages/LandingPage'
import GlobalStyles from './styles/GlobalStyle'
export default class App extends Component {
  render():ReactNode {
    return (
      <div>
        <GlobalStyles />
        <LandingPage />
      </div>
    )
  }
}