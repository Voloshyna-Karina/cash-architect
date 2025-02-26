import api from "../helpers/FetchData.js";

export const userTypes = {
    FETCH_PENDING: "FETCH_PENDING",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAILURE: "FETCH_FAILURE",
};

export const getUserData = (data) => dispatch => {
    dispatch({type: userTypes.FETCH_PENDING})
    api.get(`api/user/${data}`, data)
        .then(res => {
            dispatch({
                type: userTypes.FETCH_SUCCESS,
                payload: res.data,
            })
            return res.data;
        })
        .catch((err) => {
            dispatch({
                type: userTypes.FETCH_FAILURE,
                payload: {
                    status: err.status,
                    message: err.status,
                }
            })
            throw  err;
        })
}