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
      description: 'ๅฏใ๐ด',
      isCompleted: false,
    },
    {
      id: 2,
      description: '่ตทใใ๐',
      isCompleted: true,
    },
    {
      id: 3,
      description: 'ๆใใฏใ๐ณ',
      isCompleted: false,
    },
    {
      id: 4,
      description: 'ๅฎถๅบใ๐ซ',
      isCompleted: false,
    },
    {
      id: 5,
      description: 'ๅใ๐ท',
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
