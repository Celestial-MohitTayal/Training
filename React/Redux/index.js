const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger(); //logger middleware

//Creating Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
}

function restockedCake(qty = 1) {
  return { type: CAKE_RESTOCKED, payload: qty };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockedIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20,
//   // anotherProperty: 0 -> in case we have multiple properties to take care of
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIcecream: 20,
};

//Redducer -> (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //...state, -> To copy other properties of state
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
}; // It is a pure reducer function that accepts the previous state and returns the new state of the application.

// Multiple Reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        //...state, -> To copy other properties of state
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  //   console.log("Update State ", store.getState())
  {}
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockedCake(3));

//bindActioncreators
const action = bindActionCreators(
  { orderCake, restockedCake, orderIceCream, restockedIceCream },
  store.dispatch
);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockedCake(3);

action.orderIceCream();
action.orderIceCream();
action.orderIceCream();
action.restockedIceCream(3);

unsubscribe();
