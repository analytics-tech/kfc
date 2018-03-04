import React from 'react';

import {Navbar, Button} from 'react-bootstrap';

const TopNavBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">KFC Toolkit</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Navbar.Text>
                Ki-Lat . Fast . Cool
            </Navbar.Text>
            <Navbar.Form pullRight>
                <Button bsStyle='link'>Sign Out</Button>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
);

export default TopNavBar;
