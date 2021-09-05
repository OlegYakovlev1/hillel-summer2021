import { Filter } from "../../utils/Enums";

export const FILTER_SET = "FILTER_SET";
export const TODO_CREATE = "TODO_CREATE";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_UPDATE_TITLE = "TODO_UPDATE_TITLE";
export const TODO_TOGGLE = "TODO_TOGGLE";
export const TODO_TOGGLE_ALL = "TODO_TOGGLE_ALL";

const initialState = {
    todos: [],
    activeFilter: Filter.all
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case(FILTER_SET): 
            return {...state, activeFilter: payload};
        case(TODO_CREATE): 
            return {...state, todos: [...state.todos, payload]};
        case(TODO_TOGGLE): 
            return {
                ...state,
                todos: state.todos.map(
                    item =>
                    item.id === payload ?
                    {...item, completed: !item.completed} :
                    item
                )};
        case(TODO_TOGGLE_ALL): 
            return {
                ...state,
                todos: state.todos.map(item => ({...item, completed: payload}))
            };
        case(TODO_UPDATE_TITLE): 
            return {
                ...state,
                todos: state.todos.map(
                    item =>
                      item.id === payload.id ?
                      {...item, title: payload.title} :
                      item
                  )
            };
        case(TODO_DELETE): 
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            };
        default:
            return state;
    }
}

export default reducer;