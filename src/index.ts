import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { createApp } from './app.js';
import { listen } from './server.js';
import { logger } from './utils/logger.js';

dotenv.config();

async function bootstrap() {
  await connectDB();
  const app = await createApp();
  listen(app);
}

bootstrap().catch((err) => {
  logger.error('❌ Server startup error:', err);
  process.exit(1);
});