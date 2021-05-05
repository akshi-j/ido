// import React from "react"
// import Table from "./showTable"
//
// class Customer extends React.Component {
//     render() {
//         return (
//             <Table />
//         )
//     }
// }
//
// export default Customer;


import React from 'react';
import Food from './FoodDisplay';
import Cake from './CakeDisplay';
import Dress from './DressDisplay';
import Entertainment from "./EntertainmentDisplay";
// import Venue from './components/VenueCompany';

import ShowTable from './showTable';
//import CakeCustomer from "./CakeCustomer";
//import EntertainmentCustomer from "./EntertainmentCustomer";
import homeCustomer from './HomeCustomer';
import {Route, Link} from "react-router-dom";
import NavBarCustomer from './NavBarCustomer';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <NavBarCustomer />
                <Route exact path="/" component={homeCustomer} />
                <Route exact path="/foodDisplay" component={Food} />
                <Route exact path="/cakeDisplay" component={Cake} />
                <Route exact path="/entertainmentDisplay" component={Entertainment} />
                <Route exact path="/dressDisplay" component={Dress} />
                {/*<Route exact path="/venueCompany" component={Venue} />*/}


            </div>
        );
    };
}

export default Customer;

