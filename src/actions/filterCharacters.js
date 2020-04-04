import React from 'react';
import { FILTER_CHARACTERS } from './actionTypes';

export const filterCharacters = (filters) => {
	return {
		type : FILTER_CHARACTERS,
		payload : filters
	}
};