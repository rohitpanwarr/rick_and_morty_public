import React from 'react';
import CONSTANTS from '../../constants';

class Species extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="filter-group" data-filter-type="species">
                <h5>{CONSTANTS.SPECIES}</h5>
                <ul>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="human" name="human" value={CONSTANTS.HUMAN} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="human">{CONSTANTS.HUMAN}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="mytholog" name="mytholog" value={CONSTANTS.MYTHOLOG} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="mytholog">{CONSTANTS.MYTHOLOG}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="other" name="other" value={CONSTANTS.OTHER_SPECIES} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="other">{CONSTANTS.OTHER_SPECIES}</label>
                        </div>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Species;