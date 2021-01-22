import { Layout } from '../components/app/layouts';
import { Wrapper } from '../components/app/wrappers';

type LayoutWithWrapper = Layout & Wrapper;

export interface SiteConfig {
  sections: LayoutWithWrapper[];
}

const site: SiteConfig = {
  sections: [
    {
      id: 'heading',
      layoutName: 'Dynamic',

      wrap: 'Box',

      components: [
        {
          componentName: 'Heading',
          text: 'Amazon Transcribe Demo!',
        },
      ],
    },
  ],
};

export default site;
