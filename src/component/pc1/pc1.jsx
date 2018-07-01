import React, {Component} from 'react';
import { connect } from 'react-redux'
import P1 from './p1.jsx';
import * as Actions from './Action.js';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    
  
    componentDidMount() {
    }

    componentWillUnmount() {
    }



    render() {
        const value = this.props.value;
        const {caption} = this.props;
        return (
            <P1 caption={this.props.caption}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                value={value}
            />
        );
    }
}
const mapStateToProps = (state) => {
  return {
       value: state.reducer1?state.reducer1['d1']:1
  }
}
const mapDispatchToProps = {
  onIncrement: () => Actions.increment(1),
  onDecrement: () => Actions.decrement(1),
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export let initialState = 1;
export const stateKey = 'd1';
