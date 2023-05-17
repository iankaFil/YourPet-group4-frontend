import css from './NotFound.module.css';
// import myImage from '../../Shared/images/NotFoundImg/notFound-desktop@2x.png';
import Button from 'Components/Button/Button';
import { PawIcon } from '../SvgIcons/PawIcon';
import Section from 'Components/Section/Section';

export const NotFound = () => {
  return (
    <Section className={css.background}>
      <main style={{ textAlign: 'center' }}>
        <div className={css.div}>
          <p className={css.text}>Ooops! This page not found :(</p>
          {/* <img src={myImage} alt="404" width="822px" height="360px" /> */}
          <div className={css.imgWrap}></div>
          <Button className={css.button}>
            To main page
            <PawIcon id="svg" />
          </Button>
        </div>
      </main>
    </Section>
  );
};
