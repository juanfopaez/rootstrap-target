import React from 'react';

import Iphone6 from 'assets/images/i6.svg';
import AppStoreIcon from 'assets/images/appstore.svg';
import SocialIcon from 'assets/images/social.svg';
import Play from 'assets/images/play.svg';

const InfoSection = () => (
  <div className="infoSection">
    <div>
      <img src={Play} alt="Play" />
      <img src={Iphone6} alt="Iphone 6 app example" />
    </div>

    <div>
      <img src={AppStoreIcon} alt="App Store" />
      <img src={SocialIcon} alt="Social" />
    </div>
  </div>
);

export default InfoSection;
