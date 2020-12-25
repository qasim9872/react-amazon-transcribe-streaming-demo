import Hero from './Hero';
import About from './About';
import Blank from './Blank';
import Section from '../../interfaces/Section';

const LayoutMap = {
  hero: Hero,
  about: About,
  blank: Blank,
};

const buildLayout: React.FC<Section> = (details) => {
  switch (details.type) {
    case 'hero':
      return LayoutMap[details.type](details);
    case 'about':
      return LayoutMap[details.type](details);
    case 'blank':
      return LayoutMap[details.type](details);
    default:
      throw new Error('invalid type');
  }
};

export default buildLayout;
