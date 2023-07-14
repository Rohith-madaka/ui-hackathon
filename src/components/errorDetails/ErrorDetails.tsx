import {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import {createJira} from "../../services/errorService.ts";
import {Button, Card, Table} from "react-bootstrap";
import SidePanel from "../SidePanel.tsx";

const ErrorDetails = () => {
    const [openPanel, setOpenPanel] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);

    const handleClose = () => setOpenPanel(false);

    const handleRowClick = ({data}) => {
        setOpenPanel(true);
        setSelectedRowData(data);
    }

    const MoreErrorDetails = () => {
        const data = selectedRowData;
        return (
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Make</td>
                    <td>{data.make}</td>
                </tr>
                <tr>
                    <td>Model</td>
                    <td>{data.model}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td >{data.price}</td>
                </tr>
                <tr>
                    <td>Jira</td>
                    <td >{data.jiraId}</td>
                </tr>
                </tbody>
            </Table>
        );
    }
    const JiraAction = ({data}) => {
        if (data.jiraId) {
            return data.jiraId
        }
        return (
            <Button
                onClick={createJira}
                variant='primary'
                size='sm'
            >Create Jira
            </Button>
        )
    }

    const [rowData] = useState([
        {exceptionSummary: "Toyota", model: "Celica", price: 35000},
        {exceptionSummary: "Ford", model: "Mondeo", price: 32000},
        {exceptionSummary: "Porsche", model: "Boxster", price: 72000, jiraId: 12}
    ]);

    const [columnDefs] = useState([
        { field: 'exceptionSummary', headerName: 'Exception Summary' },
        { field: 'model' },
        { field: 'price' },
        {
            field: 'jiraId',
            cellRendererFramework: JiraAction
        }
    ]);

    return (
        <div>
            <h5>Error Details</h5>
            <Card>
                <div className="ag-theme-alpine-dark" style={{height: 588, maxWidth: 1200, color:"red"}}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        onRowClicked={handleRowClick}
                    >
                    </AgGridReact>
                </div>
            </Card>

            {openPanel && selectedRowData && (
                <SidePanel title='Details' openPanel={openPanel} handleClose={handleClose}>
                    <MoreErrorDetails />
                </SidePanel>
            )}
        </div>
    )
}

export default ErrorDetails;