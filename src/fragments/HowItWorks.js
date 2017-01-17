import React from 'react';

export const HowItWorks = () => {
  return (
    <div className="mw80 center pv5 ph4">
      <h2 className="bg-white blue1 dib eau-bold f-2 pa3 pv2 tc ttu f-1-l mb4-l">How It Works</h2>
      <div className="flex-l items-center-l mb4-l">
        <div className="col-md-4">
          <div className="item">
        <div className="num-image one for-desktop"></div>
        <div className="image">
          <img src="https://phil-rextechnologyinc.netdna-ssl.com/img/prescription_image@2x.png" alt="Sign up" />
        </div>
        <div className="title font-bold">
          <span className="num-image"></span>
          SIGN UP
        </div>
        <div className="subtitle">PillCycle accepts donations from pharmacies, individual donors, medical facilities,
        and long term healthcare facilities. Medications donated to PillCycle are screened and
        evaluated to ensure continued effectiveness and purity.</div>
      </div>
        </div>
        <div className="col-md-4">
        <div className="item">
          <div className="num-image two for-desktop"></div>
          <div className="image handle">
            <img src="https://phil-rextechnologyinc.netdna-ssl.com/img/s-pharmacist-image@2x.png" alt="Handle the Rest" />
          </div>
          <div className="title font-bold">
            <span className="num-image two"></span>
            PillCycle HANDLES THE REST
          </div>
          <div className="subtitle">How can you help? Donation boxes can be found across the state or they can be mailed
          to us using the free USPS shipping labels from our site.</div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="item last">
          <div className="num-image three for-desktop"></div>
          <div className="image receive">
            </div>
          <div className="title font-bold">

          </div>
          </div>
      </div>

        <div className="open-sans f4 white tc ma0-l bw1 bl--solid-l b--green6 pv4-l" style={{ flex: 1}}>
          <div className="b--white br3 b--dashed bw1 pv4 mv5 mv0-l center dib-l ph4-l">

          </div>

        </div>
      </div>
      <a href="" className="bg-green dib no-underline open-sans pa3 f4 blue1">
        Find out More
      </a>
    </div>
  );
}

export default HowItWorks;
