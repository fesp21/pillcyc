import React from 'react';

export const Organizers = () => {
  return (
    <div className="mw80 center tc">
      <h2 className="eau-book white ttu f-26 mb4 dib-l tl-l w-25-l">

        <span className="eau-bold">Led</span> by
      </h2>
      <div className="mt3-l flex items-center justify-center flex-column flex-row-l">
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/juan.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Frank Staine-Pyne
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/cathe.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Brandon Fix
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/pony.png')} alt="" className="br-100 w4 h4 cover"/>
          <p className="eau-book blue1 tc ttu lh-copy b">
            Valeria Garcia
          </p>
        </div>

      </div>
    </div>
  );
}

export default Organizers;
