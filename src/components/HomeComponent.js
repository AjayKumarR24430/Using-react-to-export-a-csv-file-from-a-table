import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import {Button} from 'reactstrap';

function Home() {
    const { ExportCSVButton } = CSVExport;

    const columns = [{
    dataField: 'id',
    text: 'Product ID'
    }, {
    dataField: 'name',
    text: 'Product Name'
    }, {
    dataField: 'price',
    text: 'Product Price'
    }];

    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true
      };
    
      const products = [{
        id: 1,
        name:'Charger',
        price: 123
      },{
          id:2,
          name:'Case',
          price:234
      }, {
        id:3,
        name:'PSP',
        price:334
    },{
        id:4,
        name:'Sanitizer',
        price:24
    },{
        id:5,
        name:'Mobile',
        price:564
    },{
        id:6,
        name:'Headphone',
        price:256
    },{
        id:7,
        name:'Speaker',
        price:3467
    },{
        id:8,
        name:'Laptop',
        price:4567
    },{
        id:9,
        name:'Pen drive',
        price:123
    },{
        id:10,
        name:'Bag',
        price:214
    }
    ]

    const MyExportCSV = (props) => {
        const handleClick = () => {
          props.onExport();
        };
        return (
          <div>
            <Button color= "primary" onClick={ handleClick }>Export to CSV</Button>
          </div>
        );
      };

    return(
        <ToolkitProvider
            keyField="id"
            data={ products }
            columns={ columns }
            exportCSV={ { onlyExportSelection: true, exportAll: true } }
            >
                {
                    props => (
                    <div>
                        <MyExportCSV { ...props.csvProps } />
                        <br></br>
                        <BootstrapTable
                        { ...props.baseProps }
                        selectRow={ selectRow }
                        striped = {true}
                        />
                        <br></br>
                    </div>
                    )
                }
        </ToolkitProvider>
    );
}

export default Home;