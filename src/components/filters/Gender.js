import React from 'react';
import CONSTANTS from '../../constants';

class Gender extends React.Component {
    render() {
        return (
            <div className="filter-group" data-filter-type="gender">
                <h5>{CONSTANTS.GENDER}</h5>
                <ul>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="male" name="male" value={CONSTANTS.MALE} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="male">{CONSTANTS.MALE}</label>
                        </div>
                    </li>
                    <li>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input filter" id="female" name="female" value={CONSTANTS.FEMALE} onClick={this.props.selectFilters} />
                            <label className="custom-control-label" htmlFor="female">{CONSTANTS.FEMALE}</label>
                        </div>
                    </li>
                </ul>
            </div>
        );
    };
};

export default Gender;