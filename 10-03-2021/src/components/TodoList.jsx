import { useCallback, useEffect, useRef, useState } from 'react'
import { v4 as randomUUID } from 'uuid'
import { removeByIndex } from '../utils/removeByIndex'
import ItemState from './ItemState'
import Todo from './Todo'

export default function TodoList() {
  const [itemsLeft, setItemsLeft] = useState()
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || []
  })

  const todoRef = useRef(null)
  const checkboxRef = useRef(null)

  const handleTodo = useCallback((event) => {
    event.preventDefault()
    const dataTodo = {
      id: randomUUID(),
      description: todoRef.current.value,
      isChecked: checkboxRef.current.checked
    }
    setTodos((oldTodo) => {
      return [...oldTodo, dataTodo]
    })
    todoRef.current.value = ''
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    setItemsLeft(todos.length)
  }, [todos])

  return (
    <main className='main__todolist'>
      <div className='main__todolist-createTodo--field'>
        <form onSubmit={handleTodo}>
          <input
            type='checkbox'
            name='todoChecker'
            className='form__checkerInput'
            ref={checkboxRef}
          />
          <input
            type='text'
            name='todoText'
            className='form__textInput'
            placeholder='Create a new Todo...'
            minLength='10'
            ref={todoRef}
          />
        </form>
      </div>
      <ul className='section__todolist-list_items'>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              description={todo.description}
              isChecked={todo.isChecked}
              handleCompleted={(event) => {
                const oldTodos = [...todos]
                oldTodos.map((oldTodo) => {
                  if (oldTodo.id === todo.id) {
                    oldTodo.isChecked = event.target.checked
                  }
                  return oldTodo
                })
                setTodos(oldTodos)
              }}
              handleRemove={() => {
                const oldTodos = [...todos]
                removeByIndex(oldTodos, index)
                setTodos(oldTodos)
              }}
            />
          )
        })}

        <li className='section__todolist-list_items--item'>
          <div className='section__todolist-list_items--item---container space_between'>
            <p className='item-container_remainingItems'>
              {itemsLeft} items left
            </p>
            <ItemState isState='' />
          </div>
        </li>
      </ul>
    </main>
  )
}
