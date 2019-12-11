import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

class RandomCard extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            strIngredients: [],
        };
    }

    componentDidMount() {
        var that = this;
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(
                (result) => {
                    var drink = result.drinks[0];
                    var ingredients = {};
                    Object.keys(drink).forEach(function (key) {
                        if (drink[key] != null && key.startsWith("strIngredient")) {
                            ingredients[key] = drink[key];
                        }
                    });
                    console.log(ingredients);

                    that.setState({
                        isLoaded: true,
                        items: result.drinks,
                        strIngredients: ingredients,
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
        const { error, isLoaded, items, strIngredients } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Card>
                    <CardImg top width="100%" src={items[0].strDrinkThumb} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-strong">{items[0].strDrink}</CardTitle>
                        <CardSubtitle className="font-italic">{items[0].strAlcoholic}</CardSubtitle>
                        <CardText><p>{Object.values(strIngredients).map((val, k) => <span>{val}</span>).map((item, index) => [index > 0 && ', ', item])}</p></CardText>
                        <Button color="primary" onClick={this.refresh}>I'm feeling lucky!</Button>
                    </CardBody>
                </Card>
                // <ul>
                //     {items.map(item => (
                //         <li key={item.strDrink}>
                //             {item.strDrink} {item.strGlass}
                //         </li>
                //     ))}
                // </ul>
            );
        }
    }

    refresh() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(
                (result) => {
                    var drink = result.drinks[0];
                    var ingredients = {};
                    Object.keys(drink).forEach(function (key) {
                        if (drink[key] != null && key.startsWith("strIngredient")) {
                            ingredients[key] = drink[key];
                        }
                    });
                    console.log(ingredients);

                    this.setState({
                        isLoaded: true,
                        items: result.drinks,
                        strIngredients: ingredients,
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
}
export default RandomCard;