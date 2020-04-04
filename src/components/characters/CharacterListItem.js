import React from 'react';
import { Media } from 'react-bootstrap';

class CharacterListItem extends React.Component {
    
    render() {
        return (
            <li className="col-lg-3 col-md-4 col-sm-6 p-0">
                <Media>
                    <article className="character-card">
                        <div className="card-header">
                            <div className="card-header__image">
                                <img src={this.props.character.image} alt={this.props.character.name}/>
                            </div>
                            <div className="card-header__title">
                                <h4 className="card-header__title--name">
                                    {this.props.character.name}
                                </h4>
                                <div className="card-header__title--id">
                                    id: {this.props.character.id} 
                                </div>
                                <div className="card-header__title--date">
                                    {new Date(this.props.character.created).toGMTString()}
                                </div>
                            </div>
                        </div>
                        <Media.Body>
                            <div className="card-info">
                                <div className="card-text">
                                    <span className="card-text__id">STATUS</span>
                                    <div className="card-text__value">{this.props.character.status}</div>
                                </div>
                                <div className="card-text">
                                    <span className="card-text__id">SPECIES</span>
                                    <div className="card-text__value">{this.props.character.species}</div>
                                </div>
                                <div className="card-text">
                                    <span className="card-text__id">GENDER</span>
                                    <div className="card-text__value">{this.props.character.gender}</div>
                                </div>
                                <div className="card-text">
                                    <span className="card-text__id">ORIGIN</span>
                                    <div className="card-text__value">{this.props.character.origin.name}</div>
                                </div>
                                <div className="card-text">
                                    <span className="card-text__id">LAST LOCATION</span>
                                    <div className="card-text__value">{this.props.character.location.name}</div>
                                </div>
                            </div>
                        </Media.Body>
                    </article>
                </Media>
            </li>
        )
    };
};

export default CharacterListItem;