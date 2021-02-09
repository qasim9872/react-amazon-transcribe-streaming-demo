/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { Transform, TransformCallback } from 'stream';
import { encodePcm } from './audio-helpers/encode-pcm';

export default class EncodePcmStream extends Transform {
  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    const buffer = encodePcm(chunk);
    this.push(buffer);
    callback();
  }
}
