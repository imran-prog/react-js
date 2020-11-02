export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    /**token: null**/
    token: 'BQBtDgazPBJnJg3QfuIe1yYgE4PNbM7EDO9B2eV54AAnhNJrnrycBLOFOSVXDZTDHi0gtrgSUS4LY5ytWP8fr4DVnqNhW0B8cad8Gpy7HhKJ22JuvZ5N82WMb9oRGOWkHtN8GhJ5NUh8c-NM8W9sLBxX1ZzXdymObaTgoMttMc0tGiEB'

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