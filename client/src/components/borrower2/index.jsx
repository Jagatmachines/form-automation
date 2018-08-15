import * as React from 'react';
import { Table, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

class Borrower extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }


    render() {
        const { activeTab } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Borrower Profile Part 2</h1>
                </div>

                <Nav tabs className='mb-4'>
                    <NavItem>
                        <NavLink
                            className={ activeTab === '1' ? 'active' : ''}
                            onClick={() => { this.toggle('1'); }}
                        >
                        Facilities List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={ activeTab === '2' ? 'active' : ''}
                            onClick={() => { this.toggle('2'); }}
                        >
                        Facilities Form
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <div className='form-group row'>
                        <h5 className="col-3">Facilities List</h5>
                    </div>

                    <div className='pb-2 mb-3 border-bottom'>
                        <div className='col-12'>
                            <div className="d-flex flex-row-reverse">
                                <div className="p-2">**Rs. in Millions</div>
                            </div>
                        </div>

                        <Table striped responsive hover bordered>
                            <thead>
                            <tr>
                                <th>Facilities</th>
                                <th>Class</th>
                                <th>Existing Limits</th>
                                <th>Proposed Limits</th>
                                <th>O/S as of 2073.06.07</th>
                                <th>Security/Margin</th>
                                <th>Pricing (Minimum)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                            </tr>

                            <tr>
                                <td className='font-weight-bold'>Total</td>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className='pb-2 mb-3 border-bottom'>
                        <div className="form-group row">
                            <label htmlFor="receiptBranch" className="col-3 col-form-label">Total Funded:</label>
                            <div className="input-group col-8">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                </div>
                                <input type="text" className="form-control col-3" placeholder="Amount"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="receiptBranch" className="col-3 col-form-label">Total Non-funded:</label>
                            <div className="input-group col-8">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                </div>
                                <input type="text" className="form-control col-3" placeholder="Amount"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="receiptBranch" className="col-3 col-form-label">Total not to exceed:</label>
                            <div className="input-group col-8">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                </div>
                                <input type="text" className="form-control col-3" placeholder="Amount"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className='form-group row'>
                            <h5 className="col-3">Facilities Form</h5>
                        </div>

                        <div className='pb-2 mb-3 border-bottom'>
                            <div className="form-group row">
                                <label htmlFor="facilities" className="col-3 col-form-label">Facilities:</label>
                                <div className="col-8">
                                    <input type="text" className="form-control" id="facilities" placeholder='Enter Facilities'/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="natureProfile" className="col-3 col-form-label">Nature of Profile:</label>
                                <div className="col-4">
                                    <select name="" id="natureProfile" className="form-control">
                                        <option value="New">New</option>
                                        <option value="Pass">Pass</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className="d-flex flex-row-reverse">
                                    <div className="p-2">**Rs. in Millions</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="existLimit" className="col-3 col-form-label">Existing Limit:</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" id="existLimit" placeholder='Enter Limit'/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="proposedLimit" className="col-3 col-form-label">Proposed Limit:</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" id="proposedLimit" placeholder='Enter Limit'/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="osLimit" className="col-3 col-form-label">O/S as of 2073.06.07:</label>
                                <div className="col-8">
                                    <input type="number" className="form-control" id="osLimit" placeholder='Enter Limit'/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="securityMargin" className="col-3 col-form-label">Security Margin:</label>
                                <div className="col-8">
                                    <textarea type="number" className="form-control" id="securityMargin" placeholder='Enter Secuirty Margin'/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="securityMargin" className="col-3 col-form-label">Pricing (Minimum):</label>
                                <div className="col-8">
                                    <textarea type="number" className="form-control" id="securityMargin" placeholder='Enter Secuirty Margin'/>
                                </div>
                            </div>

                            <div className='col-8 offset-3'>
                                <button className='btn btn-success'>Save</button>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>

                <div className='d-flex flex-row-reverse pb-2 mb-3'>
                    <button className='btn btn-success'>Save</button>
                </div>
            </div>
        )
    }
}

export default Borrower;