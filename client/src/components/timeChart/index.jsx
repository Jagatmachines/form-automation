import * as React from 'react';

class TimeChart extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Time Chart</h1>
                </div>

                <div className='col-6 offset-3'>
                    <div className="form-group row">
                        <label htmlFor="receiptBranch" className="col-sm-6 col-form-label">Receipt of proposal at Branch:</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="receiptBranch"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dispatchBranch" className="col-sm-6 col-form-label">Dispatch by Branch:</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="dispatchBranch" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="refno" className="col-sm-6 col-form-label">Ref. No.</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="refno" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="receiptCentral" className="col-sm-6 col-form-label">Receipt at Central Office:</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="receiptCentral" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="documentComplete" className="col-sm-6 col-form-label">Documents Completed on:</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="documentComplete" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="recommendApprove" className="col-sm-6 col-form-label">Recommended for apporval</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="recommendApprove" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="doapproval" className="col-sm-6 col-form-label">Date of Approval</label>
                        <div className="col-sm-6">
                        <input type="date" className="form-control" id="doapproval" />
                        </div>
                    </div>

                    <div className='d-flex flex-row-reverse'>
                        <button className='btn btn-success'>Save</button>
                    </div>
                </div>
            </div>  
        )
    }
}

export default TimeChart;