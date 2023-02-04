const initialState = {
    loading : false,
    error : null  ,
    success:false,
    data: [],
  };
  
  // eslint-disable-next-line
  const GetProducts =(state=initialState,action)=>{
      switch(action.type){
          case "initiated":
              return {
                 ...state,
                 loading: true,
              };
          case "fetched":
              return {
                  ...state,
                  loading :false,
                  data: action.payload
              };
          case "failed":
              return {
                  ...state,
                  loading:false,
                  error: action.payload
              };
  
              default :  
              return state
      }
   
  };
  
  export default GetProducts;