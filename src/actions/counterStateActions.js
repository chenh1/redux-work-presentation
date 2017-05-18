export function incrementCounterStateFromChild(passedState) {
    return {type:'CHANGE_FROM_CHILD_2', passedState}
}

export function apiCallCounter() {
    return function(dispatch) {
        return fetch('http://howard-chen.com/test.json', {
            method: 'get'
        }).then((res) => {
            return res.json();
        }).then((testJson) => {
            console.log(testJson.passedToChild2);
            dispatch(incrementCounterStateFromChild(testJson.passedToChild2));
        });
    }
}