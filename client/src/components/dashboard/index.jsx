import * as React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        const { items } = this.props;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            
        )
    }
}

export default Dashboard;