import pino from 'pino';
import { LOG_LEVEL, NAME, IS_PROD } from '../../config/app.config';

export const options = {
  name: NAME,
  level: LOG_LEVEL,
  prettyPrint: !IS_PROD,
};

export const logger = pino(options);

export default logger;
