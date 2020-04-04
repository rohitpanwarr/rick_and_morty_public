import React from 'react';
import { SORT_CHARACTERS } from './actionTypes';

export const sortCharacters = (sortBy) => {
	return {
		type : SORT_CHARACTERS,
		payload : {...sortBy}
	}
};