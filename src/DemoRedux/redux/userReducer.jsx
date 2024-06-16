import { TYPE_USER } from "../../Action"

const initialState = {
    user: {username: "Nguyễn Quang Vinh", age: 18}
}

export const userReducer=(state=initialState, action) => {
  switch (action.type) {
    case TYPE_USER:{
        return {...state,user: {...action.payload}}
    }
    default:{
        return {...state}
    }
  }
}
