import * as ActionTypes from './ActionTypes.js';

export const increment = (counterCaption, t) => {
    return {
        type: t?t:ActionTypes.INCERMENT,
	counterCaption: counterCaption
    };
}
export const decrement = (counterCaption,t) => {
    return {
        type: t?t:ActionTypes.DECREMENT,
	counterCaption: counterCaption
    };
}
