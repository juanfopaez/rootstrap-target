import React from 'react';

import Iphone6 from 'assets/images/i6.svg';
import AppStoreIcon from 'assets/images/appstore.svg';
import SocialIcon from 'assets/images/social.svg';
import Play from 'assets/images/play.svg';

import styles from 'styles/components/common/InfoSection.module.scss';

const InfoSection = () => (
  <div className={styles.infoSection}>
    <div className="phone">
      <img src={Play} alt="Play Icon" />
      <img src={Iphone6} alt="Iphone 6 app example" />
    </div>

    <div className="social">
      <img src={AppStoreIcon} alt="App Store icon" />
      <img src={SocialIcon} alt="Social icon" />
    </div>
  </div>
);

export default InfoSection;
