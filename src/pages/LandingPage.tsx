import  { Component,ReactNode } from 'react'
import HeaderSection from './sections/HeaderSection'
// import MainSection from './sections/MainSection'
// import FooterSection from './sections/FooterSection'

export default class LandingPage extends Component {
  render():ReactNode {
    return (
      <div>
        <HeaderSection />
        {/* <MainSection />
        <FooterSection /> */}
      </div>
    )
  }
}