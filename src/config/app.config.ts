const { env } = process;

export const { NODE_ENV, REACT_APP_NAME, REACT_APP_LOG_LEVEL } = env;
export const IS_PROD = NODE_ENV === 'production';

export const NAME = REACT_APP_NAME || 'myvoicebot-app';
export const LOG_LEVEL = REACT_APP_LOG_LEVEL || 'info';
