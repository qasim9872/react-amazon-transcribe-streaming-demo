import { Layout } from '../components/app/layouts';
import { Wrapper } from '../components/app/wrappers';

type LayoutWithWrapper = Layout & Wrapper;

export interface SiteConfig {
  sections: LayoutWithWrapper[];
}

const site: SiteConfig = {
  sections: [
    {
      id: 'header',
      layoutName: 'Dynamic',

      wrap: 'Box',
      heading: 'Amazon Transcribe Demo!',

      components: [],
    },

    {
      id: 'config-manager',
      layoutName: 'Dynamic',

      wrap: 'Box',
      horizontal: true,

      components: [
        {
          componentName: 'DynamicTranscribeForm',
          fields: ['Access Key', 'Secret Access Key'],
        },
        {
          componentName: 'DynamicTranscribeForm',
          fields: ['language', 'region'],
        },
      ],
    },

    {
      id: 'streaming',
      layoutName: 'Dynamic',

      wrap: 'Box',
      heading: 'Streaming',

      components: [{ componentName: 'StreamingView' }],
    },
  ],
};

export default site;
