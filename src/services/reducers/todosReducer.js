import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/constants";

const initialTodosState = {
    isLoading: false,
    error: null,
    todos: [],
}
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading: true,
                todos: action.payload,
            };
    
        default:
            return state;
    }

}

export default todosReducer;