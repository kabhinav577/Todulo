import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  todos: [],
};

export const authSlice = createSlice({
  name: 'todoAuth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setTodos: (state, action) => {
      state.todos = action.payload.todos;
    },
    setTodo: (state, action) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.todo.id) return action.payload.todo;

        return todo;
      });
      state.todos = updatedTodos;
    },
  },
});

export const { setMode, setLogin, setLogout, setTodos, setTodo } =
  authSlice.actions;

export default authSlice.reducer;
