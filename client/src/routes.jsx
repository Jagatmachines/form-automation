import * as React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

import DashBoard from './components/dashboard';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import TimeChart from './components/timeChart';
import Borrower from './components/borrower';
import BorrowerProfile2 from './components/borrower2';

const RouteComponent =  () => {
    const items = [{
        id: 1,
        title: 'Dashboard',
        url: '/'
    }, {
        id: 2,
        title: 'Time Chart',
        url: '/timeChart'
    }, {
        id: 3,
        title: 'Borrower Profile Part 1',
        url: '/borrowerProfile'
    }, {
        id: 4,
        title: 'Borrower Profile Part 2',
        url: '/borrowerProfile2'
    }]

    return (
        <Router>
            <div>
                <NavBar/>
                <div className='container-fluid'>
                    <div className='row'>
                        <SideBar items={items}/>
                        <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <Switch>
                                <Route path="/" exact render={() => <DashBoard items={items}/>} />
                                <Route path="/timeChart" exact component={TimeChart} />
                                <Route path="/borrowerProfile" exact component={Borrower} />
                                <Route path="/borrowerProfile2" exact component={BorrowerProfile2} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default RouteComponent;