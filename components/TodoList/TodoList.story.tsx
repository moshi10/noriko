import { useState } from 'react';

import { TodoList } from './TodoList';

import { Todo } from './types';

export default {
  title: 'TodoList',
};

const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const Usage = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      description: '寝る😴',
      isCompleted: false,
    },
    {
      id: 2,
      description: '起きる🌞',
      isCompleted: true,
    },
    {
      id: 3,
      description: '朝ごはん🍳',
      isCompleted: false,
    },
    {
      id: 4,
      description: '家出る🛫',
      isCompleted: false,
    },
    {
      id: 5,
      description: '働く🍷',
      isCompleted: true,
    },
  ]);

  const updateTodo = (id: number, isCompleted: boolean) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return;

    setTodos([
      ...todos.slice(0, todoIndex),
      { ...todos[todoIndex], isCompleted },
      ...todos.slice(todoIndex + 1),
    ]);
  };

  const onDragEnd: React.ComponentProps<typeof TodoList>['onDragEnd'] = (result) => {
    if (!result.destination) return;

    const newTodos = reorder(todos, result.source.index, result.destination.index);
    setTodos(newTodos);
  };

  return <TodoList todos={todos} updateTodo={updateTodo} onDragEnd={onDragEnd} />;
};
