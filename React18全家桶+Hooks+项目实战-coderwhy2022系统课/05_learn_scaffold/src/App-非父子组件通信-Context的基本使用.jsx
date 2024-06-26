// 非父子组件通信-Context的基本使用

import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class App extends Component {
  render() {
    return (
      <div>
        {/* 第二步操作：通过 ThemeContext 中 Provider 中的 value 属性为对应组件的后代传值*/}
        <UserContext.Provider value={{nickName: '11',age: 22}}>
          <ThemeContext.Provider value={{ color: 'red', size: 10 }}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App