import * as React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ''
        }
    }

    componentWillMount() {
        this.setState({
            items: this.props.items
        })
    }

    render() {
        const { items } = this.state;

        return (
            <nav className="col-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    {/* <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                        <span data-feather="home"></span>
                        Dashboard <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="file"></span>
                        Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="shopping-cart"></span>
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="users"></span>
                        Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Integrations
                        </a>
                    </li>
                    </ul> */}

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Form Sections</span>
                        <a className="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        {items.map((item) => (
                            <li key={item.id} className="nav-item">
                                <Link className="nav-link" to={item.url}>
                                    <span data-feather="file-text"></span>
                                    {item.title}
                                </Link>
                            </li>
                        ))}                        
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideBar;