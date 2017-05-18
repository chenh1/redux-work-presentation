import initialState from './initialState';

export default function counterStateReducer(state = initialState.passedToChild2, action) {
    switch(action.type) {
        case 'CHANGE_FROM_CHILD_2':
            return action.passedState;

        default:
            return state;
    }
}