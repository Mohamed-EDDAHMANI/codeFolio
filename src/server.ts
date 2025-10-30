import type express from 'express';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

export function listen(app: express.Application) {
  const PORT = config.port || 4000;

  app.listen(PORT, () => {
    logger.info(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}
