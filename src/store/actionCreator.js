import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from "./actionTypes";

// 返回一个 action
export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value,
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  value: index,
})