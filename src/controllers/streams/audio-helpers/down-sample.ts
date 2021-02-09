/* eslint-disable eqeqeq */
export function downSampleBuffer(
  chunk: Buffer,
  sampleRate: number,
  outSampleRate: number,
) {
  if (outSampleRate == sampleRate) {
    return chunk;
  }

  const increment = Int16Array.BYTES_PER_ELEMENT;
  const sampleRateRatio = sampleRate / outSampleRate;
  const newLength = Math.round(chunk.length / sampleRateRatio) * increment;
  const buffer = new ArrayBuffer(newLength);
  const view = new DataView(buffer);

  let offsetResult = 0;
  let offsetBuffer = 0;

  console.log({ sampleRateRatio, originalLength: chunk.length, newLength });

  while (offsetResult < newLength) {
    const nextOffsetBuffer = Math.round(
      (offsetResult + increment) * sampleRateRatio,
    );

    console.log({ offsetResult, offsetBuffer, nextOffsetBuffer });

    let accumulated = 0;
    let count = 0;

    for (
      let i = offsetBuffer;
      i < nextOffsetBuffer && i < chunk.length;
      i += 1
    ) {
      const value = chunk[i];
      accumulated += value;
      count += 1;
      console.log('---->', { accumulated, count, value });
    }

    const s = Math.min(1, accumulated / count);
    console.log({ accumulated, count, s });
    view.setInt16(offsetResult, s, true);

    offsetResult += increment;
    offsetBuffer = nextOffsetBuffer;
  }

  return Buffer.from(buffer);
}
