import { List, ThemeIcon } from '@mantine/core';
import { IconCircleDashed } from '@tabler/icons';
import { Todo } from './Todo';

import { Todo as TodoType } from './types';

interface Props {
  todos: TodoType[];
  updateTodo?: (id: number, isCompleted: boolean) => void;
}

export const TodoList: React.FC<Props> = ({ todos, updateTodo }) => (
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
    {todos.length > 0
      ? todos.map((todo) => <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />)
      : null}
  </List>
);
