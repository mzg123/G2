import React, {Component} from 'react';
import { connect } from 'react-redux'
import G2 from '@antv/g2';

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
            <div>455</div>
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
