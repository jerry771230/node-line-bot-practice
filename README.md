# line bot practice
Nodejs 下建立 Line Bot，使用的 Package 如下：

- [express](https://www.npmjs.com/package/express)
- [linebot](https://www.npmjs.com/package/linebot)

## 安裝

    $ npm install linebot express --save


## 設定 `config.json` 檔案，避免機密資訊上傳到 github XD

    $ cp config.sample.json config.json

再依據 Line Bot 的 `Channel ID`、`Channel Secret`、`Channel Access Token` 以及要推送訊息的 Client App User ID 設定到 `config.json` 檔案內
