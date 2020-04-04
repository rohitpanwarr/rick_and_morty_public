import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import { searchCharacters } from '../../actions/searchCharacters';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchByName = this.searchByName.bind(this);
    }
    searchByName(e) {
        let $target = $(e.target),
            $parent = $target.closest('.search'),
            searchText = $parent.find('#searchByName').val();

        if(searchText) {
            this.props.dispatch(searchCharacters(searchText));
        }
    }
    render() {
        return (
            <div className="search">
                <label className="title" htmlFor="searchByName">{CONSTANTS.SEARCH_BY_NAME}</label>
                <div className="d-flex">
                    <input type="text" className="form-control" id="searchByName" placeholder="Search" onChange={this.searchByName}/>
                    <button className="btn btn-primary" name="search">Search</button>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps)(Search);