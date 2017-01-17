import React from "react"

import Page from "../Page"
import Contact from "../../fragments/Contact"
import About from "../../fragments/About"
import Team from "../../fragments/Team"
//import Venue from "../../fragments/Venue"
import Office from "../../fragments/Offices"
import HowItWorks from "../../fragments/HowItWorks"
import Programs from "../../fragments/Programs"
//import CodeOfConduct from "../../fragments/CodeOfConduct"
import Partner from "../../fragments/Partner"
//import Organizers from "../../fragments/Organizers"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className="ph4 pv5 mw80 center" id="about">
        <About />
      </div>
      <div className="bg-green4" id="Team">
        <Team />
      </div>

      <div className="bg-blue3" id="office">
        <Office />
      </div>
      <div className="mw80 center" id="howitworks">
        <HowItWorks />
      </div>
      <div className="bg-green5" id="programs">
        <Programs />
      </div>
      <div className="bg-blue1" id="partner">
        <Partner />
      </div>

      <div className="pv5 ph4">
        <Contact />
      </div>
    </Page>
  )
}

export default Homepage
