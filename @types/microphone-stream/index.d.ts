declare module 'microphone-stream' {
  import { Readable } from 'stream';

  export declare class MicrophoneStream extends Readable {
    static toRaw(chunk: any): Float32Array;

    constructor(opts?: {
      stream?: MediaStream;
      objectMode?: boolean;
      bufferSize?: null | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384;
      context?: AudioContext;
    });

    public context: AudioContext;

    setStream(mediaStream: MediaStream): Promise<void>;
    stop(): void;
    pauseRecording(): void;
    playRecording(): void;
  }

  export default MicrophoneStream;
}
