import React from 'react';

import Suscription from '../components/Suscription'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center">
        <div className="mw7-l dib-l">
          <h2 className="eau-book ttu f-2 blue f-1-l">
            <span className="eau-bold">About</span> PillCycle
          </h2>
          <p className="open-sans f5 lh-copy blue1 f4-l">
          PillCycle is a 501(c)3. Established in 2016 the organization was created to provide
         affordable medication access to Washingtonians in need of assistance.
         Our programs focus on providing affordable medications to Medicare eligible Washingtonians.
          We plan to focus on creating innovative solutions that provide low-cost pharmaceutical access
          to our most vulnerable populations while generating significant cost savings across health systems.

            <br/>
            <br/>
            Our main objetive is to level up the community's
            knowledge, by bringing great speakers from the teams
            that are paving the way for a global scale in tomorrow's
            apps and services.
          </p>
          <p className="open-sans f5 lh-copy blue1 f4-l">
            We address issues of pharmaceutical access through innovative,
            non-traditional partnerships. Our programs put free and low-cost medications
            in the hands of people who would otherwise go without. We pride ourselves in developing programs that
            leverage scarce resources and create value for all stakeholders in our health delivery systems.
            <br/>
            <br/>
            Our main objetive is to level up the community's
            knowledge, by bringing great speakers from the teams
            that are paving the way for a global scale in tomorrow's
            apps and services.
          </p>
          <h4 className="blue open-sans f-4 lh-copy f3-l">
            Stay up on PillCycle news
            <br />
            Join our mailing list
          </h4>
          <Suscription />
        </div>
        <img src={require('../../src/assets/images/pharmapills.jpeg')} alt="ScaleConf Colombia" className="pl4-l w-30 dib-l dn"/>
      </div>
    );
  }
}
