import React from 'react';

const Programs = () => {
  return (
    <div className="flex flex-column flex-row-l items-center justify-between">
      <div className="pv5 ph4 pr0-l mw7-l">
        <h2 className="eau-book blue2 ttu f-2 f-1-l">
          <span className="eau-bold">Programs</span>
        </h2>
        <p className="open-sans blue1 lh-copy f4-l">
        The Washington Reuse Pharmacy puts free and low cost medications directly in
        the hands of patients in need. As a non-profit safety net pharmacy, we are bringing
        several national, regional, and state safety net programs under one roof to
        serve the unique pharmacy needs of Federally Qualified Health Centers, Free Clinics,
        and other safety net providers.

        Often, a patient in need of assistance will qualify for multiple safety net medication
        programs – however each program has a limited prescription formulary and a unique set of
        qualifications. Managing all of these medication programs can be an administrative nightmare
        for a clinic or pharmacy. Let us do it for you. We will fill prescriptions from a portfolio of
         safety net programs to leverage limited resources in the most effective manner possible.


          <br />
          <br />
          The prescriptions will be filled at our pharmacy in Tacoma and then shipped directly to
          your clinic or even your patient’s home. Please give us a call to see how we can fulfill
          your pharmacy needs.
        </p>
      </div>
      <img src={require('../../src/assets/images/drugscy.jpeg')} alt="ScaleConf Colombia Scholarships" className="w-100 w-40-l dib-l"/>
    </div>
  );
}

export default Programs;
