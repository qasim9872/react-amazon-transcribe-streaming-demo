import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

import MyReactPortfolio from '../../assets/images/my-react-portfolio.png';
import MyVoiceBot from '../../assets/images/myvoicebot.png';
import AwsTranscribe from '../../assets/images/aws-transcribe.png';
import ArTreasureHunt from '../../assets/images/ar-treasure-hunt.png';
import NeuralQuestionAnsweringSystem from '../../assets/images/neural-question-answering-system.png';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const projects: DynamicLayoutWithBasicWrapper = {
  id: 'projects',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my projects',
  title: 'what i have done?',

  components: [
    {
      componentName: 'ProjectsWrapper',
      projects: [
        {
          componentName: 'ProjectCard',
          title: 'My React Portfolio',
          color: 'green',
          description: 'A config driven, portfolio website written in react.',
          image: MyReactPortfolio,
          link: 'tbc',
          fadeDirection: 'bottom-left',
          tags: ['react'],
        },
        {
          componentName: 'ProjectCard',
          title: 'MyVoiceBot',
          color: 'green',
          link: 'https://www.myvoicebot.co.uk/',
          description:
            'A work in progress - proof of concept for building FAQ voicebots for online sellers',
          image: MyVoiceBot,
          fadeDirection: 'bottom-right',
          tags: ['twilio', 'TypeScript'],
        },
        {
          componentName: 'ProjectCard',
          title: 'AWS Transcribe',
          color: 'green',
          description:
            'an open source npm package for transcribing audio stream using Amazon transcribe',
          image: AwsTranscribe,
          link: 'https://www.npmjs.com/package/aws-transcribe',
          fadeDirection: 'down',
          tags: ['amazon', 'Node.js'],
        },
        {
          componentName: 'ProjectCard',
          title: 'Neural Question Answering System',
          color: 'green',
          description:
            'A system that uses neural machine translation model to convert natural language questions to SPARQL queries and executes them against DbPedia knowledge graph to find an answer',
          image: NeuralQuestionAnsweringSystem,
          link: 'https://github.com/qasim9872/question-answering-system',
          fadeDirection: 'left',
          tags: ['vue.js', 'python'],
        },
        {
          componentName: 'ProjectCard',
          title: 'AR Treasure Hunt Game',
          color: 'green',
          description:
            'An Augmented reality treasure hunt game where the player has to search for clues and nd the treasure',
          image: ArTreasureHunt,
          link: 'https://youtu.be/Ru79aSikuWw',
          fadeDirection: 'right',
          tags: ['unity 3d', 'vuforia ar'],
        },
      ],
    },
  ],
};

export default projects;
