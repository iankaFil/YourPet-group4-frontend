import React, { useState, useEffect } from 'react';
import Section from 'Components/Section';
import Container from 'Components/Container/';
import Background from 'Components/Background/Background';
import MainImageDesktop from '../../Shared/images/PetsHomePage/Pets-desktop.png';
import MainImageMobile from '../../Shared/images/PetsHomePage/Pets-mobile.png';
import MainImageDesktopRetina from '../../Shared/images/PetsHomePage/Pets-desktop@2x.png';
import MainImageMobileRetina from '../../Shared/images/PetsHomePage/Pets-mobile@2x.png';
import css from './HomePage.module.css';

const HomePage = () => {
  const [deviceType, setDeviceType] = useState('');
  const [isRetina, setIsRetina] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 310 && screenWidth <= 760) {
        setDeviceType('mobile');
      } else if (screenWidth > 761 && screenWidth <= 1279) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    const checkIsRetina = () => {
      if (window.matchMedia) {
        const mediaQuery = window.matchMedia(
          'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
        );
        setIsRetina(mediaQuery && mediaQuery.matches);
      }
    };

    checkDeviceType();
    checkIsRetina();

    window.addEventListener('resize', checkDeviceType);
    window.addEventListener('resize', checkIsRetina);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
      window.removeEventListener('resize', checkIsRetina);
    };
  }, []);

  const getImageSource = () => {
    switch (deviceType) {
      case 'mobile':
        return {
          backgroundImage: `url(${
            isRetina ? MainImageMobileRetina : MainImageMobile
          })`,
          minWidth: '474px',
          minHeight: '450px',
          display: 'block',
          transform: 'translate(-50%, -50%)',
          top: '32%',
          left: '45%',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          zIndex: '-1',
        };
      case 'tablet':
        return {
          backgroundImage: `url(${
            isRetina ? MainImageDesktopRetina : MainImageDesktop
          })`,
          width: '985px',
          height: '925px',
          display: 'block',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          zIndex: '-1',
          transform: 'translate(-50%, -50%)',
          top: '34%',
          left: '50%',
        };
      case 'desktop':
        return {
          backgroundImage: `url(${
            isRetina ? MainImageDesktopRetina : MainImageDesktop
          })`,
          width: '935px',
          height: '915px',
          display: 'block',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          zIndex: '-1',
          transform: 'translate(-50%, -50%)',
          top: '0',
          left: '65%',
        };
      default:
        return {
          // backgroundImage: `url(${MainImageDesktop})`,
          // width: '100%',
          // height: '100%',
          // display: 'block',
          // transform: 'translate(-50%, -50%)',
          // top: '50%',
          // left: '50%',
          // position: 'absolute',
          // backgroundRepeat: 'no-repeat',
          // zIndex: '-1',
        };
    }
  };

  const imageStyle = getImageSource();

  return (
    <Section className={css.section}>
      <Background />
      <Container className={css.wrapp}>
        <h1 className={css.title}>
          Take good care {'\n'}of your small {'\n'}pets
        </h1>
        <div className={css.imgWrap} style={imageStyle}></div>
      </Container>
    </Section>
  );
};

export default HomePage;
