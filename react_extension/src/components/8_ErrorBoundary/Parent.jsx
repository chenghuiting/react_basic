import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        hasError: '', //用于标识子组件是否产生错误
    }

    // 当Parent的子组件出现报错的时候，会触发 getDerivedStateFromError 调用，并携带错误信息； 
    static getDerivedStateFromError(error) {
        console.log('错误信息', error);
        return { hasError: error }
    }
    // 如果组件在渲染过程中由于子组件出现报错，调用componentDidCatch
    componentDidCatch() {
        console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
            </div>
        )
    }
}
