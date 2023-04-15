import React from 'react'
import Main from './Body Components/Main';
import Nums from './Body Components/Nums';
import Katana from './Body Components/Katana';
import RSAR from './Body Components/RSAR';
import FeatureAudit from './Body Components/FeatureAudit';

const Body = () => {
  return (
    <div>
      <Main />
      <Nums />
      <Katana />
      <FeatureAudit />
      <RSAR />
    </div>
  )
}

export default Body;