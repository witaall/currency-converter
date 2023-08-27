# Project Overview

匯率轉換服務

## Setup & Installation

專案要啟動需要先安裝[NodeJS](https://nodejs.org/en)，開發環境版本為`18.17.1`

1. 進入專案後執行以下指令安裝所有依賴套件

    ``` bash
    npm i
    ```

2. 在專案目錄新增`.env`來設定環境變數(請參考 .env.example)，如未設定`PORT`，服務port預設為`7777`
3. 啟動服務指令:

    ``` bash
    npm run start
    ```

## Test (API單元測試)

1. 安裝所有依賴套件

    ``` bash
    npm i
    ```

2. 在專案目錄新增`.env`來設定環境變數(請參考 .env.example)，如未設定`TEST_PORT`，服務port預設為`7778`

3. 測試指令:

    ``` bash
    npm run test
    ```

    目前測試項目包含:

      1. 貨幣參數測試
      2. 輸入金額參數測試
      3. 匯率轉換測試

## API Document

  在本機啟動服務後，可至`http://localhost:{PORT}/api-docs`查看API文件

  預設API文件[按此](http://localhost:7777/api-docs)

## Directories & Files

``` text
project
|   package.json: 套件管理
|   package-lock.json: 套件版本管理
|   .gitignore: git忽略檔案
|   .env.example: 環境變數範例
|   .eslintrc.js: lint設定
|   tsconfig.json: typescript設定
|   README.md: 專案說明文件
|
|---src
|   |   controllers: 處理API邏輯
|   |   routes: 路由設定
|   |   errors: 自定義錯誤
|   |   middleware: 自定義中介層
|   |   validations: 輸入參數驗證
|   |   index.ts: 主程式進入點
|   |   api-docs.ts: API文件設定
|
|---node_modules: 套件
|
|---docs: API文件
|
|---test: 測試程式(API單元測試)
|
|---dist: 編譯後的程式
```
