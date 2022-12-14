// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux')

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// STATE
const initialCount = {
    count: 0
}

const userState = {
    count: 1,
    users: ['saqib']
}

// ACTIONS

const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

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
const userReducer = (state = userState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                count: state.count + 1,
                users: [...state.users, action.payload]
            }

        default:
            state;
    }
}
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state;
    }
}

// Store
const store = createStore(userReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser("saad"));
// store.dispatch(incrementCount());
// store.dispatch(decrementCount());
// store.dispatch(incrementCount());
// store.dispatch(resetCount());
// store.dispatch(incrementCount());
// store.dispatch(incrementByValue(10));
// store.dispatch(incrementByValue(5));