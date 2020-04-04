import React from 'react';
import CONSTANTS from '../../constants';

class Origin extends React.Component {
    state = {};

    render() {
        return (
            <div className="filter-group" data-filter-type="origin">
                <h5>{CONSTANTS.ORIGIN}</h5>
                <ul>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="unknown" name="unknown" value={CONSTANTS.UNKNOWN} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="unknown">{CONSTANTS.UNKNOWN}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="earth" name="earth" value={CONSTANTS.EARTH} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="earth">{CONSTANTS.EARTH}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="nuptia" name="nuptia" value={CONSTANTS.NUPTIA} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="nuptia">{CONSTANTS.NUPTIA}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="other" name="other" value={CONSTANTS.OTHER_ORIGINS} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="other">{CONSTANTS.OTHER_ORIGINS}</label>
                        </div>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Origin;