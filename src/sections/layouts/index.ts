import Section, { SectionType } from '../../interfaces/Section';
import Hero from './Hero';
import About from './About';
import Blank from './Blank';

type SectionLayout = React.FC<Section>;

const SectionMap: {
  [K in SectionType]: SectionLayout;
} = {
  hero: Hero,
  about: About,
  blank: Blank,
};

export default SectionMap;
