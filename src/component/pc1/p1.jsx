import React from 'react';

function Counter (props) {
    const {caption, onIncrement, onDecrement, value} = props;
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
    	<span>{caption} count: {value}</span>
        </div>
    );
}

export default Counter;
