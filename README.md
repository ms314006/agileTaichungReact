# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Hi，create-react-app 建立的初始專案直接內建 testing-library 真的太讚了！

請大家 Pull 專案後請先輸入 `npm install` 安裝執行專案所需的套件。

## Unit Test

要執行測試請先執行下方指令：

```
npm run test
```

輸入完後會詢問你要用哪種模式進入測試，直接輸入 `a` 運行所有測試案例即可：

![](https://raw.githubusercontent.com/ms314006/agileTaichungReact/master/img/askTestType.png)

* tests/unit/App.spec.js 是對 Ｒouter 的測試
* tests/unit/Counter.spec.js 是與 Vuex 一起測試

官方 [@testing-library/react](https://github.com/testing-library/react-testing-library) 的測試範例點擊 [這裡](https://github.com/testing-library/react-testing-library#examples) 🙌