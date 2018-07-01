import React, {Component} from 'react';
import { connect } from 'react-redux'
import P2 from './p2.jsx';
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
            <P2 caption={this.props.caption}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                value={value}
            />
        );
    }
}
const mapStateToProps = (state) => {
  
  return {
       value: state.reducer2?state.reducer2['d2']:1
  }
}
const mapDispatchToProps = {
  onIncrement: () => Actions.increment(1, 'd2'),
  onDecrement: () => Actions.decrement(1, 'd2'),
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export const stateKey = 'd2';
export let initialState = 1;
