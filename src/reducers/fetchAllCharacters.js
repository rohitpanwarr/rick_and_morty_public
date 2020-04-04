import React from 'react';
import * as ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
	details: []
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.FETCH_CHARACTERS_BEGIN: {
			return {
				...state,
				loading: true,
				error: null
			};
		}
		case ActionTypes.FETCH_CHARACTERS_SUCCESS: {
			return {
				...state,
				details: action.payload,
				loading: false
			};
		}
		case ActionTypes.FETCH_CHARACTERS_FAILURE: {
			return {
				...state,
				loading: false,
				error: action.payload
			};
		}
		default : {
			return state;
		}
	}
};