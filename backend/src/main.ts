import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger';

require('dotenv').config();
const port = (process.env.PORT! as unknown as number) || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap()
  .then(() => logger.log(`Started on port ${port}`))
  .catch((err) => {
    logger.error(err);
  });
