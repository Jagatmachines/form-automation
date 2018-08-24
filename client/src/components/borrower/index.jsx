import * as React from 'react';
import { Form, Field } from 'react-final-form';

class Borrower extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = async (valueData) => {
        console.log(valueData);
        debugger;
        /* let responseData = ''

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
        } */
    }

    render() {
        const initialValue = {
            branchOffice: 'Kathmandu',
            fullName: 'Prashanna Tuladhar',
            age: 21,
            citizenshipno: '0125',
            citizenshipdate: '2008-08-08',
            citizenshipplace: 'Kathmandu',
            fathername: 'Suresh',
            grandfathername: 'Ramesh',
            
            permanentplace: 'Khusibhu',
            permanentvdc: 'Municipality',
            permanentward: 27,
            permanentplaceofissued: 'Kathmandu',
            
            temporaryplace: 'Khusibhu',
            temporaryvdc: 'Municipality',
            temporaryward: 27,
            temporaryplaceofissued: 'Kathmandu',

            contacttype: 'Landline',
            contactnumber: '014388938',

            occupation: 'Computer Engineer',
            occupationtime: 'Last 19 years (as per the client)',

            netamount: '55990000',
            netdescription: 'As per a:pplicant disclosed in the application CDTCL-2',

            guarantators: 'Mr Ganesh Tuladhar (GrandFather)',
            natureofProfile: 'Review'


            
            

        }

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Borrower Profile Part 1</h1>
                </div>

                <Form
                    onSubmit={this.onSubmit}
                    initialValues={initialValue}
                    validate={(values) => {
                        const errors = {};

                        if (!values.branchOffice) {
                            errors.branchOffice = 'Required'
                        }

                        if (!values.fullName) {
                            errors.fullName = 'Required'
                        }

                        if (!values.age) {
                            errors.age = 'Required'
                        }

                        if (!values.citizenshipno) {
                            errors.citizenshipno = 'Required'
                        }

                        if (!values.citizenshipdate) {
                            errors.citizenshipdate = 'Required'
                        }

                        if (!values.citizenshipplace) {
                            errors.citizenshipplace = 'Required'
                        }



                        return errors;
                    }}
                    render={({ handleSubmit, reset, submitting , pristine, values, dirtySinceLastSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='branchOffice'>
                                    {({ input, meta }) => (
                                    <div className="form-group row ">
                                        <h5 htmlFor='branchOffice' className="col-3">Branch Office</h5>
                                        <div className="col-3">
                                            <input
                                                {...input} 
                                                className="form-control" id="branchOffice"/>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    </div>)}
                                </Field>
                            </div>
                            
                            <div className='form-group row'>
                                <h5 className="col-3">Borrower's Profile</h5>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='fullName'>
                                    {({ input, meta }) => (
                                    <div className="form-group row">
                                        <label htmlFor="fullName" className="col-3 col-form-label">Name:</label>
                                        <div className="col-8">
                                            <input {...input} className="form-control" id="fullName" placeholder='Full Name'/>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    </div>)}
                                </Field>

                                <Field
                                    name='age'>
                                    {({ input, meta }) => (
                                    <div className="form-group row">
                                        <label htmlFor="age" className="col-3 col-form-label">Age:</label>
                                        <div className="col-8">
                                            <input {...input} type="number" className="form-control" id="age"/>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    </div>)}
                                </Field>

                                

                                <div className="form-group row">
                                    <label htmlFor="citizenship" className="col-3 col-form-label">Citizenship No:</label>
                                    <div className="input-group col-8">
                                        <Field
                                            name='citizenshipno'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="citizenshipno" placeholder="Number"/>
                                            )}
                                        </Field>
                                        <Field
                                            name='citizenshipdate'>
                                            {({ input, meta }) => (
                                                <input {...input} type="date" className="form-control" id="citizenshipdate" placeholder="Date of Issued"/>
                                            )}
                                        </Field>
                                        <Field
                                            name='citizenshipplace'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="citizenshipplace" placeholder="Place of Issued"/>
                                             )}
                                        </Field>
                                    </div>
                                </div>

                                <Field
                                    name='fathername'>
                                    {({ input, meta }) => (
                                    <div className="form-group row">
                                        <label htmlFor="fathername" className="col-3 col-form-label">Father's Name:</label>
                                        <div className="col-8">
                                            <input {...input} type="text" className="form-control" id="fathername" placeholder='Full Name'/>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    </div>)}
                                </Field>

                                <Field
                                    name='grandfathername'>
                                    {({ input, meta }) => (
                                    <div className="form-group row">
                                        <label htmlFor="fathername" className="col-3 col-form-label">Grand Father's Name:</label>
                                        <div className="col-8">
                                            <input {...input} type="text" className="form-control" id="grandfathername" placeholder='Full Name'/>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    </div>)}
                                </Field>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <div className="form-group row">
                                    <label htmlFor="permanentAddress" className="col-3 col-form-label">Permanent Address:</label>
                                    <div className="input-group col-8">
                                        <Field
                                            name='permanentplace'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="permanentplace" placeholder='Place'/>)}
                                        </Field>

                                        <Field
                                            name='permanentvdc'>
                                            {({ input, meta }) => (
                                                <select
                                                    {...input}
                                                    className="form-control"
                                                    id="permanentvdc">
                                                    <option value="Municipality">Municipality</option>
                                                    <option value="VDC">VDC</option>
                                                </select>
                                            )}
                                        </Field>

                                        <Field
                                            name='permanentward'>
                                            {({ input, meta }) => (
                                            <input {...input} type="number" className="form-control" id="permanentward" placeholder='Ward No.'/>)}
                                        </Field>

                                        <Field
                                            name='permanentplaceofissued'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="permanentplaceofissued" placeholder='District'/>)}
                                        </Field>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="temporaryAddress" className="col-3 col-form-label">Temporary Address:</label>
                                    <div className="input-group col-8">
                                        <Field
                                            name='temporaryplace'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="temporaryplace" placeholder='Place'/>)}
                                        </Field>

                                        <Field
                                            name='temporaryvdc'>
                                            {({ input, meta }) => (
                                                <select
                                                    {...input}
                                                    className="form-control"
                                                    id="temporaryvdc">
                                                    <option value="Municipality">Municipality</option>
                                                    <option value="VDC">VDC</option>
                                                </select>
                                            )}
                                        </Field>

                                        <Field
                                            name='temporaryward'>
                                            {({ input, meta }) => (
                                            <input {...input} type="number" className="form-control" id="temporaryward" placeholder='Ward No.'/>)}
                                        </Field>
                                    
                                        <Field
                                            name='temporaryplaceofissued'>
                                            {({ input, meta }) => (
                                            <input {...input} type="text" className="form-control" id="temporaryplaceofissued" placeholder='District'/>)}
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <div className="form-group row">
                                    <label htmlFor="contactno" className="col-3 col-form-label">Contact No.:</label>
                                    <div className="input-group col-8">
                                        <Field
                                            name='contacttype'>
                                            {({ input, meta }) => (
                                                <select
                                                    {...input}
                                                    className="form-control col-3"
                                                    id="contacttype">
                                                    <option value="Mobile">Mobile</option>
                                                    <option value="Landline">Landline</option>
                                                </select>
                                            )}
                                        </Field>

                                        <Field
                                            name='contactnumber'>
                                            {({ input, meta }) => (
                                            <input {...input} type="tel" className="form-control col-4" id="contactnumber" placeholder="Contact Number"/>)}
                                        </Field>
                                
                                    </div>
                                </div>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='occupation'>
                                    {({ input, meta }) => (
                                        <div className="form-group row">
                                            <label htmlFor="occupation" className="col-3 col-form-label">Occupation:</label>
                                            <div className="col-8">
                                                <textarea {...input} className="form-control" id="occupation"/>
                                                {meta.error && meta.touched && <div>{meta.error}</div>}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='occupationtime'>
                                    {({ input, meta }) => (
                                        <div className="form-group row">
                                            <label htmlFor="occupationtime" className="col-3 col-form-label">In the present occupation since:</label>
                                            <div className="col-8">
                                                <input {...input} className="form-control" id="occupationtime"/>
                                                {meta.error && meta.touched && <div>{meta.error}</div>}
                                            </div>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <div className="form-group row">
                                    <label htmlFor="networth" className="col-3 col-form-label">Net Worth:</label>
                                    <div className="input-group col-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Rs.</span>
                                        </div>
                                        <Field
                                            name='netamount'>
                                            {({ input, meta }) => (
                                                <input {...input} type="text" id='netamount' className="form-control col-3" placeholder="Amount"/>
                                            )}
                                        </Field>

                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">/-</span>
                                        </div>
                                        <Field
                                            name='netdescription'>
                                            {({ input, meta }) => (
                                                <input type="text" {...input} className="form-control" id='netdescription' placeholder="Description"/>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='guarantators'>
                                    {({ input, meta }) => (
                                        <div className="form-group row">
                                            <label htmlFor="guarantators" className="col-3 col-form-label">Guarantators (Relationship):</label>
                                            <div className="col-8">
                                                <textarea {...input} className="form-control" id="guarantators"/>
                                            </div>
                                            {meta.error && meta.touched && <div>{meta.error}</div>}
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className='pb-2 mb-3 border-bottom'>
                                <Field
                                    name='natureofProfile'>
                                    {({ input, meta }) => (
                                        <div className="form-group row">
                                            <label htmlFor="receiptBranch" className="col-3 col-form-label">Nature of Profile:</label>
                                            <div className="col-4">
                                                <select
                                                    {...input}
                                                    className="form-control"
                                                    id="natureofProfile">
                                                    <option value="New">New</option>
                                                    <option value="Review">Review</option>
                                                    <option value="Renewal">Renewal</option>
                                                    <option value="Renewal with Enhancement">Renewal with Enhancement</option>
                                                </select>
                                                {meta.error && meta.touched && <div>{meta.error}</div>}
                                            </div>
                                        </div>
                                        
                                    )}
                                </Field>
                            </div>

                            <div className='d-flex flex-row-reverse pb-2 mb-3'>
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

export default Borrower;