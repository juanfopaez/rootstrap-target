import React from 'react';

import { useSession } from 'hooks';
import { useNavigate } from 'react-router-dom';

import { Button, InfoSection, PageWrapper } from 'components/common';

import { smilies } from 'assets';
import routes from 'routes/routes';

const About = () => {
  const { authenticated } = useSession();
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (authenticated) {
      navigate(routes.index.path, { replace: true });
    }
    navigate(routes.signIn.path);
  };

  return (
    <PageWrapper
      left={
        <div className="aboutWrapper">
          <img src={smilies} alt="Target mvd logo" />
          <h2>What&apos;s TARGET?</h2>
          <p>
            Cat ipsum dolor sit amet, scratch the furniture. Spit up on light
            gray carpet instead of adjacent linoleum cough furball yet lounge in
            doorway but gnaw the corn cob and sit by the fire rub face on
            everything. Flop over under the bed, or immediately regret falling
            into bathtub but swat turds around the house. All of a sudden cat
            goes crazy bleghbleghvomit my furball really tie the room together
            for destroy couch. Need to chase tail inspect anything brought into
            the house, yet sleep on dog bed, force dog to sleep on floor. Cat
            snacks. Eat owner&apos;s food nap all day, for chase imaginary bugs,
            yet throwup on your pillow. Bleghbleghvomit my furball really tie
            the room together sun bathe attack the dog then pretend like nothing
            happened Gate keepers of hell and destroy couch, so find empty spot
            in cupboard and sleep all day groom yourself 4 hours - checked, have
            your beauty sleep 18 hours - checked, be fabulous for the rest of
            the day - checked!.
          </p>
          <Button onClick={handleOnClick}>Get started!</Button>
        </div>
      }
      right={<InfoSection />}
    />
  );
};

export default About;
