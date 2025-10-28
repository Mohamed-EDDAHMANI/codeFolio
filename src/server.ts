import http from 'http';
import type express from 'express';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

export function listen(app: express.Application) {
  const httpServer = http.createServer(app);
  const PORT = config.port || 4000;

  httpServer.listen(PORT, () => {
    logger.info(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });

  return httpServer;
}