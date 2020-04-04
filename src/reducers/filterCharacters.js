import React from 'react';
import { FILTER_CHARACTERS } from '../actions/actionTypes';

const INITIAL_STATE = {};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FILTER_CHARACTERS: {
			return {
				...state,
				...action.payload
			};
		}
		default : {
			return state;
		}
	}
};