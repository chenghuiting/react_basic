import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from 'react-redux'

// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
