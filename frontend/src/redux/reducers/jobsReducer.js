import { GET_ALL_JOBS } from '../constants/jobsConstants';

//**************** variables ****************//
const initialState = {
	jobs: [],
};

export const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_JOBS:
			return {
				...state,
				jobs: action.payload,
			};

		default:
			return state;
	}
};
