import React from 'react'
import Main from './Body Components/Main';
import Nums from './Body Components/Nums';
import Katana from './Body Components/Katana';
import Path from './Body Components/Path';
import FeatureAudit from './Body Components/FeatureAudit';
import RSAR from './Body Components/RSAR';
import WWD from './Body Components/WWD';

const Body = () => {
  return (
    <div>
      <Main />
      <Nums />
      <Katana />
      <Path />
      <FeatureAudit />
      <RSAR />
      <WWD />
    </div>
  )
}

export default Body;