import * as React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { entryList } from '../../actions';

class EntryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataList : {}
        }
    }

    componentDidMount() {
        entryList().then((res) => {
            this.setState({
                dataList: res
            });
        }).catch((err) => {
            debugger;
        })
    }

    dataListChanges = () => {
        const { dataList } = this.state;

        const dataItem = Object.keys(dataList);
        let product = [];

        if (dataItem.length) {
            product = dataItem.map((item) => {
                dataList[item].id = item;
                return dataList[item];
            })
        }

        return product;
    }

    expandRow = {
        renderer: (row) => {
            
            const facilitiesKey = Object.keys(row.facilities);
            let facilities = [];

            if (facilitiesKey.length) {
                facilities = facilitiesKey.map((item) => {
                    return (
                        row.facilities[item]
                    )
                })
            }

            return (
                <div>
                    <p>
                        {row.refno ? `Ref No. : ${row.refno}` : ''}<br/>
                        {row.age ? `Age : ${row.age}` : ''} <br/>
                        {row.branchOffice ? `Branch Office : ${row.branchOffice}`: '' }<br/>
                        {row.citizenshipno ? `Citizenship No. : ${row.citizenshipno} ${row.citizenshipdate} from ${row.citizenshipplace}`: '' }<br/>
                        {row.contactnumber ? `Contact No. : ${row.contactnumber} ${row.contacttype}`: '' }<br/>

                        {row.dispatchBranch ? `Dispatch Branch. : ${row.dispatchBranch}`: '' }<br/>
                        {row.doapproval ? `Date of Approval : ${row.doapproval}`: '' }<br/>
                        {row.documentComplete ? `Document Completed on : ${row.documentComplete}`: '' }<br/>
                        {row.fathername ? `Father Name : ${row.fathername}`: '' }<br/>
                        {row.fullName ? `Full Name : ${row.fullName}`: '' }<br/>

                        {row.grandfathername ? `Grand Father's Name : ${row.grandfathername}`: '' }<br/>
                        {row.guarantators ? `Guarantator's Name : ${row.guarantators}`: '' }<br/>
                        {row.natureofProfile ? `Nature of Profile : ${row.natureofProfile}`: '' }<br/>
                        {row.netamount ? `Net Amount : ${row.netamount}`: '' }<br/>

                        {row.netdescription ? `Net Description : ${row.netdescription}`: '' }<br/>
                        {row.occupation ? `Occupation : ${row.occupation}`: '' }<br/>
                        {row.occupationtime ? `Occupation Time : ${row.occupationtime}`: '' }<br/>
                        {row.receiptBranch ? `Receipt Branch : ${row.receiptBranch}`: '' }<br/>
                        {row.receiptCentral ? `Receipt Central : ${row.receiptCentral}`: '' }<br/>
                        {row.recommendApprove ? `Recommend Approval : ${row.recommendApprove}`: '' }<br/>

                        {row.permanentplace ? `Permanent Address : ${row.permanentplace} Issued from ${row.permanentplaceofissued} ${row.permanentvdc} ${row.permanentward}`: '' }<br/>
                        {row.temporaryplace ? `Temporary Address : ${row.temporaryplace} Issued from ${row.temporaryplaceofissued} ${row.temporaryvdc} ${row.temporaryward}`: '' }<br/>
                        
                        {row.totalfunded ? `Total Funded. : ${row.totalfunded}`: '' }<br/>
                        {row.totalnonfunded ? `Total Non-Funded : ${row.totalnonfunded}`: '' }<br/>
                        {row.totalnotexceed ? `Total Not exceed : ${row.totalnotexceed}`: '' }<br/>
                    </p>

                    {facilitiesKey.length ? 
                        facilities.map((item, index) => (
                            <p key={index}>{item.existLimit ? `Existing Limits : ${item.existLimit}` : ''} <br/>
                                {item.facilities ? `Facilities : ${item.facilities}` : ''} <br/>
                                {item.natureProfile ? `Class : ${item.natureProfile}` : ''} <br/>
                                {item.osLimit ? `O/S as of 2073.06.07 : ${item.osLimit}` : ''} <br/>
                                {item.proposedLimit ? `Proposed Limits : ${item.proposedLimit}` : ''} <br/>

                                {item.securityMargin ? `Security/Margin : ${item.securityMargin}` : ''} <br/>
                                {item.pricing ? `Pricing (Minimum) : ${item.pricing}` : ''} <br/>
                            </p>       
                        )) : ''
                    }
                    
                    
                </div>
            )
        }
      };

    render() {
        const products = this.dataListChanges();
        const columns = [{
            dataField: 'refno',
            text: 'Ref No.'
        }, {
            dataField: 'doapproval',
            text: 'Approval'
        }, {
            dataField: 'documentComplete',
            text: 'Document Complete'
        }];

        
      
        return (
            <BootstrapTable 
                keyField='id' 
                data={ products } 
                columns={ columns }
                expandRow={ this.expandRow }
            />
        );
    }
}

export default EntryList;