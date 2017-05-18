import React from 'react';
import PropTypes from 'prop-types';
import Child from './Child';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as activeStateActions from '../../actions/activeStateActions';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            activeState: 'yes',
            counter: 0
        };

        this.changeActiveState = this.changeActiveState.bind(this);
        this.changeStateFromChild = this.changeStateFromChild.bind(this);
        this.incrementHomeCounter = this.incrementHomeCounter.bind(this);
    }

    //This function is the key to dispatching an action to the
    //reducer. This function lives in the actions "catalog", aka
    //passedStateAction.js. Also, the action seen here is a prop
    //of this Home component because we mapped it at the bottom of
    //this page.
    changeStateFromChild() {
        console.log(this.props.passedToChild)
        let newState = this.props.passedToChild === 'no' ? 'yes' : 'no';
        this.props.actions.triggerActiveStateFromChild(newState);
    }

    changeActiveState() {
        this.setState({
            activeState: this.state.activeState === 'yes' ? 'no' : 'yes'
        });
    }

    incrementHomeCounter() {
        let newNumber = this.state.counter;
        newNumber++;

        this.setState({
            counter: newNumber
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className='redux-state'>
                    <h3>This stuff controls state from Redux's store</h3>
                    <Child someProp={this.props.passedToChild} onClick={this.changeStateFromChild} />
                    <p>Redux state counter: <span className='redux-counter'>{this.props.counterState}</span></p>
                </div>
                
                <div className='react-state'>
                    <h3>This stuff controls state encapsulated in Home.js</h3>
                    <button onClick={this.changeActiveState}>Toggle State with setState</button>
                    <p>Is Active? (From Home's state only) {this.state.activeState}</p>
                    <button onClick={this.incrementHomeCounter}>Increment with setState</button>
                    <p>Counter Reflecting State in Home only: {this.state.counter}</p>
                </div>
            </div>
        );
    }
}

//This function maps the state found in the store to a prop of
//the Home component.
function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        passedToChild: state.activeStateReducer,
        counterState: state.counterStateReducer
    }
}


//This function maps the actions in passedStateAction.js to the
//props of the Home comopnent.
function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(activeStateActions, dispatch)
    }
}

//This function "subscribes" the Home component to the store
//and enables us to take any state in the store and pass it to
//Home as props. Think of this as pulling the state management
//away from this component and moving it to a higher level which
//then passes the state down to this component as a prop. We can
//still set state in this component and let this component have
//its own state while taking the state in the store as props.
//We can also take all the state here and move it to the store if
//we want to go all the way. In this example, I'm doing both
//to demonstrate the difference between managing state through
//setState and managing it through Redux's store.    

//connect() returns wrapWithConnect(WrappedComponent)
//this function:
//  1. Checks state shape
//  2. Merges the state and action props with the component's props
//  3. Creates a Connect component which is a react component
//     that wraps this component. Its component lifecycle functions
//     do things like making attempts to subscribe to the store
//  4. Tries to subscribes the component to the store

//The Connect component carries the relevant reducer(s)'s return
//state as a its own state.
export default connect(mapStateToProps, mapActionsToProps)(Home);


