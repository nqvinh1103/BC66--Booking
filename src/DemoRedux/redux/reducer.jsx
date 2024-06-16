import { TYPE_GIAM, TYPE_TANG } from "../../Action";

let initialState = {
    number: 1,
}

export let numberReducer = (state = initialState, action) => {
  console.log("action numberReducer", action);
  switch (action.type) {
    case TYPE_TANG:{
      return {...state, number: state.number + action.payload}
    }
    case TYPE_GIAM:{
      return {...state, number: state.number - action.payload}
    }
    default:
        return {...state}
  }
} 
