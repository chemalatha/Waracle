const initialState = {
    items:[],
    item:{},
    cakeAdded:false
}
export function cakeReducer(state = initialState, action) {
    console.log('action',action.type);
    switch (action.type) {
        case 'DELETE_CAKE':
            return {
                ...state,
                item: {...action.payload},
                cakeAdded:false
            }
        case 'ADD_CAKE':
            return {
                ...state,
                items: [...state.items,action.payload],
                cakeAdded:true
            }       
        case 'FETCH_CAKES':
            return {
              ...state,
              items: [...action.payload],
              cakeAdded:false
            }        
        case 'FETCH_CAKE':
            return {
              ...state,
              item: {...action.payload},
              cakeAdded:false
            }
        default:
        return state;
    }
}