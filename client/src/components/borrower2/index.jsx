import * as React from 'react';
import { Table, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Form, Field } from 'react-final-form';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import PdfDropzone from '../dropzone';
import { totalFundCollection, putFacilitiesForm, getFacilitiesForm } from '../../actions';

class Borrower extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            scanModal: false,
            facilitiesList: []
        };
    }

    componentWillMount() {
        this.getFacilitiesFormData();
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }

        if (tab == '1') {
            this.getFacilitiesFormData();
        }
    }

    getFacilitiesFormData = () => {
        getFacilitiesForm(this.props.applicantId).then((data) => {
            const facilitiesList = Object.values(data);
            this.setState({
                facilitiesList
            })
        })
    }

    modalToggle = () => {
        this.setState({
            scanModal: !this.state.scanModal
        })
    }

    imageDetails = () => {}

    onSubmitTotalFundCollection = async (valueData) => {
        await totalFundCollection(valueData, this.props.applicantId)
        .then((res) => {
            // this.props.history.push('/borrowerProfile2');
        }).catch((err) => {
            console.log(err)
        })
    }

    onSubmitFacilitiesForm = async (valueData) => {
        await putFacilitiesForm(valueData, this.props.applicantId)
        .then((res) => {
            // this.props.history.push('/borrowerProfile2');
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { activeTab, scanModal, facilitiesList } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Borrower Profile Part 2</h1>
                    <button className='btn' onClick={this.modalToggle}>Scan Doc</button>
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
                                {facilitiesList.map((facility) => {
                                    return (
                                        <tr key={facility.facilities}>
                                            <td>{facility.facilities}</td>
                                            <td>{facility.natureProfile}</td>
                                            <td>{facility.existLimit}</td>
                                            <td>{facility.proposedLimit}</td>
                                            <td>{facility.osLimit}</td>
                                            <td>{facility.securityMargin}</td>
                                            <td>{facility.pricing}</td>
                                        </tr>
                                    )
                                })}

                            {/* <tr>
                                <td className='font-weight-bold'>Total</td>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td></td>
                                <td></td>
                            </tr> */}
                            </tbody>
                        </Table>
                    </div>

                    <Form
                        onSubmit={this.onSubmitTotalFundCollection}
                        render={({ handleSubmit, reset, submitting , pristine, values, dirtySinceLastSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='pb-2 mb-3 border-bottom'>
                                    <Field
                                        name='totalfunded'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="totalfunded" className="col-3 col-form-label">Total Funded:</label>
                                            <div className="input-group col-8">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                                </div>
                                                <input {...input} id='totalfunded' className="form-control col-3" placeholder="Amount"/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                                </div>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='totalnonfunded'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="totalnonfunded" className="col-3 col-form-label">Total Non-funded:</label>
                                            <div className="input-group col-8">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                                </div>
                                                <input {...input} id='totalnonfunded' className="form-control col-3" placeholder="Amount"/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                                </div>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='totalnotexceed'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="receiptBranch" className="col-3 col-form-label">Total not to exceed:</label>
                                            <div className="input-group col-8">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">Rs.</span>
                                                </div>
                                                <input {...input} id='totalnotexceed' type="text" className="form-control col-3" placeholder="Amount"/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">millions</span>
                                                </div>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>
                                </div>

                                <div className='d-flex flex-row-reverse pb-2 mb-3'>
                                    <button type='submit' className='btn btn-success'>Save</button>
                                </div>
                            </form>
                        )}/>

                    
                    </TabPane>
                    <TabPane tabId="2">
                        <div className='form-group row'>
                            <h5 className="col-3">Facilities Form</h5>
                        </div>

                        <Form
                            onSubmit={this.onSubmitFacilitiesForm}
                            render={({ handleSubmit, reset, submitting , pristine, values, dirtySinceLastSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='pb-2 mb-3 border-bottom'>
                                    <Field
                                        name='facilities'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="facilities" className="col-3 col-form-label">Facilities:</label>
                                            <div className="col-8">
                                                <input id='facilities' {...input} className="form-control" placeholder='Enter Facilities'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='natureProfile'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="natureProfile" className="col-3 col-form-label">Nature of Profile:</label>
                                            <div className="col-4">
                                                <select {...input} id="natureProfile" className="form-control">
                                                    <option value="New">New</option>
                                                    <option value="Pass">Pass</option>
                                                </select>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <div className='col-12'>
                                        <div className="d-flex flex-row-reverse">
                                            <div className="p-2">**Rs. in Millions</div>
                                        </div>
                                    </div>

                                    <Field
                                        name='existLimit'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="existLimit" className="col-3 col-form-label">Existing Limit:</label>
                                            <div className="col-8">
                                                <input {...input} id='existLimit' type="number" className="form-control" placeholder='Enter Limit'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='proposedLimit'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="proposedLimit" className="col-3 col-form-label">Proposed Limit:</label>
                                            <div className="col-8">
                                                <input {...input} id='proposedLimit' type="number" className="form-control" placeholder='Enter Limit'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='osLimit'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="osLimit" className="col-3 col-form-label">O/S as of 2073.06.07:</label>
                                            <div className="col-8">
                                                <input {...input} id='osLimit' type="number" className="form-control" placeholder='Enter Limit'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='securityMargin'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="securityMargin" className="col-3 col-form-label">Security Margin:</label>
                                            <div className="col-8">
                                                <textarea {...input} type="number" className="form-control" id="securityMargin" placeholder='Enter Secuirty Margin'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <Field
                                        name='pricing'>
                                        {({ input, meta }) => (
                                        <div className="form-group row ">
                                            <label htmlFor="pricing" className="col-3 col-form-label">Pricing (Minimum):</label>
                                            <div className="col-8">
                                                <textarea id='pricing' {...input} type="number" className="form-control" placeholder='Enter Secuirty Margin'/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>)}
                                    </Field>

                                    <div className='col-8 offset-3'>
                                        <button type='submit' className='btn btn-success'>Save</button>
                                    </div>
                                </div>
                            </form>
                        )}
                        />
                    </TabPane>
                </TabContent>

                <Modal isOpen={scanModal} toggle={this.modalToggle} backdrop='static' >
                    <ModalHeader toggle={this.modalToggle}>Scan Doc</ModalHeader>
                    <ModalBody>
                    <PdfDropzone fileResponse={this.imageDetails}/>
                        
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        )
    }
}

export default Borrower;