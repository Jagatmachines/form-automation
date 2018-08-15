import * as React from 'react';

class Borrower extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Borrower Profile Part 1</h1>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row ">
                        <h5 className="col-3">Branch Office</h5>
                        <div className="col-3">
                            <input type="text" className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                </div>
                
                <div className='form-group row'>
                    <h5 className="col-3">Borrower's Profile</h5>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Name:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" id="receiptBranch" placeholder='Full Name'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Age:</label>
                        <div className="col-2">
                            <input type="number" className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Citizenship No:</label>
                        <div className="input-group col-8">
                            <input type="text" className="form-control" placeholder="Number"/>
                            <input type="date" className="form-control" placeholder="Date of Issued"/>
                            <input type="text" className="form-control" placeholder="Place of Issued"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Father's Name:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" id="receiptBranch" placeholder='Full Name'/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Grand Father's Name:</label>
                        <div className="col-8">
                            <input type="text" className="form-control" id="receiptBranch" placeholder='Full Name'/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Permanent Address:</label>
                        <div className="input-group col-8">
                            <input type="text" className="form-control" placeholder="Place"/>
                            <select name="" id="" className="form-control">
                                <option value="Municipality">Municipality</option>
                                <option value="VDC">VDC</option>
                            </select>
                            <input type="number" className="form-control" placeholder="Ward No."/>
                            <input type="text" className="form-control" placeholder="Place of Issued"/>
                            <input type="text" className="form-control" placeholder="District"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Temporary Address:</label>
                        <div className="input-group col-8">
                            <input type="text" className="form-control" placeholder="Place"/>
                            <select name="" id="" className="form-control">
                                <option value="Municipality">Municipality</option>
                                <option value="VDC">VDC</option>
                            </select>
                            <input type="number" className="form-control" placeholder="Ward No."/>
                            <input type="text" className="form-control" placeholder="Place of Issued"/>
                            <input type="text" className="form-control" placeholder="District"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Contact No.:</label>
                        <div className="input-group col-8">
                            <select name="" id="" className="form-control col-2">
                                <option value="Mobile">Mobile</option>
                                <option value="Landline">Landline</option>
                            </select>
                            <input type="tel" className="form-control col-4" placeholder="Contact Number"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Occupation:</label>
                        <div className="col-8">
                            <textarea className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">In the present occupation since:</label>
                        <div className="col-8">
                            <input className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Net Worth:</label>
                        <div className="input-group col-8">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Rs.</span>
                            </div>
                            <input type="text" className="form-control col-3" placeholder="Amount"/>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">/-</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Description"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Guarantators (Relationship):</label>
                        <div className="col-8">
                            <textarea className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                </div>

                <div className='pb-2 mb-3 border-bottom'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-3 col-form-label">Nature of Profile:</label>
                        <div className="col-4">
                            <select name="" id="" className="form-control">
                                <option value="New">New</option>
                                <option value="Review">Review</option>
                                <option value="Renewal">Renewal</option>
                                <option value="Renewal with Enhancement">Renewal with Enhancement</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row-reverse pb-2 mb-3'>
                    <button className='btn btn-success'>Save</button>
                </div>
            </div>
        )
    }
}

export default Borrower;