import { IS_LOADING} from '../constants/loaderConstants';

//**************** variables ****************//
const initialState = {
	loading: false
};

export const loaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_LOADING: {
			return {
				...state,
				loading: action.payload
			};
		}
		default:
			return state;
	}
};