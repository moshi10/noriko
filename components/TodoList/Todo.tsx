import { createStyles, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons';
import { forwardRef } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import { Todo as TodoType } from './types';

interface Props {
  todo: TodoType;
  updateTodo?: (id: number, completed: boolean) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

const useStyles = createStyles((theme) => ({
  todo: {
    padding: theme.spacing.md,
    borderColor: theme.colors.gray[5],
    borderStyle: 'solid',
    borderRadius: theme.radius.md,
  },
}));

export const Todo = forwardRef<HTMLLIElement, Props>(
  ({ todo, updateTodo, draggableProps, dragHandleProps }, ref) => {
    const classes = useStyles();
    return (
      <List.Item
        ref={ref}
        {...draggableProps}
        {...dragHandleProps}
        icon={
          todo.isCompleted ? (
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          ) : null
        }
        onClick={() => updateTodo?.(todo.id, !todo.isCompleted)}
        className={classes.classes.todo}
      >
        <div>{todo.description}</div>
      </List.Item>
    );
  }
);
