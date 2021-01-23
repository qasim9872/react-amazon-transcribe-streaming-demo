import {
  TranscribeStreamingClient,
  StartStreamTranscriptionCommand,
} from '@aws-sdk/client-transcribe-streaming';

import MicrophoneStream from 'microphone-stream';
import { Readable } from 'stream';

class TranscribeController {
  private stream: Readable | null;

  constructor() {
    this.stream = null;
  }

  async init() {
    this.stream = new MicrophoneStream({});
  }
}

export default TranscribeController;
