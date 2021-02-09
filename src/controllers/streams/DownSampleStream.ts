/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { Transform, TransformCallback } from 'stream';
import logger from '../../utils/logger';
import { downSampleBuffer } from './audio-helpers/down-sample';

export class DownSampleAudio extends Transform {
  private extra: any[];

  private originalSampleRate: number;

  private desiredSampleRate: number;

  constructor(originalSampleRate: number, desiredSampleRate: number) {
    super();
    this.extra = [];
    this.originalSampleRate = originalSampleRate;
    this.desiredSampleRate = desiredSampleRate;

    if (this.desiredSampleRate > this.originalSampleRate) {
      // throw error
      logger.warn(
        'down sampling rate show be smaller than original sample rate',
      );
    } else {
      logger.info(
        `Audio will be down sampled from ${this.originalSampleRate} to ${desiredSampleRate}`,
      );
    }
  }

  _transform(
    originalChunk: any,
    encoding: string,
    callback: TransformCallback,
  ) {
    let chunk = originalChunk;
    try {
      // combine any previous extra's if available with chunk
      if (this.extra.length > 0) {
        chunk = Buffer.concat([this.extra, chunk]);
        this.extra = [];
      }

      if (chunk.length % 2 !== 0) {
        // the up sampling requires the data to be an even number
        // This is because the audio is represented by 2 numbers (2 bytes)
        const offset = chunk.length - 1;
        this.extra = chunk.slice(offset);
        chunk = chunk.slice(0, offset);
      }

      const buffer = downSampleBuffer(
        chunk,
        this.originalSampleRate,
        this.desiredSampleRate,
      );

      this.push(buffer);
      callback();
    } catch (err) {
      logger.error(err);
      logger.error('error down sampling buffer', err);
      throw new Error(`error down sampling buffer: ${err}`);
    }
  }
}
