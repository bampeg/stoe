const initialState = {
    currentView: '',
    products: []
}

const
    CURRENT_VIEW = 'CURRENT_VIEW',
    DUMMY_PRODUCTS = 'DUMMY_PRODUCTS'

module.exports = {
    reducer: function (state = initialState, action) {
        switch (action.type) {
            case CURRENT_VIEW:
                console.log(state)
                return { ...initialState, currentView: action.payload }
            case DUMMY_PRODUCTS:
                return { ...initialState, products: action.payload }
            default:
                return state
        }
    },
    currentViewChange: view => (
        {
            type: CURRENT_VIEW,
            payload: view
        }
    ),
    dummyProducts: function () {
        return {
            type: DUMMY_PRODUCTS,
            payload: [
                {
                    id: 1,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
                {
                    id: 2,
                    name: 'Other Thing',
                    description: 'Does some other really cool stuff.',
                    price: 45,
                    rating: 4.5,
                }
            ]
        }
    }
}