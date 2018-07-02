const initialState = {
    currentTab: 'home',
    tabs: [],
    products: [],
}

const
    CHANGE_TAB = 'CHANGE_TAB',
    DUMMY_PRODUCTS = 'DUMMY_PRODUCTS'

module.exports = {
    reducer: function (state = initialState, action) {
        switch (action.type) {
            case CHANGE_TAB:
                return { ...state, currentTab: action.payload }
            case DUMMY_PRODUCTS:
                return { ...state, products: action.payload }
            default:
                return state
        }
    },
    changeTab: function (tab) {
        return {
            type: CHANGE_TAB,
            payload: tab
        }
    },
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
                },
                {
                    id: 3,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
                {
                    id: 4,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
                {
                    id: 5,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
                {
                    id: 6,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
                {
                    id: 7,
                    name: 'Thing',
                    description: 'Does really cool stuff.',
                    price: 30,
                    rating: 4,
                },
            ]
        }
    }
}