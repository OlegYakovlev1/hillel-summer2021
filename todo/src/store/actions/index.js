import { FILTER_SET, TODO_CREATE, TODO_DELETE, TODO_TOGGLE, TODO_TOGGLE_ALL, TODO_UPDATE_TITLE } from "../reducers";

export const updateFilter = (payload) => ({
    type: FILTER_SET,
    payload
})

export const createTodo = (title) => ({
    type: TODO_CREATE,
    payload: {id: Date.now(), title, completed: false}
});

export const toggleTodo = (id) => ({
    type: TODO_TOGGLE,
    payload: id
});

export const toggleAll = (completed) => ({
    type: TODO_TOGGLE_ALL,
    payload: completed
});

export const updateTitle = (id, title) => ({
    type: TODO_UPDATE_TITLE,
    payload: {id, title}
});

export const deleteTodo = (id) => ({
    type: TODO_DELETE,
    payload: id
});