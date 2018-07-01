import * as ActionTypes from './ActionTypes.js';

export default (state={d2:1}, action) => {
    const {type} = action;
    switch(action.type) {
        case ActionTypes.INCERMENT:
		return {...state, [type]: state[type] + 1};
        case ActionTypes.DECREMENT:
		return {...state, [type]: state[type] - 1};
	default:
            return state;
    }
}
