/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PassThrough } from 'stream';

export function mapRoute(text: string) {
  return `${text}-section`;
}

export async function* fromReadable(stream: PassThrough) {
  let exhausted = false;
  const onData = () =>
    new Promise((resolve) => {
      stream.once('data', (chunk: any) => {
        resolve(chunk);
      });
    });

  try {
    while (true) {
      const chunk = (await onData()) as any;
      if (chunk === null) {
        exhausted = true;
        break;
      }
      yield chunk;
    }
  } finally {
    if (!exhausted) {
      stream.destroy();
    }
  }
}

export function streamAsyncIterator(stream: PassThrough) {
  // Get a lock on the stream:
  //   const reader = stream.getReader();

  return {
    [Symbol.asyncIterator]() {
      return fromReadable(stream);
    },
  };
}
