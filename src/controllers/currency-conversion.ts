import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

/**
 * 匯率表 
 */
const Currencies = {
  TWD: {
    TWD: 1,
    JPY: 3.669,
    USD: 0.03281
  },
  JPY: {
    TWD: 0.26956,
    JPY: 1,
    USD: 0.00885
  },
  USD: {
    TWD: 30.444,
    JPY: 111.801,
    USD: 1
  }
};

/**
 * 貨幣種類
 */
enum Currency {
  TWD = 'TWD',
  JPY = 'JPY',
  USD = 'USD',
}

/**
 * 將金額字串轉換成數字
 * @param amount 金額字串
 * @returns 金額數字
 */
const convertInputAmount = (amount: string): number => {
  return Number(amount.replace(/\$|,/g, ''));
};

/**
 * 將數字轉換成金額字串
 * @param amount 金額數字
 * @returns 金額字串
 */
const convertOutputAmount = (amount: number): string => {
  return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

/**
 * 回應訊息
 */
enum ResponseMsg {
  SUCCESS = 'success',
  FAIL = 'fail',
}

/**
 * 轉換貨幣 
 */
const convertCurrency = (req: Request, res: Response) => {
  const source = req.query.source as Currency;
  const target = req.query.target as Currency;
  const amount = req.query.amount as string;

  const exchangeRate = Currencies[source][target];
  const convertedAmount = Math.round(convertInputAmount(amount) * exchangeRate * 100) / 100;

  res.status(StatusCodes.OK).json({
    msg: ResponseMsg.SUCCESS,
    amount: convertOutputAmount(convertedAmount),
  });
};

export {
  Currencies,
  ResponseMsg,
  convertCurrency,
  convertInputAmount, Currency
};
