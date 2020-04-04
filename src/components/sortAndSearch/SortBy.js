import React from 'react';
import { connect } from 'react-redux';

import { sortCharacters } from '../../actions/sortCharacters';

class SortBy extends React.Component {
    constructor(props) {
        super(props);
        this.sortBy = this.sortBy.bind(this);
    }
    sortBy(e) {
        this.props.dispatch(sortCharacters({
            sortBy: $(e.target).val()
        }));
    }
    render() {
        return (
            <div className="sort-by d-flex">
                <label>Sort By: </label>
                <select className="custom-select" onChange={this.sortBy}>
                    <option value="">Select</option>
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>
                </select>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    sortBy: state.sortBy
});

export default connect(mapStateToProps)(SortBy);