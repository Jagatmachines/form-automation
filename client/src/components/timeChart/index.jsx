import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { timeChart } from '../../actions';
import { withRouter } from 'react-router-dom';
class TimeChart extends React.Component {
    constructor(props) {
      super(props);  
    }

    onSubmit = async (valueData) => {
        let responseData = ''

        await timeChart(valueData)
        .then((res) => {
            responseData = res;
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

        if (responseData) {
            this.props.setApplicantId(responseData.id);
            this.props.history.push('/borrowerProfile');
        }
    }

    render() {
        const intialValue = {
            receiptBranch: '2008-08-08',
            dispatchBranch: '2008-08-08',
            refno: 20,
            receiptCentral: '2008-08-08',
            documentComplete: '2008-08-08',
            recommendApprove: '2008-08-08',
            doapproval: '2008-08-08'
        }

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Time Chart</h1>
                </div>

                <Form
                    onSubmit={this.onSubmit}
                    initialValues={intialValue}
                    validate={(values) => {
                        const errors = {};

                        if (!values.receiptBranch) {
                            errors.receiptBranch = 'Date Required'
                        }

                        if (!values.dispatchBranch) {
                            errors.dispatchBranch = 'Date Required'
                        }

                        if (!values.refno) {
                            errors.refno = 'Value Required'
                        }

                        if (!values.receiptCentral) {
                            errors.receiptCentral = 'Date Required'
                        }

                        if (!values.documentComplete) {
                            errors.documentComplete = 'Date Required'
                        }

                        if (!values.recommendApprove) {
                            errors.recommendApprove = 'Date Required'
                        }

                        if (!values.doapproval) {
                            errors.doapproval = 'Date Required'
                        }

                        return errors;
                    }}
                    render={({ handleSubmit, reset, submitting , pristine, values, dirtySinceLastSubmit }) => (
                        <form onSubmit={handleSubmit} className='col-7 offset-2'>
                            <Field
                                name="receiptBranch">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="receiptBranch" className="col-sm-6 col-form-label">Receipt of proposal at Branch:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="receiptBranch"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <Field
                                name="dispatchBranch">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="dispatchBranch" className="col-sm-6 col-form-label">Dispatch by Branch:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="dispatchBranch"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <Field
                                name="refno">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="refno" className="col-sm-6 col-form-label">Ref. No.</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="number" className="form-control" id="refno"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <Field
                                name="receiptCentral">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="receiptCentral" className="col-sm-6 col-form-label">Receipt at Central Office:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="receiptCentral"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <Field
                                name="documentComplete">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="documentComplete" className="col-sm-6 col-form-label">Documents Completed on:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="documentComplete"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <Field
                                name="recommendApprove">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="recommendApprove" className="col-sm-6 col-form-label">Recommended for apporval:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="recommendApprove"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>
                            
                            <Field
                                name="doapproval">
                                {({ input, meta }) => (
                                <div className='form-group row'>
                                    <label htmlFor="doapproval" className="col-sm-6 col-form-label">Date of Approval:</label>
                                    <div className="col-sm-6">
                                        <input
                                            {...input}
                                            type="date" className="form-control" id="doapproval"/>
                                        {meta.error && meta.touched && <div>{meta.error}</div>}
                                    </div>
                                </div>
                                )}
                            </Field>

                            <div className='d-flex flex-row-reverse'>
                                <button type="submit" disabled={submitting} className='btn btn-success'>Next</button>
                            </div>
                            
                        </form>
                    )}
                >

                </Form>
            </div>  
        )
    }
}

export default withRouter(TimeChart);