import React, { useReducer } from 'react';
let initialvalue = { count: 0 }
const reduce = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            return state
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reduce, initialvalue)
    return (
        <div className='jumbotron text-center'>
            <h1 className='font-width-bold display-4'>This in use Reducer Page</h1>
            <h3> Current Value: {state.count}</h3>
            <button onClick ={()=>dispatch({type:'INCREMENT'})} className="btn btn-outline-success btn-lg mr-2">Increment</button>
            <button onClick ={()=>dispatch({type:'DECREMENT'})} className="btn btn-outline-danger btn-lg">Decrement</button>
        </div>
    )
}
export default UseReducer