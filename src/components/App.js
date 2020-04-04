import JQuery from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCharacters } from '../actions/fetchAllCharacters';
import { filterCharacters } from '../actions/filterCharacters';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Header from './filters/Header';
import CharactersList from './characters/CharactersList';
import CharactersListHeader from './characters/CharactersListHeader';
import Filters from './filters/Filters';

window.$ = window.JQuery = JQuery;

class App extends React.Component {

    handleScroll() {
        let headerHeight = $('header').outerHeight(),
            offset = 50;

        if(window.pageYOffset > headerHeight + offset) {
            $('header').addClass('sticky').css('padding-top', headerHeight);

        } else {
            $('header').removeClass('sticky').css('padding-top', 0);
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchAllCharacters());
        //window.addEventListener('scroll', this.handleScroll);
    }

    render = () => {
        const { error, loading, details } = this.props.characters.appData;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (details && details.length === 0) {
            return <div>Error!</div>;
        }

        return (
            <Container fluid className="p-0 m-0">
                <Header/>
                <Row className="m-0">
                    <Col md={2} xs={12}>
                        <aside>
                            <Filters />
                        </aside>
                    </Col>
                    <Col md={10} xs={12} className="p-0">
                        <main>
                            <CharactersListHeader/>
                            <CharactersList/>
                        </main>
                    </Col>
                </Row>
            </Container>
        );
    }
};

const mapStateToProps = state => ({
    characters: state
});

export default connect(mapStateToProps)(App);
  
