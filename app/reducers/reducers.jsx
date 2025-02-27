var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};

export var showCompletedReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export var todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    todoText: action.todoText,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if(todo.id === action.id) {
                    var nextCompleted = !todo.completed;
                    return {
                        ...todo,
                        completed: nextCompleted,
                        completedAt: nextCompleted ? moment().unix() : undefined
                    };
                }
                return todo.completed === action.completed;
            });
        default:
            return state;
    }
};