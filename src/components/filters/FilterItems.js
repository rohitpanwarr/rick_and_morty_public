import React from 'react';

class FilterItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selected-filters__item" data-filter-type={this.props.filterType} onClick={this.props.removeFilter}>
                {this.props.filter}
                <i className="icon fa fa-remove"></i>
            </div>
        )
    };
};

export default FilterItems;