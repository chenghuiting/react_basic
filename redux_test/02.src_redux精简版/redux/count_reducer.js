/*
    1.该文件是用于创建一个为 Count 组件服务的 reducer ，reducer的本质就是一个函数；
    2.reducer函数会接到两个参数，分别为：之前的状态（preState）,动作对象（action）
*/

const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
    console.log(preState, action);
    // 从 action 对象中获取：type  data
    const { type, data } = action
    // 根据 type 决定如何加工数据
    switch (type) {
        case 'increment': //如果是加
            return preState + data
        case 'decrement': //如果是减
            return preState - data
        default:
            return preState
    }
}
