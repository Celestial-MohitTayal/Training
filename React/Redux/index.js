const redux = require("redux");
const createStore = redux.createStore;

//Creating Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockedCake(qty = 1) {
  return { type: CAKE_RESTOCKED, quantity: qty };
}

const initialState = {
  numOfCakes: 10,
  // anotherProperty: 0 -> in case we have multiple properties to take care of
};

//Redducer -> (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        //...state, -> To copy other properties of state
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
}; // It is a pure reducer function that accepts the previous state and returns the new state of the application.

const store = createStore(reducer); //
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Update State ", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockedCake(3));
unsubscribe();

store.dispatch(orderCake());
