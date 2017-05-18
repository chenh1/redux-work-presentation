import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterStateActions from '../../actions/counterStateActions';

class About extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.increment = this.increment.bind(this);
    }

    increment() {
        let newState = this.props.passedToChild2;
        newState++;
        this.props.actions.incrementCounterStateFromChild(newState);
    }

    render() {
        return (
            <div>
                <p>Hello world from About.js</p>
                <button onClick={this.increment}>Increment Redux Counter</button>
                <p className='redux-counter'>{this.props.passedToChild2}</p>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        passedToChild2: state.counterStateReducer
    }
};

function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(counterStateActions, dispatch)
    }
};

export default connect(mapStateToProps, mapActionsToProps)(About);