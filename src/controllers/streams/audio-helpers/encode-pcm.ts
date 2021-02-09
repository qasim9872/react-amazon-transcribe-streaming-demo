/* eslint-disable @typescript-eslint/no-explicit-any */
import MicrophoneStream from 'microphone-stream';

export function encodePcm(chunk: any) {
  const input = MicrophoneStream.toRaw(chunk);

  let offset = 0;
  const buffer = new ArrayBuffer(input.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < input.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, input[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }

  return Buffer.from(buffer);
}
