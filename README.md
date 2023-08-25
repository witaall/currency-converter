# Project Overview

匯率轉換服務

## Setup & Installation

專案要啟動需要先安裝[NodeJS](https://nodejs.org/en)，開發環境版本為`18.17.1`

1. 進入專案後執行以下指令安裝所有依賴套件

    ``` bash
    npm i
    ```

2. 環境變數設定 (請參考 .env.example)，如未設定`PORT`，服務port預設為`7777`
3. 啟動服務指令:

    ``` bash
    npm run start
    ```

## Test

1. 安裝所有依賴套件

    ``` bash
    npm i
    ```

2. 環境變數設定 (請參考 .env.example)，如未設定`TEST_PORT`，服務port預設為`7778`

3. 測試指令:

    ``` bash
    npm run test
    ```

目前測試項目包含:

* 貨幣參數測試
* 輸入金額參數測試
* 匯率轉換測試

## API Document

  在本機啟動服務後，可至`http://localhost:{PORT}/api-docs`查看API文件

## Directories & Files

* src/
  * controllers: 處理API邏輯
  * routes: 路由設定
  * errors: 自定義錯誤
  * middleware: 自定義中介層
  * validations: 輸入參數驗證
  * index.ts: 主程式進入點
  * api-docs.ts: API文件設定
* docs: API文件
* test: 測試程式
* .env.example: 環境變數範例
* .eslintrc.js: lint設定
* tsconfig.json: typescript設定
* package.json: 套件管理
* package-lock.json: 套件版本管理
