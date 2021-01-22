import Joi from 'joi';
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
          validationSchema: Joi.object({
            accessKey: Joi.string().required(),
            secretAccessKey: Joi.string().required(),
          }),
        },
        {
          componentName: 'DynamicTranscribeForm',
          fields: ['language', 'region', 'sampleRate'],
          validationSchema: Joi.object({
            language: Joi.string().required(),
            region: Joi.string().required(),
            sampleRate: Joi.number().required(),
          }),
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
