import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input,Button, List} from 'antd';
import store from './store'
// import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'
import { changeInputAction,addItemAction ,deleteItemAction} from "./store/actionCreator";


class TodoList extends Component {
  constructor(props) {
    super(props);
    // 获取store 里面的值。
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this)
  }

  handleInputChange(e) {
    // 改变 store 里面的值。
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    // 派发一个actions
    // 这里有一个很重要的地方，
    // store 只是一个仓库，并没有管理能力，
    // 会把接收到的 action 自动转发给 reducer


    // 引入 actionsCreator, 修改方式，统一管理。
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
    // console.log(e.target.value)
  }

  componentDidMount() {
    store.subscribe(this.storeChange)
  }

  storeChange() {
    // 这时的 通过 store.getState 是最新的当前状态，然后重新渲染 view
    this.setState(store.getState())
  }

  handleAdd() {
    // const action = { type: ADD_ITEM};
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    // const action = { type: DELETE_ITEM, payload: index }
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render() { 
    return ( 
      <div>
        <div>
          <Input 
            style={{ width: '250px'}}
            placeholder={this.state.inputValue}
            value={this.state.inputValue}
            onChange={(event) => this.handleInputChange(event)}
          />
          <Button type='primary' onClick={() => this.handleAdd()}> 增加</Button>
          <div style={{ margin: '10px', width: '300px'}}>
            <List
              bordered
              dataSource={this.state.list}
              renderItem={(item, index) => (
                <List.Item onClick={(index) => this.deleteItem(index)}>{item}</List.Item>
              )}
            >
            </List>
          </div>
        </div>
      </div>
     );
  }

  
}
 
export default TodoList;