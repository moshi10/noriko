import { List, ThemeIcon } from '@mantine/core';
import { IconCircleDashed } from '@tabler/icons';
import { useState } from 'react';
import { Todo } from './Todo';

import { Todo as TodoType } from './types';

export default {
  title: 'Todo',
};

export const Usage = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      description: '寝る😴',
      isCompleted: false,
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

  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleDashed size={16} />
        </ThemeIcon>
      }
    >
      <Todo todo={todos[0]} updateTodo={updateTodo} />
    </List>
  );
};
