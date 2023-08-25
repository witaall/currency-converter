import express from 'express';
import { convertCurrency } from '../controllers/currency-conversion';
import { convertCurrencyValidation } from '../validations/currency-conversion';
import validationErrorHandlerMiddleware from '../middleware/validation-error-handler';

const router = express.Router();

router.get(
  '/',
  convertCurrencyValidation(),
  validationErrorHandlerMiddleware,
  convertCurrency
);

export default router;