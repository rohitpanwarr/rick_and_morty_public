import React from 'react';
import { SORT_CHARACTERS } from '../actions/actionTypes';

const INITIAL_STATE = {
    sortBy: ''
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SORT_CHARACTERS: {
			return {
				sortBy: {...action.payload}
			};
		}
		default : {
			return state;
		}
	}
};