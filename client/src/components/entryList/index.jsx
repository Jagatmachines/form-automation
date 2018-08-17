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
                console.log(dataList[item]);
                return dataList[item];
            })
        }

        return product;
    }

    render() {
        const products = this.dataListChanges();
        const columns = [{
            dataField: 'dispatchBranch',
            text: 'Dispatch Branch'
        }, {
            dataField: 'doapproval',
            text: 'Approval'
        }, {
            dataField: 'documentComplete',
            text: 'Document Complete'
        }];

        
      
        return (
            <BootstrapTable keyField='id' data={ products } columns={ columns } />
        );
    }
}

export default EntryList;