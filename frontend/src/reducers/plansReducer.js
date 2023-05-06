import { type } from "os"


const plansReducer = ( state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+=1
            case 'DECREMENT':
                return state-=1
                default:
                    return state;
    }
}

// {
//     type:'',
//     payload:''
// }