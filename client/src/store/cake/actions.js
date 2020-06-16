import axios from 'axios';
const apiEndpoint = "http://localhost:5000";

export const getCakes = () => {
        return (dispatch) => {
          axios.get(`${apiEndpoint}/cakes`)
            .then(response => {
                console.log(response.data)
            dispatch({
              type: 'FETCH_CAKES',
              payload: response.data
            })});
        }
}
export const getCake = (id) => {
    return (dispatch) => {
      axios.get(`${apiEndpoint}/cakes/${id}`)
        .then(response => {
        dispatch({
          type: 'FETCH_CAKE',
          payload: {...response.data}
        })});
    }
}
export const deleteCake = (id) => {
    return (dispatch) => {
      axios.delete(`${apiEndpoint}/cakes/${id}`)
        .then(response => {
        dispatch({
          type: 'DELETE_CAKE',
          payload: {...response.data}
        })});
    }
}
export const addCake = ({name,yumFactor,imageUrl,comment}) => {
    return (dispatch) => {
      axios.post(`${apiEndpoint}/cakes/`,{
          name:name,
          yumFactor:yumFactor,
          imageUrl:imageUrl,
          comment:comment
      })
        .then(response => {
        dispatch({
          type: 'ADD_CAKE',
          payload: {...response.data}
        })});
    }
}