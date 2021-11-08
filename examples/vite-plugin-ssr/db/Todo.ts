import { data } from './data'
import { UserId } from './User'

export { TodoModel }
export type { TodoItem }

type TodoItem = {
  text: string
}

class TodoModel {
  static add(userId: UserId, todoItemNew: TodoItem) {
    const todoItems = this._init(userId)
    todoItems.push(todoItemNew)
  }
  static getAll(userId: UserId) {
    const todoItems = this._init(userId)
    return todoItems
  }
  static deleteAll(userId: UserId) {
    const todoItems = this._init(userId)
    todoItems.length = 0
  }
  static _init(userId: UserId) {
    data.todoLists[userId] = data.todoLists[userId] || []
    return data.todoLists[userId]
  }
}
