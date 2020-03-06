import { FEED_FETCHING, FEED_FAILED, FEED_SUCCESS } from "../constants";

export const setStateToFetching = () => ({
    type: FEED_FETCHING,    
})

export const setStateToFailed = (payload) => ({
    type: FEED_FAILED,
    payload
})

export const setStateToSuccess = (payload) => ({
    type: FEED_SUCCESS,
    payload
})

export const feed = ()=>{
    return dispatch=>{
        
    }
}