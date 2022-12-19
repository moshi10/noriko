
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';

import { Todo } from './types'

interface Props {
    todos: Todo[]
    updateTodo?: (id: number, isCompleted: boolean) => void
}

export const TodoList: React.FC<Props> = ({ todos, updateTodo }) => {
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
            {todos.length > 0 ? todos.map((item) => (
                <List.Item key={item.id} icon={item.isCompleted ? <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCircleCheck size={16} />
                </ThemeIcon> : null} onClick={() => updateTodo?.(item.id, !item.isCompleted)}>
                    {item.description}
                </List.Item>
            )) : null}
        </List>
    )
}
