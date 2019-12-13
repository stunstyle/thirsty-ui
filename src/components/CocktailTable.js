import React from 'react';
import { Table, Col, Button, Row, Container, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


class CocktailTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container className="container-fluid">
          <Row className="justify-content-center">
            <Col xs="3"></Col>
            <Col xs="3">
              <h1>Cocktails</h1>
            </Col>
            <Col xs="3"></Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="3">
              <ButtonGroup vertical>
                <Link to="/all" className="btn btn-secondary">View all</Link>
                <Link to="/" className="btn btn-secondary">Most popular</Link>
                <Link to="/" className="btn btn-secondary">Cocktail of the month</Link>
              </ButtonGroup>
            </Col>
            <Col xs="4">
              <Table>
                {/* <thead>
                  <tr>
                    <th>Cocktail name</th>
                    <th>Image</th>
                  </tr>
                </thead> */}
                <tbody>
                  {items.map(item => (
                    <tr>
                      <td>{item.strDrink}</td>
                      <td><img class="img-fluid" src={item.strDrinkThumb}/></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col xs="3">
              <img class="img-fluid" src="https://via.placeholder.com/120x600?text=120x600+Skyscraper" />
            </Col>
          </Row>
          <Row xs="3"></Row>
        </Container>
      );
    }
  }
}
export default CocktailTable;