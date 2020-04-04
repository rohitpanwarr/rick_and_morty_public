import React from 'react';
import SelectedFilters from '../filters/SelectedFilters';
import SortBy from '../sortAndSearch/SortBy';
import Search from '../sortAndSearch/Search';

class CharactersListHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SelectedFilters />
                <div className="search-sort d-flex justify-content-between p-3">
                    <Search />
                    <SortBy />
                </div>
            </React.Fragment>
        )
    };
};

export default CharactersListHeader;