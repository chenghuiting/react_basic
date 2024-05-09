import { ADD_PERSON } from '../constant'

// 初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 12 }]
export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            /*
            此处不可以这样写，这样会导致preState被改写了，
            personReducer就不是纯函数了。
            不是纯函数就导致redux不能识别状态的改变。
            */
            // preState.unshift(data)  
            return [data, ...preState]
        default:
            return preState
    }
}