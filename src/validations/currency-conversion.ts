import { query } from 'express-validator';
import { Currency, convertInputAmount } from '../controllers/currency-conversion';

export const convertCurrencyValidation = () => [
  query('source')
    .notEmpty()
    .withMessage('source is required')
    .isIn(Object.values(Currency))
    .withMessage('source is invalid'),
  query('target')
    .notEmpty()
    .withMessage('target is required')
    .isIn(Object.values(Currency))
    .withMessage('target is invalid'),
  query('amount')
    .notEmpty()
    .withMessage('amount is required')
    .custom((value: string) => {
      const amount = convertInputAmount(value);
      
      if (!isNaN(amount)) return true;
    })
    .withMessage('amount is invalid'),
];