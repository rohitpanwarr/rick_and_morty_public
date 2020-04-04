import React from 'react';
import { connect } from 'react-redux';

import CONSTANTS from '../../constants';
import FilterItems from './FilterItems';
import { filterCharacters } from '../../actions/filterCharacters';

class SelectedFilters extends React.Component {
    state = {
        filterList: []
    }
    showSelectedFilters() {
        let filterKeys = Object.keys(this.props.filters),
            filterList = [],
            index = 0;
        
        if(filterKeys.length) {
            filterKeys.forEach((filterType) => {
                if(this.props.filters[filterType].length) {

                    if(index === 0) {
                        filterList.push((
                            <h3 
                                className="selected-filters__title"
                                key={index++}>
                                {CONSTANTS.SELECTED_FILTERS_HEADING}
                            </h3>
                        ));
                    }
                    this.props.filters[filterType].forEach((filter) => {
                        filterList.push((
                            <FilterItems key={index++} filter={filter} filterType={filterType} removeFilter={this.removeFilter}/>
                        ));
                    });
                }
            });
        }
        return filterList;
    };

    removeFilter = (e) => {
        let filterType = $(e.target).data('filterType'),
            filterVal = $(e.target).text();

        if(filterType) {
            if(this.props.filters[filterType].indexOf(filterVal) != -1) {
                this.props.filters[filterType].splice(this.props.filters[filterType].indexOf(filterVal), 1);
            }
        }
        // update store.
        this.props.dispatch(filterCharacters(this.props.filters));

        let $filterGroup = $('.filters').find(`.filter-group[data-filter-type=${filterType}]`);
        if($filterGroup.length) {
            let $checkboxes = $filterGroup.find('.filter');
            $checkboxes.each((index, filter) => {
                if($(filter).val() === filterVal) {
                    $(filter).prop('checked', false);
                }
            });
        }
    };

    render() {
        return (
            <div className="selected-filters">
                {this.showSelectedFilters()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(SelectedFilters);