import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';

// Components
import Species from './Species';
import Gender from './Gender';
import Origin from './Origin';

import { filterCharacters } from '../../actions/filterCharacters';

class Filters extends React.Component {

    selectFilters = (e) => {
        let target = e.target,
            $parent = $(target).closest('.filter-group'),
            $checkedboxes = $parent.find('input[type="checkbox"].filter:checked'),
            filterType = $parent.data('filterType'),
            selectedFilters = {};
        
        selectedFilters[filterType] = [];
        
        if($checkedboxes.length) {
            $checkedboxes.each((index, checkbox) => {
                let filterValue = $(checkbox).val();
                selectedFilters[filterType].push(filterValue);
            });
        }

        this.updateFiltersState({...selectedFilters});
    };

    updateFiltersState(selectedFilters) {
        this.props.dispatch(filterCharacters({...selectedFilters}));
    };

    render() {
        return (
            <section className="filters">
                <h3>{CONSTANTS.FILTERS}</h3>
                <Species selectFilters={this.selectFilters}/>
                <Gender selectFilters={this.selectFilters} />
                <Origin selectFilters={this.selectFilters}/>
            </section>
        )
    };
};

const mapStateToProps = state => ({
    filters: state.filters
});

export default connect(mapStateToProps)(Filters);