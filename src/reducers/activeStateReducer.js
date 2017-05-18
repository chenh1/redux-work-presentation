import initialState from './initialState';

//If the action which is triggered is 'CHANGE_FROM_CHILD', in other
//words, if passedStateFromChild (in the action) is called, then
//the new state will be pushed to the store to be retrieved in
//Home.js. If the action has no "type" property, the default state
//gets returned and pushed to store. We want to break parts of the
//initial state down relevant only to what's being managed by the
//given reducer so we're not tossing in the whole state to any
//component subscribing to the store. If we don't, we're defeating
//one of the main purposes of Redux, which is to reduce props
//from being passed down to child components that don't need them.

export default function activeStateReducer(state = initialState.passedToChild, action) {
    switch(action.type) {
        case 'CHANGE_FROM_CHILD':
            return action.passedState;

        default:
            return state;
    }
}