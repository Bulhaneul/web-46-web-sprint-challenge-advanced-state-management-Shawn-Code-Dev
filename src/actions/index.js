import axios from 'axios';

export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERR = 'FETCH_ERR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchBegin());

        axios
        .get("http://localhost:3333/smurfs")
        .then(r => {
            dispatch(fetchSuccess(r.data))
        })
        .catch(err => {dispatch(fetchErr(err))})
    }
}

export const fetchBegin = () => {return({type: FETCH_BEGIN})}
export const fetchSuccess = (smurf) => {return({type: FETCH_SUCCESS, payload:smurf})}
export const fetchErr = (err) => {return({type: FETCH_ERR, payload:err})}

export const ADD_SMURF = 'ADD_SMURF';
export const addSmurf = (smurf) => {return({type: ADD_SMURF, payload:smurf})}

export const SET_ERR = 'SET_ERR';
export const setErr = (err) => {return({type: SET_ERR, payload:err})}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.