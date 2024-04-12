import { CATEGORY_ACTION } from '../constants/userConstants'

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_ACTION:
            return { categoryReducer: action.payload};
        default:
            return state;
    }
};