import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}

                                    {/* 向路由组件传递 search 参数*/}
                                    {/* <Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: messageObj.id, title: messageObj.title } }}>{messageObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 注册路由 */}
                {/* 声明接收 params 参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search 参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* state 参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}
