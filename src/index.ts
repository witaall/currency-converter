import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { mergeJsonFiles } from './api-docs-config';
require('express-async-errors');

// routes
import currencyConversionRouter from './routes/currency-conversion';
// error handler
import errorHandlerMiddleware from './middleware/error-handler';
import notFoundMiddleware from './middleware/not-found';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(mergeJsonFiles('docs')));
app.use('/api/v1/currency-conversion', currencyConversionRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.NODE_ENV === 'test'
  ? (process.env.TEST_PORT ?? 7778)
  : (process.env.PORT ?? 7777);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;