import React , { useEffect } from 'react'
import Main from './Body Components/Main';
import Nums from './Body Components/Nums';
import Katana from './Body Components/Katana';
import Path from './Body Components/Path';
import FeatureAudit from './Body Components/FeatureAudit';
import RSAR from './Body Components/RSAR';
import WWD from './Body Components/WWD';
import OS from './Body Components/OS';
import KickOff from './Body Components/KickOff';
import Faqsection from './Faq Components/Faqsection';

const KatanaSection = () => {

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleNavLinkClick = async (id) => {
    await delay(100);
    document.getElementById(id).scrollIntoView();
  };

  useEffect(() => {
    handleNavLinkClick("katana");
  }, []);

  return (
    <div>
      <Main />
      <Nums />
      <Katana />
      <Path />
      <FeatureAudit />
      <RSAR />
      <WWD />
      <OS />
      <KickOff />
      <Faqsection />
    </div>
  )
}

export default KatanaSection;