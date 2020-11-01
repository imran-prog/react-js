export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [Payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                user: action.token
            }
        default:
            return state;
    };
};

export default reducer;