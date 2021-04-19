const defaultState = {
  inputValue: 'write something',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
} 

// state 一旦有变化， store 就会调用监听函数。

export default (state = defaultState, actions) => {
  // reducer 里面只能接收 state， 不能改变state
  if(actions.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = actions.value;
    return newState
  }

  if(actions.type === 'ADD_ITEM') {
    let nextState = JSON.parse(JSON.stringify(state));
    nextState.list.push(nextState.inputValue);
    nextState.inputValue = '';

    return nextState
  }

  if(actions.type === 'DELETE_ITEM') {
    //  把原来的 state 拷贝一份
    let nextState = JSON.parse(JSON.stringify(state));
    nextState.list.splice(actions.payload, 1)

    return nextState

  }
  return state
}




/**
 * 简述 redux flow
 * 用户 dispatch action eg: onClick
 * 然后 store 会自动调用 Reducer, 并且传入两个参数，当前 state, 和收到的action. reducer 会返回新的 state
 * state 一旦有变化， reducer 就会返回新的state.
 * 
 * 
 * 1. action creators eg: onClick
 * 2. store 自动调用 Reducer, 并返回当前新的 state
 * 3. state 一旦有变化，store 就可以调用监听函数，得到最新的状态。
 * 4. 组件重新设置 setState, view 重新渲染。
*/

