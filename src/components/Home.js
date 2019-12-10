import React from 'react';

import { Button, ButtonDropdown, ButtonGroup } from 'reactstrap';

function Home() {
    return (
        <ButtonGroup vertical>
            <Button>View all</Button>
            <Button>Most popular</Button>
            <Button>Cocktail of the month</Button>
        </ButtonGroup>
    );
}
export default Home;