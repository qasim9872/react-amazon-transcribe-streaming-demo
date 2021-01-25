/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { Transform, TransformCallback } from 'stream';
import MicrophoneStream from 'microphone-stream';

export default class EncodePcmStream extends Transform {
  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    const input = MicrophoneStream.toRaw(chunk);
    let offset = 0;
    const buffer = new ArrayBuffer(input.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < input.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, input[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    this.push(Buffer.from(buffer));
    callback();
  }
}
