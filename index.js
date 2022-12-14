// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// STATE
const initialCount = {
    count: 0
}

// ACTIONS
const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

const decrementCount = () => {
    return {
        type: DECREMENT
    }
}

const resetCount = () => {
    return {
        type: RESET
    }
}

// REDUCER
const counterReducer = (state = initialCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            state;
    }
}

// Store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(incrementCount());