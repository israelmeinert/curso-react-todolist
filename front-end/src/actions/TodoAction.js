
export default function todoAction(state, action){

    switch(action.type) {

        case ('ADD_TODO'):
            return state.concat(action.todo);
        case ('TOOGLE_STATUS'):
            return action.todo.completed = !action.todo.completed
        default :
            return state;
    }
    
    
}