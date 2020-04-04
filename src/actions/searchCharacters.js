import React from 'react';
import { SEARCH_CHARACTERS } from './actionTypes';

export const searchCharacters = (searchText) => {
	return {
		type : SEARCH_CHARACTERS,
		payload : searchText
	}
};