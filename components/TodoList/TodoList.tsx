import { List, ThemeIcon } from '@mantine/core';
import { IconCircleDashed } from '@tabler/icons';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from 'react-beautiful-dnd';
import { Todo } from './Todo';

import { Todo as TodoType } from './types';

interface Props {
  todos: TodoType[];
  updateTodo?: (id: number, isCompleted: boolean) => void;
  onDragEnd?: OnDragEndResponder;
}

export const TodoList: React.FC<Props> = ({ todos, updateTodo, onDragEnd = () => {} }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
      {(dropProvided) => (
        <List
          {...dropProvided.droppableProps}
          ref={dropProvided.innerRef}
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
            ? todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                  {(dragProvided) => (
                    <Todo
                      ref={dragProvided.innerRef}
                      draggableProps={dragProvided.draggableProps}
                      dragHandleProps={dragProvided.dragHandleProps}
                      todo={todo}
                      updateTodo={updateTodo}
                    />
                  )}
                </Draggable>
              ))
            : null}
        </List>
      )}
    </Droppable>
  </DragDropContext>
);
