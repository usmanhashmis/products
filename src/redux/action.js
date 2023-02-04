import axios from 'axios';

export const GetProduct = () => (dispatch) => {
  dispatch({type : "initiated"})
  axios
    .get('http://localhost:420/api/products')
    .then((res) => {
      dispatch({ type:"fetched",payload: res.data });
      console.log("data in redux",res.data);
    })
    .catch((err) =>
    { 
      console.log(err, 'error in  api') 
      dispatch({type :"failed",payload :err.message})
    })

};