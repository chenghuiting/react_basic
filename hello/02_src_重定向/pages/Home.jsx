import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
    const [sum, setSum] = useState(1)
    return (
        <div>
            <h3>我是Home的内容</h3>
            {/* 当sum的值为2时自动跳转到 about 页面 */}
            {sum === 2 ? <Navigate to='/about' /> : <h4>当前sum的值是：{sum}</h4>}
            <button onClick={() => setSum(2)}>点我将sum变为2</button>
        </div>
    )
}
