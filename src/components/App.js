import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink} from 'react-router';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            appState: 'active'
        };
    }

    render() {
        console.log(this.props.children)
        return (
            <div>
                <nav className='menu'>
                    <IndexLink to="/">Home</IndexLink>
                    {"   "}
                    <Link to="/about">About</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default App;