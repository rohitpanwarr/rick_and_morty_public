import React from 'react';
import { SEARCH_CHARACTERS } from '../actions/actionTypes';

const INITIAL_STATE = {
    search: ''
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_CHARACTERS: {
			return {
				search: action.payload
			};
		}
		default : {
			return state;
		}
	}
};