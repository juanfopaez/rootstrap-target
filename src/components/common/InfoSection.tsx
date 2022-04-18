import React from 'react';

import { i6, play, appStore, social } from 'assets';

const InfoSection = () => (
  <div className="infoSection">
    <div>
      <img src={play} alt="Play" />
      <img src={i6} alt="Iphone 6 app example" />
    </div>

    <div>
      <img src={appStore} alt="App Store" />
      <img src={social} alt="Social" />
    </div>
  </div>
);

export default InfoSection;
