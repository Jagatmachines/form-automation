import * as React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

import DashBoard from './components/dashboard';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import TimeChart from './components/timeChart';
import Borrower from './components/borrower';
import BorrowerProfile2 from './components/borrower2';
import EntryList from './components/entryList';

const RouteComponent =  (props) => {
    const items = [{
        id: 1,
        title: 'Dashboard',
        url: '/'
    }, {
        id: 2,
        title: 'Data List',
        url: '/entryList'
    }, {
        id: 3,
        title: 'Create New Form',
        url: '/timeChart'
    }]

    return (
        <Router>
            <div>
                <NavBar/>
                <div className='container-fluid'>
                    <div className='row'>
                        <SideBar items={items}/>
                        <main className="ml-sm-auto col-9 px-4">
                            <Switch>
                                <Route path="/" exact render={() => <DashBoard items={items}/>} />
                                <Route path="/timeChart" exact render={() => <TimeChart applicantId={props.applicantId} setApplicantId={props.setApplicantId} />} />
                                <Route path="/borrowerProfile" exact render={() => <Borrower applicantId={props.applicantId}/>} />
                                <Route path="/borrowerProfile2" exact component={BorrowerProfile2} />
                                <Route path="/entryList" exact component={EntryList} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default RouteComponent;