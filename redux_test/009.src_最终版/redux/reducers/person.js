import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 19 }] //初始化人的列表
export default function personReducer(preState = initState, action) {
    console.log("@@@personReducer");
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            return [data, ...preState]
        default:
            return preState
    }
}