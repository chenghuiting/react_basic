import React, { Component } from 'react'
// withRouter是一个函数不是一个组件，所以引入时首字母要小写
import { withRouter } from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
    }

    render() {
        console.log('Header组件收到的props是', this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
export default withRouter(Header)