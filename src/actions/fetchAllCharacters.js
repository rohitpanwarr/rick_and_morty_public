import React from 'react';
import * as ActionTypes from './actionTypes';

const characters = {};

export const fetchAllCharacters = () => {
	return dispatch => {
		dispatch(fetchCharactersBegin());
		return fetch("https://rickandmortyapi.com/api/character/")
		  .then(res => res.json())
		  .then(json => {
			dispatch(fetchCharactersSuccess(json));
			return json;
		  })
		  .catch(error => dispatch(fetchCharactersFailure(error)));
	  };
};

export const fetchCharactersBegin = () => {
	return {
		type : ActionTypes.FETCH_CHARACTERS_BEGIN
	}
};

export const fetchCharactersSuccess = (response) => {
	return {
		type : ActionTypes.FETCH_CHARACTERS_SUCCESS,
		payload : response
	}
};

export const fetchCharactersFailure = (error) => {
	return {
		type : ActionTypes.FETCH_CHARACTERS_FAILURE,
		payload : error,
	}
};