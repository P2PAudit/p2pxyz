import React from 'react'
import Main from './Body Components/Main';
import Nums from './Body Components/Nums';
import Katana from './Body Components/Katana';
import Path from './Body Components/Path';
import FeatureAudit from './Body Components/FeatureAudit';
import RSAR from './Body Components/RSAR';

const Body = () => {
  return (
    <div>
      <Main />
      <Nums />
      <Katana />
      <Path />
      <FeatureAudit />
      <RSAR />
    </div>
  )
}

export default Body;