//This action, "passedStateFromChild", is mapped in Home.js
//as a prop of the component, "Home". Think of this action as
//a function of Home which changes its state. Instead of that
//function living in the Home class, it lives here. My logic
//which checks whether or not "active" state is on is in Home.js.
//It passes the new state into this action, which is picked up
//in the reducer and returned as the new state.

export function triggerActiveStateFromChild(passedState) {
    return {type:'CHANGE_FROM_CHILD', passedState}
}

export function apiCallActive() {
    return function(dispatch) {
        return fetch('http://howard-chen.com/test.json', {
            method: 'get'
        }).then((res) => {
            return res.json();
        }).then((testJson) => {
            console.log(testJson.passedToChild);
            dispatch(triggerActiveStateFromChild(testJson.passedToChild));
        });
    }
}