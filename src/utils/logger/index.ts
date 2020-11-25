import pino from 'pino';
import { LOG_LEVEL, NAME, IS_PROD } from '../../config/app.config';

const options = {
  name: NAME,
  level: LOG_LEVEL,
  prettyPrint: !IS_PROD,
};

export default pino(options);
