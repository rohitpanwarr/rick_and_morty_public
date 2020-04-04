import React from 'react';
import { connect } from 'react-redux';

// Components
import CharacterListItem from './CharacterListItem';

class CharactersList extends React.Component {
    constructor(props) {
        super(props);
    };

    filterListItem(item) {
        let found = false;
        if(Object.keys(this.props.filters).length) {
            Object.keys(this.props.filters).forEach((filterType) => {
                
                if(this.props.filters[filterType].length) {
                    this.props.filters[filterType].forEach((filter) => {
                        let itemFilterType;

                        if(filterType == 'origin') {
                            itemFilterType = item[filterType].name.toLowerCase();
                        } else {
                            itemFilterType = item[filterType].toLowerCase();
                        }
                        if(!!item[filterType] && itemFilterType === filter.toLowerCase() && !found) {
                            found = true;
                        }
                    });
                }
            });
        }
        return found;
    }

    sortData(sortBy, charactersList) {

        if(!!charactersList) {
            let listItem = charactersList.slice(0)
            listItem.sort((a, b) => {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                
                if(sortBy == 'asc') {
                    if (nameA < nameB) //sort string ascending
                        return -1 
                    if (nameA > nameB)
                        return 1
                    return 0 //default return value (no sorting)
                }
                if(sortBy == 'dsc') {
                    if (nameA > nameB) //sort string descending
                        return -1 
                    if (nameA < nameB)
                        return 1
                    return 0 //default return value (no sorting)
                }
            });
            return listItem;
        }
    };
    renderCharactersDetails = (charactersList) => {
        let showAll = true,
            index = 0;

        if(Object.keys(this.props.filters).length) {
            Object.keys(this.props.filters).forEach((filterType) => {
                if(this.props.filters[filterType].length) {
                    showAll = false
                }
            });
        }

        // Sort data
        if(this.props.sorting.sortBy) {
            charactersList = this.sortData(this.props.sorting.sortBy, charactersList);
        }
      
        if(!!charactersList) {
            charactersList.forEach((listItem) => {
                let rgxp = new RegExp(this.props.searchBy.search, "gi"),
                    matchedItem = listItem.name.match(rgxp);

                if(!showAll) {
                    if(this.filterListItem(listItem)) {

                        if(matchedItem) {
                            charactersList[index++] = <CharacterListItem key={index} character={listItem}/>;
                        } else {
                            delete charactersList[index++]
                        }
                        
                    } else {
                        delete charactersList[index++]
                    }
                } else {
                    
                    if(matchedItem) {
                        charactersList[index++] = <CharacterListItem key={index} character={listItem}/>;   
                    } else {
                        delete charactersList[index++]  
                    }
                }
            });

            return charactersList;
        }
    };

    render() {
        return (
            <React.Fragment>
                <ul className="row characters-list p-0 m-0">
                    {this.renderCharactersDetails([...this.props.details])}
                </ul>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => ({
    details: state.appData.details.results,
    filters: state.filters,
    sorting: state.sortBy.sortBy,
    searchBy: state.search
});

export default connect(mapStateToProps)(CharactersList);