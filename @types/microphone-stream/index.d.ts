declare module 'microphone-stream' {
  import { Readable } from 'stream';

  export declare class MicrophoneStream extends Readable {
    constructor(opts?: {
      stream?: Readable;
      objectMode?: boolean;
      bufferSize?: null | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;
      context?: AudioContext;
    });

    setStream(mediaStream: Readable): void;
    stop(): void;
    pauseRecording(): void;
    playRecording(): void;
  }

  export default MicrophoneStream;
}
