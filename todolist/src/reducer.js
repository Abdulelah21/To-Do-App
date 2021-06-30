const initialState = {
    items: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                items:[...state.items,action.payload],
            };
        case 'DELETE_TODO':
            return{
                ...state,
                items: state.items.filter(item =>item.key !== action.payload),
            };
            default:
                return state;
    }
}

export default reducer;