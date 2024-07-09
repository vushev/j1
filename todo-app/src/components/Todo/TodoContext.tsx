import React, { createContext, useContext, useState } from 'react';
import { Todo } from '../../types';


type TodoContextType = {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
};


const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
});


export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
