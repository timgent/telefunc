'use client';
export default Page

import { config } from 'telefunc/client'
import { type User } from '../../auth/getUser'
import { TodoList } from '../../components/TodoList'
import { type TodoItem } from '../../database/Todo'
import React from 'react'

const isBrowser = typeof window !== 'undefined'
if (isBrowser) {
  config.telefuncUrl = '/api/_telefunc'
}

type Props = {
  user: User
  todoItemsInitial: TodoItem[]
}

function Page(props: Props) {
  const title = `Tim's to-do list`
  return (
    <>
      <h1>{title}</h1>
      <TodoList todoItemsInitial={[]} />
    </>
  )
}
