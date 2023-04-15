import React from 'react'
import ens from '../../images/FeaturedAudits/ens.svg'
import y2k from '../../images/FeaturedAudits/y2k.svg'
import golom from '../../images/FeaturedAudits/golom.svg'
import party from '../../images/FeaturedAudits/party.svg'
import vtvl from '../../images/FeaturedAudits/vtvl.svg'
import paladin from '../../images/FeaturedAudits/pladin.svg'
import holograph from '../../images/FeaturedAudits/holograph.svg'
import juicebox from '../../images/FeaturedAudits/juicebox.svg'


const FeatureAudit = () => {
  return (
    <div> 
      <div className='faheadtitle'>Featured Audits*</div>
      <div className="faudits">
        <div className="faetureaudits">
          <div className='fabox'>
            <div className="faicon">
              <img src={ens} alt="ens" />
              <div className="faimgtitle">ENS</div>
            </div>
            <div className="fadesc">ENS is an open source blockchain-based naming protocol</div>
          </div>
          <div className='fabox'>
            <div className="faicon">
              <img src={y2k} alt="y2k" />
              <div className="faimgtitle">Y2K Finance</div>
            </div>
            <div className="fadesc">Y2K Finance is a suite of structured products designed for exotic peg derivatives</div>
          </div>
        </div>

        <div className="faetureaudits">
          <div className='fabox'>
            <div className="faicon">
              <img src={golom} alt="golom" />
              <div className="faimgtitle">Golom</div>
            </div>
            <div className="fadesc">Golom is on a mission to improve the liquidity of NFT markets by offering a decentralised, low cost exchange with most value going back to the users.</div>
          </div>
          <div className='fabox'>
            <div className="faicon">
              <img src={party} alt="Party Dao" />
              <div className="faimgtitle">Party Dao</div>
            </div>
            <div className="fadesc">Party Protocol provides on-chain functionality for group formation, coordination, and distribution. Currently focused on making NFTs multiplayer.</div>
          </div>
        </div>

        <div className="faetureaudits">
          <div className='fabox'>
            <div className="faicon">
              <img src={vtvl} alt="vtvl" />
              <div className="faimgtitle">VTVL</div>
            </div>
            <div className="fadesc">VTVL is building infrastructure to empower web3 token economies by removing the complexities in building custom token management.</div>
          </div>
          <div className='fabox'>
            <div className="faicon">
              <img src={paladin} alt="paladin" />
              <div className="faimgtitle">Paladin</div>
            </div>
            <div className="fadesc">Paladin is a DeFi ecosystem of governance protocols and markets that unlock the value of governance.</div>
          </div>
        </div>

        <div className="faetureaudits">
          <div className='fabox'>
            <div className="faicon">
              <img src={holograph} alt="holograph" />
              <div className="faimgtitle">Holograph</div>
            </div>
            <div className="fadesc">Holograph is a multichain digital asset protocol. .</div>
          </div>
          <div className='fabox'>
            <div className="faicon">
              <img src={juicebox} alt="juicebox" />
              <div className="faimgtitle">Juicebox</div>
            </div>
            <div className="fadesc">The Juicebox protocol is a programmable treasury.</div>
          </div>
        </div>
        <div className="fafoot">*These are some audits that our auditors participated through C4 and Sherlock</div>
      </div>
    </div>
  )
}

export default FeatureAudit;